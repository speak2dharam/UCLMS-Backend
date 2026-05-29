import {
  ApiService,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  api;
  constructor(api) {
    this.api = api;
  }
  getAll(filter) {
    return this.api.getPaged("users", filter);
  }
  getById(id) {
    return this.api.get(`users/${id}`);
  }
  create(dto) {
    return this.api.post("users", dto);
  }
  update(id, dto) {
    return this.api.put(`users/${id}`, dto);
  }
  delete(id) {
    return this.api.delete(`users/${id}`);
  }
  resendInvitation(id) {
    return this.api.post(`users/${id}/resend-invitation`, {});
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-BR34S36W.js.map
