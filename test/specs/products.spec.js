const productViewScreen = require("../screens/productView.screen")

describe('Product List', () => {

    it('shoud list products', async () => {
        expect(await productViewScreen.product("Ingrid Running Jacket")).toExist()
        expect(await productViewScreen.productList()).toBeElementsArrayOfSize(10)
    })
})