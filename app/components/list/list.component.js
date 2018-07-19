"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common"); // Used for subscribing to "pop" events like pushing back button on android device .
var router_1 = require("@angular/router");
var ApplicationSettings = require("application-settings");
var ListComponent = /** @class */ (function () {
    function ListComponent(router, location) {
        var _this = this;
        this.router = router;
        this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        location.subscribe(function (path) {
            _this.personList = JSON.parse(ApplicationSettings.getString("people", "[]"));
        });
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["Create"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.xml",
        }),
        __metadata("design:paramtypes", [router_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBMkMsQ0FBQyxvRkFBb0Y7QUFDaEksMENBQXlDO0FBQ3pDLDBEQUE0RDtBQU81RDtJQUtJLHVCQUFZLE1BQWMsRUFBRSxRQUFrQjtRQUE5QyxpQkFNQztRQUxHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFmUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7eUNBT3NCLGVBQU0sRUFBWSxpQkFBUTtPQUxyQyxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjsgLy8gVXNlZCBmb3Igc3Vic2NyaWJpbmcgdG8gXCJwb3BcIiBldmVudHMgbGlrZSBwdXNoaW5nIGJhY2sgYnV0dG9uIG9uIGFuZHJvaWQgZGV2aWNlIC5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvbGlzdC9saXN0LnhtbFwiLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgeyBcclxuXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG4gICAgcHVibGljIHBlcnNvbkxpc3Q6IEFycmF5PE9iamVjdD47IC8vIFRoaXMgQ0FOIGJlIHJlbmRlcmVkIGluIFhNTCBmaWxlLiBQcml2YXRlIGZpbGVzIGNhbm5vdCwgYXMgdGhleSBhcmVuJ3QgYXdhcmUgb2YgdGhlbS5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgbG9jYXRpb246IExvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0ID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcInBlb3BsZVwiLCBcIltdXCIpKTtcclxuICAgICAgICBsb2NhdGlvbi5zdWJzY3JpYmUoKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25MaXN0ID0gSlNPTi5wYXJzZShBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcInBlb3BsZVwiLCBcIltdXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiQ3JlYXRlXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=