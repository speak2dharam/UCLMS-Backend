import {
  DomSanitizer
} from "./chunk-HJDD2Z3G.js";
import {
  Pipe,
  inject,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-KOVPKQ3I.js";

// src/app/shared/safe-html.pipe.ts
var SafeHtmlPipe = class _SafeHtmlPipe {
  sanitizer = inject(DomSanitizer);
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value ?? "");
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safeHtml", type: _SafeHtmlPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{ name: "safeHtml", standalone: true }]
  }], null, null);
})();

export {
  SafeHtmlPipe
};
//# sourceMappingURL=chunk-4CYNX66W.js.map
