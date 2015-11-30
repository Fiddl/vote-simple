// Compiled by ClojureScript 1.7.170 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Stolen from `clojure.tools.macro`.
 *   Handles optional docstrings & attr maps for a macro def's name.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__27235 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__27235,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__27235,(1),null);
var vec__27236 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__27236,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__27236,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
taoensso.encore.error_data = (function taoensso$encore$error_data(x){

var temp__4425__auto__ = (function (){var or__4131__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var data_map = temp__4425__auto__;
return cljs.core.merge.call(null,data_map,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type*","type*",1986072229),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"message*","message*",446441989),err.message,new cljs.core.Keyword(null,"cause*","cause*",-564351346),err.cause], null);
})());
} else {
return null;
}
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nnil_QMARK_ = cljs.core.complement.call(null,cljs.core.nil_QMARK_);
taoensso.encore.nblank_QMARK_ = cljs.core.complement.call(null,clojure.string.blank_QMARK_);
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
var and__4119__auto__ = typeof x === 'string';
if(and__4119__auto__){
return taoensso.encore.nblank_QMARK_.call(null,x);
} else {
return and__4119__auto__;
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(var_args){
var args27237 = [];
var len__5189__auto___27243 = arguments.length;
var i__5190__auto___27244 = (0);
while(true){
if((i__5190__auto___27244 < len__5189__auto___27243)){
args27237.push((arguments[i__5190__auto___27244]));

var G__27245 = (i__5190__auto___27244 + (1));
i__5190__auto___27244 = G__27245;
continue;
} else {
}
break;
}

var G__27242 = args27237.length;
switch (G__27242) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27237.slice((2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__4119__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__4119__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__4119__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__4119__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq27238){
var G__27239 = cljs.core.first.call(null,seq27238);
var seq27238__$1 = cljs.core.next.call(null,seq27238);
var G__27240 = cljs.core.first.call(null,seq27238__$1);
var seq27238__$2 = cljs.core.next.call(null,seq27238__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__27239,G__27240,seq27238__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.asserted = (function taoensso$encore$asserted(var_args){
var args27247 = [];
var len__5189__auto___27253 = arguments.length;
var i__5190__auto___27254 = (0);
while(true){
if((i__5190__auto___27254 < len__5189__auto___27253)){
args27247.push((arguments[i__5190__auto___27254]));

var G__27255 = (i__5190__auto___27254 + (1));
i__5190__auto___27254 = G__27255;
continue;
} else {
}
break;
}

var G__27252 = args27247.length;
switch (G__27252) {
case 2:
return taoensso.encore.asserted.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27247.slice((2)),(0)));
return taoensso.encore.asserted.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);

}
});

taoensso.encore.asserted.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
if(cljs.core.truth_(pred.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return x;
});

taoensso.encore.asserted.cljs$core$IFn$_invoke$arity$variadic = (function (pred,x,more){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,taoensso.encore.asserted,pred),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),more));
});

taoensso.encore.asserted.cljs$lang$applyTo = (function (seq27248){
var G__27249 = cljs.core.first.call(null,seq27248);
var seq27248__$1 = cljs.core.next.call(null,seq27248);
var G__27250 = cljs.core.first.call(null,seq27248__$1);
var seq27248__$2 = cljs.core.next.call(null,seq27248__$1);
return taoensso.encore.asserted.cljs$core$IFn$_invoke$arity$variadic(G__27249,G__27250,seq27248__$2);
});

taoensso.encore.asserted.cljs$lang$maxFixedArity = (2);
taoensso.encore.have = cljs.core.partial.call(null,taoensso.encore.asserted,taoensso.encore.nnil_QMARK_);
/**
 * Is `x` a vector of size `n`?
 */
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27259 = arguments.length;
var i__5190__auto___27260 = (0);
while(true){
if((i__5190__auto___27260 < len__5189__auto___27259)){
args__5196__auto__.push((arguments[i__5190__auto___27260]));

var G__27261 = (i__5190__auto___27260 + (1));
i__5190__auto___27260 = G__27261;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,cljs.core.map.call(null,taoensso.encore.undefined__GT_nil,args));
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq27257){
var G__27258 = cljs.core.first.call(null,seq27257);
var seq27257__$1 = cljs.core.next.call(null,seq27257);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__27258,seq27257__$1);
});
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.keys_nnil_QMARK_ = (function taoensso$encore$keys_nnil_QMARK_(m,ks){
return cljs.core.every_QMARK_.call(null,(function (p1__27262_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__27262_SHARP_));
}),ks);
});
/**
 * Returns x as a unambiguous Boolean, or nil on failure. Requires more
 *   explicit truthiness than (boolean x).
 */
