import {
  CheckboxControlValueAccessor,
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
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/auth/login/login.ts
function LoginComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 16);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LoginComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Signing you in\u2026");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 16);
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  email = "";
  password = "";
  remember = false;
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  showPwd = signal(false, ...ngDevMode ? [{ debugName: "showPwd" }] : []);
  year = (/* @__PURE__ */ new Date()).getFullYear();
  auth = inject(AuthService);
  router = inject(Router);
  submit() {
    if (!this.email || !this.password)
      return;
    this.error.set("");
    this.loading.set(true);
    this.auth.login({ email: this.email, password: this.password }).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (e) => {
        this.error.set(e.message);
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 105, vars: 10, consts: [["f", "ngForm"], [1, "auth-page"], [1, "auth-hero"], ["aria-hidden", "true", 1, "aurora-bg"], [1, "aurora", "a1"], [1, "aurora", "a2"], [1, "aurora", "a3"], [1, "grid-overlay"], [1, "hero-content"], [1, "hero-brand"], [1, "brand-mark"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 7L12 2L21 7V17L12 22L3 17V7Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M12 12L21 7M12 12L3 7M12 12V22", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], [1, "hero-copy"], [1, "hero-features"], [1, "material-icons"], [1, "hero-footer"], [1, "auth-main"], [1, "auth-card"], [1, "auth-card-head"], [1, "auth-eyebrow"], [1, "alert", "alert-danger"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "email"], [1, "input-wrap"], [1, "material-icons", "input-icon"], ["id", "email", "type", "email", "name", "email", "required", "", "autocomplete", "email", "placeholder", "you@company.com", 3, "ngModelChange", "ngModel"], [1, "label-row"], ["for", "password"], [1, "forgot-link"], ["id", "password", "name", "password", "required", "", "autocomplete", "current-password", "placeholder", "Enter your password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "pwd-toggle", 3, "click"], [1, "remember"], ["type", "checkbox", "name", "remember", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "disabled"], [1, "auth-help"], [1, "auth-trust"], [1, "trust-pill"], [1, "btn-spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3);
      \u0275\u0275element(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8)(8, "a", 9)(9, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 11);
      \u0275\u0275element(11, "path", 12)(12, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "UCLMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 14)(16, "h2");
      \u0275\u0275text(17, "The corporate learning platform built for modern teams.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Roll out training, track certifications, and measure impact across every team \u2014 all in one place.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "ul", 15)(21, "li")(22, "span", 16);
      \u0275\u0275text(23, "workspace_premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "strong");
      \u0275\u0275text(26, "Certifications & compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Auto-issued certificates with verifiable codes.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "li")(30, "span", 16);
      \u0275\u0275text(31, "insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div")(33, "strong");
      \u0275\u0275text(34, "Real-time analytics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span");
      \u0275\u0275text(36, "Org-wide reports on progress and outcomes.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "li")(38, "span", 16);
      \u0275\u0275text(39, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div")(41, "strong");
      \u0275\u0275text(42, "Role-based experience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Tailored for admins, instructors, observers and learners.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 17)(46, "span");
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "main", 18)(49, "div", 19)(50, "div", 20)(51, "span", 21);
      \u0275\u0275text(52, "Welcome back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "h1");
      \u0275\u0275text(54, "Sign in to your workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Enter your corporate email and password to continue.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(57, LoginComponent_Conditional_57_Template, 5, 1, "div", 22);
      \u0275\u0275elementStart(58, "form", 23, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.submit());
      });
      \u0275\u0275elementStart(60, "div", 24)(61, "label", 25);
      \u0275\u0275text(62, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 26)(64, "span", 27);
      \u0275\u0275text(65, "mail_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 24)(68, "div", 29)(69, "label", 30);
      \u0275\u0275text(70, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "a", 31);
      \u0275\u0275text(72, "Forgot password?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 26)(74, "span", 27);
      \u0275\u0275text(75, "lock_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "button", 33);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_77_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showPwd.set(!ctx.showPwd()));
      });
      \u0275\u0275elementStart(78, "span", 16);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "label", 34)(81, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_81_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.remember, $event) || (ctx.remember = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Keep me signed in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "button", 36);
      \u0275\u0275conditionalCreate(85, LoginComponent_Conditional_85_Template, 3, 0)(86, LoginComponent_Conditional_86_Template, 4, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 37)(88, "span", 16);
      \u0275\u0275text(89, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Need access? Contact your workspace administrator.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "div", 38)(93, "span", 39)(94, "span", 16);
      \u0275\u0275text(95, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275text(96, " SSO ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span", 39)(98, "span", 16);
      \u0275\u0275text(99, "shield");
      \u0275\u0275elementEnd();
      \u0275\u0275text(100, " SOC\xA02 aligned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "span", 39)(102, "span", 16);
      \u0275\u0275text(103, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(104, " Encrypted in transit");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(47);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Unifycloud Technology Pvt. Ltd.");
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.error() ? 57 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(10);
      \u0275\u0275property("type", ctx.showPwd() ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPwd() ? "Hide password" : "Show password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showPwd() ? "visibility_off" : "visibility");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.remember);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 85 : 86);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['@charset "UTF-8";\n\n\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  background: var(--bg);\n}\n@media (max-width: 960px) {\n  .auth-page[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #0b1027;\n  color: #e0e7ff;\n  padding: 56px 56px 40px;\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n}\n@media (max-width: 960px) {\n  .auth-hero[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auth-hero[_ngcontent-%COMP%]   .aurora-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n.auth-hero[_ngcontent-%COMP%]   .aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  filter: blur(80px);\n  opacity: 0.55;\n  border-radius: 50%;\n}\n.auth-hero[_ngcontent-%COMP%]   .a1[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  background: #6366f1;\n  top: -120px;\n  left: -120px;\n}\n.auth-hero[_ngcontent-%COMP%]   .a2[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background: #ec4899;\n  bottom: -100px;\n  right: -80px;\n  opacity: 0.45;\n}\n.auth-hero[_ngcontent-%COMP%]   .a3[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n  background: #14b8a6;\n  top: 40%;\n  left: 35%;\n  opacity: 0.35;\n}\n.auth-hero[_ngcontent-%COMP%]   .grid-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 480px;\n}\n.hero-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.hero-brand[_ngcontent-%COMP%]   .brand-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #a855f7 100%);\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px -8px rgba(99, 102, 241, 0.6);\n}\n.hero-copy[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 64px;\n}\n.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 38px;\n  line-height: 1.1;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.03em;\n  margin-bottom: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.55;\n  color: #c7d2fe;\n  opacity: 0.85;\n  max-width: 440px;\n}\n.hero-features[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #a5b4fc;\n  font-size: 20px;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.hero-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-icons) {\n  font-size: 13px;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.hero-footer[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 32px;\n  font-size: 12px;\n  color: #64748b;\n}\n.auth-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 32px;\n  position: relative;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  padding: 36px;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 480px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n    border: none;\n    box-shadow: none;\n  }\n}\n.auth-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.auth-card-head[_ngcontent-%COMP%]   .auth-eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand-600);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.auth-card-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.auth-card-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.label-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.label-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--brand-600);\n  cursor: pointer;\n}\n.label-row[_ngcontent-%COMP%]   .forgot-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-700);\n  text-decoration: underline;\n}\n.pwd-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: var(--slate-400);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color var(--t-fast), background var(--t-fast);\n}\n.pwd-toggle[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pwd-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--slate-700);\n  background: var(--slate-100);\n}\n.remember[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--slate-600);\n  margin: 4px 0 22px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  padding: 12px 14px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.auth-help[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--brand-500);\n}\n.auth-trust[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 28px;\n}\n.auth-trust[_ngcontent-%COMP%]   .trust-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n}\n.auth-trust[_ngcontent-%COMP%]   .trust-pill[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--success-600);\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [FormsModule], template: `
    <div class="auth-page">
      <!-- \u2500\u2500\u2500 Marketing panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <aside class="auth-hero">
        <div class="aurora-bg" aria-hidden="true">
          <div class="aurora a1"></div>
          <div class="aurora a2"></div>
          <div class="aurora a3"></div>
          <div class="grid-overlay"></div>
        </div>

        <div class="hero-content">
          <a class="hero-brand">
            <span class="brand-mark">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M12 12L21 7M12 12L3 7M12 12V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              </svg>
            </span>
            <span>UCLMS</span>
          </a>

          <div class="hero-copy">
            <h2>The corporate learning platform built for modern teams.</h2>
            <p>Roll out training, track certifications, and measure impact across every team \u2014 all in one place.</p>
          </div>

          <ul class="hero-features">
            <li>
              <span class="material-icons">workspace_premium</span>
              <div>
                <strong>Certifications &amp; compliance</strong>
                <span>Auto-issued certificates with verifiable codes.</span>
              </div>
            </li>
            <li>
              <span class="material-icons">insights</span>
              <div>
                <strong>Real-time analytics</strong>
                <span>Org-wide reports on progress and outcomes.</span>
              </div>
            </li>
            <li>
              <span class="material-icons">groups</span>
              <div>
                <strong>Role-based experience</strong>
                <span>Tailored for admins, instructors, observers and learners.</span>
              </div>
            </li>
          </ul>

          <div class="hero-footer">
            <span>\xA9 {{ year }} Unifycloud Technology Pvt. Ltd.</span>
          </div>
        </div>
      </aside>

      <!-- \u2500\u2500\u2500 Sign-in form \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
      <main class="auth-main">
        <div class="auth-card">
          <div class="auth-card-head">
            <span class="auth-eyebrow">Welcome back</span>
            <h1>Sign in to your workspace</h1>
            <p>Enter your corporate email and password to continue.</p>
          </div>

          @if (error()) {
            <div class="alert alert-danger">
              <span class="material-icons">error_outline</span>
              <span>{{ error() }}</span>
            </div>
          }

          <form (ngSubmit)="submit()" #f="ngForm" novalidate>
            <div class="form-group">
              <label for="email">Email address</label>
              <div class="input-wrap">
                <span class="material-icons input-icon">mail_outline</span>
                <input id="email" type="email" name="email" [(ngModel)]="email" required autocomplete="email"
                       placeholder="you@company.com" />
              </div>
            </div>

            <div class="form-group">
              <div class="label-row">
                <label for="password">Password</label>
                <a class="forgot-link">Forgot password?</a>
              </div>
              <div class="input-wrap">
                <span class="material-icons input-icon">lock_outline</span>
                <input [type]="showPwd() ? 'text' : 'password'" id="password" name="password"
                       [(ngModel)]="password" required autocomplete="current-password"
                       placeholder="Enter your password" />
                <button type="button" class="pwd-toggle" (click)="showPwd.set(!showPwd())"
                        [attr.aria-label]="showPwd() ? 'Hide password' : 'Show password'">
                  <span class="material-icons">{{ showPwd() ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
            </div>

            <label class="remember">
              <input type="checkbox" [(ngModel)]="remember" name="remember" />
              <span>Keep me signed in</span>
            </label>

            <button type="submit" class="btn btn-primary btn-lg btn-block" [disabled]="loading()">
              @if (loading()) {
                <span class="btn-spinner"></span>
                <span>Signing you in\u2026</span>
              } @else {
                <span>Sign in</span>
                <span class="material-icons">arrow_forward</span>
              }
            </button>
          </form>

          <div class="auth-help">
            <span class="material-icons">support_agent</span>
            <span>Need access? Contact your workspace administrator.</span>
          </div>
        </div>

        <div class="auth-trust">
          <span class="trust-pill"><span class="material-icons">verified_user</span> SSO ready</span>
          <span class="trust-pill"><span class="material-icons">shield</span> SOC&nbsp;2 aligned</span>
          <span class="trust-pill"><span class="material-icons">lock</span> Encrypted in transit</span>
        </div>
      </main>
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/auth/login/login.scss */\n.auth-page {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  background: var(--bg);\n}\n@media (max-width: 960px) {\n  .auth-page {\n    grid-template-columns: 1fr;\n  }\n}\n.auth-hero {\n  position: relative;\n  overflow: hidden;\n  background: #0b1027;\n  color: #e0e7ff;\n  padding: 56px 56px 40px;\n  display: flex;\n  flex-direction: column;\n  isolation: isolate;\n}\n@media (max-width: 960px) {\n  .auth-hero {\n    display: none;\n  }\n}\n.auth-hero .aurora-bg {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  overflow: hidden;\n}\n.auth-hero .aurora {\n  position: absolute;\n  filter: blur(80px);\n  opacity: 0.55;\n  border-radius: 50%;\n}\n.auth-hero .a1 {\n  width: 480px;\n  height: 480px;\n  background: #6366f1;\n  top: -120px;\n  left: -120px;\n}\n.auth-hero .a2 {\n  width: 420px;\n  height: 420px;\n  background: #ec4899;\n  bottom: -100px;\n  right: -80px;\n  opacity: 0.45;\n}\n.auth-hero .a3 {\n  width: 360px;\n  height: 360px;\n  background: #14b8a6;\n  top: 40%;\n  left: 35%;\n  opacity: 0.35;\n}\n.auth-hero .grid-overlay {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.04) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 80%);\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 480px;\n}\n.hero-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n.hero-brand .brand-mark {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #a855f7 100%);\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px -8px rgba(99, 102, 241, 0.6);\n}\n.hero-copy {\n  margin-top: auto;\n  padding-top: 64px;\n}\n.hero-copy h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 38px;\n  line-height: 1.1;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: -0.03em;\n  margin-bottom: 16px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.hero-copy p {\n  font-size: 16px;\n  line-height: 1.55;\n  color: #c7d2fe;\n  opacity: 0.85;\n  max-width: 440px;\n}\n.hero-features {\n  margin-top: 36px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.hero-features li {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.hero-features li .material-icons {\n  width: 36px;\n  height: 36px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  color: #a5b4fc;\n  font-size: 20px;\n  flex-shrink: 0;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-features li div {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.hero-features li strong {\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n}\n.hero-features li span:not(.material-icons) {\n  font-size: 13px;\n  color: #94a3b8;\n  line-height: 1.45;\n}\n.hero-footer {\n  margin-top: auto;\n  padding-top: 32px;\n  font-size: 12px;\n  color: #64748b;\n}\n.auth-main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 32px;\n  position: relative;\n}\n.auth-card {\n  width: 100%;\n  max-width: 420px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  padding: 36px;\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 480px) {\n  .auth-card {\n    padding: 28px 22px;\n    border: none;\n    box-shadow: none;\n  }\n}\n.auth-card-head {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 24px;\n}\n.auth-card-head .auth-eyebrow {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--brand-600);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.auth-card-head h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.auth-card-head p {\n  font-size: 14px;\n  color: var(--text-muted);\n}\n.label-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.label-row .forgot-link {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--brand-600);\n  cursor: pointer;\n}\n.label-row .forgot-link:hover {\n  color: var(--brand-700);\n  text-decoration: underline;\n}\n.pwd-toggle {\n  position: absolute;\n  right: 8px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 32px;\n  height: 32px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px;\n  color: var(--slate-400);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: color var(--t-fast), background var(--t-fast);\n}\n.pwd-toggle .material-icons {\n  font-size: 18px;\n}\n.pwd-toggle:hover {\n  color: var(--slate-700);\n  background: var(--slate-100);\n}\n.remember {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--slate-600);\n  margin: 4px 0 22px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.btn-spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n}\n.auth-help {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  padding: 12px 14px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  font-size: 12.5px;\n  color: var(--text-muted);\n}\n.auth-help .material-icons {\n  font-size: 18px;\n  color: var(--brand-500);\n}\n.auth-trust {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 28px;\n}\n.auth-trust .trust-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 11px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n}\n.auth-trust .trust-pill .material-icons {\n  font-size: 13px;\n  color: var(--success-600);\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.ts", lineNumber: 142 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-6DK6UUGL.js.map
