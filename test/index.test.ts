import func from "../src/index";
import func2 from "../src/index2";
import { it } from "vitest";

it("index", () => {
  func(true);
  func(false);
});

it("index2", () => {
  func2(true);
  func2(false);
});
