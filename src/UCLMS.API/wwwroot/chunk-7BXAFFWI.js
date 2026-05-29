import {
  ApiService,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/course.service.ts
var CourseService = class _CourseService {
  api;
  constructor(api) {
    this.api = api;
  }
  // ── Courses ────────────────────────────────────────────────────────────────
  getAll(filter) {
    return this.api.getPaged("courses", filter);
  }
  getById(id) {
    return this.api.get(`courses/${id}`);
  }
  create(dto) {
    return this.api.post("courses", dto);
  }
  update(id, dto) {
    return this.api.put(`courses/${id}`, dto);
  }
  publish(id) {
    return this.api.patch(`courses/${id}/publish`);
  }
  unpublish(id) {
    return this.api.patch(`courses/${id}/unpublish`);
  }
  archive(id) {
    return this.api.patch(`courses/${id}/archive`);
  }
  setHomePage(id, value) {
    return this.api.patch(`courses/${id}/home-page?value=${value}`);
  }
  delete(id) {
    return this.api.delete(`courses/${id}`);
  }
  // ── Course enrollments (per-course) ────────────────────────────────────────
  enrollUser(courseId, userId) {
    return this.api.post(`courses/${courseId}/enroll/${userId}`, {});
  }
  unenrollUser(courseId, userId) {
    return this.api.delete(`courses/${courseId}/enroll/${userId}`);
  }
  getEnrollments(courseId) {
    return this.api.get(`courses/${courseId}/enrollments`);
  }
  enrollMany(courseId, userIds) {
    return this.api.post(`courses/${courseId}/enrollments`, userIds);
  }
  getUserEnrolledCourses(userId) {
    return this.api.get(`courses/user/${userId}/enrolled`);
  }
  // ── Modules ────────────────────────────────────────────────────────────────
  createModule(dto) {
    return this.api.post("modules", dto);
  }
  updateModule(id, dto) {
    return this.api.put(`modules/${id}`, dto);
  }
  deleteModule(id) {
    return this.api.delete(`modules/${id}`);
  }
  reorderModules(courseId, orderedIds) {
    return this.api.patch(`modules/reorder?courseId=${courseId}`, orderedIds);
  }
  setModulePublished(moduleId, value) {
    return this.api.patch(`modules/${moduleId}/published?value=${value}`);
  }
  // ── Module items (Canvas-style ModuleItem) ─────────────────────────────────
  getModuleItem(id) {
    return this.api.get(`moduleitems/${id}`);
  }
  createModuleItem(dto) {
    return this.api.post("moduleitems", dto);
  }
  updateModuleItem(id, dto) {
    return this.api.put(`moduleitems/${id}`, dto);
  }
  deleteModuleItem(id) {
    return this.api.delete(`moduleitems/${id}`);
  }
  setModuleItemPublished(id, value) {
    return this.api.patch(`moduleitems/${id}/published?value=${value}`);
  }
  reorderModuleItems(moduleId, orderedIds) {
    return this.api.patch(`moduleitems/reorder?moduleId=${moduleId}`, orderedIds);
  }
  markModuleItemComplete(id, timeSpentMinutes = 0) {
    return this.api.post(`moduleitems/${id}/complete?timeSpentMinutes=${timeSpentMinutes}`, {});
  }
  // ── Pages ──────────────────────────────────────────────────────────────────
  getPages(courseId) {
    return this.api.get(`pages/course/${courseId}`);
  }
  getPage(id) {
    return this.api.get(`pages/${id}`);
  }
  createPage(dto) {
    return this.api.post("pages", dto);
  }
  updatePage(id, dto) {
    return this.api.put(`pages/${id}`, dto);
  }
  setPagePublished(id, value) {
    return this.api.patch(`pages/${id}/published?value=${value}`);
  }
  setPageAsFrontPage(id) {
    return this.api.patch(`pages/${id}/front-page`);
  }
  deletePage(id) {
    return this.api.delete(`pages/${id}`);
  }
  static \u0275fac = function CourseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CourseService, factory: _CourseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  CourseService
};
//# sourceMappingURL=chunk-7BXAFFWI.js.map