taoensso.encore.parse_bool = (function taoensso$encore$parse_bool(x){
if(cljs.core.truth_(x)){
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0")) || (cljs.core._EQ_.call(null,x,(0)))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1")) || (cljs.core._EQ_.call(null,x,(1)))){
return true;
} else {
return null;

}
}
}
} else {
return null;
}
});
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){

if(cljs.core.truth_(x)){
var p = taoensso.encore.parse_bool.call(null,x);
if(!((p == null))){
return p;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-bool failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else {
return null;
}
});
/**
 * Returns x as Long (or JavaScript integer), or nil on failure.
 */
taoensso.encore.parse_int = (function taoensso$encore$parse_int(x){
if(cljs.core.truth_(x)){
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;

}
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){

if(cljs.core.truth_(x)){
var or__4131__auto__ = taoensso.encore.parse_int.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-int failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
} else {
return null;
}
});
/**
 * Returns x as Double (or JavaScript float), or nil on failure.
 */
taoensso.encore.parse_float = (function taoensso$encore$parse_float(x){
if(cljs.core.truth_(x)){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;

}
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){

var or__4131__auto__ = taoensso.encore.parse_float.call(null,x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"as-float failed: %s",x),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x)], null));
}
});
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
/**
 * Like `name` but includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4423__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27267 = arguments.length;
var i__5190__auto___27268 = (0);
while(true){
if((i__5190__auto___27268 < len__5189__auto___27267)){
args__5196__auto__.push((arguments[i__5190__auto___27268]));

var G__27269 = (i__5190__auto___27268 + (1));
i__5190__auto___27268 = G__27269;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__27265){
var vec__27266 = p__27265;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__27266,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq27263){
var G__27264 = cljs.core.first.call(null,seq27263);
var seq27263__$1 = cljs.core.next.call(null,seq27263);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__27264,seq27263__$1);
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27275 = arguments.length;
var i__5190__auto___27276 = (0);
while(true){
if((i__5190__auto___27276 < len__5189__auto___27275)){
args__5196__auto__.push((arguments[i__5190__auto___27276]));

var G__27277 = (i__5190__auto___27276 + (1));
i__5190__auto___27276 = G__27277;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__27272){
var vec__27273 = p__27272;
var type = cljs.core.nth.call(null,vec__27273,(0),null);
var nplaces = cljs.core.nth.call(null,vec__27273,(1),null);
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n:(n * modifier));
var rounded = (function (){var G__27274 = ((((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__27274) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return cljs.core.long$.call(null,Math.floor(n_STAR_));

break;
case "ceil":
return cljs.core.long$.call(null,Math.ceil(n_STAR_));

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return rounded;
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq27270){
var G__27271 = cljs.core.first.call(null,seq27270);
var seq27270__$1 = cljs.core.next.call(null,seq27270);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__27271,seq27270__$1);
});
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27285 = arguments.length;
var i__5190__auto___27286 = (0);
while(true){
if((i__5190__auto___27286 < len__5189__auto___27285)){
args__5196__auto__.push((arguments[i__5190__auto___27286]));

var G__27287 = (i__5190__auto___27286 + (1));
i__5190__auto___27286 = G__27287;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__27281){
var vec__27282 = p__27281;
var map__27283 = cljs.core.nth.call(null,vec__27282,(0),null);
var map__27283__$1 = ((((!((map__27283 == null)))?((((map__27283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__27283__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__4462__auto__ = min_SINGLEQUOTE_;
var y__4463__auto__ = time;
return ((x__4462__auto__ > y__4463__auto__) ? x__4462__auto__ : y__4463__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__4469__auto__ = max_SINGLEQUOTE_;
var y__4470__auto__ = time__$1;
return ((x__4469__auto__ < y__4470__auto__) ? x__4469__auto__ : y__4470__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq27279){
var G__27280 = cljs.core.first.call(null,seq27279);
var seq27279__$1 = cljs.core.next.call(null,seq27279);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__27280,seq27279__$1);
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).valueOf();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27291 = arguments.length;
var i__5190__auto___27292 = (0);
while(true){
if((i__5190__auto___27292 < len__5189__auto___27291)){
args__5196__auto__.push((arguments[i__5190__auto___27292]));

var G__27293 = (i__5190__auto___27292 + (1));
i__5190__auto___27292 = G__27293;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__27289){
var vec__27290 = p__27289;
var mock_udts = cljs.core.nth.call(null,vec__27290,(0),null);
var mock_udts__$1 = (function (){var or__4131__auto__ = mock_udts;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__27290,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__27290,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq27288){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27288));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27298 = arguments.length;
var i__5190__auto___27299 = (0);
while(true){
if((i__5190__auto___27299 < len__5189__auto___27298)){
args__5196__auto__.push((arguments[i__5190__auto___27299]));

var G__27300 = (i__5190__auto___27299 + (1));
i__5190__auto___27299 = G__27300;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__27295){
var map__27296 = p__27295;
var map__27296__$1 = ((((!((map__27296 == null)))?((((map__27296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27296):map__27296);
var opts = map__27296__$1;
var years = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__27296__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.keys.call(null,opts))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq27294){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27294));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);

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
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4745__auto__,k__4746__auto__){
var self__ = this;
var this__4745__auto____$1 = this;
return cljs.core._lookup.call(null,this__4745__auto____$1,k__4746__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4747__auto__,k27302,else__4748__auto__){
var self__ = this;
var this__4747__auto____$1 = this;
var G__27304 = (((k27302 instanceof cljs.core.Keyword))?k27302.fqn:null);
switch (G__27304) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27302,else__4748__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4759__auto__,writer__4760__auto__,opts__4761__auto__){
var self__ = this;
var this__4759__auto____$1 = this;
var pr_pair__4762__auto__ = ((function (this__4759__auto____$1){
return (function (keyval__4763__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,cljs.core.pr_writer,""," ","",opts__4761__auto__,keyval__4763__auto__);
});})(this__4759__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4760__auto__,pr_pair__4762__auto__,"#taoensso.encore.Swapped{",", ","}",opts__4761__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IIterable$ = true;

taoensso.encore.Swapped.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27301){
var self__ = this;
var G__27301__$1 = this;
return (new cljs.core.RecordIter((0),G__27301__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4743__auto__){
var self__ = this;
var this__4743__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4739__auto__){
var self__ = this;
var this__4739__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4749__auto__){
var self__ = this;
var this__4749__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4740__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4741__auto__,other__4742__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4754__auto__,k__4755__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__4755__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4754__auto____$1),self__.__meta),k__4755__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4755__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4752__auto__,k__4753__auto__,G__27301){
var self__ = this;
var this__4752__auto____$1 = this;
var pred__27305 = cljs.core.keyword_identical_QMARK_;
var expr__27306 = k__4753__auto__;
if(cljs.core.truth_(pred__27305.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__27306))){
return (new taoensso.encore.Swapped(G__27301,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27305.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__27306))){
return (new taoensso.encore.Swapped(self__.new_val,G__27301,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4753__auto__,G__27301),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4757__auto__){
var self__ = this;
var this__4757__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4744__auto__,G__27301){
var self__ = this;
var this__4744__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__27301,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4750__auto__,entry__4751__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4751__auto__)){
return cljs.core._assoc.call(null,this__4750__auto____$1,cljs.core._nth.call(null,entry__4751__auto__,(0)),cljs.core._nth.call(null,entry__4751__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4750__auto____$1,entry__4751__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__4779__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4779__auto__,writer__4780__auto__){
return cljs.core._write.call(null,writer__4780__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__27303){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__27303),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__27303),null,cljs.core.dissoc.call(null,G__27303,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.as_swapped = (function taoensso$encore$as_swapped(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * Reduces input with
 *   [<type> <ks> <reset-val-or-swap-fn>] or
 *       [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__27311 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__27311,(0),null);
var ks = cljs.core.nth.call(null,vec__27311,(1),null);
var valf = cljs.core.nth.call(null,vec__27311,(2),null);
var G__27312 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__27312) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf.call(null,cljs.core.get_in.call(null,accum,ks)));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27316 = arguments.length;
var i__5190__auto___27317 = (0);
while(true){
if((i__5190__auto___27317 < len__5189__auto___27316)){
args__5196__auto__.push((arguments[i__5190__auto___27317]));

var G__27318 = (i__5190__auto___27317 + (1));
i__5190__auto___27317 = G__27318;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq27314){
var G__27315 = cljs.core.first.call(null,seq27314);
var seq27314__$1 = cljs.core.next.call(null,seq27314);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__27315,seq27314__$1);
});
/**
 * More powerful version of `swap!`:
 *  * Supports optional `update-in` semantics.
 *  * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 *    <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(var_args){
var args27319 = [];
var len__5189__auto___27328 = arguments.length;
var i__5190__auto___27329 = (0);
while(true){
if((i__5190__auto___27329 < len__5189__auto___27328)){
args27319.push((arguments[i__5190__auto___27329]));

var G__27330 = (i__5190__auto___27329 + (1));
i__5190__auto___27329 = G__27330;
continue;
} else {
}
break;
}

var G__27325 = args27319.length;
switch (G__27325) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27319.slice((3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__27326 = taoensso.encore.as_swapped.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__27326,(0),null);
var return_val = cljs.core.nth.call(null,vec__27326,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var old_val_in = cljs.core.get_in.call(null,old_val,ks);
var vec__27327 = taoensso.encore.as_swapped.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__27327,(0),null);
var return_val = cljs.core.nth.call(null,vec__27327,(1),null);
var new_val = cljs.core.assoc_in.call(null,old_val,ks,new_val_in);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
return cljs.core.swap_BANG_.call(null,atom_,((function (pairs){
return (function (old_val){
return taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
});})(pairs))
);
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq27320){
var G__27321 = cljs.core.first.call(null,seq27320);
var seq27320__$1 = cljs.core.next.call(null,seq27320);
var G__27322 = cljs.core.first.call(null,seq27320__$1);
var seq27320__$2 = cljs.core.next.call(null,seq27320__$1);
var G__27323 = cljs.core.first.call(null,seq27320__$2);
var seq27320__$3 = cljs.core.next.call(null,seq27320__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27321,G__27322,G__27323,seq27320__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(var_args){
var args27332 = [];
var len__5189__auto___27339 = arguments.length;
var i__5190__auto___27340 = (0);
while(true){
if((i__5190__auto___27340 < len__5189__auto___27339)){
args27332.push((arguments[i__5190__auto___27340]));

var G__27341 = (i__5190__auto___27340 + (1));
i__5190__auto___27340 = G__27341;
continue;
} else {
}
break;
}

var G__27338 = args27332.length;
switch (G__27338) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27332.slice((3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
return cljs.core.swap_BANG_.call(null,atom_,((function (pairs){
return (function (old_val){
return taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
});})(pairs))
);
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq27333){
var G__27334 = cljs.core.first.call(null,seq27333);
var seq27333__$1 = cljs.core.next.call(null,seq27333);
var G__27335 = cljs.core.first.call(null,seq27333__$1);
var seq27333__$2 = cljs.core.next.call(null,seq27333__$1);
var G__27336 = cljs.core.first.call(null,seq27333__$2);
var seq27333__$3 = cljs.core.next.call(null,seq27333__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27334,G__27335,G__27336,seq27333__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27347 = arguments.length;
var i__5190__auto___27348 = (0);
while(true){
if((i__5190__auto___27348 < len__5189__auto___27347)){
args__5196__auto__.push((arguments[i__5190__auto___27348]));

var G__27349 = (i__5190__auto___27348 + (1));
i__5190__auto___27348 = G__27349;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq27344){
var G__27345 = cljs.core.first.call(null,seq27344);
var seq27344__$1 = cljs.core.next.call(null,seq27344);
var G__27346 = cljs.core.first.call(null,seq27344__$1);
var seq27344__$2 = cljs.core.next.call(null,seq27344__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__27345,G__27346,seq27344__$2);
});
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27360 = arguments.length;
var i__5190__auto___27361 = (0);
while(true){
if((i__5190__auto___27361 < len__5189__auto___27360)){
args__5196__auto__.push((arguments[i__5190__auto___27361]));

var G__27362 = (i__5190__auto___27361 + (1));
i__5190__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4903__auto__ = (function taoensso$encore$iter__27352(s__27353){
return (new cljs.core.LazySeq(null,(function (){
var s__27353__$1 = s__27353;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27353__$1);
if(temp__4425__auto__){
var s__27353__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27353__$2)){
var c__4901__auto__ = cljs.core.chunk_first.call(null,s__27353__$2);
var size__4902__auto__ = cljs.core.count.call(null,c__4901__auto__);
var b__27355 = cljs.core.chunk_buffer.call(null,size__4902__auto__);
if((function (){var i__27354 = (0);
while(true){
if((i__27354 < size__4902__auto__)){
var vec__27358 = cljs.core._nth.call(null,c__4901__auto__,i__27354);
var k = cljs.core.nth.call(null,vec__27358,(0),null);
var v = cljs.core.nth.call(null,vec__27358,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__27355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27363 = (i__27354 + (1));
i__27354 = G__27363;
continue;
} else {
var G__27364 = (i__27354 + (1));
i__27354 = G__27364;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27355),taoensso$encore$iter__27352.call(null,cljs.core.chunk_rest.call(null,s__27353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27355),null);
}
} else {
var vec__27359 = cljs.core.first.call(null,s__27353__$2);
var k = cljs.core.nth.call(null,vec__27359,(0),null);
var v = cljs.core.nth.call(null,vec__27359,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__27352.call(null,cljs.core.rest.call(null,s__27353__$2)));
} else {
var G__27365 = cljs.core.rest.call(null,s__27353__$2);
s__27353__$1 = G__27365;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4903__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq27350){
var G__27351 = cljs.core.first.call(null,seq27350);
var seq27350__$1 = cljs.core.next.call(null,seq27350);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__27351,seq27350__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27376 = arguments.length;
var i__5190__auto___27377 = (0);
while(true){
if((i__5190__auto___27377 < len__5189__auto___27376)){
args__5196__auto__.push((arguments[i__5190__auto___27377]));

var G__27378 = (i__5190__auto___27377 + (1));
i__5190__auto___27377 = G__27378;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4903__auto__ = (function taoensso$encore$iter__27368(s__27369){
return (new cljs.core.LazySeq(null,(function (){
var s__27369__$1 = s__27369;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27369__$1);
if(temp__4425__auto__){
var s__27369__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27369__$2)){
var c__4901__auto__ = cljs.core.chunk_first.call(null,s__27369__$2);
var size__4902__auto__ = cljs.core.count.call(null,c__4901__auto__);
var b__27371 = cljs.core.chunk_buffer.call(null,size__4902__auto__);
if((function (){var i__27370 = (0);
while(true){
if((i__27370 < size__4902__auto__)){
var vec__27374 = cljs.core._nth.call(null,c__4901__auto__,i__27370);
var k = cljs.core.nth.call(null,vec__27374,(0),null);
var v = cljs.core.nth.call(null,vec__27374,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__27371,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__27379 = (i__27370 + (1));
i__27370 = G__27379;
continue;
} else {
var G__27380 = (i__27370 + (1));
i__27370 = G__27380;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27371),taoensso$encore$iter__27368.call(null,cljs.core.chunk_rest.call(null,s__27369__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27371),null);
}
} else {
var vec__27375 = cljs.core.first.call(null,s__27369__$2);
var k = cljs.core.nth.call(null,vec__27375,(0),null);
var v = cljs.core.nth.call(null,vec__27375,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__27368.call(null,cljs.core.rest.call(null,s__27369__$2)));
} else {
var G__27381 = cljs.core.rest.call(null,s__27369__$2);
s__27369__$1 = G__27381;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4903__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq27366){
var G__27367 = cljs.core.first.call(null,seq27366);
var seq27366__$1 = cljs.core.next.call(null,seq27366);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__27367,seq27366__$1);
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 *   to `f` as an unpaired seq:
 *  (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 *    where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27384 = arguments.length;
var i__5190__auto___27385 = (0);
while(true){
if((i__5190__auto___27385 < len__5189__auto___27384)){
args__5196__auto__.push((arguments[i__5190__auto___27385]));

var G__27386 = (i__5190__auto___27385 + (1));
i__5190__auto___27385 = G__27386;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq27382){
var G__27383 = cljs.core.first.call(null,seq27382);
var seq27382__$1 = cljs.core.next.call(null,seq27382);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__27383,seq27382__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 *   against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4131__auto__ = x;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,v,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__4119__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__4119__auto__)){
return predv.call(null,v);
} else {
return and__4119__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 *   pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 *   way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27395 = arguments.length;
var i__5190__auto___27396 = (0);
while(true){
if((i__5190__auto___27396 < len__5189__auto___27395)){
args__5196__auto__.push((arguments[i__5190__auto___27396]));

var G__27397 = (i__5190__auto___27396 + (1));
i__5190__auto___27396 = G__27397;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27389){
var vec__27390 = p__27389;
var kf = cljs.core.nth.call(null,vec__27390,(0),null);
var vf = cljs.core.nth.call(null,vec__27390,(1),null);
if((cljs.core.coll_QMARK_.call(null,coll)) || ((coll == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)))))].join('')));
}

if(cljs.core.truth_((function (){var or__4131__auto__ = (kf == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.fn_QMARK_.call(null,kf);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758));
}
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),cljs.core.list(new cljs.core.Symbol(null,"kw-identical?","kw-identical?",-1893901709,null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Keyword(null,"keywordize","keywordize",1381210758)))))].join('')));
}

if(((vf == null)) || (cljs.core.fn_QMARK_.call(null,vf))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)),cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null)))))].join('')));
}

var _PERCENT_ = (cljs.core.truth_(coll)?((cljs.core.empty_QMARK_.call(null,coll))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__27390,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__27390,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__27392 = coll;
var vec__27393 = G__27392;
var k = cljs.core.nth.call(null,vec__27393,(0),null);
var v = cljs.core.nth.call(null,vec__27393,(1),null);
var s = vec__27393;
var m__$1 = m;
var G__27392__$1 = G__27392;
while(true){
var m__$2 = m__$1;
var vec__27394 = G__27392__$1;
var k__$1 = cljs.core.nth.call(null,vec__27394,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27394,(1),null);
var s__$1 = vec__27394;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4423__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var n = temp__4423__auto__;
var G__27398 = new_m;
var G__27399 = n;
m__$1 = G__27398;
G__27392__$1 = G__27399;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})()):null);
if(((_PERCENT_ == null)) || (cljs.core.map_QMARK_.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq27387){
var G__27388 = cljs.core.first.call(null,seq27387);
var seq27387__$1 = cljs.core.next.call(null,seq27387);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__27388,seq27387__$1);
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args27400 = [];
var len__5189__auto___27406 = arguments.length;
var i__5190__auto___27407 = (0);
while(true){
if((i__5190__auto___27407 < len__5189__auto___27406)){
args27400.push((arguments[i__5190__auto___27407]));

var G__27408 = (i__5190__auto___27407 + (1));
i__5190__auto___27407 = G__27408;
continue;
} else {
}
break;
}

var G__27405 = args27400.length;
switch (G__27405) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27400.slice((2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq27401){
var G__27402 = cljs.core.first.call(null,seq27401);
var seq27401__$1 = cljs.core.next.call(null,seq27401);
var G__27403 = cljs.core.first.call(null,seq27401__$1);
var seq27401__$2 = cljs.core.next.call(null,seq27401__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__27402,G__27403,seq27401__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`.
 *   Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args27410 = [];
var len__5189__auto___27416 = arguments.length;
var i__5190__auto___27417 = (0);
while(true){
if((i__5190__auto___27417 < len__5189__auto___27416)){
args27410.push((arguments[i__5190__auto___27417]));

var G__27418 = (i__5190__auto___27417 + (1));
i__5190__auto___27417 = G__27418;
continue;
} else {
}
break;
}

var G__27415 = args27410.length;
switch (G__27415) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5208__auto__ = (new cljs.core.IndexedSeq(args27410.slice((2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq27411){
var G__27412 = cljs.core.first.call(null,seq27411);
var seq27411__$1 = cljs.core.next.call(null,seq27411);
var G__27413 = cljs.core.first.call(null,seq27411__$1);
var seq27411__$2 = cljs.core.next.call(null,seq27411__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__27412,G__27413,seq27411__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args27420 = [];
var len__5189__auto___27427 = arguments.length;
var i__5190__auto___27428 = (0);
while(true){
if((i__5190__auto___27428 < len__5189__auto___27427)){
args27420.push((arguments[i__5190__auto___27428]));

var G__27429 = (i__5190__auto___27428 + (1));
i__5190__auto___27428 = G__27429;
continue;
} else {
}
break;
}

var G__27422 = args27420.length;
switch (G__27422) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27420.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__27423,in$){
var vec__27424 = p__27423;
var v = cljs.core.nth.call(null,vec__27424,(0),null);
var seen = cljs.core.nth.call(null,vec__27424,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__27425,in$){
var vec__27426 = p__27425;
var v = cljs.core.nth.call(null,vec__27426,(0),null);
var seen = cljs.core.nth.call(null,vec__27426,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__27437,seen__$1){
while(true){
var vec__27438 = p__27437;
var v = cljs.core.nth.call(null,vec__27438,(0),null);
var xs__$1 = vec__27438;
var temp__4425__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4425__auto__){
var s = temp__4425__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__27439 = cljs.core.rest.call(null,s);
var G__27440 = seen__$1;
p__27437 = G__27439;
seen__$1 = G__27440;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
/**
 * Like `merge-with` but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 * 
 *   (merge-deep-with + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 *                  {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 *   => {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 */
