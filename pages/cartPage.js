exports.CartPage =

class CartPage {

    constructor(page) {
        this.page = page;
        this.cartTitle = ".title";
        this.cartItem = ".cart_item";
        this.cartItemName = "a";
    }

    getCartTitle() {
        return this.page.locator(this.cartTitle);
    }

    getCartItems() {
        return this.page.$$(this.cartItem);
    }

    async checkProductInCart(productName) {
        const cartItems = await this.getCartItems();
        for (const item of cartItems) {
            const name = await item.$eval(this.cartItemName, el => el.innerText);
            if (productName === name.trim()) {
                return true;
            }
        }
        return false;
    }
}