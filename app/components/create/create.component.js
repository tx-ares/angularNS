"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ApplicationSettings = require("application-settings");
var CreateComponent = /** @class */ (function () {
    function CreateComponent(location) {
        this.location = location;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        this.firstName = "";
        this.lastName = "";
    }
    CreateComponent.prototype.save = function () {
        if (this.firstName !== "" && this.lastName !== "") {
            this.personList.push({ firstName: this.firstName, lastName: this.lastName });
            ApplicationSettings.setString("people", JSON.stringify(this.personList));
            this.location.back();
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./components/create/create.xml",
        }),
        __metadata("design:paramtypes", [common_1.Location])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQTJDO0FBQzNDLDBEQUE0RDtBQU81RDtJQU9JLHlCQUFZLFFBQWtCO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEVBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDN0UsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFwQlEsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQVN3QixpQkFBUTtPQVByQixlQUFlLENBcUIzQjtJQUFELHNCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjsgXHJcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImNyZWF0ZVwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL2NyZWF0ZS9jcmVhdGUueG1sXCIsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9uZW50IHsgXHJcblxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgICBwcml2YXRlIHBlcnNvbkxpc3Q6IEFycmF5PE9iamVjdD47IC8vIFRoaXMgQ0FOIGJlIHJlbmRlcmVkIGluIFhNTCBmaWxlLiBQcml2YXRlIGZpbGVzIGNhbm5vdCwgYXMgdGhleSBhcmVuJ3QgYXdhcmUgb2YgdGhlbS5cclxuICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvY2F0aW9uOiBMb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnBlcnNvbkxpc3QgPSBKU09OLnBhcnNlKEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKFwicGVvcGxlXCIsIFwiW11cIikpO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxhc3ROYW1lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZmlyc3ROYW1lICE9PSBcIlwiICYmIHRoaXMubGFzdE5hbWUgIT09IFwiXCIgKSB7IFxyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbkxpc3QucHVzaCh7IGZpcnN0TmFtZTogdGhpcy5maXJzdE5hbWUsIGxhc3ROYW1lOiB0aGlzLmxhc3ROYW1lIH0pO1xyXG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcInBlb3BsZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcnNvbkxpc3QpKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==