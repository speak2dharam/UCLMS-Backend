import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/toast.service.ts
var ToastService = class _ToastService {
  toasts = signal([], ...ngDevMode ? [{ debugName: "toasts" }] : []);
  nextId = 1;
  success(message, durationMs = 3500) {
    this.push("success", message, durationMs);
  }
  error(message, durationMs = 6e3) {
    this.push("error", message, durationMs);
  }
  info(message, durationMs = 3500) {
    this.push("info", message, durationMs);
  }
  warning(message, durationMs = 4500) {
    this.push("warning", message, durationMs);
  }
  dismiss(id) {
    this.toasts.update((arr) => arr.filter((t) => t.id !== id));
  }
  push(kind, message, durationMs) {
    const id = this.nextId++;
    this.toasts.update((arr) => [...arr, { id, kind, message, durationMs }]);
    setTimeout(() => this.dismiss(id), durationMs);
  }
  static \u0275fac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ToastService, factory: _ToastService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ToastService
};
//# sourceMappingURL=chunk-I3QOXDTS.js.map
