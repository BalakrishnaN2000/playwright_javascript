import {test, expect} from "@playwright/test";

test("Handle Inner frames", async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    
    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    
    // Nested frame
    const childFrames = frame3.childFrames();
    await childFrames[0].locator("#i6").check();

    // await page.waitForTimeout(4000);

});