import {computeExpression} from "./calculator";

test("adds 1 + 2 to equal 3", () => {
    expect(computeExpression("1 + 2")).toBe("3")
})

test("returns error message if input is empty", () => {
    expect(computeExpression("")).toMatch(/nothing/i)
})

test("returns error message if input is blank", () => {
    expect(computeExpression("    \n    \n   ")).toMatch(/nothing/i)
})

test("parses positive numbers", () => {
    expect(computeExpression("0")).toEqual("0")
    expect(computeExpression("5")).toEqual("5")
    expect(computeExpression("12")).toEqual("12")
    expect(computeExpression("100385723985")).toEqual("100385723985")
})

test("parses negative numbers", () => {
    expect(computeExpression("-0")).toEqual("0")
    expect(computeExpression("-4")).toEqual("-4")
    expect(computeExpression("-42")).toEqual("-42")
    expect(computeExpression("-758253")).toEqual("-758253")
})

test("")


