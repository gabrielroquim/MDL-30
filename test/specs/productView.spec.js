const productViewScreen = require('../screens/productView.screen')

describe('Product List', () => {

    it('shoud list products', async () => {
        expect(await productViewScreen.product("25% fora Product Test R$ 15.00 Foi: R$ 20.00")).toExist()
        expect(await productViewScreen.productlist()).toBeElementsArrayOfSize(10)
    })
})

	