taoensso.encore.merge_deep_with = (function taoensso$encore$merge_deep_with(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27443 = arguments.length;
var i__5190__auto___27444 = (0);
while(true){
if((i__5190__auto___27444 < len__5189__auto___27443)){
args__5196__auto__.push((arguments[i__5190__auto___27444]));

var G__27445 = (i__5190__auto___27444 + (1));
i__5190__auto___27444 = G__27445;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.call(null,(function() { 
var taoensso$encore$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.call(null,cljs.core.merge_with,taoensso$encore$m,maps__$1);
} else {
return cljs.core.apply.call(null,f,maps__$1);
}
};
var taoensso$encore$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__27446__i = 0, G__27446__a = new Array(arguments.length -  0);
while (G__27446__i < G__27446__a.length) {G__27446__a[G__27446__i] = arguments[G__27446__i + 0]; ++G__27446__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__27446__a,0);
} 
return taoensso$encore$m__delegate.call(this,maps__$1);};
taoensso$encore$m.cljs$lang$maxFixedArity = 0;
taoensso$encore$m.cljs$lang$applyTo = (function (arglist__27447){
var maps__$1 = cljs.core.seq(arglist__27447);
return taoensso$encore$m__delegate(maps__$1);
});
taoensso$encore$m.cljs$core$IFn$_invoke$arity$variadic = taoensso$encore$m__delegate;
return taoensso$encore$m;
})()
,maps);
});

