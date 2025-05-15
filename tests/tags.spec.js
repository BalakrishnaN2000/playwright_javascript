import {test, expect} from '@playwright/test';

test("Test 1@smoke", async ({page}) => {
    console.log("This is Test 1...");
});

test("Test 2@smoke", async ({page}) => {
    console.log("This is Test 2...");
});


test("Test 3@reg", async ({page}) => {
    console.log("This is Test 3...");
});

test("Test 4@reg", async ({page}) => {
    console.log("This is Test 4...");
});

test("Test 5@smoke@reg", async ({page}) => {
    console.log("This is Test 5...");
});

/*
    - npx playwright test --project=chromium --grep "@smoke"      //run all tests with @smoke tag
    - npx playwright test --project=chromium --grep '@reg'        //run all tests with @reg tag
    - npx playwright test --project=chromium --grep '@smoke@reg'  //run all tests with @smoke and @reg tag
    - npx playwright test --project=chromium --grep "@smoke" --grep-invert "@reg"  //run all tests with @smoke tag but not with @reg tag
*/