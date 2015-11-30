(ns app
  (:require-macros
    [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require
    [cljs.core.async :as async :refer (<! >! put! chan)]
    [taoensso.sente :as sente :refer (cb-success?)] ;
    ))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! "/chsk" ; Path to ChannelSocket
      {:type :auto})]
  (def chsk chsk)
  (def ch-chsk ch-recv) ; Receive Channel
  (def chsk-send! send-fn) ; Send API function
  (def chsck-state state) ; Watchable read-only atom of current state
  )

  (let [c (.. js/document (createElement "DIV"))]
    (aset c "innerHTML" "<p>i'm dynamically created wooh!!</p>")
    (.. js/document (getElementById "ballot") (appendChild c)))