// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('taoensso.sente.interfaces');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('clojure.string');
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__27759 = x;
var ev_id = cljs.core.nth.call(null,vec__27759,(0),null);
var _ = cljs.core.nth.call(null,vec__27759,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4425__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4425__auto__)){
var _QMARK_err = temp__4425__auto__;
var err_fmt = [cljs.core.str((function (){var G__27761 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__27761) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__4119__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__4119__auto__){
var and__4119__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__4119__auto____$1)){
var map__27765 = x;
var map__27765__$1 = ((((!((map__27765 == null)))?((((map__27765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27765):map__27765);
var ch_recv = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__27765__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__4119__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__4119__auto____$2)){
var and__4119__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__4119__auto____$3){
var and__4119__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__4119__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__4119__auto____$4;
}
} else {
return and__4119__auto____$3;
}
} else {
return and__4119__auto____$2;
}
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,taoensso.encore.hcond.call(null,false,"taoensso.sente",178,(new cljs.core.Delay((function (){
return pstr;
}),null)),new cljs.core.Symbol(null,"pstr","pstr",221763868,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null)));
}catch (e27768){var t = e27768;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (t){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
});})(t))
,null)),null);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(var_args){
var args27769 = [];
var len__5189__auto___27772 = arguments.length;
var i__5190__auto___27773 = (0);
while(true){
if((i__5190__auto___27773 < len__5189__auto___27772)){
args27769.push((arguments[i__5190__auto___27773]));

var G__27774 = (i__5190__auto___27773 + (1));
i__5190__auto___27773 = G__27774;
continue;
} else {
}
break;
}

var G__27771 = args27769.length;
switch (G__27771) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27769.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27777 = arguments.length;
var i__5190__auto___27778 = (0);
while(true){
if((i__5190__auto___27778 < len__5189__auto___27777)){
args__5196__auto__.push((arguments[i__5190__auto___27778]));

var G__27779 = (i__5190__auto___27778 + (1));
i__5190__auto___27778 = G__27779;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (pstr){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing: %s -> %s",args,pstr], null);
});})(pstr))
,null)),null);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq27776){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27776));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return prefixed_pstr;
}),null)),new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null),cljs.core.string_QMARK_,new cljs.core.Symbol(null,"string?","string?",-1129175764,null));


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__27783 = prefix;
switch (G__27783) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__27782 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__27782,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__27782,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (prefix,pstr,clj,wrapped_QMARK_,vec__27782,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
});})(prefix,pstr,clj,wrapped_QMARK_,vec__27782,clj__$1,_QMARK_cb_uuid,_QMARK_cb_uuid__$1))
,null)),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__4786__auto__ = (((chsk == null))?null:chsk);
var m__4787__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,chsk);
} else {
var m__4787__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__4786__auto__ = (((chsk == null))?null:chsk);
var m__4787__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,chsk);
} else {
var m__4787__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__4786__auto__ = (((chsk == null))?null:chsk);
var m__4787__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,chsk);
} else {
var m__4787__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,chsk);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((!((chsk == null))) && (!((chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 == null)))){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__4786__auto__ = (((chsk == null))?null:chsk);
var m__4787__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,chsk,ev,opts);
} else {
var m__4787__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,chsk,ev,opts);
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var args27785 = [];
var len__5189__auto___27788 = arguments.length;
var i__5190__auto___27789 = (0);
while(true){
if((i__5190__auto___27789 < len__5189__auto___27788)){
args27785.push((arguments[i__5190__auto___27789]));

var G__27790 = (i__5190__auto___27789 + (1));
i__5190__auto___27789 = G__27790;
continue;
} else {
}
break;
}

var G__27787 = args27785.length;
switch (G__27787) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27785.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__4131__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__4131__auto__ = (_QMARK_cb == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4425__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto__)){
var cb_uuid = temp__4425__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4425__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4425__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__27792,merge_state){
var map__27796 = p__27792;
var map__27796__$1 = ((((!((map__27796 == null)))?((((map__27796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27796):map__27796);
var chsk = map__27796__$1;
var chs = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__27796__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__27798 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__27796,map__27796__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__4119__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__4119__auto__)){
var and__4119__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__4119__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__27796,map__27796__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__27798,(0),null);
var new_state = cljs.core.nth.call(null,vec__27798,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay((function (){
return _QMARK_cb;
}),null)),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null),taoensso.encore.chan_QMARK_,new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null));


taoensso.sente.assert_event.call(null,ev);

var vec__27800 = ev;
var ev_id = cljs.core.nth.call(null,vec__27800,(0),null);
var _ = cljs.core.nth.call(null,vec__27800,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__27800,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__27800,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null);

var buffered_evs = taoensso.encore.hcond.call(null,false,"taoensso.sente",706,(new cljs.core.Delay((function (){
return clj;
}),null)),new cljs.core.Symbol(null,"clj","clj",980036099,null),cljs.core.vector_QMARK_,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null));
var seq__27805 = cljs.core.seq.call(null,buffered_evs);
var chunk__27806 = null;
var count__27807 = (0);
var i__27808 = (0);
while(true){
if((i__27808 < count__27807)){
var ev = cljs.core._nth.call(null,chunk__27806,i__27808);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__27809 = seq__27805;
var G__27810 = chunk__27806;
var G__27811 = count__27807;
var G__27812 = (i__27808 + (1));
seq__27805 = G__27809;
chunk__27806 = G__27810;
count__27807 = G__27811;
i__27808 = G__27812;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27805);
if(temp__4425__auto__){
var seq__27805__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27805__$1)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,seq__27805__$1);
var G__27813 = cljs.core.chunk_rest.call(null,seq__27805__$1);
var G__27814 = c__4934__auto__;
var G__27815 = cljs.core.count.call(null,c__4934__auto__);
var G__27816 = (0);
seq__27805 = G__27813;
chunk__27806 = G__27814;
count__27807 = G__27815;
i__27808 = G__27816;
continue;
} else {
var ev = cljs.core.first.call(null,seq__27805__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__27817 = cljs.core.next.call(null,seq__27805__$1);
var G__27818 = null;
var G__27819 = (0);
var G__27820 = (0);
seq__27805 = G__27817;
chunk__27806 = G__27818;
count__27807 = G__27819;
i__27808 = G__27820;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj], null);
});})(handshake_QMARK_))
,null)),null);

