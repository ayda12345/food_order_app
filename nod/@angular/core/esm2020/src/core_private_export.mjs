/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { ALLOW_MULTIPLE_PLATFORMS as ɵALLOW_MULTIPLE_PLATFORMS, internalCreateApplication as ɵinternalCreateApplication } from './application_ref';
export { APP_ID_RANDOM_PROVIDER as ɵAPP_ID_RANDOM_PROVIDER } from './application_tokens';
export { defaultIterableDiffers as ɵdefaultIterableDiffers, defaultKeyValueDiffers as ɵdefaultKeyValueDiffers } from './change_detection/change_detection';
export { ChangeDetectorStatus as ɵChangeDetectorStatus, isDefaultChangeDetectionStrategy as ɵisDefaultChangeDetectionStrategy } from './change_detection/constants';
export { Console as ɵConsole } from './console';
export { getDebugNodeR2 as ɵgetDebugNodeR2 } from './debug/debug_node';
export { convertToBitFlags as ɵconvertToBitFlags, setCurrentInjector as ɵsetCurrentInjector } from './di/injector_compatibility';
export { getInjectableDef as ɵgetInjectableDef } from './di/interface/defs';
export { isEnvironmentProviders as ɵisEnvironmentProviders } from './di/interface/provider';
export { INJECTOR_SCOPE as ɵINJECTOR_SCOPE } from './di/scope';
export { XSS_SECURITY_URL as ɵXSS_SECURITY_URL } from './error_details_base_url';
export { formatRuntimeError as ɵformatRuntimeError, RuntimeError as ɵRuntimeError } from './errors';
export { findLocaleData as ɵfindLocaleData, getLocaleCurrencyCode as ɵgetLocaleCurrencyCode, getLocalePluralCase as ɵgetLocalePluralCase, LocaleDataIndex as ɵLocaleDataIndex, registerLocaleData as ɵregisterLocaleData, unregisterAllLocaleData as ɵunregisterLocaleData } from './i18n/locale_data_api';
export { DEFAULT_LOCALE_ID as ɵDEFAULT_LOCALE_ID } from './i18n/localization';
export { ComponentFactory as ɵComponentFactory } from './linker/component_factory';
export { clearResolutionOfComponentResourcesQueue as ɵclearResolutionOfComponentResourcesQueue, resolveComponentResources as ɵresolveComponentResources } from './metadata/resource_loading';
export { ReflectionCapabilities as ɵReflectionCapabilities } from './reflection/reflection_capabilities';
export { allowSanitizationBypassAndThrow as ɵallowSanitizationBypassAndThrow, getSanitizationBypassType as ɵgetSanitizationBypassType, unwrapSafeValue as ɵunwrapSafeValue } from './sanitization/bypass';
export { _sanitizeHtml as ɵ_sanitizeHtml } from './sanitization/html_sanitizer';
export { _sanitizeUrl as ɵ_sanitizeUrl } from './sanitization/url_sanitizer';
export { TESTABILITY as ɵTESTABILITY, TESTABILITY_GETTER as ɵTESTABILITY_GETTER } from './testability/testability';
export { coerceToBoolean as ɵcoerceToBoolean } from './util/coercion';
export { devModeEqual as ɵdevModeEqual } from './util/comparison';
export { makeDecorator as ɵmakeDecorator } from './util/decorators';
export { global as ɵglobal } from './util/global';
export { isListLikeIterable as ɵisListLikeIterable } from './util/iterable';
export { isObservable as ɵisObservable, isPromise as ɵisPromise, isSubscribable as ɵisSubscribable } from './util/lang';
export { stringify as ɵstringify } from './util/stringify';
export { NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR as ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from './view/provider_flags';
// TODO(alxhub): allows tests to compile, can be removed when tests have been updated.
export const ɵivyEnabled = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZV9wcml2YXRlX2V4cG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2NvcmVfcHJpdmF0ZV9leHBvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLHdCQUF3QixJQUFJLHlCQUF5QixFQUFFLHlCQUF5QixJQUFJLDBCQUEwQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakosT0FBTyxFQUFDLHNCQUFzQixJQUFJLHVCQUF1QixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdkYsT0FBTyxFQUFDLHNCQUFzQixJQUFJLHVCQUF1QixFQUFFLHNCQUFzQixJQUFJLHVCQUF1QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekosT0FBTyxFQUFDLG9CQUFvQixJQUFJLHFCQUFxQixFQUFFLGdDQUFnQyxJQUFJLGlDQUFpQyxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDbEssT0FBTyxFQUFDLE9BQU8sSUFBSSxRQUFRLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFDLGNBQWMsSUFBSSxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRSxPQUFPLEVBQUMsaUJBQWlCLElBQUksa0JBQWtCLEVBQUUsa0JBQWtCLElBQUksbUJBQW1CLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvSCxPQUFPLEVBQUMsZ0JBQWdCLElBQUksaUJBQWlCLEVBQXlDLE1BQU0scUJBQXFCLENBQUM7QUFDbEgsT0FBTyxFQUFnRSxzQkFBc0IsSUFBSSx1QkFBdUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3pKLE9BQU8sRUFBQyxjQUFjLElBQUksZUFBZSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsSUFBSSxpQkFBaUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQy9FLE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBRSxZQUFZLElBQUksYUFBYSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ2xHLE9BQU8sRUFBaUYsY0FBYyxJQUFJLGVBQWUsRUFBRSxxQkFBcUIsSUFBSSxzQkFBc0IsRUFBRSxtQkFBbUIsSUFBSSxvQkFBb0IsRUFBRSxlQUFlLElBQUksZ0JBQWdCLEVBQUUsa0JBQWtCLElBQUksbUJBQW1CLEVBQUUsdUJBQXVCLElBQUkscUJBQXFCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6WCxPQUFPLEVBQUMsaUJBQWlCLElBQUksa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZ0JBQWdCLElBQUksaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRixPQUFPLEVBQUMsd0NBQXdDLElBQUkseUNBQXlDLEVBQUUseUJBQXlCLElBQUksMEJBQTBCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMzTCxPQUFPLEVBQUMsc0JBQXNCLElBQUksdUJBQXVCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RyxPQUFPLEVBQUMsK0JBQStCLElBQUksZ0NBQWdDLEVBQTZCLHlCQUF5QixJQUFJLDBCQUEwQixFQUFnSyxlQUFlLElBQUksZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqWSxPQUFPLEVBQUMsYUFBYSxJQUFJLGNBQWMsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzlFLE9BQU8sRUFBQyxZQUFZLElBQUksYUFBYSxFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDM0UsT0FBTyxFQUFDLFdBQVcsSUFBSSxZQUFZLEVBQUUsa0JBQWtCLElBQUksbUJBQW1CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNqSCxPQUFPLEVBQUMsZUFBZSxJQUFJLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFlBQVksSUFBSSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxJQUFJLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxNQUFNLElBQUksT0FBTyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxrQkFBa0IsSUFBSSxtQkFBbUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxZQUFZLElBQUksYUFBYSxFQUFFLFNBQVMsSUFBSSxVQUFVLEVBQUUsY0FBYyxJQUFJLGVBQWUsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUN0SCxPQUFPLEVBQUMsU0FBUyxJQUFJLFVBQVUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxxQ0FBcUMsSUFBSSxzQ0FBc0MsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXRILHNGQUFzRjtBQUN0RixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCB7QUxMT1dfTVVMVElQTEVfUExBVEZPUk1TIGFzIMm1QUxMT1dfTVVMVElQTEVfUExBVEZPUk1TLCBpbnRlcm5hbENyZWF0ZUFwcGxpY2F0aW9uIGFzIMm1aW50ZXJuYWxDcmVhdGVBcHBsaWNhdGlvbn0gZnJvbSAnLi9hcHBsaWNhdGlvbl9yZWYnO1xuZXhwb3J0IHtBUFBfSURfUkFORE9NX1BST1ZJREVSIGFzIMm1QVBQX0lEX1JBTkRPTV9QUk9WSURFUn0gZnJvbSAnLi9hcHBsaWNhdGlvbl90b2tlbnMnO1xuZXhwb3J0IHtkZWZhdWx0SXRlcmFibGVEaWZmZXJzIGFzIMm1ZGVmYXVsdEl0ZXJhYmxlRGlmZmVycywgZGVmYXVsdEtleVZhbHVlRGlmZmVycyBhcyDJtWRlZmF1bHRLZXlWYWx1ZURpZmZlcnN9IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmV4cG9ydCB7Q2hhbmdlRGV0ZWN0b3JTdGF0dXMgYXMgybVDaGFuZ2VEZXRlY3RvclN0YXR1cywgaXNEZWZhdWx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgYXMgybVpc0RlZmF1bHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneX0gZnJvbSAnLi9jaGFuZ2VfZGV0ZWN0aW9uL2NvbnN0YW50cyc7XG5leHBvcnQge0NvbnNvbGUgYXMgybVDb25zb2xlfSBmcm9tICcuL2NvbnNvbGUnO1xuZXhwb3J0IHtnZXREZWJ1Z05vZGVSMiBhcyDJtWdldERlYnVnTm9kZVIyfSBmcm9tICcuL2RlYnVnL2RlYnVnX25vZGUnO1xuZXhwb3J0IHtjb252ZXJ0VG9CaXRGbGFncyBhcyDJtWNvbnZlcnRUb0JpdEZsYWdzLCBzZXRDdXJyZW50SW5qZWN0b3IgYXMgybVzZXRDdXJyZW50SW5qZWN0b3J9IGZyb20gJy4vZGkvaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5leHBvcnQge2dldEluamVjdGFibGVEZWYgYXMgybVnZXRJbmplY3RhYmxlRGVmLCDJtcm1SW5qZWN0YWJsZURlY2xhcmF0aW9uLCDJtcm1SW5qZWN0b3JEZWZ9IGZyb20gJy4vZGkvaW50ZXJmYWNlL2RlZnMnO1xuZXhwb3J0IHtJbnRlcm5hbEVudmlyb25tZW50UHJvdmlkZXJzIGFzIMm1SW50ZXJuYWxFbnZpcm9ubWVudFByb3ZpZGVycywgaXNFbnZpcm9ubWVudFByb3ZpZGVycyBhcyDJtWlzRW52aXJvbm1lbnRQcm92aWRlcnN9IGZyb20gJy4vZGkvaW50ZXJmYWNlL3Byb3ZpZGVyJztcbmV4cG9ydCB7SU5KRUNUT1JfU0NPUEUgYXMgybVJTkpFQ1RPUl9TQ09QRX0gZnJvbSAnLi9kaS9zY29wZSc7XG5leHBvcnQge1hTU19TRUNVUklUWV9VUkwgYXMgybVYU1NfU0VDVVJJVFlfVVJMfSBmcm9tICcuL2Vycm9yX2RldGFpbHNfYmFzZV91cmwnO1xuZXhwb3J0IHtmb3JtYXRSdW50aW1lRXJyb3IgYXMgybVmb3JtYXRSdW50aW1lRXJyb3IsIFJ1bnRpbWVFcnJvciBhcyDJtVJ1bnRpbWVFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xuZXhwb3J0IHtDdXJyZW5jeUluZGV4IGFzIMm1Q3VycmVuY3lJbmRleCwgRXh0cmFMb2NhbGVEYXRhSW5kZXggYXMgybVFeHRyYUxvY2FsZURhdGFJbmRleCwgZmluZExvY2FsZURhdGEgYXMgybVmaW5kTG9jYWxlRGF0YSwgZ2V0TG9jYWxlQ3VycmVuY3lDb2RlIGFzIMm1Z2V0TG9jYWxlQ3VycmVuY3lDb2RlLCBnZXRMb2NhbGVQbHVyYWxDYXNlIGFzIMm1Z2V0TG9jYWxlUGx1cmFsQ2FzZSwgTG9jYWxlRGF0YUluZGV4IGFzIMm1TG9jYWxlRGF0YUluZGV4LCByZWdpc3RlckxvY2FsZURhdGEgYXMgybVyZWdpc3RlckxvY2FsZURhdGEsIHVucmVnaXN0ZXJBbGxMb2NhbGVEYXRhIGFzIMm1dW5yZWdpc3RlckxvY2FsZURhdGF9IGZyb20gJy4vaTE4bi9sb2NhbGVfZGF0YV9hcGknO1xuZXhwb3J0IHtERUZBVUxUX0xPQ0FMRV9JRCBhcyDJtURFRkFVTFRfTE9DQUxFX0lEfSBmcm9tICcuL2kxOG4vbG9jYWxpemF0aW9uJztcbmV4cG9ydCB7Q29tcG9uZW50RmFjdG9yeSBhcyDJtUNvbXBvbmVudEZhY3Rvcnl9IGZyb20gJy4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5JztcbmV4cG9ydCB7Y2xlYXJSZXNvbHV0aW9uT2ZDb21wb25lbnRSZXNvdXJjZXNRdWV1ZSBhcyDJtWNsZWFyUmVzb2x1dGlvbk9mQ29tcG9uZW50UmVzb3VyY2VzUXVldWUsIHJlc29sdmVDb21wb25lbnRSZXNvdXJjZXMgYXMgybVyZXNvbHZlQ29tcG9uZW50UmVzb3VyY2VzfSBmcm9tICcuL21ldGFkYXRhL3Jlc291cmNlX2xvYWRpbmcnO1xuZXhwb3J0IHtSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIGFzIMm1UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcbmV4cG9ydCB7YWxsb3dTYW5pdGl6YXRpb25CeXBhc3NBbmRUaHJvdyBhcyDJtWFsbG93U2FuaXRpemF0aW9uQnlwYXNzQW5kVGhyb3csIEJ5cGFzc1R5cGUgYXMgybVCeXBhc3NUeXBlLCBnZXRTYW5pdGl6YXRpb25CeXBhc3NUeXBlIGFzIMm1Z2V0U2FuaXRpemF0aW9uQnlwYXNzVHlwZSwgU2FmZUh0bWwgYXMgybVTYWZlSHRtbCwgU2FmZVJlc291cmNlVXJsIGFzIMm1U2FmZVJlc291cmNlVXJsLCBTYWZlU2NyaXB0IGFzIMm1U2FmZVNjcmlwdCwgU2FmZVN0eWxlIGFzIMm1U2FmZVN0eWxlLCBTYWZlVXJsIGFzIMm1U2FmZVVybCwgU2FmZVZhbHVlIGFzIMm1U2FmZVZhbHVlLCB1bndyYXBTYWZlVmFsdWUgYXMgybV1bndyYXBTYWZlVmFsdWV9IGZyb20gJy4vc2FuaXRpemF0aW9uL2J5cGFzcyc7XG5leHBvcnQge19zYW5pdGl6ZUh0bWwgYXMgybVfc2FuaXRpemVIdG1sfSBmcm9tICcuL3Nhbml0aXphdGlvbi9odG1sX3Nhbml0aXplcic7XG5leHBvcnQge19zYW5pdGl6ZVVybCBhcyDJtV9zYW5pdGl6ZVVybH0gZnJvbSAnLi9zYW5pdGl6YXRpb24vdXJsX3Nhbml0aXplcic7XG5leHBvcnQge1RFU1RBQklMSVRZIGFzIMm1VEVTVEFCSUxJVFksIFRFU1RBQklMSVRZX0dFVFRFUiBhcyDJtVRFU1RBQklMSVRZX0dFVFRFUn0gZnJvbSAnLi90ZXN0YWJpbGl0eS90ZXN0YWJpbGl0eSc7XG5leHBvcnQge2NvZXJjZVRvQm9vbGVhbiBhcyDJtWNvZXJjZVRvQm9vbGVhbn0gZnJvbSAnLi91dGlsL2NvZXJjaW9uJztcbmV4cG9ydCB7ZGV2TW9kZUVxdWFsIGFzIMm1ZGV2TW9kZUVxdWFsfSBmcm9tICcuL3V0aWwvY29tcGFyaXNvbic7XG5leHBvcnQge21ha2VEZWNvcmF0b3IgYXMgybVtYWtlRGVjb3JhdG9yfSBmcm9tICcuL3V0aWwvZGVjb3JhdG9ycyc7XG5leHBvcnQge2dsb2JhbCBhcyDJtWdsb2JhbH0gZnJvbSAnLi91dGlsL2dsb2JhbCc7XG5leHBvcnQge2lzTGlzdExpa2VJdGVyYWJsZSBhcyDJtWlzTGlzdExpa2VJdGVyYWJsZX0gZnJvbSAnLi91dGlsL2l0ZXJhYmxlJztcbmV4cG9ydCB7aXNPYnNlcnZhYmxlIGFzIMm1aXNPYnNlcnZhYmxlLCBpc1Byb21pc2UgYXMgybVpc1Byb21pc2UsIGlzU3Vic2NyaWJhYmxlIGFzIMm1aXNTdWJzY3JpYmFibGV9IGZyb20gJy4vdXRpbC9sYW5nJztcbmV4cG9ydCB7c3RyaW5naWZ5IGFzIMm1c3RyaW5naWZ5fSBmcm9tICcuL3V0aWwvc3RyaW5naWZ5JztcbmV4cG9ydCB7Tk9UX0ZPVU5EX0NIRUNLX09OTFlfRUxFTUVOVF9JTkpFQ1RPUiBhcyDJtU5PVF9GT1VORF9DSEVDS19PTkxZX0VMRU1FTlRfSU5KRUNUT1J9IGZyb20gJy4vdmlldy9wcm92aWRlcl9mbGFncyc7XG5cbi8vIFRPRE8oYWx4aHViKTogYWxsb3dzIHRlc3RzIHRvIGNvbXBpbGUsIGNhbiBiZSByZW1vdmVkIHdoZW4gdGVzdHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXG5leHBvcnQgY29uc3QgybVpdnlFbmFibGVkID0gdHJ1ZTtcbiJdfQ==