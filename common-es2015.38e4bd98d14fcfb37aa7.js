(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{C3ze:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var s=i("2JTG"),r=i("Fikd"),a=i("jtS9"),n=i("GJmQ"),o=i("fXoL"),c=i("tyNb"),p=i("0IaG"),l=i("XiUz"),u=i("ofXK"),d=i("EkSr"),h=i("gpoT"),m=i("znSr"),v=i("CREh"),f=i("NhFE"),g=i("bTqV"),x=i("NFeN");const b=function(e){return{headerSmallSize:e}};function y(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",8),o["\u0275\u0275text"](1,"\n    "),o["\u0275\u0275elementStart"](2,"app-list-grid-options",9),o["\u0275\u0275listener"]("openForm",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().openForm({open:!0})})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](3,"\n  "),o["\u0275\u0275elementEnd"]()}if(2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("ngClass",o["\u0275\u0275pureFunction1"](4,b,e.headerSmallSize)),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("listOptions",e.listOptions)("showTitle",e.showTitle)("service",e.service)}}function L(e,t){if(1&e&&(o["\u0275\u0275elementStart"](0,"div",10),o["\u0275\u0275text"](1,"\n    "),o["\u0275\u0275element"](2,"app-pagination",11),o["\u0275\u0275text"](3,"\n  "),o["\u0275\u0275elementEnd"]()),2&e){const e=o["\u0275\u0275nextContext"]();o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("service",e.service)("options",e.listOptions)}}function O(e,t){if(1&e){const e=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"div",12),o["\u0275\u0275text"](1,"\n  "),o["\u0275\u0275elementStart"](2,"button",13),o["\u0275\u0275listener"]("click",(function(){return o["\u0275\u0275restoreView"](e),o["\u0275\u0275nextContext"]().service.loadDummyData()})),o["\u0275\u0275text"](3,"\n    "),o["\u0275\u0275elementStart"](4,"mat-icon",14),o["\u0275\u0275text"](5,"\n      battery_unknown\n    "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](6,"\n  "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](7,"\n"),o["\u0275\u0275elementEnd"]()}}let S=(()=>{class e{constructor(e,t,i,s,r){this.service=e,this.utilitiesService=t,this.router=i,this.activatedRoute=s,this.dialog=r,this.alive=!0,this.appListGridOptions=!0,this.showTitle=!0,this.headerSmallSize=!1,this.showBreadcrumb=!0,this.listOptions={itemsPerPage:[10,20,50,100],archive:!0,delete:!1,add:!0,addAction:!0,edit:!0,view:!0,exportList:!1,importList:!1,clone:!0,groups:!1,hoverData:{status:!1},selectable:!1,activate:!1,deactivate:!1,archivedList:!1,search:!0},this.params={queryParams:{page:1,perPage:this.listOptions.itemsPerPage[0]}}}openForm(e){e.open&&(e.id?this.openDialog(this.formComponentInstance,{id:e.id}):this.openDialog(this.formComponentInstance))}openDialog(e,t,i=!0,s="60%"){this.dialog.open(e,{width:s,panelClass:"scrollableDialog",data:t||{},disableClose:i})}ngOnInit(){r.a.calcListHeight(),r.a.pushResize(),this.activatedRoute.data.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>e&&!e.isArchive?(this.params={queryParams:this.refactorFilters({page:1})},this.service.startAutoLoad(this.params).then(()=>{const e=this.service.featureProps;e.length&&(this.columns=e),this.paginationInit()})):(this.listOptions.archivedList=!0,this.params={queryParams:this.refactorFilters({page:1})},this.service.startAutoLoad(this.params,!0).then(()=>{const e=this.service.featureProps;e.length&&(this.columns=e),this.paginationInit()}))),this.service.loadSelectLists("list"),this.service.setModulePermissions(),this.permissionsUpdateSubscription()}paginationInit(){this.utilitiesService.filtersObservable$.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>{if(e){e=this.service.refactorFiltersBeforeQueryParams(e);const t={};for(const i of Object.keys(e))Array.isArray(e[i])?t[i+"[]"]=e[i]:t[i]=e[i],e[i]||delete t[i];return this.params.queryParams=this.refactorFilters(t),this.resetList()}}),this.utilitiesService.sortObservable$.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>{if(e.colName)return this.params.queryParams.sort=e.colName,this.params.queryParams.direction=e.dir?"asc":"desc",this.resetList()}),this.utilitiesService.countObservable$.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>{if(e)return this.params.queryParams.page=1,this.params.queryParams.perPage=+e,this.loadResources()}),this.service.updateResources.pipe(Object(n.a)(()=>this.alive)).subscribe(()=>this.loadResources()),this.service.appendResources$.pipe(Object(n.a)(()=>this.alive)).subscribe(()=>this.loadAppendResources()),this.utilitiesService.paginateObservable$.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>{if(e)return this.params.queryParams.page=e,this.loadResources()}),this.utilitiesService.paginateInfiniteObservable$.pipe(Object(n.a)(()=>this.alive)).subscribe(e=>{if(e.page&&(e.cid===this.service.cid||e.customCid===this.service.customCid))return e.serviceUniqueIdentifier&&e.serviceUniqueIdentifier!==this.service.customData.serviceUniqueIdentifier?void 0:(this.params.queryParams.page=e.page,this.loadInfiniteResources())})}resetList(){this.params.queryParams.page=1,this.utilitiesService.navigate(this.params.queryParams.page)}loadResources(){return this.listOptions.archivedList?this.service.startAutoLoad(this.params,!0):this.service.startAutoLoad(this.params)}loadAppendResources(){const e=Object.assign({},this.params);return e.queryParams.page=1,this.service.startAutoLoad(e,!!this.listOptions.archivedList,!0,!0)}loadInfiniteResources(){return this.service.startAutoLoad(this.params,!!this.listOptions.archivedList,!0)}ngOnDestroy(){this.alive=!1,this.service.clearSelectedList(),this.utilitiesService.setFilters({}),this.utilitiesService.sortListBy({})}permissionsUpdateSubscription(){this.service.permissionsService.permissionsUpdated.pipe(Object(n.a)(()=>this.alive)).subscribe(()=>{this.service.setModulePermissions(),this.unAuthRedirect()})}unAuthRedirect(){const e=this.activatedRoute.snapshot.data.permissionsKeys;e&&e.length&&(e.every(e=>(console.log(this.service.permissionsService.getPermissions(e.key)),this.service.permissionsService.getPermissions(e.key)))||this.router.navigateByUrl("/401",{skipLocationChange:!0}))}refactorFilters(e){return this.service.refactorFilters(e)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](s.a),o["\u0275\u0275directiveInject"](a.a),o["\u0275\u0275directiveInject"](c.d),o["\u0275\u0275directiveInject"](c.a),o["\u0275\u0275directiveInject"](p.b))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-core-list"]],decls:23,vars:9,consts:[["fxFlex","","fxLayout","column",1,"core-list"],["fxFlex","","fxLayout","","class","page_heading list-grid-options","id","tableOptions",3,"ngClass",4,"ngIf"],["fxFlex","","fxLayout","row",1,"filter-section"],["fxFlex","100",3,"service","listOptions","params"],["fxFlex","","fxLayout","row","fxLayoutGap","20px",1,"container","list-grid-container"],[3,"columns","options","service","openForm"],["fxFlex","","fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","end center","class","container list-grid-pagination",4,"ngIf"],["class","dummyDataLoader","id","dummyDataLoader",4,"ngIf"],["fxFlex","","fxLayout","","id","tableOptions",1,"page_heading","list-grid-options",3,"ngClass"],["fxFlex","",3,"listOptions","showTitle","service","openForm"],["fxFlex","","fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","end center",1,"container","list-grid-pagination"],[3,"service","options"],["id","dummyDataLoader",1,"dummyDataLoader"],["mat-icon-button","",3,"click"],["color","warn"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275text"](1,"\n  "),o["\u0275\u0275template"](2,y,4,6,"div",1),o["\u0275\u0275text"](3,"\n  "),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275text"](5,"\n    "),o["\u0275\u0275element"](6,"app-list-multiple-operations",3),o["\u0275\u0275text"](7,"\n  "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](8,"\n  "),o["\u0275\u0275elementStart"](9,"div",4),o["\u0275\u0275text"](10,"\n    "),o["\u0275\u0275elementStart"](11,"app-list-grid",5),o["\u0275\u0275listener"]("openForm",(function(e){return t.openForm(e)})),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](12,"\n  "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](13,"\n  "),o["\u0275\u0275template"](14,L,4,2,"div",6),o["\u0275\u0275text"](15,"\n  "),o["\u0275\u0275text"](16,"\n  "),o["\u0275\u0275text"](17,"\n  "),o["\u0275\u0275text"](18,"\n"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](19,"\n\n"),o["\u0275\u0275template"](20,O,8,0,"div",7),o["\u0275\u0275text"](21,"\n"),o["\u0275\u0275text"](22,"\n")),2&e&&(o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngIf",t.appListGridOptions),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("service",t.service)("listOptions",t.listOptions)("params",t.params),o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("columns",t.columns)("options",t.listOptions)("service",t.service),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngIf",!(null!=t.listOptions&&t.listOptions.infiniteScrolling)),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("ngIf",t.service.dummyDataLoader))},directives:[l.b,l.f,u.t,d.a,l.g,h.a,u.q,m.a,v.a,l.e,f.a,g.b,x.a],styles:[""]}),e})()}}]);