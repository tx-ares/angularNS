import { Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";

import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";

@Component({
    selector: "ns-app",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [NS_ROUTER_PROVIDERS],
    templateUrl: "app.component.xml",
})
const APP_ROUTES: Routes = [
    { path: "/list", component: ListComponent, name: "List", useAsDefault: true },
    { path: '/create', component: CreateComponent, name: "Create"}
]

export const router = RouterModule.forRoot(APP_ROUTES);

export class AppComponent { }