taoensso.encore.merge_deep_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_deep_with.cljs$lang$applyTo = (function (seq27441){
var G__27442 = cljs.core.first.call(null,seq27441);
var seq27441__$1 = cljs.core.next.call(null,seq27441);
return taoensso.encore.merge_deep_with.cljs$core$IFn$_invoke$arity$variadic(G__27442,seq27441__$1);
});
taoensso.encore.merge_deep = cljs.core.partial.call(null,taoensso.encore.merge_deep_with,(function (x,y){
return y;
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27454 = arguments.length;
var i__5190__auto___27455 = (0);
while(true){
if((i__5190__auto___27455 < len__5189__auto___27454)){
args__5196__auto__.push((arguments[i__5190__auto___27455]));

var G__27456 = (i__5190__auto___27455 + (1));
i__5190__auto___27455 = G__27456;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27452){
var vec__27453 = p__27452;
var _QMARK_comparator = cljs.core.nth.call(null,vec__27453,(0),null);
var comparator = (function (){var or__4131__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__27453,_QMARK_comparator){
return (function (p1__27448_SHARP_,p2__27449_SHARP_){
if((comparator.call(null,p1__27448_SHARP_,p2__27449_SHARP_) > (0))){
return p2__27449_SHARP_;
} else {
return p1__27448_SHARP_;
}
});})(comparator,vec__27453,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq27450){
var G__27451 = cljs.core.first.call(null,seq27450);
var seq27450__$1 = cljs.core.next.call(null,seq27450);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__27451,seq27450__$1);
});
/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27463 = arguments.length;
var i__5190__auto___27464 = (0);
while(true){
if((i__5190__auto___27464 < len__5189__auto___27463)){
args__5196__auto__.push((arguments[i__5190__auto___27464]));

var G__27465 = (i__5190__auto___27464 + (1));
i__5190__auto___27464 = G__27465;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__27461){
var vec__27462 = p__27461;
var _QMARK_comparator = cljs.core.nth.call(null,vec__27462,(0),null);
var comparator = (function (){var or__4131__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__27462,_QMARK_comparator){
return (function (p1__27457_SHARP_,p2__27458_SHARP_){
if((comparator.call(null,p1__27457_SHARP_,p2__27458_SHARP_) < (0))){
return p2__27458_SHARP_;
} else {
return p1__27457_SHARP_;
}
});})(comparator,vec__27462,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq27459){
var G__27460 = cljs.core.first.call(null,seq27459);
var seq27459__$1 = cljs.core.next.call(null,seq27459);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__27460,seq27459__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__27466 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__27467 = (idx + (1));
v = G__27466;
idx = G__27467;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__27468 = cljs.core.conj.call(null,v,f.call(null));
var G__27469 = (idx + (1));
v = G__27468;
idx = G__27469;
continue;
}
break;
}
}
});
/**
 * Gives a consistent, flexible, cross-platform substring API with support for:
 *  * Clamping of indexes beyond string limits.
 *  * Negative indexes: [   0   |   1   |  ...  |  n-1  |   n   ) or
 *                      [  -n   | -n+1  |  ...  |  -1   |   0   ).
 *                      (start index inclusive, end index exclusive).
 * 
 *   Note that `max-len` was chosen over `end-idx` since it's less ambiguous and
 *   easier to reason about - esp. when accepting negative indexes.
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27475 = arguments.length;
var i__5190__auto___27476 = (0);
while(true){
if((i__5190__auto___27476 < len__5189__auto___27475)){
args__5196__auto__.push((arguments[i__5190__auto___27476]));

var G__27477 = (i__5190__auto___27476 + (1));
i__5190__auto___27476 = G__27477;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__27473){
var vec__27474 = p__27473;
var max_len = cljs.core.nth.call(null,vec__27474,(0),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = (max_len == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,max_len);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)))))].join('')));
}

var slen = cljs.core.count.call(null,s);
var start_idx_STAR_ = (((start_idx >= (0)))?(function (){var x__4469__auto__ = start_idx;
var y__4470__auto__ = slen;
return ((x__4469__auto__ < y__4470__auto__) ? x__4469__auto__ : y__4470__auto__);
})():(function (){var x__4462__auto__ = (0);
var y__4463__auto__ = ((slen + start_idx) - (1));
return ((x__4462__auto__ > y__4463__auto__) ? x__4462__auto__ : y__4463__auto__);
})());
var end_idx_STAR_ = ((cljs.core.not.call(null,max_len))?slen:(function (){var x__4469__auto__ = (start_idx_STAR_ + max_len);
var y__4470__auto__ = slen;
return ((x__4469__auto__ < y__4470__auto__) ? x__4469__auto__ : y__4470__auto__);
})());
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq27470){
var G__27471 = cljs.core.first.call(null,seq27470);
var seq27470__$1 = cljs.core.next.call(null,seq27470);
var G__27472 = cljs.core.first.call(null,seq27470__$1);
var seq27470__$2 = cljs.core.next.call(null,seq27470__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__27471,G__27472,seq27470__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27480 = arguments.length;
var i__5190__auto___27481 = (0);
while(true){
if((i__5190__auto___27481 < len__5189__auto___27480)){
args__5196__auto__.push((arguments[i__5190__auto___27481]));

var G__27482 = (i__5190__auto___27481 + (1));
i__5190__auto___27481 = G__27482;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq27478){
var G__27479 = cljs.core.first.call(null,seq27478);
var seq27478__$1 = cljs.core.next.call(null,seq27478);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__27479,seq27478__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 *   interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27484 = arguments.length;
var i__5190__auto___27485 = (0);
while(true){
if((i__5190__auto___27485 < len__5189__auto___27484)){
args__5196__auto__.push((arguments[i__5190__auto___27485]));

var G__27486 = (i__5190__auto___27485 + (1));
i__5190__auto___27485 = G__27486;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq27483){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27483));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_.call(null,s)){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
taoensso.encore.count_words.call(null,"Hello this is a    test");
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args27487 = [];
var len__5189__auto___27490 = arguments.length;
var i__5190__auto___27491 = (0);
while(true){
if((i__5190__auto___27491 < len__5189__auto___27490)){
args27487.push((arguments[i__5190__auto___27491]));

var G__27492 = (i__5190__auto___27491 + (1));
i__5190__auto___27491 = G__27492;
continue;
} else {
}
break;
}

var G__27489 = args27487.length;
switch (G__27489) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27487.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
/**
 * Swaps associative value at key and returns the new value.
 *   Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 *   and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27498 = arguments.length;
var i__5190__auto___27499 = (0);
while(true){
if((i__5190__auto___27499 < len__5189__auto___27498)){
args__5196__auto__.push((arguments[i__5190__auto___27499]));

var G__27500 = (i__5190__auto___27499 + (1));
i__5190__auto___27499 = G__27500;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__27494_SHARP_){
if(cljs.core.truth_(p1__27494_SHARP_)){
return p1__27494_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq27495){
var G__27496 = cljs.core.first.call(null,seq27495);
var seq27495__$1 = cljs.core.next.call(null,seq27495);
var G__27497 = cljs.core.first.call(null,seq27495__$1);
var seq27495__$2 = cljs.core.next.call(null,seq27495__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__27496,G__27497,seq27495__$2);
});
/**
 * Like `clojure.core/memoize` but:
 *  * Uses delays to prevent race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` option.
 *  * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 *  * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args27503 = [];
var len__5189__auto___27526 = arguments.length;
var i__5190__auto___27527 = (0);
while(true){
if((i__5190__auto___27527 < len__5189__auto___27526)){
args27503.push((arguments[i__5190__auto___27527]));

var G__27528 = (i__5190__auto___27527 + (1));
i__5190__auto___27527 = G__27528;
continue;
} else {
}
break;
}

var G__27505 = args27503.length;
switch (G__27505) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27503.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__27530__delegate = function (p__27506){
var vec__27507 = p__27506;
var arg1 = cljs.core.nth.call(null,vec__27507,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27507,(1));
var args = vec__27507;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__27507,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__4119__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__4119__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__27507,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__27507,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__27507,arg1,argn,args,cache))
));
}
};
var G__27530 = function (var_args){
var p__27506 = null;
if (arguments.length > 0) {
var G__27531__i = 0, G__27531__a = new Array(arguments.length -  0);
while (G__27531__i < G__27531__a.length) {G__27531__a[G__27531__i] = arguments[G__27531__i + 0]; ++G__27531__i;}
  p__27506 = new cljs.core.IndexedSeq(G__27531__a,0);
} 
return G__27530__delegate.call(this,p__27506);};
G__27530.cljs$lang$maxFixedArity = 0;
G__27530.cljs$lang$applyTo = (function (arglist__27532){
var p__27506 = cljs.core.seq(arglist__27532);
return G__27530__delegate(p__27506);
});
G__27530.cljs$core$IFn$_invoke$arity$variadic = G__27530__delegate;
return G__27530;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__27533__delegate = function (p__27508){
var vec__27509 = p__27508;
var arg1 = cljs.core.nth.call(null,vec__27509,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27509,(1));
var args = vec__27509;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_27534 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_27534,vec__27509,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_27534,vec__27509,arg1,argn,args,cache){
return (function (m_STAR_,k,p__27510){
var vec__27511 = p__27510;
var dv = cljs.core.nth.call(null,vec__27511,(0),null);
var udt = cljs.core.nth.call(null,vec__27511,(1),null);
var cv = vec__27511;
if(((instant_27534 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_27534,vec__27509,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_27534,vec__27509,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__27512 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__27509,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4119__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4119__auto__)){
var and__4119__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4119__auto____$1){
var vec__27514 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__27514,(0),null);
var udt = cljs.core.nth.call(null,vec__27514,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__27509,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__27509,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__27509,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__27512,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__27533 = function (var_args){
var p__27508 = null;
if (arguments.length > 0) {
var G__27535__i = 0, G__27535__a = new Array(arguments.length -  0);
while (G__27535__i < G__27535__a.length) {G__27535__a[G__27535__i] = arguments[G__27535__i + 0]; ++G__27535__i;}
  p__27508 = new cljs.core.IndexedSeq(G__27535__a,0);
} 
return G__27533__delegate.call(this,p__27508);};
G__27533.cljs$lang$maxFixedArity = 0;
G__27533.cljs$lang$applyTo = (function (arglist__27536){
var p__27508 = cljs.core.seq(arglist__27536);
return G__27533__delegate(p__27508);
});
G__27533.cljs$core$IFn$_invoke$arity$variadic = G__27533__delegate;
return G__27533;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__27537__delegate = function (p__27515){
var vec__27516 = p__27515;
var arg1 = cljs.core.nth.call(null,vec__27516,(0),null);
var argn = cljs.core.nthnext.call(null,vec__27516,(1));
var args = vec__27516;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_27538 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_27538,vec__27516,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_27538,vec__27516,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__27517){
var vec__27518 = p__27517;
var dv = cljs.core.nth.call(null,vec__27518,(0),null);
var udt = cljs.core.nth.call(null,vec__27518,(1),null);
var _ = cljs.core.nth.call(null,vec__27518,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__27518,(3),null);
var cv = vec__27518;
if(((instant_27538 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_27538,vec__27516,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state){
return (function (p1__27502_SHARP_){
return cljs.core.nth.call(null,p1__27502_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state){
return (function (p1__27501_SHARP_){
return cljs.core.nth.call(null,p1__27501_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state){
return (function (k){
var vec__27519 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__27519,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27519,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__27519,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__27519,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_27538,vec__27516,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_27538,vec__27516,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__27520 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27516,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__4119__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__4119__auto__)){
var and__4119__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__4119__auto____$1){
var or__4131__auto__ = (_QMARK_instant == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var vec__27524 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__27524,(0),null);
var udt = cljs.core.nth.call(null,vec__27524,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27516,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27516,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27516,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__27520,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27520,dv,vec__27516,arg1,argn,args,state){
return (function (m){
var temp__4425__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__27525 = temp__4425__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__27525,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__27525,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__27525,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__27525,(3),null);
var cv = vec__27525;
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__27520,dv,vec__27516,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__27537 = function (var_args){
var p__27515 = null;
if (arguments.length > 0) {
var G__27539__i = 0, G__27539__a = new Array(arguments.length -  0);
while (G__27539__i < G__27539__a.length) {G__27539__a[G__27539__i] = arguments[G__27539__i + 0]; ++G__27539__i;}
  p__27515 = new cljs.core.IndexedSeq(G__27539__a,0);
} 
return G__27537__delegate.call(this,p__27515);};
G__27537.cljs$lang$maxFixedArity = 0;
G__27537.cljs$lang$applyTo = (function (arglist__27540){
var p__27515 = cljs.core.seq(arglist__27540);
return G__27537__delegate(p__27515);
});
G__27537.cljs$core$IFn$_invoke$arity$variadic = G__27537__delegate;
return G__27537;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
 *   msecs until next rate limit window (rate limited).
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (state){
return (function() { 
var G__27559__delegate = function (p__27550){
var vec__27551 = p__27550;
var id = cljs.core.nth.call(null,vec__27551,(0),null);
if((cljs.core.rand.call(null) <= taoensso.encore.gc_rate)){
var instant_27560 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_27560,vec__27551,id,state){
return (function (p__27552){
var vec__27553 = p__27552;
var _ = cljs.core.nth.call(null,vec__27553,(0),null);
var m = cljs.core.nth.call(null,vec__27553,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__27553,_,m,instant_27560,vec__27551,id,state){
return (function (m_STAR_,id__$1,p__27554){
var vec__27555 = p__27554;
var udt_window_start = cljs.core.nth.call(null,vec__27555,(0),null);
var ncalls = cljs.core.nth.call(null,vec__27555,(1),null);
if(((instant_27560 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__27553,_,m,instant_27560,vec__27551,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m))], null);
});})(instant_27560,vec__27551,id,state))
);
} else {
}

return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);
return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__27551,id,state){
return (function (p__27556){
var vec__27557 = p__27556;
var _ = cljs.core.nth.call(null,vec__27557,(0),null);
var m = cljs.core.nth.call(null,vec__27557,(1),null);
var temp__4423__auto__ = m.call(null,id);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27558 = temp__4423__auto__;
var udt_window_start = cljs.core.nth.call(null,vec__27558,(0),null);
var ncalls = cljs.core.nth.call(null,vec__27558,(1),null);
if(((instant - udt_window_start) > window_ms)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else {
if((ncalls < ncalls_limit)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__27551,id,state))
);
})(),(0));
};
var G__27559 = function (var_args){
var p__27550 = null;
if (arguments.length > 0) {
var G__27561__i = 0, G__27561__a = new Array(arguments.length -  0);
while (G__27561__i < G__27561__a.length) {G__27561__a[G__27561__i] = arguments[G__27561__i + 0]; ++G__27561__i;}
  p__27550 = new cljs.core.IndexedSeq(G__27561__a,0);
} 
return G__27559__delegate.call(this,p__27550);};
G__27559.cljs$lang$maxFixedArity = 0;
G__27559.cljs$lang$applyTo = (function (arglist__27562){
var p__27550 = cljs.core.seq(arglist__27562);
return G__27559__delegate(p__27550);
});
G__27559.cljs$core$IFn$_invoke$arity$variadic = G__27559__delegate;
return G__27559;
})()
;
;})(state))
});
/**
 * Wraps fn so that it returns {:result _ :backoff-ms _}.
 */
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);
return ((function (rl){
return (function() { 
var G__27563__delegate = function (args){
var temp__4423__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var backoff_ms = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__27563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27564__i = 0, G__27564__a = new Array(arguments.length -  0);
while (G__27564__i < G__27564__a.length) {G__27564__a[G__27564__i] = arguments[G__27564__i + 0]; ++G__27564__i;}
  args = new cljs.core.IndexedSeq(G__27564__a,0);
} 
return G__27563__delegate.call(this,args);};
G__27563.cljs$lang$maxFixedArity = 0;
G__27563.cljs$lang$applyTo = (function (arglist__27565){
var args = cljs.core.seq(arglist__27565);
return G__27563__delegate(args);
});
G__27563.cljs$core$IFn$_invoke$arity$variadic = G__27563__delegate;
return G__27563;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4423__auto__ = (window["performance"]);
if(cljs.core.truth_(temp__4423__auto__)){
var perf = temp__4423__auto__;
var temp__4423__auto____$1 = (function (){var or__4131__auto__ = (perf["now"]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var f = temp__4423__auto____$1;
return ((function (f,temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return cljs.core.long$.call(null,((1000) * f.call(perf)));
});
;})(f,temp__4423__auto____$1,perf,temp__4423__auto__))
} else {
return ((function (temp__4423__auto____$1,perf,temp__4423__auto__){
return (function (){
return ((1000) * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto____$1,perf,temp__4423__auto__))
}
} else {
return ((function (temp__4423__auto__){
return (function (){
return ((1000) * taoensso.encore.now_udt.call(null));
});
;})(temp__4423__auto__))
}
})();
taoensso.encore.log = (function taoensso$encore$log(x){
if(cljs.core.truth_(typeof console != 'undefined')){
console.log(x);
} else {
print(x);
}

return null;
});

taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27586 = arguments.length;
var i__5190__auto___27587 = (0);
while(true){
if((i__5190__auto___27587 < len__5189__auto___27586)){
args__5196__auto__.push((arguments[i__5190__auto___27587]));

var G__27588 = (i__5190__auto___27587 + (1));
i__5190__auto___27587 = G__27588;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(clojure.string.join.call(null," ",xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq27566){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27566));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27589 = arguments.length;
var i__5190__auto___27590 = (0);
while(true){
if((i__5190__auto___27590 < len__5189__auto___27589)){
args__5196__auto__.push((arguments[i__5190__auto___27590]));

var G__27591 = (i__5190__auto___27590 + (1));
i__5190__auto___27590 = G__27591;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq27567){
var G__27568 = cljs.core.first.call(null,seq27567);
var seq27567__$1 = cljs.core.next.call(null,seq27567);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__27568,seq27567__$1);
});

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27592 = arguments.length;
var i__5190__auto___27593 = (0);
while(true){
if((i__5190__auto___27593 < len__5189__auto___27592)){
args__5196__auto__.push((arguments[i__5190__auto___27593]));

var G__27594 = (i__5190__auto___27593 + (1));
i__5190__auto___27593 = G__27594;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.log.call(null,clojure.string.join.call(null," ",xs));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq27569){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27569));
});

taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27595 = arguments.length;
var i__5190__auto___27596 = (0);
while(true){
if((i__5190__auto___27596 < len__5189__auto___27595)){
args__5196__auto__.push((arguments[i__5190__auto___27596]));

var G__27597 = (i__5190__auto___27596 + (1));
i__5190__auto___27596 = G__27597;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return taoensso.encore.log.call(null,cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq27570){
var G__27571 = cljs.core.first.call(null,seq27570);
var seq27570__$1 = cljs.core.next.call(null,seq27570);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__27571,seq27570__$1);
});

/**
 * Log only >= <this-level> calls
 */
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.logging_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = cljs.core.deref.call(null,taoensso.encore.logging_level);
if(cljs.core.truth_(valid_level_QMARK_.call(null,current_level))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"current-level","current-level",1628605637,null))))].join('')));
}

