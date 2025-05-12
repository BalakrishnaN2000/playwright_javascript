import {test, expect} from "@playwright/test";

test("Handle frames", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    console.log(await page.frames().length);

    // approach 1 - using name or url
    //const frame1_using_name = await page.frame("frame_name");   // if frame name is available

    const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1.fill('[name="mytext1"]', "Christopher Nolan");
    // await page.waitForTimeout(4000);

    // approach 2 - using locator
    const inputBox = page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]');
    await inputBox.clear();
    await inputBox.fill('Oppenheimer');
    // await page.waitForTimeout(4000);
});