if(handshake_QMARK_){
var vec__27823 = clj;
var _ = cljs.core.nth.call(null,vec__27823,(0),null);
var vec__27824 = cljs.core.nth.call(null,vec__27823,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__27824,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__27824,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__27824,(2),null);
var handshake_ev = vec__27823;
if(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token)){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__27823,_,vec__27824,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SECURITY WARNING: no CSRF token available for use by Sente"], null);
});})(vec__27823,_,vec__27824,_QMARK_uid,_QMARK_csrf_token,_QMARK_handshake_data,handshake_ev,handshake_QMARK_))
,null)),null);
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27830 = arguments.length;
var i__5190__auto___27831 = (0);
while(true){
if((i__5190__auto___27831 < len__5189__auto___27830)){
args__5196__auto__.push((arguments[i__5190__auto___27831]));

var G__27832 = (i__5190__auto___27831 + (1));
i__5190__auto___27831 = G__27832;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,nattempt,p__27828){
var vec__27829 = p__27828;
var backoff_ms_fn = cljs.core.nth.call(null,vec__27829,(0),null);
var timeout_ms = backoff_ms_fn.call(null,(function (){var or__4131__auto__ = nattempt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());
return window.setTimeout(nullary_f,timeout_ms);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq27825){
var G__27826 = cljs.core.first.call(null,seq27825);
var seq27825__$1 = cljs.core.next.call(null,seq27825);
var G__27827 = cljs.core.first.call(null,seq27825__$1);
var seq27825__$2 = cljs.core.next.call(null,seq27825__$1);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27826,G__27827,seq27825__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4745__auto__,k__4746__auto__){
var self__ = this;
var this__4745__auto____$1 = this;
return cljs.core._lookup.call(null,this__4745__auto____$1,k__4746__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4747__auto__,k27834,else__4748__auto__){
var self__ = this;
var this__4747__auto____$1 = this;
var G__27836 = (((k27834 instanceof cljs.core.Keyword))?k27834.fqn:null);
switch (G__27836) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27834,else__4748__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4759__auto__,writer__4760__auto__,opts__4761__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
var pr_pair__4762__auto__ = ((function (this__4759__auto____$1){
return (function (keyval__4763__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,cljs.core.pr_writer,""," ","",opts__4761__auto__,keyval__4763__auto__);
});})(this__4759__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,pr_pair__4762__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27833){
var self__ = this;
var G__27833__$1 = this;
return (new cljs.core.RecordIter((0),G__27833__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4743__auto__){
var self__ = this;
var this__4743__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4739__auto__){
var self__ = this;
var this__4739__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (12 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4740__auto__){
var self__ = this;
var this__4740__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if(!((h__4566__auto__ == null))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = cljs.core.hash_imap.call(null,this__4740__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4741__auto__,other__4742__auto__){
var self__ = this;
var this__4741__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4119__auto__ = other__4742__auto__;
if(cljs.core.truth_(and__4119__auto__)){
var and__4119__auto____$1 = (this__4741__auto____$1.constructor === other__4742__auto__.constructor);
if(and__4119__auto____$1){
return cljs.core.equiv_map.call(null,this__4741__auto____$1,other__4742__auto__);
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4755__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4754__auto____$1),self__.__meta),k__4755__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4755__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4752__auto__,k__4753__auto__,G__27833){
var self__ = this;
var this__4752__auto____$1 = this;
var pred__27837 = cljs.core.keyword_identical_QMARK_;
var expr__27838 = k__4753__auto__;
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__27838))){
return (new taoensso.sente.ChWebSocket(G__27833,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__27833,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__27833,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__27833,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__27833,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__27833,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__27833,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__27833,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__27833,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__27833,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__27833,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27837.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__27838))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__27833,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4753__auto__,G__27833),null));
}
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4757__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4744__auto__,G__27833){
var self__ = this;
var this__4744__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.backoff_ms_fn,G__27833,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4750__auto__,entry__4751__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4751__auto__)){
return cljs.core._assoc.call(null,this__4750__auto____$1,cljs.core._nth.call(null,entry__4751__auto__,(0)),cljs.core._nth.call(null,entry__4751__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4750__auto____$1,entry__4751__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__27840){
var self__ = this;
var map__27841 = p__27840;
var map__27841__$1 = ((((!((map__27841 == null)))?((((map__27841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27841):map__27841);
var opts = map__27841__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__27841__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4425__auto___27875 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___27875)){
var cb_uuid_27876 = temp__4425__auto___27875;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_27876], null),taoensso.encore.hcond.call(null,false,"taoensso.sente",772,(new cljs.core.Delay(((function (cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)));

var temp__4425__auto___27877__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4425__auto___27877__$1)){
var timeout_ms_27878 = temp__4425__auto___27877__$1;
var c__10627__auto___27879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_27853){
var state_val_27854 = (state_27853[(1)]);
if((state_val_27854 === (1))){
var inst_27843 = cljs.core.async.timeout.call(null,timeout_ms_27878);
var state_27853__$1 = state_27853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27853__$1,(2),inst_27843);
} else {
if((state_val_27854 === (2))){
var inst_27846 = (state_27853[(7)]);
var inst_27845 = (state_27853[(2)]);
var inst_27846__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_27853__$1 = (function (){var statearr_27855 = state_27853;
(statearr_27855[(7)] = inst_27846__$1);

(statearr_27855[(8)] = inst_27845);

return statearr_27855;
})();
if(cljs.core.truth_(inst_27846__$1)){
var statearr_27856_27880 = state_27853__$1;
(statearr_27856_27880[(1)] = (3));

} else {
var statearr_27857_27881 = state_27853__$1;
(statearr_27857_27881[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (3))){
var inst_27846 = (state_27853[(7)]);
var inst_27848 = inst_27846.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_27853__$1 = state_27853;
var statearr_27858_27882 = state_27853__$1;
(statearr_27858_27882[(2)] = inst_27848);

(statearr_27858_27882[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (4))){
var state_27853__$1 = state_27853;
var statearr_27859_27883 = state_27853__$1;
(statearr_27859_27883[(2)] = null);

(statearr_27859_27883[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27854 === (5))){
var inst_27851 = (state_27853[(2)]);
var state_27853__$1 = state_27853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27853__$1,inst_27851);
} else {
return null;
}
}
}
}
}
});})(c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__10515__auto__,c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__10516__auto__ = null;
var taoensso$sente$state_machine__10516__auto____0 = (function (){
var statearr_27863 = [null,null,null,null,null,null,null,null,null];
(statearr_27863[(0)] = taoensso$sente$state_machine__10516__auto__);

(statearr_27863[(1)] = (1));

return statearr_27863;
});
var taoensso$sente$state_machine__10516__auto____1 = (function (state_27853){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_27853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e27864){if((e27864 instanceof Object)){
var ex__10519__auto__ = e27864;
var statearr_27865_27884 = state_27853;
(statearr_27865_27884[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27885 = state_27853;
state_27853 = G__27885;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
taoensso$sente$state_machine__10516__auto__ = function(state_27853){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10516__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10516__auto____1.call(this,state_27853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10516__auto____0;
taoensso$sente$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10516__auto____1;
return taoensso$sente$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__10629__auto__ = (function (){var statearr_27866 = f__10628__auto__.call(null);
(statearr_27866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___27879);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___27879,timeout_ms_27878,temp__4425__auto___27877__$1,cb_uuid_27876,temp__4425__auto___27875,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e27867){if((e27867 instanceof Error)){
var e = e27867;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
});})(e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

var temp__4425__auto___27886 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4425__auto___27886)){
var cb_uuid_27887 = temp__4425__auto___27886;
var cb_fn_STAR__27888 = (function (){var or__4131__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_27887);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.hcond.call(null,false,"taoensso.sente",786,(new cljs.core.Delay(((function (or__4131__auto__,cb_uuid_27887,temp__4425__auto___27886,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return _QMARK_cb_fn;
});})(or__4131__auto__,cb_uuid_27887,temp__4425__auto___27886,e,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__27841,map__27841__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null),taoensso.encore.nnil_QMARK_,new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null));
}
})();
cb_fn_STAR__27888.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e27867;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4425__auto__ = (function (){var or__4131__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var WebSocket = temp__4425__auto__;
((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_,self__.backoff_ms_fn);
});})(WebSocket,temp__4425__auto__,chsk__$1))
;
var temp__4423__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e27871){if((e27871 instanceof Error)){
var e = e27871;
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket js/Error"], null);
});})(e,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);

return null;
} else {
throw e27871;

}
}})();
if(cljs.core.truth_(temp__4423__auto__)){
var socket = temp__4423__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__27872 = socket;
(G__27872["onerror"] = ((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",ws_ev], null);
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__27872["onmessage"] = ((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__27873 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__27873,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__27873,(1),null);
var or__4131__auto__ = (function (){var and__4119__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__4119__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var temp__4423__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto____$1)){
var cb_uuid = temp__4423__auto____$1;
var temp__4423__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4423__auto____$2)){
var cb_fn = temp__4423__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__4131__auto__,ppstr,vec__27873,clj,_QMARK_cb_uuid,G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
});})(temp__4423__auto____$2,cb_uuid,temp__4423__auto____$1,or__4131__auto__,ppstr,vec__27873,clj,_QMARK_cb_uuid,G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,null)),null);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__27872["onopen"] = ((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

(G__27872["onclose"] = ((function (G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__27872,socket,temp__4423__auto__,retry_BANG_,WebSocket,temp__4425__auto__,chsk__$1))
);

return G__27872;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4425__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4779__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4779__auto__,writer__4780__auto__){
return cljs.core._write.call(null,writer__4780__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__27835){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__27835),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__27835),null,cljs.core.dissoc.call(null,G__27835,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.backoff_ms_fn = backoff_ms_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4745__auto__,k__4746__auto__){
var self__ = this;
var this__4745__auto____$1 = this;
return cljs.core._lookup.call(null,this__4745__auto____$1,k__4746__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4747__auto__,k27890,else__4748__auto__){
var self__ = this;
var this__4747__auto____$1 = this;
var G__27892 = (((k27890 instanceof cljs.core.Keyword))?k27890.fqn:null);
switch (G__27892) {
case "client-id":
return self__.client_id;

break;
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27890,else__4748__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4759__auto__,writer__4760__auto__,opts__4761__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
var pr_pair__4762__auto__ = ((function (this__4759__auto____$1){
return (function (keyval__4763__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,cljs.core.pr_writer,""," ","",opts__4761__auto__,keyval__4763__auto__);
});})(this__4759__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,pr_pair__4762__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$ = true;

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27889){
var self__ = this;
var G__27889__$1 = this;
return (new cljs.core.RecordIter((0),G__27889__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4743__auto__){
var self__ = this;
var this__4743__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4739__auto__){
var self__ = this;
var this__4739__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (9 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4740__auto__){
var self__ = this;
var this__4740__auto____$1 = this;
var h__4566__auto__ = self__.__hash;
if(!((h__4566__auto__ == null))){
return h__4566__auto__;
} else {
var h__4566__auto____$1 = cljs.core.hash_imap.call(null,this__4740__auto____$1);
self__.__hash = h__4566__auto____$1;

return h__4566__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4741__auto__,other__4742__auto__){
var self__ = this;
var this__4741__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4119__auto__ = other__4742__auto__;
if(cljs.core.truth_(and__4119__auto__)){
var and__4119__auto____$1 = (this__4741__auto____$1.constructor === other__4742__auto__.constructor);
if(and__4119__auto____$1){
return cljs.core.equiv_map.call(null,this__4741__auto____$1,other__4742__auto__);
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4755__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4754__auto____$1),self__.__meta),k__4755__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4755__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4752__auto__,k__4753__auto__,G__27889){
var self__ = this;
var this__4752__auto____$1 = this;
var pred__27893 = cljs.core.keyword_identical_QMARK_;
var expr__27894 = k__4753__auto__;
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(G__27889,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__27889,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__27889,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__27889,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__27889,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,G__27889,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,G__27889,self__.packer,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,G__27889,self__.backoff_ms_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27893.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__27894))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,G__27889,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4753__auto__,G__27889),null));
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4757__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4744__auto__,G__27889){
var self__ = this;
var this__4744__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.ajax_opts,self__.curr_xhr_,self__.state_,self__.packer,self__.backoff_ms_fn,G__27889,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4750__auto__,entry__4751__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4751__auto__)){
return cljs.core._assoc.call(null,this__4750__auto____$1,cljs.core._nth.call(null,entry__4751__auto__,(0)),cljs.core._nth.call(null,entry__4751__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4750__auto____$1,entry__4751__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__27896){
var self__ = this;
var map__27897 = p__27896;
var map__27897__$1 = ((((!((map__27897 == null)))?((((map__27897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27897):map__27897);
var opts = map__27897__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__27897__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
});})(_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null)),((function (_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__27899){
var map__27903 = p__27899;
var map__27903__$1 = ((((!((map__27903 == null)))?((((map__27903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);
var _QMARK_error = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__27905 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__27905,(0),null);
var _ = cljs.core.nth.call(null,vec__27905,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (content,resp_ppstr,vec__27905,resp_clj,_,map__27903,map__27903__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
});})(content,resp_ppstr,vec__27905,resp_clj,_,map__27903,map__27903__$1,_QMARK_error,_QMARK_content,_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
,null)),null);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__27897,map__27897__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4425__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4425__auto__)){
var x = temp__4425__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
});})(chsk__$1))
,null)),null);

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (nattempt_STAR_,chsk__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect (%s).",nattempt_STAR_], null);
});})(nattempt_STAR_,chsk__$1))
,null)),null);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_,self__.backoff_ms_fn);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.encore.ajax_lite.call(null,self__.url,cljs.core.merge.call(null,self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null)),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__27913){
var map__27917 = p__27913;
var map__27917__$1 = ((((!((map__27917 == null)))?((((map__27917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27917):map__27917);
var _QMARK_error = cljs.core.get.call(null,map__27917__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__27917__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__27919 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__27919,(0),null);
var _ = cljs.core.nth.call(null,vec__27919,(1),null);
var or__4131__auto___27921 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__4131__auto___27921)){
} else {
var buffered_evs_27922 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_27922);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4779__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4779__auto__,writer__4780__auto__){
return cljs.core._write.call(null,writer__4780__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,ajax_opts,curr_xhr_,state_,packer,backoff_ms_fn,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__27891){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__27891),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__27891),null,cljs.core.dissoc.call(null,G__27891,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955)),null));
});

taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,chsk_host,chsk_path,type){
var protocol__$1 = (function (){var G__27924 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27924) {
case "ajax":
return protocol;

break;
case "ws":
if(cljs.core._EQ_.call(null,protocol,"https:")){
return "wss:";
} else {
return "ws:";
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
return [cljs.core.str(protocol__$1),cljs.core.str("//"),cljs.core.str(taoensso.encore.path.call(null,chsk_host,chsk_path))].join('');
});
/**
 * Returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *           ; May `put!` (inject) arbitrary `event`s to this channel.
 *  :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *  :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *  :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *  :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto)
 *  :host           ; Server host (defaults to current page's host)
 *  :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity w/in given
 *                  ; number of milliseconds
 *  :lp-kalive-ms   ; Ping to keep a long-polling (Ajax) conn alive ''
 *  :packer         ; :edn (default), or an IPacker implementation (experimental)
 *  :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`
 *  :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27936 = arguments.length;
var i__5190__auto___27937 = (0);
while(true){
if((i__5190__auto___27937 < len__5189__auto___27936)){
args__5196__auto__.push((arguments[i__5190__auto___27937]));

var G__27938 = (i__5190__auto___27937 + (1));
i__5190__auto___27937 = G__27938;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__27929){
var vec__27930 = p__27929;
var map__27931 = cljs.core.nth.call(null,vec__27930,(0),null);
var map__27931__$1 = ((((!((map__27931 == null)))?((((map__27931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27931):map__27931);
var opts = map__27931__$1;
var ajax_opts = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var client_id = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var packer = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var type = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var backoff_ms_fn = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.call(null,map__27931__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.call(null,vec__27930,(1),null);
if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return type;
});})(vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return client_id;
});})(vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),taoensso.encore.nblank_str_QMARK_,new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null));

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket!` fn signature CHANGED with Sente v0.10.0."], null);
});})(vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),(new cljs.core.Delay(((function (vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
});})(vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),null);
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var win_location = taoensso.encore.get_window_location.call(null);
var win_protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_location);
var host__$1 = (function (){var or__4131__auto__ = host;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var path__$1 = (function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_location);
}
})();
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),(function (){var _LT_server_ch = new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs);
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
} else {
return cljs.core.async.map_LT_.call(null,((function (_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (ev){
var vec__27933 = ev;
var id = cljs.core.nth.call(null,vec__27933,(0),null);
var _QMARK_data = cljs.core.nth.call(null,vec__27933,(1),null);
taoensso.encore.hcond.call(null,false,"taoensso.sente",null,(new cljs.core.Delay(((function (vec__27933,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (){
return cljs.core.namespace.call(null,id);
});})(vec__27933,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,null)),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"id","id",252129435,null)),((function (vec__27933,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function (p1__27926_SHARP_){
return cljs.core.not_EQ_.call(null,p1__27926_SHARP_,"chsk");
});})(vec__27933,id,_QMARK_data,_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__27926#","p1__27926#",-1514836304,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"p1__27926#","p1__27926#",-1514836304,null),"chsk")));


return ev;
});})(_LT_server_ch,packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,_LT_server_ch);
}
})()], null));
var chsk = (function (){var or__4131__auto__ = (function (){var and__4119__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__4119__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,backoff_ms_fn,cljs.core.atom.call(null,null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ws","ws",86841443));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
}
})(),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__4119__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4119__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__4119__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"state_","state_",957667102)],[cljs.core.atom.call(null,null),client_id,packer__$1,private_chs,backoff_ms_fn,(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,path__$1,win_location,new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
return taoensso.sente.get_chsk_url.call(null,win_protocol,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
}
})(),ajax_opts,lp_timeout_ms,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__4119__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__27935 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__27935,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__27935,(1),null);
var ev__$1 = vec__27935;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,win_location,win_protocol,host__$1,path__$1,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__27930,map__27931,map__27931__$1,opts,ajax_opts,ws_kalive_ms,lp_timeout_ms,client_id,packer,type,host,recv_buf_or_n,backoff_ms_fn,wrap_recv_evs_QMARK_,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq27927){
var G__27928 = cljs.core.first.call(null,seq27927);
var seq27927__$1 = cljs.core.next.call(null,seq27927);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27928,seq27927__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 *   `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 *   write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___28073 = arguments.length;
var i__5190__auto___28074 = (0);
while(true){
if((i__5190__auto___28074 < len__5189__auto___28073)){
args__5196__auto__.push((arguments[i__5190__auto___28074]));

var G__28075 = (i__5190__auto___28074 + (1));
i__5190__auto___28074 = G__28075;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__27942){
var vec__27943 = p__27942;
var map__27944 = cljs.core.nth.call(null,vec__27943,(0),null);
var map__27944__$1 = ((((!((map__27944 == null)))?((((map__27944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27944):map__27944);
var opts = map__27944__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__10627__auto___28076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (7))){
var inst_28021 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28027_28077 = state_28025__$1;
(statearr_28027_28077[(2)] = inst_28021);

(statearr_28027_28077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (20))){
var inst_27955 = (state_28025[(7)]);
var inst_27952 = (state_28025[(8)]);
var inst_27954 = (state_28025[(9)]);
var inst_27979 = (state_28025[(10)]);
var inst_27980 = (state_28025[(11)]);
var inst_27953 = (state_28025[(12)]);
var inst_27990 = (function (){var vec__27947 = inst_27952;
var v = inst_27953;
var p = inst_27954;
var stop_QMARK_ = inst_27955;
var map__27958 = inst_27979;
var event_msg = inst_27979;
var event = inst_27980;
return ((function (vec__27947,v,p,stop_QMARK_,map__27958,event_msg,event,inst_27955,inst_27952,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
});
;})(vec__27947,v,p,stop_QMARK_,map__27958,event_msg,event,inst_27955,inst_27952,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
})();
var inst_27991 = (new cljs.core.Delay(inst_27990,null));
var inst_27992 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_27991,null);
var state_28025__$1 = state_28025;
var statearr_28028_28078 = state_28025__$1;
(statearr_28028_28078[(2)] = inst_27992);

(statearr_28028_28078[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (27))){
var state_28025__$1 = state_28025;
var statearr_28029_28079 = state_28025__$1;
(statearr_28029_28079[(2)] = null);

(statearr_28029_28079[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (1))){
var state_28025__$1 = state_28025;
var statearr_28030_28080 = state_28025__$1;
(statearr_28030_28080[(2)] = null);

(statearr_28030_28080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (24))){
var inst_27979 = (state_28025[(10)]);
var inst_28003 = event_msg_handler.call(null,inst_27979);
var state_28025__$1 = state_28025;
var statearr_28031_28081 = state_28025__$1;
(statearr_28031_28081[(2)] = inst_28003);

(statearr_28031_28081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (4))){
var inst_27955 = (state_28025[(7)]);
var inst_27952 = (state_28025[(8)]);
var inst_27954 = (state_28025[(9)]);
var inst_27952__$1 = (state_28025[(2)]);
var inst_27953 = cljs.core.nth.call(null,inst_27952__$1,(0),null);
var inst_27954__$1 = cljs.core.nth.call(null,inst_27952__$1,(1),null);
var inst_27955__$1 = taoensso.encore.kw_identical_QMARK_.call(null,inst_27954__$1,ch_ctrl);
var state_28025__$1 = (function (){var statearr_28032 = state_28025;
(statearr_28032[(7)] = inst_27955__$1);

(statearr_28032[(8)] = inst_27952__$1);

(statearr_28032[(9)] = inst_27954__$1);

(statearr_28032[(12)] = inst_27953);

return statearr_28032;
})();
if(cljs.core.truth_(inst_27955__$1)){
var statearr_28033_28082 = state_28025__$1;
(statearr_28033_28082[(1)] = (5));

} else {
var statearr_28034_28083 = state_28025__$1;
(statearr_28034_28083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (15))){
var inst_27953 = (state_28025[(12)]);
var state_28025__$1 = state_28025;
var statearr_28035_28084 = state_28025__$1;
(statearr_28035_28084[(2)] = inst_27953);

(statearr_28035_28084[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (21))){
var state_28025__$1 = state_28025;
var statearr_28036_28085 = state_28025__$1;
(statearr_28036_28085[(2)] = null);

(statearr_28036_28085[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (13))){
var inst_27971 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28037_28086 = state_28025__$1;
(statearr_28037_28086[(2)] = inst_27971);

(statearr_28037_28086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (22))){
var inst_27979 = (state_28025[(10)]);
var inst_27995 = (state_28025[(2)]);
var inst_27996 = taoensso.sente.event_msg_QMARK_.call(null,inst_27979);
var inst_27997 = cljs.core.not.call(null,inst_27996);
var state_28025__$1 = (function (){var statearr_28038 = state_28025;
(statearr_28038[(13)] = inst_27995);

return statearr_28038;
})();
if(inst_27997){
var statearr_28039_28087 = state_28025__$1;
(statearr_28039_28087[(1)] = (23));

} else {
var statearr_28040_28088 = state_28025__$1;
(statearr_28040_28088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (6))){
var inst_27953 = (state_28025[(12)]);
var inst_27961 = (inst_27953 == null);
var inst_27962 = cljs.core.not.call(null,inst_27961);
var state_28025__$1 = state_28025;
if(inst_27962){
var statearr_28041_28089 = state_28025__$1;
(statearr_28041_28089[(1)] = (8));

} else {
var statearr_28042_28090 = state_28025__$1;
(statearr_28042_28090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (28))){
var inst_28018 = (state_28025[(2)]);
var state_28025__$1 = (function (){var statearr_28043 = state_28025;
(statearr_28043[(14)] = inst_28018);

return statearr_28043;
})();
var statearr_28044_28091 = state_28025__$1;
(statearr_28044_28091[(2)] = null);

(statearr_28044_28091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (25))){
var inst_27988 = (state_28025[(15)]);
var inst_28005 = (state_28025[(2)]);
var inst_28006 = [inst_28005];
var inst_28007 = (new cljs.core.PersistentVector(null,1,(5),inst_27988,inst_28006,null));
var state_28025__$1 = state_28025;
var statearr_28045_28092 = state_28025__$1;
(statearr_28045_28092[(2)] = inst_28007);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (17))){
var inst_28011 = (state_28025[(16)]);
var inst_28009 = (state_28025[(17)]);
var inst_28009__$1 = (state_28025[(2)]);
var inst_28010 = cljs.core.nth.call(null,inst_28009__$1,(0),null);
var inst_28011__$1 = cljs.core.nth.call(null,inst_28009__$1,(1),null);
var state_28025__$1 = (function (){var statearr_28046 = state_28025;
(statearr_28046[(16)] = inst_28011__$1);

(statearr_28046[(18)] = inst_28010);

(statearr_28046[(17)] = inst_28009__$1);

return statearr_28046;
})();
if(cljs.core.truth_(inst_28011__$1)){
var statearr_28047_28093 = state_28025__$1;
(statearr_28047_28093[(1)] = (26));

} else {
var statearr_28048_28094 = state_28025__$1;
(statearr_28048_28094[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (3))){
var inst_28023 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
if((state_val_28026 === (12))){
var state_28025__$1 = state_28025;
var statearr_28049_28095 = state_28025__$1;
(statearr_28049_28095[(2)] = false);

(statearr_28049_28095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (2))){
var inst_27948 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27949 = [ch_recv,ch_ctrl];
var inst_27950 = (new cljs.core.PersistentVector(null,2,(5),inst_27948,inst_27949,null));
var state_28025__$1 = state_28025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28025__$1,(4),inst_27950);
} else {
if((state_val_28026 === (23))){
var inst_27955 = (state_28025[(7)]);
var inst_27952 = (state_28025[(8)]);
var inst_27954 = (state_28025[(9)]);
var inst_27979 = (state_28025[(10)]);
var inst_27980 = (state_28025[(11)]);
var inst_27953 = (state_28025[(12)]);
var inst_27999 = (function (){var vec__27947 = inst_27952;
var v = inst_27953;
var p = inst_27954;
var stop_QMARK_ = inst_27955;
var map__27958 = inst_27979;
var event_msg = inst_27979;
var event = inst_27980;
return ((function (vec__27947,v,p,stop_QMARK_,map__27958,event_msg,event,inst_27955,inst_27952,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad event: %s",event], null);
});
;})(vec__27947,v,p,stop_QMARK_,map__27958,event_msg,event,inst_27955,inst_27952,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
})();
var inst_28000 = (new cljs.core.Delay(inst_27999,null));
var inst_28001 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_28000,null);
var state_28025__$1 = state_28025;
var statearr_28050_28096 = state_28025__$1;
(statearr_28050_28096[(2)] = inst_28001);

(statearr_28050_28096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (19))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28025,(18),Error,null,(17));
var inst_27988 = cljs.core.PersistentVector.EMPTY_NODE;
var state_28025__$1 = (function (){var statearr_28051 = state_28025;
(statearr_28051[(15)] = inst_27988);

return statearr_28051;
})();
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_28052_28097 = state_28025__$1;
(statearr_28052_28097[(1)] = (20));

} else {
var statearr_28053_28098 = state_28025__$1;
(statearr_28053_28098[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (11))){
var state_28025__$1 = state_28025;
var statearr_28054_28099 = state_28025__$1;
(statearr_28054_28099[(2)] = true);

(statearr_28054_28099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (9))){
var state_28025__$1 = state_28025;
var statearr_28055_28100 = state_28025__$1;
(statearr_28055_28100[(2)] = false);

(statearr_28055_28100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (5))){
var state_28025__$1 = state_28025;
var statearr_28056_28101 = state_28025__$1;
(statearr_28056_28101[(2)] = null);

(statearr_28056_28101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (14))){
var inst_27953 = (state_28025[(12)]);
var inst_27976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27953);
var state_28025__$1 = state_28025;
var statearr_28057_28102 = state_28025__$1;
(statearr_28057_28102[(2)] = inst_27976);

(statearr_28057_28102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (26))){
var inst_27955 = (state_28025[(7)]);
var inst_27952 = (state_28025[(8)]);
var inst_28011 = (state_28025[(16)]);
var inst_28010 = (state_28025[(18)]);
var inst_28009 = (state_28025[(17)]);
var inst_27954 = (state_28025[(9)]);
var inst_27979 = (state_28025[(10)]);
var inst_27980 = (state_28025[(11)]);
var inst_27953 = (state_28025[(12)]);
var inst_28013 = (function (){var p = inst_27954;
var _QMARK_error = inst_28011;
var map__27958 = inst_27979;
var temp__4425__auto__ = inst_28011;
var v = inst_27953;
var vec__27947 = inst_27952;
var _ = inst_28010;
var event_msg = inst_27979;
var vec__27959 = inst_28009;
var e = inst_28011;
var event = inst_27980;
var stop_QMARK_ = inst_27955;
return ((function (p,_QMARK_error,map__27958,temp__4425__auto__,v,vec__27947,_,event_msg,vec__27959,e,event,stop_QMARK_,inst_27955,inst_27952,inst_28011,inst_28010,inst_28009,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk router handling error: %s",event], null);
});
;})(p,_QMARK_error,map__27958,temp__4425__auto__,v,vec__27947,_,event_msg,vec__27959,e,event,stop_QMARK_,inst_27955,inst_27952,inst_28011,inst_28010,inst_28009,inst_27954,inst_27979,inst_27980,inst_27953,state_val_28026,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
})();
var inst_28014 = (new cljs.core.Delay(inst_28013,null));
var inst_28015 = taoensso.timbre.log1_fn.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","C:\\Users\\nathan\\AppData\\Local\\Temp\\form-init5827664271239089557.clj",null,new cljs.core.Keyword(null,"f","f",-1597136552),inst_28014,null);
var state_28025__$1 = state_28025;
var statearr_28058_28103 = state_28025__$1;
(statearr_28058_28103[(2)] = inst_28015);

(statearr_28058_28103[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (16))){
var inst_27979 = (state_28025[(10)]);
var inst_27979__$1 = (state_28025[(2)]);
var inst_27980 = cljs.core.get.call(null,inst_27979__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_28025__$1 = (function (){var statearr_28059 = state_28025;
(statearr_28059[(10)] = inst_27979__$1);

(statearr_28059[(11)] = inst_27980);

return statearr_28059;
})();
var statearr_28060_28104 = state_28025__$1;
(statearr_28060_28104[(2)] = null);

(statearr_28060_28104[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (10))){
var inst_27974 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_27974)){
var statearr_28061_28105 = state_28025__$1;
(statearr_28061_28105[(1)] = (14));

} else {
var statearr_28062_28106 = state_28025__$1;
(statearr_28062_28106[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (18))){
var inst_27981 = (state_28025[(2)]);
var inst_27982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27983 = [null,inst_27981];
var inst_27984 = (new cljs.core.PersistentVector(null,2,(5),inst_27982,inst_27983,null));
var state_28025__$1 = state_28025;
var statearr_28063_28107 = state_28025__$1;
(statearr_28063_28107[(2)] = inst_27984);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (8))){
var inst_27953 = (state_28025[(12)]);
var inst_27964 = inst_27953.cljs$lang$protocol_mask$partition0$;
var inst_27965 = (inst_27964 & (64));
var inst_27966 = inst_27953.cljs$core$ISeq$;
var inst_27967 = (inst_27965) || (inst_27966);
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_27967)){
var statearr_28064_28108 = state_28025__$1;
(statearr_28064_28108[(1)] = (11));

} else {
var statearr_28065_28109 = state_28025__$1;
(statearr_28065_28109[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__10515__auto__,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$state_machine__10516__auto__ = null;
var taoensso$sente$state_machine__10516__auto____0 = (function (){
var statearr_28069 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28069[(0)] = taoensso$sente$state_machine__10516__auto__);

(statearr_28069[(1)] = (1));

return statearr_28069;
});
var taoensso$sente$state_machine__10516__auto____1 = (function (state_28025){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object)){
var ex__10519__auto__ = e28070;
var statearr_28071_28110 = state_28025;
(statearr_28071_28110[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28111 = state_28025;
state_28025 = G__28111;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
taoensso$sente$state_machine__10516__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__10516__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__10516__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__10516__auto____0;
taoensso$sente$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__10516__auto____1;
return taoensso$sente$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
})();
var state__10629__auto__ = (function (){var statearr_28072 = f__10628__auto__.call(null);
(statearr_28072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___28076);

return statearr_28072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___28076,ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__27943,map__27944,map__27944__$1,opts,trace_evs_QMARK_))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq27939){
var G__27940 = cljs.core.first.call(null,seq27939);
var seq27939__$1 = cljs.core.next.call(null,seq27939);
var G__27941 = cljs.core.first.call(null,seq27939__$1);
var seq27939__$2 = cljs.core.next.call(null,seq27939__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27940,G__27941,seq27939__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});
/**
 * DEPRECATED. Please use `timbre/set-level!` instead.
 */
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.timbre.set_level_BANG_.call(null,level);
});
/**
 * DEPRECATED. Please use `taoensso.encore/ajax-lite` instead.
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
/**
 * DEPRECATED.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__28112,websocket_QMARK_){
var map__28115 = p__28112;
var map__28115__$1 = ((((!((map__28115 == null)))?((((map__28115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28115):map__28115);
var location = map__28115__$1;
var adjusted_protocol = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"adjusted-protocol","adjusted-protocol",37431492));
var host = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__28115__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(adjusted_protocol),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__4131__auto__ = path;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pathname;
}
})())].join('');
});
