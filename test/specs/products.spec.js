const productViewScreen = require("../screens/productView.screen")

describe('Product List', () => {

    it('shoud list products', async () => {
        expect(await productViewScreen.product("Product Test")).toExist()
        expect(await productViewScreen.productlist()).toBeElementsArrayOfSize(10)
    })
})