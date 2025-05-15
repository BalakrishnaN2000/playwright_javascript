exports.LoginPage =

class LoginPage {

    // This class is used to define the locators and methods for the login page
    constructor(page) {
        this.page = page;
        this.swagLabsLogo = ".login_logo";
        this.usernameInput = "#user-name";
        this.passwordInput = "#password";
        this.loginButton = "#login-button";
    };

    async navigateToLoginPage() {
        await this.page.goto("https://www.saucedemo.com/");
    };

    async doLogin(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    };
};