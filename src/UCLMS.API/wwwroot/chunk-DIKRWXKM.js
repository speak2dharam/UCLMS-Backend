import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
import {
  CourseNavComponent
} from "./chunk-H3CFDKZT.js";
import "./chunk-7E7XGFM5.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
import "./chunk-54EDBHFN.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  __async,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/pages/course-pages.ts
var _c0 = (a0) => ["/courses", a0];
var _c1 = (a0) => ["/courses", a0, "pages", "new"];
var _forTrack0 = ($index, $item) => $item.id;
function CoursePagesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 10);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Page ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c1, ctx_r0.courseId()));
  }
}
function CoursePagesComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function CoursePagesComponent_Conditional_13_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", p_r3.durationMinutes, " min");
  }
}
function CoursePagesComponent_Conditional_13_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1, "Front Page");
    \u0275\u0275elementEnd();
  }
}
function CoursePagesComponent_Conditional_13_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Draft");
    \u0275\u0275elementEnd();
  }
}
function CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 23);
    \u0275\u0275listener("click", function CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePublished(p_r3));
    });
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 24);
    \u0275\u0275listener("click", function CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.makeFrontPage(p_r3));
    });
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const p_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.remove(p_r3));
    });
    \u0275\u0275elementStart(8, "span", 5);
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", p_r3.isPublished ? "Unpublish" : "Publish");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r3.isPublished ? "visibility" : "visibility_off");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", p_r3.isFrontPage);
  }
}
function CoursePagesComponent_Conditional_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function CoursePagesComponent_Conditional_13_For_5_Template_div_click_0_listener() {
      const p_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(p_r3));
    });
    \u0275\u0275elementStart(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CoursePagesComponent_Conditional_13_For_5_Conditional_6_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CoursePagesComponent_Conditional_13_For_5_Conditional_7_Template, 2, 0, "span", 19);
    \u0275\u0275conditionalCreate(8, CoursePagesComponent_Conditional_13_For_5_Conditional_8_Template, 2, 0, "span", 20);
    \u0275\u0275conditionalCreate(9, CoursePagesComponent_Conditional_13_For_5_Conditional_9_Template, 10, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pageIcon(p_r3.contentType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r3.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.durationMinutes ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r3.isFrontPage ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() && !p_r3.isPublished ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 9 : -1);
  }
}
function CoursePagesComponent_Conditional_13_ForEmpty_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No pages yet. Create one for each lesson, video, or piece of reading material.");
    \u0275\u0275elementEnd();
  }
}
function CoursePagesComponent_Conditional_13_ForEmpty_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No pages available yet.");
    \u0275\u0275elementEnd();
  }
}
function CoursePagesComponent_Conditional_13_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 5);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CoursePagesComponent_Conditional_13_ForEmpty_6_Conditional_3_Template, 2, 0, "p")(4, CoursePagesComponent_Conditional_13_ForEmpty_6_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : 4);
  }
}
function CoursePagesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "p", 12);
    \u0275\u0275text(2, " Pages hold all your content \u2014 lessons, videos, files, and any free-form material. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275repeaterCreate(4, CoursePagesComponent_Conditional_13_For_5_Template, 10, 6, "div", 14, _forTrack0, false, CoursePagesComponent_Conditional_13_ForEmpty_6_Template, 5, 1, "div", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.pages());
  }
}
var CoursePagesComponent = class _CoursePagesComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  cSvc = inject(CourseService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  courseId = signal(0, ...ngDevMode ? [{ debugName: "courseId" }] : []);
  pages = signal([], ...ngDevMode ? [{ debugName: "pages" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  isAdmin = computed(() => this.auth.hasRole("PlatformAdmin", "Instructor"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  ngOnInit() {
    this.courseId.set(Number(this.route.snapshot.paramMap.get("courseId")));
    this.load();
  }
  load() {
    this.loading.set(true);
    this.cSvc.getPages(this.courseId()).subscribe({
      next: (pages) => {
        this.pages.set(pages);
        this.loading.set(false);
      },
      error: (e) => {
        this.loading.set(false);
        this.toast.error(`Failed to load pages: ${e.message}`);
      }
    });
  }
  open(p) {
    this.router.navigate(["/courses", this.courseId(), "pages", p.id]);
  }
  pageIcon(type) {
    return type === "Video" ? "play_circle" : type === "File" ? "description" : "article";
  }
  togglePublished(p) {
    this.cSvc.setPagePublished(p.id, !p.isPublished).subscribe({
      next: () => {
        this.toast.success(p.isPublished ? "Page unpublished." : "Page published.");
        this.load();
      },
      error: (e) => this.toast.error(`Failed to update page: ${e.message}`)
    });
  }
  makeFrontPage(p) {
    this.cSvc.setPageAsFrontPage(p.id).subscribe({
      next: () => {
        this.toast.success(`"${p.title}" is now the course home page.`);
        this.load();
      },
      error: (e) => this.toast.error(`Failed to set home page: ${e.message}`)
    });
  }
  remove(p) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Delete page",
        message: `Delete "${p.title}"? Any module items that reference this page will also be removed.`,
        confirmLabel: "Delete",
        danger: true
      });
      if (!ok)
        return;
      this.cSvc.deletePage(p.id).subscribe({
        next: () => {
          this.toast.success("Page deleted.");
          this.load();
        },
        error: (e) => this.toast.error(`Failed to delete page: ${e.message}`)
      });
    });
  }
  static \u0275fac = function CoursePagesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursePagesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursePagesComponent, selectors: [["app-course-pages"]], decls: 14, vars: 6, consts: [[1, "course-layout"], ["active", "pages", 3, "courseId"], [1, "course-main"], [1, "cp-head"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [1, "cp-title-row"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "loading-spinner"], [1, "card"], [1, "material-icons", 2, "font-size", "16px"], [1, "spinner"], [1, "hint"], [1, "pages-list"], [1, "page-row"], [1, "empty-state"], [1, "page-row", 3, "click"], [1, "page-main"], [1, "page-meta"], [1, "badge", "badge-success"], [1, "badge", "badge-gray"], [1, "page-actions"], [1, "page-actions", 3, "click"], [1, "icon-btn", 3, "click", "title"], ["title", "Use as course home page", 1, "icon-btn", 3, "click", "disabled"], ["title", "Delete page", 1, "icon-btn", "icon-btn-danger", 3, "click"]], template: function CoursePagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-course-nav", 1);
      \u0275\u0275elementStart(2, "main", 2)(3, "div", 3)(4, "a", 4)(5, "span", 5);
      \u0275\u0275text(6, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Back to course ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 6)(9, "h1");
      \u0275\u0275text(10, "Pages");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(11, CoursePagesComponent_Conditional_11_Template, 4, 3, "a", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, CoursePagesComponent_Conditional_12_Template, 2, 0, "div", 8)(13, CoursePagesComponent_Conditional_13_Template, 7, 1, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("courseId", ctx.courseId());
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, ctx.courseId()));
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.isAdmin() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 12 : 13);
    }
  }, dependencies: [RouterLink, CourseNavComponent], styles: ['\n\n.course-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  min-width: 0;\n}\n.cp-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cp-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cp-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cp-head[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cp-head[_ngcontent-%COMP%]   .cp-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cp-head[_ngcontent-%COMP%]   .cp-title-row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.hint[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.pages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row[_ngcontent-%COMP%]   .page-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row[_ngcontent-%COMP%]   .page-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row[_ngcontent-%COMP%]   .page-actions[_ngcontent-%COMP%] {\n  display: none;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%]:hover   .page-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=course-pages.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursePagesComponent, [{
    type: Component,
    args: [{ selector: "app-course-pages", standalone: true, imports: [RouterLink, CourseNavComponent], template: `
    <div class="course-layout">
      <app-course-nav [courseId]="courseId()" active="pages" />

      <main class="course-main">
      <div class="cp-head">
        <a [routerLink]="['/courses', courseId()]" class="back-link">
          <span class="material-icons">arrow_back</span> Back to course
        </a>
        <div class="cp-title-row">
          <h1>Pages</h1>
          @if (isAdmin()) {
            <a class="btn btn-primary btn-sm" [routerLink]="['/courses', courseId(), 'pages', 'new']">
              <span class="material-icons" style="font-size:16px;">add</span> New Page
            </a>
          }
        </div>
      </div>

      @if (loading()) {
        <div class="loading-spinner"><div class="spinner"></div></div>
      } @else {
        <div class="card">
          <p class="hint">
            Pages hold all your content \u2014 lessons, videos, files, and any free-form material.
          </p>
          <div class="pages-list">
            @for (p of pages(); track p.id) {
              <div class="page-row" (click)="open(p)">
                <span class="material-icons">{{ pageIcon(p.contentType) }}</span>
                <div class="page-main">
                  <strong>{{ p.title }}</strong>
                  @if (p.durationMinutes) { <span class="page-meta">{{ p.durationMinutes }} min</span> }
                </div>
                @if (p.isFrontPage) { <span class="badge badge-success">Front Page</span> }
                @if (isAdmin() && !p.isPublished) { <span class="badge badge-gray">Draft</span> }
                @if (isAdmin()) {
                  <div class="page-actions" (click)="$event.stopPropagation()">
                    <button class="icon-btn" (click)="togglePublished(p)"
                            [title]="p.isPublished ? 'Unpublish' : 'Publish'">
                      <span class="material-icons">{{ p.isPublished ? 'visibility' : 'visibility_off' }}</span>
                    </button>
                    <button class="icon-btn" (click)="makeFrontPage(p)" title="Use as course home page"
                            [disabled]="p.isFrontPage">
                      <span class="material-icons">home</span>
                    </button>
                    <button class="icon-btn icon-btn-danger" (click)="remove(p)" title="Delete page">
                      <span class="material-icons">delete</span>
                    </button>
                  </div>
                }
              </div>
            } @empty {
              <div class="empty-state"><span class="material-icons">description</span>
                @if (isAdmin()) {
                  <p>No pages yet. Create one for each lesson, video, or piece of reading material.</p>
                } @else {
                  <p>No pages available yet.</p>
                }
              </div>
            }
          </div>
        </div>
      }
      </main>
    </div>
  `, styles: ['/* src/app/features/courses/pages/course-pages.scss */\n.course-layout {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .course-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.course-main {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  min-width: 0;\n}\n.cp-head {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cp-head .back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cp-head .back-link .material-icons {\n  font-size: 16px;\n}\n.cp-head .back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cp-head .cp-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n.cp-head .cp-title-row h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.hint {\n  color: var(--text-muted);\n  font-size: 13px;\n  margin-bottom: 12px;\n}\n.pages-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row > .material-icons {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row .page-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row strong {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row .page-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row .page-actions {\n  display: none;\n  gap: 2px;\n}\n.page-row:hover .page-actions {\n  display: flex;\n}\n/*# sourceMappingURL=course-pages.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursePagesComponent, { className: "CoursePagesComponent", filePath: "src/app/features/courses/pages/course-pages.ts", lineNumber: 88 });
})();
export {
  CoursePagesComponent
};
//# sourceMappingURL=chunk-DIKRWXKM.js.map
