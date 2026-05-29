import {
  AssignmentService
} from "./chunk-54EDBHFN.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KOVPKQ3I.js";

// src/app/features/assignments/assignments.ts
var _forTrack0 = ($index, $item) => $item.id;
function AssignmentsComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2);
    \u0275\u0275domElement(1, "div", 6);
    \u0275\u0275domElementEnd();
  }
}
function AssignmentsComponent_Conditional_3_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td")(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.assignmentTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.learnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(s_r1.submittedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r1.status);
  }
}
function AssignmentsComponent_Conditional_3_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td", 8)(2, "div", 9)(3, "span", 10);
    \u0275\u0275text(4, "assignment_turned_in");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "Nothing pending");
    \u0275\u0275domElementEnd()()()();
  }
}
function AssignmentsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "h2", 1);
    \u0275\u0275text(1, "Pending Grading");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(2, AssignmentsComponent_Conditional_3_Conditional_2_Template, 2, 0, "div", 2);
    \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "table", 5)(6, "thead")(7, "tr")(8, "th");
    \u0275\u0275text(9, "Assignment");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "th");
    \u0275\u0275text(11, "Learner");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "th");
    \u0275\u0275text(13, "Submitted");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, AssignmentsComponent_Conditional_3_For_18_Template, 10, 4, "tr", null, _forTrack0, false, AssignmentsComponent_Conditional_3_ForEmpty_19_Template, 7, 0, "tr");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 2 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.pending());
  }
}
var AssignmentsComponent = class _AssignmentsComponent {
  auth = inject(AuthService);
  svc = inject(AssignmentService);
  pending = signal([], ...ngDevMode ? [{ debugName: "pending" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    if (this.auth.hasRole("PlatformAdmin", "Instructor")) {
      this.loading.set(true);
      this.svc.getPendingGrading().subscribe({
        next: (r) => {
          this.pending.set(r.items);
          this.loading.set(false);
        },
        error: () => this.loading.set(false)
      });
    }
  }
  formatDate(date) {
    return date.replace("T", " ").slice(0, 16);
  }
  static \u0275fac = function AssignmentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssignmentsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssignmentsComponent, selectors: [["app-assignments"]], decls: 4, vars: 1, consts: [[1, "page-header"], [2, "font-size", "16px", "font-weight", "600", "margin-bottom", "12px"], [1, "loading-spinner"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "data-table"], [1, "spinner"], [1, "badge", "badge-warning"], ["colspan", "4"], [1, "empty-state"], [1, "material-icons"]], template: function AssignmentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Assignments");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(3, AssignmentsComponent_Conditional_3_Template, 20, 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.hasRole("PlatformAdmin", "Instructor") ? 3 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignmentsComponent, [{
    type: Component,
    args: [{
      selector: "app-assignments",
      standalone: true,
      template: `
    <div class="page-header"><h1>Assignments</h1></div>

    @if (auth.hasRole('PlatformAdmin', 'Instructor')) {
      <h2 style="font-size:16px;font-weight:600;margin-bottom:12px;">Pending Grading</h2>
      @if (loading()) { <div class="loading-spinner"><div class="spinner"></div></div> }
      <div class="card" style="padding:0;">
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Assignment</th><th>Learner</th><th>Submitted</th><th>Status</th></tr></thead>
            <tbody>
              @for (s of pending(); track s.id) {
                <tr>
                  <td>{{ s.assignmentTitle }}</td>
                  <td>{{ s.learnerName }}</td>
                  <td>{{ formatDate(s.submittedAt) }}</td>
                  <td><span class="badge badge-warning">{{ s.status }}</span></td>
                </tr>
              } @empty {
                <tr><td colspan="4">
                  <div class="empty-state"><span class="material-icons">assignment_turned_in</span><p>Nothing pending</p></div>
                </td></tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssignmentsComponent, { className: "AssignmentsComponent", filePath: "src/app/features/assignments/assignments.ts", lineNumber: 39 });
})();
export {
  AssignmentsComponent
};
//# sourceMappingURL=chunk-G5CM3SD6.js.map
