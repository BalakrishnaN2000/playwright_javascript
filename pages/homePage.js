exports.HomePage =

class HomePage {

    constructor(page) {
        this.page = page;
        this.productsTitle = 'span[class="title"]';
        this.productItem = '//div[@class="inventory_item_name "]/parent::a';
        this.addToCartButton = "#add-to-cart";
        this.shoppingCart = ".shopping_cart_link";

    }

    async addProductToCart(productName) {
        const productsList = await this.page.$$(this.productItem);
        for (const product of productsList) {
            const name = await product.innerText();
            if (productName === name.trim()) {
                await product.click();
                await this.page.locator(this.addToCartButton).click();
                break;
            }
        }
    }

    async goToCart() {
        await this.page.locator(this.shoppingCart).click();
    }
}