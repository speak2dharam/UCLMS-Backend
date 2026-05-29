import {
  ReportService
} from "./chunk-PIGK34IJ.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOVPKQ3I.js";

// src/app/features/reports/reports.ts
function ReportsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "div", 3);
    \u0275\u0275domElementEnd();
  }
}
function ReportsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3, "group");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div")(5, "span", 6);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 7);
    \u0275\u0275text(8, "Total Users");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "div", 4)(10, "span", 5);
    \u0275\u0275text(11, "business");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div")(13, "span", 6);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "span", 7);
    \u0275\u0275text(16, "Organizations");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(17, "div", 4)(18, "span", 5);
    \u0275\u0275text(19, "menu_book");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(20, "div")(21, "span", 6);
    \u0275\u0275text(22);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "span", 7);
    \u0275\u0275text(24, "Courses");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(25, "div", 4)(26, "span", 5);
    \u0275\u0275text(27, "how_to_reg");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(28, "div")(29, "span", 6);
    \u0275\u0275text(30);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(31, "span", 7);
    \u0275\u0275text(32, "Enrollments");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(33, "div", 4)(34, "span", 5);
    \u0275\u0275text(35, "workspace_premium");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(36, "div")(37, "span", 6);
    \u0275\u0275text(38);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(39, "span", 7);
    \u0275\u0275text(40, "Certificates Issued");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(41, "div", 4)(42, "span", 5);
    \u0275\u0275text(43, "trending_up");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(44, "div")(45, "span", 6);
    \u0275\u0275text(46);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span", 7);
    \u0275\u0275text(48, "Completion Rate");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.summary().totalUsers);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.summary().totalOrganizations);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.summary().totalCourses);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.summary().totalEnrollments);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.summary().totalCertificatesIssued);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.summary().platformCompletionRate, "%");
  }
}
var ReportsComponent = class _ReportsComponent {
  svc = inject(ReportService);
  summary = signal(null, ...ngDevMode ? [{ debugName: "summary" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.loading.set(true);
    this.svc.getPlatformSummary().subscribe({
      next: (s) => {
        this.summary.set(s);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["app-reports"]], decls: 5, vars: 2, consts: [[1, "page-header"], [1, "loading-spinner"], [1, "stats-grid"], [1, "spinner"], [1, "stat-card"], [1, "material-icons"], [1, "num"], [1, "lbl"]], template: function ReportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Platform Reports");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(3, ReportsComponent_Conditional_3_Template, 2, 0, "div", 1);
      \u0275\u0275conditionalCreate(4, ReportsComponent_Conditional_4_Template, 49, 6, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.summary() ? 4 : -1);
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.welcome-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 32px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 45%,\n      #7c3aed 100%);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-xl);\n  margin-bottom: 28px;\n  box-shadow: 0 18px 40px -16px rgba(79, 70, 229, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.welcome-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 90% 0%,\n      rgba(236, 72, 153, 0.45) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(14, 165, 233, 0.35) 0%,\n      transparent 35%);\n  pointer-events: none;\n}\n.welcome-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.welcome-banner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.welcome-banner[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n  margin: 0 0 4px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n.welcome-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.welcome-banner[_ngcontent-%COMP%]   .role-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 12px;\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.welcome-banner[_ngcontent-%COMP%]   .role-pill[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #34d399;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #34d399;\n}\n.welcome-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  opacity: 0.12;\n  color: #fff;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    transform var(--t-base),\n    box-shadow var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-500),\n      var(--accent-500));\n  opacity: 0;\n  transition: opacity var(--t-base);\n}\n.stat-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background var(--t-base),\n    color var(--t-base),\n    transform var(--t-base);\n}\n.stat-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.stat-card[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--brand-200);\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover::after {\n  opacity: 1;\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover   .material-icons[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.stat-card.stat-warning[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      var(--warning-50) 0%,\n      var(--surface) 70%);\n}\n.stat-card.stat-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--warning-600);\n  background: var(--warning-100);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 22px 26px;\n  margin-bottom: 28px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 18px;\n  }\n}\n.kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  padding-right: 24px;\n}\n.kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--border);\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n    display: none;\n  }\n}\n.kpi-row[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.kpi-row[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin-top: 6px;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.course-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 148px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 60%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.65;\n}\n.course-info[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  line-height: 1.35;\n  margin: 4px 0 0;\n}\n.course-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.course-info[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  padding: 56px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--slate-300);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 14px;\n}\n.skeleton-card[_ngcontent-%COMP%], \n.skeleton-course[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--slate-100) 0%,\n      var(--slate-200) 50%,\n      var(--slate-100) 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 92px;\n}\n.skeleton-course[_ngcontent-%COMP%] {\n  height: 232px;\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "app-reports", standalone: true, template: `
    <div class="page-header"><h1>Platform Reports</h1></div>
    @if (loading()) { <div class="loading-spinner"><div class="spinner"></div></div> }
    @if (summary()) {
      <div class="stats-grid">
        <div class="stat-card"><span class="material-icons">group</span>
          <div><span class="num">{{ summary()!.totalUsers }}</span><span class="lbl">Total Users</span></div></div>
        <div class="stat-card"><span class="material-icons">business</span>
          <div><span class="num">{{ summary()!.totalOrganizations }}</span><span class="lbl">Organizations</span></div></div>
        <div class="stat-card"><span class="material-icons">menu_book</span>
          <div><span class="num">{{ summary()!.totalCourses }}</span><span class="lbl">Courses</span></div></div>
        <div class="stat-card"><span class="material-icons">how_to_reg</span>
          <div><span class="num">{{ summary()!.totalEnrollments }}</span><span class="lbl">Enrollments</span></div></div>
        <div class="stat-card"><span class="material-icons">workspace_premium</span>
          <div><span class="num">{{ summary()!.totalCertificatesIssued }}</span><span class="lbl">Certificates Issued</span></div></div>
        <div class="stat-card"><span class="material-icons">trending_up</span>
          <div><span class="num">{{ summary()!.platformCompletionRate }}%</span><span class="lbl">Completion Rate</span></div></div>
      </div>
    }
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/dashboard/dashboard.scss */\n.welcome-banner {\n  position: relative;\n  overflow: hidden;\n  padding: 32px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 45%,\n      #7c3aed 100%);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-xl);\n  margin-bottom: 28px;\n  box-shadow: 0 18px 40px -16px rgba(79, 70, 229, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.welcome-banner::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 90% 0%,\n      rgba(236, 72, 153, 0.45) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(14, 165, 233, 0.35) 0%,\n      transparent 35%);\n  pointer-events: none;\n}\n.welcome-banner::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-banner > div,\n.welcome-banner > span {\n  position: relative;\n  z-index: 1;\n}\n.welcome-banner .greeting {\n  font-size: 13px;\n  opacity: 0.85;\n  margin: 0 0 4px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n.welcome-banner h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.welcome-banner .role-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 12px;\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.welcome-banner .role-pill::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #34d399;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #34d399;\n}\n.welcome-banner .banner-icon {\n  font-size: 120px;\n  opacity: 0.12;\n  color: #fff;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    transform var(--t-base),\n    box-shadow var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.stat-card::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-500),\n      var(--accent-500));\n  opacity: 0;\n  transition: opacity var(--t-base);\n}\n.stat-card .material-icons {\n  font-size: 24px;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background var(--t-base),\n    color var(--t-base),\n    transform var(--t-base);\n}\n.stat-card .num {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.stat-card .lbl {\n  display: block;\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.stat-card:is(a):hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--brand-200);\n}\n.stat-card:is(a):hover::after {\n  opacity: 1;\n}\n.stat-card:is(a):hover .material-icons {\n  transform: scale(1.05);\n}\n.stat-card.stat-warning {\n  border-color: rgba(245, 158, 11, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      var(--warning-50) 0%,\n      var(--surface) 70%);\n}\n.stat-card.stat-warning .material-icons {\n  color: var(--warning-600);\n  background: var(--warning-100);\n}\n.kpi-row {\n  display: flex;\n  gap: 32px;\n  padding: 22px 26px;\n  margin-bottom: 28px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .kpi-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 18px;\n  }\n}\n.kpi-row > div {\n  flex: 1;\n  position: relative;\n  padding-right: 24px;\n}\n.kpi-row > div:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--border);\n}\n@media (max-width: 768px) {\n  .kpi-row > div:not(:last-child)::after {\n    display: none;\n  }\n}\n.kpi-row .kpi-label {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.kpi-row .kpi-value {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin-top: 6px;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 16px;\n}\n.section-header h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .course-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.course-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  display: flex;\n  flex-direction: column;\n}\n.course-card:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card:hover .course-thumb img {\n  transform: scale(1.04);\n}\n.course-thumb {\n  position: relative;\n  height: 148px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 60%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb .material-icons {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.65;\n}\n.course-info {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  line-height: 1.35;\n  margin: 4px 0 0;\n}\n.course-info p {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.course-info .badge {\n  align-self: flex-start;\n}\n.empty-state {\n  grid-column: 1/-1;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  padding: 56px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.empty-state .material-icons {\n  font-size: 44px;\n  color: var(--slate-300);\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 14px;\n}\n.skeleton-card,\n.skeleton-course {\n  background:\n    linear-gradient(\n      90deg,\n      var(--slate-100) 0%,\n      var(--slate-200) 50%,\n      var(--slate-100) 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n}\n.skeleton-card {\n  height: 92px;\n}\n.skeleton-course {\n  height: 232px;\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "src/app/features/reports/reports.ts", lineNumber: 30 });
})();
export {
  ReportsComponent
};
//# sourceMappingURL=chunk-6XLTEIY2.js.map
