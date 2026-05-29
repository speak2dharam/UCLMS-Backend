import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/quizzes/course-quizzes.ts
var _c0 = (a0) => ["/courses", a0];
var _c1 = (a0) => ["/courses", a0, "quizzes", "new"];
var _c2 = (a0) => ["/quiz", a0, "edit"];
var _forTrack0 = ($index, $item) => $item.id;
function CourseQuizzesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Quiz ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseId()));
  }
}
function CourseQuizzesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function CourseQuizzesComponent_Conditional_13_For_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", q_r3.timeLimitMinutes, " min ");
  }
}
function CourseQuizzesComponent_Conditional_13_For_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("click", function CourseQuizzesComponent_Conditional_13_For_3_Conditional_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "a", 21)(2, "span", 5);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function CourseQuizzesComponent_Conditional_13_For_3_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const q_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(q_r3));
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const q_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c2, q_r3.id));
  }
}
function CourseQuizzesComponent_Conditional_13_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function CourseQuizzesComponent_Conditional_13_For_3_Template_div_click_0_listener() {
      const q_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(q_r3));
    });
    \u0275\u0275elementStart(1, "span", 16);
    \u0275\u0275text(2, "quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, CourseQuizzesComponent_Conditional_13_For_3_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, CourseQuizzesComponent_Conditional_13_For_3_Conditional_9_Template, 7, 3, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(q_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", q_r3.maxAttempts, " attempt(s) \xB7 ", q_r3.passingScorePercent, "% to pass ");
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r3.timeLimitMinutes ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 9 : -1);
  }
}
function CourseQuizzesComponent_Conditional_13_ForEmpty_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No quizzes yet. Create one and reference it from any module.");
    \u0275\u0275elementEnd();
  }
}
function CourseQuizzesComponent_Conditional_13_ForEmpty_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No quizzes available yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseQuizzesComponent_Conditional_13_ForEmpty_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 5);
    \u0275\u0275text(2, "quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseQuizzesComponent_Conditional_13_ForEmpty_4_Conditional_3_Template, 2, 0, "p")(4, CourseQuizzesComponent_Conditional_13_ForEmpty_4_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : 4);
  }
}
function CourseQuizzesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 12);
    \u0275\u0275repeaterCreate(2, CourseQuizzesComponent_Conditional_13_For_3_Template, 10, 5, "div", 13, _forTrack0, false, CourseQuizzesComponent_Conditional_13_ForEmpty_4_Template, 5, 1, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.quizzes());
  }
}
var CourseQuizzesComponent = class _CourseQuizzesComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  qSvc = inject(QuizService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  courseId = signal(0, ...ngDevMode ? [{ debugName: "courseId" }] : []);
  quizzes = signal([], ...ngDevMode ? [{ debugName: "quizzes" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isAdmin = computed(() => this.auth.hasRole("PlatformAdmin", "Instructor"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  ngOnInit() {
    this.courseId.set(Number(this.route.snapshot.paramMap.get("courseId")));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.qSvc.getByCourse(this.courseId()).subscribe({
      next: (list) => {
        this.quizzes.set(list);
        this.loading.set(false);
      },
      error: (e) => {
        this.loading.set(false);
        this.toast.error(`Failed to load quizzes: ${e.message}`);
      }
    });
  }
  open(q) {
    this.router.navigate(["/courses", this.courseId(), "quizzes", q.id]);
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
          this.load();
        },
        error: (e) => this.toast.error(`Failed to delete quiz: ${e.message}`)
      });
    });
  }
  static \u0275fac = function CourseQuizzesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseQuizzesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseQuizzesComponent, selectors: [["app-course-quizzes"]], decls: 14, vars: 6, consts: [[1, "course-layout"], ["active", "quizzes", 3, "courseId"], [1, "course-main"], [1, "cq-head"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [1, "cq-title-row"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "loading-spinner"], [1, "card"], [1, "material-icons", 2, "font-size", "16px"], [1, "spinner"], [1, "pages-list"], [1, "page-row"], [1, "empty-state"], [1, "page-row", 3, "click"], [1, "material-icons", "quiz-icon"], [1, "page-main"], [1, "page-meta"], [1, "page-actions"], [1, "page-actions", 3, "click"], ["title", "Edit questions & settings", 1, "icon-btn", 3, "routerLink"], ["title", "Delete quiz", 1, "icon-btn", "icon-btn-danger", 3, "click"]], template: function CourseQuizzesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-course-nav", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
      \u0275\u0275text(6, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Back to course ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "h1");
      \u0275\u0275text(10, "Quizzes");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, CourseQuizzesComponent_Conditional_11_Template, 4, 3, "a", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, CourseQuizzesComponent_Conditional_12_Template, 2, 0, "div", 8)(13, CourseQuizzesComponent_Conditional_13_Template, 5, 1, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("courseId", ctx.courseId());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx.courseId()));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isAdmin() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : 13);
    }
  }, dependencies: [RouterLink, CourseNavComponent], styles: ['\n\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.cq-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cq-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cq-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cq-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cq-head[_ngcontent-%COMP%]   .cq-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cq-head[_ngcontent-%COMP%]   .cq-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.pages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row[_ngcontent-%COMP%]   .quiz-icon[_ngcontent-%COMP%] {\n  color: var(--accent-600);\n}\n.page-row[_ngcontent-%COMP%]   .page-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row[_ngcontent-%COMP%]   .page-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row[_ngcontent-%COMP%]   .page-actions[_ngcontent-%COMP%] {\n  display: none;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%]:hover   .page-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=course-quizzes.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseQuizzesComponent, [{
    type: Component,
    args: [{ selector: "app-course-quizzes", standalone: true, imports: [RouterLink, CourseNavComponent], template: `
    <div class="course-layout">
      <app-course-nav [courseId]="courseId()" active="quizzes" />

      <main class="course-main">
        <div class="cq-head">
          <a [routerLink]="['/courses', courseId()]" class="back-link">
            <span class="material-icons">arrow_back</span> Back to course
          </a>
          <div class="cq-title-row">
            <h1>Quizzes</h1>
            @if (isAdmin()) {
              <a class="btn btn-primary btn-sm" [routerLink]="['/courses', courseId(), 'quizzes', 'new']">
                <span class="material-icons" style="font-size:16px;">add</span> New Quiz
              </a>
            }
          </div>
        </div>

        @if (loading()) {
          <div class="loading-spinner"><div class="spinner"></div></div>
        } @else {
          <div class="card">
            <div class="pages-list">
              @for (q of quizzes(); track q.id) {
                <div class="page-row" (click)="open(q)">
                  <span class="material-icons quiz-icon">quiz</span>
                  <div class="page-main">
                    <strong>{{ q.title }}</strong>
                    <span class="page-meta">
                      {{ q.maxAttempts }} attempt(s) \xB7 {{ q.passingScorePercent }}% to pass
                      @if (q.timeLimitMinutes) { \xB7 {{ q.timeLimitMinutes }} min }
                    </span>
                  </div>
                  @if (isAdmin()) {
                    <div class="page-actions" (click)="$event.stopPropagation()">
                      <a class="icon-btn" [routerLink]="['/quiz', q.id, 'edit']" title="Edit questions & settings">
                        <span class="material-icons">edit</span>
                      </a>
                      <button class="icon-btn icon-btn-danger" (click)="remove(q)" title="Delete quiz">
                        <span class="material-icons">delete</span>
                      </button>
                    </div>
                  }
                </div>
              } @empty {
                <div class="empty-state"><span class="material-icons">quiz</span>
                  @if (isAdmin()) {
                    <p>No quizzes yet. Create one and reference it from any module.</p>
                  } @else {
                    <p>No quizzes available yet.</p>
                  }
                </div>
              }
            </div>
          </div>
        }
      </main>
    </div>
  `, styles: ['/* src/app/features/courses/quizzes/course-quizzes.scss */\n.course-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.cq-head {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cq-head .back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cq-head .back-link .material-icons {\n  font-size: 16px;\n}\n.cq-head .back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cq-head .cq-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cq-head .cq-title-row h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.pages-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row > .material-icons {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row .quiz-icon {\n  color: var(--accent-600);\n}\n.page-row .page-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row strong {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row .page-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row .page-actions {\n  display: none;\n  gap: 2px;\n}\n.page-row:hover .page-actions {\n  display: flex;\n}\n/*# sourceMappingURL=course-quizzes.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseQuizzesComponent, { className: "CourseQuizzesComponent", filePath: "src/app/features/courses/quizzes/course-quizzes.ts", lineNumber: 80 });
})();
export {
  CourseQuizzesComponent
};
//# sourceMappingURL=chunk-OLEZZ6K7.js.map
