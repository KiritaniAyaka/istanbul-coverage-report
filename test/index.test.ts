import func from "../src/index";
import func2 from "../src/index2";
import func3 from "../src/index3";
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
})
