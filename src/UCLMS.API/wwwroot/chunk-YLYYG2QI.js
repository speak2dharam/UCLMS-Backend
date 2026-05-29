import {
  ModuleNavBarComponent
} from "./chunk-G6NNV2XC.js";
import "./chunk-H2K47RRV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-COCM6WHS.js";
import {
  CourseNavComponent
} from "./chunk-H3CFDKZT.js";
import "./chunk-7E7XGFM5.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
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
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
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

// src/app/features/courses/assignments/assignment-detail.ts
var _c0 = (a0) => ["/courses", a0];
function AssignmentDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " \xB7 ");
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", a_r1.dueDate.slice(0, 10));
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xB7 ");
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Required");
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.instructions);
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "No instructions provided.");
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitError());
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Assignment submitted successfully!");
    \u0275\u0275elementEnd();
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "textarea", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_5_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.submissionText, $event) || (ctx_r1.submissionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const a_r1 = \u0275\u0275nextContext(2);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit(a_r1));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.submissionText);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting() || !ctx_r1.submissionText.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Submitting\u2026" : "Submit Assignment", " ");
  }
}
function AssignmentDetailComponent_Conditional_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h3");
    \u0275\u0275text(2, "Your submission");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275conditionalCreate(4, AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_4_Template, 2, 0, "div", 15)(5, AssignmentDetailComponent_Conditional_8_Conditional_10_Conditional_5_Template, 4, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.submitError() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitted() ? 4 : 5);
  }
}
function AssignmentDetailComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h1", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275conditionalCreate(4, AssignmentDetailComponent_Conditional_8_Conditional_4_Template, 3, 1);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, AssignmentDetailComponent_Conditional_8_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, AssignmentDetailComponent_Conditional_8_Conditional_8_Template, 2, 1, "div", 10)(9, AssignmentDetailComponent_Conditional_8_Conditional_9_Template, 2, 0, "p", 11);
    \u0275\u0275conditionalCreate(10, AssignmentDetailComponent_Conditional_8_Conditional_10_Template, 6, 2, "div", 12);
    \u0275\u0275element(11, "app-module-nav-bar", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(a_r1.dueDate ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", a_r1.maxPoints, " points");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r1.isRequired ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r1.instructions ? 8 : 9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isAdmin() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("courseId", ctx_r1.courseId())("itemId", ctx_r1.itemId());
  }
}
var AssignmentDetailComponent = class _AssignmentDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  aSvc = inject(AssignmentService);
  cSvc = inject(CourseService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  courseId = signal(0, ...ngDevMode ? [{ debugName: "courseId" }] : []);
  assignment = signal(null, ...ngDevMode ? [{ debugName: "assignment" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  itemId = signal(null, ...ngDevMode ? [{ debugName: "itemId" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  submitError = signal("", ...ngDevMode ? [{ debugName: "submitError" }] : []);
  isAdmin = computed(() => this.auth.hasRole("PlatformAdmin", "Instructor"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  submissionText = "";
  ngOnInit() {
    this.route.paramMap.subscribe((pm) => this.loadFromRoute(pm));
  }
  loadFromRoute(pm) {
    this.courseId.set(Number(pm.get("courseId")));
    const qp = this.route.snapshot.queryParamMap;
    const itemId = qp.get("itemId");
    this.itemId.set(itemId !== null ? Number(itemId) : null);
    this.submissionText = "";
    this.submitted.set(false);
    this.submitError.set("");
    this.loading.set(true);
    this.aSvc.getById(Number(pm.get("assignmentId"))).subscribe({
      next: (a) => {
        this.assignment.set(a);
        this.loading.set(false);
      },
      error: (e) => {
        this.loading.set(false);
        this.toast.error(`Failed to open assignment: ${e.message}`);
        this.router.navigate(["/courses", this.courseId()]);
      }
    });
  }
  submit(a) {
    this.submitting.set(true);
    this.submitError.set("");
    this.aSvc.submit(a.id, { textContent: this.submissionText }).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
        const itemId = this.itemId();
        if (itemId !== null)
          this.cSvc.markModuleItemComplete(itemId, 0).subscribe({ error: () => {
          } });
      },
      error: (e) => {
        this.submitting.set(false);
        this.submitError.set(e.message);
      }
    });
  }
  static \u0275fac = function AssignmentDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentDetailComponent, selectors: [["app-assignment-detail"]], decls: 9, vars: 6, consts: [[1, "course-layout"], [3, "courseId", "active"], [1, "course-main"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [1, "loading-spinner"], [1, "card"], [1, "spinner"], [1, "ad-title"], [1, "ad-meta"], [1, "ad-instructions"], [1, "ad-empty"], [1, "ad-submit"], [3, "courseId", "itemId"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "form-group"], ["rows", "8", "placeholder", "Type your answer here\u2026", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function AssignmentDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-course-nav", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Back to course ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, AssignmentDetailComponent_Conditional_7_Template, 2, 0, "div", 5)(8, AssignmentDetailComponent_Conditional_8_Template, 12, 8, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance();
      \u0275\u0275property("courseId", ctx.courseId())("active", ctx.isAdmin() ? "assignments" : "modules");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx.courseId()));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 7 : (tmp_3_0 = ctx.assignment()) ? 8 : -1, tmp_3_0);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CourseNavComponent, ModuleNavBarComponent], styles: ['\n\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.ad-title[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n  margin-bottom: 4px;\n}\n.ad-meta[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 18px;\n}\n.ad-instructions[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  line-height: 1.7;\n  font-size: 15px;\n  color: var(--slate-800);\n  padding: 14px 16px;\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.ad-empty[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.ad-submit[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.ad-submit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=assignment-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentDetailComponent, [{
    type: Component,
    args: [{ selector: "app-assignment-detail", standalone: true, imports: [RouterLink, FormsModule, CourseNavComponent, ModuleNavBarComponent], template: `
    <div class="course-layout">
      <app-course-nav [courseId]="courseId()" [active]="isAdmin() ? 'assignments' : 'modules'" />

      <main class="course-main">
        <a [routerLink]="['/courses', courseId()]" class="back-link">
          <span class="material-icons">arrow_back</span> Back to course
        </a>

        @if (loading()) {
          <div class="loading-spinner"><div class="spinner"></div></div>
        } @else if (assignment(); as a) {
          <div class="card">
            <h1 class="ad-title">{{ a.title }}</h1>
            <p class="ad-meta">
              @if (a.dueDate) { <span>Due {{ a.dueDate.slice(0, 10) }}</span> \xB7 }
              <span>{{ a.maxPoints }} points</span>
              @if (a.isRequired) { \xB7 <span>Required</span> }
            </p>

            @if (a.instructions) {
              <div class="ad-instructions">{{ a.instructions }}</div>
            } @else {
              <p class="ad-empty">No instructions provided.</p>
            }

            @if (!isAdmin()) {
              <div class="ad-submit">
                <h3>Your submission</h3>
                @if (submitError()) { <div class="alert alert-danger">{{ submitError() }}</div> }
                @if (submitted()) {
                  <div class="alert alert-success">Assignment submitted successfully!</div>
                } @else {
                  <div class="form-group">
                    <textarea [(ngModel)]="submissionText" rows="8" placeholder="Type your answer here\u2026"></textarea>
                  </div>
                  <button class="btn btn-primary" (click)="submit(a)"
                          [disabled]="submitting() || !submissionText.trim()">
                    {{ submitting() ? 'Submitting\u2026' : 'Submit Assignment' }}
                  </button>
                }
              </div>
            }

            <app-module-nav-bar [courseId]="courseId()" [itemId]="itemId()" />
          </div>
        }
      </main>
    </div>
  `, styles: ['/* src/app/features/courses/assignments/assignment-detail.scss */\n.course-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link .material-icons {\n  font-size: 16px;\n}\n.back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.ad-title {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n  margin-bottom: 4px;\n}\n.ad-meta {\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 18px;\n}\n.ad-instructions {\n  white-space: pre-wrap;\n  line-height: 1.7;\n  font-size: 15px;\n  color: var(--slate-800);\n  padding: 14px 16px;\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n}\n.ad-empty {\n  color: var(--text-muted);\n  font-size: 14px;\n}\n.ad-submit {\n  margin-top: 24px;\n}\n.ad-submit h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=assignment-detail.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentDetailComponent, { className: "AssignmentDetailComponent", filePath: "src/app/features/courses/assignments/assignment-detail.ts", lineNumber: 73 });
})();
export {
  AssignmentDetailComponent
};
//# sourceMappingURL=chunk-YLYYG2QI.js.map
