import{A as M,Db as y,G as $,Gb as B,I as F,Lb as J,N as h,Q as f,S as n,T as g,Z as G,f as p,g as O,ib as q,j as c,la as E,n as A,sa as v,u as z,xb as x}from"./chunk-YBM25Y3C.js";var se=new f("REQUEST"),Z=(()=>{class s{constructor(e,i,r){this.document=e,this.platformId=i,this.request=r,this.documentIsAccessible=y(this.platformId)}static getCookieRegExp(e){let i=e.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,"\\$1");return new RegExp("(?:^"+i+"|;\\s*"+i+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return e=encodeURIComponent(e),s.getCookieRegExp(e).test(this.documentIsAccessible?this.document.cookie:this.request?.headers.cookie)}get(e){if(this.check(e)){e=encodeURIComponent(e);let r=s.getCookieRegExp(e).exec(this.documentIsAccessible?this.document.cookie:this.request?.headers.cookie);return r[1]?s.safeDecodeURIComponent(r[1]):""}else return""}getAll(){let e={},i=this.documentIsAccessible?this.document?.cookie:this.request?.headers.cookie;return i&&i!==""&&i.split(";").forEach(r=>{let[a,l]=r.split("=");e[s.safeDecodeURIComponent(a.replace(/^ /,""))]=s.safeDecodeURIComponent(l)}),e}set(e,i,r,a,l,d,R,te){if(!this.documentIsAccessible)return;if(typeof r=="number"||r instanceof Date||a||l||d||R){let k={expires:r,path:a,domain:l,secure:d,sameSite:R||"Lax",partitioned:te};this.set(e,i,k);return}let u=encodeURIComponent(e)+"="+encodeURIComponent(i)+";",o=r||{};if(o.expires)if(typeof o.expires=="number"){let k=new Date(new Date().getTime()+o.expires*1e3*60*60*24);u+="expires="+k.toUTCString()+";"}else u+="expires="+o.expires.toUTCString()+";";o.path&&(u+="path="+o.path+";"),o.domain&&(u+="domain="+o.domain+";"),o.secure===!1&&o.sameSite==="None"&&(o.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),o.secure&&(u+="secure;"),o.sameSite||(o.sameSite="Lax"),u+="sameSite="+o.sameSite+";",o.partitioned&&(u+="Partitioned;"),this.document.cookie=u}delete(e,i,r,a,l="Lax"){if(!this.documentIsAccessible)return;let d=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:d,path:i,domain:r,secure:a,sameSite:l})}deleteAll(e,i,r,a="Lax"){if(!this.documentIsAccessible)return;let l=this.getAll();for(let d in l)l.hasOwnProperty(d)&&this.delete(d,e,i,r,a)}static{this.\u0275fac=function(i){return new(i||s)(n(x),n(v),n(se,8))}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var m=function(s){return s.Local="local_strategy",s.Session="session_strategy",s.InMemory="in_memory_strategy",s}(m||{}),U=class{static isStorageAvailable(t){let e=!0;try{typeof t=="object"?(t.setItem("test-storage","foobar"),t.removeItem("test-storage")):e=!1}catch{e=!1}return e}};function j(){}var H="ngx-webstorage",X="|",Y=!1,b=(()=>{class s{static{this.prefix=H}static{this.separator=X}static{this.isCaseSensitive=Y}static normalize(e){return e=s.isCaseSensitive?e:e.toLowerCase(),`${s.prefix}${s.separator}${e}`}static isNormalizedKey(e){return e.indexOf(s.prefix+s.separator)===0}static setPrefix(e){s.prefix=e}static setSeparator(e){s.separator=e}static setCaseSensitive(e){s.isCaseSensitive=e}static consumeConfiguration(e){"prefix"in e&&this.setPrefix(e.prefix),"separator"in e&&this.setSeparator(e.separator),"caseSensitive"in e&&this.setCaseSensitive(e.caseSensitive)}}return s})(),w=class{constructor(t){this.strategy=t}retrieve(t){let e;return this.strategy.get(b.normalize(t)).subscribe(i=>e=typeof i>"u"?null:i),e}store(t,e){return this.strategy.set(b.normalize(t),e).subscribe(j),e}clear(t){t!==void 0?this.strategy.del(b.normalize(t)).subscribe(j):this.strategy.clear().subscribe(j)}getStrategyName(){return this.strategy.name}observe(t){return t=b.normalize(t),this.strategy.keyChanges.pipe(z(e=>e===null||e===t),F(()=>this.strategy.get(t)),M(),$({refCount:!0,bufferSize:1}))}};var P=(()=>{class s{constructor(){this.caches={}}get(e,i){return this.getCacheStore(e)[i]}set(e,i,r){this.getCacheStore(e)[i]=r}del(e,i){delete this.getCacheStore(e)[i]}clear(e){this.caches[e]={}}getCacheStore(e){return e in this.caches?this.caches[e]:this.caches[e]={}}static{this.\u0275fac=function(i){return new(i||s)}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})(),ie=new f("window_local_storage");var W=new f("window_session_storage");function re(){return typeof window<"u"?window.sessionStorage:null}var ne={provide:W,useFactory:re},I=class{constructor(t,e){this.storage=t,this.cache=e,this.keyChanges=new p}get isAvailable(){return this._isAvailable===void 0&&(this._isAvailable=U.isStorageAvailable(this.storage)),this._isAvailable}get(t){let e=this.cache.get(this.name,t);if(e!==void 0)return c(e);try{let i=this.storage.getItem(t);i!==null&&(e=JSON.parse(i),this.cache.set(this.name,t,e))}catch(i){console.warn(i)}return c(e)}set(t,e){let i=JSON.stringify(e);return this.storage.setItem(t,i),this.cache.set(this.name,t,e),this.keyChanges.next(t),c(e)}del(t){return this.storage.removeItem(t),this.cache.del(this.name,t),this.keyChanges.next(t),c(null)}clear(){return this.storage.clear(),this.cache.clear(this.name),this.keyChanges.next(null),c(null)}},L=class s extends I{static{this.strategyName=m.Local}constructor(t,e,i,r){super(t,e),this.storage=t,this.cache=e,this.platformId=i,this.zone=r,this.name=s.strategyName,y(this.platformId)&&this.listenExternalChanges()}listenExternalChanges(){window.addEventListener("storage",t=>this.zone.run(()=>{if(t.storageArea!==this.storage)return;let e=t.key;e!==null?this.cache.del(this.name,t.key):this.cache.clear(this.name),this.keyChanges.next(e)}))}static{this.\u0275fac=function(e){return new(e||s)(n(ie),n(P),n(v),n(E))}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac})}},D=class s extends I{static{this.strategyName=m.Session}constructor(t,e,i,r){super(t,e),this.storage=t,this.cache=e,this.platformId=i,this.zone=r,this.name=s.strategyName,y(this.platformId)&&this.listenExternalChanges()}listenExternalChanges(){window.addEventListener("storage",t=>this.zone.run(()=>{if(t.storageArea!==this.storage)return;let e=t.key;t.key!==null?this.cache.del(this.name,t.key):this.cache.clear(this.name),this.keyChanges.next(e)}))}static{this.\u0275fac=function(e){return new(e||s)(n(W),n(P),n(v),n(E))}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac})}},N=class s{static{this.strategyName=m.InMemory}constructor(t){this.cache=t,this.keyChanges=new p,this.isAvailable=!0,this.name=s.strategyName}get(t){return c(this.cache.get(this.name,t))}set(t,e){return this.cache.set(this.name,t,e),this.keyChanges.next(t),c(e)}del(t){return this.cache.del(this.name,t),this.keyChanges.next(t),c(null)}clear(){return this.cache.clear(this.name),this.keyChanges.next(null),c(null)}static{this.\u0275fac=function(e){return new(e||s)(n(P))}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac})}},C=new f("STORAGE_STRATEGIES"),oe=[{provide:C,useClass:N,multi:!0},{provide:C,useClass:L,multi:!0},{provide:C,useClass:D,multi:!0}],[ae,Ae,ce]=oe;var Q="invalid_strategy",K=(()=>{class s{static{this.index={}}constructor(e){this.strategies=e,this.registration$=new p,e||(e=[]),this.strategies=e.reverse().map((i,r,a)=>i.name).map((i,r,a)=>a.indexOf(i)===r?r:null).filter(i=>i!==null).map(i=>e[i])}static get(e){if(!this.isStrategyRegistered(e))throw Error(Q);let i=this.index[e];return i.isAvailable||(i=this.index[m.InMemory]),i}static set(e,i){this.index[e]=i}static clear(e){e!==void 0?delete this.index[e]:this.index={}}static isStrategyRegistered(e){return e in this.index}static hasRegistredStrategies(){return Object.keys(this.index).length>0}getStrategy(e){return s.get(e)}indexStrategies(){this.strategies.forEach(e=>this.register(e.name,e))}indexStrategy(e,i=!1){if(s.isStrategyRegistered(e)&&!i)return s.get(e);let r=this.strategies.find(a=>a.name===e);if(!r)throw new Error(Q);return this.register(e,r,i),r}register(e,i,r=!1){(!s.isStrategyRegistered(e)||r)&&(s.set(e,i),this.registration$.next(e))}static{this.\u0275fac=function(i){return new(i||s)(n(C,8))}}static{this.\u0275prov=h({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var S=class extends w{};function he(s){let t=s.indexStrategy(m.Session);return new w(t)}var le={provide:S,useFactory:he,deps:[K]};var _=new f("ngx_webstorage_config"),T=function(s){return s[s.Config=1]="Config",s[s.LocalStorage=2]="LocalStorage",s[s.SessionStorage=3]="SessionStorage",s}(T||{});function ue(){let s=g(_),t=g(K);return()=>{b.consumeConfiguration(s),t.indexStrategies()}}function Ee(...s){let{configProvider:t,featureProviders:e}=de(s);return G([t,ae,{provide:q,useFactory:ue,multi:!0},...e])}function de(s){let t,e=[],i=new Set;for(let r of s){if(i.has(r.kind))throw new Error(`Feature ${r.kind} is already provided.`);r.kind===T.Config?t=r.providers[0]:e.push(...r.providers),i.add(r.kind)}return{configProvider:t??{provide:_,useValue:{prefix:H,separator:X,caseSensitive:Y}},featureProviders:e}}function fe(s,t){return{kind:s,providers:t}}function je(){return fe(T.SessionStorage,[ne,le,ce])}var ee=class s{constructor(t){this.document=t}cookies=g(Z);session=g(S);http=g(B);baseUrl=J.apiUrl;authChangeSub=new p;authChanged=this.authChangeSub.asObservable();isExternalAuth=!1;$user=new O(void 0);token="";sendAuthStateChangeNotification=t=>{this.authChangeSub.next(t)};externalLogin(t){return this.http.post(this.baseUrl+"accounts/ExternalLogin",{provider:t.provider,idToken:t.idToken})}login(t){return this.http.post(this.baseUrl+"accounts/login",{email:t.email,password:t.password,clientURI:this.document.location.hostname})}register(t){return this.http.post(this.baseUrl+"accounts/registration",{firstName:t.firstName,lastName:t.lastName,email:t.email,password:t.password,clientURI:this.document.location.hostname})}getUserInfo(){return this.http.get(this.baseUrl+"accounts/user-info/?addAuth=true").pipe(A(t=>(this.$user.next(t),t)))}setStorageUser(t){this.$user.next(t),this.session.store("email",t.email),this.session.store("roles",t.roles),this.session.store("name",t.firstName),this.session.store("last",t.lastName)}retrieveStorageUser(){let t=this.session.retrieve("email"),e=this.session.retrieve("roles"),i=this.session.retrieve("name"),r=this.session.retrieve("last");if(t&&e)return{firstName:i,lastName:r,email:t,roles:e?.split(",")}}updateAddress(t){return this.http.post(this.baseUrl+"accounts/address",t)}user(){return this.$user.asObservable()}logout(){this.cookies.delete("Authorization","/"),this.session.clear(),this.$user.next(void 0),this.sendAuthStateChangeNotification(!1)}static \u0275fac=function(e){return new(e||s)(n(x))};static \u0275prov=h({token:s,factory:s.\u0275fac,providedIn:"root"})};export{Z as a,Ee as b,je as c,ee as d};
