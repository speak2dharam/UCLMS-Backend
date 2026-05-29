import {
  ApiService,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/report.service.ts
var ReportService = class _ReportService {
  api;
  constructor(api) {
    this.api = api;
  }
  getPlatformSummary() {
    return this.api.get("reports/platform");
  }
  getOrgReport(orgId) {
    return this.api.get(`reports/org/${orgId}`);
  }
  getCourseReport(courseId, orgId) {
    return this.api.get(`reports/course/${courseId}`, orgId ? { orgId } : void 0);
  }
  getUserProgressReport(userId) {
    return this.api.get(`reports/user/${userId}`);
  }
  /** Current user's own progress — works for all roles. */
  getMyProgressReport() {
    return this.api.get("reports/me");
  }
  static \u0275fac = function ReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  ReportService
};
//# sourceMappingURL=chunk-PIGK34IJ.js.map
