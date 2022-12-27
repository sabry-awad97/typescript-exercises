import { expect, describe, it } from "vitest";
import { AttributeMapping, createChildRecords, ParentRecord } from ".";

describe("createChildRecords", () => {
  it("creates child records based on the attribute mapping", () => {
    const parentRecords: ParentRecord[] = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 }
    ];
    const attributeMapping: AttributeMapping = {
      id: ["id", null, null],
      name: ["name", null, "Unknown"],
      ageInYears: ["age", null, null],
      ageInMonths: ["age", age => age * 12, null],
      income: ["income", null, 0]
    };
    const expectedResult: ParentRecord[] = [
      { id: 1, name: "Alice", ageInYears: 25, ageInMonths: 300, income: 0 },
      { id: 2, name: "Bob", ageInYears: 30, ageInMonths: 360, income: 0 },
      { id: 3, name: "Charlie", ageInYears: 35, ageInMonths: 420, income: 0 }
    ];
    const result = createChildRecords(parentRecords, attributeMapping);
    expect(result).toEqual(expectedResult);
  });

  it("filters and sorts the child records based on the provided functions", () => {
    const parentRecords: ParentRecord[] = [
      { id: 1, name: "Alice", age: 25 },
      { id: 2, name: "Bob", age: 30 },
      { id: 3, name: "Charlie", age: 35 }
    ];
    const attributeMapping: AttributeMapping = {
      id: ["id", null, null],
      name: ["name", null, "Unknown"],
      ageInYears: ["age", null, null],
      ageInMonths: ["age", age => age * 12, null],
      income: ["income", null, 0]
    };
    const filterFn = (record: ParentRecord) => record.name[0] === "A" || record.name[0] === "B";
    const sortFn = (a: ParentRecord, b: ParentRecord) => a.age - b.age;
    const expectedResult: ParentRecord[] = [
      { id: 1, name: "Alice", ageInYears: 25, ageInMonths: 300, income: 0 },
      { id: 2, name: "Bob", ageInYears: 30, ageInMonths: 360, income: 0 }
    ];
    const result = createChildRecords(parentRecords, attributeMapping, filterFn, sortFn);
    expect(result).toEqual(expectedResult);
  });
});
