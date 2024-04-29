import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { StarRatingComponent } from '../components/star-rating/star-rating.component';
import * as ɵngcc0 from '@angular/core';
let RatingModule = class RatingModule {
    ngDoBootstrap() { }
};
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(RatingModule, { declarations: function () { return [RatingComponent,
        StarRatingComponent]; }, imports: function () { return [FormsModule,
        CommonModule]; }, exports: function () { return [StarRatingComponent]; } }); })();
export { RatingModule };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsibmctc3RhcnJhdGluZy9saWIvcmF0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFhdEYsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtBQUFJLElBQUYsYUFBYSxLQUFJLENBQUM7QUFDN0MsQ0FEOEMsQ0FBQTtDQUFqQyxZQUFZLHFCQVh4QixRQUFRLENBQUMsV0FDUixPQUFPLEVBQUUsZUFDUCxXQUFXO1lBQ1gsWUFBWSxXQUNiLFdBQ0QsWUFBWSxFQUFFLGVBQ1o7T0FBZSxlQUNmLG1CQUFtQixXQUFDLFdBQ3RCLE9BQU8sRUFBRSxDQUFDO1NBQW1CLENBQUMsV0FDOUI7VUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FDdkMsQ0FBQyxLQUNXLFlBQVksQ0FBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBGQUM5Qzs7QUFsQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFhQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBWEEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYXRpbmdDb21wb25lbnQgfSBmcm9tICcuL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhclJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSYXRpbmdDb21wb25lbnQsIFxuICAgIFN0YXJSYXRpbmdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbU3RhclJhdGluZ0NvbXBvbmVudF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1N0YXJSYXRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ01vZHVsZSB7bmdEb0Jvb3RzdHJhcCgpIHt9fVxuIl19