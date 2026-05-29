import {
  adjacentItem,
  moduleItemRoute,
  navigableItems
} from "./chunk-H2K47RRV.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import {
  Router
} from "./chunk-HJDD2Z3G.js";
import {
  Component,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-KOVPKQ3I.js";

// src/app/shared/module-nav-bar/module-nav-bar.ts
var _c0 = ["*"];
function ModuleNavBarComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function ModuleNavBarComponent_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      const pv_r2 = \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.go(pv_r2));
    });
    \u0275\u0275domElementStart(1, "span", 7);
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Previous ");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("title", ctx.displayTitle);
  }
}
function ModuleNavBarComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 8);
    \u0275\u0275domListener("click", function ModuleNavBarComponent_Conditional_0_Conditional_6_Template_button_click_0_listener() {
      const nx_r5 = \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.go(nx_r5));
    });
    \u0275\u0275text(1, " Next ");
    \u0275\u0275domElementStart(2, "span", 7);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275domProperty("title", ctx.displayTitle);
  }
}
function ModuleNavBarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275conditionalCreate(2, ModuleNavBarComponent_Conditional_0_Conditional_2_Template, 4, 1, "button", 2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 3);
    \u0275\u0275projection(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 4);
    \u0275\u0275conditionalCreate(6, ModuleNavBarComponent_Conditional_0_Conditional_6_Template, 4, 1, "button", 5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_1_0 = ctx_r2.prev()) ? 2 : -1, tmp_1_0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.next()) ? 6 : -1, tmp_2_0);
  }
}
var ModuleNavBarComponent = class _ModuleNavBarComponent {
  cSvc = inject(CourseService);
  router = inject(Router);
  courseId = input.required(...ngDevMode ? [{ debugName: "courseId" }] : []);
  itemId = input(null, ...ngDevMode ? [{ debugName: "itemId" }] : []);
  prev = signal(null, ...ngDevMode ? [{ debugName: "prev" }] : []);
  next = signal(null, ...ngDevMode ? [{ debugName: "next" }] : []);
  constructor() {
    effect(() => {
      const id = this.itemId();
      const courseId = this.courseId();
      this.prev.set(null);
      this.next.set(null);
      if (id === null)
        return;
      this.cSvc.getById(courseId).subscribe({
        next: (course) => {
          const items = navigableItems(course);
          this.prev.set(adjacentItem(items, id, -1));
          this.next.set(adjacentItem(items, id, 1));
        },
        error: () => {
        }
      });
    });
  }
  go(item) {
    const t = moduleItemRoute(this.courseId(), item);
    this.router.navigate(t.link, { queryParams: t.query });
  }
  static \u0275fac = function ModuleNavBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleNavBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleNavBarComponent, selectors: [["app-module-nav-bar"]], inputs: { courseId: [1, "courseId"], itemId: [1, "itemId"] }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[1, "mnav"], [1, "mnav-side", "mnav-left"], [1, "btn", "btn-secondary", 3, "title"], [1, "mnav-mid"], [1, "mnav-side", "mnav-right"], [1, "btn", "btn-primary", 3, "title"], [1, "btn", "btn-secondary", 3, "click", "title"], [1, "material-icons", 2, "font-size", "18px"], [1, "btn", "btn-primary", 3, "click", "title"]], template: function ModuleNavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275conditionalCreate(0, ModuleNavBarComponent_Conditional_0_Template, 7, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.itemId() !== null ? 0 : -1);
    }
  }, styles: ["\n\n.mnav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 28px;\n  padding-top: 18px;\n  border-top: 1px solid var(--border);\n}\n.mnav[_ngcontent-%COMP%]   .mnav-side[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n}\n.mnav[_ngcontent-%COMP%]   .mnav-right[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.mnav[_ngcontent-%COMP%]   .mnav-mid[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.mnav[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=module-nav-bar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleNavBarComponent, [{
    type: Component,
    args: [{ selector: "app-module-nav-bar", standalone: true, template: `
    @if (itemId() !== null) {
      <div class="mnav">
        <div class="mnav-side mnav-left">
          @if (prev(); as pv) {
            <button class="btn btn-secondary" (click)="go(pv)" [title]="pv.displayTitle">
              <span class="material-icons" style="font-size:18px;">chevron_left</span> Previous
            </button>
          }
        </div>
        <div class="mnav-mid"><ng-content /></div>
        <div class="mnav-side mnav-right">
          @if (next(); as nx) {
            <button class="btn btn-primary" (click)="go(nx)" [title]="nx.displayTitle">
              Next <span class="material-icons" style="font-size:18px;">chevron_right</span>
            </button>
          }
        </div>
      </div>
    }
  `, styles: ["/* src/app/shared/module-nav-bar/module-nav-bar.scss */\n.mnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-top: 28px;\n  padding-top: 18px;\n  border-top: 1px solid var(--border);\n}\n.mnav .mnav-side {\n  flex: 1;\n  display: flex;\n}\n.mnav .mnav-right {\n  justify-content: flex-end;\n}\n.mnav .mnav-mid {\n  display: flex;\n  align-items: center;\n}\n.mnav .btn .material-icons {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=module-nav-bar.css.map */\n"] }]
  }], () => [], { courseId: [{ type: Input, args: [{ isSignal: true, alias: "courseId", required: true }] }], itemId: [{ type: Input, args: [{ isSignal: true, alias: "itemId", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleNavBarComponent, { className: "ModuleNavBarComponent", filePath: "src/app/shared/module-nav-bar/module-nav-bar.ts", lineNumber: 44 });
})();

export {
  ModuleNavBarComponent
};
//# sourceMappingURL=chunk-G6NNV2XC.js.map
