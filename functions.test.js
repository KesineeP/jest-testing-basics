const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User id Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User id Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});
//toBe
test("Add 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSY VALUES
//toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
//toBeFalsy matches anything that an if statement treats as false

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue()).toBeFalsy();
});

test("User should be Will Price object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Will",
    lastName: "Price",
  });
});

test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
  //toBeLessThanOrEqual()
});

//REGEX
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//ARRAY
test("Admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//WORKING WITH ASYNC DATA

//Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

//Async Await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
