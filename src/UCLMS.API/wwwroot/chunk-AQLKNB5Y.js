import {
  FormsModule
} from "./chunk-COCM6WHS.js";
import {
  QuizService
} from "./chunk-7E7XGFM5.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-HJDD2Z3G.js";
import "./chunk-5J6SOS3L.js";
import {
  Component,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KOVPKQ3I.js";

// src/app/features/quiz/quiz-attempt/quiz-attempt.ts
var _c0 = (a0, a1) => ["/courses", a0, "quizzes", a1];
var _c1 = (a0) => ({ itemId: a0, done: true });
var _forTrack0 = ($index, $item) => $item.questionId;
var _forTrack1 = ($index, $item) => $item.id;
function QuizAttemptComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function QuizAttemptComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementEnd();
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.quiz().description);
  }
}
function QuizAttemptComponent_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.quiz().timeLimitMinutes, " min limit");
  }
}
function QuizAttemptComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 5);
    \u0275\u0275text(2, "quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, QuizAttemptComponent_Conditional_3_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275elementStart(6, "div", 6)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, QuizAttemptComponent_Conditional_3_Conditional_9_Template, 2, 1, "span");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 7);
    \u0275\u0275listener("click", function QuizAttemptComponent_Conditional_3_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.startQuiz());
    });
    \u0275\u0275text(15, "Start Quiz");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quiz().title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.quiz().description ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.quiz().questions.length, " questions");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.quiz().timeLimitMinutes ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Passing: ", ctx_r0.quiz().passingScorePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Max attempts: ", ctx_r0.quiz().maxAttempts);
  }
}
function QuizAttemptComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("urgent", ctx_r0.timeLeft() < 60);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.timeDisplay);
  }
}
function QuizAttemptComponent_Conditional_4_For_7_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 21);
    \u0275\u0275listener("input", function QuizAttemptComponent_Conditional_4_For_7_Conditional_8_Template_textarea_input_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const q_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setTextAnswer(q_r5.questionId, $event.target.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.getTextAnswer(q_r5.questionId));
  }
}
function QuizAttemptComponent_Conditional_4_For_7_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 23)(1, "input", 24);
    \u0275\u0275listener("change", function QuizAttemptComponent_Conditional_4_For_7_Conditional_9_For_2_Template_input_change_1_listener() {
      const opt_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const q_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleOption(q_r5.questionId, opt_r7.id, ctx_r0.isSingle(q_r5.questionType)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const q_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(q_r5.questionId, opt_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.isSingle(q_r5.questionType) ? "radio" : "checkbox")("checked", ctx_r0.isSelected(q_r5.questionId, opt_r7.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r7.optionText, " ");
  }
}
function QuizAttemptComponent_Conditional_4_For_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, QuizAttemptComponent_Conditional_4_For_7_Conditional_9_For_2_Template, 3, 5, "label", 22, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(q_r5.options);
  }
}
function QuizAttemptComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 15)(2, "span", 16);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, QuizAttemptComponent_Conditional_4_For_7_Conditional_8_Template, 1, 1, "textarea", 19)(9, QuizAttemptComponent_Conditional_4_For_7_Conditional_9_Template, 3, 0, "div", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const \u0275$index_56_r8 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275$index_56_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r5.questionText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", q_r5.points, " pts");
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r5.questionType === "ShortAnswer" ? 8 : 9);
  }
}
function QuizAttemptComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, QuizAttemptComponent_Conditional_4_Conditional_3_Template, 2, 3, "span", 10);
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function QuizAttemptComponent_Conditional_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitQuiz());
    });
    \u0275\u0275text(5, "Submit Quiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, QuizAttemptComponent_Conditional_4_For_7_Template, 10, 4, "div", 12, _forTrack0);
    \u0275\u0275elementStart(8, "div", 13)(9, "button", 7);
    \u0275\u0275listener("click", function QuizAttemptComponent_Conditional_4_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitQuiz());
    });
    \u0275\u0275text(10, "Submit Quiz");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.attempt().questions.length, " questions");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.attempt().timeLimitMinutes ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.attempt().questions);
  }
}
function QuizAttemptComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "Some short answers are pending manual grading \u2014 score may change.");
    \u0275\u0275elementEnd();
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const ar_r9 = \u0275\u0275readContextLet(0);
    \u0275\u0275styleProp("color", (ar_r9 == null ? null : ar_r9.isCorrect) ? "#16a34a" : "#dc2626");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ar_r9 == null ? null : ar_r9.isCorrect) ? "check_circle" : "cancel", " ");
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getTextAnswer(q_r10.questionId) || "(no answer)");
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    const q_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.isSelected(q_r10.questionId, opt_r11.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r11.optionText, " ");
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, QuizAttemptComponent_Conditional_5_For_11_Conditional_11_For_2_Template, 2, 3, "div", 36, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(q_r10.options);
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const ar_r9 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Correct answer: ", ar_r9.correctAnswer);
  }
}
function QuizAttemptComponent_Conditional_5_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 15)(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, QuizAttemptComponent_Conditional_5_For_11_Conditional_7_Template, 2, 3, "span", 33);
    \u0275\u0275elementStart(8, "span", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, QuizAttemptComponent_Conditional_5_For_11_Conditional_10_Template, 2, 1, "div", 34)(11, QuizAttemptComponent_Conditional_5_For_11_Conditional_11_Template, 3, 0, "div", 20);
    \u0275\u0275conditionalCreate(12, QuizAttemptComponent_Conditional_5_For_11_Conditional_12_Template, 2, 1, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const \u0275$index_106_r12 = ctx.$index;
    const ar_r13 = \u0275\u0275storeLet(\u0275\u0275nextContext(2).getAnswerResult(q_r10.questionId));
    \u0275\u0275advance();
    \u0275\u0275classProp("correct", (ar_r13 == null ? null : ar_r13.isCorrect) === true)("incorrect", (ar_r13 == null ? null : ar_r13.isCorrect) === false)("pending", (ar_r13 == null ? null : ar_r13.isCorrect) === null);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Q", \u0275$index_106_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r10.questionText);
    \u0275\u0275advance();
    \u0275\u0275conditional((ar_r13 == null ? null : ar_r13.isCorrect) !== null ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (ar_r13 == null ? null : ar_r13.pointsEarned) ?? "?", " / ", q_r10.points);
    \u0275\u0275advance();
    \u0275\u0275conditional(q_r10.questionType === "ShortAnswer" ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ar_r13 == null ? null : ar_r13.correctAnswer) ? 12 : -1);
  }
}
function QuizAttemptComponent_Conditional_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275text(1, " Continue ");
    \u0275\u0275elementStart(2, "span", 38);
    \u0275\u0275text(3, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(2, _c0, ctx_r0.quiz().courseId, ctx_r0.quiz().id))("queryParams", \u0275\u0275pureFunction1(5, _c1, ctx_r0.moduleItemId()));
  }
}
function QuizAttemptComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, QuizAttemptComponent_Conditional_5_Conditional_9_Template, 2, 0, "p", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, QuizAttemptComponent_Conditional_5_For_11_Template, 13, 14, "div", 29, _forTrack0);
    \u0275\u0275elementStart(12, "div", 30)(13, "a", 31);
    \u0275\u0275text(14, "Back to Courses");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, QuizAttemptComponent_Conditional_5_Conditional_15_Template, 4, 7, "a", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("passed", ctx_r0.result().isPassed)("failed", !ctx_r0.result().isPassed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result().isPassed ? "check_circle" : "cancel");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result().isPassed ? "Passed!" : "Not Passed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.result().percentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.result().score, " / ", ctx_r0.result().maxScore, " points");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.result().isFullyGraded ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.attempt().questions);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.moduleItemId() !== null && ctx_r0.quiz() ? 15 : -1);
  }
}
var QuizAttemptComponent = class _QuizAttemptComponent {
  route = inject(ActivatedRoute);
  svc = inject(QuizService);
  quiz = signal(null, ...ngDevMode ? [{ debugName: "quiz" }] : []);
  attempt = signal(null, ...ngDevMode ? [{ debugName: "attempt" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  /** Module item id when launched from the Canvas-style module flow. */
  moduleItemId = signal(null, ...ngDevMode ? [{ debugName: "moduleItemId" }] : []);
  state = signal("loading", ...ngDevMode ? [{ debugName: "state" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  answers = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "answers" }] : []);
  timeLeft = signal(0, ...ngDevMode ? [{ debugName: "timeLeft" }] : []);
  timerRef = null;
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    const itemId = this.route.snapshot.queryParamMap.get("itemId");
    this.moduleItemId.set(itemId !== null ? Number(itemId) : null);
    this.svc.getById(id).subscribe({
      next: (quiz) => {
        this.quiz.set(quiz);
        this.state.set("ready");
      },
      error: () => {
        this.error.set("Failed to load quiz.");
        this.state.set("ready");
      }
    });
  }
  startQuiz() {
    this.error.set("");
    this.svc.startAttempt(this.quiz().id).subscribe({
      next: (attempt) => {
        const map = /* @__PURE__ */ new Map();
        attempt.questions.forEach((q) => map.set(q.questionId, { questionId: q.questionId, selectedOptionIds: [], textAnswer: "" }));
        this.answers.set(map);
        this.attempt.set(attempt);
        this.state.set("started");
        if (attempt.timeLimitMinutes) {
          this.timeLeft.set(attempt.timeLimitMinutes * 60);
          this.timerRef = setInterval(() => {
            this.timeLeft.update((t) => {
              if (t <= 1) {
                this.submitQuiz();
                return 0;
              }
              return t - 1;
            });
          }, 1e3);
        }
      },
      error: (e) => this.error.set(e.message)
    });
  }
  toggleOption(questionId, optionId, single) {
    const map = new Map(this.answers());
    const a = map.get(questionId);
    let ids = [...a.selectedOptionIds ?? []];
    if (single) {
      ids = [optionId];
    } else {
      const idx = ids.indexOf(optionId);
      if (idx >= 0)
        ids.splice(idx, 1);
      else
        ids.push(optionId);
    }
    map.set(questionId, __spreadProps(__spreadValues({}, a), { selectedOptionIds: ids }));
    this.answers.set(map);
  }
  setTextAnswer(questionId, text) {
    const map = new Map(this.answers());
    const a = map.get(questionId);
    map.set(questionId, __spreadProps(__spreadValues({}, a), { textAnswer: text }));
    this.answers.set(map);
  }
  getTextAnswer(questionId) {
    return this.answers().get(questionId)?.textAnswer ?? "";
  }
  isSelected(questionId, optionId) {
    return (this.answers().get(questionId)?.selectedOptionIds ?? []).includes(optionId);
  }
  isSingle(type) {
    return type === "MCQSingle" || type === "TrueFalse";
  }
  submitQuiz() {
    this.stopTimer();
    const answers = [...this.answers().values()].map((a) => ({
      questionId: a.questionId,
      selectedOptionIds: a.selectedOptionIds?.length ? a.selectedOptionIds : void 0,
      textAnswer: a.textAnswer || void 0
    }));
    this.svc.submitAttempt(this.attempt().attemptId, { answers }).subscribe({
      next: (r) => {
        this.result.set(r);
        this.state.set("submitted");
      },
      error: (e) => this.error.set(e.message)
    });
  }
  getAnswerResult(questionId) {
    return this.result()?.answerResults.find((ar) => ar.questionId === questionId);
  }
  get timeDisplay() {
    const t = this.timeLeft();
    return `${Math.floor(t / 60).toString().padStart(2, "0")}:${(t % 60).toString().padStart(2, "0")}`;
  }
  ngOnDestroy() {
    this.stopTimer();
  }
  stopTimer() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
  }
  static \u0275fac = function QuizAttemptComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizAttemptComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizAttemptComponent, selectors: [["app-quiz-attempt"]], decls: 6, vars: 5, consts: [[1, "qa-wrap"], [1, "alert", "alert-danger"], [1, "loading-spinner"], [1, "qa-ready", "card"], [1, "spinner"], [1, "material-icons"], [1, "qa-meta"], [1, "btn", "btn-primary", 3, "click"], [1, "qa-toolbar"], [1, "q-count"], [1, "timer", 3, "urgent"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "question-card", "card"], [2, "text-align", "right", "margin-top", "4px"], [1, "timer"], [1, "q-header"], [1, "q-num"], [1, "q-text"], [1, "q-points"], ["rows", "4", "placeholder", "Type your answer\u2026", 1, "form-control", 3, "value"], [1, "options"], ["rows", "4", "placeholder", "Type your answer\u2026", 1, "form-control", 3, "input", "value"], [1, "option-label", 3, "selected"], [1, "option-label"], [3, "change", "type", "checked"], [1, "result-header", "card"], [1, "score"], [1, "score-detail"], [1, "pending-note"], [1, "question-card", "card", 3, "correct", "incorrect", "pending"], [2, "text-align", "center", "margin-top", "8px", "padding-bottom", "24px", "display", "flex", "gap", "8px", "justify-content", "center"], ["routerLink", "/courses", 1, "btn", "btn-secondary"], [1, "btn", "btn-primary", 3, "routerLink", "queryParams"], [1, "material-icons", 3, "color"], [1, "short-answer-review"], [1, "correct-answer"], [1, "option-result", 3, "selected"], [1, "option-result"], [1, "material-icons", 2, "font-size", "18px", "vertical-align", "middle"]], template: function QuizAttemptComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, QuizAttemptComponent_Conditional_1_Template, 2, 1, "div", 1);
      \u0275\u0275conditionalCreate(2, QuizAttemptComponent_Conditional_2_Template, 2, 0, "div", 2);
      \u0275\u0275conditionalCreate(3, QuizAttemptComponent_Conditional_3_Template, 16, 6, "div", 3);
      \u0275\u0275conditionalCreate(4, QuizAttemptComponent_Conditional_4_Template, 11, 2);
      \u0275\u0275conditionalCreate(5, QuizAttemptComponent_Conditional_5_Template, 16, 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.state() === "loading" ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.state() === "ready" && ctx.quiz() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.state() === "started" && ctx.attempt() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.state() === "submitted" && ctx.result() && ctx.attempt() ? 5 : -1);
    }
  }, dependencies: [RouterLink, FormsModule], styles: ['@charset "UTF-8";\n\n\n\n.qa-wrap[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qa-ready[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 56px 32px;\n}\n.qa-ready[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  color: var(--accent-600);\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #fae8ff 100%);\n  border-radius: 50%;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 24px -8px rgba(124, 58, 237, 0.35);\n}\n.qa-ready[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  margin-bottom: 12px;\n}\n.qa-ready[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-muted);\n  max-width: 500px;\n  margin-bottom: 24px;\n  line-height: 1.55;\n}\n.qa-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.qa-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--slate-100);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  padding: 5px 14px;\n  font-size: 12.5px;\n  color: var(--slate-700);\n  font-weight: 500;\n}\n.qa-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 12px 20px;\n  margin-bottom: 4px;\n  position: sticky;\n  top: calc(var(--topbar-h) + 8px);\n  z-index: 10;\n  box-shadow: var(--shadow-sm);\n}\n.qa-toolbar[_ngcontent-%COMP%]   .q-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.qa-toolbar[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%] {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--slate-900);\n  background: var(--slate-50);\n  padding: 4px 12px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n}\n.qa-toolbar[_ngcontent-%COMP%]   .timer.urgent[_ngcontent-%COMP%] {\n  color: var(--danger-700);\n  background: var(--danger-50);\n  border-color: rgba(239, 68, 68, 0.3);\n  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.65;\n  }\n}\n.question-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-left: 4px solid var(--border);\n}\n.question-card.correct[_ngcontent-%COMP%] {\n  border-left-color: var(--success-500);\n}\n.question-card.incorrect[_ngcontent-%COMP%] {\n  border-left-color: var(--danger-500);\n}\n.question-card.pending[_ngcontent-%COMP%] {\n  border-left-color: var(--warning-500);\n}\n.q-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.q-header[_ngcontent-%COMP%]   .q-num[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent-700, #6d28d9);\n  background: #f5f3ff;\n  padding: 4px 10px;\n  border-radius: var(--r-full);\n  white-space: nowrap;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n}\n.q-header[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--slate-900);\n}\n.q-header[_ngcontent-%COMP%]   .q-points[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  flex-shrink: 0;\n  font-weight: 500;\n}\n.q-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.option-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition:\n    border-color var(--t-fast),\n    background var(--t-fast),\n    transform var(--t-fast);\n  font-size: 14px;\n  background: var(--surface);\n}\n.option-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--accent-600);\n  flex-shrink: 0;\n}\n.option-label[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-500);\n  background: #faf5ff;\n}\n.option-label.selected[_ngcontent-%COMP%] {\n  border-color: var(--accent-600);\n  background: #faf5ff;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);\n}\n.option-result[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 14px;\n  color: var(--slate-600);\n  background: var(--surface);\n}\n.option-result.selected[_ngcontent-%COMP%] {\n  background: var(--info-50);\n  border-color: var(--info-500);\n  color: var(--slate-900);\n  font-weight: 500;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 14px;\n  font-family: inherit;\n  resize: vertical;\n  background: var(--surface);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-600);\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);\n}\n.short-answer-review[_ngcontent-%COMP%] {\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  padding: 12px 16px;\n  border-radius: var(--r-md);\n  font-size: 14px;\n  color: var(--slate-900);\n  white-space: pre-wrap;\n}\n.correct-answer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 13px;\n  color: var(--success-700);\n  font-weight: 500;\n}\n.result-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 48px 32px;\n}\n.result-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 12px;\n  width: 96px;\n  height: 96px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.result-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 8px;\n  letter-spacing: -0.015em;\n}\n.result-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 56px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.result-header[_ngcontent-%COMP%]   .score-detail[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.result-header[_ngcontent-%COMP%]   .pending-note[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 13px;\n  color: var(--warning-700);\n}\n.result-header.passed[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--success-600);\n  background: var(--success-50);\n}\n.result-header.passed[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--success-700);\n}\n.result-header.passed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #14532d;\n}\n.result-header.failed[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--danger-600);\n  background: var(--danger-50);\n}\n.result-header.failed[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--danger-700);\n}\n.result-header.failed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #7f1d1d;\n}\n/*# sourceMappingURL=quiz-attempt.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizAttemptComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-attempt", standalone: true, imports: [RouterLink, FormsModule], template: `
    <div class="qa-wrap">

      @if (error()) { <div class="alert alert-danger">{{ error() }}</div> }

      <!-- Loading -->
      @if (state() === 'loading') {
        <div class="loading-spinner"><div class="spinner"></div></div>
      }

      <!-- Ready: show quiz info + Start button -->
      @if (state() === 'ready' && quiz()) {
        <div class="qa-ready card">
          <span class="material-icons">quiz</span>
          <h2>{{ quiz()!.title }}</h2>
          @if (quiz()!.description) { <p>{{ quiz()!.description }}</p> }
          <div class="qa-meta">
            <span>{{ quiz()!.questions.length }} questions</span>
            @if (quiz()!.timeLimitMinutes) {
              <span>{{ quiz()!.timeLimitMinutes }} min limit</span>
            }
            <span>Passing: {{ quiz()!.passingScorePercent }}%</span>
            <span>Max attempts: {{ quiz()!.maxAttempts }}</span>
          </div>
          <button class="btn btn-primary" (click)="startQuiz()">Start Quiz</button>
        </div>
      }

      <!-- Started: questions -->
      @if (state() === 'started' && attempt()) {
        <div class="qa-toolbar">
          <span class="q-count">{{ attempt()!.questions.length }} questions</span>
          @if (attempt()!.timeLimitMinutes) {
            <span class="timer" [class.urgent]="timeLeft() < 60">{{ timeDisplay }}</span>
          }
          <button class="btn btn-primary btn-sm" (click)="submitQuiz()">Submit Quiz</button>
        </div>

        @for (q of attempt()!.questions; track q.questionId; let i = $index) {
          <div class="question-card card">
            <div class="q-header">
              <span class="q-num">Q{{ i + 1 }}</span>
              <span class="q-text">{{ q.questionText }}</span>
              <span class="q-points">{{ q.points }} pts</span>
            </div>

            @if (q.questionType === 'ShortAnswer') {
              <textarea class="form-control" rows="4"
                        [value]="getTextAnswer(q.questionId)"
                        (input)="setTextAnswer(q.questionId, $any($event.target).value)"
                        placeholder="Type your answer\u2026"></textarea>
            } @else {
              <div class="options">
                @for (opt of q.options!; track opt.id) {
                  <label class="option-label" [class.selected]="isSelected(q.questionId, opt.id)">
                    <input [type]="isSingle(q.questionType) ? 'radio' : 'checkbox'"
                           [checked]="isSelected(q.questionId, opt.id)"
                           (change)="toggleOption(q.questionId, opt.id, isSingle(q.questionType))" />
                    {{ opt.optionText }}
                  </label>
                }
              </div>
            }
          </div>
        }

        <div style="text-align:right;margin-top:4px;">
          <button class="btn btn-primary" (click)="submitQuiz()">Submit Quiz</button>
        </div>
      }

      <!-- Submitted: results -->
      @if (state() === 'submitted' && result() && attempt()) {
        <div class="result-header card" [class.passed]="result()!.isPassed" [class.failed]="!result()!.isPassed">
          <span class="material-icons">{{ result()!.isPassed ? 'check_circle' : 'cancel' }}</span>
          <h2>{{ result()!.isPassed ? 'Passed!' : 'Not Passed' }}</h2>
          <div class="score">{{ result()!.percentage }}%</div>
          <div class="score-detail">{{ result()!.score }} / {{ result()!.maxScore }} points</div>
          @if (!result()!.isFullyGraded) {
            <p class="pending-note">Some short answers are pending manual grading \u2014 score may change.</p>
          }
        </div>

        @for (q of attempt()!.questions; track q.questionId; let i = $index) {
          @let ar = getAnswerResult(q.questionId);
          <div class="question-card card"
               [class.correct]="ar?.isCorrect === true"
               [class.incorrect]="ar?.isCorrect === false"
               [class.pending]="ar?.isCorrect === null">
            <div class="q-header">
              <span class="q-num">Q{{ i + 1 }}</span>
              <span class="q-text">{{ q.questionText }}</span>
              @if (ar?.isCorrect !== null) {
                <span class="material-icons" [style.color]="ar?.isCorrect ? '#16a34a' : '#dc2626'">
                  {{ ar?.isCorrect ? 'check_circle' : 'cancel' }}
                </span>
              }
              <span class="q-points">{{ ar?.pointsEarned ?? '?' }} / {{ q.points }}</span>
            </div>

            @if (q.questionType === 'ShortAnswer') {
              <div class="short-answer-review">{{ getTextAnswer(q.questionId) || '(no answer)' }}</div>
            } @else {
              <div class="options">
                @for (opt of q.options!; track opt.id) {
                  <div class="option-result" [class.selected]="isSelected(q.questionId, opt.id)">
                    {{ opt.optionText }}
                  </div>
                }
              </div>
            }

            @if (ar?.correctAnswer) {
              <div class="correct-answer">Correct answer: {{ ar!.correctAnswer }}</div>
            }
          </div>
        }

        <div style="text-align:center;margin-top:8px;padding-bottom:24px;display:flex;gap:8px;justify-content:center;">
          <a routerLink="/courses" class="btn btn-secondary">Back to Courses</a>
          @if (moduleItemId() !== null && quiz()) {
            <a class="btn btn-primary"
               [routerLink]="['/courses', quiz()!.courseId, 'quizzes', quiz()!.id]"
               [queryParams]="{ itemId: moduleItemId(), done: true }">
              Continue <span class="material-icons" style="font-size:18px;vertical-align:middle;">chevron_right</span>
            </a>
          }
        </div>
      }

    </div>
  `, styles: ['@charset "UTF-8";\n\n/* src/app/features/quiz/quiz-attempt/quiz-attempt.scss */\n.qa-wrap {\n  max-width: 820px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.qa-ready {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 56px 32px;\n}\n.qa-ready .material-icons {\n  width: 72px;\n  height: 72px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 36px;\n  color: var(--accent-600);\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe 0%,\n      #fae8ff 100%);\n  border-radius: 50%;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 24px -8px rgba(124, 58, 237, 0.35);\n}\n.qa-ready h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  letter-spacing: -0.015em;\n  margin-bottom: 12px;\n}\n.qa-ready p {\n  font-size: 14px;\n  color: var(--text-muted);\n  max-width: 500px;\n  margin-bottom: 24px;\n  line-height: 1.55;\n}\n.qa-meta {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.qa-meta span {\n  background: var(--slate-100);\n  border: 1px solid var(--border);\n  border-radius: var(--r-full);\n  padding: 5px 14px;\n  font-size: 12.5px;\n  color: var(--slate-700);\n  font-weight: 500;\n}\n.qa-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: var(--r-lg);\n  padding: 12px 20px;\n  margin-bottom: 4px;\n  position: sticky;\n  top: calc(var(--topbar-h) + 8px);\n  z-index: 10;\n  box-shadow: var(--shadow-sm);\n}\n.qa-toolbar .q-count {\n  font-size: 13px;\n  color: var(--text-muted);\n  font-weight: 500;\n}\n.qa-toolbar .timer {\n  font-family:\n    "JetBrains Mono",\n    ui-monospace,\n    monospace;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--slate-900);\n  background: var(--slate-50);\n  padding: 4px 12px;\n  border-radius: var(--r-md);\n  border: 1px solid var(--border);\n}\n.qa-toolbar .timer.urgent {\n  color: var(--danger-700);\n  background: var(--danger-50);\n  border-color: rgba(239, 68, 68, 0.3);\n  animation: pulse 1.5s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.65;\n  }\n}\n.question-card {\n  padding: 24px;\n  border-left: 4px solid var(--border);\n}\n.question-card.correct {\n  border-left-color: var(--success-500);\n}\n.question-card.incorrect {\n  border-left-color: var(--danger-500);\n}\n.question-card.pending {\n  border-left-color: var(--warning-500);\n}\n.q-header {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 18px;\n}\n.q-header .q-num {\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--accent-700, #6d28d9);\n  background: #f5f3ff;\n  padding: 4px 10px;\n  border-radius: var(--r-full);\n  white-space: nowrap;\n  flex-shrink: 0;\n  letter-spacing: 0.02em;\n}\n.q-header .q-text {\n  flex: 1;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--slate-900);\n}\n.q-header .q-points {\n  font-size: 12px;\n  color: var(--text-muted);\n  white-space: nowrap;\n  flex-shrink: 0;\n  font-weight: 500;\n}\n.q-header .material-icons {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.option-label {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  cursor: pointer;\n  transition:\n    border-color var(--t-fast),\n    background var(--t-fast),\n    transform var(--t-fast);\n  font-size: 14px;\n  background: var(--surface);\n}\n.option-label input {\n  accent-color: var(--accent-600);\n  flex-shrink: 0;\n}\n.option-label:hover {\n  border-color: var(--accent-500);\n  background: #faf5ff;\n}\n.option-label.selected {\n  border-color: var(--accent-600);\n  background: #faf5ff;\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);\n}\n.option-result {\n  padding: 10px 14px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 14px;\n  color: var(--slate-600);\n  background: var(--surface);\n}\n.option-result.selected {\n  background: var(--info-50);\n  border-color: var(--info-500);\n  color: var(--slate-900);\n  font-weight: 500;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid var(--border);\n  border-radius: var(--r-md);\n  font-size: 14px;\n  font-family: inherit;\n  resize: vertical;\n  background: var(--surface);\n}\n.form-control:focus {\n  outline: none;\n  border-color: var(--accent-600);\n  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);\n}\n.short-answer-review {\n  background: var(--slate-50);\n  border: 1px solid var(--border);\n  padding: 12px 16px;\n  border-radius: var(--r-md);\n  font-size: 14px;\n  color: var(--slate-900);\n  white-space: pre-wrap;\n}\n.correct-answer {\n  margin-top: 10px;\n  font-size: 13px;\n  color: var(--success-700);\n  font-weight: 500;\n}\n.result-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 48px 32px;\n}\n.result-header .material-icons {\n  font-size: 64px;\n  margin-bottom: 12px;\n  width: 96px;\n  height: 96px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.result-header h2 {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 8px;\n  letter-spacing: -0.015em;\n}\n.result-header .score {\n  font-family:\n    "Inter Tight",\n    "Inter",\n    sans-serif;\n  font-size: 56px;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.result-header .score-detail {\n  font-size: 15px;\n  color: var(--text-muted);\n  margin-top: 4px;\n}\n.result-header .pending-note {\n  margin-top: 18px;\n  font-size: 13px;\n  color: var(--warning-700);\n}\n.result-header.passed .material-icons {\n  color: var(--success-600);\n  background: var(--success-50);\n}\n.result-header.passed .score {\n  color: var(--success-700);\n}\n.result-header.passed h2 {\n  color: #14532d;\n}\n.result-header.failed .material-icons {\n  color: var(--danger-600);\n  background: var(--danger-50);\n}\n.result-header.failed .score {\n  color: var(--danger-700);\n}\n.result-header.failed h2 {\n  color: #7f1d1d;\n}\n/*# sourceMappingURL=quiz-attempt.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizAttemptComponent, { className: "QuizAttemptComponent", filePath: "src/app/features/quiz/quiz-attempt/quiz-attempt.ts", lineNumber: 149 });
})();
export {
  QuizAttemptComponent
};
//# sourceMappingURL=chunk-AQLKNB5Y.js.map