if(cljs.core.truth_(valid_level_QMARK_.call(null,level))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null),new cljs.core.Symbol(null,"level","level",-1363938217,null))))].join('')));
}

return (scored_levels.call(null,level) >= scored_levels.call(null,current_level));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.lls_QMARK_ = taoensso.encore.logging_level_sufficient_QMARK_;

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27598 = arguments.length;
var i__5190__auto___27599 = (0);
while(true){
if((i__5190__auto___27599 < len__5189__auto___27598)){
args__5196__auto__.push((arguments[i__5190__auto___27599]));

var G__27600 = (i__5190__auto___27599 + (1));
i__5190__auto___27599 = G__27600;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq27572){
var G__27573 = cljs.core.first.call(null,seq27572);
var seq27572__$1 = cljs.core.next.call(null,seq27572);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__27573,seq27572__$1);
});

taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27601 = arguments.length;
var i__5190__auto___27602 = (0);
while(true){
if((i__5190__auto___27602 < len__5189__auto___27601)){
args__5196__auto__.push((arguments[i__5190__auto___27602]));

var G__27603 = (i__5190__auto___27602 + (1));
i__5190__auto___27602 = G__27603;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq27574){
var G__27575 = cljs.core.first.call(null,seq27574);
var seq27574__$1 = cljs.core.next.call(null,seq27574);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__27575,seq27574__$1);
});

taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27604 = arguments.length;
var i__5190__auto___27605 = (0);
while(true){
if((i__5190__auto___27605 < len__5189__auto___27604)){
args__5196__auto__.push((arguments[i__5190__auto___27605]));

var G__27606 = (i__5190__auto___27605 + (1));
i__5190__auto___27605 = G__27606;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"info","info",-317069002)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq27576){
var G__27577 = cljs.core.first.call(null,seq27576);
var seq27576__$1 = cljs.core.next.call(null,seq27576);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__27577,seq27576__$1);
});

taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27607 = arguments.length;
var i__5190__auto___27608 = (0);
while(true){
if((i__5190__auto___27608 < len__5189__auto___27607)){
args__5196__auto__.push((arguments[i__5190__auto___27608]));

var G__27609 = (i__5190__auto___27608 + (1));
i__5190__auto___27608 = G__27609;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552)))){
return [cljs.core.str("WARN: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq27578){
var G__27579 = cljs.core.first.call(null,seq27578);
var seq27578__$1 = cljs.core.next.call(null,seq27578);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__27579,seq27578__$1);
});

taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27610 = arguments.length;
var i__5190__auto___27611 = (0);
while(true){
if((i__5190__auto___27611 < len__5189__auto___27610)){
args__5196__auto__.push((arguments[i__5190__auto___27611]));

var G__27612 = (i__5190__auto___27611 + (1));
i__5190__auto___27611 = G__27612;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return [cljs.core.str("ERROR: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq27580){
var G__27581 = cljs.core.first.call(null,seq27580);
var seq27580__$1 = cljs.core.next.call(null,seq27580);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__27581,seq27580__$1);
});

taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27613 = arguments.length;
var i__5190__auto___27614 = (0);
while(true){
if((i__5190__auto___27614 < len__5189__auto___27613)){
args__5196__auto__.push((arguments[i__5190__auto___27614]));

var G__27615 = (i__5190__auto___27614 + (1));
i__5190__auto___27614 = G__27615;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888)))){
return [cljs.core.str("FATAL: "),cljs.core.str(cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs))].join('');
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq27582){
var G__27583 = cljs.core.first.call(null,seq27582);
var seq27582__$1 = cljs.core.next.call(null,seq27582);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__27583,seq27582__$1);
});

taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27616 = arguments.length;
var i__5190__auto___27617 = (0);
while(true){
if((i__5190__auto___27617 < len__5189__auto___27616)){
args__5196__auto__.push((arguments[i__5190__auto___27617]));

var G__27618 = (i__5190__auto___27617 + (1));
i__5190__auto___27617 = G__27618;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_(taoensso.encore.lls_QMARK_.call(null,new cljs.core.Keyword(null,"report","report",1394055010)))){
return cljs.core.apply.call(null,taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq27584){
var G__27585 = cljs.core.first.call(null,seq27584);
var seq27584__$1 = cljs.core.next.call(null,seq27584);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__27585,seq27584__$1);
});
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 *   released back to pool manually. Use core.async to wait for an available
 *   instance, etc.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if(((params == null)) || (cljs.core.map_QMARK_.call(null,params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
})());
var G__27620 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__27620) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 *   Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 *   Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey"
 *                :type     "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000}
 *  (fn async-callback [resp-map]
 *    (let [{:keys [?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - 200, 404, ..., or nil on no response
 *      ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
 *      ;;                 :timeout <http-error-status> nil}
 *      (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__27624,callback){
var map__27639 = p__27624;
var map__27639__$1 = ((((!((map__27639 == null)))?((((map__27639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27639):map__27639);
var opts = map__27639__$1;
var method = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__27639__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
if(cljs.core.truth_((function (){var or__4131__auto__ = (timeout_ms == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),cljs.core.list(new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)))))].join('')));
}

var temp__4423__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4423__auto__)){
var xhr = temp__4423__auto__;
try{var timeout_ms__$1 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__27643 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__27643) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__27642 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__27642,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__27642,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__27644_27654 = xhr;
goog.events.listenOnce(G__27644_27654,goog.net.EventType.READY,((function (G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type))
);

goog.events.listenOnce(G__27644_27654,goog.net.EventType.COMPLETE,((function (G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),(cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__27649 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (p1__27623_SHARP_,p2__27622_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__27622_SHARP_,p1__27623_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type))
;
var expr__27650 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__27649.call(null,"/edn",expr__27650))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__27649.call(null,"/json",expr__27650))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__27649.call(null,"/xml",expr__27650))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__27649.call(null,"/html",expr__27650))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
var G__27652 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__27652) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
})():null),new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(_QMARK_http_status)?(((((200) <= _QMARK_http_status)) && ((_QMARK_http_status <= (299))))?null:_QMARK_http_status):cljs.core.get.call(null,cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)))], null);
return callback.call(null,cb_arg);
});})(G__27644_27654,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__27642,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4423__auto__,map__27639,map__27639__$1,opts,method,params,headers,timeout_ms,resp_type))
);

