(ns vote-simple.routes.home
  (use
    org.httpkit.server
    (hiccup core page form))
  (:require
            [compojure.core          :refer [defroutes GET POST]]
            [ring.util.http-response :refer [ok]]
            [ring.util.response      :refer [redirect]]
            [vote-simple.db.core  :as db]
            [vote-simple.layout   :as layout]
            [clojure.java.io      :as io]
            [bouncer.core         :as b]
            [bouncer.validators   :as v]
            [clojure.core :as c]
            [clojure.core.async   :as async :refer (<! <!! >! >!! put! chan go go-loop)]
            [taoensso.encore      :as encore :refer ()]
            [taoensso.timbre      :as timbre :refer (tracef debugf infof warnf errorf)]
            [taoensso.sente       :as sente]
            [org.httpkit.server   :as http-kit]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]
            [clojure.string :as string]
            ))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's Send API function
  (def connected-uids connected-uids)) ; Watchable, read-only atom containing client id's

(defn select-values [m ks]
  (reduce #(if-let [v (m %2)] (conj %1 v) %1) [] ks))

(defn validate-ballot [params]
  (first
    (b/validate
      params
      :title v/required
      :candidates v/required)))

(def blank-val?
  (fn
    [item]
    (string/blank? (apply str item))))

(defn save-ballot! [{:keys [params]}]
  (if-let [errors (validate-ballot params)]
    (-> (redirect "/admin")
        (assoc :flash (assoc params :errors errors)))
    (do
      (binding [*out* *err*]
        (println (db/get-ballot)))
      (assoc params :candidates (apply str (interpose "," (get params :candidates)))
      (binding [*out* *err*](println params))
      (db/set-ballot!
        (assoc params :candidates (apply str (interpose "," (get params :candidates))))))
      (redirect "/"))))

(defn home-page [{:keys [flash]}]
  (layout/render
    "home.html"
    (merge {:ballot (doall (db/get-ballot))}
           (select-keys flash [:title :candidates :errors]))
    (binding [*out* *err*]
      (println :ballot))))

(def login-form
  [:div {:class "row"}
   [:div {:class "columns small-12"}
    [:h3 "Login"]
    [:div {:class "row"}
     [:form {:method "POST" :action "login" :class "columns small-4"}
      [:div "Username" [:input {:type "text" :name "username"}]]
      [:div "Password" [:input {:type "password" :name "password"}]]
      [:div [:input {:type "submit" :class "button" :value "Login"}]]]]]])

(def admin-form
   [:div
    [:div {:ng-app "project"}
     (include-js "js/angular.min.js")
     (include-js "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-route.js")
     (include-js "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-resource.min.js")
     (include-js "js/vote.js")
     (include-js "js/voteService.js")
     [:div {:ng-view ""}]

     ]])

(defn base-layout []
  "HTML page rendered using Hiccup. Js used for websockets"
  (html
    [:head]
    [:body
     [:meta {:http-equiv "Content-Type", :content "text/html; charset=UTF-8"}]
     [:meta {:name "viewport", :content "width=device-width, initial-scale=1"}]
     [:title "Welcome to vote-simple"]
     [:div {:id "navbar"}
      [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
       [:div {:class "container"}
        [:div {:class "navbar-header"}
         [:button {:class "navbar-toggle", :data-target "#app-navbar", :data-toggle "collapse", :aria-expanded "false", :aria-controls "navbar"}
          [:span {:class "sr-only"} "Toggle Navigation"]
          [:span {:class "icon-bar"}]
          [:span {:class "icon-bar"}]
          [:span {:class "icon-bar"}] ]
         [:a {:href "{{servlet-context}}/", :class "navbar-brand"} "vote-simple"] ]
        [:div {:id "app-navbar", :class "navbar-collapse collapse"}
         ] ] ] ] ]
[:div {:class "container"} ])
    )

(defn admin-page [{:keys [flash]}]
  (layout/render
    "admin.html"
    (merge {:ballot (db/get-ballot)}
    (select-keys flash [:title :candidates :errors]))))

(defn about-page []
  (layout/render "about.html"))

(defn do-stuff [{:keys [params]}]
          (print params))

(defroutes home-routes
  (GET "/" req (home-page req) )
  (GET "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post req))
  (GET "/about" [] (about-page))
  (GET "/admin" req (admin-page req))
  (POST "/admin" req (binding [*out* *err*]
                                  (println req))(save-ballot! req)(redirect "/admin")))
