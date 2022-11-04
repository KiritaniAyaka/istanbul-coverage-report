import func from "../src/index";
import func2 from "../src/index2";
import func3 from "../src/index3";
import {
  ternary,
  defaultArg,
  binaryExp,
  complexBinaryExp,
  nestBinaryExp,
} from "../src/other_types";
import { it } from "mocha";

it("index", () => {
  func(true);
  func(false);
});

it("index2", () => {
  func2(true);
  func2(false);
});

it("index3", () => {
  func3(1);
});

it("other types", () => {
  // ternary operator type: cond-expr
  ternary(1);
  ternary(-1);

  // default arguments type: default-arg
  defaultArg();
  defaultArg(1);

  // binary expression type: binary-expr
  binaryExp(1);
  binaryExp(5);

  // complex binary expression
  complexBinaryExp(1);
  complexBinaryExp(5);
  complexBinaryExp(12);

  // nest binary expression
  nestBinaryExp(1);
  nestBinaryExp(5);
  nestBinaryExp(12);
});
