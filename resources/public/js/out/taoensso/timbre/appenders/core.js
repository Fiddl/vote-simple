// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27681 = arguments.length;
var i__5190__auto___27682 = (0);
while(true){
if((i__5190__auto___27682 < len__5189__auto___27681)){
args__5196__auto__.push((arguments[i__5190__auto___27682]));

var G__27683 = (i__5190__auto___27682 + (1));
i__5190__auto___27682 = G__27683;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__27677){
var vec__27678 = p__27677;
var _opts = cljs.core.nth.call(null,vec__27678,(0),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__27678,_opts){
return (function (data){
var map__27679 = data;
var map__27679__$1 = ((((!((map__27679 == null)))?((((map__27679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27679):map__27679);
var output_fn = cljs.core.get.call(null,map__27679__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
return cljs.core.println.call(null,output_fn.call(null,data));
});})(vec__27678,_opts))
], null);
});

taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0);

taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq27676){
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27676));
});
/**
 * Returns a simple js/console appender for ClojureScript, or nil if no
 *   js/console exists.
 */
taoensso.timbre.appenders.core.console__QMARK_appender = (function taoensso$timbre$appenders$core$console__QMARK_appender(){
var temp__4425__auto__ = (function (){var and__4119__auto__ = typeof console !== 'undefined';
if(and__4119__auto__){
return console.log;
} else {
return and__4119__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var have_logger_QMARK_ = temp__4425__auto__;
var have_warn_logger_QMARK_ = console.warn;
var have_error_logger_QMARK_ = console.error;
var level__GT_logger = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fatal","fatal",1874419888),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"error","error",-978969032),(cljs.core.truth_(have_error_logger_QMARK_)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"info","info",-317069002)),new cljs.core.Keyword(null,"warn","warn",-436710552),(cljs.core.truth_(have_warn_logger_QMARK_)?new cljs.core.Keyword(null,"warn","warn",-436710552):new cljs.core.Keyword(null,"info","info",-317069002))], null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enabled?","enabled?",-1376075057),true,new cljs.core.Keyword(null,"async?","async?",1523057758),false,new cljs.core.Keyword(null,"min-level","min-level",1634684919),null,new cljs.core.Keyword(null,"rate-limit","rate-limit",1748082022),null,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539),new cljs.core.Keyword(null,"inherit","inherit",-1840815422),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4425__auto__){
return (function (data){
var map__27688 = data;
var map__27688__$1 = ((((!((map__27688 == null)))?((((map__27688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27688):map__27688);
var level = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var output_fn = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"output-fn","output-fn",1600951539));
var vargs_ = cljs.core.get.call(null,map__27688__$1,new cljs.core.Keyword(null,"vargs_","vargs_",552132148));
var vargs = cljs.core.force.call(null,vargs_);
var vec__27689 = taoensso.encore.vsplit_first.call(null,vargs);
var v1 = cljs.core.nth.call(null,vec__27689,(0),null);
var vnext = cljs.core.nth.call(null,vec__27689,(1),null);
var output = ((cljs.core._EQ_.call(null,v1,new cljs.core.Keyword("timbre","raw","timbre/raw",-1823417723)))?cljs.core.into_array.call(null,vnext):output_fn.call(null,data));
var G__27691 = (((level__GT_logger.call(null,level) instanceof cljs.core.Keyword))?level__GT_logger.call(null,level).fqn:null);
switch (G__27691) {
case "error":
return console.error(output);

break;
case "warn":
return console.warn(output);

break;
default:
return console.log(output);

}
});})(have_warn_logger_QMARK_,have_error_logger_QMARK_,level__GT_logger,have_logger_QMARK_,temp__4425__auto__))
], null);
} else {
return null;
}
});
