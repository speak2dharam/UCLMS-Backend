import {
  OrganizationService
} from "./chunk-JNHTNB5O.js";
import {
  UserService
} from "./chunk-BR34S36W.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-COCM6WHS.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
import {
  CourseService
} from "./chunk-7BXAFFWI.js";
import {
  SlicePipe
} from "./chunk-5J6SOS3L.js";
import {
  Component,
  forkJoin,
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
  ɵɵinterpolate1,
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

// src/app/features/users/users.ts
var _forTrack0 = ($index, $item) => $item.id;
function UsersComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_23_For_19_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function UsersComponent_Conditional_23_For_19_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const u_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resend(u_r3.id));
    });
    \u0275\u0275elementStart(1, "span", 20);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_23_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 18)(17, "button", 19);
    \u0275\u0275listener("click", function UsersComponent_Conditional_23_For_19_Template_button_click_17_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openCoursesModal(u_r3));
    });
    \u0275\u0275elementStart(18, "span", 20);
    \u0275\u0275text(19, "menu_book");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, UsersComponent_Conditional_23_For_19_Conditional_20_Template, 3, 0, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.organizationName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(u_r3.isActive ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r3.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r3.invitationAcceptedAt ? \u0275\u0275pipeBind3(15, 9, u_r3.invitationAcceptedAt, 0, 10) : "Pending");
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!u_r3.invitationAcceptedAt ? 20 : -1);
  }
}
function UsersComponent_Conditional_23_ForEmpty_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23)(2, "div", 24)(3, "span", 2);
    \u0275\u0275text(4, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "No users found");
    \u0275\u0275elementEnd()()()();
  }
}
function UsersComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Last login");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, UsersComponent_Conditional_23_For_19_Template, 21, 13, "tr", null, _forTrack0, false, UsersComponent_Conditional_23_ForEmpty_20_Template, 7, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 14)(22, "button", 15);
    \u0275\u0275listener("click", function UsersComponent_Conditional_23_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changePage(-1));
    });
    \u0275\u0275text(23, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 15);
    \u0275\u0275listener("click", function UsersComponent_Conditional_23_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changePage(1));
    });
    \u0275\u0275text(27, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275repeater((tmp_1_0 = ctx_r3.result()) == null ? null : tmp_1_0.items);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.page <= 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.page, " / ", ((tmp_3_0 = ctx_r3.result()) == null ? null : tmp_3_0.totalPages) ?? 1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !((tmp_4_0 = ctx_r3.result()) == null ? null : tmp_4_0.hasNextPage));
  }
}
function UsersComponent_Conditional_24_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Conditional_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 2);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No courses available.");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Conditional_24_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "input", 35);
    \u0275\u0275listener("change", function UsersComponent_Conditional_24_Conditional_12_For_2_Template_input_change_1_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleCourseForUser(c_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 36)(3, "strong", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r3.enrolledCourseIds().has(c_r8.id))("disabled", ctx_r3.togglingCourseId() === c_r8.id || c_r8.status === "Archived");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", c_r8.category ?? "General", " \xB7 ", c_r8.moduleCount, " modules ");
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", ctx_r3.statusClass(c_r8.status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.status);
  }
}
function UsersComponent_Conditional_24_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, UsersComponent_Conditional_24_Conditional_12_For_2_Template, 9, 9, "div", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.allCourses());
  }
}
function UsersComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click.self", function UsersComponent_Conditional_24_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCoursesModal());
    });
    \u0275\u0275elementStart(1, "div", 26)(2, "div", 27)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function UsersComponent_Conditional_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCoursesModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29)(8, "p", 30);
    \u0275\u0275text(9, " Toggle the courses this user should be enrolled in. Changes apply immediately. ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, UsersComponent_Conditional_24_Conditional_10_Template, 2, 0, "div", 9)(11, UsersComponent_Conditional_24_Conditional_11_Template, 5, 0, "div", 24)(12, UsersComponent_Conditional_24_Conditional_12_Template, 3, 0, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 32)(14, "button", 33);
    \u0275\u0275listener("click", function UsersComponent_Conditional_24_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeCoursesModal());
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Courses for ", ctx_r3.coursesUser().fullName);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.coursesLoading() ? 10 : ctx_r3.allCourses().length === 0 ? 11 : 12);
  }
}
function UsersComponent_Conditional_25_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.createError());
  }
}
function UsersComponent_Conditional_25_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275property("value", o_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r10.name);
  }
}
function UsersComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click.self", function UsersComponent_Conditional_25_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showCreate = false);
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 27)(3, "h2");
    \u0275\u0275text(4, "Invite User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 28);
    \u0275\u0275listener("click", function UsersComponent_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showCreate = false);
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275conditionalCreate(8, UsersComponent_Conditional_25_Conditional_8_Template, 2, 1, "div", 40);
    \u0275\u0275elementStart(9, "div", 41)(10, "label");
    \u0275\u0275text(11, "First name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_25_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.firstName, $event) || (ctx_r3.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 41)(14, "label");
    \u0275\u0275text(15, "Last name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_25_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.lastName, $event) || (ctx_r3.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 41)(18, "label");
    \u0275\u0275text(19, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_25_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.email, $event) || (ctx_r3.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 41)(22, "label");
    \u0275\u0275text(23, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_25_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.role, $event) || (ctx_r3.form.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(25, "option");
    \u0275\u0275text(26, "Learner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option");
    \u0275\u0275text(28, "Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option");
    \u0275\u0275text(30, "Observer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "PlatformAdmin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 41)(34, "label");
    \u0275\u0275text(35, "Organization (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Conditional_25_Template_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.organizationId, $event) || (ctx_r3.form.organizationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(37, "option", 46);
    \u0275\u0275text(38, "\u2014 None \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, UsersComponent_Conditional_25_For_40_Template, 2, 2, "option", 46, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 32)(42, "button", 33);
    \u0275\u0275listener("click", function UsersComponent_Conditional_25_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showCreate = false);
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 47);
    \u0275\u0275listener("click", function UsersComponent_Conditional_25_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createUser());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r3.createError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.role);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.organizationId);
    \u0275\u0275advance();
    \u0275\u0275property("value", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.orgs());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.saving() ? "Sending\u2026" : "Send Invitation", " ");
  }
}
var UsersComponent = class _UsersComponent {
  userSvc = inject(UserService);
  orgSvc = inject(OrganizationService);
  courseSvc = inject(CourseService);
  toast = inject(ToastService);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  orgs = signal([], ...ngDevMode ? [{ debugName: "orgs" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  createError = signal("", ...ngDevMode ? [{ debugName: "createError" }] : []);
  showCreate = false;
  search = "";
  roleFilter = "";
  page = 1;
  // Manage Courses modal
  coursesUser = signal(null, ...ngDevMode ? [{ debugName: "coursesUser" }] : []);
  allCourses = signal([], ...ngDevMode ? [{ debugName: "allCourses" }] : []);
  enrolledCourseIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "enrolledCourseIds" }] : []);
  coursesLoading = signal(false, ...ngDevMode ? [{ debugName: "coursesLoading" }] : []);
  togglingCourseId = signal(null, ...ngDevMode ? [{ debugName: "togglingCourseId" }] : []);
  form = { firstName: "", lastName: "", email: "", role: "Learner", organizationId: null };
  ngOnInit() {
    this.load();
    this.orgSvc.getAll(1, 100).subscribe((r) => this.orgs.set(r.items));
  }
  load() {
    this.loading.set(true);
    this.userSvc.getAll({ search: this.search, role: this.roleFilter || void 0, page: this.page, pageSize: 20 }).subscribe({ next: (r) => {
      this.result.set(r);
      this.loading.set(false);
    }, error: () => this.loading.set(false) });
  }
  changePage(d) {
    this.page += d;
    this.load();
  }
  resend(id) {
    this.userSvc.resendInvitation(id).subscribe();
  }
  createUser() {
    this.createError.set("");
    this.saving.set(true);
    this.userSvc.create(this.form).subscribe({
      next: () => {
        this.showCreate = false;
        this.saving.set(false);
        this.load();
      },
      error: (e) => {
        this.createError.set(e.message);
        this.saving.set(false);
      }
    });
  }
  // ── Manage Courses for a user ─────────────────────────────────────────────
  openCoursesModal(u) {
    this.coursesUser.set(u);
    this.coursesLoading.set(true);
    this.allCourses.set([]);
    this.enrolledCourseIds.set(/* @__PURE__ */ new Set());
    forkJoin({
      all: this.courseSvc.getAll({ page: 1, pageSize: 200 }),
      enrolled: this.courseSvc.getUserEnrolledCourses(u.id)
    }).subscribe({
      next: (r) => {
        this.allCourses.set(r.all.items);
        this.enrolledCourseIds.set(new Set(r.enrolled.map((c) => c.id)));
        this.coursesLoading.set(false);
      },
      error: (e) => {
        this.coursesLoading.set(false);
        this.toast.error(`Failed to load courses: ${e.message}`);
      }
    });
  }
  closeCoursesModal() {
    this.coursesUser.set(null);
  }
  toggleCourseForUser(c) {
    const user = this.coursesUser();
    if (!user)
      return;
    const isEnrolled = this.enrolledCourseIds().has(c.id);
    this.togglingCourseId.set(c.id);
    const obs = isEnrolled ? this.courseSvc.unenrollUser(c.id, user.id) : this.courseSvc.enrollUser(c.id, user.id);
    obs.subscribe({
      next: () => {
        this.enrolledCourseIds.update((s) => {
          const next = new Set(s);
          if (isEnrolled)
            next.delete(c.id);
          else
            next.add(c.id);
          return next;
        });
        this.togglingCourseId.set(null);
        this.toast.success(isEnrolled ? `Unenrolled from "${c.title}".` : `Enrolled in "${c.title}".`);
      },
      error: (e) => {
        this.togglingCourseId.set(null);
        this.toast.error(e.message);
      }
    });
  }
  statusClass(s) {
    return s === "Published" ? "success" : s === "Draft" ? "gray" : "warning";
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["app-users"]], decls: 26, vars: 5, consts: [[1, "page-header"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], [1, "card", 2, "margin-bottom", "16px", "padding", "16px"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["placeholder", "Search name or email\u2026", 2, "flex", "1", "min-width", "200px", "padding", "8px 12px", "border", "1px solid #e2e8f0", "border-radius", "8px", 3, "ngModelChange", "input", "ngModel"], [2, "padding", "8px 12px", "border", "1px solid #e2e8f0", "border-radius", "8px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [1, "card", 2, "padding", "0"], [1, "loading-spinner"], [1, "modal-overlay"], [1, "spinner"], [1, "table-wrap"], [1, "data-table"], [1, "pagination"], [3, "click", "disabled"], [1, "badge", "badge-info"], [1, "badge"], [2, "display", "flex", "gap", "4px"], ["title", "Manage course enrollments", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], ["title", "Resend invitation", 1, "btn", "btn-secondary", "btn-sm"], ["title", "Resend invitation", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], ["colspan", "7"], [1, "empty-state"], [1, "modal-overlay", 3, "click.self"], [1, "modal", "modal-lg"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [2, "font-size", "12px", "color", "#64748b", "margin-bottom", "12px"], [2, "display", "flex", "flex-direction", "column", "gap", "4px", "max-height", "420px", "overflow-y", "auto"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [2, "display", "flex", "align-items", "center", "gap", "12px", "padding", "10px 12px", "border", "1px solid #e2e8f0", "border-radius", "8px"], ["type", "checkbox", 3, "change", "checked", "disabled"], [2, "flex", "1", "display", "flex", "flex-direction", "column", "gap", "2px"], [2, "font-size", "13px", "color", "#0f172a"], [2, "font-size", "11px", "color", "#64748b"], [1, "modal"], [1, "alert", "alert-danger"], [1, "form-group"], ["placeholder", "First name", 3, "ngModelChange", "ngModel"], ["placeholder", "Last name", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "user@example.com", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "btn", "btn-primary", 3, "click", "disabled"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2, "Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "button", 1);
      \u0275\u0275listener("click", function UsersComponent_Template_button_click_3_listener() {
        return ctx.showCreate = true;
      });
      \u0275\u0275elementStart(4, "span", 2);
      \u0275\u0275text(5, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Invite User ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("input", function UsersComponent_Template_input_input_9_listener() {
        return ctx.load();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Template_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.roleFilter, $event) || (ctx.roleFilter = $event);
        return $event;
      });
      \u0275\u0275listener("change", function UsersComponent_Template_select_change_10_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(11, "option", 7);
      \u0275\u0275text(12, "All roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "option");
      \u0275\u0275text(14, "PlatformAdmin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "option");
      \u0275\u0275text(16, "Instructor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "option");
      \u0275\u0275text(18, "Observer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "option");
      \u0275\u0275text(20, "Learner");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 8);
      \u0275\u0275conditionalCreate(22, UsersComponent_Conditional_22_Template, 2, 0, "div", 9)(23, UsersComponent_Conditional_23_Template, 28, 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(24, UsersComponent_Conditional_24_Template, 16, 2, "div", 10);
      \u0275\u0275conditionalCreate(25, UsersComponent_Conditional_25_Template, 46, 9, "div", 10);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.roleFilter);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading() ? 22 : 23);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.coursesUser() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCreate ? 25 : -1);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, SlicePipe], styles: ["\n\n.pagination[_ngcontent-%COMP%] {\n  padding: 14px 18px;\n}\n.user-row-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-row-name[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersComponent, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [FormsModule, SlicePipe], template: `
    <div class="page-header">
      <h1>Users</h1>
      <button class="btn btn-primary" (click)="showCreate = true">
        <span class="material-icons">person_add</span> Invite User
      </button>
    </div>

    <!-- Filters -->
    <div class="card" style="margin-bottom:16px;padding:16px;">
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <input style="flex:1;min-width:200px;padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;"
               placeholder="Search name or email\u2026" [(ngModel)]="search" (input)="load()" />
        <select style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;"
                [(ngModel)]="roleFilter" (change)="load()">
          <option value="">All roles</option>
          <option>PlatformAdmin</option><option>Instructor</option>
          <option>Observer</option><option>Learner</option>
        </select>
      </div>
    </div>

    <div class="card" style="padding:0;">
      @if (loading()) {
        <div class="loading-spinner"><div class="spinner"></div></div>
      } @else {
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr>
              <th>Name</th><th>Email</th><th>Role</th><th>Organization</th><th>Status</th><th>Last login</th><th></th>
            </tr></thead>
            <tbody>
              @for (u of result()?.items; track u.id) {
                <tr>
                  <td>{{ u.fullName }}</td>
                  <td>{{ u.email }}</td>
                  <td><span class="badge badge-info">{{ u.role }}</span></td>
                  <td>{{ u.organizationName ?? '\u2014' }}</td>
                  <td>
                    <span class="badge" [class]="u.isActive ? 'badge-success' : 'badge-danger'">
                      {{ u.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td>{{ u.invitationAcceptedAt ? (u.invitationAcceptedAt | slice:0:10) : 'Pending' }}</td>
                  <td style="display:flex;gap:4px;">
                    <button class="btn btn-secondary btn-sm" (click)="openCoursesModal(u)" title="Manage course enrollments">
                      <span class="material-icons" style="font-size:16px;">menu_book</span>
                    </button>
                    @if (!u.invitationAcceptedAt) {
                      <button class="btn btn-secondary btn-sm" (click)="resend(u.id)" title="Resend invitation">
                        <span class="material-icons" style="font-size:16px;">send</span>
                      </button>
                    }
                  </td>
                </tr>
              } @empty {
                <tr><td colspan="7">
                  <div class="empty-state"><span class="material-icons">group</span><p>No users found</p></div>
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

    <!-- Manage Courses Modal -->
    @if (coursesUser()) {
      <div class="modal-overlay" (click.self)="closeCoursesModal()">
        <div class="modal modal-lg">
          <div class="modal-header">
            <h2>Courses for {{ coursesUser()!.fullName }}</h2>
            <button class="close-btn" (click)="closeCoursesModal()">\u2715</button>
          </div>
          <div class="modal-body">
            <p style="font-size:12px;color:#64748b;margin-bottom:12px;">
              Toggle the courses this user should be enrolled in. Changes apply immediately.
            </p>
            @if (coursesLoading()) {
              <div class="loading-spinner"><div class="spinner"></div></div>
            } @else if (allCourses().length === 0) {
              <div class="empty-state"><span class="material-icons">menu_book</span>
                <p>No courses available.</p></div>
            } @else {
              <div style="display:flex;flex-direction:column;gap:4px;max-height:420px;overflow-y:auto;">
                @for (c of allCourses(); track c.id) {
                  <div style="display:flex;align-items:center;gap:12px;padding:10px 12px;
                              border:1px solid #e2e8f0;border-radius:8px;">
                    <input type="checkbox"
                           [checked]="enrolledCourseIds().has(c.id)"
                           [disabled]="togglingCourseId() === c.id || c.status === 'Archived'"
                           (change)="toggleCourseForUser(c)" />
                    <div style="flex:1;display:flex;flex-direction:column;gap:2px;">
                      <strong style="font-size:13px;color:#0f172a;">{{ c.title }}</strong>
                      <span style="font-size:11px;color:#64748b;">
                        {{ c.category ?? 'General' }} \xB7 {{ c.moduleCount }} modules
                      </span>
                    </div>
                    <span class="badge badge-{{ statusClass(c.status) }}">{{ c.status }}</span>
                  </div>
                }
              </div>
            }
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeCoursesModal()">Close</button>
          </div>
        </div>
      </div>
    }

    <!-- Create Modal -->
    @if (showCreate) {
      <div class="modal-overlay" (click.self)="showCreate = false">
        <div class="modal">
          <div class="modal-header">
            <h2>Invite User</h2>
            <button class="close-btn" (click)="showCreate = false">\u2715</button>
          </div>
          <div class="modal-body">
            @if (createError()) { <div class="alert alert-danger">{{ createError() }}</div> }
            <div class="form-group"><label>First name</label>
              <input [(ngModel)]="form.firstName" placeholder="First name" /></div>
            <div class="form-group"><label>Last name</label>
              <input [(ngModel)]="form.lastName" placeholder="Last name" /></div>
            <div class="form-group"><label>Email</label>
              <input type="email" [(ngModel)]="form.email" placeholder="user@example.com" /></div>
            <div class="form-group"><label>Role</label>
              <select [(ngModel)]="form.role">
                <option>Learner</option><option>Instructor</option>
                <option>Observer</option><option>PlatformAdmin</option>
              </select>
            </div>
            <div class="form-group"><label>Organization (optional)</label>
              <select [(ngModel)]="form.organizationId">
                <option [value]="null">\u2014 None \u2014</option>
                @for (o of orgs(); track o.id) { <option [value]="o.id">{{ o.name }}</option> }
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="showCreate = false">Cancel</button>
            <button class="btn btn-primary" (click)="createUser()" [disabled]="saving()">
              {{ saving() ? 'Sending\u2026' : 'Send Invitation' }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ["/* src/app/features/users/users.scss */\n.pagination {\n  padding: 14px 18px;\n}\n.user-row-name {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.user-row-name .avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-500) 0%,\n      var(--accent-600) 100%);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=users.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src/app/features/users/users.ts", lineNumber: 175 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-Q45VS6US.js.map
