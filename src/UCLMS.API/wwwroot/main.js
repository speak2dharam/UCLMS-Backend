import {
  AuthService
} from "./chunk-PLJV55YC.js";
import {
  Router,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withComponentInputBinding
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  BehaviorSubject,
  Component,
  catchError,
  filter,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZoneChangeDetection,
  setClassMetadata,
  switchMap,
  take,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-KOVPKQ3I.js";

// src/app/core/guards/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isLoggedIn())
    return true;
  router.navigate(["/auth/login"]);
  return false;
};

// src/app/core/guards/role.guard.ts
var roleGuard = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = route.data["roles"] ?? [];
  if (!auth.isLoggedIn()) {
    router.navigate(["/auth/login"]);
    return false;
  }
  if (allowedRoles.length === 0 || allowedRoles.includes(auth.role()))
    return true;
  router.navigate(["/dashboard"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  // Auth (public)
  {
    path: "auth",
    children: [
      { path: "login", loadComponent: () => import("./chunk-6DK6UUGL.js").then((m) => m.LoginComponent) },
      { path: "setup-password", loadComponent: () => import("./chunk-B5G2MUZP.js").then((m) => m.SetupPasswordComponent) }
    ]
  },
  // Protected — wrapped in Shell layout
  {
    path: "",
    loadComponent: () => import("./chunk-EKUGEBAW.js").then((m) => m.ShellComponent),
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-RUCUOP4W.js").then((m) => m.DashboardComponent) },
      { path: "courses", loadComponent: () => import("./chunk-SCE3WFVA.js").then((m) => m.CoursesComponent) },
      {
        path: "courses/:courseId/pages",
        loadComponent: () => import("./chunk-DIKRWXKM.js").then((m) => m.CoursePagesComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin", "Instructor"] }
      },
      { path: "courses/:courseId/pages/:pageId", loadComponent: () => import("./chunk-7TPJWY6I.js").then((m) => m.PageDetailComponent) },
      {
        path: "courses/:courseId/quizzes",
        loadComponent: () => import("./chunk-OLEZZ6K7.js").then((m) => m.CourseQuizzesComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin", "Instructor"] }
      },
      { path: "courses/:courseId/quizzes/:quizId", loadComponent: () => import("./chunk-K7TLTLI3.js").then((m) => m.QuizDetailComponent) },
      { path: "courses/:courseId/assignments/:assignmentId", loadComponent: () => import("./chunk-YLYYG2QI.js").then((m) => m.AssignmentDetailComponent) },
      { path: "courses/:courseId/grades", loadComponent: () => import("./chunk-HEC6LAQA.js").then((m) => m.GradesComponent) },
      { path: "courses/:id", loadComponent: () => import("./chunk-JPHDJ4VE.js").then((m) => m.CourseDetailComponent) },
      {
        path: "quiz/:id/edit",
        loadComponent: () => import("./chunk-O53OA27R.js").then((m) => m.QuizEditorComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin", "Instructor"] }
      },
      { path: "quiz/:id", loadComponent: () => import("./chunk-AQLKNB5Y.js").then((m) => m.QuizAttemptComponent) },
      { path: "assignments", loadComponent: () => import("./chunk-G5CM3SD6.js").then((m) => m.AssignmentsComponent) },
      {
        path: "gradebook",
        loadComponent: () => import("./chunk-HR3PK4AI.js").then((m) => m.GradebookComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin", "Instructor", "Observer"] }
      },
      { path: "certificates", loadComponent: () => import("./chunk-C7DESF7Q.js").then((m) => m.CertificatesComponent) },
      {
        path: "reports",
        loadComponent: () => import("./chunk-6XLTEIY2.js").then((m) => m.ReportsComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin", "Observer"] }
      },
      {
        path: "users",
        loadComponent: () => import("./chunk-Q45VS6US.js").then((m) => m.UsersComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin"] }
      },
      {
        path: "organizations",
        loadComponent: () => import("./chunk-LWCDDTRR.js").then((m) => m.OrganizationsComponent),
        canActivate: [roleGuard],
        data: { roles: ["PlatformAdmin"] }
      }
    ]
  },
  { path: "**", redirectTo: "/dashboard" }
];

// src/app/core/interceptors/jwt.interceptor.ts
var refreshSubject = null;
var jwtInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getAccessToken();
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` }, withCredentials: true }) : req.clone({ withCredentials: true });
  return next(authReq).pipe(catchError((err) => {
    if (err.status !== 401 || req.url.includes("/auth/")) {
      return throwError(() => err);
    }
    if (refreshSubject) {
      return waitForRefresh(refreshSubject, req, next);
    }
    const subj = new BehaviorSubject(null);
    refreshSubject = subj;
    return auth.refresh().pipe(switchMap((resp) => {
      subj.next(resp.accessToken);
      subj.complete();
      refreshSubject = null;
      const retried = req.clone({
        setHeaders: { Authorization: `Bearer ${resp.accessToken}` },
        withCredentials: true
      });
      return next(retried);
    }), catchError((refreshErr) => {
      subj.error(refreshErr);
      refreshSubject = null;
      auth.logout();
      return throwError(() => refreshErr);
    }));
  }));
};
function waitForRefresh(subj, req, next) {
  return subj.pipe(filter((t) => t !== null), take(1), switchMap((newToken) => {
    const retried = req.clone({
      setHeaders: { Authorization: `Bearer ${newToken}` },
      withCredentials: true
    });
    return next(retried);
  }));
}

// src/app/core/interceptors/error.interceptor.ts
var errorInterceptor = (req, next) => {
  return next(req).pipe(catchError((err) => {
    const modelStateErrors = err.error?.errors && !Array.isArray(err.error.errors) ? Object.entries(err.error.errors).map(([field, msgs]) => `${field}: ${msgs.join(", ")}`).join(" | ") : null;
    const message = (Array.isArray(err.error?.errors) ? err.error.errors[0] : null) || modelStateErrors || err.error?.message || err.error?.title || (err.status ? `HTTP ${err.status}` : "An unexpected error occurred");
    return throwError(() => new Error(message));
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    // Order matters: errors unwind in reverse, so jwtInterceptor must sit
    // closest to the backend to catch the raw 401 (and refresh) BEFORE
    // errorInterceptor rewrites the HttpErrorResponse into a plain Error.
    provideHttpClient(withInterceptors([errorInterceptor, jwtInterceptor]))
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
