import {
  Router
} from "./chunk-HJDD2Z3G.js";
import {
  API_BASE,
  HttpClient,
  Injectable,
  catchError,
  computed,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-KOVPKQ3I.js";

// src/app/core/services/auth.service.ts
var ACCESS_KEY = "uclms_access";
var USER_KEY = "uclms_user";
var AuthService = class _AuthService {
  http;
  router;
  _user = signal(this.loadUser(), ...ngDevMode ? [{ debugName: "_user" }] : []);
  currentUser = this._user.asReadonly();
  isLoggedIn = computed(() => this._user() !== null, ...ngDevMode ? [{ debugName: "isLoggedIn" }] : []);
  role = computed(() => this._user()?.role ?? "", ...ngDevMode ? [{ debugName: "role" }] : []);
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  login(req) {
    return this.http.post(`${API_BASE}/auth/login`, req, { withCredentials: true }).pipe(map((r) => r.data), tap((data) => this.storeSession(data)));
  }
  setupPassword(req) {
    return this.http.post(`${API_BASE}/auth/setup-password`, req).pipe(map(() => void 0));
  }
  /** Silently exchanges the HttpOnly refresh cookie for a fresh access token. */
  refresh() {
    return this.http.post(`${API_BASE}/auth/refresh`, {}, { withCredentials: true }).pipe(map((r) => r.data), tap((data) => this.storeSession(data)), catchError((err) => {
      this.clearClientSession();
      return throwError(() => err);
    }));
  }
  logout() {
    this.http.post(`${API_BASE}/auth/revoke`, {}, { withCredentials: true }).pipe(catchError(() => of(null))).subscribe(() => this.completeLogout());
    this.completeLogout();
  }
  getAccessToken() {
    return localStorage.getItem(ACCESS_KEY);
  }
  hasRole(...roles) {
    const r = this.role();
    return roles.some((role) => role === r);
  }
  storeSession(data) {
    localStorage.setItem(ACCESS_KEY, data.accessToken);
    const user = { userId: data.userId, fullName: data.fullName, email: data.email, role: data.role };
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    this._user.set(user);
  }
  clearClientSession() {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(USER_KEY);
    this._user.set(null);
  }
  completeLogout() {
    this.clearClientSession();
    this.router.navigate(["/auth/login"]);
  }
  loadUser() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) ?? "null");
    } catch {
      return null;
    }
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-PLJV55YC.js.map
