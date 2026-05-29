import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-COCM6WHS.js";
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
  NgTemplateOutlet
} from "./chunk-5J6SOS3L.js";
import {
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/courses.ts
var _c0 = (a0) => ({ $implicit: a0, empty: "No published courses yet." });
var _c1 = (a0) => ({ $implicit: a0, empty: "No unpublished courses." });
var _c2 = (a0) => ({ $implicit: a0, empty: "No courses found" });
var _c3 = (a0) => ["/courses", a0];
var _forTrack0 = ($index, $item) => $item.id;
function CoursesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate = true);
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Course ");
    \u0275\u0275elementEnd();
  }
}
function CoursesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 7);
    \u0275\u0275elementEnd();
  }
}
function CoursesComponent_Conditional_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CoursesComponent_Conditional_5_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CoursesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 8)(1, "h2", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CoursesComponent_Conditional_5_ng_container_3_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "section", 8)(5, "h2", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CoursesComponent_Conditional_5_ng_container_7_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const grid_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Published Courses (", ctx_r1.published().length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", grid_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(6, _c0, ctx_r1.published()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Unpublished Courses (", ctx_r1.unpublished().length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", grid_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c1, ctx_r1.unpublished()));
  }
}
function CoursesComponent_Conditional_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CoursesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CoursesComponent_Conditional_6_ng_container_0_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const grid_r3 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", grid_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r1.allCourses()));
  }
}
function CoursesComponent_ng_template_7_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const c_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", c_r5.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", c_r5.title);
  }
}
function CoursesComponent_ng_template_7_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "menu_book");
    \u0275\u0275elementEnd();
  }
}
function CoursesComponent_ng_template_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, CoursesComponent_ng_template_7_For_2_Conditional_2_Template, 1, 2, "img", 15)(3, CoursesComponent_ng_template_7_For_2_Conditional_3_Template, 2, 0, "span", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c3, c_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r5.thumbnailUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", ctx_r1.statusClass(c_r5.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r5.moduleCount, " modules \xB7 ", c_r5.category ?? "General");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("by ", c_r5.createdBy);
  }
}
function CoursesComponent_ng_template_7_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 6);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const empty_r4 = \u0275\u0275nextContext().empty;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(empty_r4);
  }
}
function CoursesComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, CoursesComponent_ng_template_7_For_2_Template, 13, 12, "a", 12, _forTrack0, false, CoursesComponent_ng_template_7_ForEmpty_3_Template, 5, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const list_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(list_r6);
  }
}
function CoursesComponent_Conditional_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function CoursesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275listener("click.self", function CoursesComponent_Conditional_9_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate = false);
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "div", 20)(3, "h2");
    \u0275\u0275text(4, "New Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275conditionalCreate(8, CoursesComponent_Conditional_9_Conditional_8_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(9, "div", 24)(10, "label");
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesComponent_Conditional_9_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.title, $event) || (ctx_r1.form.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24)(14, "label");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 26);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesComponent_Conditional_9_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 24)(18, "label");
    \u0275\u0275text(19, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesComponent_Conditional_9_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.category, $event) || (ctx_r1.form.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 24)(22, "label");
    \u0275\u0275text(23, "Passing Score (%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function CoursesComponent_Conditional_9_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.passingScorePercent, $event) || (ctx_r1.form.passingScorePercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29)(26, "button", 30);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_9_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreate = false);
    });
    \u0275\u0275text(27, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 31);
    \u0275\u0275listener("click", function CoursesComponent_Conditional_9_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create());
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.error() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.passingScorePercent);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Creating\u2026" : "Create", " ");
  }
}
var CoursesComponent = class _CoursesComponent {
  auth = inject(AuthService);
  svc = inject(CourseService);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  showCreate = false;
  form = { title: "", description: "", category: "", passingScorePercent: 70 };
  // Non-learner roles see the Published / Unpublished split.
  splitView = this.auth.hasRole("PlatformAdmin", "Instructor", "Observer");
  allCourses = computed(() => this.result()?.items ?? [], ...ngDevMode ? [{ debugName: "allCourses" }] : []);
  published = computed(() => this.allCourses().filter((c) => c.status === "Published"), ...ngDevMode ? [{ debugName: "published" }] : []);
  unpublished = computed(() => this.allCourses().filter((c) => c.status !== "Published"), ...ngDevMode ? [{ debugName: "unpublished" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.getAll({ page: 1, pageSize: 100 }).subscribe({ next: (r) => {
      this.result.set(r);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  create() {
    this.error.set("");
    this.saving.set(true);
    this.svc.create(this.form).subscribe({
      next: () => {
        this.showCreate = false;
        this.saving.set(false);
        this.load();
      },
      error: (e) => {
        this.error.set(e.message);
        this.saving.set(false);
      }
    });
  }
  statusClass(s) {
    return s === "Published" ? "success" : s === "Draft" ? "gray" : "warning";
  }
  static \u0275fac = function CoursesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursesComponent, selectors: [["app-courses"]], decls: 10, vars: 3, consts: [["grid", ""], [1, "page-header"], [1, "btn", "btn-primary"], [1, "loading-spinner"], [1, "modal-overlay"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "spinner"], [1, "course-section"], [1, "course-section-title"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "course-grid"], [1, "course-card", 3, "routerLink"], [1, "empty-state", 2, "grid-column", "1/-1"], [1, "course-thumb"], [3, "src", "alt"], [1, "course-info"], [1, "by"], [1, "modal-overlay", 3, "click.self"], [1, "modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-group"], ["placeholder", "Course title", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Brief description\u2026", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Azure, Security", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1");
      \u0275\u0275text(2, "Courses");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, CoursesComponent_Conditional_3_Template, 4, 0, "button", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, CoursesComponent_Conditional_4_Template, 2, 0, "div", 3)(5, CoursesComponent_Conditional_5_Template, 8, 10)(6, CoursesComponent_Conditional_6_Template, 1, 4, "ng-container");
      \u0275\u0275template(7, CoursesComponent_ng_template_7_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(9, CoursesComponent_Conditional_9_Template, 30, 7, "div", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.hasRole("PlatformAdmin", "Instructor") ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 4 : ctx.splitView ? 5 : 6);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.showCreate ? 9 : -1);
    }
  }, dependencies: [RouterLink, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, NgTemplateOutlet], styles: ['\n\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1100px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-section[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.course-section[_ngcontent-%COMP%]   .course-section-title[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  color: var(--slate-900);\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.course-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-thumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.course-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 160px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 50%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.7;\n  transition: transform var(--t-base);\n}\n.course-info[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 4px 0 0;\n  color: var(--slate-900);\n}\n.course-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.45;\n}\n.course-info[_ngcontent-%COMP%]   .by[_ngcontent-%COMP%] {\n  color: var(--slate-400);\n  font-size: 11.5px;\n}\n.course-info[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=courses.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursesComponent, [{
    type: Component,
    args: [{ selector: "app-courses", standalone: true, imports: [RouterLink, FormsModule, NgTemplateOutlet], template: `
    <div class="page-header">
      <h1>Courses</h1>
      @if (auth.hasRole('PlatformAdmin', 'Instructor')) {
        <button class="btn btn-primary" (click)="showCreate = true">
          <span class="material-icons">add</span> New Course
        </button>
      }
    </div>

    @if (loading()) {
      <div class="loading-spinner"><div class="spinner"></div></div>
    } @else if (splitView) {
      <!-- Admin / Instructor / Observer: Canvas-style Published / Unpublished sections -->
      <section class="course-section">
        <h2 class="course-section-title">Published Courses ({{ published().length }})</h2>
        <ng-container *ngTemplateOutlet="grid; context: { $implicit: published(), empty: 'No published courses yet.' }" />
      </section>

      <section class="course-section">
        <h2 class="course-section-title">Unpublished Courses ({{ unpublished().length }})</h2>
        <ng-container *ngTemplateOutlet="grid; context: { $implicit: unpublished(), empty: 'No unpublished courses.' }" />
      </section>
    } @else {
      <!-- Learner: flat list -->
      <ng-container *ngTemplateOutlet="grid; context: { $implicit: allCourses(), empty: 'No courses found' }" />
    }

    <!-- Reusable course grid -->
    <ng-template #grid let-list let-empty="empty">
      <div class="course-grid">
        @for (c of list; track c.id) {
          <a [routerLink]="['/courses', c.id]" class="course-card">
            <div class="course-thumb">
              @if (c.thumbnailUrl) {
                <img [src]="c.thumbnailUrl" [alt]="c.title" />
              } @else {
                <span class="material-icons">menu_book</span>
              }
            </div>
            <div class="course-info">
              <span class="badge badge-{{ statusClass(c.status) }}">{{ c.status }}</span>
              <h3>{{ c.title }}</h3>
              <p>{{ c.moduleCount }} modules \xB7 {{ c.category ?? 'General' }}</p>
              <p class="by">by {{ c.createdBy }}</p>
            </div>
          </a>
        } @empty {
          <div class="empty-state" style="grid-column:1/-1;">
            <span class="material-icons">menu_book</span><p>{{ empty }}</p>
          </div>
        }
      </div>
    </ng-template>

    @if (showCreate) {
      <div class="modal-overlay" (click.self)="showCreate = false">
        <div class="modal">
          <div class="modal-header">
            <h2>New Course</h2>
            <button class="close-btn" (click)="showCreate = false">\u2715</button>
          </div>
          <div class="modal-body">
            @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }
            <div class="form-group"><label>Title</label>
              <input [(ngModel)]="form.title" placeholder="Course title" /></div>
            <div class="form-group"><label>Description</label>
              <textarea [(ngModel)]="form.description" rows="3" placeholder="Brief description\u2026"></textarea></div>
            <div class="form-group"><label>Category</label>
              <input [(ngModel)]="form.category" placeholder="e.g. Azure, Security" /></div>
            <div class="form-group"><label>Passing Score (%)</label>
              <input type="number" [(ngModel)]="form.passingScorePercent" min="0" max="100" /></div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="showCreate = false">Cancel</button>
            <button class="btn btn-primary" (click)="create()" [disabled]="saving()">
              {{ saving() ? 'Creating\u2026' : 'Create' }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ['/* src/app/features/courses/courses.scss */\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1100px) {\n  .course-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.course-section {\n  margin-bottom: 28px;\n}\n.course-section .course-section-title {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  color: var(--slate-900);\n  margin-bottom: 14px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid var(--border);\n}\n.course-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n}\n.course-card:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card:hover .course-thumb img {\n  transform: scale(1.04);\n}\n.course-card:hover .course-thumb .material-icons {\n  transform: scale(1.06);\n}\n.course-thumb {\n  position: relative;\n  height: 160px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 50%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb .material-icons {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.7;\n  transition: transform var(--t-base);\n}\n.course-info {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info h3 {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.35;\n  margin: 4px 0 0;\n  color: var(--slate-900);\n}\n.course-info p {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.45;\n}\n.course-info .by {\n  color: var(--slate-400);\n  font-size: 11.5px;\n}\n.course-info .badge {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=courses.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursesComponent, { className: "CoursesComponent", filePath: "src/app/features/courses/courses.ts", lineNumber: 99 });
})();
export {
  CoursesComponent
};
//# sourceMappingURL=chunk-SCE3WFVA.js.map
