(ns vote-simple.config
  (:require [taoensso.timbre :as timbre]))

(def defaults
  {:init
   (fn []
     (timbre/info "\n-=[vote-simple started successfully]=-"))
   :middleware identity})
