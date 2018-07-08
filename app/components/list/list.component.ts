import { Component } from "@angular/core";
import { Location } from "@angular/common"; // Used for subscribing to "pop" events like pushing back button on android device .
import { Router } from "@angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "list",
    templateUrl: "./components/list/list.xml",
})

export class ListComponent { 

    private router: Router;
    public personList: Array<Object>; // This CAN be rendered in XML file. Private files cannot, as they aren't aware of them.

    constructor(router: Router, location: Location) {
        this.router = router;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        location.subscribe((path) => {
            this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        });
    }

    create() {
        this.router.navigate(["Create"]);
    }
}
