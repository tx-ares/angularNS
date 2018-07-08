import { Component } from "@angular/core";
import { Location } from "@angular/common"; 
import * as ApplicationSettings from "application-settings";

@Component({
    selector: "create",
    templateUrl: "./components/create/create.xml",
})

export class CreateComponent { 

    private location: Location;
    private personList: Array<Object>; // This CAN be rendered in XML file. Private files cannot, as they aren't aware of them.
    public firstName: string;
    public lastName: string;

    constructor(location: Location) {
        this.location = location;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstName = "";
        this.lastName = "";
    }

    save() {
        if(this.firstName !== "" && this.lastName !== "" ) { 
            this.personList.push({ firstName: this.firstName, lastName: this.lastName });
            ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back();
        }
    }
}
