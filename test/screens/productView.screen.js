class ProductViewScreen {

    get #products() {
        return $$(`-ios predicate string: name CONTAINS 'R$'`)
    }

    async productlist(){
        return await this.#products
    }

    async product(name) {
        await $(`-ios predicate string:name CONTAINS '${name}'`).
            waitForDisplayed({ timeout: 10000 })
        return await $()
    }

}

module.exports = new ProductViewScreen

