import{Bb as et,Db as nt,Gb as it,Ia as D,J,Ka as u,La as X,Lb as ot,N as U,Na as E,Oa as B,Pa as z,Qa as j,Ra as o,Sa as r,T as f,Ta as c,Ua as T,V as h,Va as l,Wa as _,Xa as p,Y as y,Ya as Y,Za as g,ba as W,bb as Z,c as V,ca as K,cb as x,da as v,db as tt,ea as C,eb as P,fb as w,ia as S,n as q,na as I,sa as G,ua as k,wa as $,ya as d,za as Q}from"./chunk-YBM25Y3C.js";import"./chunk-4CLCTAJ7.js";function H(i){i||(W(H),i=f(S));let e=new V(t=>i.onDestroy(t.next.bind(t)));return t=>t.pipe(J(e))}var O=class i{http=f(it);getProducts(){return this.http.get(`${ot.apiUrl}Products?saleDesc`).pipe(q(e=>e.data))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=U({token:i,factory:i.\u0275fac})};var rt=[{tittle:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u0431\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u043E\u0457 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 Ajax StarterKit",discount:50,price:1e5,discountPrice:5e4,image:"assets/images/png/advSlImg.png"},{tittle:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u0431\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u043E\u0457 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 Ajax StarterKit",discount:30,price:1e3,discountPrice:700,image:"assets/images/png/advSlImg.png"},{tittle:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u0431\u0435\u0437\u0434\u0440\u043E\u0442\u043E\u0432\u043E\u0457 \u0441\u0438\u0433\u043D\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u0457 Ajax StarterKit",discount:20,price:1e4,discountPrice:8e3,image:"assets/images/png/advSlImg.png"}];var M=class i{transform(e){let t=e.toString().split(""),n="";for(let s=t.length;s>0;s-=3)n+=t.splice(-3).join("")+" ";return n.split(" ").reverse().join(" ")}static \u0275fac=function(t){return new(t||i)};static \u0275pipe=y({name:"price",type:i,pure:!0,standalone:!0})};var pt=i=>({"slider__nav-item__active":i});function dt(i,e){if(i&1){let t=T();o(0,"div",14),l("click",function(){let s=v(t).$index,a=_();return C(a.isActive(s))}),r()}if(i&2){let t=e.$index,n=_();u("ngClass",tt(1,pt,n.selectedIdx===t))}}var N=class i{constructor(e){this.platformId=e;this.isBrowser=nt(e),this.advProducts=rt,this.selectedIdx=0}selectedIdx;advProducts=[];timerId;isBrowser;ngOnInit(){this.isBrowser&&this.autoPlay()}autoPlay(){this.timerId=setInterval(()=>this.selectedIdx=(this.selectedIdx+1)%this.advProducts.length,3e3)}stopAutoPlay(){this.timerId&&clearInterval(this.timerId)}isActive(e){this.selectedIdx=e}ngOnDestroy(){this.stopAutoPlay()}static \u0275fac=function(t){return new(t||i)(Q(G))};static \u0275cmp=h({type:i,selectors:[["app-product-slider"]],standalone:!0,features:[x],decls:22,vars:9,consts:[[1,"slider__container"],[1,"slider"],[1,"slider__wrapper"],[1,"slider__content"],[1,"price__percent-disc"],[1,"price__wrapper"],[1,"price__line-through"],[1,"line__one"],[1,"line__two"],[1,"price__discount"],[1,"slider__image"],["alt","",3,"src"],[1,"slider__nav"],[1,"slider__nav-item",3,"ngClass"],[1,"slider__nav-item",3,"click","ngClass"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),p(5),r(),o(6,"p",4),p(7),r(),o(8,"div",5)(9,"p",6),p(10),P(11,"price"),r(),c(12,"div",7)(13,"div",8),r(),o(14,"p",9),p(15),P(16,"price"),r()(),o(17,"div",10),c(18,"img",11),r()(),o(19,"div",12),z(20,dt,1,3,"div",13,B),r()()()),t&2&&(d(5),Y(n.advProducts[n.selectedIdx].tittle),d(2),g(" -",n.advProducts[n.selectedIdx].discount,"% "),d(3),g(" ",w(11,5,n.advProducts[n.selectedIdx].price),"\u20B4 "),d(5),g(" ",w(16,7,n.advProducts[n.selectedIdx].discountPrice),"\u20B4 "),d(3),u("src",n.advProducts[n.selectedIdx].image,k),d(2),j(n.advProducts))},dependencies:[et,M],styles:[".slider__container[_ngcontent-%COMP%]{margin:60px 40px;position:relative;overflow:hidden}.slider__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:start;border-radius:40px;width:1200px;height:350px;background-image:linear-gradient(to left,var(--bg-img1),var(--y1));transition:transform .5s ease-in-out}.slider__nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:40px;padding-top:20px}.slider__nav-item[_ngcontent-%COMP%]{width:100px;height:10px;border-radius:20px;background:var(--v3);cursor:pointer}.slider__nav-item__active[_ngcontent-%COMP%]{background:var(--v2)}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:350px;object-fit:cover}.slider__content[_ngcontent-%COMP%]{display:flex;padding-left:60px;padding-top:20px;flex-direction:column}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:532px;font-family:Jura;font-weight:700;font-size:36px;line-height:42.59px}.price__percent-disc[_ngcontent-%COMP%]{font-family:Jura;font-weight:700;font-size:96px;line-height:113.57px;color:var(--gr1)}.price__line-through[_ngcontent-%COMP%]{font-family:Jura;font-weight:600;font-size:26px;line-height:30.76px;padding-top:22px;color:var(--g1)}.price__wrapper[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{position:absolute;width:121px;border-bottom:2px solid var(--r1)}.line__one[_ngcontent-%COMP%]{transform:rotate(160deg);top:35px;left:0}.line__two[_ngcontent-%COMP%]{transform:rotate(17deg);top:35px}@media (max-width: 1280px){.slider__wrapper[_ngcontent-%COMP%]{width:700px;height:200px;border-radius:23px}.price__wrapper[_ngcontent-%COMP%]{padding-bottom:5px}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{font-size:22px;line-height:26.3px}.price__percent-disc[_ngcontent-%COMP%]{font-size:56px;line-height:66px}.slider__content[_ngcontent-%COMP%]{width:340px;padding-left:35px;padding-top:11.6px}.price__line-through[_ngcontent-%COMP%]{font-size:16px;line-height:19px;padding-top:13px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:71px}.line__one[_ngcontent-%COMP%]{top:20.4px;left:0}.line__two[_ngcontent-%COMP%]{top:20.4px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:180px;padding-top:10px;padding-right:10px}.slider__nav-item[_ngcontent-%COMP%]{width:60px;height:6px}.slider__nav[_ngcontent-%COMP%]{gap:21px;padding-top:12px}}@media (max-width: 744px){.slider__wrapper[_ngcontent-%COMP%]{width:390px;height:130px;position:relative;border-radius:13px}.price__wrapper[_ngcontent-%COMP%]{display:inline;padding-bottom:0}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:212px;font-size:16px;line-height:18px}.price__percent-disc[_ngcontent-%COMP%]{font-size:48px;line-height:57px;position:absolute;bottom:0;right:50%;z-index:5;transform:translate(50%)}.slider__content[_ngcontent-%COMP%]{padding-left:19.5px;padding-top:11.6px}.price__line-through[_ngcontent-%COMP%]{font-size:13px;line-height:15px;padding-top:22px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:51px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{top:28px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:120px;padding-top:5px;padding-right:5px;position:absolute;top:0;right:0}.slider__nav-item[_ngcontent-%COMP%]{width:30px;height:3px}.slider__nav[_ngcontent-%COMP%]{gap:5px;padding-top:4px}}@media (max-width: 424px){.slider__wrapper[_ngcontent-%COMP%]{width:300px;height:100px;position:relative;border-radius:10px}.price__wrapper[_ngcontent-%COMP%]{display:inline;padding-bottom:0}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:163px;font-size:13px;line-height:15.38px}.price__percent-disc[_ngcontent-%COMP%]{font-size:36px;line-height:42.59px;position:absolute;bottom:0;right:50%;z-index:5;transform:translate(50%)}.slider__content[_ngcontent-%COMP%]{padding-left:15px;padding-top:5px}.price__line-through[_ngcontent-%COMP%]{font-size:10px;line-height:11px;padding-top:16px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:39px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{top:21px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:90px;padding-top:5px;padding-right:5px;position:absolute;top:0;right:0}}"]})};var F=class i{transform(e){return e.slice(1,57)+"..."}static \u0275fac=function(t){return new(t||i)};static \u0275pipe=y({name:"cutString",type:i,pure:!0,standalone:!0})};var R=class i{_path;onMouseEnter(e){e.style.backgroundImage="linear-gradient(to left, #ff9e9e, #fadc93)"}onMouseLeave(e){e.style.backgroundImage=""}color;set path(e){this._path=`url("${e}")`}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-svg-icon"]],hostVars:2,hostBindings:function(t,n){t&1&&l("mouseenter",function(a){return n.onMouseEnter(a.target)})("mouseleave",function(a){return n.onMouseLeave(a.target)}),t&2&&X("-webkit-mask-image",n._path)},inputs:{color:"color",path:"path"},standalone:!0,features:[x],decls:0,vars:0,template:function(t,n){},styles:["[_nghost-%COMP%]{display:block;height:100%;width:100%;background:#d0d4d8;-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat}"]})};function ct(i,e){i&1&&(o(0,"div",18)(1,"button",19),p(2,"\u0414\u043E \u043A\u043E\u0448\u0438\u043A\u0430"),r()())}function at(i,e){if(i&1){let t=T();o(0,"div",2),l("mouseenter",function(){let s=v(t).$index,a=_();return C(a.onMouseEnter(s))})("mouseleave",function(){let s=v(t).$index,a=_();return C(a.onMouseLeave(s))}),o(1,"div",3),c(2,"img",4),o(3,"div",5),p(4),r(),o(5,"div",6),c(6,"app-svg-icon",7),r(),o(7,"div",8),l("click",function(){let s=v(t).$index,a=_();return C(a.slideLeft(s))}),c(8,"app-svg-icon",7),r(),o(9,"div",9),l("click",function(){let s=v(t).$index,a=_();return C(a.slideRight(s))}),c(10,"app-svg-icon",7),r()(),o(11,"p",10),p(12),P(13,"cutString"),r(),o(14,"div",11)(15,"div",12),p(16,"stars"),r(),o(17,"div",13)(18,"div",14)(19,"p",15),p(20),P(21,"price"),r(),c(22,"div",16),r(),o(23,"p",17),p(24),P(25,"price"),r()()(),D(26,ct,3,0,"div",18),r()}if(i&2){let t=e.$implicit,n=e.$index,s=_();d(2),u("src",t.images[s.currentImage].imageUrl,k),d(2),g("",t.productDiscount," %"),d(2),u("path",s.heart),d(2),u("path",s.arrowLeft),d(2),u("path",s.arrowRight),d(2),g(" ",w(13,9,t.productDescription)," "),d(8),g("",w(21,11,t.productPrice),"\u20B4"),d(4),g("",w(25,13,t.priceWithDiscount),"\u20B4"),d(2),E(s.currentIdx!==null&&n===s.currentIdx?26:-1)}}var A=class i{productsInput=I.required();start=I.required();end=I.required();products=[];currentImage=0;currentIdx=null;heart="/assets/images/svg/heart.svg";arrowLeft="/assets/images/svg/left-arrow.svg";arrowRight="/assets/images/svg/right-arrow.svg";onMouseEnter(e){this.currentIdx=e}onMouseLeave(e){this.currentIdx=null}ngOnChanges(e){this.productsInput()?.length&&(this.products=this.productsInput()?.slice(this.start(),this.end()))}slideLeft(e){this.currentImage-1>=1?this.currentImage-=1:this.products?.length&&(this.currentImage=this.products[e].images.length-1)}slideRight(e){this.products?.length&&this.currentImage+1<this.products[e].images.length?this.currentImage+=1:this.currentImage=0}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-product-card"]],inputs:{productsInput:[1,"productsInput"],start:[1,"start"],end:[1,"end"]},standalone:!0,features:[K,x],decls:3,vars:0,consts:[[1,"product__card"],[1,"product__item"],[1,"product__item",3,"mouseenter","mouseleave"],[1,"product__image"],["alt","product image",1,"product__item-image",3,"src"],[1,"product__discount"],[1,"product__like"],[3,"path"],[1,"arrow__left",3,"click"],[1,"arrow__right",3,"click"],[1,"product__description"],[1,"product__price"],[1,"product__likes"],[1,"product__price-item"],[1,"price__wrapper"],[1,"price"],[1,"line__one"],[1,"discount"],[1,"product__button"],[1,"btn","btn__primary"]],template:function(t,n){t&1&&(o(0,"div",0),z(1,at,27,15,"div",1,B),r()),t&2&&(d(),j(n.products))},dependencies:[F,R,M],styles:[".product__card[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:40px;padding-bottom:40px}.product__card[_ngcontent-%COMP%]:first-child{padding-left:20px}.product__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--white);border-radius:24px;max-width:260px;min-width:180px;max-height:360px;padding:20px 10px 10px;align-items:center;position:relative}.product__description[_ngcontent-%COMP%]{max-height:59px;font-family:Jura;font-weight:600;font-size:16px;line-height:19px}.product__item-image[_ngcontent-%COMP%]{width:180px;height:140px;border-radius:14px;object-fit:contain}.product__price[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:16.5px 10px;width:180px;font-family:Jura;font-size:16px;font-weight:600;line-height:19px;color:var(--black)}.product__likes[_ngcontent-%COMP%]{align-self:self-end}.product__button[_ngcontent-%COMP%]{position:absolute;background:var(--white);border-bottom-right-radius:40px;border-bottom-left-radius:40px;min-width:200px;padding-bottom:20px;padding-top:20px;align-items:center;display:flex;justify-content:center;transform:translate(50%,50%);bottom:-5%;right:50%;width:100%}.price[_ngcontent-%COMP%]{font-family:Jura;font-size:13px;font-weight:600;line-height:15.38px;text-align:left;color:var(--g2)}.product__image[_ngcontent-%COMP%]{position:relative}.product__discount[_ngcontent-%COMP%]{position:absolute;right:0;bottom:10px;height:24px;width:44.5px;text-align:center;border-top-left-radius:14px;border-top-right-radius:14px;border-bottom-right-radius:14px;background:#94d397}.product__like[_ngcontent-%COMP%]{width:24px;height:24px;position:absolute;top:8px;right:8px;cursor:pointer}.arrow__left[_ngcontent-%COMP%]{left:4px}.arrow__right[_ngcontent-%COMP%]{right:4px}.arrow__left[_ngcontent-%COMP%], .arrow__right[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:7px;height:14px;top:63px}.price__wrapper[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.line__one[_ngcontent-%COMP%]{position:absolute;width:100%;border-bottom:2px solid #abb8c4;transform:rotate(170deg);top:7px;left:0}.discount[_ngcontent-%COMP%]{font-family:Jura;font-size:16px;font-weight:600;line-height:19px;text-align:right}@media (max-width: 1280px){.product__card[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:700px}.product__card[_ngcontent-%COMP%]:first-child{padding-left:12px}}@media (max-width: 744px){.product__card[_ngcontent-%COMP%]{width:390px}.product__item[_ngcontent-%COMP%]{max-width:180px;min-width:142px}.product__button[_ngcontent-%COMP%]{min-width:142px}.product__item-image[_ngcontent-%COMP%]{width:160px}.product__discount[_ngcontent-%COMP%]{height:20px;width:37px;font-size:12px;line-height:14px;right:8px}.product__description[_ngcontent-%COMP%]{contain:paint;max-height:31px;font-size:13px;line-height:15px}.product__price[_ngcontent-%COMP%]{width:160px;padding:8px 10px}.discount[_ngcontent-%COMP%]{font-size:13px;line-height:15.38px}.btn[_ngcontent-%COMP%]{width:110px;height:32px;padding:6px 14px}.btn__primary[_ngcontent-%COMP%]{font-size:14px;line-height:16.38px}.product__button[_ngcontent-%COMP%]{padding-bottom:10px}}@media (max-width: 424px){.product__card[_ngcontent-%COMP%]{width:300px}.product__item[_ngcontent-%COMP%]{max-width:260px;min-width:142px;padding:10px}.product__button[_ngcontent-%COMP%]{min-width:142px}.product__item-image[_ngcontent-%COMP%]{width:140px}.product__price[_ngcontent-%COMP%]{max-width:260px;min-width:142px;padding:10px}.product__price-item[_ngcontent-%COMP%]{padding:0 10px}.line__one[_ngcontent-%COMP%]{width:36px}.discount[_ngcontent-%COMP%]{font-size:13x;line-height:15.38px}.price[_ngcontent-%COMP%]{font-size:9.53px;line-height:15.38px}.btn[_ngcontent-%COMP%]{width:110px;height:32px;padding:6px 14px}.btn__primary[_ngcontent-%COMP%]{font-size:14px;line-height:16.38px}.product__button[_ngcontent-%COMP%]{padding-bottom:10px}}"]})};var m=(i,e=1)=>{let t=0,n=e;return()=>n>=i-1?i-n>0?(t=n,n=i,{start:t,end:n}):(t=0,n=e,{start:t,end:n}):n<=0?(n=e,t=0,{start:t,end:n}):(t=n,n+=e,{start:t,end:n})};function lt(i,e){if(i&1&&c(0,"app-product-card",6),i&2){let t=_();u("productsInput",t.products)("start",t.startDisc)("end",t.endDisc)}}function ut(i,e){i&1&&(o(0,"h1"),p(1,"Loading ..."),r())}var st=class i{productService=f(O);destroyRef=f(S);slideDiscount;slideNew;slideBest;step=5;products;startDisc=0;endDisc=this.step;startNew=0;endNew=this.step;startBest=0;endBest=this.step;onResize(){window?.innerWidth&&this.products?.length&&(this.resize(this.products,window.innerWidth),this.moreDiscount(),this.moreNew(),this.moreBest())}onLoad(){this.products?.length&&(this.resize(this.products,window.innerWidth),this.moreDiscount(),this.moreNew(),this.moreBest())}ngOnInit(){this.productService.getProducts().pipe(H(this.destroyRef)).subscribe(e=>this.products=e)}resize(e,t){t>1280&&e?.length?(this.step=5,this.slideDiscount=m(e.length,this.step),this.slideBest=m(e.length,this.step),this.slideNew=m(e.length,this.step)):t>744&&e?.length?(this.step=3,this.slideDiscount=m(e.length,this.step),this.slideBest=m(e.length,this.step),this.slideNew=m(e.length,this.step)):(this.step=2,this.slideDiscount=m(e.length,this.step),this.slideBest=m(e.length,this.step),this.slideNew=m(e.length,this.step))}moreDiscount(){let{start:e,end:t}=this.slideDiscount();this.startDisc=e,this.endDisc=t}moreNew(){let{start:e,end:t}=this.slideNew();this.startNew=e,this.endNew=t}moreBest(){let{start:e,end:t}=this.slideBest();this.startBest=e,this.endBest=t}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=h({type:i,selectors:[["app-products"]],hostBindings:function(t,n){t&1&&l("resize",function(){return n.onResize()},!1,$)("load",function(){return n.onLoad()},!1,$)},standalone:!0,features:[Z([O]),x],decls:34,vars:7,consts:[[1,"products"],[1,"products__items"],[1,"products__nav"],[1,"products__nav__tittle"],[1,"btn__nav__more",3,"click"],[1,"products__cards"],[3,"productsInput","start","end"]],template:function(t,n){t&1&&(o(0,"section",0),c(1,"app-product-slider"),o(2,"section",1)(3,"div",2)(4,"h1",3),p(5,"\u0421\u0443\u043F\u0435\u0440 \u0437\u043D\u0438\u0436\u043A\u0438"),r(),o(6,"button",4),l("click",function(){return n.moreDiscount()}),o(7,"p"),p(8,"\u0411\u0456\u043B\u044C\u0448\u0435"),r(),o(9,"p"),p(10,">"),r()()(),o(11,"div",5),D(12,lt,1,3,"app-product-card",6)(13,ut,2,0,"h1"),r()(),o(14,"section",1)(15,"div",2)(16,"h1",3),p(17,"\u041D\u043E\u0432\u0438\u043D\u043A\u0438 \u0440\u043E\u043A\u0443"),r(),o(18,"button",4),l("click",function(){return n.moreNew()}),o(19,"p"),p(20,"\u0411\u0456\u043B\u044C\u0448\u0435"),r(),o(21,"p"),p(22,">"),r()()(),c(23,"app-product-card",6),r(),o(24,"section",1)(25,"div",2)(26,"h1",3),p(27,"\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u0434\u043B\u044F \u0432\u0430\u0441"),r(),o(28,"button",4),l("click",function(){return n.moreBest()}),o(29,"p"),p(30,"\u0411\u0456\u043B\u044C\u0448\u0435"),r(),o(31,"p"),p(32,">"),r()()(),c(33,"app-product-card",6),r()()),t&2&&(d(12),E(n.products!=null&&n.products.length?12:13),d(11),u("productsInput",n.products)("start",n.startNew)("end",n.endNew),d(10),u("productsInput",n.products)("start",n.startBest)("end",n.endBest))},dependencies:[N,A],styles:[".products[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.products__nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;padding-bottom:20px;align-items:center}.products__items[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:1200px;padding:0 40px}.products__nav__tittle[_ngcontent-%COMP%]{font-size:36px;font-weight:700;font-family:Jura;line-height:42.6px;color:var(--black)}.btn__nav__more[_ngcontent-%COMP%]{padding:10px 20px;border:none;border-radius:14px;background:var(--white);max-height:44px;max-width:130px;display:flex;justify-content:center;align-items:center;gap:10px;font-family:Jura;font-weight:600;font-size:16px;color:var(--black);line-height:19px}@media (max-width: 1280px){.products__items[_ngcontent-%COMP%]{padding:0 20px;width:704px;align-items:center}.products__cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.products__nav[_ngcontent-%COMP%]{width:704px}}@media (max-width: 744px){.products__items[_ngcontent-%COMP%]{width:390px}.products__nav[_ngcontent-%COMP%]{width:390px;padding-bottom:15px}.products__nav__tittle[_ngcontent-%COMP%]{font-size:16px}.btn__nav__more[_ngcontent-%COMP%]{width:96px;height:19px;font-size:13px;padding:2px 14px}}@media (max-width: 424px){.products__items[_ngcontent-%COMP%], .products__nav[_ngcontent-%COMP%]{width:300px}}"]})};export{st as ProductsComponent};
