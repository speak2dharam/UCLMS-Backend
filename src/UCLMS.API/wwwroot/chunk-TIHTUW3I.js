import {
  Injectable,
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/confirm.service.ts
var ConfirmService = class _ConfirmService {
  active = signal(null, ...ngDevMode ? [{ debugName: "active" }] : []);
  ask(req) {
    return new Promise((resolve) => {
      this.active.set(__spreadProps(__spreadValues({}, req), { resolve }));
    });
  }
  respond(ok) {
    const current = this.active();
    if (!current)
      return;
    this.active.set(null);
    current.resolve(ok);
  }
  static \u0275fac = function ConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmService, factory: _ConfirmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ConfirmService
};
//# sourceMappingURL=chunk-TIHTUW3I.js.map
