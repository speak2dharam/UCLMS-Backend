import {
  ConfirmService
} from "./chunk-TIHTUW3I.js";
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
  QuizService
} from "./chunk-7E7XGFM5.js";
import {
  ToastService
} from "./chunk-I3QOXDTS.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  __async,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵrepeaterTrackByIndex,
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

// src/app/features/quiz/quiz-editor/quiz-editor.ts
var _c0 = (a0) => ["/courses", a0];
var _forTrack0 = ($index, $item) => $item.id;
function QuizEditorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 25);
  }
}
function QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Conditional_1_Template, 2, 0, "span", 24)(2, QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Conditional_2_Template, 1, 0, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275classProp("correct", o_r5.isCorrect);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r5.isCorrect ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r5.optionText, " ");
  }
}
function QuizEditorComponent_Conditional_1_For_18_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 22);
    \u0275\u0275repeaterCreate(1, QuizEditorComponent_Conditional_1_For_18_Conditional_18_For_2_Template, 4, 4, "li", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(q_r4.options);
  }
}
function QuizEditorComponent_Conditional_1_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 14)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div")(10, "button", 19);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_1_For_18_Template_button_click_10_listener() {
      const q_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editQuestion(q_r4));
    });
    \u0275\u0275elementStart(11, "span", 6);
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_1_For_18_Template_button_click_13_listener() {
      const q_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteQuestion(q_r4));
    });
    \u0275\u0275elementStart(14, "span", 6);
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "p", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, QuizEditorComponent_Conditional_1_For_18_Conditional_18_Template, 3, 0, "ul", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = ctx.$implicit;
    const \u0275$index_35_r6 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275$index_35_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.questionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r4.points, " pts");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(q_r4.questionText);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r4.options && q_r4.options.length ? 18 : -1);
  }
}
function QuizEditorComponent_Conditional_1_ForEmpty_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 6);
    \u0275\u0275text(2, "help_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No questions yet. Add your first one below.");
    \u0275\u0275elementEnd()();
  }
}
function QuizEditorComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 4)(2, "div")(3, "a", 5)(4, "span", 6);
    \u0275\u0275text(5, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Back to course ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "button", 8);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMetaModal());
    });
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Settings ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 10);
    \u0275\u0275repeaterCreate(17, QuizEditorComponent_Conditional_1_For_18_Template, 19, 5, "div", 11, _forTrack0, false, QuizEditorComponent_Conditional_1_ForEmpty_19_Template, 5, 0, "div", 12);
    \u0275\u0275elementStart(20, "button", 13);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openQuestionModal());
    });
    \u0275\u0275elementStart(21, "span", 6);
    \u0275\u0275text(22, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " Add Question ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, ctx_r1.quiz().courseId));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.quiz().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.quiz().questions.length, " question(s) \xB7 Pass: ", ctx_r1.quiz().passingScorePercent, "% ");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.quiz().questions);
  }
}
function QuizEditorComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.questionError());
  }
}
function QuizEditorComponent_Conditional_2_Conditional_30_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "(mark exactly one as correct)");
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_2_Conditional_30_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "(mark one or more as correct)");
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template_input_ngModelChange_1_listener($event) {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(opt_r9.isCorrect, $event) || (opt_r9.isCorrect = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template_input_change_1_listener() {
      const \u0275$index_163_r10 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onOptionCorrectChange(\u0275$index_163_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template_input_ngModelChange_2_listener($event) {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      \u0275\u0275twoWayBindingSet(opt_r9.optionText, $event) || (opt_r9.optionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 52);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template_button_click_3_listener() {
      const \u0275$index_163_r10 = \u0275\u0275restoreView(_r8).$index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeOption(\u0275$index_163_r10));
    });
    \u0275\u0275elementStart(4, "span", 6);
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const \u0275$index_163_r10 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", opt_r9.isCorrect);
    \u0275\u0275property("name", "opt_correct_" + \u0275$index_163_r10);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", opt_r9.optionText);
    \u0275\u0275property("name", "opt_text_" + \u0275$index_163_r10);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.qForm.questionType === "TrueFalse");
  }
}
function QuizEditorComponent_Conditional_2_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_2_Conditional_30_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.addOption());
    });
    \u0275\u0275elementStart(1, "span", 6);
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add option ");
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_2_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "label");
    \u0275\u0275text(2, " Options ");
    \u0275\u0275conditionalCreate(3, QuizEditorComponent_Conditional_2_Conditional_30_Conditional_3_Template, 2, 0, "span", 47);
    \u0275\u0275conditionalCreate(4, QuizEditorComponent_Conditional_2_Conditional_30_Conditional_4_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, QuizEditorComponent_Conditional_2_Conditional_30_For_6_Template, 6, 5, "div", 48, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275conditionalCreate(7, QuizEditorComponent_Conditional_2_Conditional_30_Conditional_7_Template, 4, 0, "button", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.qForm.questionType === "MCQSingle" || ctx_r1.qForm.questionType === "TrueFalse" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.qForm.questionType === "MCQMulti" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.qForm.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.qForm.questionType !== "TrueFalse" ? 7 : -1);
  }
}
function QuizEditorComponent_Conditional_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43);
    \u0275\u0275text(1, " Learners will type a free-text answer. You'll grade it manually after submission. ");
    \u0275\u0275elementEnd();
  }
}
function QuizEditorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click.self", function QuizEditorComponent_Conditional_2_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275conditionalCreate(8, QuizEditorComponent_Conditional_2_Conditional_8_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(9, "div", 32)(10, "label");
    \u0275\u0275text(11, "Question text");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 33);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_2_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qForm.questionText, $event) || (ctx_r1.qForm.questionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 34)(14, "div", 35)(15, "label");
    \u0275\u0275text(16, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 36);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_2_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qForm.questionType, $event) || (ctx_r1.qForm.questionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function QuizEditorComponent_Conditional_2_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTypeChange($event));
    });
    \u0275\u0275elementStart(18, "option", 37);
    \u0275\u0275text(19, "Multiple choice (single answer)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 38);
    \u0275\u0275text(21, "Multiple choice (multiple answers)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 39);
    \u0275\u0275text(23, "True / False");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 40);
    \u0275\u0275text(25, "Short answer (manually graded)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 41)(27, "label");
    \u0275\u0275text(28, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_2_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qForm.points, $event) || (ctx_r1.qForm.points = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(30, QuizEditorComponent_Conditional_2_Conditional_30_Template, 8, 3, "div", 32)(31, QuizEditorComponent_Conditional_2_Conditional_31_Template, 2, 0, "p", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 44)(33, "button", 45);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_2_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeQuestionModal());
    });
    \u0275\u0275text(34, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 46);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_2_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveQuestion());
    });
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.editingQuestionId() ? "Edit Question" : "Add Question");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.questionError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qForm.questionText);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qForm.questionType);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qForm.points);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.qForm.questionType !== "ShortAnswer" ? 30 : 31);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingQuestion() || !ctx_r1.qForm.questionText.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingQuestion() ? "Saving\u2026" : ctx_r1.editingQuestionId() ? "Save Changes" : "Add Question", " ");
  }
}
function QuizEditorComponent_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.metaError());
  }
}
function QuizEditorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click.self", function QuizEditorComponent_Conditional_3_Template_div_click_self_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMetaModal());
    });
    \u0275\u0275elementStart(1, "div", 54)(2, "div", 28)(3, "h2");
    \u0275\u0275text(4, "Quiz Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMetaModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275conditionalCreate(8, QuizEditorComponent_Conditional_3_Conditional_8_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(9, "div", 32)(10, "label");
    \u0275\u0275text(11, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.title, $event) || (ctx_r1.metaForm.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 32)(14, "label");
    \u0275\u0275text(15, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_textarea_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.description, $event) || (ctx_r1.metaForm.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 34)(18, "div", 35)(19, "label");
    \u0275\u0275text(20, "Time limit (min)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.timeLimitMinutes, $event) || (ctx_r1.metaForm.timeLimitMinutes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 35)(23, "label");
    \u0275\u0275text(24, "Max attempts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.maxAttempts, $event) || (ctx_r1.metaForm.maxAttempts = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 35)(27, "label");
    \u0275\u0275text(28, "Passing %");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.passingScorePercent, $event) || (ctx_r1.metaForm.passingScorePercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 35)(31, "label");
    \u0275\u0275text(32, "Max points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.maxPoints, $event) || (ctx_r1.metaForm.maxPoints = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 59)(35, "label", 60)(36, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.randomizeQuestions, $event) || (ctx_r1.metaForm.randomizeQuestions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, " Randomize ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label", 60)(39, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function QuizEditorComponent_Conditional_3_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.metaForm.isRequired, $event) || (ctx_r1.metaForm.isRequired = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, " Required ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 44)(42, "button", 45);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_3_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMetaModal());
    });
    \u0275\u0275text(43, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 46);
    \u0275\u0275listener("click", function QuizEditorComponent_Conditional_3_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveMeta());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.metaError() ? 8 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.title);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.description);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.timeLimitMinutes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.maxAttempts);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.passingScorePercent);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.maxPoints);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.randomizeQuestions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.metaForm.isRequired);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.savingMeta() || !ctx_r1.metaForm.title.trim());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.savingMeta() ? "Saving\u2026" : "Save Settings", " ");
  }
}
var QuizEditorComponent = class _QuizEditorComponent {
  route = inject(ActivatedRoute);
  qSvc = inject(QuizService);
  toast = inject(ToastService);
  confirm = inject(ConfirmService);
  quiz = signal(null, ...ngDevMode ? [{ debugName: "quiz" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  // Question modal
  showQuestionModal = signal(false, ...ngDevMode ? [{ debugName: "showQuestionModal" }] : []);
  editingQuestionId = signal(null, ...ngDevMode ? [{ debugName: "editingQuestionId" }] : []);
  savingQuestion = signal(false, ...ngDevMode ? [{ debugName: "savingQuestion" }] : []);
  questionError = signal("", ...ngDevMode ? [{ debugName: "questionError" }] : []);
  qForm = {
    questionText: "",
    questionType: "MCQSingle",
    points: 1,
    options: [{ optionText: "", isCorrect: false }, { optionText: "", isCorrect: false }]
  };
  // Settings modal
  showMetaModal = signal(false, ...ngDevMode ? [{ debugName: "showMetaModal" }] : []);
  savingMeta = signal(false, ...ngDevMode ? [{ debugName: "savingMeta" }] : []);
  metaError = signal("", ...ngDevMode ? [{ debugName: "metaError" }] : []);
  metaForm = {
    title: "",
    description: "",
    timeLimitMinutes: null,
    maxAttempts: 3,
    passingScorePercent: 70,
    randomizeQuestions: false,
    isRequired: true,
    maxPoints: 100
  };
  ngOnInit() {
    this.reload();
  }
  reload() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.loading.set(true);
    this.qSvc.getById(id).subscribe({
      next: (q) => {
        this.quiz.set(q);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  // ── Question CRUD ──────────────────────────────────────────────────────────
  openQuestionModal() {
    this.editingQuestionId.set(null);
    this.qForm = {
      questionText: "",
      questionType: "MCQSingle",
      points: 1,
      options: [{ optionText: "", isCorrect: false }, { optionText: "", isCorrect: false }]
    };
    this.questionError.set("");
    this.showQuestionModal.set(true);
  }
  editQuestion(q) {
    this.editingQuestionId.set(q.id);
    this.qForm = {
      questionText: q.questionText,
      questionType: q.questionType,
      points: q.points,
      // The editor-side OptionDto carries isCorrect (learners get AttemptOptionDto without it),
      // so the original answer key is restored when an instructor re-opens a question.
      options: (q.options ?? []).map((o) => ({
        optionText: o.optionText,
        isCorrect: o.isCorrect
      }))
    };
    this.questionError.set("");
    this.showQuestionModal.set(true);
  }
  closeQuestionModal() {
    this.showQuestionModal.set(false);
  }
  onTypeChange(type) {
    if (type === "TrueFalse") {
      this.qForm.options = [
        { optionText: "True", isCorrect: false },
        { optionText: "False", isCorrect: false }
      ];
    } else if (type === "ShortAnswer") {
      this.qForm.options = [];
    } else if (this.qForm.options.length < 2) {
      this.qForm.options = [{ optionText: "", isCorrect: false }, { optionText: "", isCorrect: false }];
    }
  }
  onOptionCorrectChange(idx) {
    if (this.qForm.questionType === "MCQSingle" || this.qForm.questionType === "TrueFalse") {
      if (this.qForm.options[idx].isCorrect) {
        this.qForm.options.forEach((o, i) => {
          if (i !== idx)
            o.isCorrect = false;
        });
      }
    }
  }
  addOption() {
    this.qForm.options.push({ optionText: "", isCorrect: false });
  }
  removeOption(i) {
    if (this.qForm.options.length > 2)
      this.qForm.options.splice(i, 1);
  }
  saveQuestion() {
    const quiz = this.quiz();
    if (!quiz)
      return;
    this.savingQuestion.set(true);
    this.questionError.set("");
    const editingId = this.editingQuestionId();
    const orderIndex = editingId ? quiz.questions.find((q) => q.id === editingId)?.orderIndex ?? 0 : quiz.questions.length;
    const options = this.qForm.questionType === "ShortAnswer" ? [] : this.qForm.options.filter((o) => o.optionText.trim().length > 0).map((o, i) => ({ optionText: o.optionText.trim(), isCorrect: o.isCorrect, orderIndex: i }));
    if (this.qForm.questionType !== "ShortAnswer" && !options.some((o) => o.isCorrect)) {
      this.savingQuestion.set(false);
      this.questionError.set("Please mark at least one option as correct.");
      return;
    }
    const dto = {
      questionText: this.qForm.questionText.trim(),
      questionType: this.qForm.questionType,
      orderIndex,
      points: this.qForm.points,
      options: this.qForm.questionType === "ShortAnswer" ? void 0 : options,
      correctAnswer: void 0
    };
    const obs = editingId ? this.qSvc.updateQuestion(quiz.id, editingId, dto) : this.qSvc.addQuestion(quiz.id, dto);
    obs.subscribe({
      next: () => {
        this.savingQuestion.set(false);
        this.closeQuestionModal();
        this.reload();
      },
      error: (e) => {
        this.savingQuestion.set(false);
        this.questionError.set(e.message);
      }
    });
  }
  deleteQuestion(q) {
    return __async(this, null, function* () {
      const ok = yield this.confirm.ask({
        title: "Delete question",
        message: "Delete this question? Existing attempts that answered it will keep their data.",
        confirmLabel: "Delete",
        danger: true
      });
      if (!ok)
        return;
      const quiz = this.quiz();
      this.qSvc.deleteQuestion(quiz.id, q.id).subscribe({
        next: () => {
          this.toast.success("Question deleted.");
          this.reload();
        },
        error: (e) => this.toast.error(`Failed to delete: ${e.message}`)
      });
    });
  }
  // ── Quiz settings ──────────────────────────────────────────────────────────
  openMetaModal() {
    const q = this.quiz();
    this.metaForm = {
      title: q.title,
      description: q.description ?? "",
      timeLimitMinutes: q.timeLimitMinutes,
      maxAttempts: q.maxAttempts,
      passingScorePercent: q.passingScorePercent,
      randomizeQuestions: q.randomizeQuestions,
      isRequired: q.isRequired,
      maxPoints: q.maxPoints
    };
    this.metaError.set("");
    this.showMetaModal.set(true);
  }
  closeMetaModal() {
    this.showMetaModal.set(false);
  }
  saveMeta() {
    const q = this.quiz();
    this.savingMeta.set(true);
    this.metaError.set("");
    const dto = {
      title: this.metaForm.title.trim(),
      description: this.metaForm.description.trim() || void 0,
      timeLimitMinutes: this.metaForm.timeLimitMinutes ?? void 0,
      maxAttempts: this.metaForm.maxAttempts,
      passingScorePercent: this.metaForm.passingScorePercent,
      randomizeQuestions: this.metaForm.randomizeQuestions,
      isRequired: this.metaForm.isRequired,
      maxPoints: this.metaForm.maxPoints
    };
    this.qSvc.update(q.id, dto).subscribe({
      next: () => {
        this.savingMeta.set(false);
        this.closeMetaModal();
        this.reload();
      },
      error: (e) => {
        this.savingMeta.set(false);
        this.metaError.set(e.message);
      }
    });
  }
  static \u0275fac = function QuizEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizEditorComponent, selectors: [["app-quiz-editor"]], decls: 4, vars: 3, consts: [[1, "loading-spinner"], [1, "qe-wrap"], [1, "modal-overlay"], [1, "spinner"], [1, "qe-header", "card"], [1, "back-link", 3, "routerLink"], [1, "material-icons"], [2, "color", "#64748b", "font-size", "13px"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "material-icons", 2, "font-size", "16px"], [1, "qe-questions"], [1, "question-card", "card"], [1, "empty-state", "card"], [1, "btn", "btn-primary", "add-question-btn", 3, "click"], [1, "question-card-head"], [1, "q-meta"], [1, "badge", "badge-info"], [1, "badge", "badge-gray"], [1, "q-points"], ["title", "Edit", 1, "icon-btn", 3, "click"], ["title", "Delete", 1, "icon-btn", "icon-btn-danger", 3, "click"], [1, "q-text"], [1, "q-options"], [3, "correct"], ["title", "Correct answer", 1, "material-icons", "correct-mark"], [1, "opt-dot"], [1, "modal-overlay", 3, "click.self"], [1, "modal", "modal-xl"], [1, "modal-header"], [1, "close-btn", 3, "click"], [1, "modal-body"], [1, "alert", "alert-danger"], [1, "form-group"], ["rows", "3", "placeholder", "Type your question here\u2026", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "12px"], [1, "form-group", 2, "flex", "1"], [3, "ngModelChange", "ngModel"], ["value", "MCQSingle"], ["value", "MCQMulti"], ["value", "TrueFalse"], ["value", "ShortAnswer"], [1, "form-group", 2, "width", "120px"], ["type", "number", "min", "0", "step", "0.5", 3, "ngModelChange", "ngModel"], [2, "color", "#64748b", "font-size", "12px"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click", "disabled"], [2, "color", "#64748b", "font-size", "11px"], [1, "option-row"], [1, "btn-add-option"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel", "name"], ["placeholder", "Option text", 1, "option-text", 3, "ngModelChange", "ngModel", "name"], ["title", "Remove", 1, "icon-btn", "icon-btn-danger", 3, "click", "disabled"], [1, "btn-add-option", 3, "click"], [1, "modal", "modal-lg"], ["rows", "2", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "100", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "gap", "24px"], [2, "display", "flex", "align-items", "center", "gap", "8px", "font-size", "13px"], ["type", "checkbox", 3, "ngModelChange", "ngModel"]], template: function QuizEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, QuizEditorComponent_Conditional_0_Template, 2, 0, "div", 0)(1, QuizEditorComponent_Conditional_1_Template, 24, 7, "div", 1);
      \u0275\u0275conditionalCreate(2, QuizEditorComponent_Conditional_2_Template, 37, 8, "div", 2);
      \u0275\u0275conditionalCreate(3, QuizEditorComponent_Conditional_3_Template, 46, 11, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.quiz() ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showQuestionModal() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showMetaModal() ? 3 : -1);
    }
  }, dependencies: [RouterLink, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ['\n\n.qe-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qe-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.qe-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.qe-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.qe-header[_ngcontent-%COMP%]   .back-link[_ngcontent-%COMP%]:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.qe-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.qe-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.question-card[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n.question-card[_ngcontent-%COMP%]   .question-card-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.question-card[_ngcontent-%COMP%]   .q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.question-card[_ngcontent-%COMP%]   .q-points[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.question-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  line-height: 1.5;\n  color: var(--slate-900);\n}\n.question-card[_ngcontent-%COMP%]   .q-options[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.question-card[_ngcontent-%COMP%]   .q-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  color: var(--slate-700);\n}\n.question-card[_ngcontent-%COMP%]   .q-options[_ngcontent-%COMP%]   li.correct[_ngcontent-%COMP%] {\n  background: var(--success-50, #ecfdf5);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: var(--success-700, #047857);\n  font-weight: 500;\n}\n.question-card[_ngcontent-%COMP%]   .q-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .correct-mark[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--success-600, #059669);\n}\n.question-card[_ngcontent-%COMP%]   .q-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .opt-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--slate-300);\n  margin: 0 5px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  cursor: pointer;\n  text-decoration: none;\n  transition: all var(--t-fast);\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n}\n.icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.icon-btn.icon-btn-danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n.icon-btn[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 56px 20px;\n  color: var(--text-muted);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n  color: var(--slate-300);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.add-question-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n}\n.add-question-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.option-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.option-row[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.option-row[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  background: var(--surface);\n}\n.option-row[_ngcontent-%COMP%]   .option-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.btn-add-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n  background: transparent;\n  border: 1px dashed var(--slate-300);\n  border-radius: var(--r-sm);\n  padding: 6px 12px;\n  color: var(--text-muted);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.btn-add-option[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  border-color: var(--primary);\n  background: var(--brand-50);\n}\n.btn-add-option[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.modal-xl[_ngcontent-%COMP%] {\n  max-width: 720px;\n  width: 90vw;\n}\n.modal-lg[_ngcontent-%COMP%] {\n  max-width: 640px;\n  width: 90vw;\n}\n/*# sourceMappingURL=quiz-editor.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizEditorComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-editor", standalone: true, imports: [RouterLink, FormsModule], template: `
    @if (loading()) {
      <div class="loading-spinner"><div class="spinner"></div></div>
    } @else if (quiz()) {
      <div class="qe-wrap">

        <!-- Header -->
        <div class="qe-header card">
          <div>
            <a [routerLink]="['/courses', quiz()!.courseId]" class="back-link">
              <span class="material-icons">arrow_back</span> Back to course
            </a>
            <h1>{{ quiz()!.title }}</h1>
            <span style="color:#64748b;font-size:13px;">
              {{ quiz()!.questions.length }} question(s) \xB7 Pass: {{ quiz()!.passingScorePercent }}%
            </span>
          </div>
          <div>
            <button class="btn btn-secondary btn-sm" (click)="openMetaModal()">
              <span class="material-icons" style="font-size:16px;">settings</span> Settings
            </button>
          </div>
        </div>

        <!-- Question list -->
        <div class="qe-questions">
          @for (q of quiz()!.questions; track q.id; let idx = $index) {
            <div class="question-card card">
              <div class="question-card-head">
                <div class="q-meta">
                  <span class="badge badge-info">{{ idx + 1 }}</span>
                  <span class="badge badge-gray">{{ q.questionType }}</span>
                  <span class="q-points">{{ q.points }} pts</span>
                </div>
                <div>
                  <button class="icon-btn" (click)="editQuestion(q)" title="Edit">
                    <span class="material-icons">edit</span>
                  </button>
                  <button class="icon-btn icon-btn-danger" (click)="deleteQuestion(q)" title="Delete">
                    <span class="material-icons">delete</span>
                  </button>
                </div>
              </div>
              <p class="q-text">{{ q.questionText }}</p>
              @if (q.options && q.options.length) {
                <ul class="q-options">
                  @for (o of q.options; track o.id) {
                    <li [class.correct]="o.isCorrect">
                      @if (o.isCorrect) {
                        <span class="material-icons correct-mark" title="Correct answer">check_circle</span>
                      } @else {
                        <span class="opt-dot"></span>
                      }
                      {{ o.optionText }}
                    </li>
                  }
                </ul>
              }
            </div>
          } @empty {
            <div class="empty-state card">
              <span class="material-icons">help_outline</span>
              <p>No questions yet. Add your first one below.</p>
            </div>
          }

          <button class="btn btn-primary add-question-btn" (click)="openQuestionModal()">
            <span class="material-icons">add</span> Add Question
          </button>
        </div>
      </div>
    }

    <!-- Question modal -->
    @if (showQuestionModal()) {
      <div class="modal-overlay" (click.self)="closeQuestionModal()">
        <div class="modal modal-xl">
          <div class="modal-header">
            <h2>{{ editingQuestionId() ? 'Edit Question' : 'Add Question' }}</h2>
            <button class="close-btn" (click)="closeQuestionModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (questionError()) { <div class="alert alert-danger">{{ questionError() }}</div> }

            <div class="form-group">
              <label>Question text</label>
              <textarea [(ngModel)]="qForm.questionText" rows="3"
                        placeholder="Type your question here\u2026"></textarea>
            </div>

            <div style="display:flex;gap:12px;">
              <div class="form-group" style="flex:1;">
                <label>Type</label>
                <select [(ngModel)]="qForm.questionType" (ngModelChange)="onTypeChange($event)">
                  <option value="MCQSingle">Multiple choice (single answer)</option>
                  <option value="MCQMulti">Multiple choice (multiple answers)</option>
                  <option value="TrueFalse">True / False</option>
                  <option value="ShortAnswer">Short answer (manually graded)</option>
                </select>
              </div>
              <div class="form-group" style="width:120px;">
                <label>Points</label>
                <input type="number" [(ngModel)]="qForm.points" min="0" step="0.5" />
              </div>
            </div>

            @if (qForm.questionType !== 'ShortAnswer') {
              <div class="form-group">
                <label>
                  Options
                  @if (qForm.questionType === 'MCQSingle' || qForm.questionType === 'TrueFalse') {
                    <span style="color:#64748b;font-size:11px;">(mark exactly one as correct)</span>
                  }
                  @if (qForm.questionType === 'MCQMulti') {
                    <span style="color:#64748b;font-size:11px;">(mark one or more as correct)</span>
                  }
                </label>
                @for (opt of qForm.options; track $index; let i = $index) {
                  <div class="option-row">
                    <input type="checkbox" [(ngModel)]="opt.isCorrect"
                           (change)="onOptionCorrectChange(i)"
                           [name]="'opt_correct_' + i" />
                    <input class="option-text" [(ngModel)]="opt.optionText"
                           placeholder="Option text"
                           [name]="'opt_text_' + i" />
                    <button class="icon-btn icon-btn-danger" (click)="removeOption(i)"
                            [disabled]="qForm.questionType === 'TrueFalse'" title="Remove">
                      <span class="material-icons">close</span>
                    </button>
                  </div>
                }
                @if (qForm.questionType !== 'TrueFalse') {
                  <button class="btn-add-option" (click)="addOption()">
                    <span class="material-icons">add</span> Add option
                  </button>
                }
              </div>
            } @else {
              <p style="color:#64748b;font-size:12px;">
                Learners will type a free-text answer. You'll grade it manually after submission.
              </p>
            }
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeQuestionModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveQuestion()"
                    [disabled]="savingQuestion() || !qForm.questionText.trim()">
              {{ savingQuestion() ? 'Saving\u2026' : (editingQuestionId() ? 'Save Changes' : 'Add Question') }}
            </button>
          </div>
        </div>
      </div>
    }

    <!-- Quiz settings modal -->
    @if (showMetaModal()) {
      <div class="modal-overlay" (click.self)="closeMetaModal()">
        <div class="modal modal-lg">
          <div class="modal-header">
            <h2>Quiz Settings</h2>
            <button class="close-btn" (click)="closeMetaModal()">\u2715</button>
          </div>
          <div class="modal-body">
            @if (metaError()) { <div class="alert alert-danger">{{ metaError() }}</div> }
            <div class="form-group">
              <label>Title</label>
              <input [(ngModel)]="metaForm.title" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea [(ngModel)]="metaForm.description" rows="2"></textarea>
            </div>
            <div style="display:flex;gap:12px;">
              <div class="form-group" style="flex:1;">
                <label>Time limit (min)</label>
                <input type="number" [(ngModel)]="metaForm.timeLimitMinutes" min="0" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>Max attempts</label>
                <input type="number" [(ngModel)]="metaForm.maxAttempts" min="1" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>Passing %</label>
                <input type="number" [(ngModel)]="metaForm.passingScorePercent" min="0" max="100" />
              </div>
              <div class="form-group" style="flex:1;">
                <label>Max points</label>
                <input type="number" [(ngModel)]="metaForm.maxPoints" min="0" step="0.5" />
              </div>
            </div>
            <div style="display:flex;gap:24px;">
              <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
                <input type="checkbox" [(ngModel)]="metaForm.randomizeQuestions" /> Randomize
              </label>
              <label style="display:flex;align-items:center;gap:8px;font-size:13px;">
                <input type="checkbox" [(ngModel)]="metaForm.isRequired" /> Required
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" (click)="closeMetaModal()">Cancel</button>
            <button class="btn btn-primary" (click)="saveMeta()"
                    [disabled]="savingMeta() || !metaForm.title.trim()">
              {{ savingMeta() ? 'Saving\u2026' : 'Save Settings' }}
            </button>
          </div>
        </div>
      </div>
    }
  `, styles: ['/* src/app/features/quiz/quiz-editor/quiz-editor.scss */\n.qe-wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qe-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.qe-header .back-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-muted);\n  margin-bottom: 8px;\n}\n.qe-header .back-link .material-icons {\n  font-size: 16px;\n}\n.qe-header .back-link:hover {\n  color: var(--brand-600);\n  text-decoration: none;\n}\n.qe-header h1 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n}\n.qe-questions {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.question-card {\n  padding: 18px;\n}\n.question-card .question-card-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.question-card .q-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.question-card .q-points {\n  font-size: 12px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.question-card .q-text {\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  line-height: 1.5;\n  color: var(--slate-900);\n}\n.question-card .q-options {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.question-card .q-options li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--slate-50);\n  border: 1px solid var(--border-soft);\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  color: var(--slate-700);\n}\n.question-card .q-options li.correct {\n  background: var(--success-50, #ecfdf5);\n  border-color: rgba(16, 185, 129, 0.3);\n  color: var(--success-700, #047857);\n  font-weight: 500;\n}\n.question-card .q-options li .correct-mark {\n  font-size: 16px;\n  color: var(--success-600, #059669);\n}\n.question-card .q-options li .opt-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--slate-300);\n  margin: 0 5px;\n}\n.icon-btn {\n  width: 30px;\n  height: 30px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--r-sm);\n  color: var(--slate-500);\n  cursor: pointer;\n  text-decoration: none;\n  transition: all var(--t-fast);\n}\n.icon-btn:hover {\n  background: var(--slate-100);\n  color: var(--slate-900);\n}\n.icon-btn .material-icons {\n  font-size: 16px;\n}\n.icon-btn.icon-btn-danger:hover {\n  background: var(--danger-50);\n  color: var(--danger-600);\n}\n.icon-btn[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 56px 20px;\n  color: var(--text-muted);\n}\n.empty-state .material-icons {\n  font-size: 48px;\n  margin-bottom: 12px;\n  color: var(--slate-300);\n}\n.empty-state p {\n  font-size: 14px;\n}\n.add-question-btn {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n}\n.add-question-btn .material-icons {\n  font-size: 18px;\n}\n.option-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.option-row input[type=checkbox] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.option-row .option-text {\n  flex: 1;\n  padding: 7px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-sm);\n  font-size: 13px;\n  background: var(--surface);\n}\n.option-row .option-text:focus {\n  outline: none;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);\n}\n.btn-add-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: 6px;\n  background: transparent;\n  border: 1px dashed var(--slate-300);\n  border-radius: var(--r-sm);\n  padding: 6px 12px;\n  color: var(--text-muted);\n  font-size: 12px;\n  cursor: pointer;\n  transition: all var(--t-fast);\n}\n.btn-add-option:hover {\n  color: var(--primary);\n  border-color: var(--primary);\n  background: var(--brand-50);\n}\n.btn-add-option .material-icons {\n  font-size: 14px;\n}\n.modal-xl {\n  max-width: 720px;\n  width: 90vw;\n}\n.modal-lg {\n  max-width: 640px;\n  width: 90vw;\n}\n/*# sourceMappingURL=quiz-editor.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizEditorComponent, { className: "QuizEditorComponent", filePath: "src/app/features/quiz/quiz-editor/quiz-editor.ts", lineNumber: 248 });
})();
export {
  QuizEditorComponent
};
//# sourceMappingURL=chunk-O53OA27R.js.map
