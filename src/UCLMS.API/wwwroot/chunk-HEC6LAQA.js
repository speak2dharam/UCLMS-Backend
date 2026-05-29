import {
  GradebookService
} from "./chunk-M6GTA3KC.js";
import {
  CourseNavComponent
} from "./chunk-H3CFDKZT.js";
import "./chunk-7E7XGFM5.js";
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
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/grades/grades.ts
var _c0 = (a0) => ["/courses", a0];
function GradesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function GradesComponent_Conditional_8_Conditional_12_For_15_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const it_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", it_r1.score, " / ", it_r1.maxPoints, " ");
  }
}
function GradesComponent_Conditional_8_Conditional_12_For_15_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 / ", it_r1.maxPoints);
  }
}
function GradesComponent_Conditional_8_Conditional_12_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 16);
    \u0275\u0275conditionalCreate(7, GradesComponent_Conditional_8_Conditional_12_For_15_Conditional_7_Template, 1, 2)(8, GradesComponent_Conditional_8_Conditional_12_For_15_Conditional_8_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 19);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const it_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r1.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(it_r1.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(it_r1.score !== null ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(it_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(it_r1.gradedAt ? it_r1.gradedAt.slice(0, 10) : "\u2014");
  }
}
function GradesComponent_Conditional_8_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 14)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Item");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 16);
    \u0275\u0275text(8, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Graded");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, GradesComponent_Conditional_8_Conditional_12_For_15_Template, 13, 5, "tr", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275repeater(g_r2.items);
  }
}
function GradesComponent_Conditional_8_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 4);
    \u0275\u0275text(2, "grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No graded items yet. Scores will appear here as you complete quizzes and assignments.");
    \u0275\u0275elementEnd()();
  }
}
function GradesComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h1");
    \u0275\u0275text(2, "Grades");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Overall");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 12);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275conditionalCreate(12, GradesComponent_Conditional_8_Conditional_12_Template, 16, 0, "table", 14)(13, GradesComponent_Conditional_8_Conditional_13_Template, 5, 0, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r2 = ctx;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(g_r2.overallScore !== null ? g_r2.overallScore + "%" : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("badge-success", g_r2.completionStatus === "Completed")("badge-gray", g_r2.completionStatus !== "Completed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r2.completionStatus, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(g_r2.items.length ? 12 : 13);
  }
}
var GradesComponent = class _GradesComponent {
  route = inject(ActivatedRoute);
  gradebook = inject(GradebookService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  courseId = signal(0, ...ngDevMode ? [{ debugName: "courseId" }] : []);
  grades = signal(null, ...ngDevMode ? [{ debugName: "grades" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.courseId.set(Number(this.route.snapshot.paramMap.get("courseId")));
    const userId = this.auth.currentUser()?.userId;
    if (!userId) {
      this.loading.set(false);
      return;
    }
    this.gradebook.getLearnerGrades(this.courseId(), userId).subscribe({
      next: (g) => {
        this.grades.set(g);
        this.loading.set(false);
      },
      error: (e) => {
        this.loading.set(false);
        this.toast.error(`Failed to load grades: ${e.message}`);
      }
    });
  }
  static \u0275fac = function GradesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GradesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradesComponent, selectors: [["app-grades"]], decls: 9, vars: 5, consts: [[1, "course-layout"], ["active", "grades", 3, "courseId"], [1, "course-main"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [1, "loading-spinner"], [1, "spinner"], [1, "gr-head"], [1, "gr-summary"], [1, "gr-overall"], [1, "gr-overall-val"], [1, "gr-overall-lbl"], [1, "badge"], [1, "card"], [1, "gr-table"], [1, "empty-state"], [1, "gr-num"], [1, "gr-title"], [1, "badge", "badge-gray"], [1, "gr-muted"]], template: function GradesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-course-nav", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "a", 3)(4, "span", 4);
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Back to course ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, GradesComponent_Conditional_7_Template, 2, 0, "div", 5)(8, GradesComponent_Conditional_8_Template, 14, 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance();
      \u0275\u0275property("courseId", ctx.courseId());
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c0, ctx.courseId()));
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.loading() ? 7 : (tmp_2_0 = ctx.grades()) ? 8 : -1, tmp_2_0);
    }
  }, dependencies: [RouterLink, CourseNavComponent], styles: ['\n\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.gr-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.gr-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.gr-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.gr-overall[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.gr-overall[_ngcontent-%COMP%]   .gr-overall-val[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--brand-700);\n}\n.gr-overall[_ngcontent-%COMP%]   .gr-overall-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.gr-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.gr-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n}\n.gr-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  color: var(--slate-800);\n}\n.gr-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.gr-table[_ngcontent-%COMP%]   .gr-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--slate-900);\n}\n.gr-table[_ngcontent-%COMP%]   .gr-num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.gr-table[_ngcontent-%COMP%]   th.gr-num[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.gr-table[_ngcontent-%COMP%]   .gr-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=grades.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradesComponent, [{
    type: Component,
    args: [{ selector: "app-grades", standalone: true, imports: [RouterLink, CourseNavComponent], template: `
    <div class="course-layout">
      <app-course-nav [courseId]="courseId()" active="grades" />

      <main class="course-main">
        <a [routerLink]="['/courses', courseId()]" class="back-link">
          <span class="material-icons">arrow_back</span> Back to course
        </a>

        @if (loading()) {
          <div class="loading-spinner"><div class="spinner"></div></div>
        } @else if (grades(); as g) {
          <div class="gr-head">
            <h1>Grades</h1>
            <div class="gr-summary">
              <div class="gr-overall">
                <span class="gr-overall-val">{{ g.overallScore !== null ? (g.overallScore + '%') : '\u2014' }}</span>
                <span class="gr-overall-lbl">Overall</span>
              </div>
              <span class="badge" [class.badge-success]="g.completionStatus === 'Completed'"
                    [class.badge-gray]="g.completionStatus !== 'Completed'">
                {{ g.completionStatus }}
              </span>
            </div>
          </div>

          <div class="card">
            @if (g.items.length) {
              <table class="gr-table">
                <thead>
                  <tr><th>Item</th><th>Type</th><th class="gr-num">Score</th><th>Status</th><th>Graded</th></tr>
                </thead>
                <tbody>
                  @for (it of g.items; track $index) {
                    <tr>
                      <td class="gr-title">{{ it.title }}</td>
                      <td><span class="badge badge-gray">{{ it.type }}</span></td>
                      <td class="gr-num">
                        @if (it.score !== null) { {{ it.score }} / {{ it.maxPoints }} }
                        @else { <span class="gr-muted">\u2014 / {{ it.maxPoints }}</span> }
                      </td>
                      <td>{{ it.status }}</td>
                      <td class="gr-muted">{{ it.gradedAt ? it.gradedAt.slice(0, 10) : '\u2014' }}</td>
                    </tr>
                  }
                </tbody>
              </table>
            } @else {
              <div class="empty-state"><span class="material-icons">grading</span>
                <p>No graded items yet. Scores will appear here as you complete quizzes and assignments.</p>
              </div>
            }
          </div>
        }
      </main>
    </div>
  `, styles: ['/* src/app/features/courses/grades/grades.scss */\n.course-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  min-width: 0;\n}\n.back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.back-link .material-icons {\n  font-size: 16px;\n}\n.back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.gr-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.gr-head h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.gr-summary {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.gr-overall {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.gr-overall .gr-overall-val {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--brand-700);\n}\n.gr-overall .gr-overall-lbl {\n  font-size: 11px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.gr-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.gr-table th {\n  text-align: left;\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border);\n}\n.gr-table td {\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--border);\n  color: var(--slate-800);\n}\n.gr-table tr:last-child td {\n  border-bottom: none;\n}\n.gr-table .gr-title {\n  font-weight: 500;\n  color: var(--slate-900);\n}\n.gr-table .gr-num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.gr-table th.gr-num {\n  text-align: right;\n}\n.gr-table .gr-muted {\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=grades.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradesComponent, { className: "GradesComponent", filePath: "src/app/features/courses/grades/grades.ts", lineNumber: 78 });
})();
export {
  GradesComponent
};
//# sourceMappingURL=chunk-HEC6LAQA.js.map
