import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-COCM6WHS.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-HJDD2Z3G.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/auth/setup-password/setup-password.ts
function SetupPasswordComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function SetupPasswordComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Password set! Redirecting to login\u2026");
    \u0275\u0275elementEnd();
  }
}
function SetupPasswordComponent_Conditional_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Saving\u2026 ");
  }
}
function SetupPasswordComponent_Conditional_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Activate account ");
  }
}
function SetupPasswordComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function SetupPasswordComponent_Conditional_11_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "New password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function SetupPasswordComponent_Conditional_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.password, $event) || (ctx_r0.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7)(6, "label");
    \u0275\u0275text(7, "Confirm password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function SetupPasswordComponent_Conditional_11_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.confirm, $event) || (ctx_r0.confirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 10);
    \u0275\u0275conditionalCreate(10, SetupPasswordComponent_Conditional_11_Conditional_10_Template, 1, 0)(11, SetupPasswordComponent_Conditional_11_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.confirm);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 10 : 11);
  }
}
var SetupPasswordComponent = class _SetupPasswordComponent {
  password = "";
  confirm = "";
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  success = signal(false, ...ngDevMode ? [{ debugName: "success" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  token = "";
  auth = inject(AuthService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.token)
      this.error.set("Invalid or missing setup token.");
  }
  submit() {
    if (this.password !== this.confirm) {
      this.error.set("Passwords do not match.");
      return;
    }
    if (this.password.length < 8) {
      this.error.set("Password must be at least 8 characters.");
      return;
    }
    this.error.set("");
    this.loading.set(true);
    this.auth.setupPassword({ token: this.token, password: this.password, confirmPassword: this.confirm }).subscribe({
      next: () => {
        this.success.set(true);
        setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
      },
      error: (e) => {
        this.error.set(e.message);
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function SetupPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SetupPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetupPasswordComponent, selectors: [["app-setup-password"]], decls: 12, vars: 3, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-logo"], [1, "material-icons"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "ngSubmit"], [1, "form-group"], ["type", "password", "name", "pw", "required", "", "placeholder", "At least 8 characters", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirm", "required", "", "placeholder", "Repeat password", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", 2, "width", "100%", 3, "disabled"]], template: function SetupPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "lock_reset");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Set your password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Welcome! Create a password to activate your account.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, SetupPasswordComponent_Conditional_9_Template, 2, 1, "div", 4);
      \u0275\u0275conditionalCreate(10, SetupPasswordComponent_Conditional_10_Template, 2, 0, "div", 5);
      \u0275\u0275conditionalCreate(11, SetupPasswordComponent_Conditional_11_Template, 12, 4, "form");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.success() ? 11 : -1);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  background: var(--bg);\n}\n@media (max-width: 960px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #0b1027;\n  color: #e0e7ff;\n  padding: 56px 56px 40px;\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n}\n@media (max-width: 960px) {\n  .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-hero[_ngcontent-%COMP%]   .aurora-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n.auth-hero[_ngcontent-%COMP%]   .aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  filter: blur(80px);\n  opacity: 0.55;\n  border-radius: 50%;\n}\n.auth-hero[_ngcontent-%COMP%]   .a1[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  background: #6366f1;\n  top: -120px;\n  left: -120px;\n}\n.auth-hero[_ngcontent-%COMP%]   .a2[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background: #ec4899;\n  bottom: -100px;\n  right: -80px;\n  opacity: 0.45;\n}\n.auth-hero[_ngcontent-%COMP%]   .a3[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: #14b8a6;\n  top: 40%;\n  left: 35%;\n  opacity: 0.35;\n}\n.auth-hero[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 480px;\n}\n.hero-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.hero-brand[_ngcontent-%COMP%]   .brand-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #a855f7 100%);\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px -8px rgba(99, 102, 241, 0.6);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 64px;\n}\n.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 38px;\n  line-height: 1.1;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.03em;\n  margin-bottom: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.55;\n  color: #c7d2fe;\n  opacity: 0.85;\n  max-width: 440px;\n}\n.hero-features[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #a5b4fc;\n  font-size: 20px;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 13px;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.hero-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 32px;\n  font-size: 12px;\n  color: #64748b;\n}\n.auth-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 32px;\n  position: relative;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  padding: 36px;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n    border: none;\n    box-shadow: none;\n  }\n}\n.auth-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.auth-card-head[_ngcontent-%COMP%]   .auth-eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand-600);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.auth-card-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.auth-card-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.label-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--brand-600);\n  cursor: pointer;\n}\n.label-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-700);\n  text-decoration: underline;\n}\n.pwd-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: var(--slate-400);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color var(--t-fast), background var(--t-fast);\n}\n.pwd-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pwd-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--slate-700);\n  background: var(--slate-100);\n}\n.remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--slate-600);\n  margin: 4px 0 22px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  padding: 12px 14px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.auth-help[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--brand-500);\n}\n.auth-trust[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 28px;\n}\n.auth-trust[_ngcontent-%COMP%]   .trust-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n}\n.auth-trust[_ngcontent-%COMP%]   .trust-pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--success-600);\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-setup-password", standalone: true, imports: [FormsModule], template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-logo">
          <span class="material-icons">lock_reset</span>
          <h1>Set your password</h1>
          <p>Welcome! Create a password to activate your account.</p>
        </div>

        @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }
        @if (success()) { <div class="alert alert-success">Password set! Redirecting to login\u2026</div> }

        @if (!success()) {
          <form (ngSubmit)="submit()">
            <div class="form-group">
              <label>New password</label>
              <input type="password" [(ngModel)]="password" name="pw" required
                     placeholder="At least 8 characters" />
            </div>
            <div class="form-group">
              <label>Confirm password</label>
              <input type="password" [(ngModel)]="confirm" name="confirm" required
                     placeholder="Repeat password" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;" [disabled]="loading()">
              @if (loading()) { Saving\u2026 } @else { Activate account }
            </button>
          </form>
        }
      </div>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/auth/login/login.scss */\n.auth-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  background: var(--bg);\n}\n@media (max-width: 960px) {\n  .auth-page {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-hero {\n  position: relative;\n  overflow: hidden;\n  background: #0b1027;\n  color: #e0e7ff;\n  padding: 56px 56px 40px;\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n}\n@media (max-width: 960px) {\n  .auth-hero {\n    display: none;\n  }\n}\n.auth-hero .aurora-bg {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n.auth-hero .aurora {\n  position: absolute;\n  filter: blur(80px);\n  opacity: 0.55;\n  border-radius: 50%;\n}\n.auth-hero .a1 {\n  width: 480px;\n  height: 480px;\n  background: #6366f1;\n  top: -120px;\n  left: -120px;\n}\n.auth-hero .a2 {\n  width: 420px;\n  height: 420px;\n  background: #ec4899;\n  bottom: -100px;\n  right: -80px;\n  opacity: 0.45;\n}\n.auth-hero .a3 {\n  width: 360px;\n  height: 360px;\n  background: #14b8a6;\n  top: 40%;\n  left: 35%;\n  opacity: 0.35;\n}\n.auth-hero .grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 480px;\n}\n.hero-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.hero-brand .brand-mark {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #a855f7 100%);\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px -8px rgba(99, 102, 241, 0.6);\n}\n.hero-copy {\n  margin-top: auto;\n  padding-top: 64px;\n}\n.hero-copy h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 38px;\n  line-height: 1.1;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.03em;\n  margin-bottom: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-copy p {\n  font-size: 16px;\n  line-height: 1.55;\n  color: #c7d2fe;\n  opacity: 0.85;\n  max-width: 440px;\n}\n.hero-features {\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-features li {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.hero-features li .material-icons {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #a5b4fc;\n  font-size: 20px;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-features li div {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features li strong {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.hero-features li span:not(.material-icons) {\n  font-size: 13px;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.hero-footer {\n  margin-top: auto;\n  padding-top: 32px;\n  font-size: 12px;\n  color: #64748b;\n}\n.auth-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 32px;\n  position: relative;\n}\n.auth-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  padding: 36px;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 22px;\n    border: none;\n    box-shadow: none;\n  }\n}\n.auth-card-head {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.auth-card-head .auth-eyebrow {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand-600);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.auth-card-head h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.auth-card-head p {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.label-row .forgot-link {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--brand-600);\n  cursor: pointer;\n}\n.label-row .forgot-link:hover {\n  color: var(--brand-700);\n  text-decoration: underline;\n}\n.pwd-toggle {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: var(--slate-400);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color var(--t-fast), background var(--t-fast);\n}\n.pwd-toggle .material-icons {\n  font-size: 18px;\n}\n.pwd-toggle:hover {\n  color: var(--slate-700);\n  background: var(--slate-100);\n}\n.remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--slate-600);\n  margin: 4px 0 22px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.btn-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-help {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  padding: 12px 14px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.auth-help .material-icons {\n  font-size: 18px;\n  color: var(--brand-500);\n}\n.auth-trust {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 28px;\n}\n.auth-trust .trust-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n}\n.auth-trust .trust-pill .material-icons {\n  font-size: 13px;\n  color: var(--success-600);\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetupPasswordComponent, { className: "SetupPasswordComponent", filePath: "src/app/features/auth/setup-password/setup-password.ts", lineNumber: 44 });
})();
export {
  SetupPasswordComponent
};
//# sourceMappingURL=chunk-B5G2MUZP.js.map
