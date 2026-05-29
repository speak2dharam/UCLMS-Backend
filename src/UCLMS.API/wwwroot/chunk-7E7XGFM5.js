import {
  ApiService,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/quiz.service.ts
var QuizService = class _QuizService {
  api;
  constructor(api) {
    this.api = api;
  }
  getById(id) {
    return this.api.get(`quizzes/${id}`);
  }
  create(dto) {
    return this.api.post("quizzes", dto);
  }
  update(id, dto) {
    return this.api.put(`quizzes/${id}`, dto);
  }
  delete(id) {
    return this.api.delete(`quizzes/${id}`);
  }
  addQuestion(quizId, dto) {
    return this.api.post(`quizzes/${quizId}/questions`, dto);
  }
  updateQuestion(quizId, questionId, dto) {
    return this.api.put(`quizzes/${quizId}/questions/${questionId}`, dto);
  }
  deleteQuestion(quizId, questionId) {
    return this.api.delete(`quizzes/${quizId}/questions/${questionId}`);
  }
  startAttempt(quizId) {
    return this.api.post(`quizzes/${quizId}/start`, {});
  }
  submitAttempt(attemptId, dto) {
    return this.api.post(`quizzes/attempts/${attemptId}/submit`, dto);
  }
  gradeShortAnswers(attemptId, dto) {
    return this.api.post(`quizzes/attempts/${attemptId}/grade-short-answers`, dto);
  }
  getByCourse(courseId) {
    return this.api.getPaged("quizzes", { courseId }).pipe(map((r) => r.items));
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

export {
  QuizService
};
//# sourceMappingURL=chunk-7E7XGFM5.js.map
