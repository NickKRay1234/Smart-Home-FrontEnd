import{A as ee,B as l,C as u,D as G,E as be,F as A,G as te,H as f,I as ie,J as ne,K as re,L as oe,M as T,N as Me,O as Ae,Q as Ee,R as we,S as E,T as p,U as se,_ as Fe,a as ge,aa as xe,b as me,c as _e,d as ve,e as N,f as P,g as Z,ga as Se,h as _,i as v,j as ye,ja as Ie,k as X,ka as Oe,l as h,m as Ce,n as k,o as R,p as Ve,q as b,r as De,s as Y,t as g,u as o,v as J,w as M,x as m,y as K,z as Q}from"./chunk-TZJFEGLQ.js";import{a as c,b as d,d as pe}from"./chunk-4CLCTAJ7.js";var Be=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(Y))}}static{this.\u0275dir=h({type:i})}}return i})(),at=(()=>{class i extends Be{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Ve(i)))(r||i)}})()}static{this.\u0275dir=h({type:i,features:[m]})}}return i})(),Ue=new _("");var lt={provide:Ue,useExisting:P(()=>q),multi:!0};function ut(){let i=se()?se().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var ct=new _(""),q=(()=>{class i extends Be{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ut())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(Y),o(ct,8))}}static{this.\u0275dir=h({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[T([lt]),m]})}}return i})();var He=new _(""),Le=new _("");function We(i){return i!=null}function $e(i){return Ae(i)?me(i):i}function qe(i){let e={};return i.forEach(t=>{e=t!=null?c(c({},e),t):e}),Object.keys(e).length===0?null:e}function ze(i,e){return e.map(t=>t(i))}function dt(i){return!i.validate}function Ze(i){return i.map(e=>dt(e)?e:t=>e.validate(t))}function ht(i){if(!i)return null;let e=i.filter(We);return e.length==0?null:function(t){return qe(ze(t,e))}}function le(i){return i!=null?ht(Ze(i)):null}function ft(i){if(!i)return null;let e=i.filter(We);return e.length==0?null:function(t){let n=ze(t,e).map($e);return ve(n).pipe(_e(qe))}}function ue(i){return i!=null?ft(Ze(i)):null}function Ne(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function pt(i){return i._rawValidators}function gt(i){return i._rawAsyncValidators}function ae(i){return i?Array.isArray(i)?i:[i]:[]}function B(i,e){return Array.isArray(i)?i.includes(e):i===e}function Pe(i,e){let t=ae(e);return ae(i).forEach(r=>{B(t,r)||t.push(r)}),t}function ke(i,e){return ae(e).filter(t=>!B(i,t))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=le(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},V=class extends U{get formDirective(){return null}get path(){return null}},O=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},mt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ni=d(c({},mt),{"[class.ng-submitted]":"isSubmitted"}),Xe=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(O,2))}}static{this.\u0275dir=h({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[m]})}}return i})(),Ye=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(V,10))}}static{this.\u0275dir=h({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[m]})}}return i})();var w="VALID",j="INVALID",y="PENDING",F="DISABLED",D=class{},L=class extends D{constructor(e,t){super(),this.value=e,this.source=t}},S=class extends D{constructor(e,t){super(),this.pristine=e,this.source=t}},I=class extends D{constructor(e,t){super(),this.touched=e,this.source=t}},C=class extends D{constructor(e,t){super(),this.status=e,this.source=t}};function Je(i){return(z(i)?i.validators:i)||null}function _t(i){return Array.isArray(i)?le(i):i||null}function Ke(i,e){return(z(e)?e.asyncValidators:i)||null}function vt(i){return Array.isArray(i)?ue(i):i||null}function z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function yt(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new N(1e3,"");if(!n[t])throw new N(1001,"")}function Ct(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new N(1002,"")})}var W=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=E(()=>this.statusReactive()),this.statusReactive=M(void 0),this._pristine=E(()=>this.pristineReactive()),this.pristineReactive=M(!0),this._touched=E(()=>this.touchedReactive()),this.touchedReactive=M(!1),this._events=new ge,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return p(this.statusReactive)}set status(e){p(()=>this.statusReactive.set(e))}get valid(){return this.status===w}get invalid(){return this.status===j}get pending(){return this.status==y}get disabled(){return this.status===F}get enabled(){return this.status!==F}get pristine(){return p(this.pristineReactive)}set pristine(e){p(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return p(this.touchedReactive)}set touched(e){p(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ke(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(c({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new S(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new S(!0,n))}markAsPending(e={}){this.status=y;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new C(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(c({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(d(c({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,n)),this._events.next(new C(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(n=>{n.enable(d(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(c({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===y)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,t)),this._events.next(new C(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(c({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=$e(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new C(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(j)?j:w}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new S(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new I(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=_t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=vt(this._rawAsyncValidators)}},$=class extends W{constructor(e,t,n){super(Je(t),Ke(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Ct(this,!0,e),Object.keys(e).forEach(n=>{yt(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ce=new _("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function Vt(i,e){return[...e.path,i]}function Qe(i,e,t=de){et(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),bt(i,e),At(i,e),Mt(i,e),Dt(i,e)}function Re(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Dt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function et(i,e){let t=pt(i);e.validator!==null?i.setValidators(Ne(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=gt(i);e.asyncValidator!==null?i.setAsyncValidators(Ne(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Re(e._rawValidators,r),Re(e._rawAsyncValidators,r)}function bt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&tt(i,e)})}function Mt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&tt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function tt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function At(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Et(i,e){i==null,et(i,e)}function wt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function Ft(i){return Object.getPrototypeOf(i.constructor)===at}function xt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function St(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===q?t=s:Ft(s)?n=s:r=s}),r||n||t||null}var It={provide:V,useExisting:P(()=>he)},x=Promise.resolve(),he=(()=>{class i extends V{get submitted(){return p(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=E(()=>this.submittedReactive()),this.submittedReactive=M(!1),this._directives=new Set,this.ngSubmit=new b,this.form=new $({},le(t),ue(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){x.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),Qe(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){x.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){x.then(()=>{let n=this._findContainer(t.path),r=new $({});Et(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){x.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){x.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),xt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(He,10),o(Le,10),o(ce,8))}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&A("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[T([It]),m]})}}return i})();function Ge(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Te(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Ot=class extends W{constructor(e=null,t,n){super(Je(t),Ke(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Te(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Te(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Nt={provide:O,useExisting:P(()=>fe)},je=Promise.resolve(),fe=(()=>{class i extends O{constructor(t,n,r,s,a,ot){super(),this._changeDetectorRef=a,this.callSetDisabledState=ot,this.control=new Ot,this._registered=!1,this.name="",this.update=new b,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=St(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),wt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){je.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&we(n);je.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Vt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(V,9),o(He,10),o(Le,10),o(Ue,10),o(Ee,8),o(ce,8))}}static{this.\u0275dir=h({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[T([Nt]),m,Ce]})}}return i})(),it=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=h({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Pt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({})}}return i})();var nt=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ce,useValue:t.callSetDisabledState??de}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=X({type:i})}static{this.\u0275inj=Z({imports:[Pt]})}}return i})();function Rt(i,e){if(i&1&&(l(0,"div",8),f(1),u()),i&2){let t=te();g(),ie(t.errorMessage)}}function Gt(i,e){if(i&1&&(l(0,"div",8),f(1),u()),i&2){let t=te();g(),ie(t.errorMessage)}}var rt=class i{constructor(e){this._ngZone=e;let t=this.activatedRoute.snapshot.queryParams.returnUrl;t&&(this.returnUrl=t),this.model={email:"",password:"",clientURI:""}}authService=v(Oe);cookies=v(Se);router=v(xe);activatedRoute=v(Fe);returnUrl="";model;errorMessage;showError=!1;ngOnInit(){google.accounts.id.initialize({client_id:Ie.clientId,callback:this.handleCredentialResponse.bind(this),auto_select:!1,cancel_on_tap_outside:!0,use_fedcm_for_prompt:!0}),google.accounts.id.renderButton(document.getElementById("google"),{type:"icon",theme:"outline",size:"medium",shape:"pill"}),google.accounts.id.prompt(e=>{})}onFormSubmit(){this.authService.isExternalAuth=!1,this.authService.login(this.model).subscribe({next:e=>{(e.isAuthSuccessful=!1)&&(this.showError=!0,this.errorMessage=e.errorMessage),this.cookies.set("Authorization",`Bearer ${e.token}`,void 0,"/",void 0,!0,"Strict"),this.authService.getUserInfo().subscribe({next:t=>{this.authService.setStorageUser(t)}}),this.router.navigateByUrl(this.returnUrl)}})}handleCredentialResponse(e){return pe(this,null,function*(){this.authService.externalLogin({idToken:e.credential,provider:"google"}).subscribe({next:t=>{(t.isAuthSuccessful=!1)&&(this.showError=!0,this.errorMessage=t.errorMessage),this.cookies.set("Authorization",`Bearer ${t.token}`,void 0,"/",void 0,!0,"Strict"),this.authService.sendAuthStateChangeNotification(t.isAuthSuccessful),this.authService.getUserInfo().subscribe({next:n=>{this.authService.setStorageUser(n)}}),this._ngZone.run(()=>{this.router.navigateByUrl(this.returnUrl)})}})})}static \u0275fac=function(t){return new(t||i)(o(De))};static \u0275cmp=ye({type:i,selectors:[["app-login"]],standalone:!0,features:[Me],decls:29,vars:4,consts:[["form","ngForm"],[1,"wrapper"],[1,"frame"],["href","/",1,"close-icon"],["src","/assets/tabler-icon-x.png","alt","Close"],[1,"container"],[1,"login-form"],["type","email","name","email","id","email","placeholder","\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430",3,"ngModelChange","ngModel"],[1,"alert"],["type","password","name","pwd","id","pwd","placeholder","\u041F\u0430\u0440\u043E\u043B\u044C",3,"ngModelChange","ngModel"],[1,"login",3,"click"],[1,"social"],[1,"social-icons"],["href","https://facebook.com",1,"facebook"],["src","/assets/facebook.png","alt","facebook"],["id","google"],[1,"redirect"],[1,"register"],["href","#",1,"restore"]],template:function(t,n){if(t&1){let r=be();l(0,"div",1)(1,"div",2)(2,"a",3),G(3,"img",4),u(),l(4,"h2"),f(5,"\u0412\u0445\u0456\u0434"),u(),l(6,"div",5)(7,"form",6,0)(9,"input",7),oe("ngModelChange",function(a){return k(r),re(n.model.email,a)||(n.model.email=a),R(a)}),u(),K(10,Rt,2,1,"div",8),l(11,"input",9),oe("ngModelChange",function(a){return k(r),re(n.model.password,a)||(n.model.password=a),R(a)}),u(),K(12,Gt,2,1,"div",8),l(13,"button",10),A("click",function(){return k(r),R(n.onFormSubmit())}),f(14,"\u0423\u0432\u0456\u0439\u0442\u0438"),u()(),l(15,"div",11)(16,"h4"),f(17,"\u0410\u0431\u043E \u0443\u0432\u0456\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437"),u(),l(18,"div",12)(19,"a",13),G(20,"img",14),u(),G(21,"div",15),u()(),l(22,"div",16)(23,"button",17),f(24,"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C"),u(),l(25,"h6"),f(26," \u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? "),l(27,"a",18),f(28,"\u0412\u0456\u0434\u043D\u043E\u0432\u0438\u0442\u0438"),u()()()()()()}t&2&&(g(9),ne("ngModel",n.model.email),g(),ee(n.showError?10:-1),g(),ne("ngModel",n.model.password),g(),ee(n.showError?12:-1))},dependencies:[nt,it,q,Xe,Ye,fe,he],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.frame[_ngcontent-%COMP%]{width:400px;position:relative;border-radius:20px;background:#fff;margin:auto;padding:5px;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026}.close-icon[_ngcontent-%COMP%]{width:24px;height:24px;position:absolute;top:20px;right:20px;flex-shrink:0;float:right}h2[_ngcontent-%COMP%]{margin-top:44px;margin-bottom:20px;color:var(--blck, #393939);font-family:Jura;font-size:26px;font-style:normal;font-weight:600;line-height:normal;text-align:center}.container[_ngcontent-%COMP%]{display:flex;width:300px;flex-direction:column;align-items:center;gap:40px;margin:auto}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;align-self:stretch}input[_ngcontent-%COMP%]{display:flex;height:60px;padding:0 32px;align-items:center;align-self:stretch;border-radius:61px;border:none;background:var(--B4, #E6F0F0);width:100%;box-sizing:border-box}input[_ngcontent-%COMP%]::placeholder{color:var(--blck, #393939);font-family:Tenor Sans;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.login[_ngcontent-%COMP%]{padding:10px 20px;border-radius:100px;border:none;background:var(--B1, #AFC1E7);cursor:pointer;box-shadow:0 1px 2px #0000004d,0 1px 3px 1px #00000026}.social[_ngcontent-%COMP%]{display:flex;width:123px;flex-direction:column;align-items:center;gap:20px}h4[_ngcontent-%COMP%]{align-self:stretch;color:var(--blck, #393939);font-family:Tenor Sans;font-size:14px;font-style:normal;font-weight:400;line-height:normal}.social-icons[_ngcontent-%COMP%]{display:flex;width:104px;justify-content:space-between;align-items:center}.facebook[_ngcontent-%COMP%]{width:32px;height:32px;flex-shrink:0}.google[_ngcontent-%COMP%]{width:31.36px;height:32px;flex-shrink:0}.redirect[_ngcontent-%COMP%]{display:flex;width:185px;flex-direction:column;align-items:center;gap:20px}.register[_ngcontent-%COMP%]{display:flex;padding:12px 24px;justify-content:center;align-items:center;gap:10px;align-self:stretch;border-radius:44px;border:2px dashed var(--B1, #AFC1E7)}button[_ngcontent-%COMP%] {color:var(--blck, #393939);font-family:Tenor Sans;font-size:14px;font-style:normal;font-weight:400;line-height:normal}h6[_ngcontent-%COMP%]{color:var(--G1, #91A0A5);text-align:center;font-family:Tenor Sans;font-size:14px;font-style:normal;font-weight:400;line-height:normal;align-self:stretch}.restore[_ngcontent-%COMP%]{color:var(--B1, #AFC1E7);font-family:Tenor Sans;font-size:14px;font-style:normal;font-weight:400;line-height:normal;text-decoration:none}.alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fed3d3;color:#820000;padding:1rem;margin-bottom:1rem}"]})};export{rt as LoginComponent};
