const productViewScreen = require('../screens/productView.screen')

describe('Search products', () => {

    it('should search by Jaqueta', async () => {
        let searchName = 'Jaqueta'
        await productViewScreen.waitProduct(searchName)
        await productViewScreen.search()
        await productViewScreen.searchBy(`${searchName}\n`)

        expect(await productViewScreen.product(searchName)).toExist()
    });
})