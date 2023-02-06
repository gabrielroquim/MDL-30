const productViewScreen = require('../screens/productView.screen')

describe('Search products', () => {

    it('should search by Test', async () => {
        let searchName = 'Test'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)

        expect(await productViewScreen.product(searchName)).toExist()
    });
})