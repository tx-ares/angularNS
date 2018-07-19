import { Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";

@Component({
    selector: "ns-app",
    providers: [NativeScriptRouterModule],
    templateUrl: '<page-router-outlet></page-router-outlet>',
})
export class AppComponent { }

const APP_ROUTES: Routes = [
    { path: "/list", component: ListComponent },
    { path: '/create', component: CreateComponent }
]

export const router = RouterModule.forRoot(APP_ROUTES);


