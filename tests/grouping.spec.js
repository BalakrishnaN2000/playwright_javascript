import {test, expect} from '@playwright/test';

test.beforeAll(async () => {
    console.log("This is beforeAll block...");
});

test.afterAll(async () => {
    console.log("This is afterAll block...");
});

test.beforeEach(async () => {
    console.log("+++ This is beforeEach block +++");
});

test.afterEach(async () => {
    console.log("+++ This is afterEach block +++");
});

test.describe("Group - 1", async () => {

    test("Test 1", async ({page}) => {
        console.log("This is Test 1");
    });
    
    test("Test 2", async ({page}) => {
        console.log("This is Test 2");
    });
});

test.describe("Group - 2", async () => {

    test("Test 3", async ({page}) => {
        console.log("This is Test 3");
    });
    
    test("Test 4", async ({page}) => {
        console.log("This is Test 4");
    });
});
