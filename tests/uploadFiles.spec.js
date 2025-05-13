import {test, expect} from "@playwright/test";

test.skip("Upload single file", async ({page}) => {

    await page.goto("https://easyupload.io/");

    const dropZone = await page.locator("#select-files-input");
    const filePath = "tests/upload_files/dragon_booster.png";

    // Upload file
    await dropZone.setInputFiles(filePath);
    await page.waitForTimeout(4000);
});

test("Upload multiple files", async ({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    const fileInputButton = await page.locator("#filesToUpload");
    //upload multiple files
    await fileInputButton.setInputFiles([
        "tests/upload_files/dragon_booster.png",
        "tests/upload_files/dragon_booster_1.jpg"
    ]);
    await page.waitForTimeout(2000);

    // Verify the file names
    await expect(page.locator("#fileList")).toContainText("dragon_booster.png");
    await expect(page.locator("#fileList")).toContainText("dragon_booster_1.jpg");

    // remove the uploaded files
    await fileInputButton.setInputFiles([]);

    await expect(page.locator("#fileList")).toHaveText("No Files Selected");
    await page.waitForTimeout(2000);

});