"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValidator = void 0;
const core_1 = require("@angular-devkit/core");
const operators_1 = require("rxjs/operators");
function formatValidator(data, dataSchema, formats) {
    const registry = new core_1.schema.CoreSchemaRegistry();
    for (const format of formats) {
        registry.addFormat(format);
    }
    return registry.compile(dataSchema).pipe((0, operators_1.mergeMap)((validator) => validator(data)));
}
exports.formatValidator = formatValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3Mvc3JjL2Zvcm1hdHMvZm9ybWF0LXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFFSCwrQ0FBcUU7QUFFckUsOENBQTBDO0FBRTFDLFNBQWdCLGVBQWUsQ0FDN0IsSUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE9BQThCO0lBRTlCLE1BQU0sUUFBUSxHQUFHLElBQUksYUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFFakQsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7UUFDNUIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM1QjtJQUVELE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBQSxvQkFBUSxFQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JGLENBQUM7QUFaRCwwQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBKc29uT2JqZWN0LCBKc29uVmFsdWUsIHNjaGVtYSB9IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VmFsaWRhdG9yKFxuICBkYXRhOiBKc29uVmFsdWUsXG4gIGRhdGFTY2hlbWE6IEpzb25PYmplY3QsXG4gIGZvcm1hdHM6IHNjaGVtYS5TY2hlbWFGb3JtYXRbXSxcbik6IE9ic2VydmFibGU8c2NoZW1hLlNjaGVtYVZhbGlkYXRvclJlc3VsdD4ge1xuICBjb25zdCByZWdpc3RyeSA9IG5ldyBzY2hlbWEuQ29yZVNjaGVtYVJlZ2lzdHJ5KCk7XG5cbiAgZm9yIChjb25zdCBmb3JtYXQgb2YgZm9ybWF0cykge1xuICAgIHJlZ2lzdHJ5LmFkZEZvcm1hdChmb3JtYXQpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2lzdHJ5LmNvbXBpbGUoZGF0YVNjaGVtYSkucGlwZShtZXJnZU1hcCgodmFsaWRhdG9yKSA9PiB2YWxpZGF0b3IoZGF0YSkpKTtcbn1cbiJdfQ==