// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async31177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31177 = (function (fn_handler,f,meta31178){
this.fn_handler = fn_handler;
this.f = f;
this.meta31178 = meta31178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31179,meta31178__$1){
var self__ = this;
var _31179__$1 = this;
return (new cljs.core.async.t_cljs$core$async31177(self__.fn_handler,self__.f,meta31178__$1));
});

cljs.core.async.t_cljs$core$async31177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31179){
var self__ = this;
var _31179__$1 = this;
return self__.meta31178;
});

cljs.core.async.t_cljs$core$async31177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31178","meta31178",-678997591,null)], null);
});

cljs.core.async.t_cljs$core$async31177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31177";

cljs.core.async.t_cljs$core$async31177.cljs$lang$ctorPrWriter = (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async31177");
});

cljs.core.async.__GT_t_cljs$core$async31177 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async31177(fn_handler__$1,f__$1,meta31178){
return (new cljs.core.async.t_cljs$core$async31177(fn_handler__$1,f__$1,meta31178));
});

}

return (new cljs.core.async.t_cljs$core$async31177(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args31182 = [];
var len__5189__auto___31185 = arguments.length;
var i__5190__auto___31186 = (0);
while(true){
if((i__5190__auto___31186 < len__5189__auto___31185)){
args31182.push((arguments[i__5190__auto___31186]));

var G__31187 = (i__5190__auto___31186 + (1));
i__5190__auto___31186 = G__31187;
continue;
} else {
}
break;
}

var G__31184 = args31182.length;
switch (G__31184) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31182.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args31189 = [];
var len__5189__auto___31192 = arguments.length;
var i__5190__auto___31193 = (0);
while(true){
if((i__5190__auto___31193 < len__5189__auto___31192)){
args31189.push((arguments[i__5190__auto___31193]));

var G__31194 = (i__5190__auto___31193 + (1));
i__5190__auto___31193 = G__31194;
continue;
} else {
}
break;
}

var G__31191 = args31189.length;
switch (G__31191) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31189.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31196 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31196);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31196,ret){
return (function (){
return fn1.call(null,val_31196);
});})(val_31196,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args31197 = [];
var len__5189__auto___31200 = arguments.length;
var i__5190__auto___31201 = (0);
while(true){
if((i__5190__auto___31201 < len__5189__auto___31200)){
args31197.push((arguments[i__5190__auto___31201]));

var G__31202 = (i__5190__auto___31201 + (1));
i__5190__auto___31201 = G__31202;
continue;
} else {
}
break;
}

var G__31199 = args31197.length;
switch (G__31199) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31197.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5034__auto___31204 = n;
var x_31205 = (0);
while(true){
if((x_31205 < n__5034__auto___31204)){
(a[x_31205] = (0));

var G__31206 = (x_31205 + (1));
x_31205 = G__31206;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31207 = (i + (1));
i = G__31207;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31211 = (function (alt_flag,flag,meta31212){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31212 = meta31212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31213,meta31212__$1){
var self__ = this;
var _31213__$1 = this;
return (new cljs.core.async.t_cljs$core$async31211(self__.alt_flag,self__.flag,meta31212__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31213){
var self__ = this;
var _31213__$1 = this;
return self__.meta31212;
});})(flag))
;

cljs.core.async.t_cljs$core$async31211.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31211.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31212","meta31212",-887190776,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31211";

cljs.core.async.t_cljs$core$async31211.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async31211");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31211 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31211(alt_flag__$1,flag__$1,meta31212){
return (new cljs.core.async.t_cljs$core$async31211(alt_flag__$1,flag__$1,meta31212));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31211(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31217 = (function (alt_handler,flag,cb,meta31218){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31218 = meta31218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31219,meta31218__$1){
var self__ = this;
var _31219__$1 = this;
return (new cljs.core.async.t_cljs$core$async31217(self__.alt_handler,self__.flag,self__.cb,meta31218__$1));
});

cljs.core.async.t_cljs$core$async31217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31219){
var self__ = this;
var _31219__$1 = this;
return self__.meta31218;
});

cljs.core.async.t_cljs$core$async31217.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31218","meta31218",-1561684285,null)], null);
});

cljs.core.async.t_cljs$core$async31217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31217";

cljs.core.async.t_cljs$core$async31217.cljs$lang$ctorPrWriter = (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async31217");
});

cljs.core.async.__GT_t_cljs$core$async31217 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31217(alt_handler__$1,flag__$1,cb__$1,meta31218){
return (new cljs.core.async.t_cljs$core$async31217(alt_handler__$1,flag__$1,cb__$1,meta31218));
});

}

