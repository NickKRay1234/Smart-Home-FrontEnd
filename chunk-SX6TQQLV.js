import{a as o}from"./chunk-3YUZC2M5.js";import{Aa as m,Qa as d,Ra as g,Sa as u,T as s,Ta as e,Ua as i,V as p,Va as a,Xa as f,Za as v,db as C,eb as h,fa as l,ga as _}from"./chunk-M4VOTFSZ.js";import"./chunk-4CLCTAJ7.js";function b(t,n){t&1&&a(0,"div",8)}var x=class t{cartService=s(o);carts=[];closeIcon="assets/images/svg/tabler-icon-x.svg";constructor(){this.cartService.getCart().subscribe(n=>this.carts=n)}close(){}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=p({type:t,selectors:[["app-cart"]],standalone:!0,features:[C([o]),h],decls:11,vars:0,consts:[[1,"cart__container"],[1,"cart__header"],[1,"cart__title"],[1,"cart__close"],[1,"btn__svg",3,"click"],[1,"svg__icon__close"],[0,"xlink","href","assets/images/svg/sprite.svg#closeIcon"],[1,"cart__items"],[1,"cart__item"]],template:function(r,c){r&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),v(3,"\u041A\u043E\u0448\u0438\u043A"),i(),e(4,"div",3)(5,"button",4),f("click",function(){return c.close()}),l(),e(6,"svg",5),a(7,"use",6),i()()()(),_(),e(8,"div",7),g(9,b,1,0,"div",8,d),i()()),r&2&&(m(9),u(c.carts))},styles:[".cart__container[_ngcontent-%COMP%]{background:var(--white);border-radius:40px;width:726px;height:700px}.cart__header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.cart__title[_ngcontent-%COMP%]{font-family:Jura;font-size:36px;font-weight:700;line-height:42.59px;text-align:left;color:var(--g1);padding-top:10px;padding-left:20px}.svg__icon__close[_ngcontent-%COMP%]{width:24px;height:24px}.cart__close[_ngcontent-%COMP%]{padding-top:20px;padding-right:20px}.btn__svg[_ngcontent-%COMP%]{width:24px;height:24px;background:transparent;border:none;cursor:pointer}"]})};export{x as CartComponent};