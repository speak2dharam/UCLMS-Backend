import {
  ApiService,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/gradebook.service.ts
var GradebookService = class _GradebookService {
  api;
  constructor(api) {
    this.api = api;
  }
  getCourseGradebook(courseId) {
    return this.api.get(`gradebook/course/${courseId}`);
  }
  getLearnerGrades(courseId, userId) {
    return this.api.get(`gradebook/course/${courseId}/learner/${userId}`);
  }
  getOrgGradebook(courseId, orgId) {
    return this.api.get(`gradebook/course/${courseId}/org/${orgId}`);
  }
  static \u0275fac = function GradebookService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GradebookService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GradebookService, factory: _GradebookService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradebookService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  GradebookService
};
//# sourceMappingURL=chunk-M6GTA3KC.js.map
