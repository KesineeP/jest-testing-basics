const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test('"cinema" os an anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test('"Dormitory" os an anagram of "dirty room!@"', () => {
  expect(isAnagram("Dormitory", "dirty room!@")).toBeTruthy();
});

test('"Hello" os an anagram of "Aloha"', () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
