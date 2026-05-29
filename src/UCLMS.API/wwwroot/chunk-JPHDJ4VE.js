import {
  UserService
} from "./chunk-BR34S36W.js";
import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
import {
  SafeHtmlPipe
} from "./chunk-4CYNX66W.js";
import {
  moduleItemRoute
} from "./chunk-H2K47RRV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-COCM6WHS.js";
import {
  CourseNavComponent
} from "./chunk-H3CFDKZT.js";
import {
  QuizService
} from "./chunk-7E7XGFM5.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
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
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import {
  NgTemplateOutlet
} from "./chunk-5J6SOS3L.js";
import {
  Component,
  __async,
  __spreadProps,
  __spreadValues,
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KOVPKQ3I.js";

// src/app/features/courses/course-detail/course-detail.ts
var _c0 = (a0) => ({ $implicit: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function CourseDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.course().category);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_14_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.publish());
    });
    \u0275\u0275text(1, " Publish ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !ctx_r0.hasModules())("title", !ctx_r0.hasModules() ? "Add at least one module before publishing" : "Publish course");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_14_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_14_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.unpublish());
    });
    \u0275\u0275text(1, " Unpublish ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 16);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_14_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.archive());
    });
    \u0275\u0275text(3, "Archive");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 16);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_14_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openCourseModal());
    });
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CourseDetailComponent_Conditional_1_Conditional_14_Conditional_5_Template, 2, 2, "button", 18);
    \u0275\u0275conditionalCreate(6, CourseDetailComponent_Conditional_1_Conditional_14_Conditional_6_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.course().status === "Draft" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.course().status === "Published" ? 6 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275element(4, "div", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.progressPercent(), "% complete");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.progressPercent(), "%");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Runs ", ctx_r0.course().startDate.slice(0, 10), " \u2192 ", ctx_r0.course().endDate.slice(0, 10));
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Starts ", ctx_r0.course().startDate.slice(0, 10));
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Ends ", ctx_r0.course().endDate.slice(0, 10));
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 8);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275conditionalCreate(4, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_4_Template, 2, 2, "strong")(5, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_5_Template, 2, 1, "strong")(6, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Conditional_6_Template, 2, 1, "strong");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.course().startDate && ctx_r0.course().endDate ? 4 : ctx_r0.course().startDate ? 5 : 6);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 27)(2, "span", 8);
    \u0275\u0275text(3, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "strong");
    \u0275\u0275text(6, "Course home page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "What learners see first when they open this course.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 28)(10, "label")(11, "input", 29);
    \u0275\u0275listener("change", function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_1_Template_input_change_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.changeHomePage("Modules"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 8);
    \u0275\u0275text(13, "view_module");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label")(16, "input", 29);
    \u0275\u0275listener("change", function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_1_Template_input_change_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.changeHomePage("Syllabus"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Syllabus ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label", 30)(21, "input", 31);
    \u0275\u0275listener("change", function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_1_Template_input_change_21_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.changeHomePage("FrontPage"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 8);
    \u0275\u0275text(23, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Front Page ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("active", ctx_r0.course().homePage === "Modules");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.course().homePage === "Modules");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.course().homePage === "Syllabus");
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.course().homePage === "Syllabus");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r0.course().homePage === "FrontPage")("disabled", !ctx_r0.course().frontPageId);
    \u0275\u0275property("title", !ctx_r0.course().frontPageId ? "Mark a page as the front page from the Pages section first" : "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.course().frontPageId)("checked", ctx_r0.course().homePage === "FrontPage");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.course().syllabus), \u0275\u0275sanitizeHtml);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No syllabus has been written yet.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 32);
    \u0275\u0275text(1, "Syllabus");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Conditional_2_Template, 2, 3, "div", 33)(3, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Conditional_3_Template, 5, 0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.course().syllabus ? 2 : 3);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 35);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    const pageBody_r6 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.frontPage().title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", pageBody_r6)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c0, ctx_r0.frontPage()));
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_0_Template, 3, 5)(1, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Conditional_1_Template, 2, 0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r0.frontPage() ? 0 : 1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.course().description);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Unpublished");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_For_4_Template_div_click_0_listener() {
      const mod_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.goToModule(mod_r8.id));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "view_module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_For_4_Conditional_8_Template, 2, 0, "span", 40);
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mod_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(mod_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", mod_r8.items.length, " item(s)");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() && !mod_r8.isPublished ? 8 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_ForEmpty_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "view_module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No modules available yet.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 32);
    \u0275\u0275text(1, "Course Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_Conditional_2_Template, 2, 1, "p", 36);
    \u0275\u0275repeaterCreate(3, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_For_4_Template, 11, 3, "div", 37, _forTrack0, false, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_ForEmpty_5_Template, 5, 0, "div", 34);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.course().description ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.course().modules);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_0_Template, 7, 1, "div", 24);
    \u0275\u0275conditionalCreate(1, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_1_Template, 25, 13, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_3_Template, 4, 1)(4, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_4_Template, 2, 1)(5, CourseDetailComponent_Conditional_1_Conditional_19_Conditional_5_Template, 6, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.course().startDate || ctx_r0.course().endDate ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.course().homePage === "Syllabus" ? 3 : ctx_r0.course().homePage === "FrontPage" ? 4 : 5);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openModuleModal());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Module ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mod_r11.description);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 55);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const mod_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleModulePublished(mod_r11));
    });
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 56);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const mod_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.editModule(mod_r11));
    });
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 57);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r12);
      const mod_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteModule(mod_r11));
    });
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const mod_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("on", mod_r11.isPublished);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r11.isPublished ? "Published" : "Unpublished", " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", mod_r11.isPublished ? "Unpublish module" : "Publish module");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r11.isPublished ? "visibility" : "visibility_off");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r13.displayTitle);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13.displaySubtitle);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", item_r13.durationMinutes, " min");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Due ", item_r13.dueDate.slice(0, 10));
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 66);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.openItem(item_r13));
    });
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_5_Template, 2, 1, "span", 68)(6, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_6_Template, 2, 1, "span", 68)(7, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_7_Template, 2, 1, "span", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Conditional_8_Template, 2, 0, "span", 69);
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.itemIcon(item_r13));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r13.displayTitle);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.displaySubtitle ? 5 : item_r13.durationMinutes ? 6 : item_r13.dueDate ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.isAdmin() && item_r13.isCompleted ? 8 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const item_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.toggleItemPublished(item_r13));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("title", item_r13.isPublished ? "Unpublish item" : "Publish item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.isPublished ? "visibility" : "visibility_off");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275conditionalCreate(1, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Conditional_1_Template, 3, 2, "button", 70);
    \u0275\u0275elementStart(2, "button", 71);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r15);
      const item_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.deleteItem(item_r13));
    });
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "remove_circle_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.itemType !== "SubHeader" ? 1 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275conditionalCreate(1, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_1_Template, 4, 1)(2, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_2_Template, 9, 4);
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Conditional_3_Template, 5, 1, "div", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("unpub", !item_r13.isPublished)("sub", item_r13.itemType === "SubHeader");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r13.itemType === "SubHeader" ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " This module is empty \u2014 add pages, quizzes, assignments, or a section label. ");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Nothing in this module yet. ");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 59);
    \u0275\u0275conditionalCreate(1, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Conditional_1_Template, 1, 0)(2, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 1 : 2);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const mod_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openAddItemModal(mod_r11.id));
    });
    \u0275\u0275elementStart(1, "span", 8);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add Item ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275repeaterCreate(1, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_For_2_Template, 4, 6, "div", 58, _forTrack0, false, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_ForEmpty_3_Template, 3, 1, "p", 59);
    \u0275\u0275conditionalCreate(4, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_Conditional_4_Template, 4, 0, "button", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(mod_r11.items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 4 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_20_For_5_Template_div_click_2_listener() {
      const mod_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleModuleExpanded(mod_r11.id));
    });
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_7_Template, 2, 1, "span", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_8_Template, 12, 5, "div", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Conditional_9_Template, 5, 2, "div", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("unpub", !mod_r11.isPublished);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.expandedModules().has(mod_r11.id) ? "expand_more" : "chevron_right", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r11.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(mod_r11.description ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expandedModules().has(mod_r11.id) ? 9 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No modules yet. Create one to start organizing your content into sections.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No modules available yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 8);
    \u0275\u0275text(2, "view_module");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Conditional_3_Template, 2, 0, "p")(4, CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : 4);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h2", 32);
    \u0275\u0275text(2, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_20_Conditional_3_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, CourseDetailComponent_Conditional_1_Conditional_20_For_5_Template, 10, 7, "div", 44, _forTrack0, false, CourseDetailComponent_Conditional_1_Conditional_20_ForEmpty_6_Template, 5, 1, "div", 45);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.course().modules);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_21_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openAssignmentModal());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " New Assignment ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const a_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 due ", a_r20.dueDate.slice(0, 10), " ");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_9_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "button", 82);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const a_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.deleteAssignment(a_r20));
    });
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()()();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_21_For_7_Template_div_click_0_listener() {
      const a_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.openAssignment(a_r20));
    });
    \u0275\u0275elementStart(1, "span", 77);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 78)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 79);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, CourseDetailComponent_Conditional_1_Conditional_21_For_7_Conditional_9_Template, 4, 0, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r20.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", a_r20.maxPoints, " pt(s) ");
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r20.dueDate ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 9 : -1);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No assignments yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No assignments available yet.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Conditional_3_Template, 2, 0, "p")(4, CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : 4);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h2", 32);
    \u0275\u0275text(2, "Assignments");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_21_Conditional_3_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73)(5, "div", 74);
    \u0275\u0275repeaterCreate(6, CourseDetailComponent_Conditional_1_Conditional_21_For_7_Template, 10, 4, "div", 75, _forTrack0, false, CourseDetailComponent_Conditional_1_Conditional_21_ForEmpty_8_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.assignments());
  }
}
function CourseDetailComponent_Conditional_1_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_22_Conditional_9_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 86);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 87);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td")(16, "button", 88);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_22_Conditional_9_For_19_Template_button_click_16_listener() {
      const e_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.unenroll(e_r24));
    });
    \u0275\u0275elementStart(17, "span", 8);
    \u0275\u0275text(18, "person_remove");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const e_r24 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r24.userFullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r24.userEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r24.userRole);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r24.organizationName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r24.enrolledAt.slice(0, 10));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", e_r24.completionStatus === "Completed")("badge-warning", e_r24.completionStatus === "InProgress")("badge-gray", e_r24.completionStatus === "NotStarted");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", e_r24.completionStatus, " ");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_22_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "table", 85)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275text(13, "Enrolled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "tbody");
    \u0275\u0275repeaterCreate(18, CourseDetailComponent_Conditional_1_Conditional_22_Conditional_9_For_19_Template, 19, 12, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r0.enrollments());
  }
}
function CourseDetailComponent_Conditional_1_Conditional_22_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No one is enrolled yet. Add learners or instructors to start.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "h2", 32);
    \u0275\u0275text(2, "Enrolled people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 46);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_22_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openEnrollModal());
    });
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Add People ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_1_Conditional_22_Conditional_8_Template, 2, 0, "div", 1)(9, CourseDetailComponent_Conditional_1_Conditional_22_Conditional_9_Template, 20, 0, "div", 84)(10, CourseDetailComponent_Conditional_1_Conditional_22_Conditional_10_Template, 5, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.loadingEnrollments() ? 8 : ctx_r0.enrollments().length ? 9 : 10);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startEditSyllabus());
    });
    \u0275\u0275elementStart(1, "span", 17);
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Syllabus ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1, "Describe the course: objectives, schedule, grading policy, expectations. Basic HTML tags are supported.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "textarea", 91);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_5_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.syllabusDraft, $event) || (ctx_r0.syllabusDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEditSyllabus());
    });
    \u0275\u0275text(5, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_5_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveSyllabus());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.syllabusDraft);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.savingSyllabus());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingSyllabus() ? "Saving\u2026" : "Save Syllabus", " ");
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r0.course().syllabus), \u0275\u0275sanitizeHtml);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No syllabus yet. Add one so learners know what to expect.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No syllabus has been published for this course.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Conditional_3_Template, 2, 0, "p")(4, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Conditional_4_Template, 2, 0, "p");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 3 : 4);
  }
}
function CourseDetailComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "h2", 32);
    \u0275\u0275text(2, "Syllabus");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_3_Template, 4, 0, "button", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 73);
    \u0275\u0275conditionalCreate(5, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_5_Template, 8, 3)(6, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_6_Template, 2, 3, "div", 33)(7, CourseDetailComponent_Conditional_1_Conditional_23_Conditional_7_Template, 5, 1, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isAdmin() && !ctx_r0.editingSyllabus() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.editingSyllabus() ? 5 : ctx_r0.course().syllabus ? 6 : 7);
  }
}
function CourseDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5)(2, "div", 6)(3, "a", 7)(4, "span", 8);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Courses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, CourseDetailComponent_Conditional_1_Conditional_12_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10);
    \u0275\u0275conditionalCreate(14, CourseDetailComponent_Conditional_1_Conditional_14_Template, 7, 2, "div", 11)(15, CourseDetailComponent_Conditional_1_Conditional_15_Template, 5, 3, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 13);
    \u0275\u0275element(17, "app-course-nav", 14);
    \u0275\u0275elementStart(18, "main", 15);
    \u0275\u0275conditionalCreate(19, CourseDetailComponent_Conditional_1_Conditional_19_Template, 6, 3);
    \u0275\u0275conditionalCreate(20, CourseDetailComponent_Conditional_1_Conditional_20_Template, 7, 2);
    \u0275\u0275conditionalCreate(21, CourseDetailComponent_Conditional_1_Conditional_21_Template, 9, 2);
    \u0275\u0275conditionalCreate(22, CourseDetailComponent_Conditional_1_Conditional_22_Template, 11, 1);
    \u0275\u0275conditionalCreate(23, CourseDetailComponent_Conditional_1_Conditional_23_Template, 8, 2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge badge-", ctx_r0.statusClass(ctx_r0.course().status)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.course().status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.course().title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.course().category ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isAdmin() ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275property("courseId", ctx_r0.course().id)("active", ctx_r0.activeSection())("counts", ctx_r0.navCounts());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.activeSection() === "home" ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSection() === "modules" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSection() === "assignments" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSection() === "people" && ctx_r0.isAdmin() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeSection() === "syllabus" ? 23 : -1);
  }
}
function CourseDetailComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.courseError());
  }
}
function CourseDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_2_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCourseModal());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4, "Edit Course");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCourseModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_2_Conditional_8_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(9, "div", 101)(10, "label");
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.title, $event) || (ctx_r0.courseForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "label");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 103);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.description, $event) || (ctx_r0.courseForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 104)(18, "div", 105)(19, "label");
    \u0275\u0275text(20, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 106);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.category, $event) || (ctx_r0.courseForm.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 105)(23, "label");
    \u0275\u0275text(24, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.tags, $event) || (ctx_r0.courseForm.tags = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 104)(27, "div", 105)(28, "label");
    \u0275\u0275text(29, "Start date (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.startDate, $event) || (ctx_r0.courseForm.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 105)(32, "label");
    \u0275\u0275text(33, "End date (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.endDate, $event) || (ctx_r0.courseForm.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 109)(36, "label");
    \u0275\u0275text(37, "Passing %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_2_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.courseForm.passingScorePercent, $event) || (ctx_r0.courseForm.passingScorePercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 111)(40, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_2_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeCourseModal());
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_2_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveCourse());
    });
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.courseError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.category);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.tags);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.startDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.endDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.courseForm.passingScorePercent);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.savingCourse() || !ctx_r0.courseForm.title.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingCourse() ? "Saving\u2026" : "Save Changes", " ");
  }
}
function CourseDetailComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.moduleError());
  }
}
function CourseDetailComponent_Conditional_3_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 90);
    \u0275\u0275text(1, "New modules start unpublished \u2014 publish them when ready so learners see your course one section at a time.");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_3_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModuleModal());
    });
    \u0275\u0275elementStart(1, "div", 112)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModuleModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_3_Conditional_8_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(9, "div", 101)(10, "label");
    \u0275\u0275text(11, "Module title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.moduleForm.title, $event) || (ctx_r0.moduleForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "label");
    \u0275\u0275text(15, "Description (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 114);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_3_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.moduleForm.description, $event) || (ctx_r0.moduleForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, CourseDetailComponent_Conditional_3_Conditional_17_Template, 2, 0, "p", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 111)(19, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeModuleModal());
    });
    \u0275\u0275text(20, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveModule());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.editingModuleId() ? "Edit Module" : "Add Module");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.moduleError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.moduleForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.moduleForm.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.editingModuleId() ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.savingModule() || !ctx_r0.moduleForm.title.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingModule() ? "Saving\u2026" : ctx_r0.editingModuleId() ? "Save Changes" : "Add Module", " ");
  }
}
function CourseDetailComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.itemError());
  }
}
function CourseDetailComponent_Conditional_4_Conditional_21_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r31 = ctx.$implicit;
    \u0275\u0275property("ngValue", p_r31.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", p_r31.title, " (", p_r31.contentType, ")");
  }
}
function CourseDetailComponent_Conditional_4_Conditional_21_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 124);
    \u0275\u0275text(1, " No pages yet \u2014 create one from the Pages section first. ");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_4_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Choose page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 115);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Conditional_21_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.pageId, $event) || (ctx_r0.addItemForm.pageId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 123);
    \u0275\u0275text(5, "\u2014 pick a page \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CourseDetailComponent_Conditional_4_Conditional_21_For_7_Template, 2, 3, "option", 123, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_4_Conditional_21_Conditional_8_Template, 2, 0, "small", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.pageId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.course().pages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.course().pages.length === 0 ? 8 : -1);
  }
}
function CourseDetailComponent_Conditional_4_Conditional_22_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r33 = ctx.$implicit;
    \u0275\u0275property("ngValue", q_r33.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r33.title);
  }
}
function CourseDetailComponent_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Choose quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 115);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Conditional_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.quizId, $event) || (ctx_r0.addItemForm.quizId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 123);
    \u0275\u0275text(5, "\u2014 pick a quiz \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CourseDetailComponent_Conditional_4_Conditional_22_For_7_Template, 2, 2, "option", 123, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.quizId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.quizzes());
  }
}
function CourseDetailComponent_Conditional_4_Conditional_23_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r35 = ctx.$implicit;
    \u0275\u0275property("ngValue", a_r35.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r35.title);
  }
}
function CourseDetailComponent_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Choose assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 115);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Conditional_23_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r34);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.assignmentId, $event) || (ctx_r0.addItemForm.assignmentId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 123);
    \u0275\u0275text(5, "\u2014 pick an assignment \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, CourseDetailComponent_Conditional_4_Conditional_23_For_7_Template, 2, 2, "option", 123, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.assignmentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.assignments());
  }
}
function CourseDetailComponent_Conditional_4_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Section label");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Conditional_24_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.title, $event) || (ctx_r0.addItemForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.title);
  }
}
function CourseDetailComponent_Conditional_4_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Display title override (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 126);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Conditional_25_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r37);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.title, $event) || (ctx_r0.addItemForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.title);
  }
}
function CourseDetailComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_4_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddItemModal());
    });
    \u0275\u0275elementStart(1, "div", 112)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4, "Add Item to Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddItemModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_4_Conditional_8_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(9, "div", 101)(10, "label");
    \u0275\u0275text(11, "Item type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 115);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.itemType, $event) || (ctx_r0.addItemForm.itemType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 116);
    \u0275\u0275text(14, "Page (lesson/video/file)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 117);
    \u0275\u0275text(16, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 118);
    \u0275\u0275text(18, "Assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "option", 119);
    \u0275\u0275text(20, "Sub-header (label only)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(21, CourseDetailComponent_Conditional_4_Conditional_21_Template, 9, 3, "div", 101);
    \u0275\u0275conditionalCreate(22, CourseDetailComponent_Conditional_4_Conditional_22_Template, 8, 2, "div", 101);
    \u0275\u0275conditionalCreate(23, CourseDetailComponent_Conditional_4_Conditional_23_Template, 8, 2, "div", 101);
    \u0275\u0275conditionalCreate(24, CourseDetailComponent_Conditional_4_Conditional_24_Template, 4, 1, "div", 101)(25, CourseDetailComponent_Conditional_4_Conditional_25_Template, 4, 1, "div", 101);
    \u0275\u0275elementStart(26, "div", 120)(27, "label", 121)(28, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.isPublished, $event) || (ctx_r0.addItemForm.isPublished = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Published ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "label", 121)(31, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_4_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.addItemForm.isRequired, $event) || (ctx_r0.addItemForm.isRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " Required for completion ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 111)(34, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_4_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAddItemModal());
    });
    \u0275\u0275text(35, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_4_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r29);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveItem());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.itemError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.itemType);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.addItemForm.itemType === "Page" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addItemForm.itemType === "Quiz" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addItemForm.itemType === "Assignment" ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.addItemForm.itemType === "SubHeader" ? 24 : 25);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.isPublished);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.addItemForm.isRequired);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.savingItem() || !ctx_r0.canSaveItem());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingItem() ? "Adding\u2026" : "Add to Module", " ");
  }
}
function CourseDetailComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.assignmentError());
  }
}
function CourseDetailComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_5_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentModal());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4, "New Assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_5_Conditional_8_Template, 2, 1, "div", 100);
    \u0275\u0275elementStart(9, "div", 101)(10, "label");
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 127);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_5_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignmentForm.title, $event) || (ctx_r0.assignmentForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 101)(14, "label");
    \u0275\u0275text(15, "Instructions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 128);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_5_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignmentForm.instructions, $event) || (ctx_r0.assignmentForm.instructions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 104)(18, "div", 105)(19, "label");
    \u0275\u0275text(20, "Due date (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 108);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_5_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignmentForm.dueDate, $event) || (ctx_r0.assignmentForm.dueDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 105)(23, "label");
    \u0275\u0275text(24, "Max points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_5_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignmentForm.maxPoints, $event) || (ctx_r0.assignmentForm.maxPoints = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "label", 121)(27, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_5_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.assignmentForm.isRequired, $event) || (ctx_r0.assignmentForm.isRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Required for completion ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 111)(30, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_5_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentModal());
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_5_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.saveAssignment());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r0.assignmentError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignmentForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignmentForm.instructions);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignmentForm.dueDate);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignmentForm.maxPoints);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.assignmentForm.isRequired);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.savingAssignment() || !ctx_r0.assignmentForm.title.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingAssignment() ? "Saving\u2026" : "Create Assignment", " ");
  }
}
function CourseDetailComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.activeAssignment().instructions, " ");
  }
}
function CourseDetailComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 131);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Due: ", ctx_r0.activeAssignment().dueDate.slice(0, 10), " \xB7 Max points: ", ctx_r0.activeAssignment().maxPoints, " ");
  }
}
function CourseDetailComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.submitError());
  }
}
function CourseDetailComponent_Conditional_6_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 132);
    \u0275\u0275text(1, "Assignment submitted successfully!");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_6_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101)(1, "label");
    \u0275\u0275text(2, "Your Response");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 134);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_6_Conditional_12_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.submissionText, $event) || (ctx_r0.submissionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.submissionText);
  }
}
function CourseDetailComponent_Conditional_6_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_6_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitAssignment());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Submitting\u2026" : "Submit Assignment", " ");
  }
}
function CourseDetailComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_6_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentSubmit());
    });
    \u0275\u0275elementStart(1, "div", 112)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentSubmit());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99);
    \u0275\u0275conditionalCreate(8, CourseDetailComponent_Conditional_6_Conditional_8_Template, 2, 1, "div", 130);
    \u0275\u0275conditionalCreate(9, CourseDetailComponent_Conditional_6_Conditional_9_Template, 2, 2, "p", 131);
    \u0275\u0275conditionalCreate(10, CourseDetailComponent_Conditional_6_Conditional_10_Template, 2, 1, "div", 100);
    \u0275\u0275conditionalCreate(11, CourseDetailComponent_Conditional_6_Conditional_11_Template, 2, 0, "div", 132)(12, CourseDetailComponent_Conditional_6_Conditional_12_Template, 4, 1, "div", 101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 111)(14, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r39);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeAssignmentSubmit());
    });
    \u0275\u0275text(15, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, CourseDetailComponent_Conditional_6_Conditional_16_Template, 2, 2, "button", 133);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.activeAssignment().title);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.activeAssignment().instructions ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeAssignment().dueDate ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitDone() ? 11 : !ctx_r0.isAdmin() ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r0.submitDone() && !ctx_r0.isAdmin() ? 16 : -1);
  }
}
function CourseDetailComponent_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_7_Conditional_20_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Already enrolled");
    \u0275\u0275elementEnd();
  }
}
function CourseDetailComponent_Conditional_7_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 142)(1, "input", 143);
    \u0275\u0275listener("change", function CourseDetailComponent_Conditional_7_Conditional_20_For_2_Template_input_change_1_listener() {
      const u_r44 = \u0275\u0275restoreView(_r43).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleSelectUser(u_r44.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 144)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, CourseDetailComponent_Conditional_7_Conditional_20_For_2_Conditional_7_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r44 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("disabled", ctx_r0.isAlreadyEnrolled(u_r44.id));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isAlreadyEnrolled(u_r44.id))("checked", ctx_r0.selectedUserIds().has(u_r44.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r44.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", u_r44.email, " \xB7 ", u_r44.role, "", u_r44.organizationName ? " \xB7 " + u_r44.organizationName : "");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isAlreadyEnrolled(u_r44.id) ? 7 : -1);
  }
}
function CourseDetailComponent_Conditional_7_Conditional_20_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users match this filter.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139);
    \u0275\u0275repeaterCreate(1, CourseDetailComponent_Conditional_7_Conditional_20_For_2_Template, 8, 9, "label", 141, _forTrack0, false, CourseDetailComponent_Conditional_7_Conditional_20_ForEmpty_3_Template, 5, 0, "div", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.userSearchResults());
  }
}
function CourseDetailComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95);
    \u0275\u0275listener("click.self", function CourseDetailComponent_Conditional_7_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEnrollModal());
    });
    \u0275\u0275elementStart(1, "div", 96)(2, "div", 97)(3, "h2");
    \u0275\u0275text(4, "Add People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 98);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_7_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEnrollModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 99)(8, "div", 135)(9, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.enrollSearch, $event) || (ctx_r0.enrollSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function CourseDetailComponent_Conditional_7_Template_input_input_9_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchUsers());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 137);
    \u0275\u0275twoWayListener("ngModelChange", function CourseDetailComponent_Conditional_7_Template_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.enrollRole, $event) || (ctx_r0.enrollRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function CourseDetailComponent_Conditional_7_Template_select_change_10_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.searchUsers());
    });
    \u0275\u0275elementStart(11, "option", 138);
    \u0275\u0275text(12, "All roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option");
    \u0275\u0275text(14, "Learner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option");
    \u0275\u0275text(16, "Instructor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option");
    \u0275\u0275text(18, "Observer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, CourseDetailComponent_Conditional_7_Conditional_19_Template, 2, 0, "div", 1)(20, CourseDetailComponent_Conditional_7_Conditional_20_Template, 4, 1, "div", 139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 111)(22, "span", 140);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 93);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_7_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeEnrollModal());
    });
    \u0275\u0275text(25, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 94);
    \u0275\u0275listener("click", function CourseDetailComponent_Conditional_7_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.enrollSelected());
    });
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.enrollSearch);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.enrollRole);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r0.loadingUserSearch() ? 19 : 20);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedUserIds().size, " selected ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.enrolling() || ctx_r0.selectedUserIds().size === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.enrolling() ? "Enrolling\u2026" : "Enroll " + ctx_r0.selectedUserIds().size + " user(s)", " ");
  }
}
function CourseDetailComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "video", 145);
    \u0275\u0275text(1, " Your browser does not support video playback. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", page_r45.videoUrl, \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailComponent_ng_template_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 146)(1, "span", 8);
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Download File ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", page_r45.fileUrl, \u0275\u0275sanitizeUrl);
  }
}
function CourseDetailComponent_ng_template_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 33);
    \u0275\u0275pipe(1, "safeHtml");
  }
  if (rf & 2) {
    const page_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, page_r45.body), \u0275\u0275sanitizeHtml);
  }
}
function CourseDetailComponent_ng_template_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 8);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "This page has no content yet.");
    \u0275\u0275elementEnd()();
  }
}
function CourseDetailComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CourseDetailComponent_ng_template_8_Conditional_0_Template, 2, 1, "video", 145)(1, CourseDetailComponent_ng_template_8_Conditional_1_Template, 4, 1, "a", 146)(2, CourseDetailComponent_ng_template_8_Conditional_2_Template, 2, 3, "div", 33)(3, CourseDetailComponent_ng_template_8_Conditional_3_Template, 5, 0, "div", 34);
  }
  if (rf & 2) {
    const page_r45 = ctx.$implicit;
    \u0275\u0275conditional(page_r45.contentType === "Video" && page_r45.videoUrl ? 0 : page_r45.contentType === "File" && page_r45.fileUrl ? 1 : page_r45.body ? 2 : 3);
  }
}
var CourseDetailComponent = class _CourseDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  cSvc = inject(CourseService);
  aSvc = inject(AssignmentService);
  qSvc = inject(QuizService);
  uSvc = inject(UserService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  userSearchTimer = null;
  // ── State ──────────────────────────────────────────────────────────────────
  course = signal(null, ...ngDevMode ? [{ debugName: "course" }] : []);
  quizzes = signal([], ...ngDevMode ? [{ debugName: "quizzes" }] : []);
  assignments = signal([], ...ngDevMode ? [{ debugName: "assignments" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  activeSection = signal("home", ...ngDevMode ? [{ debugName: "activeSection" }] : []);
  expandedModules = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "expandedModules" }] : []);
  frontPage = signal(null, ...ngDevMode ? [{ debugName: "frontPage" }] : []);
  activeAssignment = signal(null, ...ngDevMode ? [{ debugName: "activeAssignment" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  submitDone = signal(false, ...ngDevMode ? [{ debugName: "submitDone" }] : []);
  submitError = signal("", ...ngDevMode ? [{ debugName: "submitError" }] : []);
  submissionText = "";
  // Course modal
  showCourseModal = signal(false, ...ngDevMode ? [{ debugName: "showCourseModal" }] : []);
  savingCourse = signal(false, ...ngDevMode ? [{ debugName: "savingCourse" }] : []);
  courseError = signal("", ...ngDevMode ? [{ debugName: "courseError" }] : []);
  courseForm = {
    title: "",
    description: "",
    category: "",
    tags: "",
    passingScorePercent: 70,
    startDate: "",
    endDate: ""
  };
  // Syllabus inline
  editingSyllabus = signal(false, ...ngDevMode ? [{ debugName: "editingSyllabus" }] : []);
  savingSyllabus = signal(false, ...ngDevMode ? [{ debugName: "savingSyllabus" }] : []);
  syllabusDraft = "";
  // Module modal
  showModuleModal = signal(false, ...ngDevMode ? [{ debugName: "showModuleModal" }] : []);
  editingModuleId = signal(null, ...ngDevMode ? [{ debugName: "editingModuleId" }] : []);
  savingModule = signal(false, ...ngDevMode ? [{ debugName: "savingModule" }] : []);
  moduleError = signal("", ...ngDevMode ? [{ debugName: "moduleError" }] : []);
  moduleForm = { title: "", description: "" };
  // Add-item modal
  showAddItemModal = signal(false, ...ngDevMode ? [{ debugName: "showAddItemModal" }] : []);
  savingItem = signal(false, ...ngDevMode ? [{ debugName: "savingItem" }] : []);
  itemError = signal("", ...ngDevMode ? [{ debugName: "itemError" }] : []);
  addItemForm = {
    moduleId: null,
    itemType: "Page",
    pageId: null,
    quizId: null,
    assignmentId: null,
    title: "",
    isRequired: true,
    isPublished: false
  };
  // Assignment modal
  showAssignmentModal = signal(false, ...ngDevMode ? [{ debugName: "showAssignmentModal" }] : []);
  savingAssignment = signal(false, ...ngDevMode ? [{ debugName: "savingAssignment" }] : []);
  assignmentError = signal("", ...ngDevMode ? [{ debugName: "assignmentError" }] : []);
  assignmentForm = {
    title: "",
    instructions: "",
    dueDate: "",
    maxPoints: 100,
    isRequired: true
  };
  // Enrollments / People
  enrollments = signal([], ...ngDevMode ? [{ debugName: "enrollments" }] : []);
  loadingEnrollments = signal(false, ...ngDevMode ? [{ debugName: "loadingEnrollments" }] : []);
  showEnrollModal = signal(false, ...ngDevMode ? [{ debugName: "showEnrollModal" }] : []);
  enrolling = signal(false, ...ngDevMode ? [{ debugName: "enrolling" }] : []);
  userSearchResults = signal([], ...ngDevMode ? [{ debugName: "userSearchResults" }] : []);
  loadingUserSearch = signal(false, ...ngDevMode ? [{ debugName: "loadingUserSearch" }] : []);
  selectedUserIds = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedUserIds" }] : []);
  enrollSearch = "";
  enrollRole = "";
  // ── Computeds ──────────────────────────────────────────────────────────────
  isAdmin = computed(() => this.auth.hasRole("PlatformAdmin", "Instructor"), ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  hasModules = computed(() => (this.course()?.modules.length ?? 0) > 0, ...ngDevMode ? [{ debugName: "hasModules" }] : []);
  totalItems = computed(() => this.course()?.modules.reduce((s, m) => s + m.items.filter((i) => i.itemType !== "SubHeader").length, 0) ?? 0, ...ngDevMode ? [{ debugName: "totalItems" }] : []);
  completedItems = computed(() => this.course()?.modules.flatMap((m) => m.items).filter((i) => i.itemType !== "SubHeader" && i.isCompleted).length ?? 0, ...ngDevMode ? [{ debugName: "completedItems" }] : []);
  progressPercent = computed(() => {
    const total = this.totalItems();
    return total === 0 ? 0 : Math.round(this.completedItems() / total * 100);
  }, ...ngDevMode ? [{ debugName: "progressPercent" }] : []);
  // Counts fed to the shared <app-course-nav> sidebar.
  navCounts = computed(() => {
    const c = this.course();
    if (!c)
      return null;
    return {
      modules: c.modules.length,
      pages: c.pages.length,
      quizzes: this.quizzes().length,
      assignments: this.assignments().length,
      people: this.enrollments().length
    };
  }, ...ngDevMode ? [{ debugName: "navCounts" }] : []);
  canSaveItem() {
    const f = this.addItemForm;
    if (!f.moduleId)
      return false;
    switch (f.itemType) {
      case "Page":
        return f.pageId !== null;
      case "Quiz":
        return f.quizId !== null;
      case "Assignment":
        return f.assignmentId !== null;
      case "SubHeader":
        return f.title.trim().length > 0;
    }
  }
  // ── Lifecycle ──────────────────────────────────────────────────────────────
  ngOnInit() {
    this.reload();
    this.route.queryParamMap.subscribe((qp) => {
      const section = qp.get("section") ?? "home";
      this.activeSection.set(section);
      if (section === "people" && this.isAdmin() && this.enrollments().length === 0) {
        this.loadEnrollments();
      }
    });
  }
  reload() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading.set(true);
    forkJoin({
      course: this.cSvc.getById(id),
      quizzes: this.qSvc.getByCourse(id).pipe(catchError(() => of([]))),
      assignments: this.aSvc.getByCourse(id).pipe(catchError(() => of([])))
    }).subscribe({
      next: (r) => {
        this.course.set(r.course);
        this.quizzes.set(r.quizzes);
        this.assignments.set(r.assignments);
        this.expandedModules.set(new Set(r.course.modules.map((m) => m.id)));
        this.loading.set(false);
        this.loadFrontPageIfNeeded();
        if (this.isAdmin())
          this.loadEnrollments();
      },
      error: () => this.loading.set(false)
    });
  }
  loadFrontPageIfNeeded() {
    const c = this.course();
    if (c?.homePage === "FrontPage" && c.frontPageId) {
      this.cSvc.getPage(c.frontPageId).subscribe({
        next: (p) => this.frontPage.set(p),
        error: () => this.frontPage.set(null)
      });
    } else {
      this.frontPage.set(null);
    }
  }
  goToModule(moduleId) {
    this.activeSection.set("modules");
    this.expandedModules.update((s) => /* @__PURE__ */ new Set([...s, moduleId]));
  }
  // ── Home page picker ───────────────────────────────────────────────────────
  changeHomePage(value) {
    const c = this.course();
    if (!c || c.homePage === value)
      return;
    this.cSvc.setHomePage(c.id, value).subscribe({
      next: (updated) => {
        this.course.update((cur) => cur ? __spreadProps(__spreadValues({}, cur), { homePage: updated.homePage }) : cur);
        this.loadFrontPageIfNeeded();
        this.toast.success("Course home page updated.");
      },
      error: (e) => this.toast.error(e.message)
    });
  }
  // ── Course CRUD ────────────────────────────────────────────────────────────
  openCourseModal() {
    const c = this.course();
    this.courseForm = {
      title: c.title,
      description: c.description ?? "",
      category: c.category ?? "",
      tags: c.tags ?? "",
      passingScorePercent: c.passingScorePercent,
      startDate: c.startDate ? c.startDate.slice(0, 10) : "",
      endDate: c.endDate ? c.endDate.slice(0, 10) : ""
    };
    this.courseError.set("");
    this.showCourseModal.set(true);
  }
  closeCourseModal() {
    this.showCourseModal.set(false);
  }
  saveCourse() {
    this.savingCourse.set(true);
    this.courseError.set("");
    const c = this.course();
    const dto = {
      title: this.courseForm.title.trim(),
      description: this.courseForm.description.trim() || void 0,
      category: this.courseForm.category.trim() || void 0,
      tags: this.courseForm.tags.trim() || void 0,
      passingScorePercent: this.courseForm.passingScorePercent,
      syllabus: c.syllabus ?? void 0,
      startDate: this.courseForm.startDate || void 0,
      endDate: this.courseForm.endDate || void 0
    };
    this.cSvc.update(c.id, dto).subscribe({
      next: () => {
        this.savingCourse.set(false);
        this.closeCourseModal();
        this.reload();
      },
      error: (e) => {
        this.savingCourse.set(false);
        this.courseError.set(e.message);
      }
    });
  }
  // ── Syllabus ───────────────────────────────────────────────────────────────
  startEditSyllabus() {
    this.syllabusDraft = this.course().syllabus ?? "";
    this.editingSyllabus.set(true);
  }
  cancelEditSyllabus() {
    this.editingSyllabus.set(false);
  }
  saveSyllabus() {
    const c = this.course();
    this.savingSyllabus.set(true);
    const dto = {
      title: c.title,
      description: c.description ?? void 0,
      category: c.category ?? void 0,
      tags: c.tags ?? void 0,
      passingScorePercent: c.passingScorePercent,
      syllabus: this.syllabusDraft.trim() || void 0,
      startDate: c.startDate ?? void 0,
      endDate: c.endDate ?? void 0
    };
    this.cSvc.update(c.id, dto).subscribe({
      next: (updated) => {
        this.course.update((cur) => cur ? __spreadProps(__spreadValues({}, cur), { syllabus: updated.syllabus }) : cur);
        this.savingSyllabus.set(false);
        this.editingSyllabus.set(false);
        this.toast.success("Syllabus saved.");
      },
      error: (e) => {
        this.savingSyllabus.set(false);
        this.toast.error(e.message);
      }
    });
  }
  // ── Modules ────────────────────────────────────────────────────────────────
  toggleModuleExpanded(id) {
    const s = new Set(this.expandedModules());
    if (s.has(id))
      s.delete(id);
    else
      s.add(id);
    this.expandedModules.set(s);
  }
  openModuleModal() {
    this.editingModuleId.set(null);
    this.moduleForm = { title: "", description: "" };
    this.moduleError.set("");
    this.showModuleModal.set(true);
  }
  editModule(m) {
    this.editingModuleId.set(m.id);
    this.moduleForm = { title: m.title, description: m.description ?? "" };
    this.moduleError.set("");
    this.showModuleModal.set(true);
  }
  closeModuleModal() {
    this.showModuleModal.set(false);
  }
  saveModule() {
    const c = this.course();
    if (!c)
      return;
    this.savingModule.set(true);
    this.moduleError.set("");
    const editingId = this.editingModuleId();
    const obs = editingId ? this.cSvc.updateModule(editingId, {
      title: this.moduleForm.title.trim(),
      description: this.moduleForm.description.trim() || void 0,
      orderIndex: c.modules.find((m) => m.id === editingId)?.orderIndex ?? 0
    }) : this.cSvc.createModule({
      courseId: c.id,
      title: this.moduleForm.title.trim(),
      description: this.moduleForm.description.trim() || void 0,
      orderIndex: c.modules.length
    });
    obs.subscribe({
      next: () => {
        this.savingModule.set(false);
        this.closeModuleModal();
        this.reload();
      },
      error: (e) => {
        this.savingModule.set(false);
        this.moduleError.set(e.message);
      }
    });
  }
  deleteModule(m) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Delete module",
        message: `Delete "${m.title}" and remove all its items? Pages, quizzes, and assignments stay at course level.`,
        confirmLabel: "Delete",
        danger: true
      });
      if (!ok)
        return;
      this.cSvc.deleteModule(m.id).subscribe({
        next: () => {
          this.toast.success("Module deleted.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to delete module: ${e.message}`)
      });
    });
  }
  toggleModulePublished(m) {
    this.cSvc.setModulePublished(m.id, !m.isPublished).subscribe({
      next: (updated) => {
        this.course.update((c) => c ? __spreadProps(__spreadValues({}, c), {
          modules: c.modules.map((x) => x.id === m.id ? __spreadProps(__spreadValues({}, x), { isPublished: updated.isPublished }) : x)
        }) : c);
        this.toast.success(updated.isPublished ? "Module published." : "Module unpublished.");
      },
      error: (e) => this.toast.error(`Failed to update module: ${e.message}`)
    });
  }
  // ── Module items ───────────────────────────────────────────────────────────
  openAddItemModal(moduleId) {
    this.addItemForm = {
      moduleId,
      itemType: "Page",
      pageId: null,
      quizId: null,
      assignmentId: null,
      title: "",
      isRequired: true,
      isPublished: true
    };
    this.itemError.set("");
    this.showAddItemModal.set(true);
  }
  closeAddItemModal() {
    this.showAddItemModal.set(false);
  }
  saveItem() {
    if (!this.canSaveItem())
      return;
    const f = this.addItemForm;
    const dto = {
      moduleId: f.moduleId,
      itemType: f.itemType,
      pageId: f.pageId ?? void 0,
      quizId: f.quizId ?? void 0,
      assignmentId: f.assignmentId ?? void 0,
      title: f.title.trim() || void 0,
      isRequired: f.isRequired,
      isPublished: f.isPublished
    };
    this.savingItem.set(true);
    this.itemError.set("");
    this.cSvc.createModuleItem(dto).subscribe({
      next: () => {
        this.savingItem.set(false);
        this.closeAddItemModal();
        this.reload();
      },
      error: (e) => {
        this.savingItem.set(false);
        this.itemError.set(e.message);
      }
    });
  }
  toggleItemPublished(item) {
    this.cSvc.setModuleItemPublished(item.id, !item.isPublished).subscribe({
      next: () => {
        this.course.update((c) => c ? __spreadProps(__spreadValues({}, c), {
          modules: c.modules.map((m) => m.id === item.moduleId ? __spreadProps(__spreadValues({}, m), { items: m.items.map((i) => i.id === item.id ? __spreadProps(__spreadValues({}, i), { isPublished: !i.isPublished }) : i) }) : m)
        }) : c);
      },
      error: (e) => this.toast.error(`Failed to update item: ${e.message}`)
    });
  }
  deleteItem(item) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Remove item",
        message: `Remove "${item.displayTitle}" from this module? The underlying page/quiz/assignment stays at course level.`,
        confirmLabel: "Remove",
        danger: true
      });
      if (!ok)
        return;
      this.cSvc.deleteModuleItem(item.id).subscribe({
        next: () => {
          this.toast.success("Item removed from module.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to remove item: ${e.message}`)
      });
    });
  }
  openItem(item) {
    if (item.itemType === "SubHeader")
      return;
    const t = moduleItemRoute(this.course().id, item);
    this.router.navigate(t.link, { queryParams: t.query });
  }
  // ── Assignments ────────────────────────────────────────────────────────────
  openAssignmentModal() {
    this.assignmentForm = { title: "", instructions: "", dueDate: "", maxPoints: 100, isRequired: true };
    this.assignmentError.set("");
    this.showAssignmentModal.set(true);
  }
  closeAssignmentModal() {
    this.showAssignmentModal.set(false);
  }
  saveAssignment() {
    const c = this.course();
    if (!c)
      return;
    this.savingAssignment.set(true);
    this.assignmentError.set("");
    const dto = {
      courseId: c.id,
      title: this.assignmentForm.title.trim(),
      instructions: this.assignmentForm.instructions.trim() || void 0,
      dueDate: this.assignmentForm.dueDate || void 0,
      maxPoints: this.assignmentForm.maxPoints,
      isRequired: this.assignmentForm.isRequired
    };
    this.aSvc.create(dto).subscribe({
      next: () => {
        this.savingAssignment.set(false);
        this.closeAssignmentModal();
        this.reload();
      },
      error: (e) => {
        this.savingAssignment.set(false);
        this.assignmentError.set(e.message);
      }
    });
  }
  openAssignment(a) {
    this.activeAssignment.set(a);
    this.submissionText = "";
    this.submitDone.set(false);
    this.submitError.set("");
  }
  closeAssignmentSubmit() {
    this.activeAssignment.set(null);
  }
  submitAssignment() {
    this.submitting.set(true);
    this.aSvc.submit(this.activeAssignment().id, { textContent: this.submissionText }).subscribe({
      next: () => {
        this.submitDone.set(true);
        this.submitting.set(false);
      },
      error: (e) => {
        this.submitError.set(e.message);
        this.submitting.set(false);
      }
    });
  }
  deleteAssignment(a) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Delete assignment",
        message: `Delete "${a.title}"? Existing submissions will be preserved.`,
        confirmLabel: "Delete",
        danger: true
      });
      if (!ok)
        return;
      this.aSvc.delete(a.id).subscribe({
        next: () => {
          this.toast.success("Assignment deleted.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to delete assignment: ${e.message}`)
      });
    });
  }
  // ── People ─────────────────────────────────────────────────────────────────
  loadEnrollments() {
    const c = this.course();
    if (!c)
      return;
    this.loadingEnrollments.set(true);
    this.cSvc.getEnrollments(c.id).subscribe({
      next: (list) => {
        this.enrollments.set(list);
        this.loadingEnrollments.set(false);
      },
      error: () => this.loadingEnrollments.set(false)
    });
  }
  openEnrollModal() {
    this.enrollSearch = "";
    this.enrollRole = "";
    this.selectedUserIds.set(/* @__PURE__ */ new Set());
    this.userSearchResults.set([]);
    this.showEnrollModal.set(true);
    this.searchUsers();
  }
  closeEnrollModal() {
    this.showEnrollModal.set(false);
  }
  searchUsers() {
    clearTimeout(this.userSearchTimer);
    this.userSearchTimer = setTimeout(() => {
      this.loadingUserSearch.set(true);
      this.uSvc.getAll({
        search: this.enrollSearch || void 0,
        role: this.enrollRole || void 0,
        page: 1,
        pageSize: 50
      }).subscribe({
        next: (r) => {
          this.userSearchResults.set(r.items);
          this.loadingUserSearch.set(false);
        },
        error: () => this.loadingUserSearch.set(false)
      });
    }, 200);
  }
  isAlreadyEnrolled(userId) {
    return this.enrollments().some((e) => e.userId === userId);
  }
  toggleSelectUser(userId) {
    this.selectedUserIds.update((s) => {
      const next = new Set(s);
      if (next.has(userId))
        next.delete(userId);
      else
        next.add(userId);
      return next;
    });
  }
  enrollSelected() {
    const c = this.course();
    if (!c)
      return;
    const ids = Array.from(this.selectedUserIds());
    if (!ids.length)
      return;
    this.enrolling.set(true);
    this.cSvc.enrollMany(c.id, ids).subscribe({
      next: (count) => {
        this.enrolling.set(false);
        this.closeEnrollModal();
        this.toast.success(`Enrolled ${count} user${count === 1 ? "" : "s"}.`);
        this.loadEnrollments();
      },
      error: (e) => {
        this.enrolling.set(false);
        this.toast.error(e.message);
      }
    });
  }
  unenroll(e) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Remove enrollment",
        message: `Remove ${e.userFullName} from this course? Their progress will be lost.`,
        confirmLabel: "Remove",
        danger: true
      });
      if (!ok)
        return;
      const c = this.course();
      this.cSvc.unenrollUser(c.id, e.userId).subscribe({
        next: () => {
          this.enrollments.update((list) => list.filter((x) => x.id !== e.id));
          this.toast.success("User removed from course.");
        },
        error: (err) => this.toast.error(err.message)
      });
    });
  }
  // ── Course actions ─────────────────────────────────────────────────────────
  publish() {
    const id = this.course().id;
    this.cSvc.publish(id).subscribe({
      next: () => {
        this.toast.success("Course published.");
        this.reload();
      },
      error: (e) => this.toast.error(`Failed to publish: ${e.message}`)
    });
  }
  unpublish() {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Unpublish course",
        message: "Unpublish this course? Learners will lose access until you publish it again. Enrollments and progress are preserved.",
        confirmLabel: "Unpublish"
      });
      if (!ok)
        return;
      this.cSvc.unpublish(this.course().id).subscribe({
        next: () => {
          this.toast.success("Course unpublished.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to unpublish: ${e.message}`)
      });
    });
  }
  archive() {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Archive course",
        message: "Archive this course? It will no longer be visible to learners.",
        confirmLabel: "Archive"
      });
      if (!ok)
        return;
      this.cSvc.archive(this.course().id).subscribe({
        next: () => {
          this.toast.success("Course archived.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to archive: ${e.message}`)
      });
    });
  }
  // ── Icons / classes ────────────────────────────────────────────────────────
  itemIcon(item) {
    if (item.itemType === "Quiz")
      return "quiz";
    if (item.itemType === "Assignment")
      return "assignment";
    if (item.itemType === "SubHeader")
      return "label";
    return this.pageIcon(item.contentType ?? "Article");
  }
  pageIcon(t) {
    return t === "Video" ? "play_circle" : t === "File" ? "attach_file" : "article";
  }
  statusClass(s) {
    return s === "Published" ? "success" : s === "Draft" ? "gray" : "warning";
  }
  static \u0275fac = function CourseDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CourseDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CourseDetailComponent, selectors: [["app-course-detail"]], decls: 10, vars: 7, consts: [["pageBody", ""], [1, "loading-spinner"], [1, "cd-wrap"], [1, "modal-overlay"], [1, "spinner"], [1, "cd-header", "card"], [1, "cd-header-left"], ["routerLink", "/courses", 1, "back-link"], [1, "material-icons"], [1, "meta"], [1, "cd-header-right"], [1, "header-actions"], [1, "progress-wrap"], [1, "cd-shell"], [3, "courseId", "active", "counts"], [1, "cd-main"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], [1, "btn", "btn-primary", "btn-sm", 3, "disabled", "title"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled", "title"], ["title", "Hide from learners; reverts to Draft", 1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "progress-label"], [1, "progress-bar"], [1, "progress-fill"], [1, "card", "date-banner"], [1, "card", "home-picker"], [1, "card", "home-content"], [1, "hp-label"], [1, "hp-options"], ["type", "radio", "name", "hp", 3, "change", "checked"], [3, "title"], ["type", "radio", "name", "hp", 3, "change", "disabled", "checked"], [1, "content-title"], [1, "rich-text", "ck-content", 3, "innerHTML"], [1, "empty-state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "course-desc"], [1, "home-module"], [1, "home-module", 3, "click"], [1, "hm-meta"], [1, "badge", "badge-gray"], [1, "material-icons", "chevron"], [1, "section-head"], [1, "btn", "btn-primary", "btn-sm"], [1, "card", "module-card", 3, "unpub"], [1, "card", "empty-state"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "card", "module-card"], [1, "mod-card-head"], [1, "mod-head-main", 3, "click"], [1, "material-icons", "chev"], [1, "mod-desc"], [1, "mod-head-actions"], [1, "mod-items"], [1, "status-pill"], [1, "icon-btn", 3, "click", "title"], ["title", "Edit module", 1, "icon-btn", 3, "click"], ["title", "Delete module", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "item-row", 3, "unpub", "sub"], [1, "empty-row"], [1, "add-item-btn"], [1, "item-row"], [1, "item-actions"], [1, "material-icons", "sub-icon"], [1, "item-title", "sub-title"], [1, "material-icons", "item-icon"], [1, "item-main", 3, "click"], [1, "item-title"], [1, "item-sub"], ["title", "Completed", 1, "material-icons", "done-icon"], [1, "icon-btn", 3, "title"], ["title", "Remove from module", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "add-item-btn", 3, "click"], [1, "card"], [1, "pages-list"], [1, "page-row"], [1, "page-row", 3, "click"], [1, "material-icons", "asg-icon"], [1, "page-main"], [1, "page-meta"], [1, "page-actions"], [1, "page-actions", 3, "click"], ["title", "Delete assignment", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "card", 2, "padding", "0"], [1, "table-wrap"], [1, "data-table"], [1, "badge", "badge-info"], [1, "badge"], ["title", "Remove from course", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "btn", "btn-secondary", "btn-sm"], [1, "hint"], ["rows", "16", "placeholder", "Write your course syllabus here\u2026", 1, "syllabus-editor", 3, "ngModelChange", "ngModel"], [1, "modal-footer", 2, "padding", "12px 0 0"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "modal-overlay", 3, "click.self"], [1, "modal", "modal-lg"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-group"], ["placeholder", "Course title", 3, "ngModelChange", "ngModel"], ["rows", "4", "placeholder", "Short course overview\u2026", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "12px"], [1, "form-group", 2, "flex", "1"], ["placeholder", "e.g. Engineering", 3, "ngModelChange", "ngModel"], ["placeholder", "comma-separated", 3, "ngModelChange", "ngModel"], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "form-group", 2, "width", "140px"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], [1, "modal-footer"], [1, "modal"], ["placeholder", "e.g. Week 1 \u2014 Introduction", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "What this section covers", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", "Page"], ["value", "Quiz"], ["value", "Assignment"], ["value", "SubHeader"], [2, "display", "flex", "gap", "24px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "13px"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [2, "color", "#64748b", "font-size", "11px"], ["placeholder", "e.g. Required Reading", 3, "ngModelChange", "ngModel"], ["placeholder", "leave blank to use the original title", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. Build a simple classifier", 3, "ngModelChange", "ngModel"], ["rows", "6", "placeholder", "Detailed instructions for the learner", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "step", "0.5", 3, "ngModelChange", "ngModel"], [1, "alert", "alert-warning", 2, "margin-bottom", "16px"], [2, "font-size", "13px", "color", "#64748b", "margin-bottom", "16px"], [1, "alert", "alert-success"], [1, "btn", "btn-primary", 3, "disabled"], ["rows", "8", "placeholder", "Type your answer here\u2026", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "12px", "margin-bottom", "12px"], ["placeholder", "Search by name or email\u2026", 2, "flex", "1", "padding", "8px 12px", "border", "1px solid #e2e8f0", "border-radius", "8px", 3, "ngModelChange", "input", "ngModel"], [2, "padding", "8px 12px", "border", "1px solid #e2e8f0", "border-radius", "8px", 3, "ngModelChange", "change", "ngModel"], ["value", ""], [1, "enroll-list"], [2, "font-size", "12px", "color", "#64748b", "margin-right", "auto"], [1, "enroll-row", 3, "disabled"], [1, "enroll-row"], ["type", "checkbox", 3, "change", "disabled", "checked"], [1, "er-main"], ["controls", "", 1, "lesson-video", 3, "src"], ["target", "_blank", 1, "btn", "btn-primary", 2, "margin-top", "24px", "display", "inline-flex", 3, "href"]], template: function CourseDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CourseDetailComponent_Conditional_0_Template, 2, 0, "div", 1)(1, CourseDetailComponent_Conditional_1_Template, 24, 15, "div", 2);
      \u0275\u0275conditionalCreate(2, CourseDetailComponent_Conditional_2_Template, 44, 10, "div", 3);
      \u0275\u0275conditionalCreate(3, CourseDetailComponent_Conditional_3_Template, 23, 7, "div", 3);
      \u0275\u0275conditionalCreate(4, CourseDetailComponent_Conditional_4_Template, 38, 10, "div", 3);
      \u0275\u0275conditionalCreate(5, CourseDetailComponent_Conditional_5_Template, 34, 8, "div", 3);
      \u0275\u0275conditionalCreate(6, CourseDetailComponent_Conditional_6_Template, 17, 6, "div", 3);
      \u0275\u0275conditionalCreate(7, CourseDetailComponent_Conditional_7_Template, 28, 6, "div", 3);
      \u0275\u0275template(8, CourseDetailComponent_ng_template_8_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.course() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showCourseModal() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showModuleModal() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAddItemModal() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showAssignmentModal() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeAssignment() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showEnrollModal() ? 7 : -1);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, NgTemplateOutlet, CourseNavComponent, SafeHtmlPipe], styles: ['@charset "UTF-8";\n\n\n\n.cd-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.cd-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  margin-top: 4px;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-left[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 13px;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n  min-width: 220px;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%]   .progress-wrap[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%]   .progress-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n  margin-bottom: 6px;\n  display: flex;\n  justify-content: space-between;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--slate-100);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cd-header[_ngcontent-%COMP%]   .cd-header-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-500) 0%,\n      var(--accent-500) 100%);\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cd-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cd-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cd-nav[_ngcontent-%COMP%] {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  overflow: hidden;\n  position: sticky;\n  top: calc(var(--topbar-h) + 16px);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.cd-nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  background: transparent;\n  border: none;\n  border-left: 3px solid transparent;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  text-align: left;\n  transition: all var(--t-fast);\n}\n.cd-nav-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--slate-500);\n}\n.cd-nav-item[_ngcontent-%COMP%]   .cd-nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cd-nav-item[_ngcontent-%COMP%]   .cd-nav-count[_ngcontent-%COMP%] {\n  background: var(--slate-100);\n  color: var(--slate-600);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: var(--r-full);\n}\n.cd-nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n}\n.cd-nav-item.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-left-color: var(--brand-600);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.cd-nav-item.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.cd-nav-item.active[_ngcontent-%COMP%]   .cd-nav-count[_ngcontent-%COMP%] {\n  background: var(--brand-100);\n  color: var(--brand-700);\n}\n.cd-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  min-width: 0;\n}\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.content-title[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--slate-900);\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 4px 0 12px;\n  line-height: 1.5;\n}\n.home-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.home-picker[_ngcontent-%COMP%]   .hp-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.home-picker[_ngcontent-%COMP%]   .hp-label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-500);\n  font-size: 22px;\n}\n.home-picker[_ngcontent-%COMP%]   .hp-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.home-picker[_ngcontent-%COMP%]   .hp-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.home-picker[_ngcontent-%COMP%]   .hp-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.home-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.home-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.home-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--slate-500);\n}\n.home-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-400);\n}\n.home-picker[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%] {\n  background: var(--brand-50);\n  border-color: var(--brand-500);\n  color: var(--brand-700);\n}\n.home-picker[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.home-picker[_ngcontent-%COMP%]   label.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.home-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.course-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate-600);\n  line-height: 1.6;\n}\n.home-module[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.home-module[_ngcontent-%COMP%]:hover {\n  border-color: var(--brand-400);\n  background: var(--brand-50);\n}\n.home-module[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-500);\n  font-size: 22px;\n}\n.home-module[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.home-module[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.home-module[_ngcontent-%COMP%]   .hm-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.home-module[_ngcontent-%COMP%]   .chevron[_ngcontent-%COMP%] {\n  color: var(--slate-400);\n  font-size: 20px;\n}\n.date-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-50) 0%,\n      var(--surface) 100%);\n  border-left: 4px solid var(--brand-500);\n}\n.date-banner[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n  font-size: 22px;\n}\n.date-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.module-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.module-card.unpub[_ngcontent-%COMP%]   .mod-card-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--slate-400);\n}\n.mod-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  gap: 12px;\n  background: var(--slate-50);\n  border-bottom: 1px solid var(--border-soft);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.mod-head-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n}\n.mod-head-main[_ngcontent-%COMP%]   .chev[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--slate-500);\n  flex-shrink: 0;\n}\n.mod-head-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.mod-head-main[_ngcontent-%COMP%]   .mod-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: 8px;\n}\n.mod-head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: var(--r-full);\n  background: var(--slate-100);\n  color: var(--slate-500);\n}\n.status-pill.on[_ngcontent-%COMP%] {\n  background: var(--success-50, #ecfdf5);\n  color: var(--success-700, #047857);\n}\n.mod-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.item-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 18px;\n  border-top: 1px solid var(--border-soft);\n  font-size: 13px;\n}\n.item-row[_ngcontent-%COMP%]:first-child {\n  border-top: none;\n}\n.item-row.unpub[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.item-row.sub[_ngcontent-%COMP%] {\n  background: var(--slate-50);\n}\n.item-row.sub[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  color: var(--slate-600);\n}\n.item-row.sub[_ngcontent-%COMP%]   .sub-icon[_ngcontent-%COMP%] {\n  color: var(--slate-400);\n  font-size: 16px;\n}\n.item-row[_ngcontent-%COMP%]   .item-icon[_ngcontent-%COMP%] {\n  color: var(--slate-500);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.item-row[_ngcontent-%COMP%]   .item-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  cursor: pointer;\n  min-width: 0;\n}\n.item-row[_ngcontent-%COMP%]   .item-main[_ngcontent-%COMP%]:hover   .item-title[_ngcontent-%COMP%] {\n  color: var(--brand-700);\n}\n.item-row[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  flex-shrink: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--slate-800);\n}\n.item-row[_ngcontent-%COMP%]   .item-sub[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.item-row[_ngcontent-%COMP%]   .done-icon[_ngcontent-%COMP%] {\n  color: var(--success-600);\n  font-size: 18px;\n}\n.item-row[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n  display: none;\n  gap: 2px;\n}\n.item-row[_ngcontent-%COMP%]:hover   .item-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n.empty-row[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.add-item-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 18px;\n  background: transparent;\n  border: none;\n  border-top: 1px dashed var(--border);\n  color: var(--brand-600);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--t-fast);\n}\n.add-item-btn[_ngcontent-%COMP%]:hover {\n  background: var(--brand-50);\n}\n.add-item-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  cursor: pointer;\n  transition: all var(--t-fast);\n  text-decoration: none;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.icon-btn.icon-btn-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n.icon-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row[_ngcontent-%COMP%]:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row.quiz-icon[_ngcontent-%COMP%], \n.page-row[_ngcontent-%COMP%]   .quiz-icon[_ngcontent-%COMP%] {\n  color: var(--accent-600);\n}\n.page-row.asg-icon[_ngcontent-%COMP%], \n.page-row[_ngcontent-%COMP%]   .asg-icon[_ngcontent-%COMP%] {\n  color: var(--warning-600);\n}\n.page-row[_ngcontent-%COMP%]   .page-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row[_ngcontent-%COMP%]   .page-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row[_ngcontent-%COMP%]   .page-actions[_ngcontent-%COMP%] {\n  display: none;\n  gap: 2px;\n}\n.page-row[_ngcontent-%COMP%]:hover   .page-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n.syllabus-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 13px;\n  line-height: 1.6;\n  padding: 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  resize: vertical;\n}\n.rich-text[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  font-size: 15px;\n  color: var(--slate-800);\n}\n.rich-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.rich-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.rich-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 20px 0 10px;\n  font-weight: 600;\n  color: var(--slate-900);\n}\n.rich-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.rich-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.rich-text[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  margin-bottom: 14px;\n}\n.rich-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--brand-600);\n}\n.rich-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border-radius: var(--r-md);\n}\n.rich-text[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  background: var(--slate-100);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  color: var(--accent-700, #6d28d9);\n}\n.rich-text[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background: var(--slate-900);\n  color: #e2e8f0;\n  padding: 18px;\n  border-radius: var(--r-md);\n  overflow-x: auto;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.rich-text[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: transparent;\n  padding: 0;\n  color: inherit;\n}\n.rich-text[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--brand-500);\n  padding: 8px 16px;\n  background: var(--brand-50);\n  color: var(--slate-700);\n  margin: 12px 0;\n  border-radius: 0 var(--r-md) var(--r-md) 0;\n}\n.lesson-video[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 420px;\n  border-radius: var(--r-lg);\n  background: #000;\n  display: block;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-lg);\n}\n.done-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--success-700);\n  font-weight: 600;\n  background: var(--success-50);\n  padding: 6px 12px;\n  border-radius: var(--r-full);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  font-size: 13px;\n  margin-right: auto;\n}\n.done-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.enroll-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.enroll-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.enroll-row[_ngcontent-%COMP%]:hover:not(.disabled) {\n  border-color: var(--brand-400);\n  background: var(--brand-50);\n}\n.enroll-row.disabled[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.enroll-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.enroll-row[_ngcontent-%COMP%]   .er-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.enroll-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate-900);\n}\n.enroll-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.modal-lg[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 90vw;\n}\n/*# sourceMappingURL=course-detail.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CourseDetailComponent, [{
    type: Component,
    args: [{ selector: "app-course-detail", standalone: true, imports: [RouterLink, FormsModule, NgTemplateOutlet, SafeHtmlPipe, CourseNavComponent], template: `
    @if (loading()) {
      <div class="loading-spinner"><div class="spinner"></div></div>
    } @else if (course()) {
      <div class="cd-wrap">

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Header \u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cd-header card">
          <div class="cd-header-left">
            <a routerLink="/courses" class="back-link">
              <span class="material-icons">arrow_back</span> Courses
            </a>
            <div>
              <span class="badge badge-{{ statusClass(course()!.status) }}">{{ course()!.status }}</span>
              <h1>{{ course()!.title }}</h1>
              @if (course()!.category) {
                <span class="meta">{{ course()!.category }}</span>
              }
            </div>
          </div>
          <div class="cd-header-right">
            @if (isAdmin()) {
              <div class="header-actions">
                <button class="btn btn-secondary btn-sm" (click)="openCourseModal()">
                  <span class="material-icons" style="font-size:16px;">edit</span> Edit
                </button>
                @if (course()!.status === 'Draft') {
                  <button class="btn btn-primary btn-sm"
                          (click)="publish()"
                          [disabled]="!hasModules()"
                          [title]="!hasModules() ? 'Add at least one module before publishing' : 'Publish course'">
                    Publish
                  </button>
                }
                @if (course()!.status === 'Published') {
                  <button class="btn btn-secondary btn-sm" (click)="unpublish()" title="Hide from learners; reverts to Draft">
                    Unpublish
                  </button>
                  <button class="btn btn-secondary btn-sm" (click)="archive()">Archive</button>
                }
              </div>
            } @else {
              <div class="progress-wrap">
                <span class="progress-label">{{ progressPercent() }}% complete</span>
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="progressPercent()"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550 Two-column shell (Canvas sidebar) \u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <div class="cd-shell">
          <app-course-nav [courseId]="course()!.id" [active]="activeSection()" [counts]="navCounts()" />

          <main class="cd-main">

            <!-- \u2500\u2500\u2500\u2500\u2500 HOME \u2500\u2500\u2500\u2500\u2500 -->
            @if (activeSection() === 'home') {
              @if (course()!.startDate || course()!.endDate) {
                <div class="card date-banner">
                  <span class="material-icons">event</span>
                  <div>
                    @if (course()!.startDate && course()!.endDate) {
                      <strong>Runs {{ course()!.startDate!.slice(0, 10) }} \u2192 {{ course()!.endDate!.slice(0, 10) }}</strong>
                    } @else if (course()!.startDate) {
                      <strong>Starts {{ course()!.startDate!.slice(0, 10) }}</strong>
                    } @else {
                      <strong>Ends {{ course()!.endDate!.slice(0, 10) }}</strong>
                    }
                  </div>
                </div>
              }

              @if (isAdmin()) {
                <div class="card home-picker">
                  <div class="hp-label">
                    <span class="material-icons">tune</span>
                    <div>
                      <strong>Course home page</strong>
                      <p>What learners see first when they open this course.</p>
                    </div>
                  </div>
                  <div class="hp-options">
                    <label [class.active]="course()!.homePage === 'Modules'">
                      <input type="radio" name="hp" [checked]="course()!.homePage === 'Modules'"
                             (change)="changeHomePage('Modules')" />
                      <span class="material-icons">view_module</span> Modules
                    </label>
                    <label [class.active]="course()!.homePage === 'Syllabus'">
                      <input type="radio" name="hp" [checked]="course()!.homePage === 'Syllabus'"
                             (change)="changeHomePage('Syllabus')" />
                      <span class="material-icons">menu_book</span> Syllabus
                    </label>
                    <label [class.active]="course()!.homePage === 'FrontPage'"
                           [class.disabled]="!course()!.frontPageId"
                           [title]="!course()!.frontPageId ? 'Mark a page as the front page from the Pages section first' : ''">
                      <input type="radio" name="hp" [disabled]="!course()!.frontPageId"
                             [checked]="course()!.homePage === 'FrontPage'"
                             (change)="changeHomePage('FrontPage')" />
                      <span class="material-icons">description</span> Front Page
                    </label>
                  </div>
                </div>
              }

              <div class="card home-content">
                @if (course()!.homePage === 'Syllabus') {
                  <h2 class="content-title">Syllabus</h2>
                  @if (course()!.syllabus) {
                    <div class="rich-text ck-content" [innerHTML]="course()!.syllabus | safeHtml"></div>
                  } @else {
                    <div class="empty-state"><span class="material-icons">menu_book</span>
                      <p>No syllabus has been written yet.</p></div>
                  }
                } @else if (course()!.homePage === 'FrontPage') {
                  @if (frontPage()) {
                    <h2 class="content-title">{{ frontPage()!.title }}</h2>
                    <ng-container *ngTemplateOutlet="pageBody; context: { $implicit: frontPage()! }"></ng-container>
                  } @else {
                    <div class="loading-spinner"><div class="spinner"></div></div>
                  }
                } @else {
                  <h2 class="content-title">Course Overview</h2>
                  @if (course()!.description) {
                    <p class="course-desc">{{ course()!.description }}</p>
                  }
                  @for (mod of course()!.modules; track mod.id) {
                    <div class="home-module" (click)="goToModule(mod.id)">
                      <span class="material-icons">view_module</span>
                      <div>
                        <strong>{{ mod.title }}</strong>
                        <span class="hm-meta">{{ mod.items.length }} item(s)</span>
                      </div>
                      @if (isAdmin() && !mod.isPublished) {
                        <span class="badge badge-gray">Unpublished</span>
                      }
                      <span class="material-icons chevron">chevron_right</span>
                    </div>
                  } @empty {
                    <div class="empty-state"><span class="material-icons">view_module</span>
                      <p>No modules available yet.</p></div>
                  }
                }
              </div>
            }

            <!-- \u2500\u2500\u2500\u2500\u2500 MODULES \u2500\u2500\u2500\u2500\u2500 -->
            @if (activeSection() === 'modules') {
              <div class="section-head">
                <h2 class="content-title">Modules</h2>
                @if (isAdmin()) {
                  <button class="btn btn-primary btn-sm" (click)="openModuleModal()">
                    <span class="material-icons" style="font-size:16px;">add</span> Add Module
                  </button>
                }
              </div>

              @for (mod of course()!.modules; track mod.id) {
                <div class="card module-card" [class.unpub]="!mod.isPublished">
                  <div class="mod-card-head">
                    <div class="mod-head-main" (click)="toggleModuleExpanded(mod.id)">
                      <span class="material-icons chev">
                        {{ expandedModules().has(mod.id) ? 'expand_more' : 'chevron_right' }}
                      </span>
                      <strong>{{ mod.title }}</strong>
                      @if (mod.description) { <span class="mod-desc">{{ mod.description }}</span> }
                    </div>
                    @if (isAdmin()) {
                      <div class="mod-head-actions">
                        <span class="status-pill" [class.on]="mod.isPublished">
                          {{ mod.isPublished ? 'Published' : 'Unpublished' }}
                        </span>
                        <button class="icon-btn" (click)="toggleModulePublished(mod)"
                                [title]="mod.isPublished ? 'Unpublish module' : 'Publish module'">
                          <span class="material-icons">{{ mod.isPublished ? 'visibility' : 'visibility_off' }}</span>
                        </button>
                        <button class="icon-btn" (click)="editModule(mod)" title="Edit module">
                          <span class="material-icons">edit</span>
                        </button>
                        <button class="icon-btn icon-btn-danger" (click)="deleteModule(mod)" title="Delete module">
                          <span class="material-icons">delete</span>
                        </button>
                      </div>
                    }
                  </div>

                  @if (expandedModules().has(mod.id)) {
                    <div class="mod-items">
                      @for (item of mod.items; track item.id) {
                        <div class="item-row" [class.unpub]="!item.isPublished" [class.sub]="item.itemType === 'SubHeader'">
                          @if (item.itemType === 'SubHeader') {
                            <span class="material-icons sub-icon">label</span>
                            <span class="item-title sub-title">{{ item.displayTitle }}</span>
                          } @else {
                            <span class="material-icons item-icon">{{ itemIcon(item) }}</span>
                            <div class="item-main" (click)="openItem(item)">
                              <span class="item-title">{{ item.displayTitle }}</span>
                              @if (item.displaySubtitle) { <span class="item-sub">{{ item.displaySubtitle }}</span> }
                              @else if (item.durationMinutes) { <span class="item-sub">{{ item.durationMinutes }} min</span> }
                              @else if (item.dueDate) { <span class="item-sub">Due {{ item.dueDate.slice(0, 10) }}</span> }
                            </div>
                            @if (!isAdmin() && item.isCompleted) {
                              <span class="material-icons done-icon" title="Completed">check_circle</span>
                            }
                          }
                          @if (isAdmin()) {
                            <div class="item-actions">
                              @if (item.itemType !== 'SubHeader') {
                                <button class="icon-btn" (click)="toggleItemPublished(item)"
                                        [title]="item.isPublished ? 'Unpublish item' : 'Publish item'">
                                  <span class="material-icons">{{ item.isPublished ? 'visibility' : 'visibility_off' }}</span>
                                </button>
                              }
                              <button class="icon-btn icon-btn-danger" (click)="deleteItem(item)" title="Remove from module">
                                <span class="material-icons">remove_circle_outline</span>
                              </button>
                            </div>
                          }
                        </div>
                      } @empty {
                        <p class="empty-row">
                          @if (isAdmin()) {
                            This module is empty \u2014 add pages, quizzes, assignments, or a section label.
                          } @else {
                            Nothing in this module yet.
                          }
                        </p>
                      }
                      @if (isAdmin()) {
                        <button class="add-item-btn" (click)="openAddItemModal(mod.id)">
                          <span class="material-icons">add</span> Add Item
                        </button>
                      }
                    </div>
                  }
                </div>
              } @empty {
                <div class="card empty-state">
                  <span class="material-icons">view_module</span>
                  @if (isAdmin()) {
                    <p>No modules yet. Create one to start organizing your content into sections.</p>
                  } @else {
                    <p>No modules available yet.</p>
                  }
                </div>
              }
            }

            <!-- \u2500\u2500\u2500\u2500\u2500 ASSIGNMENTS \u2500\u2500\u2500\u2500\u2500 -->
            @if (activeSection() === 'assignments') {
              <div class="section-head">
                <h2 class="content-title">Assignments</h2>
                @if (isAdmin()) {
                  <button class="btn btn-primary btn-sm" (click)="openAssignmentModal()">
                    <span class="material-icons" style="font-size:16px;">add</span> New Assignment
                  </button>
                }
              </div>
              <div class="card">
                <div class="pages-list">
                  @for (a of assignments(); track a.id) {
                    <div class="page-row" (click)="openAssignment(a)">
                      <span class="material-icons asg-icon">assignment</span>
                      <div class="page-main">
                        <strong>{{ a.title }}</strong>
                        <span class="page-meta">
                          {{ a.maxPoints }} pt(s)
                          @if (a.dueDate) { \xB7 due {{ a.dueDate.slice(0, 10) }} }
                        </span>
                      </div>
                      @if (isAdmin()) {
                        <div class="page-actions" (click)="$event.stopPropagation()">
                          <button class="icon-btn icon-btn-danger" (click)="deleteAssignment(a)" title="Delete assignment">
                            <span class="material-icons">delete</span>
                          </button>
                        </div>
                      }
                    </div>
                  } @empty {
                    <div class="empty-state"><span class="material-icons">assignment</span>
                      @if (isAdmin()) {
                        <p>No assignments yet.</p>
                      } @else {
                        <p>No assignments available yet.</p>
                      }
                    </div>
                  }
                </div>
              </div>
            }

            <!-- \u2500\u2500\u2500\u2500\u2500 PEOPLE \u2500\u2500\u2500\u2500\u2500 -->
            @if (activeSection() === 'people' && isAdmin()) {
              <div class="section-head">
                <h2 class="content-title">Enrolled people</h2>
                <button class="btn btn-primary btn-sm" (click)="openEnrollModal()">
                  <span class="material-icons" style="font-size:16px;">person_add</span> Add People
                </button>
              </div>
              <div class="card" style="padding:0;">
                @if (loadingEnrollments()) {
                  <div class="loading-spinner"><div class="spinner"></div></div>
                } @else if (enrollments().length) {
                  <div class="table-wrap">
                    <table class="data-table">
                      <thead><tr>
                        <th>Name</th><th>Email</th><th>Role</th><th>Organization</th>
                        <th>Enrolled</th><th>Status</th><th></th>
                      </tr></thead>
                      <tbody>
                        @for (e of enrollments(); track e.id) {
                          <tr>
                            <td>{{ e.userFullName }}</td>
                            <td>{{ e.userEmail }}</td>
                            <td><span class="badge badge-info">{{ e.userRole }}</span></td>
                            <td>{{ e.organizationName ?? '\u2014' }}</td>
                            <td>{{ e.enrolledAt.slice(0, 10) }}</td>
                            <td>
                              <span class="badge"
                                    [class.badge-success]="e.completionStatus === 'Completed'"
                                    [class.badge-warning]="e.completionStatus === 'InProgress'"
                                    [class.badge-gray]="e.completionStatus === 'NotStarted'">
                                {{ e.completionStatus }}
                              </span>
                            </td>
                            <td>
                              <button class="icon-btn icon-btn-danger" (click)="unenroll(e)" title="Remove from course">
                                <span class="material-icons">person_remove</span>
                              </button>
                            </td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                } @else {
                  <div class="empty-state"><span class="material-icons">group</span>
                    <p>No one is enrolled yet. Add learners or instructors to start.</p>
                  </div>
                }
              </div>
            }

            <!-- \u2500\u2500\u2500\u2500\u2500 SYLLABUS \u2500\u2500\u2500\u2500\u2500 -->
            @if (activeSection() === 'syllabus') {
              <div class="section-head">
                <h2 class="content-title">Syllabus</h2>
                @if (isAdmin() && !editingSyllabus()) {
                  <button class="btn btn-secondary btn-sm" (click)="startEditSyllabus()">
                    <span class="material-icons" style="font-size:16px;">edit</span> Edit Syllabus
                  </button>
                }
              </div>
              <div class="card">
                @if (editingSyllabus()) {
                  <p class="hint">Describe the course: objectives, schedule, grading policy, expectations.
                    Basic HTML tags are supported.</p>
                  <textarea class="syllabus-editor" [(ngModel)]="syllabusDraft" rows="16"
                            placeholder="Write your course syllabus here\u2026"></textarea>
                  <div class="modal-footer" style="padding:12px 0 0;">
                    <button class="btn btn-secondary" (click)="cancelEditSyllabus()">Cancel</button>
                    <button class="btn btn-primary" (click)="saveSyllabus()" [disabled]="savingSyllabus()">
                      {{ savingSyllabus() ? 'Saving\u2026' : 'Save Syllabus' }}
                    </button>
                  </div>
                } @else if (course()!.syllabus) {
                  <div class="rich-text ck-content" [innerHTML]="course()!.syllabus | safeHtml"></div>
                } @else {
                  <div class="empty-state"><span class="material-icons">menu_book</span>
                    @if (isAdmin()) {
                      <p>No syllabus yet. Add one so learners know what to expect.</p>
                    } @else {
                      <p>No syllabus has been published for this course.</p>
                    }
                  </div>
                }
              </div>
            }

          </main>
        </div>
      </div>
    }

    <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Modals \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

    <!-- Course modal -->
    @if (showCourseModal()) {
      <div class="modal-overlay" (click.self)="closeCourseModal()">
        <div class="modal modal-lg">
          <div class="modal-header">
            <h2>Edit Course</h2>
            <button class="close-btn" (click)="closeCourseModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (courseError()) { <div class="alert alert-danger">{{ courseError() }}</div> }
            <div class="form-group">
              <label>Title</label>
              <input [(ngModel)]="courseForm.title" placeholder="Course title" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea [(ngModel)]="courseForm.description" rows="4"
                        placeholder="Short course overview\u2026"></textarea>
            </div>
            <div style="display:flex;gap:12px;">
              <div class="form-group" style="flex:1;">
                <label>Category</label>
                <input [(ngModel)]="courseForm.category" placeholder="e.g. Engineering" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>Tags</label>
                <input [(ngModel)]="courseForm.tags" placeholder="comma-separated" />
              </div>
            </div>
            <div style="display:flex;gap:12px;">
              <div class="form-group" style="flex:1;">
                <label>Start date (optional)</label>
                <input type="date" [(ngModel)]="courseForm.startDate" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>End date (optional)</label>
                <input type="date" [(ngModel)]="courseForm.endDate" />
              </div>
              <div class="form-group" style="width:140px;">
                <label>Passing %</label>
                <input type="number" [(ngModel)]="courseForm.passingScorePercent" min="0" max="100" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeCourseModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveCourse()" [disabled]="savingCourse() || !courseForm.title.trim()">
              {{ savingCourse() ? 'Saving\u2026' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Module modal -->
    @if (showModuleModal()) {
      <div class="modal-overlay" (click.self)="closeModuleModal()">
        <div class="modal">
          <div class="modal-header">
            <h2>{{ editingModuleId() ? 'Edit Module' : 'Add Module' }}</h2>
            <button class="close-btn" (click)="closeModuleModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (moduleError()) { <div class="alert alert-danger">{{ moduleError() }}</div> }
            <div class="form-group">
              <label>Module title</label>
              <input [(ngModel)]="moduleForm.title" placeholder="e.g. Week 1 \u2014 Introduction" />
            </div>
            <div class="form-group">
              <label>Description (optional)</label>
              <textarea [(ngModel)]="moduleForm.description" rows="3"
                        placeholder="What this section covers"></textarea>
            </div>
            @if (!editingModuleId()) {
              <p class="hint">New modules start unpublished \u2014 publish them when ready so learners
                see your course one section at a time.</p>
            }
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeModuleModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveModule()" [disabled]="savingModule() || !moduleForm.title.trim()">
              {{ savingModule() ? 'Saving\u2026' : (editingModuleId() ? 'Save Changes' : 'Add Module') }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Add Item modal -->
    @if (showAddItemModal()) {
      <div class="modal-overlay" (click.self)="closeAddItemModal()">
        <div class="modal">
          <div class="modal-header">
            <h2>Add Item to Module</h2>
            <button class="close-btn" (click)="closeAddItemModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (itemError()) { <div class="alert alert-danger">{{ itemError() }}</div> }
            <div class="form-group">
              <label>Item type</label>
              <select [(ngModel)]="addItemForm.itemType">
                <option value="Page">Page (lesson/video/file)</option>
                <option value="Quiz">Quiz</option>
                <option value="Assignment">Assignment</option>
                <option value="SubHeader">Sub-header (label only)</option>
              </select>
            </div>
            @if (addItemForm.itemType === 'Page') {
              <div class="form-group">
                <label>Choose page</label>
                <select [(ngModel)]="addItemForm.pageId">
                  <option [ngValue]="null">\u2014 pick a page \u2014</option>
                  @for (p of course()!.pages; track p.id) {
                    <option [ngValue]="p.id">{{ p.title }} ({{ p.contentType }})</option>
                  }
                </select>
                @if (course()!.pages.length === 0) {
                  <small style="color:#64748b;font-size:11px;">
                    No pages yet \u2014 create one from the Pages section first.
                  </small>
                }
              </div>
            }
            @if (addItemForm.itemType === 'Quiz') {
              <div class="form-group">
                <label>Choose quiz</label>
                <select [(ngModel)]="addItemForm.quizId">
                  <option [ngValue]="null">\u2014 pick a quiz \u2014</option>
                  @for (q of quizzes(); track q.id) {
                    <option [ngValue]="q.id">{{ q.title }}</option>
                  }
                </select>
              </div>
            }
            @if (addItemForm.itemType === 'Assignment') {
              <div class="form-group">
                <label>Choose assignment</label>
                <select [(ngModel)]="addItemForm.assignmentId">
                  <option [ngValue]="null">\u2014 pick an assignment \u2014</option>
                  @for (a of assignments(); track a.id) {
                    <option [ngValue]="a.id">{{ a.title }}</option>
                  }
                </select>
              </div>
            }
            @if (addItemForm.itemType === 'SubHeader') {
              <div class="form-group">
                <label>Section label</label>
                <input [(ngModel)]="addItemForm.title" placeholder="e.g. Required Reading" />
              </div>
            } @else {
              <div class="form-group">
                <label>Display title override (optional)</label>
                <input [(ngModel)]="addItemForm.title" placeholder="leave blank to use the original title" />
              </div>
            }
            <div style="display:flex;gap:24px;">
              <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
                <input type="checkbox" [(ngModel)]="addItemForm.isPublished" />
                Published
              </label>
              <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
                <input type="checkbox" [(ngModel)]="addItemForm.isRequired" />
                Required for completion
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeAddItemModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveItem()" [disabled]="savingItem() || !canSaveItem()">
              {{ savingItem() ? 'Adding\u2026' : 'Add to Module' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Assignment create modal -->
    @if (showAssignmentModal()) {
      <div class="modal-overlay" (click.self)="closeAssignmentModal()">
        <div class="modal modal-lg">
          <div class="modal-header">
            <h2>New Assignment</h2>
            <button class="close-btn" (click)="closeAssignmentModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (assignmentError()) { <div class="alert alert-danger">{{ assignmentError() }}</div> }
            <div class="form-group">
              <label>Title</label>
              <input [(ngModel)]="assignmentForm.title" placeholder="e.g. Build a simple classifier" />
            </div>
            <div class="form-group">
              <label>Instructions</label>
              <textarea [(ngModel)]="assignmentForm.instructions" rows="6"
                        placeholder="Detailed instructions for the learner"></textarea>
            </div>
            <div style="display:flex;gap:12px;">
              <div class="form-group" style="flex:1;">
                <label>Due date (optional)</label>
                <input type="date" [(ngModel)]="assignmentForm.dueDate" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>Max points</label>
                <input type="number" [(ngModel)]="assignmentForm.maxPoints" min="0" step="0.5" />
              </div>
            </div>
            <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
              <input type="checkbox" [(ngModel)]="assignmentForm.isRequired" />
              Required for completion
            </label>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeAssignmentModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveAssignment()"
                    [disabled]="savingAssignment() || !assignmentForm.title.trim()">
              {{ savingAssignment() ? 'Saving\u2026' : 'Create Assignment' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Assignment submission modal -->
    @if (activeAssignment()) {
      <div class="modal-overlay" (click.self)="closeAssignmentSubmit()">
        <div class="modal">
          <div class="modal-header">
            <h2>{{ activeAssignment()!.title }}</h2>
            <button class="close-btn" (click)="closeAssignmentSubmit()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (activeAssignment()!.instructions) {
              <div class="alert alert-warning" style="margin-bottom:16px;">
                {{ activeAssignment()!.instructions }}
              </div>
            }
            @if (activeAssignment()!.dueDate) {
              <p style="font-size:13px;color:#64748b;margin-bottom:16px;">
                Due: {{ activeAssignment()!.dueDate!.slice(0, 10) }}
                \xB7 Max points: {{ activeAssignment()!.maxPoints }}
              </p>
            }
            @if (submitError()) { <div class="alert alert-danger">{{ submitError() }}</div> }
            @if (submitDone()) {
              <div class="alert alert-success">Assignment submitted successfully!</div>
            } @else if (!isAdmin()) {
              <div class="form-group">
                <label>Your Response</label>
                <textarea [(ngModel)]="submissionText" rows="8"
                          placeholder="Type your answer here\u2026"></textarea>
              </div>
            }
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeAssignmentSubmit()">Close</button>
            @if (!submitDone() && !isAdmin()) {
              <button class="btn btn-primary" (click)="submitAssignment()" [disabled]="submitting()">
                {{ submitting() ? 'Submitting\u2026' : 'Submit Assignment' }}
              </button>
            }
          </div>
        </div>
      </div>
    }

    <!-- Enroll people modal -->
    @if (showEnrollModal()) {
      <div class="modal-overlay" (click.self)="closeEnrollModal()">
        <div class="modal modal-lg">
          <div class="modal-header">
            <h2>Add People</h2>
            <button class="close-btn" (click)="closeEnrollModal()">\u2715</button>
          </div>
          <div class="modal-body">
            <div style="display:flex;gap:12px;margin-bottom:12px;">
              <input style="flex:1;padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;"
                     placeholder="Search by name or email\u2026"
                     [(ngModel)]="enrollSearch" (input)="searchUsers()" />
              <select style="padding:8px 12px;border:1px solid #e2e8f0;border-radius:8px;"
                      [(ngModel)]="enrollRole" (change)="searchUsers()">
                <option value="">All roles</option>
                <option>Learner</option>
                <option>Instructor</option>
                <option>Observer</option>
              </select>
            </div>
            @if (loadingUserSearch()) {
              <div class="loading-spinner"><div class="spinner"></div></div>
            } @else {
              <div class="enroll-list">
                @for (u of userSearchResults(); track u.id) {
                  <label class="enroll-row" [class.disabled]="isAlreadyEnrolled(u.id)">
                    <input type="checkbox"
                           [disabled]="isAlreadyEnrolled(u.id)"
                           [checked]="selectedUserIds().has(u.id)"
                           (change)="toggleSelectUser(u.id)" />
                    <div class="er-main">
                      <strong>{{ u.fullName }}</strong>
                      <span>{{ u.email }} \xB7 {{ u.role }}{{ u.organizationName ? ' \xB7 ' + u.organizationName : '' }}</span>
                    </div>
                    @if (isAlreadyEnrolled(u.id)) {
                      <span class="badge badge-gray">Already enrolled</span>
                    }
                  </label>
                } @empty {
                  <div class="empty-state"><span class="material-icons">search_off</span>
                    <p>No users match this filter.</p></div>
                }
              </div>
            }
          </div>
          <div class="modal-footer">
            <span style="font-size:12px;color:#64748b;margin-right:auto;">
              {{ selectedUserIds().size }} selected
            </span>
            <button class="btn btn-secondary" (click)="closeEnrollModal()">Cancel</button>
            <button class="btn btn-primary" (click)="enrollSelected()"
                    [disabled]="enrolling() || selectedUserIds().size === 0">
              {{ enrolling() ? 'Enrolling\u2026' : 'Enroll ' + selectedUserIds().size + ' user(s)' }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- \u2500\u2500\u2500 Shared page-body template (article / video / file) \u2500\u2500\u2500 -->
    <ng-template #pageBody let-page>
      @if (page.contentType === 'Video' && page.videoUrl) {
        <video controls class="lesson-video" [src]="page.videoUrl">
          Your browser does not support video playback.
        </video>
      } @else if (page.contentType === 'File' && page.fileUrl) {
        <a [href]="page.fileUrl" target="_blank" class="btn btn-primary"
           style="margin-top:24px;display:inline-flex;">
          <span class="material-icons">download</span> Download File
        </a>
      } @else if (page.body) {
        <div class="rich-text ck-content" [innerHTML]="page.body | safeHtml"></div>
      } @else {
        <div class="empty-state"><span class="material-icons">description</span>
          <p>This page has no content yet.</p></div>
      }
    </ng-template>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/courses/course-detail/course-detail.scss */\n.cd-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 22px;\n}\n.cd-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.cd-header .cd-header-left {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.cd-header .cd-header-left .back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n}\n.cd-header .cd-header-left .back-link .material-icons {\n  font-size: 16px;\n}\n.cd-header .cd-header-left .back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.cd-header .cd-header-left h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 26px;\n  font-weight: 700;\n  margin-top: 4px;\n  letter-spacing: -0.02em;\n  color: var(--slate-900);\n}\n.cd-header .cd-header-left .meta {\n  color: #64748b;\n  font-size: 13px;\n}\n.cd-header .cd-header-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 12px;\n  min-width: 220px;\n}\n.cd-header .cd-header-right .header-actions {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.cd-header .cd-header-right .progress-wrap {\n  width: 220px;\n}\n.cd-header .cd-header-right .progress-label {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n  margin-bottom: 6px;\n  display: flex;\n  justify-content: space-between;\n}\n.cd-header .cd-header-right .progress-bar {\n  height: 8px;\n  background: var(--slate-100);\n  border-radius: 4px;\n  overflow: hidden;\n}\n.cd-header .cd-header-right .progress-bar .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand-500) 0%,\n      var(--accent-500) 100%);\n  border-radius: 4px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cd-shell {\n  display: grid;\n  grid-template-columns: 220px 1fr;\n  gap: 22px;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .cd-shell {\n    grid-template-columns: 1fr;\n  }\n}\n.cd-nav {\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  box-shadow: var(--shadow-xs);\n  overflow: hidden;\n  position: sticky;\n  top: calc(var(--topbar-h) + 16px);\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.cd-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 16px;\n  background: transparent;\n  border: none;\n  border-left: 3px solid transparent;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  text-align: left;\n  transition: all var(--t-fast);\n}\n.cd-nav-item .material-icons {\n  font-size: 18px;\n  color: var(--slate-500);\n}\n.cd-nav-item .cd-nav-label {\n  flex: 1;\n}\n.cd-nav-item .cd-nav-count {\n  background: var(--slate-100);\n  color: var(--slate-600);\n  font-size: 11px;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: var(--r-full);\n}\n.cd-nav-item:hover {\n  background: var(--slate-50);\n  color: var(--slate-900);\n}\n.cd-nav-item.active {\n  background: var(--brand-50);\n  border-left-color: var(--brand-600);\n  color: var(--brand-700);\n  font-weight: 600;\n}\n.cd-nav-item.active .material-icons {\n  color: var(--brand-600);\n}\n.cd-nav-item.active .cd-nav-count {\n  background: var(--brand-100);\n  color: var(--brand-700);\n}\n.cd-main {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  min-width: 0;\n}\n.section-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.content-title {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  color: var(--slate-900);\n}\n.hint {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin: 4px 0 12px;\n  line-height: 1.5;\n}\n.home-picker {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.home-picker .hp-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n.home-picker .hp-label .material-icons {\n  color: var(--brand-500);\n  font-size: 22px;\n}\n.home-picker .hp-label strong {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.home-picker .hp-label p {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.home-picker .hp-options {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.home-picker label {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--slate-700);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.home-picker label input {\n  display: none;\n}\n.home-picker label .material-icons {\n  font-size: 17px;\n  color: var(--slate-500);\n}\n.home-picker label:hover {\n  border-color: var(--brand-400);\n}\n.home-picker label.active {\n  background: var(--brand-50);\n  border-color: var(--brand-500);\n  color: var(--brand-700);\n}\n.home-picker label.active .material-icons {\n  color: var(--brand-600);\n}\n.home-picker label.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.home-content {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.course-desc {\n  font-size: 14px;\n  color: var(--slate-600);\n  line-height: 1.6;\n}\n.home-module {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.home-module:hover {\n  border-color: var(--brand-400);\n  background: var(--brand-50);\n}\n.home-module > .material-icons {\n  color: var(--brand-500);\n  font-size: 22px;\n}\n.home-module div {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.home-module strong {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.home-module .hm-meta {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.home-module .chevron {\n  color: var(--slate-400);\n  font-size: 20px;\n}\n.date-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand-50) 0%,\n      var(--surface) 100%);\n  border-left: 4px solid var(--brand-500);\n}\n.date-banner .material-icons {\n  color: var(--brand-600);\n  font-size: 22px;\n}\n.date-banner strong {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.module-card {\n  padding: 0;\n  overflow: hidden;\n}\n.module-card.unpub .mod-card-head strong {\n  color: var(--slate-400);\n}\n.mod-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  gap: 12px;\n  background: var(--slate-50);\n  border-bottom: 1px solid var(--border-soft);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.mod-head-main {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n  cursor: pointer;\n}\n.mod-head-main .chev {\n  font-size: 20px;\n  color: var(--slate-500);\n  flex-shrink: 0;\n}\n.mod-head-main strong {\n  font-size: 14px;\n  color: var(--slate-900);\n}\n.mod-head-main .mod-desc {\n  font-size: 12px;\n  color: var(--text-muted);\n  margin-left: 8px;\n}\n.mod-head-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.status-pill {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: var(--r-full);\n  background: var(--slate-100);\n  color: var(--slate-500);\n}\n.status-pill.on {\n  background: var(--success-50, #ecfdf5);\n  color: var(--success-700, #047857);\n}\n.mod-items {\n  display: flex;\n  flex-direction: column;\n}\n.item-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 18px;\n  border-top: 1px solid var(--border-soft);\n  font-size: 13px;\n}\n.item-row:first-child {\n  border-top: none;\n}\n.item-row.unpub {\n  opacity: 0.55;\n}\n.item-row.sub {\n  background: var(--slate-50);\n}\n.item-row.sub .sub-title {\n  font-weight: 700;\n  text-transform: uppercase;\n  font-size: 11px;\n  letter-spacing: 0.05em;\n  color: var(--slate-600);\n}\n.item-row.sub .sub-icon {\n  color: var(--slate-400);\n  font-size: 16px;\n}\n.item-row .item-icon {\n  color: var(--slate-500);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.item-row .item-main {\n  flex: 1;\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  cursor: pointer;\n  min-width: 0;\n}\n.item-row .item-main:hover .item-title {\n  color: var(--brand-700);\n}\n.item-row .item-title {\n  flex-shrink: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--slate-800);\n}\n.item-row .item-sub {\n  font-size: 11px;\n  color: var(--text-muted);\n  flex-shrink: 0;\n}\n.item-row .done-icon {\n  color: var(--success-600);\n  font-size: 18px;\n}\n.item-row .item-actions {\n  display: none;\n  gap: 2px;\n}\n.item-row:hover .item-actions {\n  display: flex;\n}\n.empty-row {\n  padding: 16px 18px;\n  font-size: 12px;\n  color: var(--text-muted);\n  font-style: italic;\n}\n.add-item-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 18px;\n  background: transparent;\n  border: none;\n  border-top: 1px dashed var(--border);\n  color: var(--brand-600);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background var(--t-fast);\n}\n.add-item-btn:hover {\n  background: var(--brand-50);\n}\n.add-item-btn .material-icons {\n  font-size: 16px;\n}\n.icon-btn {\n  width: 28px;\n  height: 28px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  cursor: pointer;\n  transition: all var(--t-fast);\n  text-decoration: none;\n}\n.icon-btn:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n}\n.icon-btn .material-icons {\n  font-size: 16px;\n}\n.icon-btn.icon-btn-danger:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n.icon-btn[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.pages-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.page-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 1px solid transparent;\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.page-row:hover {\n  background: var(--slate-50);\n  border-color: var(--border);\n}\n.page-row > .material-icons {\n  color: var(--slate-500);\n  font-size: 20px;\n}\n.page-row.quiz-icon,\n.page-row .quiz-icon {\n  color: var(--accent-600);\n}\n.page-row.asg-icon,\n.page-row .asg-icon {\n  color: var(--warning-600);\n}\n.page-row .page-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.page-row strong {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--slate-800);\n}\n.page-row .page-meta {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n.page-row .page-actions {\n  display: none;\n  gap: 2px;\n}\n.page-row:hover .page-actions {\n  display: flex;\n}\n.syllabus-editor {\n  width: 100%;\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 13px;\n  line-height: 1.6;\n  padding: 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  resize: vertical;\n}\n.rich-text {\n  line-height: 1.7;\n  font-size: 15px;\n  color: var(--slate-800);\n}\n.rich-text h1,\n.rich-text h2,\n.rich-text h3 {\n  margin: 20px 0 10px;\n  font-weight: 600;\n  color: var(--slate-900);\n}\n.rich-text p {\n  margin-bottom: 14px;\n}\n.rich-text ul,\n.rich-text ol {\n  padding-left: 20px;\n  margin-bottom: 14px;\n}\n.rich-text a {\n  color: var(--brand-600);\n}\n.rich-text img {\n  max-width: 100%;\n  border-radius: var(--r-md);\n}\n.rich-text code {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  background: var(--slate-100);\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 13px;\n  color: var(--accent-700, #6d28d9);\n}\n.rich-text pre {\n  background: var(--slate-900);\n  color: #e2e8f0;\n  padding: 18px;\n  border-radius: var(--r-md);\n  overflow-x: auto;\n  margin-bottom: 14px;\n  font-size: 13px;\n}\n.rich-text pre code {\n  background: transparent;\n  padding: 0;\n  color: inherit;\n}\n.rich-text blockquote {\n  border-left: 4px solid var(--brand-500);\n  padding: 8px 16px;\n  background: var(--brand-50);\n  color: var(--slate-700);\n  margin: 12px 0;\n  border-radius: 0 var(--r-md) var(--r-md) 0;\n}\n.lesson-video {\n  width: 100%;\n  max-height: 420px;\n  border-radius: var(--r-lg);\n  background: #000;\n  display: block;\n  margin-bottom: 24px;\n  box-shadow: var(--shadow-lg);\n}\n.done-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: var(--success-700);\n  font-weight: 600;\n  background: var(--success-50);\n  padding: 6px 12px;\n  border-radius: var(--r-full);\n  border: 1px solid rgba(16, 185, 129, 0.2);\n  font-size: 13px;\n  margin-right: auto;\n}\n.done-badge .material-icons {\n  font-size: 18px;\n}\n.enroll-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  max-height: 360px;\n  overflow-y: auto;\n}\n.enroll-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.enroll-row:hover:not(.disabled) {\n  border-color: var(--brand-400);\n  background: var(--brand-50);\n}\n.enroll-row.disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.enroll-row input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.enroll-row .er-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n}\n.enroll-row strong {\n  font-size: 13px;\n  color: var(--slate-900);\n}\n.enroll-row span {\n  font-size: 12px;\n  color: var(--text-muted);\n}\n.modal-lg .modal-body {\n  max-width: 100%;\n}\n.modal-lg {\n  max-width: 720px;\n  width: 90vw;\n}\n/*# sourceMappingURL=course-detail.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CourseDetailComponent, { className: "CourseDetailComponent", filePath: "src/app/features/courses/course-detail/course-detail.ts", lineNumber: 796 });
})();
export {
  CourseDetailComponent
};
//# sourceMappingURL=chunk-JPHDJ4VE.js.map
