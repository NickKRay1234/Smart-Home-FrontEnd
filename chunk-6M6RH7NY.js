import{a as dt}from"./chunk-3UYZPJNK.js";import{a as G}from"./chunk-3YUZC2M5.js";import{e as ct}from"./chunk-A4V5BONN.js";import{$a as m,Aa as c,Ba as nt,Db as R,Fb as rt,Ib as ot,J as Q,Ka as f,La as L,Ma as u,N as X,Nb as J,Pa as P,Pb as st,Qa as M,Ra as y,Sa as S,T as _,Ta as i,Ua as o,V as w,Va as p,Wa as T,Xa as l,Y as D,Ya as a,Za as s,_a as it,ba as Y,c as K,ca as Z,da as x,db as j,ea as h,eb as b,fa as q,fb as B,ga as tt,gb as v,hb as C,ka as E,n as V,pa as z,ua as et,v as H,wa as F,ya as W}from"./chunk-M4VOTFSZ.js";import"./chunk-4CLCTAJ7.js";function N(n){n||(Y(N),n=_(E));let e=new K(t=>n.onDestroy(t.next.bind(t)));return t=>t.pipe(Q(e))}var I=class n{http=_(ot);errorHandler=_(st);getProducts(){return this.http.get(`${J.apiUrl}Products`).pipe(V(e=>e.data),H(this.errorHandler.handleError("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432!")))}getDiscountProducts(){return this.http.get(`${J.apiUrl}Products?Sort=saleDesc`).pipe(V(e=>e.data.filter(t=>t.productDiscount!==0)),H(this.errorHandler.handleError("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E!")))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=X({token:n,factory:n.\u0275fac})};var O=class n{transform(e){let t=e.toString().split(""),r="";for(let d=t.length;d>0;d-=3)r+=t.splice(-3).join("")+" ";return r.split(" ").reverse().join(" ")}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=D({name:"price",type:n,pure:!0,standalone:!0})};var pt=n=>{let e=[];console.log(n);for(let t=0;t<3;t++){let r=Math.floor(Math.random()*3);e.push(n[r]),console.log(r)}return console.log(e),e};var gt=n=>({"slider__nav-item__active":n});function mt(n,e){if(n&1&&(i(0,"div",5)(1,"h1"),s(2),o(),i(3,"p",6),s(4),o(),i(5,"div",7)(6,"p",8),s(7),v(8,"price"),o(),p(9,"div",9)(10,"div",10),o(),i(11,"p",11),s(12),v(13,"price"),o()(),i(14,"div",12),p(15,"img",13),o()),n&2){let t=a();c(2),it(t.advProducts[t.selectedIdx].productName),c(2),m(" -",t.advProducts[t.selectedIdx].productDiscount,"% "),c(3),m(" ",C(8,5,t.advProducts[t.selectedIdx].productPrice),"\u20B4 "),c(5),m(" ",C(13,7,t.advProducts[t.selectedIdx].priceWithDiscount),"\u20B4 "),c(3),u("src",t.advProducts[t.selectedIdx].images[0].imageUrl,F)}}function xt(n,e){if(n&1){let t=T();i(0,"div",14),l("click",function(){let d=x(t).$index,g=a();return h(g.isActive(d))}),o()}if(n&2){let t=e.$index,r=a();u("ngClass",B(1,gt,r.selectedIdx===t))}}var $=class n{constructor(e){this.platformId=e;this.isBrowser=rt(e),this.selectedIdx=0}selectedIdx;advProducts=[];timerId;isBrowser;products=z([]);ngOnInit(){this.advProducts=pt(this.products()),this.isBrowser&&this.autoPlay()}autoPlay(){this.timerId=setInterval(()=>this.selectedIdx=(this.selectedIdx+1)%this.advProducts.length,3e3)}stopAutoPlay(){this.timerId&&clearInterval(this.timerId)}isActive(e){this.selectedIdx=e}ngOnDestroy(){this.stopAutoPlay()}static \u0275fac=function(t){return new(t||n)(nt(et))};static \u0275cmp=w({type:n,selectors:[["app-product-slider"]],inputs:{products:[1,"products"]},standalone:!0,features:[b],decls:7,vars:1,consts:[[1,"slider__container"],[1,"slider",3,"mouseenter","mouseleave"],[1,"slider__wrapper"],[1,"slider__nav"],[1,"slider__nav-item",3,"ngClass"],[1,"slider__content"],[1,"price__percent-disc"],[1,"price__wrapper"],[1,"price__line-through"],[1,"line__one"],[1,"line__two"],[1,"price__discount"],[1,"slider__image"],["alt","",3,"src"],[1,"slider__nav-item",3,"click","ngClass"]],template:function(t,r){t&1&&(i(0,"div",0)(1,"div",1),l("mouseenter",function(){return r.stopAutoPlay()})("mouseleave",function(){return r.autoPlay()}),i(2,"div",2),f(3,mt,16,9),o(),i(4,"div",3),y(5,xt,1,3,"div",4,M),o()()()),t&2&&(c(3),P(r.advProducts[r.selectedIdx]?3:-1),c(2),S(r.advProducts))},dependencies:[R,O],styles:[".slider__container[_ngcontent-%COMP%]{margin:60px 0;position:relative;overflow:hidden}.slider__wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:start;border-radius:40px;height:350px;background-image:linear-gradient(to left,var(--bg-img1),var(--y1));transition:transform .5s ease-in-out}.slider__nav[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:40px;padding-top:20px}.slider__nav-item[_ngcontent-%COMP%]{width:100px;height:10px;border-radius:20px;background:var(--v3);cursor:pointer}.slider__nav-item__active[_ngcontent-%COMP%]{background:var(--v2)}.slider__image[_ngcontent-%COMP%]{display:flex;justify-content:center;align-self:center;padding-right:10px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:300px;object-fit:cover;border-radius:40px}.slider__content[_ngcontent-%COMP%]{display:flex;padding-left:60px;padding-top:20px;flex-direction:column}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:532px;font-family:Jura;font-weight:700;font-size:36px;line-height:42.59px}.price__percent-disc[_ngcontent-%COMP%]{font-family:Jura;font-weight:700;font-size:96px;line-height:113.57px;color:var(--gr1)}.price__line-through[_ngcontent-%COMP%]{font-family:Jura;font-weight:600;font-size:26px;line-height:30.76px;padding-top:22px;color:var(--g1)}.price__wrapper[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{position:absolute;width:121px;border-bottom:2px solid var(--r1)}.line__one[_ngcontent-%COMP%]{transform:rotate(160deg);top:35px;left:0}.line__two[_ngcontent-%COMP%]{transform:rotate(17deg);top:35px}@media (max-width: 1280px){.slider__container[_ngcontent-%COMP%]{margin-top:30px}.slider__wrapper[_ngcontent-%COMP%]{height:200px;border-radius:23px}.price__wrapper[_ngcontent-%COMP%]{padding-bottom:5px}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{font-size:22px;line-height:26.3px}.price__percent-disc[_ngcontent-%COMP%]{font-size:56px;line-height:66px}.slider__content[_ngcontent-%COMP%]{width:340px;padding-left:35px;padding-top:11.6px}.price__line-through[_ngcontent-%COMP%]{font-size:16px;line-height:19px;padding-top:13px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:71px}.line__one[_ngcontent-%COMP%]{top:20.4px;left:0}.line__two[_ngcontent-%COMP%]{top:20.4px}.slider__image[_ngcontent-%COMP%]{padding-right:0}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:180px;padding-top:10px;padding-right:10px;border-radius:23px}.slider__nav-item[_ngcontent-%COMP%]{width:60px;height:6px}.slider__nav[_ngcontent-%COMP%]{gap:21px;padding-top:12px}}@media (max-width: 744px){.slider__container[_ngcontent-%COMP%]{margin-top:34px;margin-bottom:24px}.slider__wrapper[_ngcontent-%COMP%]{height:130px;position:relative;border-radius:13px}.price__wrapper[_ngcontent-%COMP%]{display:inline;padding-bottom:0}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:212px;font-size:16px;line-height:18px}.price__percent-disc[_ngcontent-%COMP%]{font-size:48px;line-height:57px;position:absolute;bottom:0;right:50%;z-index:5;transform:translate(50%)}.slider__content[_ngcontent-%COMP%]{padding-left:19.5px;padding-top:11.6px}.price__line-through[_ngcontent-%COMP%]{font-size:13px;line-height:15px;padding-top:22px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:51px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{top:28px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:120px;padding-top:5px;padding-right:5px;position:absolute;top:0;right:0;border-radius:13px}.slider__nav-item[_ngcontent-%COMP%]{width:30px;height:3px}.slider__nav[_ngcontent-%COMP%]{gap:5px;padding-top:4px}}@media (max-width: 424px){.slider__container[_ngcontent-%COMP%]{margin-top:24px}.slider__wrapper[_ngcontent-%COMP%]{height:100px;position:relative;border-radius:10px}.price__wrapper[_ngcontent-%COMP%]{display:inline;padding-bottom:0}.slider__content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%], .price__discount[_ngcontent-%COMP%]{max-width:163px;font-size:13px;line-height:15.38px}.price__percent-disc[_ngcontent-%COMP%]{font-size:36px;line-height:42.59px;position:absolute;bottom:0;right:50%;z-index:5;transform:translate(50%)}.slider__content[_ngcontent-%COMP%]{padding-left:15px;padding-top:5px}.price__line-through[_ngcontent-%COMP%]{font-size:10px;line-height:11px;padding-top:16px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{width:39px}.line__one[_ngcontent-%COMP%], .line__two[_ngcontent-%COMP%]{top:21px}.slider__image[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{height:90px;padding-top:5px;padding-right:5px;position:absolute;top:0;right:0;border-radius:10px}}"]})};var A=class n{transform(e){return e.slice(1,57)+"..."}static \u0275fac=function(t){return new(t||n)};static \u0275pipe=D({name:"cutString",type:n,pure:!0,standalone:!0})};var ht=n=>({clicked:n});function ft(n,e){if(n&1&&(i(0,"div",4),s(1),o()),n&2){let t=a().$implicit;c(),m("",t.productDiscount," %")}}function Pt(n,e){if(n&1&&(q(),i(0,"svg",18),p(1,"use",25),o()),n&2){let t=e.$index,r=a(2);L("fill",r.rating>t?r.color:"none")}}function vt(n,e){if(n&1&&(i(0,"div",21)(1,"p",26),s(2),v(3,"price"),o(),p(4,"div",27),o()),n&2){let t=a().$implicit;c(2),m("",C(3,1,t.productPrice),"\u20B4")}}function Ct(n,e){if(n&1){let t=T();i(0,"div",1)(1,"div",2),p(2,"img",3),f(3,ft,2,1,"div",4),i(4,"div",5),l("click",function(){let d=x(t),g=d.$implicit,lt=d.$index,_t=a();return h(_t.addFavorite(g.productId,lt))}),q(),i(5,"svg",6),p(6,"use",7),i(7,"defs")(8,"linearGradient",8),p(9,"stop",9)(10,"stop",10),o(),i(11,"linearGradient",11),p(12,"stop",9)(13,"stop",10),o()()()(),tt(),i(14,"div",12),l("click",function(){let d=x(t).$index,g=a();return h(g.slideLeft(d))}),p(15,"app-svg-icon",13),o(),i(16,"div",14),l("click",function(){let d=x(t).$index,g=a();return h(g.slideRight(d))}),p(17,"app-svg-icon",13),o()(),i(18,"p",15),s(19),v(20,"cutString"),o(),i(21,"div",16)(22,"div",17),y(23,Pt,2,1,":svg:svg",18,M),i(25,"p",19),s(26,"115"),o()(),i(27,"div",20),f(28,vt,5,3,"div",21),i(29,"p",22),s(30),v(31,"price"),o()()(),i(32,"div",23)(33,"button",24),l("click",function(){let d=x(t).$index,g=a();return h(g.addToCart(d))}),s(34," \u0414\u043E \u043A\u043E\u0448\u0438\u043A\u0430 "),o()()()}if(n&2){let t=e.$implicit,r=a();c(2),u("src",t.images[r.currentImage].imageUrl,F),c(),P(t.productDiscount?3:-1),c(2),u("ngClass",B(13,ht,t.favorite)),L("fill",t.favorite?r.iconUrl:"none"),c(10),u("path",r.arrowLeft),c(2),u("path",r.arrowRight),c(2),m(" ",C(20,9,t.productName)," "),c(4),S(r.stars),c(5),P(t.productDiscount?28:-1),c(2),m("",C(31,11,t.priceWithDiscount),"\u20B4")}}var U=class n{productsInput=z.required();cartService=_(G);products=[];currentImage=0;currentIdx=null;heart="assets/images/svg/heart.svg";arrowLeft="assets/images/svg/left-arrow.svg";arrowRight="assets/images/svg/right-arrow.svg";stars=["assets/images/svg/star-fill.svg","assets/images/svg/star-fill.svg","assets/images/svg/star-fill.svg","assets/images/svg/star-fill.svg","assets/images/svg/star.svg"];rating=Math.floor(500/115);color="#FADC93";iconUrl="url(#gradient)";ngOnChanges(e){this.productsInput()?.length&&(this.products=this.productsInput())}slideLeft(e){this.currentImage-1>=1?this.currentImage-=1:this.products?.length&&(this.currentImage=this.products[e].images.length-1)}slideRight(e){this.products?.length&&this.currentImage+1<this.products[e].images.length?this.currentImage+=1:this.currentImage=0}addFavorite(e,t){e===this.products[t].productId&&!this.products[t].favorite?this.products[t].favorite=!0:this.products[t].favorite=!1}addToCart(e){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["app-product-card"]],inputs:{productsInput:[1,"productsInput"]},standalone:!0,features:[j([G]),Z,b],decls:3,vars:0,consts:[[1,"product__card"],[1,"product__item"],[1,"product__image"],["alt","product image",1,"product__item-image",3,"src"],[1,"product__discount"],[1,"product__like",3,"click"],[1,"icon__heart",3,"ngClass"],[0,"xlink","href","assets/images/svg/sprite.svg#heart"],["id","gradient","x1","20.9964","y1","11.9943","x2","2.98706","y2","11.9943","gradientUnits","userSpaceOnUse"],["stop-color","#FF9E9E"],["offset","1","stop-color","#FADC93"],["id","gradient_hover","x1","20.9964","y1","11.9943","x2","2.98706","y2","11.9943","gradientUnits","userSpaceOnUse"],[1,"arrow__left",3,"click"],[3,"path"],[1,"arrow__right",3,"click"],[1,"product__name"],[1,"product__price"],[1,"product__likes"],["width","24","height","24","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg"],[1,"rating"],[1,"product__price-item"],[1,"price__wrapper"],[1,"discount"],[1,"product__button"],[1,"btn","btn__primary",3,"click"],[0,"xlink","href","assets/images/svg/sprite.svg#star"],[1,"price"],[1,"line__one"]],template:function(t,r){t&1&&(i(0,"div",0),y(1,Ct,35,15,"div",1,M),o()),t&2&&(c(),S(r.products))},dependencies:[A,dt,R,O],styles:[".product__card[_ngcontent-%COMP%]{display:flex;justify-content:space-around;gap:40px;padding-bottom:40px}.product__card[_ngcontent-%COMP%]:first-child{padding-left:20px}.product__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:var(--white);border-radius:24px;max-width:260px;min-width:180px;max-height:360px;padding:20px 10px 10px;align-items:center;position:relative}.product__name[_ngcontent-%COMP%]{height:59px;font-family:Jura;font-weight:600;font-size:16px;line-height:19px}.product__item-image[_ngcontent-%COMP%]{width:180px;height:140px;border-radius:14px;object-fit:contain}.product__price[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 10px;margin:16.5px 0;width:100%;height:39px;font-family:Jura;font-size:16px;font-weight:600;line-height:19px;color:var(--black)}.product__price-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:end;align-items:end}.product__likes[_ngcontent-%COMP%]{display:flex;align-self:self-end;gap:2px}.icon__heart[_ngcontent-%COMP%]{width:24px;height:24px;stroke:var(--g3)}.icon__heart.clicked[_ngcontent-%COMP%]{stroke:none}.icon__heart[_ngcontent-%COMP%]:hover{stroke:#fadc93}.icon__star[_ngcontent-%COMP%], svg[_ngcontent-%COMP%]{width:10px;height:10px;align-self:center}.rating[_ngcontent-%COMP%]{font-family:Tenor Sans;font-size:14px;font-weight:400;line-height:16.38px;text-align:left;color:var(--g1)}.product__button[_ngcontent-%COMP%]{padding-bottom:10px;height:43px}.price[_ngcontent-%COMP%]{font-family:Jura;font-size:13px;font-weight:600;line-height:15.38px;text-align:left;color:var(--g2)}.product__image[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.product__discount[_ngcontent-%COMP%]{position:absolute;right:0;bottom:10px;height:24px;width:44.5px;text-align:center;border-top-left-radius:14px;border-top-right-radius:14px;border-bottom-right-radius:14px;background:#94d397}.product__like[_ngcontent-%COMP%]{width:24px;height:24px;position:absolute;top:8px;right:8px;cursor:pointer}.arrow__left[_ngcontent-%COMP%]{left:4px}.arrow__right[_ngcontent-%COMP%]{right:4px}.arrow__left[_ngcontent-%COMP%], .arrow__right[_ngcontent-%COMP%]{position:absolute;cursor:pointer;width:7px;height:14px;top:63px}.price__wrapper[_ngcontent-%COMP%]{position:relative;padding-bottom:10px}.line__one[_ngcontent-%COMP%]{position:absolute;width:100%;border-bottom:2px solid #abb8c4;transform:rotate(170deg);top:7px;left:0}.discount[_ngcontent-%COMP%]{font-family:Jura;font-size:16px;font-weight:600;line-height:19px;text-align:right}@media (max-width: 1280px){.product__card[_ngcontent-%COMP%]:first-child{padding-left:12px}.product__button[_ngcontent-%COMP%]{height:40px}}@media (max-width: 744px){.product__item[_ngcontent-%COMP%]{max-width:180px;min-width:142px}.product__item-image[_ngcontent-%COMP%]{width:160px}.product__discount[_ngcontent-%COMP%]{height:20px;width:37px;font-size:12px;line-height:14px;right:8px}.product__name[_ngcontent-%COMP%]{contain:paint;max-height:31px;font-size:13px;line-height:15px}.product__price[_ngcontent-%COMP%]{width:160px;padding:8px 10px}.discount[_ngcontent-%COMP%]{font-size:13px;line-height:15.38px}.btn[_ngcontent-%COMP%]{width:110px;height:32px;padding:6px 14px}.btn__primary[_ngcontent-%COMP%]{font-size:14px;line-height:16.38px}.product__button[_ngcontent-%COMP%]{padding-bottom:10px;height:32px}}@media (max-width: 424px){.product__item[_ngcontent-%COMP%]{max-width:260px;min-width:142px;padding:10px}.product__item-image[_ngcontent-%COMP%]{width:140px}.product__price[_ngcontent-%COMP%]{max-width:260px;min-width:142px;padding:10px}.product__price-item[_ngcontent-%COMP%]{padding:0 10px}.line__one[_ngcontent-%COMP%]{width:36px}.discount[_ngcontent-%COMP%]{font-size:13x;line-height:15.38px}.price[_ngcontent-%COMP%]{font-size:9.53px;line-height:15.38px}.btn[_ngcontent-%COMP%]{width:110px;height:32px;padding:6px 14px}.btn__primary[_ngcontent-%COMP%]{font-size:14px;line-height:16.38px}.product__button[_ngcontent-%COMP%]{padding-bottom:10px}}"]})};function wt(n,e){if(n&1&&p(0,"app-product-card",7),n&2){let t=a();u("productsInput",t.cutDiscountProducts)}}function bt(n,e){n&1&&(i(0,"h1"),s(1,"Loading ..."),o())}var ut=class n{productService=_(I);destroyRef=_(E);router=_(ct);discountProducts=[];newProducts=[];bestProducts=[];cutDiscountProducts=[];cutNewProducts=[];cutBestProducts=[];onResize(){window?.innerWidth&&(this.cutDiscountProducts=this.resize(this.discountProducts,window.innerWidth),this.cutNewProducts=this.resize(this.newProducts,window.innerWidth),this.cutBestProducts=this.resize(this.bestProducts,window.innerWidth))}onLoad(){this.cutDiscountProducts=this.resize(this.discountProducts,window.innerWidth),this.cutNewProducts=this.resize(this.newProducts,window.innerWidth),this.cutBestProducts=this.resize(this.bestProducts,window.innerWidth)}ngOnInit(){this.productService.getProducts().pipe(N(this.destroyRef)).subscribe(e=>{this.newProducts=e,this.bestProducts=e}),this.productService.getDiscountProducts().pipe(N(this.destroyRef)).subscribe(e=>{this.discountProducts=e})}resize(e,t){return t>1280&&e?.length?e.slice(0,5):t>744&&e?.length?e.slice(0,3):e.slice(0,2)}moreDiscount(){this.router.navigate(["/discount"])}moreNew(){this.router.navigate(["/new"])}moreBest(){this.router.navigate(["/discount"])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["app-products"]],hostBindings:function(t,r){t&1&&l("resize",function(){return r.onResize()},!1,W)("load",function(){return r.onLoad()},!1,W)},standalone:!0,features:[j([I]),b],decls:34,vars:4,consts:[[1,"products"],[1,"app-product-slider",3,"products"],[1,"products__items"],[1,"products__nav"],[1,"products__nav__tittle"],[1,"btn__nav__more",3,"click"],[1,"products__cards"],[1,"app-product-card",3,"productsInput"]],template:function(t,r){t&1&&(i(0,"section",0),p(1,"app-product-slider",1),i(2,"section",2)(3,"div",3)(4,"h1",4),s(5,"\u0421\u0443\u043F\u0435\u0440 \u0437\u043D\u0438\u0436\u043A\u0438"),o(),i(6,"button",5),l("click",function(){return r.moreDiscount()}),i(7,"p"),s(8,"\u0411\u0456\u043B\u044C\u0448\u0435"),o(),i(9,"p"),s(10,">"),o()()(),i(11,"div",6),f(12,wt,1,1,"app-product-card",7)(13,bt,2,0,"h1"),o()(),i(14,"section",2)(15,"div",3)(16,"h1",4),s(17,"\u041D\u043E\u0432\u0438\u043D\u043A\u0438 \u0440\u043E\u043A\u0443"),o(),i(18,"button",5),l("click",function(){return r.moreNew()}),i(19,"p"),s(20,"\u0411\u0456\u043B\u044C\u0448\u0435"),o(),i(21,"p"),s(22,">"),o()()(),p(23,"app-product-card",7),o(),i(24,"section",2)(25,"div",3)(26,"h1",4),s(27,"\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0435 \u0434\u043B\u044F \u0432\u0430\u0441"),o(),i(28,"button",5),l("click",function(){return r.moreBest()}),i(29,"p"),s(30,"\u0411\u0456\u043B\u044C\u0448\u0435"),o(),i(31,"p"),s(32,">"),o()()(),p(33,"app-product-card",7),o()()),t&2&&(c(),u("products",r.discountProducts),c(11),P(r.discountProducts.length?12:13),c(11),u("productsInput",r.cutNewProducts),c(10),u("productsInput",r.cutBestProducts))},dependencies:[$,U],styles:[".app-product-card[_ngcontent-%COMP%], .app-product-slider[_ngcontent-%COMP%]{width:100%}.products[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.products__nav[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;padding-bottom:20px;align-items:center;width:100%}.products__items[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.products__nav__tittle[_ngcontent-%COMP%]{font-size:36px;font-weight:700;font-family:Jura;line-height:42.6px;color:var(--black)}.btn__nav__more[_ngcontent-%COMP%]{padding:10px 20px;border:none;border-radius:14px;background:var(--white);max-height:44px;max-width:130px;display:flex;justify-content:center;align-items:center;gap:10px;font-family:Jura;font-weight:600;font-size:16px;color:var(--black);line-height:19px}.disabled[_ngcontent-%COMP%]{background-color:var(--g4);color:var(--g1)}@media (max-width: 1280px){.products__cards[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}}@media (max-width: 744px){.products__nav[_ngcontent-%COMP%]{padding-bottom:15px}.products__nav__tittle[_ngcontent-%COMP%]{font-size:16px}.btn__nav__more[_ngcontent-%COMP%]{width:96px;height:19px;font-size:13px;padding:2px 14px}}"]})};export{ut as ProductsComponent};
