import{a as F,b as O,c as V,d as L,f as w}from"./chunk-GJZ4NRJQ.js";import{a as x}from"./chunk-FG3W4XH6.js";import{j as b}from"./chunk-MTZZGECX.js";import{$a as f,Da as p,Qa as S,Sa as s,T as _,V as C,Va as y,Wa as R,Xa as q,Ya as z,Za as i,_a as e,ab as D,bb as T,cb as v,da as d,db as l,ea as g,eb as m,ib as u,jb as U,ka as A,kb as E,ob as J,pa as j,pb as h,qa as B,sb as M,tb as P,za as N}from"./chunk-DXEYFIYH.js";import"./chunk-4CLCTAJ7.js";function H(r,n){if(r&1){let t=v();i(0,"div",1),f(1,"img",2),e(),i(2,"div",3)(3,"div",4)(4,"h6"),u(5," \u0420\u043E\u0437\u0443\u043C\u043D\u0438\u0439 \u0434\u0432\u0435\u0440\u043D\u0438\u0439 \u0437\u0430\u043C\u043E\u043A Aqara Smart Door Lock N 100 ZNMS16LM(EU version) "),e(),i(6,"app-svg-icon",5),l("click",function(){let a;d(t);let c=m();return g(c.deleteItem((a=c.cart())==null?null:a.productId))}),e()(),i(7,"div",6)(8,"div",7)(9,"app-svg-icon",5),l("click",function(){let a;d(t);let c=m();return g(c.decrease((a=c.cart())==null?null:a.productId))}),e(),i(10,"h4"),u(11),e(),i(12,"app-svg-icon",5),l("click",function(){let a;d(t);let c=m();return g(c.increase((a=c.cart())==null?null:a.productId))}),e()(),i(13,"div",8)(14,"h4"),u(15),M(16,"price"),e()()()()}if(r&2){let t,o,a,c=m();p(),s("src",(t=c.cart())==null?null:t.pictureUrl,N),p(5),s("path",c.iconDelete),p(3),s("path",c.iconMinus),p(2),U((o=c.cart())==null?null:o.quantity),p(),s("path",c.iconPlus),p(3),E("",P(16,6,(a=c.cart())==null?null:a.price)," \u20B4")}}var I=class r{cart=B();updateCart=j();cartStorage=_(w);iconDelete="assets/images/svg/tabler-icon-trash.svg";iconPlus="assets/images/svg/tabler-icon-plus.svg";iconMinus="assets/images/svg/tabler-icon-minus.svg";deleteItem(n){n&&(this.cartStorage.deleteItemCartStorage(n),this.updateCart.emit(this.cartStorage.getCartStorage()))}decrease(n){n&&(this.cartStorage.decreaseCartStorage(n),this.updateCart.emit(this.cartStorage.getCartStorage()))}increase(n){n&&(this.cartStorage.increaseCartStorage(n),this.updateCart.emit(this.cartStorage.getCartStorage()))}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["app-cart-item"]],inputs:{cart:[1,"cart"]},outputs:{updateCart:"updateCart"},standalone:!0,features:[h],decls:2,vars:1,consts:[[1,"cart__item"],[1,"cart__image"],["alt","",3,"src"],[1,"cart__info"],[1,"cart__title"],[3,"click","path"],[1,"cart__count"],[1,"cart__quantity"],[1,"cart__price"]],template:function(t,o){t&1&&(i(0,"section",0),S(1,H,17,8),e()),t&2&&(p(),y(o.cart()?1:-1))},dependencies:[x,O],styles:["app-svg-icon[_ngcontent-%COMP%]{width:24px;height:24px}h4[_ngcontent-%COMP%]{font-family:Jura;font-size:22px;font-weight:600;line-height:26.03px;color:#393939}.cart__item[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;contain:content}.cart__title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;padding-bottom:20px}.cart__title[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-family:Jura;font-size:16px;font-weight:600;line-height:18.93px;text-align:left}.cart__info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cart__image[_ngcontent-%COMP%]{padding-right:20px}.cart__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:10px}.cart__count[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.cart__quantity[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.cart__quantity[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#393939}.cart__price[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#393939;text-align:right}"]})};var k=class r{router=_(b);iconCrying="assets/images/svg/iconCryingFace.svg";close(){this.router.navigate([{outlets:{cart:null}}])}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["app-cart-empty"]],standalone:!0,features:[h],decls:13,vars:1,consts:[[1,"cart__empty"],[1,"cart__icon",3,"click"],[3,"path"],[1,"cart__action"],[1,"btn","btn__active",3,"click"],[1,"cart__link"],["href","#"]],template:function(t,o){t&1&&(i(0,"section",0)(1,"div",1),l("click",function(){return o.close()}),f(2,"app-svg-icon",2),e(),i(3,"h3"),u(4,"\u0422\u0432\u0456\u0439 \u043A\u043E\u0448\u0438\u043A \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439"),e(),i(5,"h6"),u(6,"\u0410\u043B\u0435 \u0446\u0435 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u0456\u0437\u043D\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 :)"),e(),i(7,"div",3)(8,"button",4),l("click",function(){return o.close()}),u(9,"\u0414\u043E\u0434\u0430\u0442\u0438 \u0442\u043E\u0432\u0430\u0440\u0438"),e()(),i(10,"div",5)(11,"a",6),u(12,"\u041E\u0437\u043D\u0430\u0439\u043E\u043C\u0442\u0435\u0441\u044C \u0437 \u043D\u0430\u0448\u0438\u043C\u0438 \u0430\u043A\u0446\u0456\u044F\u043C\u0438"),e()()()),t&2&&(p(2),s("path",o.iconCrying))},dependencies:[x],styles:[".cart__empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%}.cart__icon[_ngcontent-%COMP%]{width:100px;height:100px;cursor:pointer}.cart__action[_ngcontent-%COMP%]{height:43px}.cart__link[_ngcontent-%COMP%]{padding-top:144px}.cart__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Tenor Sans;font-size:16px;font-weight:400;line-height:18.72px;text-align:left;text-decoration-line:underline;text-decoration-style:solid;text-underline-position:from-font;text-decoration-skip-ink:none;color:#a894d3}h3[_ngcontent-%COMP%]{padding-top:20px;padding-bottom:10px}h6[_ngcontent-%COMP%]{padding-bottom:20px}h3[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#91a0a5}"]})};function K(r,n){if(r&1){let t=v();i(0,"app-cart-item",10),l("updateCart",function(a){d(t);let c=m(2);return g(c.updateItem(a))}),e()}if(r&2){let t=n.$implicit;s("cart",t)}}function Q(r,n){if(r&1){let t=v();i(0,"div",3),D(1),q(2,K,1,1,"app-cart-item",4,R),T(),e(),i(4,"div",5)(5,"div",6)(6,"h3"),u(7),M(8,"price"),e()(),i(9,"div",7)(10,"button",8),l("click",function(){d(t);let a=m();return g(a.close())}),u(11," \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 "),e(),i(12,"button",9),l("click",function(){d(t);let a=m();return g(a.makeOrder())}),u(13," \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F "),e()()()}if(r&2){let t=m();p(2),z(t.carts),p(5),E("\u041F\u0456\u0434\u0441\u0443\u043C\u043E\u043A: ",P(8,1,t.total)," \u20B4")}}function W(r,n){r&1&&(D(0),f(1,"app-cart-empty"),T())}var G=class r{cartService=_(V);cartStorage=_(w);destroyRef=_(A);router=_(b);iconClose="./assets/images/svg/tabler-icon-x.svg";carts=[];total=0;ngOnInit(){this.cartService.getCart().pipe(F(this.destroyRef)).subscribe(n=>{this.cartStorage.setCartStorage(n.items),this.carts=this.cartStorage.getCartStorage(),this.cartStorage.countTotal(this.carts),this.total=this.cartStorage.getTotal()})}updateItem(n){this.cartService.addToCart(L(n)).pipe(F(this.destroyRef)).subscribe(),this.cartStorage.countTotal(this.cartStorage.getCartStorage()),this.total=this.cartStorage.getTotal(),this.carts=this.cartStorage.getCartStorage()}close(){this.router.navigate([{outlets:{cart:null}}])}makeOrder(){}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=C({type:r,selectors:[["app-cart"]],standalone:!0,features:[J([V]),h],decls:7,vars:2,consts:[[1,"cart__container"],[1,"cart__header"],[3,"click","path"],[1,"cart__content"],[3,"cart"],[1,"cart__actions"],[1,"cart__total"],[1,"cart__btns"],[1,"btn","btn__secondary",3,"click"],[1,"btn","btn__active",3,"click"],[3,"updateCart","cart"]],template:function(t,o){t&1&&(i(0,"section",0)(1,"div",1)(2,"h1"),u(3,"\u041A\u043E\u0448\u0438\u043A"),e(),i(4,"app-svg-icon",2),l("click",function(){return o.close()}),e()(),S(5,Q,14,3)(6,W,2,0,"ng-container"),e()),t&2&&(p(4),s("path",o.iconClose),p(),y(o.carts.length?5:6))},dependencies:[I,k,x,O],styles:[".cart__container[_ngcontent-%COMP%]{position:absolute;top:100px;right:20px;max-width:726px;min-width:320px;height:700px;border-radius:40px;background:#fff;padding:20px;z-index:400}.cart__content[_ngcontent-%COMP%]{height:496px;contain:content;overflow-y:auto}.cart__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:10px}.cart__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#91a0a5}.cart__actions[_ngcontent-%COMP%]{padding-top:10px}.cart__total[_ngcontent-%COMP%]{padding-bottom:20px}.cart__total[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:right;font-family:Jura;font-size:26px;font-weight:600;line-height:30.76px}.cart__btns[_ngcontent-%COMP%]{display:flex;justify-content:space-between}app-svg-icon[_ngcontent-%COMP%]{width:24px;height:24px}"]})};export{G as CartComponent};
