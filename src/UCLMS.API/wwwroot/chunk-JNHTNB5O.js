import {
  ApiService,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/organization.service.ts
var OrganizationService = class _OrganizationService {
  api;
  constructor(api) {
    this.api = api;
  }
  getAll(page = 1, pageSize = 20) {
    return this.api.getPaged("organizations", { page, pageSize });
  }
  getById(id) {
    return this.api.get(`organizations/${id}`);
  }
  create(dto) {
    return this.api.post("organizations", dto);
  }
  update(id, dto) {
    return this.api.put(`organizations/${id}`, dto);
  }
  delete(id) {
    return this.api.delete(`organizations/${id}`);
  }
  enrollInCourse(orgId, courseId) {
    return this.api.post(`organizations/${orgId}/enroll/${courseId}`, {});
  }
  static \u0275fac = function OrganizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrganizationService, factory: _OrganizationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  OrganizationService
};
//# sourceMappingURL=chunk-JNHTNB5O.js.map
