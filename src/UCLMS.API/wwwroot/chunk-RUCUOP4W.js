import {
  ReportService
} from "./chunk-PIGK34IJ.js";
import {
  AssignmentService
} from "./chunk-54EDBHFN.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  catchError,
  computed,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-KOVPKQ3I.js";

// src/app/features/dashboard/dashboard.ts
var _c0 = () => [1, 2, 3, 4];
var _c1 = () => [1, 2, 3];
var _c2 = (a0) => ["/courses", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DashboardComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function DashboardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_10_For_2_Template, 1, 0, "div", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c0));
  }
}
function DashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 8)(2, "span", 9);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Total users");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 12)(10, "span", 9);
    \u0275\u0275text(11, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16, "Organizations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "a", 13)(18, "span", 9);
    \u0275\u0275text(19, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "Courses");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 14)(26, "span", 9);
    \u0275\u0275text(27, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 11);
    \u0275\u0275text(32, "Certificates");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 15)(34, "div")(35, "span", 16);
    \u0275\u0275text(36, "Platform completion rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 17);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "span", 16);
    \u0275\u0275text(41, "Total enrollments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 17);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.platformSummary().totalUsers);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.platformSummary().totalOrganizations);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.platformSummary().totalCourses);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.platformSummary().totalCertificatesIssued);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r0.platformSummary().platformCompletionRate, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.platformSummary().totalEnrollments);
  }
}
function DashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 18)(2, "span", 9);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Visible courses");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 19)(10, "span", 9);
    \u0275\u0275text(11, "assignment_late");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16, "Pending grading");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "a", 20)(18, "span", 9);
    \u0275\u0275text(19, "grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span", 10);
    \u0275\u0275text(22, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "Gradebook");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 14)(26, "span", 9);
    \u0275\u0275text(27, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span", 10);
    \u0275\u0275text(30, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 11);
    \u0275\u0275text(32, "Certificates");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.courses().length);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("stat-warning", ctx_r0.pendingGrading() > 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pendingGrading());
  }
}
function DashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 18)(2, "span", 9);
    \u0275\u0275text(3, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Courses visible");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "a", 21)(10, "span", 9);
    \u0275\u0275text(11, "insights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 10);
    \u0275\u0275text(14, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16, "Reports");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "a", 20)(18, "span", 9);
    \u0275\u0275text(19, "grading");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span", 10);
    \u0275\u0275text(22, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "Gradebook");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.courses().length);
  }
}
function DashboardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 18)(2, "span", 9);
    \u0275\u0275text(3, "school");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 11);
    \u0275\u0275text(8, "Enrolled");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 18)(10, "span", 9);
    \u0275\u0275text(11, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 11);
    \u0275\u0275text(16, "Completed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 18)(18, "span", 9);
    \u0275\u0275text(19, "trending_up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "span", 10);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 11);
    \u0275\u0275text(24, "In progress");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "a", 14)(26, "span", 9);
    \u0275\u0275text(27, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span", 10);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 11);
    \u0275\u0275text(32, "Certificates");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.myProgress().totalEnrolled);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.myProgress().completed);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.inProgressCount());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.myProgress().certificatesEarned);
  }
}
function DashboardComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Continue learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 22);
    \u0275\u0275text(4, "All my courses");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 22);
    \u0275\u0275text(4, "View all");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.auth.hasRole("PlatformAdmin", "Instructor") ? "Recent courses" : "Courses");
  }
}
function DashboardComponent_Conditional_18_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
  }
}
function DashboardComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_18_For_1_Template, 1, 0, "div", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c1));
  }
}
function DashboardComponent_Conditional_19_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 27);
  }
  if (rf & 2) {
    const course_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", course_r2.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", course_r2.title);
  }
}
function DashboardComponent_Conditional_19_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "menu_book");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_19_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, DashboardComponent_Conditional_19_For_1_Conditional_2_Template, 1, 2, "img", 27)(3, DashboardComponent_Conditional_19_For_1_Conditional_3_Template, 2, 0, "span", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c2, course_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(course_r2.thumbnailUrl ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", ctx_r0.statusClass(course_r2.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", course_r2.moduleCount, " module", course_r2.moduleCount === 1 ? "" : "s", " \xB7 ", course_r2.createdBy);
  }
}
function DashboardComponent_Conditional_19_ForEmpty_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 29)(1, "span", 9);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Create your first course ");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_19_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 9);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DashboardComponent_Conditional_19_ForEmpty_2_Conditional_5_Template, 4, 0, "a", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.emptyMessage());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.hasRole("PlatformAdmin", "Instructor") ? 5 : -1);
  }
}
function DashboardComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DashboardComponent_Conditional_19_For_1_Template, 11, 12, "a", 24, _forTrack0, false, DashboardComponent_Conditional_19_ForEmpty_2_Template, 6, 2, "div", 25);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r0.courses());
  }
}
var DashboardComponent = class _DashboardComponent {
  auth = inject(AuthService);
  reports = inject(ReportService);
  coursesSvc = inject(CourseService);
  assignSvc = inject(AssignmentService);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  platformSummary = signal(null, ...ngDevMode ? [{ debugName: "platformSummary" }] : []);
  myProgress = signal(null, ...ngDevMode ? [{ debugName: "myProgress" }] : []);
  courses = signal([], ...ngDevMode ? [{ debugName: "courses" }] : []);
  pendingGrading = signal(0, ...ngDevMode ? [{ debugName: "pendingGrading" }] : []);
  inProgressCount = computed(() => {
    const p = this.myProgress();
    return p ? Math.max(0, p.totalEnrolled - p.completed) : 0;
  }, ...ngDevMode ? [{ debugName: "inProgressCount" }] : []);
  greeting = computed(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12)
      return "Good morning";
    if (h < 17)
      return "Good afternoon";
    return "Good evening";
  }, ...ngDevMode ? [{ debugName: "greeting" }] : []);
  bannerIcon = computed(() => {
    if (this.auth.hasRole("PlatformAdmin"))
      return "admin_panel_settings";
    if (this.auth.hasRole("Instructor"))
      return "school";
    if (this.auth.hasRole("Observer"))
      return "visibility";
    return "auto_stories";
  }, ...ngDevMode ? [{ debugName: "bannerIcon" }] : []);
  emptyMessage = computed(() => {
    if (this.auth.hasRole("Learner"))
      return "You're not enrolled in any courses yet.";
    if (this.auth.hasRole("Observer"))
      return "No courses available to observe yet.";
    return "No courses yet.";
  }, ...ngDevMode ? [{ debugName: "emptyMessage" }] : []);
  ngOnInit() {
    const isAdmin = this.auth.hasRole("PlatformAdmin");
    const isInstructor = this.auth.hasRole("Instructor");
    const isLearner = this.auth.hasRole("Learner");
    forkJoin({
      courses: this.coursesSvc.getAll({ page: 1, pageSize: 6 }).pipe(catchError(() => of({ items: [], totalCount: 0, page: 1, pageSize: 6, totalPages: 0, hasNextPage: false, hasPreviousPage: false }))),
      platform: isAdmin ? this.reports.getPlatformSummary().pipe(catchError(() => of(null))) : of(null),
      me: isLearner || isInstructor ? this.reports.getMyProgressReport().pipe(catchError(() => of(null))) : of(null),
      pendingGrading: isInstructor ? this.assignSvc.getPendingGrading().pipe(catchError(() => of({ items: [], totalCount: 0, page: 1, pageSize: 20, totalPages: 0, hasNextPage: false, hasPreviousPage: false }))) : of({ items: [], totalCount: 0, page: 1, pageSize: 20, totalPages: 0, hasNextPage: false, hasPreviousPage: false })
    }).subscribe((r) => {
      this.courses.set(r.courses.items);
      this.platformSummary.set(r.platform);
      this.myProgress.set(r.me);
      this.pendingGrading.set(r.pendingGrading.totalCount);
      this.loading.set(false);
    });
  }
  statusClass(status) {
    return status === "Published" ? "success" : status === "Draft" ? "gray" : "warning";
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], decls: 20, vars: 11, consts: [[1, "welcome-banner", "card"], [1, "greeting"], [1, "role-pill"], [1, "material-icons", "banner-icon"], [1, "stats-grid"], [1, "section-header"], [1, "course-grid"], [1, "stat-card", "skeleton-card"], ["routerLink", "/users", 1, "stat-card"], [1, "material-icons"], [1, "num"], [1, "lbl"], ["routerLink", "/organizations", 1, "stat-card"], ["routerLink", "/courses", 1, "stat-card"], ["routerLink", "/certificates", 1, "stat-card"], [1, "kpi-row", "card"], [1, "kpi-label"], [1, "kpi-value"], [1, "stat-card"], ["routerLink", "/assignments", 1, "stat-card"], ["routerLink", "/gradebook", 1, "stat-card"], ["routerLink", "/reports", 1, "stat-card"], ["routerLink", "/courses", 1, "btn", "btn-secondary", "btn-sm"], [1, "course-card", "skeleton-course"], [1, "course-card", 3, "routerLink"], [1, "empty-state"], [1, "course-thumb"], [3, "src", "alt"], [1, "course-info"], ["routerLink", "/courses", 1, "btn", "btn-primary", "btn-sm"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "p", 1);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 3);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, DashboardComponent_Conditional_10_Template, 3, 1, "div", 4);
      \u0275\u0275conditionalCreate(11, DashboardComponent_Conditional_11_Template, 44, 6);
      \u0275\u0275conditionalCreate(12, DashboardComponent_Conditional_12_Template, 33, 4, "div", 4);
      \u0275\u0275conditionalCreate(13, DashboardComponent_Conditional_13_Template, 25, 1, "div", 4);
      \u0275\u0275conditionalCreate(14, DashboardComponent_Conditional_14_Template, 33, 4, "div", 4);
      \u0275\u0275conditionalCreate(15, DashboardComponent_Conditional_15_Template, 5, 0, "div", 5)(16, DashboardComponent_Conditional_16_Template, 5, 1, "div", 5);
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275conditionalCreate(18, DashboardComponent_Conditional_18_Template, 2, 1)(19, DashboardComponent_Conditional_19_Template, 3, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.greeting(), ",");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_1_0 = ctx.auth.currentUser()) == null ? null : tmp_1_0.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.auth.role());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.bannerIcon());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.hasRole("PlatformAdmin") && ctx.platformSummary() ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.hasRole("Instructor") ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.hasRole("Observer") ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.hasRole("Learner") && ctx.myProgress() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.hasRole("Learner") ? 15 : 16);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 18 : 19);
    }
  }, dependencies: [RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.welcome-banner[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 32px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 45%,\n      #7c3aed 100%);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-xl);\n  margin-bottom: 28px;\n  box-shadow: 0 18px 40px -16px rgba(79, 70, 229, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.welcome-banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 90% 0%,\n      rgba(236, 72, 153, 0.45) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(14, 165, 233, 0.35) 0%,\n      transparent 35%);\n  pointer-events: none;\n}\n.welcome-banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.welcome-banner[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.welcome-banner[_ngcontent-%COMP%]   .greeting[_ngcontent-%COMP%] {\n  font-size: 13px;\n  opacity: 0.85;\n  margin: 0 0 4px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n.welcome-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.welcome-banner[_ngcontent-%COMP%]   .role-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 12px;\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.welcome-banner[_ngcontent-%COMP%]   .role-pill[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #34d399;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #34d399;\n}\n.welcome-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  opacity: 0.12;\n  color: #fff;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    transform var(--t-base),\n    box-shadow var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.stat-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-500),\n      var(--accent-500));\n  opacity: 0;\n  transition: opacity var(--t-base);\n}\n.stat-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background var(--t-base),\n    color var(--t-base),\n    transform var(--t-base);\n}\n.stat-card[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.stat-card[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--brand-200);\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover::after {\n  opacity: 1;\n}\n.stat-card[_ngcontent-%COMP%]:is(a):hover   .material-icons[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.stat-card.stat-warning[_ngcontent-%COMP%] {\n  border-color: rgba(245, 158, 11, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      var(--warning-50) 0%,\n      var(--surface) 70%);\n}\n.stat-card.stat-warning[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--warning-600);\n  background: var(--warning-100);\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  padding: 22px 26px;\n  margin-bottom: 28px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 18px;\n  }\n}\n.kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  padding-right: 24px;\n}\n.kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--border);\n}\n@media (max-width: 768px) {\n  .kpi-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n    display: none;\n  }\n}\n.kpi-row[_ngcontent-%COMP%]   .kpi-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.kpi-row[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin-top: 6px;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 16px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.course-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.course-card[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  display: flex;\n  flex-direction: column;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card[_ngcontent-%COMP%]:hover   .course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.course-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 148px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 60%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.65;\n}\n.course-info[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  line-height: 1.35;\n  margin: 4px 0 0;\n}\n.course-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.course-info[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  padding: 56px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 44px;\n  color: var(--slate-300);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 14px;\n}\n.skeleton-card[_ngcontent-%COMP%], \n.skeleton-course[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--slate-100) 0%,\n      var(--slate-200) 50%,\n      var(--slate-100) 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n}\n.skeleton-card[_ngcontent-%COMP%] {\n  height: 92px;\n}\n.skeleton-course[_ngcontent-%COMP%] {\n  height: 232px;\n}\n/*# sourceMappingURL=dashboard.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [RouterLink], template: `
    <!-- Welcome banner -->
    <div class="welcome-banner card">
      <div>
        <p class="greeting">{{ greeting() }},</p>
        <h1>{{ auth.currentUser()?.fullName }}</h1>
        <span class="role-pill">{{ auth.role() }}</span>
      </div>
      <span class="material-icons banner-icon">{{ bannerIcon() }}</span>
    </div>

    @if (loading()) {
      <div class="stats-grid">
        @for (i of [1,2,3,4]; track i) {
          <div class="stat-card skeleton-card"></div>
        }
      </div>
    }

    <!-- \u2500\u2500 PLATFORM ADMIN \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (auth.hasRole('PlatformAdmin') && platformSummary()) {
      <div class="stats-grid">
        <a routerLink="/users" class="stat-card">
          <span class="material-icons">group</span>
          <div>
            <span class="num">{{ platformSummary()!.totalUsers }}</span>
            <span class="lbl">Total users</span>
          </div>
        </a>
        <a routerLink="/organizations" class="stat-card">
          <span class="material-icons">business</span>
          <div>
            <span class="num">{{ platformSummary()!.totalOrganizations }}</span>
            <span class="lbl">Organizations</span>
          </div>
        </a>
        <a routerLink="/courses" class="stat-card">
          <span class="material-icons">menu_book</span>
          <div>
            <span class="num">{{ platformSummary()!.totalCourses }}</span>
            <span class="lbl">Courses</span>
          </div>
        </a>
        <a routerLink="/certificates" class="stat-card">
          <span class="material-icons">workspace_premium</span>
          <div>
            <span class="num">{{ platformSummary()!.totalCertificatesIssued }}</span>
            <span class="lbl">Certificates</span>
          </div>
        </a>
      </div>

      <div class="kpi-row card">
        <div>
          <span class="kpi-label">Platform completion rate</span>
          <span class="kpi-value">{{ platformSummary()!.platformCompletionRate }}%</span>
        </div>
        <div>
          <span class="kpi-label">Total enrollments</span>
          <span class="kpi-value">{{ platformSummary()!.totalEnrollments }}</span>
        </div>
      </div>
    }

    <!-- \u2500\u2500 INSTRUCTOR \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (auth.hasRole('Instructor')) {
      <div class="stats-grid">
        <div class="stat-card">
          <span class="material-icons">menu_book</span>
          <div>
            <span class="num">{{ courses().length }}</span>
            <span class="lbl">Visible courses</span>
          </div>
        </div>
        <a routerLink="/assignments" class="stat-card" [class.stat-warning]="pendingGrading() > 0">
          <span class="material-icons">assignment_late</span>
          <div>
            <span class="num">{{ pendingGrading() }}</span>
            <span class="lbl">Pending grading</span>
          </div>
        </a>
        <a routerLink="/gradebook" class="stat-card">
          <span class="material-icons">grading</span>
          <div>
            <span class="num">View</span>
            <span class="lbl">Gradebook</span>
          </div>
        </a>
        <a routerLink="/certificates" class="stat-card">
          <span class="material-icons">workspace_premium</span>
          <div>
            <span class="num">View</span>
            <span class="lbl">Certificates</span>
          </div>
        </a>
      </div>
    }

    <!-- \u2500\u2500 OBSERVER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (auth.hasRole('Observer')) {
      <div class="stats-grid">
        <div class="stat-card">
          <span class="material-icons">menu_book</span>
          <div>
            <span class="num">{{ courses().length }}</span>
            <span class="lbl">Courses visible</span>
          </div>
        </div>
        <a routerLink="/reports" class="stat-card">
          <span class="material-icons">insights</span>
          <div>
            <span class="num">View</span>
            <span class="lbl">Reports</span>
          </div>
        </a>
        <a routerLink="/gradebook" class="stat-card">
          <span class="material-icons">grading</span>
          <div>
            <span class="num">View</span>
            <span class="lbl">Gradebook</span>
          </div>
        </a>
      </div>
    }

    <!-- \u2500\u2500 LEARNER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    @if (auth.hasRole('Learner') && myProgress()) {
      <div class="stats-grid">
        <div class="stat-card">
          <span class="material-icons">school</span>
          <div>
            <span class="num">{{ myProgress()!.totalEnrolled }}</span>
            <span class="lbl">Enrolled</span>
          </div>
        </div>
        <div class="stat-card">
          <span class="material-icons">task_alt</span>
          <div>
            <span class="num">{{ myProgress()!.completed }}</span>
            <span class="lbl">Completed</span>
          </div>
        </div>
        <div class="stat-card">
          <span class="material-icons">trending_up</span>
          <div>
            <span class="num">{{ inProgressCount() }}</span>
            <span class="lbl">In progress</span>
          </div>
        </div>
        <a routerLink="/certificates" class="stat-card">
          <span class="material-icons">workspace_premium</span>
          <div>
            <span class="num">{{ myProgress()!.certificatesEarned }}</span>
            <span class="lbl">Certificates</span>
          </div>
        </a>
      </div>
    }

    <!-- Primary content section -->
    @if (auth.hasRole('Learner')) {
      <div class="section-header">
        <h2>Continue learning</h2>
        <a routerLink="/courses" class="btn btn-secondary btn-sm">All my courses</a>
      </div>
    } @else {
      <div class="section-header">
        <h2>{{ auth.hasRole('PlatformAdmin', 'Instructor') ? 'Recent courses' : 'Courses' }}</h2>
        <a routerLink="/courses" class="btn btn-secondary btn-sm">View all</a>
      </div>
    }

    <div class="course-grid">
      @if (loading()) {
        @for (i of [1,2,3]; track i) {
          <div class="course-card skeleton-course"></div>
        }
      } @else {
        @for (course of courses(); track course.id) {
          <a [routerLink]="['/courses', course.id]" class="course-card">
            <div class="course-thumb">
              @if (course.thumbnailUrl) {
                <img [src]="course.thumbnailUrl" [alt]="course.title" />
              } @else {
                <span class="material-icons">menu_book</span>
              }
            </div>
            <div class="course-info">
              <span class="badge badge-{{ statusClass(course.status) }}">{{ course.status }}</span>
              <h3>{{ course.title }}</h3>
              <p>{{ course.moduleCount }} module{{ course.moduleCount === 1 ? '' : 's' }} \xB7 {{ course.createdBy }}</p>
            </div>
          </a>
        } @empty {
          <div class="empty-state">
            <span class="material-icons">menu_book</span>
            <p>{{ emptyMessage() }}</p>
            @if (auth.hasRole('PlatformAdmin', 'Instructor')) {
              <a routerLink="/courses" class="btn btn-primary btn-sm">
                <span class="material-icons">add</span> Create your first course
              </a>
            }
          </div>
        }
      }
    </div>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/dashboard/dashboard.scss */\n.welcome-banner {\n  position: relative;\n  overflow: hidden;\n  padding: 32px 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 45%,\n      #7c3aed 100%);\n  color: #fff;\n  border: none;\n  border-radius: var(--r-xl);\n  margin-bottom: 28px;\n  box-shadow: 0 18px 40px -16px rgba(79, 70, 229, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.welcome-banner::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 90% 0%,\n      rgba(236, 72, 153, 0.45) 0%,\n      transparent 40%),\n    radial-gradient(\n      circle at 100% 100%,\n      rgba(14, 165, 233, 0.35) 0%,\n      transparent 35%);\n  pointer-events: none;\n}\n.welcome-banner::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 32px 32px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 30%,\n      transparent 70%);\n  pointer-events: none;\n}\n.welcome-banner > div,\n.welcome-banner > span {\n  position: relative;\n  z-index: 1;\n}\n.welcome-banner .greeting {\n  font-size: 13px;\n  opacity: 0.85;\n  margin: 0 0 4px;\n  letter-spacing: 0.02em;\n  font-weight: 500;\n}\n.welcome-banner h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 12px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #c7d2fe 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.welcome-banner .role-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  background: rgba(255, 255, 255, 0.14);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  padding: 4px 12px;\n  border-radius: var(--r-full);\n  font-size: 11.5px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.welcome-banner .role-pill::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  background: #34d399;\n  border-radius: 50%;\n  box-shadow: 0 0 8px #34d399;\n}\n.welcome-banner .banner-icon {\n  font-size: 120px;\n  opacity: 0.12;\n  color: #fff;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 24px;\n}\n@media (max-width: 1100px) {\n  .stats-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 540px) {\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.stat-card {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    transform var(--t-base),\n    box-shadow var(--t-base),\n    border-color var(--t-base);\n  overflow: hidden;\n}\n.stat-card::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background:\n    linear-gradient(\n      180deg,\n      var(--brand-500),\n      var(--accent-500));\n  opacity: 0;\n  transition: opacity var(--t-base);\n}\n.stat-card .material-icons {\n  font-size: 24px;\n  color: var(--brand-600);\n  background: var(--brand-50);\n  border-radius: var(--r-md);\n  width: 48px;\n  height: 48px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition:\n    background var(--t-base),\n    color var(--t-base),\n    transform var(--t-base);\n}\n.stat-card .num {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--slate-900);\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.stat-card .lbl {\n  display: block;\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin-top: 4px;\n  font-weight: 500;\n}\n.stat-card:is(a):hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--brand-200);\n}\n.stat-card:is(a):hover::after {\n  opacity: 1;\n}\n.stat-card:is(a):hover .material-icons {\n  transform: scale(1.05);\n}\n.stat-card.stat-warning {\n  border-color: rgba(245, 158, 11, 0.35);\n  background:\n    linear-gradient(\n      180deg,\n      var(--warning-50) 0%,\n      var(--surface) 70%);\n}\n.stat-card.stat-warning .material-icons {\n  color: var(--warning-600);\n  background: var(--warning-100);\n}\n.kpi-row {\n  display: flex;\n  gap: 32px;\n  padding: 22px 26px;\n  margin-bottom: 28px;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  align-items: center;\n}\n@media (max-width: 768px) {\n  .kpi-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 18px;\n  }\n}\n.kpi-row > div {\n  flex: 1;\n  position: relative;\n  padding-right: 24px;\n}\n.kpi-row > div:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background: var(--border);\n}\n@media (max-width: 768px) {\n  .kpi-row > div:not(:last-child)::after {\n    display: none;\n  }\n}\n.kpi-row .kpi-label {\n  display: block;\n  font-size: 12px;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 600;\n}\n.kpi-row .kpi-value {\n  display: block;\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 30px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin-top: 6px;\n  letter-spacing: -0.02em;\n  line-height: 1.1;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 8px 0 16px;\n}\n.section-header h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--slate-900);\n  margin: 0;\n  letter-spacing: -0.015em;\n}\n.course-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n@media (max-width: 1100px) {\n  .course-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 640px) {\n  .course-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.course-card {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  overflow: hidden;\n  text-decoration: none;\n  color: inherit;\n  transition:\n    box-shadow var(--t-base),\n    transform var(--t-base),\n    border-color var(--t-base);\n  display: flex;\n  flex-direction: column;\n}\n.course-card:hover {\n  box-shadow: var(--shadow-lg);\n  transform: translateY(-3px);\n  border-color: var(--brand-200);\n}\n.course-card:hover .course-thumb img {\n  transform: scale(1.04);\n}\n.course-thumb {\n  position: relative;\n  height: 148px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff 0%,\n      #faf5ff 60%,\n      #fdf2f8 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.course-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--t-slow);\n}\n.course-thumb .material-icons {\n  font-size: 44px;\n  color: var(--brand-400);\n  opacity: 0.65;\n}\n.course-info {\n  padding: 16px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  flex: 1;\n}\n.course-info h3 {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--slate-900);\n  line-height: 1.35;\n  margin: 4px 0 0;\n}\n.course-info p {\n  font-size: 12.5px;\n  color: var(--text-muted);\n  margin: 0;\n}\n.course-info .badge {\n  align-self: flex-start;\n}\n.empty-state {\n  grid-column: 1/-1;\n  background: var(--surface);\n  border: 1px dashed var(--border-strong);\n  border-radius: var(--r-lg);\n  padding: 56px 24px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n}\n.empty-state .material-icons {\n  font-size: 44px;\n  color: var(--slate-300);\n}\n.empty-state p {\n  color: var(--text-muted);\n  margin: 0;\n  font-size: 14px;\n}\n.skeleton-card,\n.skeleton-course {\n  background:\n    linear-gradient(\n      90deg,\n      var(--slate-100) 0%,\n      var(--slate-200) 50%,\n      var(--slate-100) 100%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: var(--r-lg);\n  border: 1px solid var(--border);\n}\n.skeleton-card {\n  height: 92px;\n}\n.skeleton-course {\n  height: 232px;\n}\n/*# sourceMappingURL=dashboard.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/features/dashboard/dashboard.ts", lineNumber: 225 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-RUCUOP4W.js.map
