import {
  ApiService,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/assignment.service.ts
var AssignmentService = class _AssignmentService {
  api;
  constructor(api) {
    this.api = api;
  }
  getById(id) {
    return this.api.get(`assignments/${id}`);
  }
  create(dto) {
    return this.api.post("assignments", dto);
  }
  delete(id) {
    return this.api.delete(`assignments/${id}`);
  }
  submit(assignmentId, dto) {
    return this.api.post(`assignments/${assignmentId}/submit`, dto);
  }
  grade(submissionId, dto) {
    return this.api.post(`assignments/submissions/${submissionId}/grade`, dto);
  }
  getPendingGrading() {
    return this.api.getPaged("assignments/pending-grading");
  }
  getByCourse(courseId) {
    return this.api.getPaged("assignments", { courseId }).pipe(map((r) => r.items));
  }
  static \u0275fac = function AssignmentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssignmentService, factory: _AssignmentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  AssignmentService
};
//# sourceMappingURL=chunk-54EDBHFN.js.map
