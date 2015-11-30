// Compiled by ClojureScript 1.7.170 {}
goog.provide('app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.sente');
var map__10486_10488 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492)], null));
var map__10486_10489__$1 = ((((!((map__10486_10488 == null)))?((((map__10486_10488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10486_10488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10486_10488):map__10486_10488);
var chsk_10490 = cljs.core.get.call(null,map__10486_10489__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_10491 = cljs.core.get.call(null,map__10486_10489__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_10492 = cljs.core.get.call(null,map__10486_10489__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_10493 = cljs.core.get.call(null,map__10486_10489__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
app.chsk = chsk_10490;

app.ch_chsk = ch_recv_10491;

app.chsk_send_BANG_ = send_fn_10492;

app.chsck_state = state_10493;
var c_10494 = document.createElement("DIV");
(c_10494["innerHTML"] = "<p>i'm dynamically created wooh!!</p>");

document.getElementById("ballot").appendChild(c_10494);

//# sourceMappingURL=app.js.map