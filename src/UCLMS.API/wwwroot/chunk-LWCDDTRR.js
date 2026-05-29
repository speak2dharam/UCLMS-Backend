import {
  OrganizationService
} from "./chunk-JNHTNB5O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-COCM6WHS.js";
import {
  SlicePipe
} from "./chunk-5J6SOS3L.js";
import {
  Component,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/organizations/organizations.ts
var _forTrack0 = ($index, $item) => $item.id;
function OrganizationsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 6);
    \u0275\u0275elementEnd();
  }
}
function OrganizationsComponent_Conditional_9_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r2.userCount);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(o_r2.isActive ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", o_r2.isActive ? "Active" : "Inactive");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(10, 6, o_r2.createdAt, 0, 10));
  }
}
function OrganizationsComponent_Conditional_9_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12)(2, "div", 13)(3, "span", 2);
    \u0275\u0275text(4, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No organizations");
    \u0275\u0275elementEnd()()()();
  }
}
function OrganizationsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Created");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, OrganizationsComponent_Conditional_9_For_14_Template, 11, 10, "tr", null, _forTrack0, false, OrganizationsComponent_Conditional_9_ForEmpty_15_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(-1));
    });
    \u0275\u0275text(18, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 10);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changePage(1));
    });
    \u0275\u0275text(22, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275repeater((tmp_1_0 = ctx_r2.result()) == null ? null : tmp_1_0.items);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r2.page, " / ", ((tmp_3_0 = ctx_r2.result()) == null ? null : tmp_3_0.totalPages) ?? 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !((tmp_4_0 = ctx_r2.result()) == null ? null : tmp_4_0.hasNextPage));
  }
}
function OrganizationsComponent_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.error());
  }
}
function OrganizationsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click.self", function OrganizationsComponent_Conditional_10_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate = false);
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "h2");
    \u0275\u0275text(4, "New Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 17);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275conditionalCreate(8, OrganizationsComponent_Conditional_10_Conditional_8_Template, 2, 1, "div", 19);
    \u0275\u0275elementStart(9, "div", 20)(10, "label");
    \u0275\u0275text(11, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsComponent_Conditional_10_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.name, $event) || (ctx_r2.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 20)(14, "label");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 22);
    \u0275\u0275twoWayListener("ngModelChange", function OrganizationsComponent_Conditional_10_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.description, $event) || (ctx_r2.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 23)(18, "button", 24);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_10_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showCreate = false);
    });
    \u0275\u0275text(19, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 25);
    \u0275\u0275listener("click", function OrganizationsComponent_Conditional_10_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.create());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r2.error() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.saving() ? "Creating\u2026" : "Create", " ");
  }
}
var OrganizationsComponent = class _OrganizationsComponent {
  svc = inject(OrganizationService);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  showCreate = false;
  page = 1;
  form = { name: "", description: "" };
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.getAll(this.page).subscribe({
      next: (r) => {
        this.result.set(r);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  changePage(d) {
    this.page += d;
    this.load();
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
  static \u0275fac = function OrganizationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrganizationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrganizationsComponent, selectors: [["app-organizations"]], decls: 11, vars: 2, consts: [[1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "card", 2, "padding", "0"], [1, "loading-spinner"], [1, "modal-overlay"], [1, "spinner"], [1, "table-wrap"], [1, "data-table"], [1, "pagination"], [3, "click", "disabled"], [1, "badge"], ["colspan", "4"], [1, "empty-state"], [1, "modal-overlay", 3, "click.self"], [1, "modal"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-group"], ["placeholder", "Acme Corp", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Optional description\u2026", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function OrganizationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Organizations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function OrganizationsComponent_Template_button_click_3_listener() {
        return ctx.showCreate = true;
      });
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "add_business");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " New Organization ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275conditionalCreate(8, OrganizationsComponent_Conditional_8_Template, 2, 0, "div", 4)(9, OrganizationsComponent_Conditional_9_Template, 23, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, OrganizationsComponent_Conditional_10_Template, 22, 5, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.loading() ? 8 : 9);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCreate ? 10 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n}\n.user-row-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-row-name[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationsComponent, [{
    type: Component,
    args: [{ selector: "app-organizations", standalone: true, imports: [FormsModule, SlicePipe], template: `
    <div class="page-header">
      <h1>Organizations</h1>
      <button class="btn btn-primary" (click)="showCreate = true">
        <span class="material-icons">add_business</span> New Organization
      </button>
    </div>

    <div class="card" style="padding:0;">
      @if (loading()) {
        <div class="loading-spinner"><div class="spinner"></div></div>
      } @else {
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>Name</th><th>Users</th><th>Status</th><th>Created</th></tr></thead>
            <tbody>
              @for (o of result()?.items; track o.id) {
                <tr>
                  <td>{{ o.name }}</td>
                  <td>{{ o.userCount }}</td>
                  <td><span class="badge" [class]="o.isActive ? 'badge-success' : 'badge-danger'">
                    {{ o.isActive ? 'Active' : 'Inactive' }}</span></td>
                  <td>{{ o.createdAt | slice:0:10 }}</td>
                </tr>
              } @empty {
                <tr><td colspan="4">
                  <div class="empty-state"><span class="material-icons">business</span><p>No organizations</p></div>
                </td></tr>
              }
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <button [disabled]="page <= 1" (click)="changePage(-1)">\u2039</button>
          <span>{{ page }} / {{ result()?.totalPages ?? 1 }}</span>
          <button [disabled]="!result()?.hasNextPage" (click)="changePage(1)">\u203A</button>
        </div>
      }
    </div>

    @if (showCreate) {
      <div class="modal-overlay" (click.self)="showCreate = false">
        <div class="modal">
          <div class="modal-header">
            <h2>New Organization</h2>
            <button class="close-btn" (click)="showCreate = false">\u2715</button>
          </div>
          <div class="modal-body">
            @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }
            <div class="form-group"><label>Name</label>
              <input [(ngModel)]="form.name" placeholder="Acme Corp" /></div>
            <div class="form-group"><label>Description</label>
              <textarea [(ngModel)]="form.description" rows="3" placeholder="Optional description\u2026"></textarea></div>
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
  `, styles: ["/* src/app/features/users/users.scss */\n.pagination {\n  padding: 14px 18px;\n}\n.user-row-name {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-row-name .avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=users.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrganizationsComponent, { className: "OrganizationsComponent", filePath: "src/app/features/organizations/organizations.ts", lineNumber: 78 });
})();
export {
  OrganizationsComponent
};
//# sourceMappingURL=chunk-LWCDDTRR.js.map
