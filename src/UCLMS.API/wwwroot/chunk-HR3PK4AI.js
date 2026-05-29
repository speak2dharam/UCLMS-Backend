import {
  GradebookService
} from "./chunk-M6GTA3KC.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-COCM6WHS.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/gradebook/gradebook.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.userId;
var _forTrack2 = ($index, $item) => $item.itemId;
function GradebookComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.title);
  }
}
function GradebookComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function GradebookComponent_Conditional_13_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "small", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(col_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", col_r2.type, " / ", col_r2.maxPoints, "pts");
  }
}
function GradebookComponent_Conditional_13_For_16_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2(" ", cell_r4.score, "/", cell_r4.maxPoints, " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", cell_r4.status === "Passed" ? "success" : cell_r4.status === "Graded" ? "info" : "gray"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r4.status);
  }
}
function GradebookComponent_Conditional_13_For_16_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function GradebookComponent_Conditional_13_For_16_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275conditionalCreate(1, GradebookComponent_Conditional_13_For_16_For_6_Conditional_1_Template, 3, 6)(2, GradebookComponent_Conditional_13_For_16_For_6_Conditional_2_Template, 2, 0, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(cell_r4.score !== null ? 1 : 2);
  }
}
function GradebookComponent_Conditional_13_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, GradebookComponent_Conditional_13_For_16_For_6_Template, 3, 1, "td", null, _forTrack2);
    \u0275\u0275elementStart(7, "td")(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.learnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.orgName ?? "\u2014");
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r5.grades);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.totalScore ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", row_r5.completionStatus === "Completed" ? "success" : row_r5.completionStatus === "InProgress" ? "info" : "gray"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.completionStatus);
  }
}
function GradebookComponent_Conditional_13_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4, "grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No enrollments");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 2 + (((tmp_2_0 = ctx_r2.gradebook()) == null ? null : tmp_2_0.columns == null ? null : tmp_2_0.columns.length) ?? 0) + 2);
  }
}
function GradebookComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 9)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Learner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, GradebookComponent_Conditional_13_For_9_Template, 5, 3, "th", null, _forTrack0);
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, GradebookComponent_Conditional_13_For_16_Template, 13, 7, "tr", null, _forTrack1, false, GradebookComponent_Conditional_13_ForEmpty_17_Template, 7, 1, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.gradebook().columns);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.gradebook().rows);
  }
}
var GradebookComponent = class _GradebookComponent {
  svc = inject(GradebookService);
  courseSvc = inject(CourseService);
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : []);
  gradebook = signal(null, ...ngDevMode ? [{ debugName: "gradebook" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  selectedCourseId = "";
  ngOnInit() {
    this.courseSvc.getAll({ pageSize: 100 }).subscribe((r) => this.courses.set(r.items));
  }
  loadGradebook() {
    if (!this.selectedCourseId)
      return;
    this.loading.set(true);
    this.svc.getCourseGradebook(+this.selectedCourseId).subscribe({
      next: (g) => {
        this.gradebook.set(g);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function GradebookComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GradebookComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GradebookComponent, selectors: [["app-gradebook"]], decls: 14, vars: 3, consts: [[1, "page-header"], [1, "card", 2, "margin-bottom", "16px", "padding", "16px"], [1, "form-group", 2, "margin", "0", "max-width", "320px"], [3, "ngModelChange", "change", "ngModel"], ["value", ""], [3, "value"], [1, "loading-spinner"], [1, "card", 2, "padding", "0", "overflow", "auto"], [1, "spinner"], [1, "data-table", 2, "min-width", "800px"], [2, "font-weight", "400", "color", "#94a3b8"], [2, "color", "#94a3b8"], [2, "font-size", "10px"], [1, "empty-state"], [1, "material-icons"]], template: function GradebookComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Gradebook");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "label");
      \u0275\u0275text(6, "Select Course");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "select", 3);
      \u0275\u0275twoWayListener("ngModelChange", function GradebookComponent_Template_select_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCourseId, $event) || (ctx.selectedCourseId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function GradebookComponent_Template_select_change_7_listener() {
        return ctx.loadGradebook();
      });
      \u0275\u0275elementStart(8, "option", 4);
      \u0275\u0275text(9, "\u2014 Choose a course \u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(10, GradebookComponent_For_11_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, GradebookComponent_Conditional_12_Template, 2, 0, "div", 6);
      \u0275\u0275conditionalCreate(13, GradebookComponent_Conditional_13_Template, 18, 1, "div", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCourseId);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.courses());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.gradebook() ? 13 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GradebookComponent, [{
    type: Component,
    args: [{
      selector: "app-gradebook",
      standalone: true,
      imports: [FormsModule],
      template: `
    <div class="page-header"><h1>Gradebook</h1></div>

    <div class="card" style="margin-bottom:16px;padding:16px;">
      <div class="form-group" style="margin:0;max-width:320px;">
        <label>Select Course</label>
        <select [(ngModel)]="selectedCourseId" (change)="loadGradebook()">
          <option value="">\u2014 Choose a course \u2014</option>
          @for (c of courses(); track c.id) { <option [value]="c.id">{{ c.title }}</option> }
        </select>
      </div>
    </div>

    @if (loading()) { <div class="loading-spinner"><div class="spinner"></div></div> }

    @if (gradebook()) {
      <div class="card" style="padding:0;overflow:auto;">
        <table class="data-table" style="min-width:800px;">
          <thead>
            <tr>
              <th>Learner</th><th>Organization</th>
              @for (col of gradebook()!.columns; track col.id) {
                <th>{{ col.title }}<br><small style="font-weight:400;color:#94a3b8;">{{ col.type }} / {{ col.maxPoints }}pts</small></th>
              }
              <th>Total</th><th>Status</th>
            </tr>
          </thead>
          <tbody>
            @for (row of gradebook()!.rows; track row.userId) {
              <tr>
                <td>{{ row.learnerName }}</td>
                <td>{{ row.orgName ?? '\u2014' }}</td>
                @for (cell of row.grades; track cell.itemId) {
                  <td>
                    @if (cell.score !== null) {
                      {{ cell.score }}/{{ cell.maxPoints }}
                      <span class="badge badge-{{ cell.status === 'Passed' ? 'success' : cell.status === 'Graded' ? 'info' : 'gray' }}" style="font-size:10px;">{{ cell.status }}</span>
                    } @else {
                      <span style="color:#94a3b8;">\u2014</span>
                    }
                  </td>
                }
                <td><strong>{{ row.totalScore ?? '\u2014' }}</strong></td>
                <td><span class="badge badge-{{ row.completionStatus === 'Completed' ? 'success' : row.completionStatus === 'InProgress' ? 'info' : 'gray' }}">{{ row.completionStatus }}</span></td>
              </tr>
            } @empty {
              <tr><td [attr.colspan]="2 + (gradebook()?.columns?.length ?? 0) + 2">
                <div class="empty-state"><span class="material-icons">grading</span><p>No enrollments</p></div>
              </td></tr>
            }
          </tbody>
        </table>
      </div>
    }
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GradebookComponent, { className: "GradebookComponent", filePath: "src/app/features/gradebook/gradebook.ts", lineNumber: 68 });
})();
export {
  GradebookComponent
};
//# sourceMappingURL=chunk-HR3PK4AI.js.map
