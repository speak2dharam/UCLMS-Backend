import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
import {
  ModuleNavBarComponent
} from "./chunk-G6NNV2XC.js";
import "./chunk-H2K47RRV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-COCM6WHS.js";
import {
  CourseNavComponent
} from "./chunk-H3CFDKZT.js";
import {
  QuizService
} from "./chunk-7E7XGFM5.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
import "./chunk-54EDBHFN.js";
import "./chunk-7BXAFFWI.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/quizzes/quiz-detail.ts
var _c0 = (a0) => ["/courses", a0, "quizzes"];
var _c1 = (a0) => ["/quiz", a0, "edit"];
var _c2 = (a0) => ["/quiz", a0];
var _c3 = (a0) => ({ itemId: a0 });
function QuizDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function QuizDetailComponent_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function QuizDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "h1", 8);
    \u0275\u0275text(2, "New Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, QuizDetailComponent_Conditional_8_Conditional_3_Template, 2, 1, "div", 9);
    \u0275\u0275elementStart(4, "div", 10)(5, "label");
    \u0275\u0275text(6, "Quiz title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "label");
    \u0275\u0275text(10, "Description (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 13)(13, "div", 10)(14, "label");
    \u0275\u0275text(15, "Time limit (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.timeLimitMinutes, $event) || (ctx_r1.form.timeLimitMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "label");
    \u0275\u0275text(19, "Max attempts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxAttempts, $event) || (ctx_r1.form.maxAttempts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 10)(22, "label");
    \u0275\u0275text(23, "Passing %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.passingScorePercent, $event) || (ctx_r1.form.passingScorePercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 10)(26, "label");
    \u0275\u0275text(27, "Max points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxPoints, $event) || (ctx_r1.form.maxPoints = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 18)(30, "label")(31, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.randomizeQuestions, $event) || (ctx_r1.form.randomizeQuestions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Randomize questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "label")(34, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function QuizDetailComponent_Conditional_8_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isRequired, $event) || (ctx_r1.form.isRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Required for completion");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "p", 20);
    \u0275\u0275text(37, "After creating the quiz you'll be taken to the question editor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 21)(39, "a", 22);
    \u0275\u0275text(40, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 23);
    \u0275\u0275listener("click", function QuizDetailComponent_Conditional_8_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.error() ? 3 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.timeLimitMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxAttempts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.passingScorePercent);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxPoints);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.randomizeQuestions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isRequired);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(12, _c0, ctx_r1.courseId()));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving() || !ctx_r1.form.title.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Creating\u2026" : "Create & Add Questions", " ");
  }
}
function QuizDetailComponent_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r3.description);
  }
}
function QuizDetailComponent_Conditional_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "a", 33)(2, "span", 34);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Edit questions & settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 35);
    \u0275\u0275listener("click", function QuizDetailComponent_Conditional_9_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const q_r3 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(q_r3));
    });
    \u0275\u0275text(6, "Delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, q_r3.id));
  }
}
function QuizDetailComponent_Conditional_9_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "a", 36)(2, "span", 37);
    \u0275\u0275text(3, "play_arrow");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Take Quiz ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, q_r3.id))("queryParams", \u0275\u0275pureFunction1(4, _c3, ctx_r1.itemId()));
  }
}
function QuizDetailComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 24)(2, "div")(3, "h1", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, QuizDetailComponent_Conditional_9_Conditional_5_Template, 2, 1, "p", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, QuizDetailComponent_Conditional_9_Conditional_6_Template, 7, 3, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 30);
    \u0275\u0275text(12, "Questions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 28)(14, "span", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 30);
    \u0275\u0275text(17, "Max points");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 28)(19, "span", 29);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 30);
    \u0275\u0275text(22, "To pass");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 28)(24, "span", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 30);
    \u0275\u0275text(27, "Attempts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 28)(29, "span", 29);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 30);
    \u0275\u0275text(32, "Time limit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(33, QuizDetailComponent_Conditional_9_Conditional_33_Template, 5, 6, "div", 31);
    \u0275\u0275element(34, "app-module-nav-bar", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r3.description ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(q_r3.questions.length);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r3.maxPoints);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", q_r3.passingScorePercent, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r3.maxAttempts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r3.timeLimitMinutes ?? "\u221E");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.isAdmin() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("courseId", ctx_r1.courseId())("itemId", ctx_r1.itemId());
  }
}
var QuizDetailComponent = class _QuizDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  qSvc = inject(QuizService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  courseId = signal(0, ...ngDevMode ? [{ debugName: "courseId" }] : []);
  quiz = signal(null, ...ngDevMode ? [{ debugName: "quiz" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isNew = signal(false, ...ngDevMode ? [{ debugName: "isNew" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  /** Module item id when opened via a module (enables the Prev/Next bar). */
  itemId = signal(null, ...ngDevMode ? [{ debugName: "itemId" }] : []);
  isAdmin = computed(() => this.auth.hasRole("PlatformAdmin", "Instructor"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  form = {
    title: "",
    description: "",
    timeLimitMinutes: null,
    maxAttempts: 3,
    passingScorePercent: 70,
    randomizeQuestions: false,
    isRequired: true,
    maxPoints: 100
  };
  ngOnInit() {
    this.route.paramMap.subscribe((pm) => this.loadFromRoute(pm));
  }
  loadFromRoute(pm) {
    this.courseId.set(Number(pm.get("courseId")));
    const qp = this.route.snapshot.queryParamMap;
    const itemId = qp.get("itemId");
    this.itemId.set(itemId !== null ? Number(itemId) : null);
    const quizId = pm.get("quizId");
    if (quizId === "new") {
      this.isNew.set(true);
      this.quiz.set(null);
      this.loading.set(false);
    } else {
      this.isNew.set(false);
      this.loading.set(true);
      this.qSvc.getById(Number(quizId)).subscribe({
        next: (q) => {
          this.quiz.set(q);
          this.loading.set(false);
        },
        error: (e) => {
          this.loading.set(false);
          this.toast.error(`Failed to open quiz: ${e.message}`);
          this.router.navigate(["/courses", this.courseId(), "quizzes"]);
        }
      });
    }
  }
  create() {
    this.saving.set(true);
    this.error.set("");
    const dto = {
      courseId: this.courseId(),
      title: this.form.title.trim(),
      description: this.form.description.trim() || void 0,
      timeLimitMinutes: this.form.timeLimitMinutes ?? void 0,
      maxAttempts: this.form.maxAttempts,
      passingScorePercent: this.form.passingScorePercent,
      randomizeQuestions: this.form.randomizeQuestions,
      isRequired: this.form.isRequired,
      maxPoints: this.form.maxPoints
    };
    this.qSvc.create(dto).subscribe({
      next: (created) => {
        this.saving.set(false);
        this.router.navigate(["/quiz", created.id, "edit"]);
      },
      error: (e) => {
        this.saving.set(false);
        this.error.set(e.message);
      }
    });
  }
  remove(q) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Delete quiz",
        message: `Delete "${q.title}" and all its questions? Existing attempts will be preserved.`,
        confirmLabel: "Delete",
        danger: true
      });
      if (!ok)
        return;
      this.qSvc.delete(q.id).subscribe({
        next: () => {
          this.toast.success("Quiz deleted.");
          this.router.navigate(["/courses", this.courseId(), "quizzes"]);
        },
        error: (e) => this.toast.error(`Failed to delete quiz: ${e.message}`)
      });
    });
  }
  static \u0275fac = function QuizDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizDetailComponent, selectors: [["app-quiz-detail"]], decls: 10, vars: 6, consts: [[1, "course-layout"], [3, "courseId", "active"], [1, "course-main"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [1, "loading-spinner"], [1, "card"], [1, "spinner"], [1, "qd-title"], [1, "alert", "alert-danger"], [1, "form-group"], ["placeholder", "e.g. Module 1 Knowledge Check", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "What this quiz covers", 3, "ngModelChange", "ngModel"], [1, "qd-grid"], ["type", "number", "min", "0", "placeholder", "No limit", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.5", 3, "ngModelChange", "ngModel"], [1, "qd-checks"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "hint"], [1, "qd-actions"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "qd-view-head"], [1, "qd-desc"], [1, "qd-head-actions"], [1, "qd-stats"], [1, "qd-stat"], [1, "qd-stat-val"], [1, "qd-stat-lbl"], [1, "qd-take"], [3, "courseId", "itemId"], [1, "btn", "btn-secondary", "btn-sm", 3, "routerLink"], [1, "material-icons", 2, "font-size", "16px"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "material-icons", 2, "font-size", "18px"]], template: function QuizDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-course-nav", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Back to quizzes ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, QuizDetailComponent_Conditional_7_Template, 2, 0, "div", 5)(8, QuizDetailComponent_Conditional_8_Template, 43, 14, "div", 6)(9, QuizDetailComponent_Conditional_9_Template, 35, 11, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275property("courseId", ctx.courseId())("active", ctx.isAdmin() ? "quizzes" : "modules");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx.courseId()));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.isNew() ? 8 : (tmp_3_0 = ctx.quiz()) ? 9 : -1, tmp_3_0);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, CourseNavComponent, ModuleNavBarComponent], styles: ['\n\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.qd-title[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n  margin-bottom: 6px;\n}\n.qd-desc[_ngcontent-%COMP%] {\n  color: var(--slate-600);\n  font-size: 14px;\n}\n.qd-view-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n.qd-head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.qd-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.qd-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 88px;\n  padding: 14px 16px;\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.qd-stat[_ngcontent-%COMP%]   .qd-stat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--slate-900);\n}\n.qd-stat[_ngcontent-%COMP%]   .qd-stat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.qd-take[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n.qd-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .qd-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.qd-checks[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-top: 8px;\n}\n.qd-checks[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 16px;\n}\n.qd-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n/*# sourceMappingURL=quiz-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizDetailComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-detail", standalone: true, imports: [RouterLink, FormsModule, CourseNavComponent, ModuleNavBarComponent], template: `
    <div class="course-layout">
      <app-course-nav [courseId]="courseId()" [active]="isAdmin() ? 'quizzes' : 'modules'" />

      <main class="course-main">
        <a [routerLink]="['/courses', courseId(), 'quizzes']" class="back-link">
          <span class="material-icons">arrow_back</span> Back to quizzes
        </a>

        @if (loading()) {
          <div class="loading-spinner"><div class="spinner"></div></div>
        } @else if (isNew()) {
          <!-- \u2500\u2500\u2500\u2500\u2500 CREATE \u2500\u2500\u2500\u2500\u2500 -->
          <div class="card">
            <h1 class="qd-title">New Quiz</h1>
            @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }

            <div class="form-group">
              <label>Quiz title</label>
              <input [(ngModel)]="form.title" placeholder="e.g. Module 1 Knowledge Check" />
            </div>
            <div class="form-group">
              <label>Description (optional)</label>
              <textarea [(ngModel)]="form.description" rows="2" placeholder="What this quiz covers"></textarea>
            </div>
            <div class="qd-grid">
              <div class="form-group">
                <label>Time limit (min)</label>
                <input type="number" [(ngModel)]="form.timeLimitMinutes" min="0" placeholder="No limit" />
              </div>
              <div class="form-group">
                <label>Max attempts</label>
                <input type="number" [(ngModel)]="form.maxAttempts" min="1" />
              </div>
              <div class="form-group">
                <label>Passing %</label>
                <input type="number" [(ngModel)]="form.passingScorePercent" min="0" max="100" />
              </div>
              <div class="form-group">
                <label>Max points</label>
                <input type="number" [(ngModel)]="form.maxPoints" min="0" step="0.5" />
              </div>
            </div>
            <div class="qd-checks">
              <label><input type="checkbox" [(ngModel)]="form.randomizeQuestions" /> Randomize questions</label>
              <label><input type="checkbox" [(ngModel)]="form.isRequired" /> Required for completion</label>
            </div>
            <p class="hint">After creating the quiz you'll be taken to the question editor.</p>

            <div class="qd-actions">
              <a class="btn btn-secondary" [routerLink]="['/courses', courseId(), 'quizzes']">Cancel</a>
              <button class="btn btn-primary" (click)="create()" [disabled]="saving() || !form.title.trim()">
                {{ saving() ? 'Creating\u2026' : 'Create & Add Questions' }}
              </button>
            </div>
          </div>
        } @else if (quiz(); as q) {
          <!-- \u2500\u2500\u2500\u2500\u2500 OVERVIEW \u2500\u2500\u2500\u2500\u2500 -->
          <div class="card">
            <div class="qd-view-head">
              <div>
                <h1 class="qd-title">{{ q.title }}</h1>
                @if (q.description) { <p class="qd-desc">{{ q.description }}</p> }
              </div>
              @if (isAdmin()) {
                <div class="qd-head-actions">
                  <a class="btn btn-secondary btn-sm" [routerLink]="['/quiz', q.id, 'edit']">
                    <span class="material-icons" style="font-size:16px;">edit</span> Edit questions & settings
                  </a>
                  <button class="btn btn-danger btn-sm" (click)="remove(q)">Delete</button>
                </div>
              }
            </div>

            <div class="qd-stats">
              <div class="qd-stat"><span class="qd-stat-val">{{ q.questions.length }}</span><span class="qd-stat-lbl">Questions</span></div>
              <div class="qd-stat"><span class="qd-stat-val">{{ q.maxPoints }}</span><span class="qd-stat-lbl">Max points</span></div>
              <div class="qd-stat"><span class="qd-stat-val">{{ q.passingScorePercent }}%</span><span class="qd-stat-lbl">To pass</span></div>
              <div class="qd-stat"><span class="qd-stat-val">{{ q.maxAttempts }}</span><span class="qd-stat-lbl">Attempts</span></div>
              <div class="qd-stat"><span class="qd-stat-val">{{ q.timeLimitMinutes ?? '\u221E' }}</span><span class="qd-stat-lbl">Time limit</span></div>
            </div>

            @if (!isAdmin()) {
              <div class="qd-take">
                <a class="btn btn-primary" [routerLink]="['/quiz', q.id]" [queryParams]="{ itemId: itemId() }">
                  <span class="material-icons" style="font-size:18px;">play_arrow</span> Take Quiz
                </a>
              </div>
            }

            <app-module-nav-bar [courseId]="courseId()" [itemId]="itemId()" />
          </div>
        }
      </main>
    </div>
  `, styles: ['/* src/app/features/courses/quizzes/quiz-detail.scss */\n.course-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link .material-icons {\n  font-size: 16px;\n}\n.back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.qd-title {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n  margin-bottom: 6px;\n}\n.qd-desc {\n  color: var(--slate-600);\n  font-size: 14px;\n}\n.qd-view-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n.qd-head-actions {\n  display: flex;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.qd-stats {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.qd-stat {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 88px;\n  padding: 14px 16px;\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.qd-stat .qd-stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--slate-900);\n}\n.qd-stat .qd-stat-lbl {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.qd-take {\n  margin-top: 22px;\n}\n.qd-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n}\n@media (max-width: 640px) {\n  .qd-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.qd-checks {\n  display: flex;\n  gap: 24px;\n  margin-top: 8px;\n}\n.qd-checks label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n.hint {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-top: 16px;\n}\n.qd-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--border);\n}\n/*# sourceMappingURL=quiz-detail.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizDetailComponent, { className: "QuizDetailComponent", filePath: "src/app/features/courses/quizzes/quiz-detail.ts", lineNumber: 130 });
})();
export {
  QuizDetailComponent
};
//# sourceMappingURL=chunk-K7TLTLI3.js.map
