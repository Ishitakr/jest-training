const mathOperations = require('./calculator');
// Part 1
describe("Calculator tests", () => {
 test('adding 1 + 2 should return 3', () => {
   expect(mathOperations.sum(1, 2)).toBe(3);
 });
})

describe("Calculator tests", () => {
 test('subtracting 10 - 2 should return 8', () => {
   expect(mathOperations.diff(10, 2)).toBe(8);
 });
})

describe("Calculator tests", () => {
 test('multiplying 2 & 8 should return 16', () => {
   expect(mathOperations.product(8, 2)).toBe(16);
 });
})

//Part 2
// equality 
test("equality matchers", () => {
   expect(2*2).toBe(4);
   expect(4-2).not.toBe(1);
 })
// truth operators
test("truthy operators", () => {
   var name="Software testing help"
   var n = null
   expect(n).toBeNull()
   expect(name).not.toBeNull
   expect(name).toBeTruthy()
   expect(n).toBeTruthy()
   expect(n).toBeFalsy()
   expect(0).toBeFalsy()
 })

// equality operators
test("numeric operators", () => {
 
   var num1 = 100;
   var num2 = -20;
   var num3 = 0;
   expect(num1).toBeGreaterThan(10)
   expect(num2).toBeLessThanOrEqual(0)
   expect(num3).toBeGreaterThanOrEqual(0)
 })

// string matchers

test("string matchers",() => {
   var string1 = "software testing help - a great resource for testers"
   expect(string1).toMatch(/test/);
   expect(string1).not.toMatch(/abc/)
 })

// part 3

describe("Calculator tests", () => {
  var input1 = 0
 var input2 = 0
 
 beforeAll(() => {
   console.log("beforeAll called");
 });
 
 afterAll(() => {
   console.log("afterAll called");
 });
  beforeEach(() => {
   console.log("beforeEach called");
   input1 = 1;
   input2 = 2;
 });
  afterEach(() => {
   console.log("afterEach called");
 });
 
 test('adding 1 + 2 should return 3', () => {
   var result = mathOperations.sum(input1,input2)
   expect(result).toBe(3);
 });
})