return (new cljs.core.async.t_cljs$core$async31217(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31220_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31220_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31221_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31222 = (i + (1));
i = G__31222;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4119__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4119__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___31228 = arguments.length;
var i__5190__auto___31229 = (0);
while(true){
if((i__5190__auto___31229 < len__5189__auto___31228)){
args__5196__auto__.push((arguments[i__5190__auto___31229]));

var G__31230 = (i__5190__auto___31229 + (1));
i__5190__auto___31229 = G__31230;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31225){
var map__31226 = p__31225;
var map__31226__$1 = ((((!((map__31226 == null)))?((((map__31226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31226):map__31226);
var opts = map__31226__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31223){
var G__31224 = cljs.core.first.call(null,seq31223);
var seq31223__$1 = cljs.core.next.call(null,seq31223);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31224,seq31223__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args31231 = [];
var len__5189__auto___31281 = arguments.length;
var i__5190__auto___31282 = (0);
while(true){
if((i__5190__auto___31282 < len__5189__auto___31281)){
args31231.push((arguments[i__5190__auto___31282]));

var G__31283 = (i__5190__auto___31282 + (1));
i__5190__auto___31282 = G__31283;
continue;
} else {
}
break;
}

var G__31233 = args31231.length;
switch (G__31233) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31231.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10627__auto___31285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___31285){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___31285){
return (function (state_31257){
var state_val_31258 = (state_31257[(1)]);
if((state_val_31258 === (7))){
var inst_31253 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31259_31286 = state_31257__$1;
(statearr_31259_31286[(2)] = inst_31253);

(statearr_31259_31286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (1))){
var state_31257__$1 = state_31257;
var statearr_31260_31287 = state_31257__$1;
(statearr_31260_31287[(2)] = null);

(statearr_31260_31287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (4))){
var inst_31236 = (state_31257[(7)]);
var inst_31236__$1 = (state_31257[(2)]);
var inst_31237 = (inst_31236__$1 == null);
var state_31257__$1 = (function (){var statearr_31261 = state_31257;
(statearr_31261[(7)] = inst_31236__$1);

return statearr_31261;
})();
if(cljs.core.truth_(inst_31237)){
var statearr_31262_31288 = state_31257__$1;
(statearr_31262_31288[(1)] = (5));

} else {
var statearr_31263_31289 = state_31257__$1;
(statearr_31263_31289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (13))){
var state_31257__$1 = state_31257;
var statearr_31264_31290 = state_31257__$1;
(statearr_31264_31290[(2)] = null);

(statearr_31264_31290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (6))){
var inst_31236 = (state_31257[(7)]);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31257__$1,(11),to,inst_31236);
} else {
if((state_val_31258 === (3))){
var inst_31255 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31257__$1,inst_31255);
} else {
if((state_val_31258 === (12))){
var state_31257__$1 = state_31257;
var statearr_31265_31291 = state_31257__$1;
(statearr_31265_31291[(2)] = null);

(statearr_31265_31291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (2))){
var state_31257__$1 = state_31257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31257__$1,(4),from);
} else {
if((state_val_31258 === (11))){
var inst_31246 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
if(cljs.core.truth_(inst_31246)){
var statearr_31266_31292 = state_31257__$1;
(statearr_31266_31292[(1)] = (12));

} else {
var statearr_31267_31293 = state_31257__$1;
(statearr_31267_31293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (9))){
var state_31257__$1 = state_31257;
var statearr_31268_31294 = state_31257__$1;
(statearr_31268_31294[(2)] = null);

(statearr_31268_31294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (5))){
var state_31257__$1 = state_31257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31269_31295 = state_31257__$1;
(statearr_31269_31295[(1)] = (8));

} else {
var statearr_31270_31296 = state_31257__$1;
(statearr_31270_31296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (14))){
var inst_31251 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31271_31297 = state_31257__$1;
(statearr_31271_31297[(2)] = inst_31251);

(statearr_31271_31297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (10))){
var inst_31243 = (state_31257[(2)]);
var state_31257__$1 = state_31257;
var statearr_31272_31298 = state_31257__$1;
(statearr_31272_31298[(2)] = inst_31243);

(statearr_31272_31298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31258 === (8))){
var inst_31240 = cljs.core.async.close_BANG_.call(null,to);
var state_31257__$1 = state_31257;
var statearr_31273_31299 = state_31257__$1;
(statearr_31273_31299[(2)] = inst_31240);

(statearr_31273_31299[(1)] = (10));


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
});})(c__10627__auto___31285))
;
return ((function (switch__10515__auto__,c__10627__auto___31285){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_31277 = [null,null,null,null,null,null,null,null];
(statearr_31277[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_31277[(1)] = (1));

return statearr_31277;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_31257){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31278){if((e31278 instanceof Object)){
var ex__10519__auto__ = e31278;
var statearr_31279_31300 = state_31257;
(statearr_31279_31300[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31301 = state_31257;
state_31257 = G__31301;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_31257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_31257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___31285))
})();
var state__10629__auto__ = (function (){var statearr_31280 = f__10628__auto__.call(null);
(statearr_31280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31285);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___31285))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31485){
var vec__31486 = p__31485;
var v = cljs.core.nth.call(null,vec__31486,(0),null);
var p = cljs.core.nth.call(null,vec__31486,(1),null);
var job = vec__31486;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10627__auto___31668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results){
return (function (state_31491){
var state_val_31492 = (state_31491[(1)]);
if((state_val_31492 === (1))){
var state_31491__$1 = state_31491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31491__$1,(2),res,v);
} else {
if((state_val_31492 === (2))){
var inst_31488 = (state_31491[(2)]);
var inst_31489 = cljs.core.async.close_BANG_.call(null,res);
var state_31491__$1 = (function (){var statearr_31493 = state_31491;
(statearr_31493[(7)] = inst_31488);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31491__$1,inst_31489);
} else {
return null;
}
}
});})(c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results))
;
return ((function (switch__10515__auto__,c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_31497 = [null,null,null,null,null,null,null,null];
(statearr_31497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__);

(statearr_31497[(1)] = (1));

return statearr_31497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1 = (function (state_31491){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31498){if((e31498 instanceof Object)){
var ex__10519__auto__ = e31498;
var statearr_31499_31669 = state_31491;
(statearr_31499_31669[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31491;
state_31491 = G__31670;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = function(state_31491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1.call(this,state_31491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results))
})();
var state__10629__auto__ = (function (){var statearr_31500 = f__10628__auto__.call(null);
(statearr_31500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31668);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___31668,res,vec__31486,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31501){
var vec__31502 = p__31501;
var v = cljs.core.nth.call(null,vec__31502,(0),null);
var p = cljs.core.nth.call(null,vec__31502,(1),null);
var job = vec__31502;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5034__auto___31671 = n;
var __31672 = (0);
while(true){
if((__31672 < n__5034__auto___31671)){
var G__31503_31673 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31503_31673) {
case "compute":
var c__10627__auto___31675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31672,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (__31672,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function (state_31516){
var state_val_31517 = (state_31516[(1)]);
if((state_val_31517 === (1))){
var state_31516__$1 = state_31516;
var statearr_31518_31676 = state_31516__$1;
(statearr_31518_31676[(2)] = null);

(statearr_31518_31676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (2))){
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31516__$1,(4),jobs);
} else {
if((state_val_31517 === (3))){
var inst_31514 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31516__$1,inst_31514);
} else {
if((state_val_31517 === (4))){
var inst_31506 = (state_31516[(2)]);
var inst_31507 = process.call(null,inst_31506);
var state_31516__$1 = state_31516;
if(cljs.core.truth_(inst_31507)){
var statearr_31519_31677 = state_31516__$1;
(statearr_31519_31677[(1)] = (5));

} else {
var statearr_31520_31678 = state_31516__$1;
(statearr_31520_31678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (5))){
var state_31516__$1 = state_31516;
var statearr_31521_31679 = state_31516__$1;
(statearr_31521_31679[(2)] = null);

(statearr_31521_31679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (6))){
var state_31516__$1 = state_31516;
var statearr_31522_31680 = state_31516__$1;
(statearr_31522_31680[(2)] = null);

(statearr_31522_31680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31517 === (7))){
var inst_31512 = (state_31516[(2)]);
var state_31516__$1 = state_31516;
var statearr_31523_31681 = state_31516__$1;
(statearr_31523_31681[(2)] = inst_31512);

(statearr_31523_31681[(1)] = (3));


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
});})(__31672,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
;
return ((function (__31672,switch__10515__auto__,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_31527 = [null,null,null,null,null,null,null];
(statearr_31527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__);

(statearr_31527[(1)] = (1));

return statearr_31527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1 = (function (state_31516){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31528){if((e31528 instanceof Object)){
var ex__10519__auto__ = e31528;
var statearr_31529_31682 = state_31516;
(statearr_31529_31682[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31683 = state_31516;
state_31516 = G__31683;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = function(state_31516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1.call(this,state_31516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__;
})()
;})(__31672,switch__10515__auto__,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
})();
var state__10629__auto__ = (function (){var statearr_31530 = f__10628__auto__.call(null);
(statearr_31530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31675);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(__31672,c__10627__auto___31675,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
);


break;
case "async":
var c__10627__auto___31684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31672,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (__31672,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function (state_31543){
var state_val_31544 = (state_31543[(1)]);
if((state_val_31544 === (1))){
var state_31543__$1 = state_31543;
var statearr_31545_31685 = state_31543__$1;
(statearr_31545_31685[(2)] = null);

(statearr_31545_31685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (2))){
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31543__$1,(4),jobs);
} else {
if((state_val_31544 === (3))){
var inst_31541 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31543__$1,inst_31541);
} else {
if((state_val_31544 === (4))){
var inst_31533 = (state_31543[(2)]);
var inst_31534 = async.call(null,inst_31533);
var state_31543__$1 = state_31543;
if(cljs.core.truth_(inst_31534)){
var statearr_31546_31686 = state_31543__$1;
(statearr_31546_31686[(1)] = (5));

} else {
var statearr_31547_31687 = state_31543__$1;
(statearr_31547_31687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (5))){
var state_31543__$1 = state_31543;
var statearr_31548_31688 = state_31543__$1;
(statearr_31548_31688[(2)] = null);

(statearr_31548_31688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (6))){
var state_31543__$1 = state_31543;
var statearr_31549_31689 = state_31543__$1;
(statearr_31549_31689[(2)] = null);

(statearr_31549_31689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31544 === (7))){
var inst_31539 = (state_31543[(2)]);
var state_31543__$1 = state_31543;
var statearr_31550_31690 = state_31543__$1;
(statearr_31550_31690[(2)] = inst_31539);

(statearr_31550_31690[(1)] = (3));


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
});})(__31672,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
;
return ((function (__31672,switch__10515__auto__,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_31554 = [null,null,null,null,null,null,null];
(statearr_31554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__);

(statearr_31554[(1)] = (1));

return statearr_31554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1 = (function (state_31543){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31555){if((e31555 instanceof Object)){
var ex__10519__auto__ = e31555;
var statearr_31556_31691 = state_31543;
(statearr_31556_31691[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31692 = state_31543;
state_31543 = G__31692;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = function(state_31543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1.call(this,state_31543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__;
})()
;})(__31672,switch__10515__auto__,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
})();
var state__10629__auto__ = (function (){var statearr_31557 = f__10628__auto__.call(null);
(statearr_31557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31684);

return statearr_31557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(__31672,c__10627__auto___31684,G__31503_31673,n__5034__auto___31671,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31693 = (__31672 + (1));
__31672 = G__31693;
continue;
} else {
}
break;
}

var c__10627__auto___31694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___31694,jobs,results,process,async){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___31694,jobs,results,process,async){
return (function (state_31579){
var state_val_31580 = (state_31579[(1)]);
if((state_val_31580 === (1))){
var state_31579__$1 = state_31579;
var statearr_31581_31695 = state_31579__$1;
(statearr_31581_31695[(2)] = null);

(statearr_31581_31695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (2))){
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31579__$1,(4),from);
} else {
if((state_val_31580 === (3))){
var inst_31577 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31579__$1,inst_31577);
} else {
if((state_val_31580 === (4))){
var inst_31560 = (state_31579[(7)]);
var inst_31560__$1 = (state_31579[(2)]);
var inst_31561 = (inst_31560__$1 == null);
var state_31579__$1 = (function (){var statearr_31582 = state_31579;
(statearr_31582[(7)] = inst_31560__$1);

return statearr_31582;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31583_31696 = state_31579__$1;
(statearr_31583_31696[(1)] = (5));

} else {
var statearr_31584_31697 = state_31579__$1;
(statearr_31584_31697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (5))){
var inst_31563 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31579__$1 = state_31579;
var statearr_31585_31698 = state_31579__$1;
(statearr_31585_31698[(2)] = inst_31563);

(statearr_31585_31698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (6))){
var inst_31565 = (state_31579[(8)]);
var inst_31560 = (state_31579[(7)]);
var inst_31565__$1 = cljs.core.async.chan.call(null,(1));
var inst_31566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31567 = [inst_31560,inst_31565__$1];
var inst_31568 = (new cljs.core.PersistentVector(null,2,(5),inst_31566,inst_31567,null));
var state_31579__$1 = (function (){var statearr_31586 = state_31579;
(statearr_31586[(8)] = inst_31565__$1);

return statearr_31586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31579__$1,(8),jobs,inst_31568);
} else {
if((state_val_31580 === (7))){
var inst_31575 = (state_31579[(2)]);
var state_31579__$1 = state_31579;
var statearr_31587_31699 = state_31579__$1;
(statearr_31587_31699[(2)] = inst_31575);

(statearr_31587_31699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31580 === (8))){
var inst_31565 = (state_31579[(8)]);
var inst_31570 = (state_31579[(2)]);
var state_31579__$1 = (function (){var statearr_31588 = state_31579;
(statearr_31588[(9)] = inst_31570);

return statearr_31588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31579__$1,(9),results,inst_31565);
} else {
if((state_val_31580 === (9))){
var inst_31572 = (state_31579[(2)]);
var state_31579__$1 = (function (){var statearr_31589 = state_31579;
(statearr_31589[(10)] = inst_31572);

return statearr_31589;
})();
var statearr_31590_31700 = state_31579__$1;
(statearr_31590_31700[(2)] = null);

(statearr_31590_31700[(1)] = (2));


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
});})(c__10627__auto___31694,jobs,results,process,async))
;
return ((function (switch__10515__auto__,c__10627__auto___31694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_31594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__);

(statearr_31594[(1)] = (1));

return statearr_31594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1 = (function (state_31579){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31595){if((e31595 instanceof Object)){
var ex__10519__auto__ = e31595;
var statearr_31596_31701 = state_31579;
(statearr_31596_31701[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31702 = state_31579;
state_31579 = G__31702;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = function(state_31579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1.call(this,state_31579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___31694,jobs,results,process,async))
})();
var state__10629__auto__ = (function (){var statearr_31597 = f__10628__auto__.call(null);
(statearr_31597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31694);

return statearr_31597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___31694,jobs,results,process,async))
);


var c__10627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto__,jobs,results,process,async){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto__,jobs,results,process,async){
return (function (state_31635){
var state_val_31636 = (state_31635[(1)]);
if((state_val_31636 === (7))){
var inst_31631 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31637_31703 = state_31635__$1;
(statearr_31637_31703[(2)] = inst_31631);

(statearr_31637_31703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (20))){
var state_31635__$1 = state_31635;
var statearr_31638_31704 = state_31635__$1;
(statearr_31638_31704[(2)] = null);

(statearr_31638_31704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (1))){
var state_31635__$1 = state_31635;
var statearr_31639_31705 = state_31635__$1;
(statearr_31639_31705[(2)] = null);

(statearr_31639_31705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (4))){
var inst_31600 = (state_31635[(7)]);
var inst_31600__$1 = (state_31635[(2)]);
var inst_31601 = (inst_31600__$1 == null);
var state_31635__$1 = (function (){var statearr_31640 = state_31635;
(statearr_31640[(7)] = inst_31600__$1);

return statearr_31640;
})();
if(cljs.core.truth_(inst_31601)){
var statearr_31641_31706 = state_31635__$1;
(statearr_31641_31706[(1)] = (5));

} else {
var statearr_31642_31707 = state_31635__$1;
(statearr_31642_31707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (15))){
var inst_31613 = (state_31635[(8)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31635__$1,(18),to,inst_31613);
} else {
if((state_val_31636 === (21))){
var inst_31626 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31643_31708 = state_31635__$1;
(statearr_31643_31708[(2)] = inst_31626);

(statearr_31643_31708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (13))){
var inst_31628 = (state_31635[(2)]);
var state_31635__$1 = (function (){var statearr_31644 = state_31635;
(statearr_31644[(9)] = inst_31628);

return statearr_31644;
})();
var statearr_31645_31709 = state_31635__$1;
(statearr_31645_31709[(2)] = null);

(statearr_31645_31709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (6))){
var inst_31600 = (state_31635[(7)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31635__$1,(11),inst_31600);
} else {
if((state_val_31636 === (17))){
var inst_31621 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
if(cljs.core.truth_(inst_31621)){
var statearr_31646_31710 = state_31635__$1;
(statearr_31646_31710[(1)] = (19));

} else {
var statearr_31647_31711 = state_31635__$1;
(statearr_31647_31711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (3))){
var inst_31633 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31635__$1,inst_31633);
} else {
if((state_val_31636 === (12))){
var inst_31610 = (state_31635[(10)]);
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31635__$1,(14),inst_31610);
} else {
if((state_val_31636 === (2))){
var state_31635__$1 = state_31635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31635__$1,(4),results);
} else {
if((state_val_31636 === (19))){
var state_31635__$1 = state_31635;
var statearr_31648_31712 = state_31635__$1;
(statearr_31648_31712[(2)] = null);

(statearr_31648_31712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (11))){
var inst_31610 = (state_31635[(2)]);
var state_31635__$1 = (function (){var statearr_31649 = state_31635;
(statearr_31649[(10)] = inst_31610);

return statearr_31649;
})();
var statearr_31650_31713 = state_31635__$1;
(statearr_31650_31713[(2)] = null);

(statearr_31650_31713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (9))){
var state_31635__$1 = state_31635;
var statearr_31651_31714 = state_31635__$1;
(statearr_31651_31714[(2)] = null);

(statearr_31651_31714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (5))){
var state_31635__$1 = state_31635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31652_31715 = state_31635__$1;
(statearr_31652_31715[(1)] = (8));

} else {
var statearr_31653_31716 = state_31635__$1;
(statearr_31653_31716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (14))){
var inst_31615 = (state_31635[(11)]);
var inst_31613 = (state_31635[(8)]);
var inst_31613__$1 = (state_31635[(2)]);
var inst_31614 = (inst_31613__$1 == null);
var inst_31615__$1 = cljs.core.not.call(null,inst_31614);
var state_31635__$1 = (function (){var statearr_31654 = state_31635;
(statearr_31654[(11)] = inst_31615__$1);

(statearr_31654[(8)] = inst_31613__$1);

return statearr_31654;
})();
if(inst_31615__$1){
var statearr_31655_31717 = state_31635__$1;
(statearr_31655_31717[(1)] = (15));

} else {
var statearr_31656_31718 = state_31635__$1;
(statearr_31656_31718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (16))){
var inst_31615 = (state_31635[(11)]);
var state_31635__$1 = state_31635;
var statearr_31657_31719 = state_31635__$1;
(statearr_31657_31719[(2)] = inst_31615);

(statearr_31657_31719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (10))){
var inst_31607 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31658_31720 = state_31635__$1;
(statearr_31658_31720[(2)] = inst_31607);

(statearr_31658_31720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (18))){
var inst_31618 = (state_31635[(2)]);
var state_31635__$1 = state_31635;
var statearr_31659_31721 = state_31635__$1;
(statearr_31659_31721[(2)] = inst_31618);

(statearr_31659_31721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31636 === (8))){
var inst_31604 = cljs.core.async.close_BANG_.call(null,to);
var state_31635__$1 = state_31635;
var statearr_31660_31722 = state_31635__$1;
(statearr_31660_31722[(2)] = inst_31604);

(statearr_31660_31722[(1)] = (10));


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
});})(c__10627__auto__,jobs,results,process,async))
;
return ((function (switch__10515__auto__,c__10627__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_31664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__);

(statearr_31664[(1)] = (1));

return statearr_31664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1 = (function (state_31635){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31665){if((e31665 instanceof Object)){
var ex__10519__auto__ = e31665;
var statearr_31666_31723 = state_31635;
(statearr_31666_31723[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31724 = state_31635;
state_31635 = G__31724;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__ = function(state_31635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1.call(this,state_31635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto__,jobs,results,process,async))
})();
var state__10629__auto__ = (function (){var statearr_31667 = f__10628__auto__.call(null);
(statearr_31667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto__);

return statearr_31667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto__,jobs,results,process,async))
);

return c__10627__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args31725 = [];
var len__5189__auto___31728 = arguments.length;
var i__5190__auto___31729 = (0);
while(true){
if((i__5190__auto___31729 < len__5189__auto___31728)){
args31725.push((arguments[i__5190__auto___31729]));

var G__31730 = (i__5190__auto___31729 + (1));
i__5190__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var G__31727 = args31725.length;
switch (G__31727) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31725.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args31732 = [];
var len__5189__auto___31735 = arguments.length;
var i__5190__auto___31736 = (0);
while(true){
if((i__5190__auto___31736 < len__5189__auto___31735)){
args31732.push((arguments[i__5190__auto___31736]));

var G__31737 = (i__5190__auto___31736 + (1));
i__5190__auto___31736 = G__31737;
continue;
} else {
}
break;
}

var G__31734 = args31732.length;
switch (G__31734) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31732.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args31739 = [];
var len__5189__auto___31792 = arguments.length;
var i__5190__auto___31793 = (0);
while(true){
if((i__5190__auto___31793 < len__5189__auto___31792)){
args31739.push((arguments[i__5190__auto___31793]));

var G__31794 = (i__5190__auto___31793 + (1));
i__5190__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31741 = args31739.length;
switch (G__31741) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31739.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10627__auto___31796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___31796,tc,fc){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___31796,tc,fc){
return (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (7))){
var inst_31763 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31769_31797 = state_31767__$1;
(statearr_31769_31797[(2)] = inst_31763);

(statearr_31769_31797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (1))){
var state_31767__$1 = state_31767;
var statearr_31770_31798 = state_31767__$1;
(statearr_31770_31798[(2)] = null);

(statearr_31770_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (4))){
var inst_31744 = (state_31767[(7)]);
var inst_31744__$1 = (state_31767[(2)]);
var inst_31745 = (inst_31744__$1 == null);
var state_31767__$1 = (function (){var statearr_31771 = state_31767;
(statearr_31771[(7)] = inst_31744__$1);

return statearr_31771;
})();
if(cljs.core.truth_(inst_31745)){
var statearr_31772_31799 = state_31767__$1;
(statearr_31772_31799[(1)] = (5));

} else {
var statearr_31773_31800 = state_31767__$1;
(statearr_31773_31800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (13))){
var state_31767__$1 = state_31767;
var statearr_31774_31801 = state_31767__$1;
(statearr_31774_31801[(2)] = null);

(statearr_31774_31801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (6))){
var inst_31744 = (state_31767[(7)]);
var inst_31750 = p.call(null,inst_31744);
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31750)){
var statearr_31775_31802 = state_31767__$1;
(statearr_31775_31802[(1)] = (9));

} else {
var statearr_31776_31803 = state_31767__$1;
(statearr_31776_31803[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (3))){
var inst_31765 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31767__$1,inst_31765);
} else {
if((state_val_31768 === (12))){
var state_31767__$1 = state_31767;
var statearr_31777_31804 = state_31767__$1;
(statearr_31777_31804[(2)] = null);

(statearr_31777_31804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (2))){
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31767__$1,(4),ch);
} else {
if((state_val_31768 === (11))){
var inst_31744 = (state_31767[(7)]);
var inst_31754 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31767__$1,(8),inst_31754,inst_31744);
} else {
if((state_val_31768 === (9))){
var state_31767__$1 = state_31767;
var statearr_31778_31805 = state_31767__$1;
(statearr_31778_31805[(2)] = tc);

(statearr_31778_31805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (5))){
var inst_31747 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31748 = cljs.core.async.close_BANG_.call(null,fc);
var state_31767__$1 = (function (){var statearr_31779 = state_31767;
(statearr_31779[(8)] = inst_31747);

return statearr_31779;
})();
var statearr_31780_31806 = state_31767__$1;
(statearr_31780_31806[(2)] = inst_31748);

(statearr_31780_31806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (14))){
var inst_31761 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
var statearr_31781_31807 = state_31767__$1;
(statearr_31781_31807[(2)] = inst_31761);

(statearr_31781_31807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (10))){
var state_31767__$1 = state_31767;
var statearr_31782_31808 = state_31767__$1;
(statearr_31782_31808[(2)] = fc);

(statearr_31782_31808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31768 === (8))){
var inst_31756 = (state_31767[(2)]);
var state_31767__$1 = state_31767;
if(cljs.core.truth_(inst_31756)){
var statearr_31783_31809 = state_31767__$1;
(statearr_31783_31809[(1)] = (12));

} else {
var statearr_31784_31810 = state_31767__$1;
(statearr_31784_31810[(1)] = (13));

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
});})(c__10627__auto___31796,tc,fc))
;
return ((function (switch__10515__auto__,c__10627__auto___31796,tc,fc){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_31788 = [null,null,null,null,null,null,null,null,null];
(statearr_31788[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_31788[(1)] = (1));

return statearr_31788;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_31767){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31789){if((e31789 instanceof Object)){
var ex__10519__auto__ = e31789;
var statearr_31790_31811 = state_31767;
(statearr_31790_31811[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31812 = state_31767;
state_31767 = G__31812;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___31796,tc,fc))
})();
var state__10629__auto__ = (function (){var statearr_31791 = f__10628__auto__.call(null);
(statearr_31791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___31796);

return statearr_31791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___31796,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto__){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto__){
return (function (state_31859){
var state_val_31860 = (state_31859[(1)]);
if((state_val_31860 === (1))){
var inst_31845 = init;
var state_31859__$1 = (function (){var statearr_31861 = state_31859;
(statearr_31861[(7)] = inst_31845);

return statearr_31861;
})();
var statearr_31862_31877 = state_31859__$1;
(statearr_31862_31877[(2)] = null);

(statearr_31862_31877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (2))){
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31859__$1,(4),ch);
} else {
if((state_val_31860 === (3))){
var inst_31857 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31859__$1,inst_31857);
} else {
if((state_val_31860 === (4))){
var inst_31848 = (state_31859[(8)]);
var inst_31848__$1 = (state_31859[(2)]);
var inst_31849 = (inst_31848__$1 == null);
var state_31859__$1 = (function (){var statearr_31863 = state_31859;
(statearr_31863[(8)] = inst_31848__$1);

return statearr_31863;
})();
if(cljs.core.truth_(inst_31849)){
var statearr_31864_31878 = state_31859__$1;
(statearr_31864_31878[(1)] = (5));

} else {
var statearr_31865_31879 = state_31859__$1;
(statearr_31865_31879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (5))){
var inst_31845 = (state_31859[(7)]);
var state_31859__$1 = state_31859;
var statearr_31866_31880 = state_31859__$1;
(statearr_31866_31880[(2)] = inst_31845);

(statearr_31866_31880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (6))){
var inst_31845 = (state_31859[(7)]);
var inst_31848 = (state_31859[(8)]);
var inst_31852 = f.call(null,inst_31845,inst_31848);
var inst_31845__$1 = inst_31852;
var state_31859__$1 = (function (){var statearr_31867 = state_31859;
(statearr_31867[(7)] = inst_31845__$1);

return statearr_31867;
})();
var statearr_31868_31881 = state_31859__$1;
(statearr_31868_31881[(2)] = null);

(statearr_31868_31881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31860 === (7))){
var inst_31855 = (state_31859[(2)]);
var state_31859__$1 = state_31859;
var statearr_31869_31882 = state_31859__$1;
(statearr_31869_31882[(2)] = inst_31855);

(statearr_31869_31882[(1)] = (3));


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
});})(c__10627__auto__))
;
return ((function (switch__10515__auto__,c__10627__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10516__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10516__auto____0 = (function (){
var statearr_31873 = [null,null,null,null,null,null,null,null,null];
(statearr_31873[(0)] = cljs$core$async$reduce_$_state_machine__10516__auto__);

(statearr_31873[(1)] = (1));

return statearr_31873;
});
var cljs$core$async$reduce_$_state_machine__10516__auto____1 = (function (state_31859){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31874){if((e31874 instanceof Object)){
var ex__10519__auto__ = e31874;
var statearr_31875_31883 = state_31859;
(statearr_31875_31883[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31884 = state_31859;
state_31859 = G__31884;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10516__auto__ = function(state_31859){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10516__auto____1.call(this,state_31859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10516__auto____0;
cljs$core$async$reduce_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10516__auto____1;
return cljs$core$async$reduce_$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto__))
})();
var state__10629__auto__ = (function (){var statearr_31876 = f__10628__auto__.call(null);
(statearr_31876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto__);

return statearr_31876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto__))
);

return c__10627__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31885 = [];
var len__5189__auto___31937 = arguments.length;
var i__5190__auto___31938 = (0);
while(true){
if((i__5190__auto___31938 < len__5189__auto___31937)){
args31885.push((arguments[i__5190__auto___31938]));

var G__31939 = (i__5190__auto___31938 + (1));
i__5190__auto___31938 = G__31939;
continue;
} else {
}
break;
}

var G__31887 = args31885.length;
switch (G__31887) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31885.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto__){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto__){
return (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (7))){
var inst_31894 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31914_31941 = state_31912__$1;
(statearr_31914_31941[(2)] = inst_31894);

(statearr_31914_31941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (1))){
var inst_31888 = cljs.core.seq.call(null,coll);
var inst_31889 = inst_31888;
var state_31912__$1 = (function (){var statearr_31915 = state_31912;
(statearr_31915[(7)] = inst_31889);

return statearr_31915;
})();
var statearr_31916_31942 = state_31912__$1;
(statearr_31916_31942[(2)] = null);

(statearr_31916_31942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (4))){
var inst_31889 = (state_31912[(7)]);
var inst_31892 = cljs.core.first.call(null,inst_31889);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31912__$1,(7),ch,inst_31892);
} else {
if((state_val_31913 === (13))){
var inst_31906 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31917_31943 = state_31912__$1;
(statearr_31917_31943[(2)] = inst_31906);

(statearr_31917_31943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var inst_31897 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31897)){
var statearr_31918_31944 = state_31912__$1;
(statearr_31918_31944[(1)] = (8));

} else {
var statearr_31919_31945 = state_31912__$1;
(statearr_31919_31945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (3))){
var inst_31910 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (12))){
var state_31912__$1 = state_31912;
var statearr_31920_31946 = state_31912__$1;
(statearr_31920_31946[(2)] = null);

(statearr_31920_31946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (2))){
var inst_31889 = (state_31912[(7)]);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31889)){
var statearr_31921_31947 = state_31912__$1;
(statearr_31921_31947[(1)] = (4));

} else {
var statearr_31922_31948 = state_31912__$1;
(statearr_31922_31948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (11))){
var inst_31903 = cljs.core.async.close_BANG_.call(null,ch);
var state_31912__$1 = state_31912;
var statearr_31923_31949 = state_31912__$1;
(statearr_31923_31949[(2)] = inst_31903);

(statearr_31923_31949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (9))){
var state_31912__$1 = state_31912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31924_31950 = state_31912__$1;
(statearr_31924_31950[(1)] = (11));

} else {
var statearr_31925_31951 = state_31912__$1;
(statearr_31925_31951[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (5))){
var inst_31889 = (state_31912[(7)]);
var state_31912__$1 = state_31912;
var statearr_31926_31952 = state_31912__$1;
(statearr_31926_31952[(2)] = inst_31889);

(statearr_31926_31952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (10))){
var inst_31908 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31927_31953 = state_31912__$1;
(statearr_31927_31953[(2)] = inst_31908);

(statearr_31927_31953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (8))){
var inst_31889 = (state_31912[(7)]);
var inst_31899 = cljs.core.next.call(null,inst_31889);
var inst_31889__$1 = inst_31899;
var state_31912__$1 = (function (){var statearr_31928 = state_31912;
(statearr_31928[(7)] = inst_31889__$1);

return statearr_31928;
})();
var statearr_31929_31954 = state_31912__$1;
(statearr_31929_31954[(2)] = null);

(statearr_31929_31954[(1)] = (2));


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
});})(c__10627__auto__))
;
return ((function (switch__10515__auto__,c__10627__auto__){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_31933 = [null,null,null,null,null,null,null,null];
(statearr_31933[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_31933[(1)] = (1));

return statearr_31933;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_31912){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_31912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e31934){if((e31934 instanceof Object)){
var ex__10519__auto__ = e31934;
var statearr_31935_31955 = state_31912;
(statearr_31935_31955[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31956 = state_31912;
state_31912 = G__31956;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto__))
})();
var state__10629__auto__ = (function (){var statearr_31936 = f__10628__auto__.call(null);
(statearr_31936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto__);

return statearr_31936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto__))
);

return c__10627__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4786__auto__ = (((_ == null))?null:_);
var m__4787__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,_);
} else {
var m__4787__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4787__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,ch);
} else {
var m__4787__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m);
} else {
var m__4787__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32178 = (function (mult,ch,cs,meta32179){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32179 = meta32179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32180,meta32179__$1){
var self__ = this;
var _32180__$1 = this;
return (new cljs.core.async.t_cljs$core$async32178(self__.mult,self__.ch,self__.cs,meta32179__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32180){
var self__ = this;
var _32180__$1 = this;
return self__.meta32179;
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32179","meta32179",78861087,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32178";

cljs.core.async.t_cljs$core$async32178.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async32178");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32178 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32178(mult__$1,ch__$1,cs__$1,meta32179){
return (new cljs.core.async.t_cljs$core$async32178(mult__$1,ch__$1,cs__$1,meta32179));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32178(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10627__auto___32399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___32399,cs,m,dchan,dctr,done){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___32399,cs,m,dchan,dctr,done){
return (function (state_32311){
var state_val_32312 = (state_32311[(1)]);
if((state_val_32312 === (7))){
var inst_32307 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32313_32400 = state_32311__$1;
(statearr_32313_32400[(2)] = inst_32307);

(statearr_32313_32400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (20))){
var inst_32212 = (state_32311[(7)]);
var inst_32222 = cljs.core.first.call(null,inst_32212);
var inst_32223 = cljs.core.nth.call(null,inst_32222,(0),null);
var inst_32224 = cljs.core.nth.call(null,inst_32222,(1),null);
var state_32311__$1 = (function (){var statearr_32314 = state_32311;
(statearr_32314[(8)] = inst_32223);

return statearr_32314;
})();
if(cljs.core.truth_(inst_32224)){
var statearr_32315_32401 = state_32311__$1;
(statearr_32315_32401[(1)] = (22));

} else {
var statearr_32316_32402 = state_32311__$1;
(statearr_32316_32402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (27))){
var inst_32252 = (state_32311[(9)]);
var inst_32259 = (state_32311[(10)]);
var inst_32254 = (state_32311[(11)]);
var inst_32183 = (state_32311[(12)]);
var inst_32259__$1 = cljs.core._nth.call(null,inst_32252,inst_32254);
var inst_32260 = cljs.core.async.put_BANG_.call(null,inst_32259__$1,inst_32183,done);
var state_32311__$1 = (function (){var statearr_32317 = state_32311;
(statearr_32317[(10)] = inst_32259__$1);

return statearr_32317;
})();
if(cljs.core.truth_(inst_32260)){
var statearr_32318_32403 = state_32311__$1;
(statearr_32318_32403[(1)] = (30));

} else {
var statearr_32319_32404 = state_32311__$1;
(statearr_32319_32404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (1))){
var state_32311__$1 = state_32311;
var statearr_32320_32405 = state_32311__$1;
(statearr_32320_32405[(2)] = null);

(statearr_32320_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (24))){
var inst_32212 = (state_32311[(7)]);
var inst_32229 = (state_32311[(2)]);
var inst_32230 = cljs.core.next.call(null,inst_32212);
var inst_32192 = inst_32230;
var inst_32193 = null;
var inst_32194 = (0);
var inst_32195 = (0);
var state_32311__$1 = (function (){var statearr_32321 = state_32311;
(statearr_32321[(13)] = inst_32195);

(statearr_32321[(14)] = inst_32229);

(statearr_32321[(15)] = inst_32192);

(statearr_32321[(16)] = inst_32193);

(statearr_32321[(17)] = inst_32194);

return statearr_32321;
})();
var statearr_32322_32406 = state_32311__$1;
(statearr_32322_32406[(2)] = null);

(statearr_32322_32406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (39))){
var state_32311__$1 = state_32311;
var statearr_32326_32407 = state_32311__$1;
(statearr_32326_32407[(2)] = null);

(statearr_32326_32407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (4))){
var inst_32183 = (state_32311[(12)]);
var inst_32183__$1 = (state_32311[(2)]);
var inst_32184 = (inst_32183__$1 == null);
var state_32311__$1 = (function (){var statearr_32327 = state_32311;
(statearr_32327[(12)] = inst_32183__$1);

return statearr_32327;
})();
if(cljs.core.truth_(inst_32184)){
var statearr_32328_32408 = state_32311__$1;
(statearr_32328_32408[(1)] = (5));

} else {
var statearr_32329_32409 = state_32311__$1;
(statearr_32329_32409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (15))){
var inst_32195 = (state_32311[(13)]);
var inst_32192 = (state_32311[(15)]);
var inst_32193 = (state_32311[(16)]);
var inst_32194 = (state_32311[(17)]);
var inst_32208 = (state_32311[(2)]);
var inst_32209 = (inst_32195 + (1));
var tmp32323 = inst_32192;
var tmp32324 = inst_32193;
var tmp32325 = inst_32194;
var inst_32192__$1 = tmp32323;
var inst_32193__$1 = tmp32324;
var inst_32194__$1 = tmp32325;
var inst_32195__$1 = inst_32209;
var state_32311__$1 = (function (){var statearr_32330 = state_32311;
(statearr_32330[(13)] = inst_32195__$1);

(statearr_32330[(18)] = inst_32208);

(statearr_32330[(15)] = inst_32192__$1);

(statearr_32330[(16)] = inst_32193__$1);

(statearr_32330[(17)] = inst_32194__$1);

return statearr_32330;
})();
var statearr_32331_32410 = state_32311__$1;
(statearr_32331_32410[(2)] = null);

(statearr_32331_32410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (21))){
var inst_32233 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32335_32411 = state_32311__$1;
(statearr_32335_32411[(2)] = inst_32233);

(statearr_32335_32411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (31))){
var inst_32259 = (state_32311[(10)]);
var inst_32263 = done.call(null,null);
var inst_32264 = cljs.core.async.untap_STAR_.call(null,m,inst_32259);
var state_32311__$1 = (function (){var statearr_32336 = state_32311;
(statearr_32336[(19)] = inst_32263);

return statearr_32336;
})();
var statearr_32337_32412 = state_32311__$1;
(statearr_32337_32412[(2)] = inst_32264);

(statearr_32337_32412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (32))){
var inst_32253 = (state_32311[(20)]);
var inst_32252 = (state_32311[(9)]);
var inst_32251 = (state_32311[(21)]);
var inst_32254 = (state_32311[(11)]);
var inst_32266 = (state_32311[(2)]);
var inst_32267 = (inst_32254 + (1));
var tmp32332 = inst_32253;
var tmp32333 = inst_32252;
var tmp32334 = inst_32251;
var inst_32251__$1 = tmp32334;
var inst_32252__$1 = tmp32333;
var inst_32253__$1 = tmp32332;
var inst_32254__$1 = inst_32267;
var state_32311__$1 = (function (){var statearr_32338 = state_32311;
(statearr_32338[(20)] = inst_32253__$1);

(statearr_32338[(22)] = inst_32266);

(statearr_32338[(9)] = inst_32252__$1);

(statearr_32338[(21)] = inst_32251__$1);

(statearr_32338[(11)] = inst_32254__$1);

return statearr_32338;
})();
var statearr_32339_32413 = state_32311__$1;
(statearr_32339_32413[(2)] = null);

(statearr_32339_32413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (40))){
var inst_32279 = (state_32311[(23)]);
var inst_32283 = done.call(null,null);
var inst_32284 = cljs.core.async.untap_STAR_.call(null,m,inst_32279);
var state_32311__$1 = (function (){var statearr_32340 = state_32311;
(statearr_32340[(24)] = inst_32283);

return statearr_32340;
})();
var statearr_32341_32414 = state_32311__$1;
(statearr_32341_32414[(2)] = inst_32284);

(statearr_32341_32414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (33))){
var inst_32270 = (state_32311[(25)]);
var inst_32272 = cljs.core.chunked_seq_QMARK_.call(null,inst_32270);
var state_32311__$1 = state_32311;
if(inst_32272){
var statearr_32342_32415 = state_32311__$1;
(statearr_32342_32415[(1)] = (36));

} else {
var statearr_32343_32416 = state_32311__$1;
(statearr_32343_32416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (13))){
var inst_32202 = (state_32311[(26)]);
var inst_32205 = cljs.core.async.close_BANG_.call(null,inst_32202);
var state_32311__$1 = state_32311;
var statearr_32344_32417 = state_32311__$1;
(statearr_32344_32417[(2)] = inst_32205);

(statearr_32344_32417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (22))){
var inst_32223 = (state_32311[(8)]);
var inst_32226 = cljs.core.async.close_BANG_.call(null,inst_32223);
var state_32311__$1 = state_32311;
var statearr_32345_32418 = state_32311__$1;
(statearr_32345_32418[(2)] = inst_32226);

(statearr_32345_32418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (36))){
var inst_32270 = (state_32311[(25)]);
var inst_32274 = cljs.core.chunk_first.call(null,inst_32270);
var inst_32275 = cljs.core.chunk_rest.call(null,inst_32270);
var inst_32276 = cljs.core.count.call(null,inst_32274);
var inst_32251 = inst_32275;
var inst_32252 = inst_32274;
var inst_32253 = inst_32276;
var inst_32254 = (0);
var state_32311__$1 = (function (){var statearr_32346 = state_32311;
(statearr_32346[(20)] = inst_32253);

(statearr_32346[(9)] = inst_32252);

(statearr_32346[(21)] = inst_32251);

(statearr_32346[(11)] = inst_32254);

return statearr_32346;
})();
var statearr_32347_32419 = state_32311__$1;
(statearr_32347_32419[(2)] = null);

(statearr_32347_32419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (41))){
var inst_32270 = (state_32311[(25)]);
var inst_32286 = (state_32311[(2)]);
var inst_32287 = cljs.core.next.call(null,inst_32270);
var inst_32251 = inst_32287;
var inst_32252 = null;
var inst_32253 = (0);
var inst_32254 = (0);
var state_32311__$1 = (function (){var statearr_32348 = state_32311;
(statearr_32348[(20)] = inst_32253);

(statearr_32348[(27)] = inst_32286);

(statearr_32348[(9)] = inst_32252);

(statearr_32348[(21)] = inst_32251);

(statearr_32348[(11)] = inst_32254);

return statearr_32348;
})();
var statearr_32349_32420 = state_32311__$1;
(statearr_32349_32420[(2)] = null);

(statearr_32349_32420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (43))){
var state_32311__$1 = state_32311;
var statearr_32350_32421 = state_32311__$1;
(statearr_32350_32421[(2)] = null);

(statearr_32350_32421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (29))){
var inst_32295 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32351_32422 = state_32311__$1;
(statearr_32351_32422[(2)] = inst_32295);

(statearr_32351_32422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (44))){
var inst_32304 = (state_32311[(2)]);
var state_32311__$1 = (function (){var statearr_32352 = state_32311;
(statearr_32352[(28)] = inst_32304);

return statearr_32352;
})();
var statearr_32353_32423 = state_32311__$1;
(statearr_32353_32423[(2)] = null);

(statearr_32353_32423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (6))){
var inst_32243 = (state_32311[(29)]);
var inst_32242 = cljs.core.deref.call(null,cs);
var inst_32243__$1 = cljs.core.keys.call(null,inst_32242);
var inst_32244 = cljs.core.count.call(null,inst_32243__$1);
var inst_32245 = cljs.core.reset_BANG_.call(null,dctr,inst_32244);
var inst_32250 = cljs.core.seq.call(null,inst_32243__$1);
var inst_32251 = inst_32250;
var inst_32252 = null;
var inst_32253 = (0);
var inst_32254 = (0);
var state_32311__$1 = (function (){var statearr_32354 = state_32311;
(statearr_32354[(20)] = inst_32253);

(statearr_32354[(9)] = inst_32252);

(statearr_32354[(21)] = inst_32251);

(statearr_32354[(29)] = inst_32243__$1);

(statearr_32354[(30)] = inst_32245);

(statearr_32354[(11)] = inst_32254);

return statearr_32354;
})();
var statearr_32355_32424 = state_32311__$1;
(statearr_32355_32424[(2)] = null);

(statearr_32355_32424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (28))){
var inst_32270 = (state_32311[(25)]);
var inst_32251 = (state_32311[(21)]);
var inst_32270__$1 = cljs.core.seq.call(null,inst_32251);
var state_32311__$1 = (function (){var statearr_32356 = state_32311;
(statearr_32356[(25)] = inst_32270__$1);

return statearr_32356;
})();
if(inst_32270__$1){
var statearr_32357_32425 = state_32311__$1;
(statearr_32357_32425[(1)] = (33));

} else {
var statearr_32358_32426 = state_32311__$1;
(statearr_32358_32426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (25))){
var inst_32253 = (state_32311[(20)]);
var inst_32254 = (state_32311[(11)]);
var inst_32256 = (inst_32254 < inst_32253);
var inst_32257 = inst_32256;
var state_32311__$1 = state_32311;
if(cljs.core.truth_(inst_32257)){
var statearr_32359_32427 = state_32311__$1;
(statearr_32359_32427[(1)] = (27));

} else {
var statearr_32360_32428 = state_32311__$1;
(statearr_32360_32428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (34))){
var state_32311__$1 = state_32311;
var statearr_32361_32429 = state_32311__$1;
(statearr_32361_32429[(2)] = null);

(statearr_32361_32429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (17))){
var state_32311__$1 = state_32311;
var statearr_32362_32430 = state_32311__$1;
(statearr_32362_32430[(2)] = null);

(statearr_32362_32430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (3))){
var inst_32309 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32311__$1,inst_32309);
} else {
if((state_val_32312 === (12))){
var inst_32238 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32363_32431 = state_32311__$1;
(statearr_32363_32431[(2)] = inst_32238);

(statearr_32363_32431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (2))){
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32311__$1,(4),ch);
} else {
if((state_val_32312 === (23))){
var state_32311__$1 = state_32311;
var statearr_32364_32432 = state_32311__$1;
(statearr_32364_32432[(2)] = null);

(statearr_32364_32432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (35))){
var inst_32293 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32365_32433 = state_32311__$1;
(statearr_32365_32433[(2)] = inst_32293);

(statearr_32365_32433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (19))){
var inst_32212 = (state_32311[(7)]);
var inst_32216 = cljs.core.chunk_first.call(null,inst_32212);
var inst_32217 = cljs.core.chunk_rest.call(null,inst_32212);
var inst_32218 = cljs.core.count.call(null,inst_32216);
var inst_32192 = inst_32217;
var inst_32193 = inst_32216;
var inst_32194 = inst_32218;
var inst_32195 = (0);
var state_32311__$1 = (function (){var statearr_32366 = state_32311;
(statearr_32366[(13)] = inst_32195);

(statearr_32366[(15)] = inst_32192);

(statearr_32366[(16)] = inst_32193);

(statearr_32366[(17)] = inst_32194);

return statearr_32366;
})();
var statearr_32367_32434 = state_32311__$1;
(statearr_32367_32434[(2)] = null);

(statearr_32367_32434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (11))){
var inst_32212 = (state_32311[(7)]);
var inst_32192 = (state_32311[(15)]);
var inst_32212__$1 = cljs.core.seq.call(null,inst_32192);
var state_32311__$1 = (function (){var statearr_32368 = state_32311;
(statearr_32368[(7)] = inst_32212__$1);

return statearr_32368;
})();
if(inst_32212__$1){
var statearr_32369_32435 = state_32311__$1;
(statearr_32369_32435[(1)] = (16));

} else {
var statearr_32370_32436 = state_32311__$1;
(statearr_32370_32436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (9))){
var inst_32240 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32371_32437 = state_32311__$1;
(statearr_32371_32437[(2)] = inst_32240);

(statearr_32371_32437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (5))){
var inst_32190 = cljs.core.deref.call(null,cs);
var inst_32191 = cljs.core.seq.call(null,inst_32190);
var inst_32192 = inst_32191;
var inst_32193 = null;
var inst_32194 = (0);
var inst_32195 = (0);
var state_32311__$1 = (function (){var statearr_32372 = state_32311;
(statearr_32372[(13)] = inst_32195);

(statearr_32372[(15)] = inst_32192);

(statearr_32372[(16)] = inst_32193);

(statearr_32372[(17)] = inst_32194);

return statearr_32372;
})();
var statearr_32373_32438 = state_32311__$1;
(statearr_32373_32438[(2)] = null);

(statearr_32373_32438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (14))){
var state_32311__$1 = state_32311;
var statearr_32374_32439 = state_32311__$1;
(statearr_32374_32439[(2)] = null);

(statearr_32374_32439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (45))){
var inst_32301 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32375_32440 = state_32311__$1;
(statearr_32375_32440[(2)] = inst_32301);

(statearr_32375_32440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (26))){
var inst_32243 = (state_32311[(29)]);
var inst_32297 = (state_32311[(2)]);
var inst_32298 = cljs.core.seq.call(null,inst_32243);
var state_32311__$1 = (function (){var statearr_32376 = state_32311;
(statearr_32376[(31)] = inst_32297);

return statearr_32376;
})();
if(inst_32298){
var statearr_32377_32441 = state_32311__$1;
(statearr_32377_32441[(1)] = (42));

} else {
var statearr_32378_32442 = state_32311__$1;
(statearr_32378_32442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (16))){
var inst_32212 = (state_32311[(7)]);
var inst_32214 = cljs.core.chunked_seq_QMARK_.call(null,inst_32212);
var state_32311__$1 = state_32311;
if(inst_32214){
var statearr_32379_32443 = state_32311__$1;
(statearr_32379_32443[(1)] = (19));

} else {
var statearr_32380_32444 = state_32311__$1;
(statearr_32380_32444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (38))){
var inst_32290 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32381_32445 = state_32311__$1;
(statearr_32381_32445[(2)] = inst_32290);

(statearr_32381_32445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (30))){
var state_32311__$1 = state_32311;
var statearr_32382_32446 = state_32311__$1;
(statearr_32382_32446[(2)] = null);

(statearr_32382_32446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (10))){
var inst_32195 = (state_32311[(13)]);
var inst_32193 = (state_32311[(16)]);
var inst_32201 = cljs.core._nth.call(null,inst_32193,inst_32195);
var inst_32202 = cljs.core.nth.call(null,inst_32201,(0),null);
var inst_32203 = cljs.core.nth.call(null,inst_32201,(1),null);
var state_32311__$1 = (function (){var statearr_32383 = state_32311;
(statearr_32383[(26)] = inst_32202);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32203)){
var statearr_32384_32447 = state_32311__$1;
(statearr_32384_32447[(1)] = (13));

} else {
var statearr_32385_32448 = state_32311__$1;
(statearr_32385_32448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (18))){
var inst_32236 = (state_32311[(2)]);
var state_32311__$1 = state_32311;
var statearr_32386_32449 = state_32311__$1;
(statearr_32386_32449[(2)] = inst_32236);

(statearr_32386_32449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (42))){
var state_32311__$1 = state_32311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32311__$1,(45),dchan);
} else {
if((state_val_32312 === (37))){
var inst_32270 = (state_32311[(25)]);
var inst_32279 = (state_32311[(23)]);
var inst_32183 = (state_32311[(12)]);
var inst_32279__$1 = cljs.core.first.call(null,inst_32270);
var inst_32280 = cljs.core.async.put_BANG_.call(null,inst_32279__$1,inst_32183,done);
var state_32311__$1 = (function (){var statearr_32387 = state_32311;
(statearr_32387[(23)] = inst_32279__$1);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32280)){
var statearr_32388_32450 = state_32311__$1;
(statearr_32388_32450[(1)] = (39));

} else {
var statearr_32389_32451 = state_32311__$1;
(statearr_32389_32451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32312 === (8))){
var inst_32195 = (state_32311[(13)]);
var inst_32194 = (state_32311[(17)]);
var inst_32197 = (inst_32195 < inst_32194);
var inst_32198 = inst_32197;
var state_32311__$1 = state_32311;
if(cljs.core.truth_(inst_32198)){
var statearr_32390_32452 = state_32311__$1;
(statearr_32390_32452[(1)] = (10));

} else {
var statearr_32391_32453 = state_32311__$1;
(statearr_32391_32453[(1)] = (11));

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
});})(c__10627__auto___32399,cs,m,dchan,dctr,done))
;
return ((function (switch__10515__auto__,c__10627__auto___32399,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10516__auto__ = null;
var cljs$core$async$mult_$_state_machine__10516__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$mult_$_state_machine__10516__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$mult_$_state_machine__10516__auto____1 = (function (state_32311){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_32311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e32396){if((e32396 instanceof Object)){
var ex__10519__auto__ = e32396;
var statearr_32397_32454 = state_32311;
(statearr_32397_32454[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32455 = state_32311;
state_32311 = G__32455;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10516__auto__ = function(state_32311){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10516__auto____1.call(this,state_32311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10516__auto____0;
cljs$core$async$mult_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10516__auto____1;
return cljs$core$async$mult_$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___32399,cs,m,dchan,dctr,done))
})();
var state__10629__auto__ = (function (){var statearr_32398 = f__10628__auto__.call(null);
(statearr_32398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___32399);

return statearr_32398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___32399,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args32456 = [];
var len__5189__auto___32459 = arguments.length;
var i__5190__auto___32460 = (0);
while(true){
if((i__5190__auto___32460 < len__5189__auto___32459)){
args32456.push((arguments[i__5190__auto___32460]));

var G__32461 = (i__5190__auto___32460 + (1));
i__5190__auto___32460 = G__32461;
continue;
} else {
}
break;
}

var G__32458 = args32456.length;
switch (G__32458) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32456.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,ch);
} else {
var m__4787__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,ch);
} else {
var m__4787__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m);
} else {
var m__4787__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,state_map);
} else {
var m__4787__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4786__auto__ = (((m == null))?null:m);
var m__4787__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,m,mode);
} else {
var m__4787__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___32473 = arguments.length;
var i__5190__auto___32474 = (0);
while(true){
if((i__5190__auto___32474 < len__5189__auto___32473)){
args__5196__auto__.push((arguments[i__5190__auto___32474]));

var G__32475 = (i__5190__auto___32474 + (1));
i__5190__auto___32474 = G__32475;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((3) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5197__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32467){
var map__32468 = p__32467;
var map__32468__$1 = ((((!((map__32468 == null)))?((((map__32468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32468):map__32468);
var opts = map__32468__$1;
var statearr_32470_32476 = state;
(statearr_32470_32476[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32468,map__32468__$1,opts){
return (function (val){
var statearr_32471_32477 = state;
(statearr_32471_32477[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32468,map__32468__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32472_32478 = state;
(statearr_32472_32478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32463){
var G__32464 = cljs.core.first.call(null,seq32463);
var seq32463__$1 = cljs.core.next.call(null,seq32463);
var G__32465 = cljs.core.first.call(null,seq32463__$1);
var seq32463__$2 = cljs.core.next.call(null,seq32463__$1);
var G__32466 = cljs.core.first.call(null,seq32463__$2);
var seq32463__$3 = cljs.core.next.call(null,seq32463__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32464,G__32465,G__32466,seq32463__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32642 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32643){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32643 = meta32643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32644,meta32643__$1){
var self__ = this;
var _32644__$1 = this;
return (new cljs.core.async.t_cljs$core$async32642(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32644){
var self__ = this;
var _32644__$1 = this;
return self__.meta32643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32643","meta32643",1142679234,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32642";

cljs.core.async.t_cljs$core$async32642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async32642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32642(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32643){
return (new cljs.core.async.t_cljs$core$async32642(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32642(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10627__auto___32805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32742){
var state_val_32743 = (state_32742[(1)]);
if((state_val_32743 === (7))){
var inst_32660 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32744_32806 = state_32742__$1;
(statearr_32744_32806[(2)] = inst_32660);

(statearr_32744_32806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (20))){
var inst_32672 = (state_32742[(7)]);
var state_32742__$1 = state_32742;
var statearr_32745_32807 = state_32742__$1;
(statearr_32745_32807[(2)] = inst_32672);

(statearr_32745_32807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (27))){
var state_32742__$1 = state_32742;
var statearr_32746_32808 = state_32742__$1;
(statearr_32746_32808[(2)] = null);

(statearr_32746_32808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (1))){
var inst_32648 = (state_32742[(8)]);
var inst_32648__$1 = calc_state.call(null);
var inst_32650 = (inst_32648__$1 == null);
var inst_32651 = cljs.core.not.call(null,inst_32650);
var state_32742__$1 = (function (){var statearr_32747 = state_32742;
(statearr_32747[(8)] = inst_32648__$1);

return statearr_32747;
})();
if(inst_32651){
var statearr_32748_32809 = state_32742__$1;
(statearr_32748_32809[(1)] = (2));

} else {
var statearr_32749_32810 = state_32742__$1;
(statearr_32749_32810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (24))){
var inst_32702 = (state_32742[(9)]);
var inst_32716 = (state_32742[(10)]);
var inst_32695 = (state_32742[(11)]);
var inst_32716__$1 = inst_32695.call(null,inst_32702);
var state_32742__$1 = (function (){var statearr_32750 = state_32742;
(statearr_32750[(10)] = inst_32716__$1);

return statearr_32750;
})();
if(cljs.core.truth_(inst_32716__$1)){
var statearr_32751_32811 = state_32742__$1;
(statearr_32751_32811[(1)] = (29));

} else {
var statearr_32752_32812 = state_32742__$1;
(statearr_32752_32812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (4))){
var inst_32663 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32663)){
var statearr_32753_32813 = state_32742__$1;
(statearr_32753_32813[(1)] = (8));

} else {
var statearr_32754_32814 = state_32742__$1;
(statearr_32754_32814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (15))){
var inst_32689 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32689)){
var statearr_32755_32815 = state_32742__$1;
(statearr_32755_32815[(1)] = (19));

} else {
var statearr_32756_32816 = state_32742__$1;
(statearr_32756_32816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (21))){
var inst_32694 = (state_32742[(12)]);
var inst_32694__$1 = (state_32742[(2)]);
var inst_32695 = cljs.core.get.call(null,inst_32694__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32696 = cljs.core.get.call(null,inst_32694__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32697 = cljs.core.get.call(null,inst_32694__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32742__$1 = (function (){var statearr_32757 = state_32742;
(statearr_32757[(12)] = inst_32694__$1);

(statearr_32757[(11)] = inst_32695);

(statearr_32757[(13)] = inst_32696);

return statearr_32757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32742__$1,(22),inst_32697);
} else {
if((state_val_32743 === (31))){
var inst_32724 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32724)){
var statearr_32758_32817 = state_32742__$1;
(statearr_32758_32817[(1)] = (32));

} else {
var statearr_32759_32818 = state_32742__$1;
(statearr_32759_32818[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (32))){
var inst_32701 = (state_32742[(14)]);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32742__$1,(35),out,inst_32701);
} else {
if((state_val_32743 === (33))){
var inst_32694 = (state_32742[(12)]);
var inst_32672 = inst_32694;
var state_32742__$1 = (function (){var statearr_32760 = state_32742;
(statearr_32760[(7)] = inst_32672);

return statearr_32760;
})();
var statearr_32761_32819 = state_32742__$1;
(statearr_32761_32819[(2)] = null);

(statearr_32761_32819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (13))){
var inst_32672 = (state_32742[(7)]);
var inst_32679 = inst_32672.cljs$lang$protocol_mask$partition0$;
var inst_32680 = (inst_32679 & (64));
var inst_32681 = inst_32672.cljs$core$ISeq$;
var inst_32682 = (inst_32680) || (inst_32681);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32682)){
var statearr_32762_32820 = state_32742__$1;
(statearr_32762_32820[(1)] = (16));

} else {
var statearr_32763_32821 = state_32742__$1;
(statearr_32763_32821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (22))){
var inst_32702 = (state_32742[(9)]);
var inst_32701 = (state_32742[(14)]);
var inst_32700 = (state_32742[(2)]);
var inst_32701__$1 = cljs.core.nth.call(null,inst_32700,(0),null);
var inst_32702__$1 = cljs.core.nth.call(null,inst_32700,(1),null);
var inst_32703 = (inst_32701__$1 == null);
var inst_32704 = cljs.core._EQ_.call(null,inst_32702__$1,change);
var inst_32705 = (inst_32703) || (inst_32704);
var state_32742__$1 = (function (){var statearr_32764 = state_32742;
(statearr_32764[(9)] = inst_32702__$1);

(statearr_32764[(14)] = inst_32701__$1);

return statearr_32764;
})();
if(cljs.core.truth_(inst_32705)){
var statearr_32765_32822 = state_32742__$1;
(statearr_32765_32822[(1)] = (23));

} else {
var statearr_32766_32823 = state_32742__$1;
(statearr_32766_32823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (36))){
var inst_32694 = (state_32742[(12)]);
var inst_32672 = inst_32694;
var state_32742__$1 = (function (){var statearr_32767 = state_32742;
(statearr_32767[(7)] = inst_32672);

return statearr_32767;
})();
var statearr_32768_32824 = state_32742__$1;
(statearr_32768_32824[(2)] = null);

(statearr_32768_32824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (29))){
var inst_32716 = (state_32742[(10)]);
var state_32742__$1 = state_32742;
var statearr_32769_32825 = state_32742__$1;
(statearr_32769_32825[(2)] = inst_32716);

(statearr_32769_32825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (6))){
var state_32742__$1 = state_32742;
var statearr_32770_32826 = state_32742__$1;
(statearr_32770_32826[(2)] = false);

(statearr_32770_32826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (28))){
var inst_32712 = (state_32742[(2)]);
var inst_32713 = calc_state.call(null);
var inst_32672 = inst_32713;
var state_32742__$1 = (function (){var statearr_32771 = state_32742;
(statearr_32771[(7)] = inst_32672);

(statearr_32771[(15)] = inst_32712);

return statearr_32771;
})();
var statearr_32772_32827 = state_32742__$1;
(statearr_32772_32827[(2)] = null);

(statearr_32772_32827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (25))){
var inst_32738 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32773_32828 = state_32742__$1;
(statearr_32773_32828[(2)] = inst_32738);

(statearr_32773_32828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (34))){
var inst_32736 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32774_32829 = state_32742__$1;
(statearr_32774_32829[(2)] = inst_32736);

(statearr_32774_32829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (17))){
var state_32742__$1 = state_32742;
var statearr_32775_32830 = state_32742__$1;
(statearr_32775_32830[(2)] = false);

(statearr_32775_32830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (3))){
var state_32742__$1 = state_32742;
var statearr_32776_32831 = state_32742__$1;
(statearr_32776_32831[(2)] = false);

(statearr_32776_32831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (12))){
var inst_32740 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32742__$1,inst_32740);
} else {
if((state_val_32743 === (2))){
var inst_32648 = (state_32742[(8)]);
var inst_32653 = inst_32648.cljs$lang$protocol_mask$partition0$;
var inst_32654 = (inst_32653 & (64));
var inst_32655 = inst_32648.cljs$core$ISeq$;
var inst_32656 = (inst_32654) || (inst_32655);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32656)){
var statearr_32777_32832 = state_32742__$1;
(statearr_32777_32832[(1)] = (5));

} else {
var statearr_32778_32833 = state_32742__$1;
(statearr_32778_32833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (23))){
var inst_32701 = (state_32742[(14)]);
var inst_32707 = (inst_32701 == null);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32707)){
var statearr_32779_32834 = state_32742__$1;
(statearr_32779_32834[(1)] = (26));

} else {
var statearr_32780_32835 = state_32742__$1;
(statearr_32780_32835[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (35))){
var inst_32727 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
if(cljs.core.truth_(inst_32727)){
var statearr_32781_32836 = state_32742__$1;
(statearr_32781_32836[(1)] = (36));

} else {
var statearr_32782_32837 = state_32742__$1;
(statearr_32782_32837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (19))){
var inst_32672 = (state_32742[(7)]);
var inst_32691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32672);
var state_32742__$1 = state_32742;
var statearr_32783_32838 = state_32742__$1;
(statearr_32783_32838[(2)] = inst_32691);

(statearr_32783_32838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (11))){
var inst_32672 = (state_32742[(7)]);
var inst_32676 = (inst_32672 == null);
var inst_32677 = cljs.core.not.call(null,inst_32676);
var state_32742__$1 = state_32742;
if(inst_32677){
var statearr_32784_32839 = state_32742__$1;
(statearr_32784_32839[(1)] = (13));

} else {
var statearr_32785_32840 = state_32742__$1;
(statearr_32785_32840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (9))){
var inst_32648 = (state_32742[(8)]);
var state_32742__$1 = state_32742;
var statearr_32786_32841 = state_32742__$1;
(statearr_32786_32841[(2)] = inst_32648);

(statearr_32786_32841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (5))){
var state_32742__$1 = state_32742;
var statearr_32787_32842 = state_32742__$1;
(statearr_32787_32842[(2)] = true);

(statearr_32787_32842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (14))){
var state_32742__$1 = state_32742;
var statearr_32788_32843 = state_32742__$1;
(statearr_32788_32843[(2)] = false);

(statearr_32788_32843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (26))){
var inst_32702 = (state_32742[(9)]);
var inst_32709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32702);
var state_32742__$1 = state_32742;
var statearr_32789_32844 = state_32742__$1;
(statearr_32789_32844[(2)] = inst_32709);

(statearr_32789_32844[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (16))){
var state_32742__$1 = state_32742;
var statearr_32790_32845 = state_32742__$1;
(statearr_32790_32845[(2)] = true);

(statearr_32790_32845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (38))){
var inst_32732 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32791_32846 = state_32742__$1;
(statearr_32791_32846[(2)] = inst_32732);

(statearr_32791_32846[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (30))){
var inst_32702 = (state_32742[(9)]);
var inst_32695 = (state_32742[(11)]);
var inst_32696 = (state_32742[(13)]);
var inst_32719 = cljs.core.empty_QMARK_.call(null,inst_32695);
var inst_32720 = inst_32696.call(null,inst_32702);
var inst_32721 = cljs.core.not.call(null,inst_32720);
var inst_32722 = (inst_32719) && (inst_32721);
var state_32742__$1 = state_32742;
var statearr_32792_32847 = state_32742__$1;
(statearr_32792_32847[(2)] = inst_32722);

(statearr_32792_32847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (10))){
var inst_32648 = (state_32742[(8)]);
var inst_32668 = (state_32742[(2)]);
var inst_32669 = cljs.core.get.call(null,inst_32668,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32670 = cljs.core.get.call(null,inst_32668,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32671 = cljs.core.get.call(null,inst_32668,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32672 = inst_32648;
var state_32742__$1 = (function (){var statearr_32793 = state_32742;
(statearr_32793[(16)] = inst_32671);

(statearr_32793[(17)] = inst_32670);

(statearr_32793[(18)] = inst_32669);

(statearr_32793[(7)] = inst_32672);

return statearr_32793;
})();
var statearr_32794_32848 = state_32742__$1;
(statearr_32794_32848[(2)] = null);

(statearr_32794_32848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (18))){
var inst_32686 = (state_32742[(2)]);
var state_32742__$1 = state_32742;
var statearr_32795_32849 = state_32742__$1;
(statearr_32795_32849[(2)] = inst_32686);

(statearr_32795_32849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (37))){
var state_32742__$1 = state_32742;
var statearr_32796_32850 = state_32742__$1;
(statearr_32796_32850[(2)] = null);

(statearr_32796_32850[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32743 === (8))){
var inst_32648 = (state_32742[(8)]);
var inst_32665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32648);
var state_32742__$1 = state_32742;
var statearr_32797_32851 = state_32742__$1;
(statearr_32797_32851[(2)] = inst_32665);

(statearr_32797_32851[(1)] = (10));


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
});})(c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10515__auto__,c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10516__auto__ = null;
var cljs$core$async$mix_$_state_machine__10516__auto____0 = (function (){
var statearr_32801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32801[(0)] = cljs$core$async$mix_$_state_machine__10516__auto__);

(statearr_32801[(1)] = (1));

return statearr_32801;
});
var cljs$core$async$mix_$_state_machine__10516__auto____1 = (function (state_32742){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_32742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e32802){if((e32802 instanceof Object)){
var ex__10519__auto__ = e32802;
var statearr_32803_32852 = state_32742;
(statearr_32803_32852[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32853 = state_32742;
state_32742 = G__32853;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10516__auto__ = function(state_32742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10516__auto____1.call(this,state_32742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10516__auto____0;
cljs$core$async$mix_$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10516__auto____1;
return cljs$core$async$mix_$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10629__auto__ = (function (){var statearr_32804 = f__10628__auto__.call(null);
(statearr_32804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___32805);

return statearr_32804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___32805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4786__auto__ = (((p == null))?null:p);
var m__4787__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4787__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4786__auto__ = (((p == null))?null:p);
var m__4787__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,p,v,ch);
} else {
var m__4787__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32854 = [];
var len__5189__auto___32857 = arguments.length;
var i__5190__auto___32858 = (0);
while(true){
if((i__5190__auto___32858 < len__5189__auto___32857)){
args32854.push((arguments[i__5190__auto___32858]));

var G__32859 = (i__5190__auto___32858 + (1));
i__5190__auto___32858 = G__32859;
continue;
} else {
}
break;
}

var G__32856 = args32854.length;
switch (G__32856) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32854.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4786__auto__ = (((p == null))?null:p);
var m__4787__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,p);
} else {
var m__4787__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4786__auto__ = (((p == null))?null:p);
var m__4787__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4786__auto__)]);
if(!((m__4787__auto__ == null))){
return m__4787__auto__.call(null,p,v);
} else {
var m__4787__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4787__auto____$1 == null))){
return m__4787__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32862 = [];
var len__5189__auto___32987 = arguments.length;
var i__5190__auto___32988 = (0);
while(true){
if((i__5190__auto___32988 < len__5189__auto___32987)){
args32862.push((arguments[i__5190__auto___32988]));

var G__32989 = (i__5190__auto___32988 + (1));
i__5190__auto___32988 = G__32989;
continue;
} else {
}
break;
}

var G__32864 = args32862.length;
switch (G__32864) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32862.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__32861_SHARP_){
if(cljs.core.truth_(p1__32861_SHARP_.call(null,topic))){
return p1__32861_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32861_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32865 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32866){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32866 = meta32866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32867,meta32866__$1){
var self__ = this;
var _32867__$1 = this;
return (new cljs.core.async.t_cljs$core$async32865(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32866__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32867){
var self__ = this;
var _32867__$1 = this;
return self__.meta32866;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32866","meta32866",1236352090,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32865";

cljs.core.async.t_cljs$core$async32865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async32865");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32865 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32866){
return (new cljs.core.async.t_cljs$core$async32865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32866));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32865(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10627__auto___32991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___32991,mults,ensure_mult,p){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___32991,mults,ensure_mult,p){
return (function (state_32939){
var state_val_32940 = (state_32939[(1)]);
if((state_val_32940 === (7))){
var inst_32935 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32941_32992 = state_32939__$1;
(statearr_32941_32992[(2)] = inst_32935);

(statearr_32941_32992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (20))){
var state_32939__$1 = state_32939;
var statearr_32942_32993 = state_32939__$1;
(statearr_32942_32993[(2)] = null);

(statearr_32942_32993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (1))){
var state_32939__$1 = state_32939;
var statearr_32943_32994 = state_32939__$1;
(statearr_32943_32994[(2)] = null);

(statearr_32943_32994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (24))){
var inst_32918 = (state_32939[(7)]);
var inst_32927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32918);
var state_32939__$1 = state_32939;
var statearr_32944_32995 = state_32939__$1;
(statearr_32944_32995[(2)] = inst_32927);

(statearr_32944_32995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (4))){
var inst_32870 = (state_32939[(8)]);
var inst_32870__$1 = (state_32939[(2)]);
var inst_32871 = (inst_32870__$1 == null);
var state_32939__$1 = (function (){var statearr_32945 = state_32939;
(statearr_32945[(8)] = inst_32870__$1);

return statearr_32945;
})();
if(cljs.core.truth_(inst_32871)){
var statearr_32946_32996 = state_32939__$1;
(statearr_32946_32996[(1)] = (5));

} else {
var statearr_32947_32997 = state_32939__$1;
(statearr_32947_32997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (15))){
var inst_32912 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32948_32998 = state_32939__$1;
(statearr_32948_32998[(2)] = inst_32912);

(statearr_32948_32998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (21))){
var inst_32932 = (state_32939[(2)]);
var state_32939__$1 = (function (){var statearr_32949 = state_32939;
(statearr_32949[(9)] = inst_32932);

return statearr_32949;
})();
var statearr_32950_32999 = state_32939__$1;
(statearr_32950_32999[(2)] = null);

(statearr_32950_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (13))){
var inst_32894 = (state_32939[(10)]);
var inst_32896 = cljs.core.chunked_seq_QMARK_.call(null,inst_32894);
var state_32939__$1 = state_32939;
if(inst_32896){
var statearr_32951_33000 = state_32939__$1;
(statearr_32951_33000[(1)] = (16));

} else {
var statearr_32952_33001 = state_32939__$1;
(statearr_32952_33001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (22))){
var inst_32924 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32924)){
var statearr_32953_33002 = state_32939__$1;
(statearr_32953_33002[(1)] = (23));

} else {
var statearr_32954_33003 = state_32939__$1;
(statearr_32954_33003[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (6))){
var inst_32918 = (state_32939[(7)]);
var inst_32920 = (state_32939[(11)]);
var inst_32870 = (state_32939[(8)]);
var inst_32918__$1 = topic_fn.call(null,inst_32870);
var inst_32919 = cljs.core.deref.call(null,mults);
var inst_32920__$1 = cljs.core.get.call(null,inst_32919,inst_32918__$1);
var state_32939__$1 = (function (){var statearr_32955 = state_32939;
(statearr_32955[(7)] = inst_32918__$1);

(statearr_32955[(11)] = inst_32920__$1);

return statearr_32955;
})();
if(cljs.core.truth_(inst_32920__$1)){
var statearr_32956_33004 = state_32939__$1;
(statearr_32956_33004[(1)] = (19));

} else {
var statearr_32957_33005 = state_32939__$1;
(statearr_32957_33005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (25))){
var inst_32929 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32958_33006 = state_32939__$1;
(statearr_32958_33006[(2)] = inst_32929);

(statearr_32958_33006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (17))){
var inst_32894 = (state_32939[(10)]);
var inst_32903 = cljs.core.first.call(null,inst_32894);
var inst_32904 = cljs.core.async.muxch_STAR_.call(null,inst_32903);
var inst_32905 = cljs.core.async.close_BANG_.call(null,inst_32904);
var inst_32906 = cljs.core.next.call(null,inst_32894);
var inst_32880 = inst_32906;
var inst_32881 = null;
var inst_32882 = (0);
var inst_32883 = (0);
var state_32939__$1 = (function (){var statearr_32959 = state_32939;
(statearr_32959[(12)] = inst_32882);

(statearr_32959[(13)] = inst_32881);

(statearr_32959[(14)] = inst_32883);

(statearr_32959[(15)] = inst_32905);

(statearr_32959[(16)] = inst_32880);

return statearr_32959;
})();
var statearr_32960_33007 = state_32939__$1;
(statearr_32960_33007[(2)] = null);

(statearr_32960_33007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (3))){
var inst_32937 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32939__$1,inst_32937);
} else {
if((state_val_32940 === (12))){
var inst_32914 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32961_33008 = state_32939__$1;
(statearr_32961_33008[(2)] = inst_32914);

(statearr_32961_33008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (2))){
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32939__$1,(4),ch);
} else {
if((state_val_32940 === (23))){
var state_32939__$1 = state_32939;
var statearr_32962_33009 = state_32939__$1;
(statearr_32962_33009[(2)] = null);

(statearr_32962_33009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (19))){
var inst_32920 = (state_32939[(11)]);
var inst_32870 = (state_32939[(8)]);
var inst_32922 = cljs.core.async.muxch_STAR_.call(null,inst_32920);
var state_32939__$1 = state_32939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32939__$1,(22),inst_32922,inst_32870);
} else {
if((state_val_32940 === (11))){
var inst_32894 = (state_32939[(10)]);
var inst_32880 = (state_32939[(16)]);
var inst_32894__$1 = cljs.core.seq.call(null,inst_32880);
var state_32939__$1 = (function (){var statearr_32963 = state_32939;
(statearr_32963[(10)] = inst_32894__$1);

return statearr_32963;
})();
if(inst_32894__$1){
var statearr_32964_33010 = state_32939__$1;
(statearr_32964_33010[(1)] = (13));

} else {
var statearr_32965_33011 = state_32939__$1;
(statearr_32965_33011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (9))){
var inst_32916 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32966_33012 = state_32939__$1;
(statearr_32966_33012[(2)] = inst_32916);

(statearr_32966_33012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (5))){
var inst_32877 = cljs.core.deref.call(null,mults);
var inst_32878 = cljs.core.vals.call(null,inst_32877);
var inst_32879 = cljs.core.seq.call(null,inst_32878);
var inst_32880 = inst_32879;
var inst_32881 = null;
var inst_32882 = (0);
var inst_32883 = (0);
var state_32939__$1 = (function (){var statearr_32967 = state_32939;
(statearr_32967[(12)] = inst_32882);

(statearr_32967[(13)] = inst_32881);

(statearr_32967[(14)] = inst_32883);

(statearr_32967[(16)] = inst_32880);

return statearr_32967;
})();
var statearr_32968_33013 = state_32939__$1;
(statearr_32968_33013[(2)] = null);

(statearr_32968_33013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (14))){
var state_32939__$1 = state_32939;
var statearr_32972_33014 = state_32939__$1;
(statearr_32972_33014[(2)] = null);

(statearr_32972_33014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (16))){
var inst_32894 = (state_32939[(10)]);
var inst_32898 = cljs.core.chunk_first.call(null,inst_32894);
var inst_32899 = cljs.core.chunk_rest.call(null,inst_32894);
var inst_32900 = cljs.core.count.call(null,inst_32898);
var inst_32880 = inst_32899;
var inst_32881 = inst_32898;
var inst_32882 = inst_32900;
var inst_32883 = (0);
var state_32939__$1 = (function (){var statearr_32973 = state_32939;
(statearr_32973[(12)] = inst_32882);

(statearr_32973[(13)] = inst_32881);

(statearr_32973[(14)] = inst_32883);

(statearr_32973[(16)] = inst_32880);

return statearr_32973;
})();
var statearr_32974_33015 = state_32939__$1;
(statearr_32974_33015[(2)] = null);

(statearr_32974_33015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (10))){
var inst_32882 = (state_32939[(12)]);
var inst_32881 = (state_32939[(13)]);
var inst_32883 = (state_32939[(14)]);
var inst_32880 = (state_32939[(16)]);
var inst_32888 = cljs.core._nth.call(null,inst_32881,inst_32883);
var inst_32889 = cljs.core.async.muxch_STAR_.call(null,inst_32888);
var inst_32890 = cljs.core.async.close_BANG_.call(null,inst_32889);
var inst_32891 = (inst_32883 + (1));
var tmp32969 = inst_32882;
var tmp32970 = inst_32881;
var tmp32971 = inst_32880;
var inst_32880__$1 = tmp32971;
var inst_32881__$1 = tmp32970;
var inst_32882__$1 = tmp32969;
var inst_32883__$1 = inst_32891;
var state_32939__$1 = (function (){var statearr_32975 = state_32939;
(statearr_32975[(17)] = inst_32890);

(statearr_32975[(12)] = inst_32882__$1);

(statearr_32975[(13)] = inst_32881__$1);

(statearr_32975[(14)] = inst_32883__$1);

(statearr_32975[(16)] = inst_32880__$1);

return statearr_32975;
})();
var statearr_32976_33016 = state_32939__$1;
(statearr_32976_33016[(2)] = null);

(statearr_32976_33016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (18))){
var inst_32909 = (state_32939[(2)]);
var state_32939__$1 = state_32939;
var statearr_32977_33017 = state_32939__$1;
(statearr_32977_33017[(2)] = inst_32909);

(statearr_32977_33017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32940 === (8))){
var inst_32882 = (state_32939[(12)]);
var inst_32883 = (state_32939[(14)]);
var inst_32885 = (inst_32883 < inst_32882);
var inst_32886 = inst_32885;
var state_32939__$1 = state_32939;
if(cljs.core.truth_(inst_32886)){
var statearr_32978_33018 = state_32939__$1;
(statearr_32978_33018[(1)] = (10));

} else {
var statearr_32979_33019 = state_32939__$1;
(statearr_32979_33019[(1)] = (11));

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
});})(c__10627__auto___32991,mults,ensure_mult,p))
;
return ((function (switch__10515__auto__,c__10627__auto___32991,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_32983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32983[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_32983[(1)] = (1));

return statearr_32983;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_32939){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_32939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e32984){if((e32984 instanceof Object)){
var ex__10519__auto__ = e32984;
var statearr_32985_33020 = state_32939;
(statearr_32985_33020[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33021 = state_32939;
state_32939 = G__33021;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_32939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_32939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___32991,mults,ensure_mult,p))
})();
var state__10629__auto__ = (function (){var statearr_32986 = f__10628__auto__.call(null);
(statearr_32986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___32991);

return statearr_32986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___32991,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args33022 = [];
var len__5189__auto___33025 = arguments.length;
var i__5190__auto___33026 = (0);
while(true){
if((i__5190__auto___33026 < len__5189__auto___33025)){
args33022.push((arguments[i__5190__auto___33026]));

var G__33027 = (i__5190__auto___33026 + (1));
i__5190__auto___33026 = G__33027;
continue;
} else {
}
break;
}

var G__33024 = args33022.length;
switch (G__33024) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33022.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args33029 = [];
var len__5189__auto___33032 = arguments.length;
var i__5190__auto___33033 = (0);
while(true){
if((i__5190__auto___33033 < len__5189__auto___33032)){
args33029.push((arguments[i__5190__auto___33033]));

var G__33034 = (i__5190__auto___33033 + (1));
i__5190__auto___33033 = G__33034;
continue;
} else {
}
break;
}

var G__33031 = args33029.length;
switch (G__33031) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33029.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args33036 = [];
var len__5189__auto___33107 = arguments.length;
var i__5190__auto___33108 = (0);
while(true){
if((i__5190__auto___33108 < len__5189__auto___33107)){
args33036.push((arguments[i__5190__auto___33108]));

var G__33109 = (i__5190__auto___33108 + (1));
i__5190__auto___33108 = G__33109;
continue;
} else {
}
break;
}

var G__33038 = args33036.length;
switch (G__33038) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33036.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10627__auto___33111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33077){
var state_val_33078 = (state_33077[(1)]);
if((state_val_33078 === (7))){
var state_33077__$1 = state_33077;
var statearr_33079_33112 = state_33077__$1;
(statearr_33079_33112[(2)] = null);

(statearr_33079_33112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (1))){
var state_33077__$1 = state_33077;
var statearr_33080_33113 = state_33077__$1;
(statearr_33080_33113[(2)] = null);

(statearr_33080_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (4))){
var inst_33041 = (state_33077[(7)]);
var inst_33043 = (inst_33041 < cnt);
var state_33077__$1 = state_33077;
if(cljs.core.truth_(inst_33043)){
var statearr_33081_33114 = state_33077__$1;
(statearr_33081_33114[(1)] = (6));

} else {
var statearr_33082_33115 = state_33077__$1;
(statearr_33082_33115[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (15))){
var inst_33073 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33083_33116 = state_33077__$1;
(statearr_33083_33116[(2)] = inst_33073);

(statearr_33083_33116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (13))){
var inst_33066 = cljs.core.async.close_BANG_.call(null,out);
var state_33077__$1 = state_33077;
var statearr_33084_33117 = state_33077__$1;
(statearr_33084_33117[(2)] = inst_33066);

(statearr_33084_33117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (6))){
var state_33077__$1 = state_33077;
var statearr_33085_33118 = state_33077__$1;
(statearr_33085_33118[(2)] = null);

(statearr_33085_33118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (3))){
var inst_33075 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33077__$1,inst_33075);
} else {
if((state_val_33078 === (12))){
var inst_33063 = (state_33077[(8)]);
var inst_33063__$1 = (state_33077[(2)]);
var inst_33064 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33063__$1);
var state_33077__$1 = (function (){var statearr_33086 = state_33077;
(statearr_33086[(8)] = inst_33063__$1);

return statearr_33086;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33087_33119 = state_33077__$1;
(statearr_33087_33119[(1)] = (13));

} else {
var statearr_33088_33120 = state_33077__$1;
(statearr_33088_33120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (2))){
var inst_33040 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33041 = (0);
var state_33077__$1 = (function (){var statearr_33089 = state_33077;
(statearr_33089[(9)] = inst_33040);

(statearr_33089[(7)] = inst_33041);

return statearr_33089;
})();
var statearr_33090_33121 = state_33077__$1;
(statearr_33090_33121[(2)] = null);

(statearr_33090_33121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (11))){
var inst_33041 = (state_33077[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33077,(10),Object,null,(9));
var inst_33050 = chs__$1.call(null,inst_33041);
var inst_33051 = done.call(null,inst_33041);
var inst_33052 = cljs.core.async.take_BANG_.call(null,inst_33050,inst_33051);
var state_33077__$1 = state_33077;
var statearr_33091_33122 = state_33077__$1;
(statearr_33091_33122[(2)] = inst_33052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (9))){
var inst_33041 = (state_33077[(7)]);
var inst_33054 = (state_33077[(2)]);
var inst_33055 = (inst_33041 + (1));
var inst_33041__$1 = inst_33055;
var state_33077__$1 = (function (){var statearr_33092 = state_33077;
(statearr_33092[(10)] = inst_33054);

(statearr_33092[(7)] = inst_33041__$1);

return statearr_33092;
})();
var statearr_33093_33123 = state_33077__$1;
(statearr_33093_33123[(2)] = null);

(statearr_33093_33123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (5))){
var inst_33061 = (state_33077[(2)]);
var state_33077__$1 = (function (){var statearr_33094 = state_33077;
(statearr_33094[(11)] = inst_33061);

return statearr_33094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33077__$1,(12),dchan);
} else {
if((state_val_33078 === (14))){
var inst_33063 = (state_33077[(8)]);
var inst_33068 = cljs.core.apply.call(null,f,inst_33063);
var state_33077__$1 = state_33077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33077__$1,(16),out,inst_33068);
} else {
if((state_val_33078 === (16))){
var inst_33070 = (state_33077[(2)]);
var state_33077__$1 = (function (){var statearr_33095 = state_33077;
(statearr_33095[(12)] = inst_33070);

return statearr_33095;
})();
var statearr_33096_33124 = state_33077__$1;
(statearr_33096_33124[(2)] = null);

(statearr_33096_33124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (10))){
var inst_33045 = (state_33077[(2)]);
var inst_33046 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33077__$1 = (function (){var statearr_33097 = state_33077;
(statearr_33097[(13)] = inst_33045);

return statearr_33097;
})();
var statearr_33098_33125 = state_33077__$1;
(statearr_33098_33125[(2)] = inst_33046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33078 === (8))){
var inst_33059 = (state_33077[(2)]);
var state_33077__$1 = state_33077;
var statearr_33099_33126 = state_33077__$1;
(statearr_33099_33126[(2)] = inst_33059);

(statearr_33099_33126[(1)] = (5));


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
});})(c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10515__auto__,c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33103[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33103[(1)] = (1));

return statearr_33103;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33077){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33104){if((e33104 instanceof Object)){
var ex__10519__auto__ = e33104;
var statearr_33105_33127 = state_33077;
(statearr_33105_33127[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33128 = state_33077;
state_33077 = G__33128;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10629__auto__ = (function (){var statearr_33106 = f__10628__auto__.call(null);
(statearr_33106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33111);

return statearr_33106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33111,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33130 = [];
var len__5189__auto___33186 = arguments.length;
var i__5190__auto___33187 = (0);
while(true){
if((i__5190__auto___33187 < len__5189__auto___33186)){
args33130.push((arguments[i__5190__auto___33187]));

var G__33188 = (i__5190__auto___33187 + (1));
i__5190__auto___33187 = G__33188;
continue;
} else {
}
break;
}

var G__33132 = args33130.length;
switch (G__33132) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33130.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33190,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33190,out){
return (function (state_33162){
var state_val_33163 = (state_33162[(1)]);
if((state_val_33163 === (7))){
var inst_33141 = (state_33162[(7)]);
var inst_33142 = (state_33162[(8)]);
var inst_33141__$1 = (state_33162[(2)]);
var inst_33142__$1 = cljs.core.nth.call(null,inst_33141__$1,(0),null);
var inst_33143 = cljs.core.nth.call(null,inst_33141__$1,(1),null);
var inst_33144 = (inst_33142__$1 == null);
var state_33162__$1 = (function (){var statearr_33164 = state_33162;
(statearr_33164[(7)] = inst_33141__$1);

(statearr_33164[(8)] = inst_33142__$1);

(statearr_33164[(9)] = inst_33143);

return statearr_33164;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33165_33191 = state_33162__$1;
(statearr_33165_33191[(1)] = (8));

} else {
var statearr_33166_33192 = state_33162__$1;
(statearr_33166_33192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (1))){
var inst_33133 = cljs.core.vec.call(null,chs);
var inst_33134 = inst_33133;
var state_33162__$1 = (function (){var statearr_33167 = state_33162;
(statearr_33167[(10)] = inst_33134);

return statearr_33167;
})();
var statearr_33168_33193 = state_33162__$1;
(statearr_33168_33193[(2)] = null);

(statearr_33168_33193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (4))){
var inst_33134 = (state_33162[(10)]);
var state_33162__$1 = state_33162;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33162__$1,(7),inst_33134);
} else {
if((state_val_33163 === (6))){
var inst_33158 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33169_33194 = state_33162__$1;
(statearr_33169_33194[(2)] = inst_33158);

(statearr_33169_33194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (3))){
var inst_33160 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33162__$1,inst_33160);
} else {
if((state_val_33163 === (2))){
var inst_33134 = (state_33162[(10)]);
var inst_33136 = cljs.core.count.call(null,inst_33134);
var inst_33137 = (inst_33136 > (0));
var state_33162__$1 = state_33162;
if(cljs.core.truth_(inst_33137)){
var statearr_33171_33195 = state_33162__$1;
(statearr_33171_33195[(1)] = (4));

} else {
var statearr_33172_33196 = state_33162__$1;
(statearr_33172_33196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (11))){
var inst_33134 = (state_33162[(10)]);
var inst_33151 = (state_33162[(2)]);
var tmp33170 = inst_33134;
var inst_33134__$1 = tmp33170;
var state_33162__$1 = (function (){var statearr_33173 = state_33162;
(statearr_33173[(10)] = inst_33134__$1);

(statearr_33173[(11)] = inst_33151);

return statearr_33173;
})();
var statearr_33174_33197 = state_33162__$1;
(statearr_33174_33197[(2)] = null);

(statearr_33174_33197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (9))){
var inst_33142 = (state_33162[(8)]);
var state_33162__$1 = state_33162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33162__$1,(11),out,inst_33142);
} else {
if((state_val_33163 === (5))){
var inst_33156 = cljs.core.async.close_BANG_.call(null,out);
var state_33162__$1 = state_33162;
var statearr_33175_33198 = state_33162__$1;
(statearr_33175_33198[(2)] = inst_33156);

(statearr_33175_33198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (10))){
var inst_33154 = (state_33162[(2)]);
var state_33162__$1 = state_33162;
var statearr_33176_33199 = state_33162__$1;
(statearr_33176_33199[(2)] = inst_33154);

(statearr_33176_33199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33163 === (8))){
var inst_33141 = (state_33162[(7)]);
var inst_33134 = (state_33162[(10)]);
var inst_33142 = (state_33162[(8)]);
var inst_33143 = (state_33162[(9)]);
var inst_33146 = (function (){var cs = inst_33134;
var vec__33139 = inst_33141;
var v = inst_33142;
var c = inst_33143;
return ((function (cs,vec__33139,v,c,inst_33141,inst_33134,inst_33142,inst_33143,state_val_33163,c__10627__auto___33190,out){
return (function (p1__33129_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33129_SHARP_);
});
;})(cs,vec__33139,v,c,inst_33141,inst_33134,inst_33142,inst_33143,state_val_33163,c__10627__auto___33190,out))
})();
var inst_33147 = cljs.core.filterv.call(null,inst_33146,inst_33134);
var inst_33134__$1 = inst_33147;
var state_33162__$1 = (function (){var statearr_33177 = state_33162;
(statearr_33177[(10)] = inst_33134__$1);

return statearr_33177;
})();
var statearr_33178_33200 = state_33162__$1;
(statearr_33178_33200[(2)] = null);

(statearr_33178_33200[(1)] = (2));


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
});})(c__10627__auto___33190,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33190,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33182[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33182[(1)] = (1));

return statearr_33182;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33162){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33183){if((e33183 instanceof Object)){
var ex__10519__auto__ = e33183;
var statearr_33184_33201 = state_33162;
(statearr_33184_33201[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_33162;
state_33162 = G__33202;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33190,out))
})();
var state__10629__auto__ = (function (){var statearr_33185 = f__10628__auto__.call(null);
(statearr_33185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33190);

return statearr_33185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33190,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33203 = [];
var len__5189__auto___33252 = arguments.length;
var i__5190__auto___33253 = (0);
while(true){
if((i__5190__auto___33253 < len__5189__auto___33252)){
args33203.push((arguments[i__5190__auto___33253]));

var G__33254 = (i__5190__auto___33253 + (1));
i__5190__auto___33253 = G__33254;
continue;
} else {
}
break;
}

var G__33205 = args33203.length;
switch (G__33205) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33203.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33256,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33256,out){
return (function (state_33229){
var state_val_33230 = (state_33229[(1)]);
if((state_val_33230 === (7))){
var inst_33211 = (state_33229[(7)]);
var inst_33211__$1 = (state_33229[(2)]);
var inst_33212 = (inst_33211__$1 == null);
var inst_33213 = cljs.core.not.call(null,inst_33212);
var state_33229__$1 = (function (){var statearr_33231 = state_33229;
(statearr_33231[(7)] = inst_33211__$1);

return statearr_33231;
})();
if(inst_33213){
var statearr_33232_33257 = state_33229__$1;
(statearr_33232_33257[(1)] = (8));

} else {
var statearr_33233_33258 = state_33229__$1;
(statearr_33233_33258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (1))){
var inst_33206 = (0);
var state_33229__$1 = (function (){var statearr_33234 = state_33229;
(statearr_33234[(8)] = inst_33206);

return statearr_33234;
})();
var statearr_33235_33259 = state_33229__$1;
(statearr_33235_33259[(2)] = null);

(statearr_33235_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (4))){
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33229__$1,(7),ch);
} else {
if((state_val_33230 === (6))){
var inst_33224 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33236_33260 = state_33229__$1;
(statearr_33236_33260[(2)] = inst_33224);

(statearr_33236_33260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (3))){
var inst_33226 = (state_33229[(2)]);
var inst_33227 = cljs.core.async.close_BANG_.call(null,out);
var state_33229__$1 = (function (){var statearr_33237 = state_33229;
(statearr_33237[(9)] = inst_33226);

return statearr_33237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33229__$1,inst_33227);
} else {
if((state_val_33230 === (2))){
var inst_33206 = (state_33229[(8)]);
var inst_33208 = (inst_33206 < n);
var state_33229__$1 = state_33229;
if(cljs.core.truth_(inst_33208)){
var statearr_33238_33261 = state_33229__$1;
(statearr_33238_33261[(1)] = (4));

} else {
var statearr_33239_33262 = state_33229__$1;
(statearr_33239_33262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (11))){
var inst_33206 = (state_33229[(8)]);
var inst_33216 = (state_33229[(2)]);
var inst_33217 = (inst_33206 + (1));
var inst_33206__$1 = inst_33217;
var state_33229__$1 = (function (){var statearr_33240 = state_33229;
(statearr_33240[(10)] = inst_33216);

(statearr_33240[(8)] = inst_33206__$1);

return statearr_33240;
})();
var statearr_33241_33263 = state_33229__$1;
(statearr_33241_33263[(2)] = null);

(statearr_33241_33263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (9))){
var state_33229__$1 = state_33229;
var statearr_33242_33264 = state_33229__$1;
(statearr_33242_33264[(2)] = null);

(statearr_33242_33264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (5))){
var state_33229__$1 = state_33229;
var statearr_33243_33265 = state_33229__$1;
(statearr_33243_33265[(2)] = null);

(statearr_33243_33265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (10))){
var inst_33221 = (state_33229[(2)]);
var state_33229__$1 = state_33229;
var statearr_33244_33266 = state_33229__$1;
(statearr_33244_33266[(2)] = inst_33221);

(statearr_33244_33266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33230 === (8))){
var inst_33211 = (state_33229[(7)]);
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33229__$1,(11),out,inst_33211);
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
});})(c__10627__auto___33256,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33256,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33229){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33249){if((e33249 instanceof Object)){
var ex__10519__auto__ = e33249;
var statearr_33250_33267 = state_33229;
(statearr_33250_33267[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33268 = state_33229;
state_33229 = G__33268;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33256,out))
})();
var state__10629__auto__ = (function (){var statearr_33251 = f__10628__auto__.call(null);
(statearr_33251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33256);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33256,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33276 = (function (map_LT_,f,ch,meta33277){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33277 = meta33277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33278,meta33277__$1){
var self__ = this;
var _33278__$1 = this;
return (new cljs.core.async.t_cljs$core$async33276(self__.map_LT_,self__.f,self__.ch,meta33277__$1));
});

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33278){
var self__ = this;
var _33278__$1 = this;
return self__.meta33277;
});

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33279 = (function (map_LT_,f,ch,meta33277,_,fn1,meta33280){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33277 = meta33277;
this._ = _;
this.fn1 = fn1;
this.meta33280 = meta33280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33281,meta33280__$1){
var self__ = this;
var _33281__$1 = this;
return (new cljs.core.async.t_cljs$core$async33279(self__.map_LT_,self__.f,self__.ch,self__.meta33277,self__._,self__.fn1,meta33280__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33281){
var self__ = this;
var _33281__$1 = this;
return self__.meta33280;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33269_SHARP_){
return f1.call(null,(((p1__33269_SHARP_ == null))?null:self__.f.call(null,p1__33269_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33279.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33277","meta33277",752848739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33276","cljs.core.async/t_cljs$core$async33276",566326970,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33280","meta33280",612049456,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33279";

cljs.core.async.t_cljs$core$async33279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async33279");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33279 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33279(map_LT___$1,f__$1,ch__$1,meta33277__$1,___$2,fn1__$1,meta33280){
return (new cljs.core.async.t_cljs$core$async33279(map_LT___$1,f__$1,ch__$1,meta33277__$1,___$2,fn1__$1,meta33280));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33279(self__.map_LT_,self__.f,self__.ch,self__.meta33277,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4119__auto__ = ret;
if(cljs.core.truth_(and__4119__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4119__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33277","meta33277",752848739,null)], null);
});

cljs.core.async.t_cljs$core$async33276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33276";

cljs.core.async.t_cljs$core$async33276.cljs$lang$ctorPrWriter = (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async33276");
});

cljs.core.async.__GT_t_cljs$core$async33276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33276(map_LT___$1,f__$1,ch__$1,meta33277){
return (new cljs.core.async.t_cljs$core$async33276(map_LT___$1,f__$1,ch__$1,meta33277));
});

}

return (new cljs.core.async.t_cljs$core$async33276(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33285 = (function (map_GT_,f,ch,meta33286){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33286 = meta33286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33287,meta33286__$1){
var self__ = this;
var _33287__$1 = this;
return (new cljs.core.async.t_cljs$core$async33285(self__.map_GT_,self__.f,self__.ch,meta33286__$1));
});

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33287){
var self__ = this;
var _33287__$1 = this;
return self__.meta33286;
});

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33286","meta33286",1983693379,null)], null);
});

cljs.core.async.t_cljs$core$async33285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33285";

cljs.core.async.t_cljs$core$async33285.cljs$lang$ctorPrWriter = (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async33285");
});

cljs.core.async.__GT_t_cljs$core$async33285 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33285(map_GT___$1,f__$1,ch__$1,meta33286){
return (new cljs.core.async.t_cljs$core$async33285(map_GT___$1,f__$1,ch__$1,meta33286));
});

}

return (new cljs.core.async.t_cljs$core$async33285(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33291 = (function (filter_GT_,p,ch,meta33292){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33292 = meta33292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33293,meta33292__$1){
var self__ = this;
var _33293__$1 = this;
return (new cljs.core.async.t_cljs$core$async33291(self__.filter_GT_,self__.p,self__.ch,meta33292__$1));
});

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33293){
var self__ = this;
var _33293__$1 = this;
return self__.meta33292;
});

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33292","meta33292",92957928,null)], null);
});

cljs.core.async.t_cljs$core$async33291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33291";

cljs.core.async.t_cljs$core$async33291.cljs$lang$ctorPrWriter = (function (this__4729__auto__,writer__4730__auto__,opt__4731__auto__){
return cljs.core._write.call(null,writer__4730__auto__,"cljs.core.async/t_cljs$core$async33291");
});

cljs.core.async.__GT_t_cljs$core$async33291 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33291(filter_GT___$1,p__$1,ch__$1,meta33292){
return (new cljs.core.async.t_cljs$core$async33291(filter_GT___$1,p__$1,ch__$1,meta33292));
});

}

return (new cljs.core.async.t_cljs$core$async33291(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33294 = [];
var len__5189__auto___33338 = arguments.length;
var i__5190__auto___33339 = (0);
while(true){
if((i__5190__auto___33339 < len__5189__auto___33338)){
args33294.push((arguments[i__5190__auto___33339]));

var G__33340 = (i__5190__auto___33339 + (1));
i__5190__auto___33339 = G__33340;
continue;
} else {
}
break;
}

var G__33296 = args33294.length;
switch (G__33296) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33294.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33342,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33342,out){
return (function (state_33317){
var state_val_33318 = (state_33317[(1)]);
if((state_val_33318 === (7))){
var inst_33313 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33319_33343 = state_33317__$1;
(statearr_33319_33343[(2)] = inst_33313);

(statearr_33319_33343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (1))){
var state_33317__$1 = state_33317;
var statearr_33320_33344 = state_33317__$1;
(statearr_33320_33344[(2)] = null);

(statearr_33320_33344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (4))){
var inst_33299 = (state_33317[(7)]);
var inst_33299__$1 = (state_33317[(2)]);
var inst_33300 = (inst_33299__$1 == null);
var state_33317__$1 = (function (){var statearr_33321 = state_33317;
(statearr_33321[(7)] = inst_33299__$1);

return statearr_33321;
})();
if(cljs.core.truth_(inst_33300)){
var statearr_33322_33345 = state_33317__$1;
(statearr_33322_33345[(1)] = (5));

} else {
var statearr_33323_33346 = state_33317__$1;
(statearr_33323_33346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (6))){
var inst_33299 = (state_33317[(7)]);
var inst_33304 = p.call(null,inst_33299);
var state_33317__$1 = state_33317;
if(cljs.core.truth_(inst_33304)){
var statearr_33324_33347 = state_33317__$1;
(statearr_33324_33347[(1)] = (8));

} else {
var statearr_33325_33348 = state_33317__$1;
(statearr_33325_33348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (3))){
var inst_33315 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33317__$1,inst_33315);
} else {
if((state_val_33318 === (2))){
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33317__$1,(4),ch);
} else {
if((state_val_33318 === (11))){
var inst_33307 = (state_33317[(2)]);
var state_33317__$1 = state_33317;
var statearr_33326_33349 = state_33317__$1;
(statearr_33326_33349[(2)] = inst_33307);

(statearr_33326_33349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (9))){
var state_33317__$1 = state_33317;
var statearr_33327_33350 = state_33317__$1;
(statearr_33327_33350[(2)] = null);

(statearr_33327_33350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (5))){
var inst_33302 = cljs.core.async.close_BANG_.call(null,out);
var state_33317__$1 = state_33317;
var statearr_33328_33351 = state_33317__$1;
(statearr_33328_33351[(2)] = inst_33302);

(statearr_33328_33351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (10))){
var inst_33310 = (state_33317[(2)]);
var state_33317__$1 = (function (){var statearr_33329 = state_33317;
(statearr_33329[(8)] = inst_33310);

return statearr_33329;
})();
var statearr_33330_33352 = state_33317__$1;
(statearr_33330_33352[(2)] = null);

(statearr_33330_33352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33318 === (8))){
var inst_33299 = (state_33317[(7)]);
var state_33317__$1 = state_33317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33317__$1,(11),out,inst_33299);
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
});})(c__10627__auto___33342,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33342,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33334 = [null,null,null,null,null,null,null,null,null];
(statearr_33334[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33334[(1)] = (1));

return statearr_33334;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33317){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33335){if((e33335 instanceof Object)){
var ex__10519__auto__ = e33335;
var statearr_33336_33353 = state_33317;
(statearr_33336_33353[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33354 = state_33317;
state_33317 = G__33354;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33342,out))
})();
var state__10629__auto__ = (function (){var statearr_33337 = f__10628__auto__.call(null);
(statearr_33337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33342);

return statearr_33337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33342,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33355 = [];
var len__5189__auto___33358 = arguments.length;
var i__5190__auto___33359 = (0);
while(true){
if((i__5190__auto___33359 < len__5189__auto___33358)){
args33355.push((arguments[i__5190__auto___33359]));

var G__33360 = (i__5190__auto___33359 + (1));
i__5190__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var G__33357 = args33355.length;
switch (G__33357) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33355.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto__){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto__){
return (function (state_33527){
var state_val_33528 = (state_33527[(1)]);
if((state_val_33528 === (7))){
var inst_33523 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33529_33570 = state_33527__$1;
(statearr_33529_33570[(2)] = inst_33523);

(statearr_33529_33570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (20))){
var inst_33493 = (state_33527[(7)]);
var inst_33504 = (state_33527[(2)]);
var inst_33505 = cljs.core.next.call(null,inst_33493);
var inst_33479 = inst_33505;
var inst_33480 = null;
var inst_33481 = (0);
var inst_33482 = (0);
var state_33527__$1 = (function (){var statearr_33530 = state_33527;
(statearr_33530[(8)] = inst_33480);

(statearr_33530[(9)] = inst_33479);

(statearr_33530[(10)] = inst_33504);

(statearr_33530[(11)] = inst_33481);

(statearr_33530[(12)] = inst_33482);

return statearr_33530;
})();
var statearr_33531_33571 = state_33527__$1;
(statearr_33531_33571[(2)] = null);

(statearr_33531_33571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (1))){
var state_33527__$1 = state_33527;
var statearr_33532_33572 = state_33527__$1;
(statearr_33532_33572[(2)] = null);

(statearr_33532_33572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (4))){
var inst_33468 = (state_33527[(13)]);
var inst_33468__$1 = (state_33527[(2)]);
var inst_33469 = (inst_33468__$1 == null);
var state_33527__$1 = (function (){var statearr_33533 = state_33527;
(statearr_33533[(13)] = inst_33468__$1);

return statearr_33533;
})();
if(cljs.core.truth_(inst_33469)){
var statearr_33534_33573 = state_33527__$1;
(statearr_33534_33573[(1)] = (5));

} else {
var statearr_33535_33574 = state_33527__$1;
(statearr_33535_33574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (15))){
var state_33527__$1 = state_33527;
var statearr_33539_33575 = state_33527__$1;
(statearr_33539_33575[(2)] = null);

(statearr_33539_33575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (21))){
var state_33527__$1 = state_33527;
var statearr_33540_33576 = state_33527__$1;
(statearr_33540_33576[(2)] = null);

(statearr_33540_33576[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (13))){
var inst_33480 = (state_33527[(8)]);
var inst_33479 = (state_33527[(9)]);
var inst_33481 = (state_33527[(11)]);
var inst_33482 = (state_33527[(12)]);
var inst_33489 = (state_33527[(2)]);
var inst_33490 = (inst_33482 + (1));
var tmp33536 = inst_33480;
var tmp33537 = inst_33479;
var tmp33538 = inst_33481;
var inst_33479__$1 = tmp33537;
var inst_33480__$1 = tmp33536;
var inst_33481__$1 = tmp33538;
var inst_33482__$1 = inst_33490;
var state_33527__$1 = (function (){var statearr_33541 = state_33527;
(statearr_33541[(8)] = inst_33480__$1);

(statearr_33541[(9)] = inst_33479__$1);

(statearr_33541[(14)] = inst_33489);

(statearr_33541[(11)] = inst_33481__$1);

(statearr_33541[(12)] = inst_33482__$1);

return statearr_33541;
})();
var statearr_33542_33577 = state_33527__$1;
(statearr_33542_33577[(2)] = null);

(statearr_33542_33577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (22))){
var state_33527__$1 = state_33527;
var statearr_33543_33578 = state_33527__$1;
(statearr_33543_33578[(2)] = null);

(statearr_33543_33578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (6))){
var inst_33468 = (state_33527[(13)]);
var inst_33477 = f.call(null,inst_33468);
var inst_33478 = cljs.core.seq.call(null,inst_33477);
var inst_33479 = inst_33478;
var inst_33480 = null;
var inst_33481 = (0);
var inst_33482 = (0);
var state_33527__$1 = (function (){var statearr_33544 = state_33527;
(statearr_33544[(8)] = inst_33480);

(statearr_33544[(9)] = inst_33479);

(statearr_33544[(11)] = inst_33481);

(statearr_33544[(12)] = inst_33482);

return statearr_33544;
})();
var statearr_33545_33579 = state_33527__$1;
(statearr_33545_33579[(2)] = null);

(statearr_33545_33579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (17))){
var inst_33493 = (state_33527[(7)]);
var inst_33497 = cljs.core.chunk_first.call(null,inst_33493);
var inst_33498 = cljs.core.chunk_rest.call(null,inst_33493);
var inst_33499 = cljs.core.count.call(null,inst_33497);
var inst_33479 = inst_33498;
var inst_33480 = inst_33497;
var inst_33481 = inst_33499;
var inst_33482 = (0);
var state_33527__$1 = (function (){var statearr_33546 = state_33527;
(statearr_33546[(8)] = inst_33480);

(statearr_33546[(9)] = inst_33479);

(statearr_33546[(11)] = inst_33481);

(statearr_33546[(12)] = inst_33482);

return statearr_33546;
})();
var statearr_33547_33580 = state_33527__$1;
(statearr_33547_33580[(2)] = null);

(statearr_33547_33580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (3))){
var inst_33525 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33527__$1,inst_33525);
} else {
if((state_val_33528 === (12))){
var inst_33513 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33548_33581 = state_33527__$1;
(statearr_33548_33581[(2)] = inst_33513);

(statearr_33548_33581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (2))){
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33527__$1,(4),in$);
} else {
if((state_val_33528 === (23))){
var inst_33521 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33549_33582 = state_33527__$1;
(statearr_33549_33582[(2)] = inst_33521);

(statearr_33549_33582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (19))){
var inst_33508 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33550_33583 = state_33527__$1;
(statearr_33550_33583[(2)] = inst_33508);

(statearr_33550_33583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (11))){
var inst_33479 = (state_33527[(9)]);
var inst_33493 = (state_33527[(7)]);
var inst_33493__$1 = cljs.core.seq.call(null,inst_33479);
var state_33527__$1 = (function (){var statearr_33551 = state_33527;
(statearr_33551[(7)] = inst_33493__$1);

return statearr_33551;
})();
if(inst_33493__$1){
var statearr_33552_33584 = state_33527__$1;
(statearr_33552_33584[(1)] = (14));

} else {
var statearr_33553_33585 = state_33527__$1;
(statearr_33553_33585[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (9))){
var inst_33515 = (state_33527[(2)]);
var inst_33516 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33527__$1 = (function (){var statearr_33554 = state_33527;
(statearr_33554[(15)] = inst_33515);

return statearr_33554;
})();
if(cljs.core.truth_(inst_33516)){
var statearr_33555_33586 = state_33527__$1;
(statearr_33555_33586[(1)] = (21));

} else {
var statearr_33556_33587 = state_33527__$1;
(statearr_33556_33587[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (5))){
var inst_33471 = cljs.core.async.close_BANG_.call(null,out);
var state_33527__$1 = state_33527;
var statearr_33557_33588 = state_33527__$1;
(statearr_33557_33588[(2)] = inst_33471);

(statearr_33557_33588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (14))){
var inst_33493 = (state_33527[(7)]);
var inst_33495 = cljs.core.chunked_seq_QMARK_.call(null,inst_33493);
var state_33527__$1 = state_33527;
if(inst_33495){
var statearr_33558_33589 = state_33527__$1;
(statearr_33558_33589[(1)] = (17));

} else {
var statearr_33559_33590 = state_33527__$1;
(statearr_33559_33590[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (16))){
var inst_33511 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33560_33591 = state_33527__$1;
(statearr_33560_33591[(2)] = inst_33511);

(statearr_33560_33591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (10))){
var inst_33480 = (state_33527[(8)]);
var inst_33482 = (state_33527[(12)]);
var inst_33487 = cljs.core._nth.call(null,inst_33480,inst_33482);
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33527__$1,(13),out,inst_33487);
} else {
if((state_val_33528 === (18))){
var inst_33493 = (state_33527[(7)]);
var inst_33502 = cljs.core.first.call(null,inst_33493);
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33527__$1,(20),out,inst_33502);
} else {
if((state_val_33528 === (8))){
var inst_33481 = (state_33527[(11)]);
var inst_33482 = (state_33527[(12)]);
var inst_33484 = (inst_33482 < inst_33481);
var inst_33485 = inst_33484;
var state_33527__$1 = state_33527;
if(cljs.core.truth_(inst_33485)){
var statearr_33561_33592 = state_33527__$1;
(statearr_33561_33592[(1)] = (10));

} else {
var statearr_33562_33593 = state_33527__$1;
(statearr_33562_33593[(1)] = (11));

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
});})(c__10627__auto__))
;
return ((function (switch__10515__auto__,c__10627__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____0 = (function (){
var statearr_33566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33566[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__);

(statearr_33566[(1)] = (1));

return statearr_33566;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____1 = (function (state_33527){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33567){if((e33567 instanceof Object)){
var ex__10519__auto__ = e33567;
var statearr_33568_33594 = state_33527;
(statearr_33568_33594[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33595 = state_33527;
state_33527 = G__33595;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__ = function(state_33527){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____1.call(this,state_33527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10516__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto__))
})();
var state__10629__auto__ = (function (){var statearr_33569 = f__10628__auto__.call(null);
(statearr_33569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto__);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto__))
);

return c__10627__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33596 = [];
var len__5189__auto___33599 = arguments.length;
var i__5190__auto___33600 = (0);
while(true){
if((i__5190__auto___33600 < len__5189__auto___33599)){
args33596.push((arguments[i__5190__auto___33600]));

var G__33601 = (i__5190__auto___33600 + (1));
i__5190__auto___33600 = G__33601;
continue;
} else {
}
break;
}

var G__33598 = args33596.length;
switch (G__33598) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33596.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args33603 = [];
var len__5189__auto___33606 = arguments.length;
var i__5190__auto___33607 = (0);
while(true){
if((i__5190__auto___33607 < len__5189__auto___33606)){
args33603.push((arguments[i__5190__auto___33607]));

var G__33608 = (i__5190__auto___33607 + (1));
i__5190__auto___33607 = G__33608;
continue;
} else {
}
break;
}

var G__33605 = args33603.length;
switch (G__33605) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33603.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args33610 = [];
var len__5189__auto___33661 = arguments.length;
var i__5190__auto___33662 = (0);
while(true){
if((i__5190__auto___33662 < len__5189__auto___33661)){
args33610.push((arguments[i__5190__auto___33662]));

var G__33663 = (i__5190__auto___33662 + (1));
i__5190__auto___33662 = G__33663;
continue;
} else {
}
break;
}

var G__33612 = args33610.length;
switch (G__33612) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33610.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33665,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33665,out){
return (function (state_33636){
var state_val_33637 = (state_33636[(1)]);
if((state_val_33637 === (7))){
var inst_33631 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33638_33666 = state_33636__$1;
(statearr_33638_33666[(2)] = inst_33631);

(statearr_33638_33666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (1))){
var inst_33613 = null;
var state_33636__$1 = (function (){var statearr_33639 = state_33636;
(statearr_33639[(7)] = inst_33613);

return statearr_33639;
})();
var statearr_33640_33667 = state_33636__$1;
(statearr_33640_33667[(2)] = null);

(statearr_33640_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (4))){
var inst_33616 = (state_33636[(8)]);
var inst_33616__$1 = (state_33636[(2)]);
var inst_33617 = (inst_33616__$1 == null);
var inst_33618 = cljs.core.not.call(null,inst_33617);
var state_33636__$1 = (function (){var statearr_33641 = state_33636;
(statearr_33641[(8)] = inst_33616__$1);

return statearr_33641;
})();
if(inst_33618){
var statearr_33642_33668 = state_33636__$1;
(statearr_33642_33668[(1)] = (5));

} else {
var statearr_33643_33669 = state_33636__$1;
(statearr_33643_33669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (6))){
var state_33636__$1 = state_33636;
var statearr_33644_33670 = state_33636__$1;
(statearr_33644_33670[(2)] = null);

(statearr_33644_33670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (3))){
var inst_33633 = (state_33636[(2)]);
var inst_33634 = cljs.core.async.close_BANG_.call(null,out);
var state_33636__$1 = (function (){var statearr_33645 = state_33636;
(statearr_33645[(9)] = inst_33633);

return statearr_33645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33636__$1,inst_33634);
} else {
if((state_val_33637 === (2))){
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33636__$1,(4),ch);
} else {
if((state_val_33637 === (11))){
var inst_33616 = (state_33636[(8)]);
var inst_33625 = (state_33636[(2)]);
var inst_33613 = inst_33616;
var state_33636__$1 = (function (){var statearr_33646 = state_33636;
(statearr_33646[(10)] = inst_33625);

(statearr_33646[(7)] = inst_33613);

return statearr_33646;
})();
var statearr_33647_33671 = state_33636__$1;
(statearr_33647_33671[(2)] = null);

(statearr_33647_33671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (9))){
var inst_33616 = (state_33636[(8)]);
var state_33636__$1 = state_33636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33636__$1,(11),out,inst_33616);
} else {
if((state_val_33637 === (5))){
var inst_33616 = (state_33636[(8)]);
var inst_33613 = (state_33636[(7)]);
var inst_33620 = cljs.core._EQ_.call(null,inst_33616,inst_33613);
var state_33636__$1 = state_33636;
if(inst_33620){
var statearr_33649_33672 = state_33636__$1;
(statearr_33649_33672[(1)] = (8));

} else {
var statearr_33650_33673 = state_33636__$1;
(statearr_33650_33673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (10))){
var inst_33628 = (state_33636[(2)]);
var state_33636__$1 = state_33636;
var statearr_33651_33674 = state_33636__$1;
(statearr_33651_33674[(2)] = inst_33628);

(statearr_33651_33674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33637 === (8))){
var inst_33613 = (state_33636[(7)]);
var tmp33648 = inst_33613;
var inst_33613__$1 = tmp33648;
var state_33636__$1 = (function (){var statearr_33652 = state_33636;
(statearr_33652[(7)] = inst_33613__$1);

return statearr_33652;
})();
var statearr_33653_33675 = state_33636__$1;
(statearr_33653_33675[(2)] = null);

(statearr_33653_33675[(1)] = (2));


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
});})(c__10627__auto___33665,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33665,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33657[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33657[(1)] = (1));

return statearr_33657;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33636){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33658){if((e33658 instanceof Object)){
var ex__10519__auto__ = e33658;
var statearr_33659_33676 = state_33636;
(statearr_33659_33676[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33677 = state_33636;
state_33636 = G__33677;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33665,out))
})();
var state__10629__auto__ = (function (){var statearr_33660 = f__10628__auto__.call(null);
(statearr_33660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33665);

return statearr_33660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33665,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33678 = [];
var len__5189__auto___33748 = arguments.length;
var i__5190__auto___33749 = (0);
while(true){
if((i__5190__auto___33749 < len__5189__auto___33748)){
args33678.push((arguments[i__5190__auto___33749]));

var G__33750 = (i__5190__auto___33749 + (1));
i__5190__auto___33749 = G__33750;
continue;
} else {
}
break;
}

var G__33680 = args33678.length;
switch (G__33680) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33678.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33752,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33752,out){
return (function (state_33718){
var state_val_33719 = (state_33718[(1)]);
if((state_val_33719 === (7))){
var inst_33714 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33720_33753 = state_33718__$1;
(statearr_33720_33753[(2)] = inst_33714);

(statearr_33720_33753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (1))){
var inst_33681 = (new Array(n));
var inst_33682 = inst_33681;
var inst_33683 = (0);
var state_33718__$1 = (function (){var statearr_33721 = state_33718;
(statearr_33721[(7)] = inst_33682);

(statearr_33721[(8)] = inst_33683);

return statearr_33721;
})();
var statearr_33722_33754 = state_33718__$1;
(statearr_33722_33754[(2)] = null);

(statearr_33722_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (4))){
var inst_33686 = (state_33718[(9)]);
var inst_33686__$1 = (state_33718[(2)]);
var inst_33687 = (inst_33686__$1 == null);
var inst_33688 = cljs.core.not.call(null,inst_33687);
var state_33718__$1 = (function (){var statearr_33723 = state_33718;
(statearr_33723[(9)] = inst_33686__$1);

return statearr_33723;
})();
if(inst_33688){
var statearr_33724_33755 = state_33718__$1;
(statearr_33724_33755[(1)] = (5));

} else {
var statearr_33725_33756 = state_33718__$1;
(statearr_33725_33756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (15))){
var inst_33708 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33726_33757 = state_33718__$1;
(statearr_33726_33757[(2)] = inst_33708);

(statearr_33726_33757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (13))){
var state_33718__$1 = state_33718;
var statearr_33727_33758 = state_33718__$1;
(statearr_33727_33758[(2)] = null);

(statearr_33727_33758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (6))){
var inst_33683 = (state_33718[(8)]);
var inst_33704 = (inst_33683 > (0));
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33704)){
var statearr_33728_33759 = state_33718__$1;
(statearr_33728_33759[(1)] = (12));

} else {
var statearr_33729_33760 = state_33718__$1;
(statearr_33729_33760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (3))){
var inst_33716 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33718__$1,inst_33716);
} else {
if((state_val_33719 === (12))){
var inst_33682 = (state_33718[(7)]);
var inst_33706 = cljs.core.vec.call(null,inst_33682);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(15),out,inst_33706);
} else {
if((state_val_33719 === (2))){
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33718__$1,(4),ch);
} else {
if((state_val_33719 === (11))){
var inst_33698 = (state_33718[(2)]);
var inst_33699 = (new Array(n));
var inst_33682 = inst_33699;
var inst_33683 = (0);
var state_33718__$1 = (function (){var statearr_33730 = state_33718;
(statearr_33730[(7)] = inst_33682);

(statearr_33730[(10)] = inst_33698);

(statearr_33730[(8)] = inst_33683);

return statearr_33730;
})();
var statearr_33731_33761 = state_33718__$1;
(statearr_33731_33761[(2)] = null);

(statearr_33731_33761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (9))){
var inst_33682 = (state_33718[(7)]);
var inst_33696 = cljs.core.vec.call(null,inst_33682);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(11),out,inst_33696);
} else {
if((state_val_33719 === (5))){
var inst_33682 = (state_33718[(7)]);
var inst_33691 = (state_33718[(11)]);
var inst_33686 = (state_33718[(9)]);
var inst_33683 = (state_33718[(8)]);
var inst_33690 = (inst_33682[inst_33683] = inst_33686);
var inst_33691__$1 = (inst_33683 + (1));
var inst_33692 = (inst_33691__$1 < n);
var state_33718__$1 = (function (){var statearr_33732 = state_33718;
(statearr_33732[(11)] = inst_33691__$1);

(statearr_33732[(12)] = inst_33690);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33733_33762 = state_33718__$1;
(statearr_33733_33762[(1)] = (8));

} else {
var statearr_33734_33763 = state_33718__$1;
(statearr_33734_33763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (14))){
var inst_33711 = (state_33718[(2)]);
var inst_33712 = cljs.core.async.close_BANG_.call(null,out);
var state_33718__$1 = (function (){var statearr_33736 = state_33718;
(statearr_33736[(13)] = inst_33711);

return statearr_33736;
})();
var statearr_33737_33764 = state_33718__$1;
(statearr_33737_33764[(2)] = inst_33712);

(statearr_33737_33764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (10))){
var inst_33702 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33738_33765 = state_33718__$1;
(statearr_33738_33765[(2)] = inst_33702);

(statearr_33738_33765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (8))){
var inst_33682 = (state_33718[(7)]);
var inst_33691 = (state_33718[(11)]);
var tmp33735 = inst_33682;
var inst_33682__$1 = tmp33735;
var inst_33683 = inst_33691;
var state_33718__$1 = (function (){var statearr_33739 = state_33718;
(statearr_33739[(7)] = inst_33682__$1);

(statearr_33739[(8)] = inst_33683);

return statearr_33739;
})();
var statearr_33740_33766 = state_33718__$1;
(statearr_33740_33766[(2)] = null);

(statearr_33740_33766[(1)] = (2));


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
});})(c__10627__auto___33752,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33752,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33744[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33744[(1)] = (1));

return statearr_33744;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33718){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33745){if((e33745 instanceof Object)){
var ex__10519__auto__ = e33745;
var statearr_33746_33767 = state_33718;
(statearr_33746_33767[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33768 = state_33718;
state_33718 = G__33768;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33752,out))
})();
var state__10629__auto__ = (function (){var statearr_33747 = f__10628__auto__.call(null);
(statearr_33747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33752);

return statearr_33747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33752,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33769 = [];
var len__5189__auto___33843 = arguments.length;
var i__5190__auto___33844 = (0);
while(true){
if((i__5190__auto___33844 < len__5189__auto___33843)){
args33769.push((arguments[i__5190__auto___33844]));

var G__33845 = (i__5190__auto___33844 + (1));
i__5190__auto___33844 = G__33845;
continue;
} else {
}
break;
}

var G__33771 = args33769.length;
switch (G__33771) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33769.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10627__auto___33847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10627__auto___33847,out){
return (function (){
var f__10628__auto__ = (function (){var switch__10515__auto__ = ((function (c__10627__auto___33847,out){
return (function (state_33813){
var state_val_33814 = (state_33813[(1)]);
if((state_val_33814 === (7))){
var inst_33809 = (state_33813[(2)]);
var state_33813__$1 = state_33813;
var statearr_33815_33848 = state_33813__$1;
(statearr_33815_33848[(2)] = inst_33809);

(statearr_33815_33848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (1))){
var inst_33772 = [];
var inst_33773 = inst_33772;
var inst_33774 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33813__$1 = (function (){var statearr_33816 = state_33813;
(statearr_33816[(7)] = inst_33773);

(statearr_33816[(8)] = inst_33774);

return statearr_33816;
})();
var statearr_33817_33849 = state_33813__$1;
(statearr_33817_33849[(2)] = null);

(statearr_33817_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (4))){
var inst_33777 = (state_33813[(9)]);
var inst_33777__$1 = (state_33813[(2)]);
var inst_33778 = (inst_33777__$1 == null);
var inst_33779 = cljs.core.not.call(null,inst_33778);
var state_33813__$1 = (function (){var statearr_33818 = state_33813;
(statearr_33818[(9)] = inst_33777__$1);

return statearr_33818;
})();
if(inst_33779){
var statearr_33819_33850 = state_33813__$1;
(statearr_33819_33850[(1)] = (5));

} else {
var statearr_33820_33851 = state_33813__$1;
(statearr_33820_33851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (15))){
var inst_33803 = (state_33813[(2)]);
var state_33813__$1 = state_33813;
var statearr_33821_33852 = state_33813__$1;
(statearr_33821_33852[(2)] = inst_33803);

(statearr_33821_33852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (13))){
var state_33813__$1 = state_33813;
var statearr_33822_33853 = state_33813__$1;
(statearr_33822_33853[(2)] = null);

(statearr_33822_33853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (6))){
var inst_33773 = (state_33813[(7)]);
var inst_33798 = inst_33773.length;
var inst_33799 = (inst_33798 > (0));
var state_33813__$1 = state_33813;
if(cljs.core.truth_(inst_33799)){
var statearr_33823_33854 = state_33813__$1;
(statearr_33823_33854[(1)] = (12));

} else {
var statearr_33824_33855 = state_33813__$1;
(statearr_33824_33855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (3))){
var inst_33811 = (state_33813[(2)]);
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33813__$1,inst_33811);
} else {
if((state_val_33814 === (12))){
var inst_33773 = (state_33813[(7)]);
var inst_33801 = cljs.core.vec.call(null,inst_33773);
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33813__$1,(15),out,inst_33801);
} else {
if((state_val_33814 === (2))){
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33813__$1,(4),ch);
} else {
if((state_val_33814 === (11))){
var inst_33781 = (state_33813[(10)]);
var inst_33777 = (state_33813[(9)]);
var inst_33791 = (state_33813[(2)]);
var inst_33792 = [];
var inst_33793 = inst_33792.push(inst_33777);
var inst_33773 = inst_33792;
var inst_33774 = inst_33781;
var state_33813__$1 = (function (){var statearr_33825 = state_33813;
(statearr_33825[(7)] = inst_33773);

(statearr_33825[(11)] = inst_33791);

(statearr_33825[(12)] = inst_33793);

(statearr_33825[(8)] = inst_33774);

return statearr_33825;
})();
var statearr_33826_33856 = state_33813__$1;
(statearr_33826_33856[(2)] = null);

(statearr_33826_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (9))){
var inst_33773 = (state_33813[(7)]);
var inst_33789 = cljs.core.vec.call(null,inst_33773);
var state_33813__$1 = state_33813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33813__$1,(11),out,inst_33789);
} else {
if((state_val_33814 === (5))){
var inst_33781 = (state_33813[(10)]);
var inst_33774 = (state_33813[(8)]);
var inst_33777 = (state_33813[(9)]);
var inst_33781__$1 = f.call(null,inst_33777);
var inst_33782 = cljs.core._EQ_.call(null,inst_33781__$1,inst_33774);
var inst_33783 = cljs.core.keyword_identical_QMARK_.call(null,inst_33774,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33784 = (inst_33782) || (inst_33783);
var state_33813__$1 = (function (){var statearr_33827 = state_33813;
(statearr_33827[(10)] = inst_33781__$1);

return statearr_33827;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33828_33857 = state_33813__$1;
(statearr_33828_33857[(1)] = (8));

} else {
var statearr_33829_33858 = state_33813__$1;
(statearr_33829_33858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (14))){
var inst_33806 = (state_33813[(2)]);
var inst_33807 = cljs.core.async.close_BANG_.call(null,out);
var state_33813__$1 = (function (){var statearr_33831 = state_33813;
(statearr_33831[(13)] = inst_33806);

return statearr_33831;
})();
var statearr_33832_33859 = state_33813__$1;
(statearr_33832_33859[(2)] = inst_33807);

(statearr_33832_33859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (10))){
var inst_33796 = (state_33813[(2)]);
var state_33813__$1 = state_33813;
var statearr_33833_33860 = state_33813__$1;
(statearr_33833_33860[(2)] = inst_33796);

(statearr_33833_33860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33814 === (8))){
var inst_33773 = (state_33813[(7)]);
var inst_33781 = (state_33813[(10)]);
var inst_33777 = (state_33813[(9)]);
var inst_33786 = inst_33773.push(inst_33777);
var tmp33830 = inst_33773;
var inst_33773__$1 = tmp33830;
var inst_33774 = inst_33781;
var state_33813__$1 = (function (){var statearr_33834 = state_33813;
(statearr_33834[(7)] = inst_33773__$1);

(statearr_33834[(14)] = inst_33786);

(statearr_33834[(8)] = inst_33774);

return statearr_33834;
})();
var statearr_33835_33861 = state_33813__$1;
(statearr_33835_33861[(2)] = null);

(statearr_33835_33861[(1)] = (2));


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
});})(c__10627__auto___33847,out))
;
return ((function (switch__10515__auto__,c__10627__auto___33847,out){
return (function() {
var cljs$core$async$state_machine__10516__auto__ = null;
var cljs$core$async$state_machine__10516__auto____0 = (function (){
var statearr_33839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33839[(0)] = cljs$core$async$state_machine__10516__auto__);

(statearr_33839[(1)] = (1));

return statearr_33839;
});
var cljs$core$async$state_machine__10516__auto____1 = (function (state_33813){
while(true){
var ret_value__10517__auto__ = (function (){try{while(true){
var result__10518__auto__ = switch__10515__auto__.call(null,state_33813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10518__auto__;
}
break;
}
}catch (e33840){if((e33840 instanceof Object)){
var ex__10519__auto__ = e33840;
var statearr_33841_33862 = state_33813;
(statearr_33841_33862[(5)] = ex__10519__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33863 = state_33813;
state_33813 = G__33863;
continue;
} else {
return ret_value__10517__auto__;
}
break;
}
});
cljs$core$async$state_machine__10516__auto__ = function(state_33813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10516__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10516__auto____1.call(this,state_33813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10516__auto____0;
cljs$core$async$state_machine__10516__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10516__auto____1;
return cljs$core$async$state_machine__10516__auto__;
})()
;})(switch__10515__auto__,c__10627__auto___33847,out))
})();
var state__10629__auto__ = (function (){var statearr_33842 = f__10628__auto__.call(null);
(statearr_33842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10627__auto___33847);

return statearr_33842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10629__auto__);
});})(c__10627__auto___33847,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
