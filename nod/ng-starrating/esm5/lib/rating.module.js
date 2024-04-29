import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { StarRatingComponent } from '../components/star-rating/star-rating.component';
import * as ɵngcc0 from '@angular/core';
var RatingModule = /** @class */ (function () {
    function RatingModule() {
    }
    RatingModule.prototype.ngDoBootstrap = function () { };
RatingModule.ɵfac = function RatingModule_Factory(t) { return new (t || RatingModule)(); };
RatingModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [FormsModule,
        CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    CommonModule
                ],
                declarations: [
                    RatingComponent,
                    StarRatingComponent
                ],
                exports: [StarRatingComponent],
                entryComponents: [StarRatingComponent]
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RatingModule, { declarations: function () { return [RatingComponent,
        StarRatingComponent]; }, imports: function () { return [FormsModule,
        CommonModule]; }, exports: function () { return [StarRatingComponent]; } }); })();
    return RatingModule;
}());
export { RatingModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmctc3RhcnJhdGluZy9saWIvcmF0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFhdEY7QUFDRSxJQURGO0FBQTJCLElBQWtCLENBQUM7QUFDN0MsSUFEMEIsb0NBQWEsR0FBYixjQUFpQixDQUFDO0tBQWhDLFlBQVkseUJBWHhCLFFBQVEsQ0FBQyxlQUNSLE9BQU8sRUFBRTtFQUNQLFdBQVcsbUJBQ1gsWUFBWSxlQUNiLGVBQ0Q7R0FBWSxFQUFFLG1CQUNaLGVBQWUsbUJBQ2YsbUJBQW1CO1NBQUMsZUFDdEI7S0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUMsZUFDOUIsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUMsV0FDdkMsQ0FBQyxTQUNXO01BQVksQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7MEZBQzlDO0FBQUUsSUFEMkMsbUJBQUM7QUFDNUMsQ0FENEMsQUFBOUMsSUFBOEM7O0FBakJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBYUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQVhBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmF0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFyUmF0aW5nQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJhdGluZ0NvbXBvbmVudCwgXG4gICAgU3RhclJhdGluZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtTdGFyUmF0aW5nQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbU3RhclJhdGluZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUmF0aW5nTW9kdWxlIHtuZ0RvQm9vdHN0cmFwKCkge319XG4iXX0=