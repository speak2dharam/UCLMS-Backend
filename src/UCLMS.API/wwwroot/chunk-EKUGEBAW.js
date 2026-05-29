import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  computed,
  filter,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOVPKQ3I.js";

// src/app/layout/sidebar/sidebar.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.route;
function SidebarComponent_For_13_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", item_r1.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
  }
}
function SidebarComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, SidebarComponent_For_13_For_4_Template, 5, 3, "a", 20, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r2.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.items);
  }
}
var SidebarComponent = class _SidebarComponent {
  auth = inject(AuthService);
  items = [
    { section: "main", label: "Dashboard", icon: "space_dashboard", route: "/dashboard" },
    { section: "main", label: "Courses", icon: "menu_book", route: "/courses" },
    { section: "main", label: "Assignments", icon: "assignment", route: "/assignments" },
    { section: "main", label: "My Grades", icon: "grade", route: "/gradebook/my", roles: ["Learner"] },
    { section: "main", label: "Certificates", icon: "workspace_premium", route: "/certificates" },
    { section: "insights", label: "Gradebook", icon: "grading", route: "/gradebook", roles: ["PlatformAdmin", "Instructor", "Observer"] },
    { section: "insights", label: "Reports", icon: "insights", route: "/reports", roles: ["PlatformAdmin", "Observer"] },
    { section: "manage", label: "Users", icon: "group", route: "/users", roles: ["PlatformAdmin"] },
    { section: "manage", label: "Organizations", icon: "corporate_fare", route: "/organizations", roles: ["PlatformAdmin"] }
  ];
  sectionMeta = {
    main: "Workspace",
    insights: "Insights",
    manage: "Administration"
  };
  visibleGroups = computed(() => {
    const role = this.auth.role();
    const visible = this.items.filter((i) => !i.roles || i.roles.includes(role));
    const groups = {};
    for (const i of visible)
      (groups[i.section] ||= []).push(i);
    return Object.keys(groups).map((s) => ({ title: this.sectionMeta[s], items: groups[s] })).filter((g) => g.items.length > 0);
  }, ...ngDevMode ? [{ debugName: "visibleGroups" }] : []);
  initials = computed(() => {
    const name = this.auth.currentUser()?.fullName?.trim() || "";
    if (!name)
      return "?";
    const parts = name.split(/\s+/);
    return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  static \u0275fac = function SidebarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarComponent, selectors: [["app-sidebar"]], decls: 26, vars: 3, consts: [[1, "sidebar"], ["routerLink", "/dashboard", 1, "brand"], [1, "brand-mark"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M3 7L12 2L21 7V17L12 22L3 17V7Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M12 12L21 7M12 12L3 7M12 12V22", "stroke", "currentColor", "stroke-width", "2", "stroke-linejoin", "round"], [1, "brand-text"], [1, "brand-name"], [1, "brand-tag"], [1, "nav-scroll"], [1, "nav-section"], [1, "sidebar-footer"], [1, "user-card"], [1, "avatar"], [1, "user-meta"], [1, "user-name"], [1, "user-role"], ["title", "Sign out", "aria-label", "Sign out", 1, "logout-btn", 3, "click"], [1, "material-icons"], [1, "nav-section-title"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLink"], [1, "nav-label"]], template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "aside", 0)(1, "a", 1)(2, "span", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4)(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8, "UCLMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "Corporate Learning");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "nav", 9);
      \u0275\u0275repeaterCreate(12, SidebarComponent_For_13_Template, 5, 1, "div", 10, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "span", 13);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14)(19, "span", 15);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 17);
      \u0275\u0275listener("click", function SidebarComponent_Template_button_click_23_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275elementStart(24, "span", 18);
      \u0275\u0275text(25, "logout");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.visibleGroups());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.role());
    }
  }, dependencies: [RouterLink, RouterLinkActive], styles: ['@charset "UTF-8";\n\n\n\n.sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  color: var(--slate-600);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: var(--shadow-xs);\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 18px 16px;\n  color: var(--slate-900);\n  text-decoration: none;\n  border-bottom: 1px solid var(--border-soft);\n}\n.brand[_ngcontent-%COMP%]:hover {\n  color: var(--slate-900);\n}\n.brand[_ngcontent-%COMP%]   .brand-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  box-shadow: 0 6px 16px -6px rgba(99, 102, 241, 0.55);\n}\n.brand[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.01em;\n}\n.brand[_ngcontent-%COMP%]   .brand-tag[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 500;\n  color: var(--text-muted);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.nav-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 14px 10px 18px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.nav-section[_ngcontent-%COMP%]:first-child {\n  padding-top: 0;\n}\n.nav-section-title[_ngcontent-%COMP%] {\n  padding: 6px 12px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--slate-400);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  margin: 2px 0;\n  border-radius: var(--r-md);\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n  text-decoration: none;\n  width: 100%;\n  background: none;\n  border: none;\n  transition: background var(--t-fast), color var(--t-fast);\n}\n.nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--slate-500);\n  flex-shrink: 0;\n  transition: color var(--t-fast);\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .material-icons[_ngcontent-%COMP%] {\n  color: var(--slate-700);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -10px;\n  top: 8px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 0 3px 3px 0;\n  background: var(--brand-600);\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--slate-25);\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: var(--r-md);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--slate-300);\n  box-shadow: var(--shadow-xs);\n}\n.user-card[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  flex-shrink: 0;\n}\n.user-card[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  flex: 1;\n  line-height: 1.2;\n}\n.user-card[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--slate-900);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-card[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.user-card[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background var(--t-fast), color var(--t-fast);\n}\n.user-card[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.user-card[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n/*# sourceMappingURL=sidebar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarComponent, [{
    type: Component,
    args: [{ selector: "app-sidebar", standalone: true, imports: [RouterLink, RouterLinkActive], template: `
    <aside class="sidebar">
      <a routerLink="/dashboard" class="brand">
        <span class="brand-mark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            <path d="M12 12L21 7M12 12L3 7M12 12V22" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        </span>
        <div class="brand-text">
          <span class="brand-name">UCLMS</span>
          <span class="brand-tag">Corporate Learning</span>
        </div>
      </a>

      <nav class="nav-scroll">
        @for (group of visibleGroups(); track group.title) {
          <div class="nav-section">
            <div class="nav-section-title">{{ group.title }}</div>
            @for (item of group.items; track item.route) {
              <a [routerLink]="item.route" routerLinkActive="active" class="nav-item">
                <span class="material-icons">{{ item.icon }}</span>
                <span class="nav-label">{{ item.label }}</span>
              </a>
            }
          </div>
        }
      </nav>

      <div class="sidebar-footer">
        <div class="user-card">
          <span class="avatar">{{ initials() }}</span>
          <div class="user-meta">
            <span class="user-name">{{ auth.currentUser()?.fullName }}</span>
            <span class="user-role">{{ auth.role() }}</span>
          </div>
          <button class="logout-btn" (click)="auth.logout()" title="Sign out" aria-label="Sign out">
            <span class="material-icons">logout</span>
          </button>
        </div>
      </div>
    </aside>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/layout/sidebar/sidebar.scss */\n.sidebar {\n  width: var(--sidebar-w);\n  min-height: 100vh;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  color: var(--slate-600);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  box-shadow: var(--shadow-xs);\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 18px 16px;\n  color: var(--slate-900);\n  text-decoration: none;\n  border-bottom: 1px solid var(--border-soft);\n}\n.brand:hover {\n  color: var(--slate-900);\n}\n.brand .brand-mark {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  box-shadow: 0 6px 16px -6px rgba(99, 102, 241, 0.55);\n}\n.brand .brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.brand .brand-name {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.01em;\n}\n.brand .brand-tag {\n  font-size: 10.5px;\n  font-weight: 500;\n  color: var(--text-muted);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  margin-top: 2px;\n}\n.nav-scroll {\n  flex: 1;\n  padding: 14px 10px 18px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.nav-section {\n  padding-top: 10px;\n}\n.nav-section:first-child {\n  padding-top: 0;\n}\n.nav-section-title {\n  padding: 6px 12px 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--slate-400);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.nav-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 12px;\n  margin: 2px 0;\n  border-radius: var(--r-md);\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--slate-600);\n  text-decoration: none;\n  width: 100%;\n  background: none;\n  border: none;\n  transition: background var(--t-fast), color var(--t-fast);\n}\n.nav-item .material-icons {\n  font-size: 20px;\n  color: var(--slate-500);\n  flex-shrink: 0;\n  transition: color var(--t-fast);\n}\n.nav-item .nav-label {\n  flex: 1;\n  text-align: left;\n}\n.nav-item:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n}\n.nav-item:hover .material-icons {\n  color: var(--slate-700);\n}\n.nav-item.active {\n  background: var(--brand-50);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.nav-item.active .material-icons {\n  color: var(--brand-600);\n}\n.nav-item.active::before {\n  content: "";\n  position: absolute;\n  left: -10px;\n  top: 8px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 0 3px 3px 0;\n  background: var(--brand-600);\n}\n.sidebar-footer {\n  padding: 12px;\n  border-top: 1px solid var(--border-soft);\n  background: var(--slate-25);\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 10px;\n  border-radius: var(--r-md);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.user-card:hover {\n  border-color: var(--slate-300);\n  box-shadow: var(--shadow-xs);\n}\n.user-card .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  flex-shrink: 0;\n}\n.user-card .user-meta {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  flex: 1;\n  line-height: 1.2;\n}\n.user-card .user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--slate-900);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.user-card .user-role {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.user-card .logout-btn {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  transition: background var(--t-fast), color var(--t-fast);\n}\n.user-card .logout-btn .material-icons {\n  font-size: 17px;\n}\n.user-card .logout-btn:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n/*# sourceMappingURL=sidebar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarComponent, { className: "SidebarComponent", filePath: "src/app/layout/sidebar/sidebar.ts", lineNumber: 62 });
})();

// src/app/layout/topbar/topbar.ts
var TopbarComponent = class _TopbarComponent {
  auth = inject(AuthService);
  router = inject(Router);
  sub;
  pageTitle = computed(() => this.titleFromUrl(this.router.url), ...ngDevMode ? [{ debugName: "pageTitle" }] : []);
  initials = computed(() => {
    const name = this.auth.currentUser()?.fullName?.trim() || "";
    if (!name)
      return "?";
    const p = name.split(/\s+/);
    return (p[0][0] + (p[1]?.[0] ?? "")).toUpperCase();
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  ngOnInit() {
    this.sub = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe();
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  titleFromUrl(url) {
    const seg = url.split("?")[0].split("/").filter(Boolean)[0] || "dashboard";
    const map = {
      "dashboard": "Dashboard",
      "courses": "Courses",
      "assignments": "Assignments",
      "gradebook": "Gradebook",
      "reports": "Reports",
      "users": "Users",
      "organizations": "Organizations",
      "certificates": "Certificates"
    };
    return map[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1);
  }
  static \u0275fac = function TopbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], decls: 22, vars: 4, consts: [[1, "topbar"], [1, "topbar-left"], [1, "page-crumbs"], [1, "material-icons", "home"], [1, "sep"], [1, "current"], [1, "topbar-right"], ["title", "Help", "aria-label", "Help", 1, "icon-btn"], [1, "material-icons"], [1, "divider-vertical"], [1, "user-chip"], [1, "avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"]], template: function TopbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "home");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "span", 5);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "div", 6)(10, "button", 7)(11, "span", 8);
      \u0275\u0275text(12, "help_outline");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(13, "div", 9);
      \u0275\u0275domElementStart(14, "div", 10)(15, "span", 11);
      \u0275\u0275text(16);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "div", 12)(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "span", 14);
      \u0275\u0275text(21);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.pageTitle());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((tmp_2_0 = ctx.auth.currentUser()) == null ? null : tmp_2_0.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.role());
    }
  }, styles: ['@charset "UTF-8";\n\n\n\n.topbar[_ngcontent-%COMP%] {\n  height: var(--topbar-h);\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--border-soft);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  gap: 16px;\n  position: sticky;\n  top: 0;\n  z-index: 90;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.page-crumbs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: var(--slate-500);\n}\n.page-crumbs[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--slate-400);\n}\n.page-crumbs[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: var(--slate-300);\n}\n.page-crumbs[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n  color: var(--slate-900);\n  font-weight: 600;\n  font-size: 14px;\n}\n.topbar-center[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 520px;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .topbar-center[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.search-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--slate-400);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  padding: 0 60px 0 38px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n  background: var(--slate-50);\n  font-size: 13.5px;\n  color: var(--text);\n  transition:\n    border-color var(--t-fast),\n    background var(--t-fast),\n    box-shadow var(--t-fast);\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--slate-400);\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover {\n  background: var(--surface);\n  border-color: var(--slate-300);\n}\n.search-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background: var(--surface);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-ring);\n}\n.search-wrap[_ngcontent-%COMP%]   .kbd[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  color: var(--slate-500);\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  color: var(--slate-600);\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background var(--t-fast),\n    color var(--t-fast),\n    border-color var(--t-fast);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n  border-color: var(--border);\n}\n.badge-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 18px;\n  height: 18px;\n  background: var(--danger-500);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  border: 2px solid var(--surface);\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.45);\n}\n.divider-vertical[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: var(--border);\n  margin: 0 4px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 10px 4px 4px;\n  border-radius: var(--r-full);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.user-chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--slate-300);\n  box-shadow: var(--shadow-xs);\n}\n.user-chip[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 11.5px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-chip[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-chip[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--slate-900);\n}\n.user-chip[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n@media (max-width: 640px) {\n  .user-chip[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n  .user-chip[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=topbar.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarComponent, [{
    type: Component,
    args: [{ selector: "app-topbar", standalone: true, imports: [], template: `
    <header class="topbar">
      <div class="topbar-left">
        <div class="page-crumbs">
          <span class="material-icons home">home</span>
          <span class="sep">/</span>
          <span class="current">{{ pageTitle() }}</span>
        </div>
      </div>

      <div class="topbar-right">
        <button class="icon-btn" title="Help" aria-label="Help">
          <span class="material-icons">help_outline</span>
        </button>

        <div class="divider-vertical"></div>

        <div class="user-chip">
          <span class="avatar">{{ initials() }}</span>
          <div class="user-info">
            <span class="user-name">{{ auth.currentUser()?.fullName }}</span>
            <span class="user-role">{{ auth.role() }}</span>
          </div>
        </div>
      </div>
    </header>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/layout/topbar/topbar.scss */\n.topbar {\n  height: var(--topbar-h);\n  background: rgba(255, 255, 255, 0.85);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid var(--border-soft);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  gap: 16px;\n  position: sticky;\n  top: 0;\n  z-index: 90;\n}\n.topbar-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.page-crumbs {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13.5px;\n  color: var(--slate-500);\n}\n.page-crumbs .home {\n  font-size: 18px;\n  color: var(--slate-400);\n}\n.page-crumbs .sep {\n  color: var(--slate-300);\n}\n.page-crumbs .current {\n  color: var(--slate-900);\n  font-weight: 600;\n  font-size: 14px;\n}\n.topbar-center {\n  flex: 1;\n  max-width: 520px;\n  display: flex;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .topbar-center {\n    display: none;\n  }\n}\n.search-wrap {\n  position: relative;\n  width: 100%;\n}\n.search-wrap .search-icon {\n  position: absolute;\n  left: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--slate-400);\n  font-size: 18px;\n  pointer-events: none;\n}\n.search-wrap input {\n  width: 100%;\n  height: 38px;\n  padding: 0 60px 0 38px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n  background: var(--slate-50);\n  font-size: 13.5px;\n  color: var(--text);\n  transition:\n    border-color var(--t-fast),\n    background var(--t-fast),\n    box-shadow var(--t-fast);\n}\n.search-wrap input::placeholder {\n  color: var(--slate-400);\n}\n.search-wrap input:hover {\n  background: var(--surface);\n  border-color: var(--slate-300);\n}\n.search-wrap input:focus {\n  outline: none;\n  background: var(--surface);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-ring);\n}\n.search-wrap .kbd {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 5px;\n  color: var(--slate-500);\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.icon-btn {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  color: var(--slate-600);\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background var(--t-fast),\n    color var(--t-fast),\n    border-color var(--t-fast);\n}\n.icon-btn .material-icons {\n  font-size: 20px;\n}\n.icon-btn:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n  border-color: var(--border);\n}\n.badge-dot {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  min-width: 18px;\n  height: 18px;\n  background: var(--danger-500);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 5px;\n  border: 2px solid var(--surface);\n  box-shadow: 0 2px 6px rgba(239, 68, 68, 0.45);\n}\n.divider-vertical {\n  width: 1px;\n  height: 24px;\n  background: var(--border);\n  margin: 0 4px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 4px 10px 4px 4px;\n  border-radius: var(--r-full);\n  background: var(--surface);\n  border: 1px solid var(--border);\n  transition: border-color var(--t-fast), box-shadow var(--t-fast);\n}\n.user-chip:hover {\n  border-color: var(--slate-300);\n  box-shadow: var(--shadow-xs);\n}\n.user-chip .avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 11.5px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-chip .user-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.2;\n}\n.user-chip .user-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--slate-900);\n}\n.user-chip .user-role {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n@media (max-width: 640px) {\n  .user-chip {\n    padding: 4px;\n  }\n  .user-chip .user-info {\n    display: none;\n  }\n}\n/*# sourceMappingURL=topbar.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src/app/layout/topbar/topbar.ts", lineNumber: 40 });
})();

// src/app/shared/toast/toast-outlet.ts
var _forTrack02 = ($index, $item) => $item.id;
function ToastOutletComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 2)(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "button", 5);
    \u0275\u0275domListener("click", function ToastOutletComponent_For_2_Template_button_click_5_listener() {
      const t_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toast.dismiss(t_r2.id));
    });
    \u0275\u0275domElementStart(6, "span", 6);
    \u0275\u0275text(7, "close");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(\u0275\u0275interpolate1("toast toast-", t_r2.kind));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.iconFor(t_r2.kind));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.message);
  }
}
var ToastOutletComponent = class _ToastOutletComponent {
  toast = inject(ToastService);
  iconFor(kind) {
    switch (kind) {
      case "success":
        return "check_circle";
      case "error":
        return "error";
      case "warning":
        return "warning";
      default:
        return "info";
    }
  }
  static \u0275fac = function ToastOutletComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToastOutletComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ToastOutletComponent, selectors: [["app-toast-outlet"]], decls: 3, vars: 0, consts: [["aria-live", "polite", "aria-atomic", "true", 1, "toast-stack"], ["role", "status", 3, "class"], ["role", "status"], [1, "material-icons", "toast-icon"], [1, "toast-msg"], ["aria-label", "Dismiss", 1, "toast-close", 3, "click"], [1, "material-icons"]], template: function ToastOutletComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ToastOutletComponent_For_2_Template, 8, 5, "div", 1, _forTrack02);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.toast.toasts());
    }
  }, styles: ["\n\n.toast-stack[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  pointer-events: none;\n  max-width: 400px;\n}\n.toast[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: var(--r-md);\n  background: var(--surface);\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--border);\n  border-left: 4px solid;\n  font-size: 13.5px;\n  line-height: 1.45;\n  animation: _ngcontent-%COMP%_toast-in 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  overflow: hidden;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.toast-msg[_ngcontent-%COMP%] {\n  flex: 1;\n  color: var(--slate-800);\n  word-break: break-word;\n}\n.toast-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--slate-400);\n  padding: 2px;\n  border-radius: var(--r-sm);\n  transition: color var(--t-fast), background var(--t-fast);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  color: var(--slate-900);\n  background: var(--slate-100);\n}\n.toast-close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.toast-success[_ngcontent-%COMP%] {\n  border-left-color: var(--success-500);\n}\n.toast-success[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--success-600);\n}\n.toast-error[_ngcontent-%COMP%] {\n  border-left-color: var(--danger-500);\n}\n.toast-error[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--danger-600);\n}\n.toast-warning[_ngcontent-%COMP%] {\n  border-left-color: var(--warning-500);\n}\n.toast-warning[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--warning-600);\n}\n.toast-info[_ngcontent-%COMP%] {\n  border-left-color: var(--brand-500);\n}\n.toast-info[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n@keyframes _ngcontent-%COMP%_toast-in {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=toast-outlet.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastOutletComponent, [{
    type: Component,
    args: [{ selector: "app-toast-outlet", standalone: true, template: `
    <div class="toast-stack" aria-live="polite" aria-atomic="true">
      @for (t of toast.toasts(); track t.id) {
        <div class="toast toast-{{ t.kind }}" role="status">
          <span class="material-icons toast-icon">{{ iconFor(t.kind) }}</span>
          <span class="toast-msg">{{ t.message }}</span>
          <button class="toast-close" (click)="toast.dismiss(t.id)" aria-label="Dismiss">
            <span class="material-icons">close</span>
          </button>
        </div>
      }
    </div>
  `, styles: ["/* src/app/shared/toast/toast-outlet.scss */\n.toast-stack {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  pointer-events: none;\n  max-width: 400px;\n}\n.toast {\n  pointer-events: auto;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 16px;\n  border-radius: var(--r-md);\n  background: var(--surface);\n  box-shadow: var(--shadow-xl);\n  border: 1px solid var(--border);\n  border-left: 4px solid;\n  font-size: 13.5px;\n  line-height: 1.45;\n  animation: toast-in 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  overflow: hidden;\n}\n.toast-icon {\n  font-size: 20px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.toast-msg {\n  flex: 1;\n  color: var(--slate-800);\n  word-break: break-word;\n}\n.toast-close {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: var(--slate-400);\n  padding: 2px;\n  border-radius: var(--r-sm);\n  transition: color var(--t-fast), background var(--t-fast);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.toast-close:hover {\n  color: var(--slate-900);\n  background: var(--slate-100);\n}\n.toast-close .material-icons {\n  font-size: 16px;\n}\n.toast-success {\n  border-left-color: var(--success-500);\n}\n.toast-success .toast-icon {\n  color: var(--success-600);\n}\n.toast-error {\n  border-left-color: var(--danger-500);\n}\n.toast-error .toast-icon {\n  color: var(--danger-600);\n}\n.toast-warning {\n  border-left-color: var(--warning-500);\n}\n.toast-warning .toast-icon {\n  color: var(--warning-600);\n}\n.toast-info {\n  border-left-color: var(--brand-500);\n}\n.toast-info .toast-icon {\n  color: var(--brand-600);\n}\n@keyframes toast-in {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=toast-outlet.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ToastOutletComponent, { className: "ToastOutletComponent", filePath: "src/app/shared/toast/toast-outlet.ts", lineNumber: 22 });
})();

// src/app/shared/confirm/confirm-dialog.ts
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click.self", function ConfirmDialogComponent_Conditional_0_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.respond(false));
    });
    \u0275\u0275domElementStart(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 6)(10, "button", 7);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.respond(false));
    });
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "button", 8);
    \u0275\u0275domListener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.svc.respond(true));
    });
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    const a_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275classProp("danger", a_r3.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r3.danger ? "warning" : "help_outline", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.message);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r3.cancelLabel ?? "Cancel", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("btn-danger", a_r3.danger)("btn-primary", !a_r3.danger);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r3.confirmLabel ?? "Confirm", " ");
  }
}
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  svc = inject(ConfirmService);
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 1, vars: 1, consts: [[1, "confirm-overlay"], [1, "confirm-overlay", 3, "click.self"], ["role", "dialog", "aria-modal", "true", 1, "confirm-modal"], [1, "confirm-header"], [1, "material-icons"], [1, "confirm-body"], [1, "confirm-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ConfirmDialogComponent_Conditional_0_Template, 14, 11, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.svc.active()) ? 0 : -1, tmp_0_0);
    }
  }, styles: ['\n\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: _ngcontent-%COMP%_fade-in 0.15s ease-out;\n}\n.confirm-modal[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: var(--shadow-2xl);\n  width: 90vw;\n  max-width: 440px;\n  padding: 28px;\n  animation: _ngcontent-%COMP%_pop-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.confirm-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.confirm-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  flex-shrink: 0;\n}\n.confirm-header[_ngcontent-%COMP%]   .material-icons.danger[_ngcontent-%COMP%] {\n  color: var(--danger-600);\n  background: var(--danger-50);\n}\n.confirm-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  margin: 0;\n  color: var(--slate-900);\n}\n.confirm-body[_ngcontent-%COMP%] {\n  color: var(--slate-600);\n  font-size: 14px;\n  line-height: 1.55;\n  margin: 0 0 24px;\n  padding-left: 58px;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pop-in {\n  from {\n    transform: scale(0.94) translateY(8px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=confirm-dialog.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-dialog", standalone: true, template: `
    @if (svc.active(); as a) {
      <div class="confirm-overlay" (click.self)="svc.respond(false)">
        <div class="confirm-modal" role="dialog" aria-modal="true">
          <div class="confirm-header">
            <span class="material-icons" [class.danger]="a.danger">
              {{ a.danger ? 'warning' : 'help_outline' }}
            </span>
            <h3>{{ a.title }}</h3>
          </div>
          <p class="confirm-body">{{ a.message }}</p>
          <div class="confirm-actions">
            <button class="btn btn-secondary" (click)="svc.respond(false)">
              {{ a.cancelLabel ?? 'Cancel' }}
            </button>
            <button class="btn" [class.btn-danger]="a.danger" [class.btn-primary]="!a.danger"
                    (click)="svc.respond(true)">
              {{ a.confirmLabel ?? 'Confirm' }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ['/* src/app/shared/confirm/confirm-dialog.scss */\n.confirm-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10000;\n  animation: fade-in 0.15s ease-out;\n}\n.confirm-modal {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-xl);\n  box-shadow: var(--shadow-2xl);\n  width: 90vw;\n  max-width: 440px;\n  padding: 28px;\n  animation: pop-in 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.confirm-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 12px;\n}\n.confirm-header .material-icons {\n  font-size: 24px;\n  width: 44px;\n  height: 44px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  flex-shrink: 0;\n}\n.confirm-header .material-icons.danger {\n  color: var(--danger-600);\n  background: var(--danger-50);\n}\n.confirm-header h3 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n  margin: 0;\n  color: var(--slate-900);\n}\n.confirm-body {\n  color: var(--slate-600);\n  font-size: 14px;\n  line-height: 1.55;\n  margin: 0 0 24px;\n  padding-left: 58px;\n}\n.confirm-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes pop-in {\n  from {\n    transform: scale(0.94) translateY(8px);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=confirm-dialog.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/confirm/confirm-dialog.ts", lineNumber: 33 });
})();

// src/app/layout/shell/shell.ts
var ShellComponent = class _ShellComponent {
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], decls: 8, vars: 0, consts: [[1, "shell"], [1, "main-area"], [1, "page-content"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-sidebar");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "app-topbar");
      \u0275\u0275elementStart(4, "main", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(6, "app-toast-outlet")(7, "app-confirm-dialog");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, SidebarComponent, TopbarComponent, ToastOutletComponent, ConfirmDialogComponent], styles: ["\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: var(--sidebar-w);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 0;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 32px 56px;\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .page-content[_ngcontent-%COMP%] {\n    padding: 20px 16px 40px;\n  }\n}\n/*# sourceMappingURL=shell.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [RouterOutlet, SidebarComponent, TopbarComponent, ToastOutletComponent, ConfirmDialogComponent], template: `
    <div class="shell">
      <app-sidebar />
      <div class="main-area">
        <app-topbar />
        <main class="page-content">
          <router-outlet />
        </main>
      </div>
      <app-toast-outlet />
      <app-confirm-dialog />
    </div>
  `, styles: ["/* src/app/layout/shell/shell.scss */\n.shell {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg);\n}\n.main-area {\n  flex: 1;\n  margin-left: var(--sidebar-w);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 0;\n}\n.page-content {\n  flex: 1;\n  padding: 28px 32px 56px;\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .page-content {\n    padding: 20px 16px 40px;\n  }\n}\n/*# sourceMappingURL=shell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src/app/layout/shell/shell.ts", lineNumber: 27 });
})();
export {
  ShellComponent
};
//# sourceMappingURL=chunk-EKUGEBAW.js.map
