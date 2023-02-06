const productViewScreen = require("../screens/productView.screen")

describe('Search products', () => {

    it('should search by Product test', async () => {
        let searchName = 'Product test'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)

        expect(await productViewScreen.product(searchName)).toExist()
    });
})