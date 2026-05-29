import {
  QuizService
} from "./chunk-7E7XGFM5.js";
import {
  AssignmentService
} from "./chunk-54EDBHFN.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import {
  Component,
  Input,
  catchError,
  computed,
  forkJoin,
  inject,
  input,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KOVPKQ3I.js";

// src/app/shared/course-nav/course-nav.ts
var _forTrack0 = ($index, $item) => $item.key;
function CourseNavComponent_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r1.count);
  }
}
function CourseNavComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CourseNavComponent_For_2_Conditional_5_Template, 2, 1, "span", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.active() === n_r1.key);
    \u0275\u0275property("routerLink", n_r1.link)("queryParams", n_r1.query);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(n_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(n_r1.count !== null ? 5 : -1);
  }
}
var CourseNavComponent = class _CourseNavComponent {
  cSvc = inject(CourseService);
  qSvc = inject(QuizService);
  aSvc = inject(AssignmentService);
  auth = inject(AuthService);
  courseId = input.required(...ngDevMode ? [{ debugName: "courseId" }] : []);
  active = input("home", ...ngDevMode ? [{ debugName: "active" }] : []);
  /** Optional — when provided the nav skips its own count fetch. */
  counts = input(null, ...ngDevMode ? [{ debugName: "counts" }] : []);
  fetched = signal(null, ...ngDevMode ? [{ debugName: "fetched" }] : []);
  isAdmin = this.auth.hasRole("PlatformAdmin", "Instructor");
  effective = computed(() => this.counts() ?? this.fetched(), ...ngDevMode ? [{ debugName: "effective" }] : []);
  items = computed(() => {
    const id = this.courseId();
    const c = this.effective();
    const base = ["/courses", id];
    if (!this.isAdmin) {
      return [
        { key: "home", label: "Home", icon: "home", count: null, link: [...base], query: {} },
        { key: "modules", label: "Modules", icon: "view_module", count: c?.modules ?? null, link: [...base], query: { section: "modules" } },
        { key: "grades", label: "Grades", icon: "grading", count: null, link: [...base, "grades"], query: {} },
        { key: "syllabus", label: "Syllabus", icon: "menu_book", count: null, link: [...base], query: { section: "syllabus" } }
      ];
    }
    return [
      { key: "home", label: "Home", icon: "home", count: null, link: [...base], query: {} },
      { key: "modules", label: "Modules", icon: "view_module", count: c?.modules ?? null, link: [...base], query: { section: "modules" } },
      { key: "pages", label: "Pages", icon: "description", count: c?.pages ?? null, link: [...base, "pages"], query: {} },
      { key: "quizzes", label: "Quizzes", icon: "quiz", count: c?.quizzes ?? null, link: [...base, "quizzes"], query: {} },
      { key: "assignments", label: "Assignments", icon: "assignment", count: c?.assignments ?? null, link: [...base], query: { section: "assignments" } },
      { key: "people", label: "People", icon: "group", count: c?.people ?? null, link: [...base], query: { section: "people" } },
      { key: "syllabus", label: "Syllabus", icon: "menu_book", count: null, link: [...base], query: { section: "syllabus" } }
    ];
  }, ...ngDevMode ? [{ debugName: "items" }] : []);
  ngOnInit() {
    if (!this.counts())
      this.fetchCounts();
  }
  fetchCounts() {
    const id = this.courseId();
    forkJoin({
      course: this.cSvc.getById(id).pipe(catchError(() => of(null))),
      quizzes: this.qSvc.getByCourse(id).pipe(catchError(() => of([]))),
      assignments: this.aSvc.getByCourse(id).pipe(catchError(() => of([]))),
      enrollments: this.isAdmin ? this.cSvc.getEnrollments(id).pipe(catchError(() => of([]))) : of([])
    }).subscribe((r) => {
      this.fetched.set({
        modules: r.course?.modules.length ?? 0,
        pages: r.course?.pages.length ?? 0,
        quizzes: r.quizzes.length,
        assignments: r.assignments.length,
        people: r.enrollments.length
      });
    });
  }
  static \u0275fac = function CourseNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseNavComponent, selectors: [["app-course-nav"]], inputs: { courseId: [1, "courseId"], active: [1, "active"], counts: [1, "counts"] }, decls: 3, vars: 0, consts: [[1, "cd-nav"], [1, "cd-nav-item", 3, "active", "routerLink", "queryParams"], [1, "cd-nav-item", 3, "routerLink", "queryParams"], [1, "material-icons"], [1, "cd-nav-label"], [1, "cd-nav-count"]], template: function CourseNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0);
      \u0275\u0275repeaterCreate(1, CourseNavComponent_For_2_Template, 6, 7, "a", 1, _forTrack0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.items());
    }
  }, dependencies: [RouterLink], styles: ["\n\n.cd-nav[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  overflow: hidden;\n  position: sticky;\n  top: calc(var(--topbar-h) + 16px);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.cd-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  background: transparent;\n  border: none;\n  border-left: 3px solid transparent;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  text-align: left;\n  text-decoration: none;\n  transition: all var(--t-fast);\n}\n.cd-nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--slate-500);\n}\n.cd-nav-item[_ngcontent-%COMP%]   .cd-nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cd-nav-item[_ngcontent-%COMP%]   .cd-nav-count[_ngcontent-%COMP%] {\n  background: var(--slate-100);\n  color: var(--slate-600);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: var(--r-full);\n}\n.cd-nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n  text-decoration: none;\n}\n.cd-nav-item.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-left-color: var(--brand-600);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.cd-nav-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.cd-nav-item.active[_ngcontent-%COMP%]   .cd-nav-count[_ngcontent-%COMP%] {\n  background: var(--brand-100);\n  color: var(--brand-700);\n}\n/*# sourceMappingURL=course-nav.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseNavComponent, [{
    type: Component,
    args: [{ selector: "app-course-nav", standalone: true, imports: [RouterLink], template: `
    <aside class="cd-nav">
      @for (n of items(); track n.key) {
        <a class="cd-nav-item" [class.active]="active() === n.key"
           [routerLink]="n.link" [queryParams]="n.query">
          <span class="material-icons">{{ n.icon }}</span>
          <span class="cd-nav-label">{{ n.label }}</span>
          @if (n.count !== null) { <span class="cd-nav-count">{{ n.count }}</span> }
        </a>
      }
    </aside>
  `, styles: ["/* src/app/shared/course-nav/course-nav.scss */\n.cd-nav {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  overflow: hidden;\n  position: sticky;\n  top: calc(var(--topbar-h) + 16px);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.cd-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  background: transparent;\n  border: none;\n  border-left: 3px solid transparent;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  text-align: left;\n  text-decoration: none;\n  transition: all var(--t-fast);\n}\n.cd-nav-item .material-icons {\n  font-size: 18px;\n  color: var(--slate-500);\n}\n.cd-nav-item .cd-nav-label {\n  flex: 1;\n}\n.cd-nav-item .cd-nav-count {\n  background: var(--slate-100);\n  color: var(--slate-600);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: var(--r-full);\n}\n.cd-nav-item:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n  text-decoration: none;\n}\n.cd-nav-item.active {\n  background: var(--brand-50);\n  border-left-color: var(--brand-600);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.cd-nav-item.active .material-icons {\n  color: var(--brand-600);\n}\n.cd-nav-item.active .cd-nav-count {\n  background: var(--brand-100);\n  color: var(--brand-700);\n}\n/*# sourceMappingURL=course-nav.css.map */\n"] }]
  }], null, { courseId: [{ type: Input, args: [{ isSignal: true, alias: "courseId", required: true }] }], active: [{ type: Input, args: [{ isSignal: true, alias: "active", required: false }] }], counts: [{ type: Input, args: [{ isSignal: true, alias: "counts", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseNavComponent, { className: "CourseNavComponent", filePath: "src/app/shared/course-nav/course-nav.ts", lineNumber: 50 });
})();

export {
  CourseNavComponent
};
//# sourceMappingURL=chunk-H3CFDKZT.js.map
