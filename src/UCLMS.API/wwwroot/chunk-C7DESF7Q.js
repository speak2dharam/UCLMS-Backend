import {
  AuthService
} from "./chunk-PLJV55YC.js";
import "./chunk-HJDD2Z3G.js";
import {
  SlicePipe
} from "./chunk-5J6SOS3L.js";
import {
  ApiService,
  Component,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/certificate.service.ts
var CertificateService = class _CertificateService {
  api;
  constructor(api) {
    this.api = api;
  }
  getMycertificates() {
    return this.api.get("certificates/my");
  }
  getUserCertificates(userId) {
    return this.api.get(`certificates/user/${userId}`);
  }
  verify(code) {
    return this.api.get(`certificates/verify/${code}`);
  }
  issue(dto) {
    return this.api.post("certificates", dto);
  }
  getTemplates() {
    return this.api.get("certificates/templates");
  }
  uploadTemplate(dto) {
    return this.api.post("certificates/templates", dto);
  }
  deleteTemplate(id) {
    return this.api.delete(`certificates/templates/${id}`);
  }
  static \u0275fac = function CertificateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificateService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertificateService, factory: _CertificateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/features/certificates/certificates.ts
var _forTrack0 = ($index, $item) => $item.id;
function CertificatesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "div", 5);
    \u0275\u0275domElementEnd();
  }
}
function CertificatesComponent_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Score: ", c_r1.finalScore, "%");
  }
}
function CertificatesComponent_For_6_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 12);
    \u0275\u0275text(1, "Download");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const c_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("href", c_r1.certificateFileUrl, \u0275\u0275sanitizeUrl);
  }
}
function CertificatesComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "span", 6);
    \u0275\u0275text(2, "workspace_premium");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p", 8);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(10, CertificatesComponent_For_6_Conditional_10_Template, 2, 1, "p", 9);
    \u0275\u0275domElementStart(11, "div", 10)(12, "code", 11);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(14, CertificatesComponent_For_6_Conditional_14_Template, 2, 1, "a", 12);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r1.courseTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r1.learnerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Issued ", \u0275\u0275pipeBind3(9, 6, c_r1.issuedAt, 0, 10));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(c_r1.finalScore !== null ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r1.verificationCode);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r1.certificateFileUrl ? 14 : -1);
  }
}
function CertificatesComponent_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 4)(1, "span", 13);
    \u0275\u0275text(2, "workspace_premium");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "No certificates yet");
    \u0275\u0275domElementEnd()();
  }
}
var CertificatesComponent = class _CertificatesComponent {
  svc = inject(CertificateService);
  auth = inject(AuthService);
  certs = signal([], ...ngDevMode ? [{ debugName: "certs" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  ngOnInit() {
    this.loading.set(true);
    this.svc.getMycertificates().subscribe({
      next: (list) => {
        this.certs.set(list);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  static \u0275fac = function CertificatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificatesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CertificatesComponent, selectors: [["app-certificates"]], decls: 8, vars: 2, consts: [[1, "page-header"], [1, "loading-spinner"], [1, "cert-grid"], [1, "cert-card"], [1, "empty-state", 2, "grid-column", "1/-1"], [1, "spinner"], [1, "material-icons", "cert-icon"], [1, "learner"], [1, "date"], [1, "score"], [1, "cert-footer"], [1, "verify-code"], ["target", "_blank", 1, "btn", "btn-primary", "btn-sm", 3, "href"], [1, "material-icons"]], template: function CertificatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Certificates");
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(3, CertificatesComponent_Conditional_3_Template, 2, 0, "div", 1);
      \u0275\u0275domElementStart(4, "div", 2);
      \u0275\u0275repeaterCreate(5, CertificatesComponent_For_6_Template, 15, 10, "div", 3, _forTrack0, false, CertificatesComponent_ForEmpty_7_Template, 5, 0, "div", 4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.certs());
    }
  }, dependencies: [SlicePipe], styles: ['\n\n.cert-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1100px) {\n  .cert-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .cert-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cert-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 28px 24px 22px;\n  text-align: center;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.cert-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #fbbf24 50%,\n      #f59e0b 100%);\n}\n.cert-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle at 50% -10%,\n      rgba(245, 158, 11, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.cert-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.cert-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.cert-card[_ngcontent-%COMP%]   .cert-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n  border-radius: 50%;\n  font-size: 32px;\n  margin-bottom: 12px;\n  box-shadow: 0 8px 20px -8px rgba(245, 158, 11, 0.55);\n  border: 2px solid #fcd34d;\n}\n.cert-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  margin: 8px 0 6px;\n  color: var(--slate-900);\n}\n.cert-card[_ngcontent-%COMP%]   .learner[_ngcontent-%COMP%] {\n  color: var(--slate-700);\n  font-size: 13.5px;\n  font-weight: 500;\n}\n.cert-card[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], \n.cert-card[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 4px 0;\n}\n.cert-card[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--success-700);\n}\n.cert-footer[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cert-footer[_ngcontent-%COMP%]   .verify-code[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 11px;\n  background: var(--slate-100);\n  padding: 4px 10px;\n  border-radius: var(--r-sm);\n  color: var(--slate-600);\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=certificates.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificatesComponent, [{
    type: Component,
    args: [{ selector: "app-certificates", standalone: true, imports: [SlicePipe], template: `
    <div class="page-header"><h1>Certificates</h1></div>

    @if (loading()) { <div class="loading-spinner"><div class="spinner"></div></div> }

    <div class="cert-grid">
      @for (c of certs(); track c.id) {
        <div class="cert-card">
          <span class="material-icons cert-icon">workspace_premium</span>
          <h3>{{ c.courseTitle }}</h3>
          <p class="learner">{{ c.learnerName }}</p>
          <p class="date">Issued {{ c.issuedAt | slice:0:10 }}</p>
          @if (c.finalScore !== null) { <p class="score">Score: {{ c.finalScore }}%</p> }
          <div class="cert-footer">
            <code class="verify-code">{{ c.verificationCode }}</code>
            @if (c.certificateFileUrl) {
              <a [href]="c.certificateFileUrl" target="_blank" class="btn btn-primary btn-sm">Download</a>
            }
          </div>
        </div>
      } @empty {
        <div class="empty-state" style="grid-column:1/-1;">
          <span class="material-icons">workspace_premium</span>
          <p>No certificates yet</p>
        </div>
      }
    </div>
  `, styles: ['/* src/app/features/certificates/certificates.scss */\n.cert-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n@media (max-width: 1100px) {\n  .cert-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .cert-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.cert-card {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 28px 24px 22px;\n  text-align: center;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.cert-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b 0%,\n      #fbbf24 50%,\n      #f59e0b 100%);\n}\n.cert-card::after {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 120px;\n  background:\n    radial-gradient(\n      circle at 50% -10%,\n      rgba(245, 158, 11, 0.12) 0%,\n      transparent 70%);\n  pointer-events: none;\n}\n.cert-card > * {\n  position: relative;\n  z-index: 1;\n}\n.cert-card:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-2px);\n  border-color: rgba(245, 158, 11, 0.35);\n}\n.cert-card .cert-icon {\n  width: 64px;\n  height: 64px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7 0%,\n      #fde68a 100%);\n  color: #b45309;\n  border-radius: 50%;\n  font-size: 32px;\n  margin-bottom: 12px;\n  box-shadow: 0 8px 20px -8px rgba(245, 158, 11, 0.55);\n  border: 2px solid #fcd34d;\n}\n.cert-card h3 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  margin: 8px 0 6px;\n  color: var(--slate-900);\n}\n.cert-card .learner {\n  color: var(--slate-700);\n  font-size: 13.5px;\n  font-weight: 500;\n}\n.cert-card .date,\n.cert-card .score {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 4px 0;\n}\n.cert-card .score {\n  font-weight: 600;\n  color: var(--success-700);\n}\n.cert-footer {\n  margin-top: 18px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.cert-footer .verify-code {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 11px;\n  background: var(--slate-100);\n  padding: 4px 10px;\n  border-radius: var(--r-sm);\n  color: var(--slate-600);\n  letter-spacing: 0.04em;\n}\n/*# sourceMappingURL=certificates.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CertificatesComponent, { className: "CertificatesComponent", filePath: "src/app/features/certificates/certificates.ts", lineNumber: 41 });
})();
export {
  CertificatesComponent
};
//# sourceMappingURL=chunk-C7DESF7Q.js.map