G__27644_27654.setTimeoutInterval((function (){var or__4131__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());

G__27644_27654.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e27641){if((e27641 instanceof Error)){
var e = e27641;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e27641;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
taoensso.encore.nnil_keys_QMARK_ = taoensso.encore.keys_nnil_QMARK_;
taoensso.encore.first_nth = (function taoensso$encore$first_nth(var_args){
var args27656 = [];
var len__5189__auto___27659 = arguments.length;
var i__5190__auto___27660 = (0);
while(true){
if((i__5190__auto___27660 < len__5189__auto___27659)){
args27656.push((arguments[i__5190__auto___27660]));

var G__27661 = (i__5190__auto___27660 + (1));
i__5190__auto___27660 = G__27661;
continue;
} else {
}
break;
}

var G__27658 = args27656.length;
switch (G__27658) {
case 1:
return taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27656.length)].join('')));

}
});

taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.nth.call(null,coll,(0));
});

taoensso.encore.first_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){
return cljs.core.nth.call(null,coll,(0),not_found);
});

taoensso.encore.first_nth.cljs$lang$maxFixedArity = 2;
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___27667 = arguments.length;
var i__5190__auto___27668 = (0);
while(true){
if((i__5190__auto___27668 < len__5189__auto___27667)){
args__5196__auto__.push((arguments[i__5190__auto___27668]));

var G__27669 = (i__5190__auto___27668 + (1));
i__5190__auto___27668 = G__27669;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__27665){
var vec__27666 = p__27665;
var nattempt = cljs.core.nth.call(null,vec__27666,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__4131__auto__ = nattempt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq27663){
var G__27664 = cljs.core.first.call(null,seq27663);
var seq27663__$1 = cljs.core.next.call(null,seq27663);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27664,seq27663__$1);
});
