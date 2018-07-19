"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            providers: [router_2.NativeScriptRouterModule],
            templateUrl: '<page-router-outlet></page-router-outlet>',
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var APP_ROUTES = [
    { path: "/list", component: list_component_1.ListComponent },
    { path: '/create', component: create_component_1.CreateComponent }
];
exports.router = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXVEO0FBQ3ZELHNEQUFxRTtBQUVyRSxtRUFBK0Q7QUFDL0QseUVBQXFFO0FBT3JFO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixTQUFTLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztZQUNyQyxXQUFXLEVBQUUsMkNBQTJDO1NBQzNELENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZO0FBRXpCLElBQU0sVUFBVSxHQUFXO0lBQ3ZCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7Q0FDbEQsQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge0xpc3RDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NyZWF0ZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJzxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cclxuXHJcbmNvbnN0IEFQUF9ST1VURVM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCIvbGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9jcmVhdGUnLCBjb21wb25lbnQ6IENyZWF0ZUNvbXBvbmVudCB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChBUFBfUk9VVEVTKTtcclxuXHJcblxyXG4iXX0=