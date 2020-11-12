import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Dk/home/home.component';
const routes = [
    {
        path: ' ', component: HomeComponent
    }
];
let AppRoutingModule = /** @class */ (() => {
    let AppRoutingModule = class AppRoutingModule {
    };
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map