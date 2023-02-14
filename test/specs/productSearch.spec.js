const productViewScreen = require('../screens/productView.screen')

describe('Search products', () => {

    it('should search by Jaqueta', async () => {
        let searchName = 'Jaqueta'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)
        await productsViewScreen.productSelect()
        await productsViewScreen.productAdd()
        await productsViewScreen.goToCart()
        expect (await productsViewScreen.waitTotal()).toExist()

        expect(await productViewScreen.product(searchName)).toExist()
    });
})