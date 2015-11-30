(ns vote-simple.config
  (:require [selmer.parser :as parser]
            [taoensso.timbre :as timbre]
            [vote-simple.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (timbre/info "\n-=[vote-simple started successfully using the development profile]=-"))
   :middleware wrap-dev})
