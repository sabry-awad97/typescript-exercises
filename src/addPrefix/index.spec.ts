import { describe, it, expect } from "vitest";
import { addPrefix } from ".";

// test suite (group of test cases )
describe("Add Prefix", () => {
  // spec (test) case
  it("should return array with two elements ['converse', 'convex']", () => {
    const [first, second] = addPrefix("con", "verse", "vex");

    expect(first).toEqual("converse");
    expect(second).toEqual("convex");
  });
});
