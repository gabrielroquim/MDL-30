class ProductViewScreen {

async product (name){
    await  $(`-ios predicate string:name CONTAINS '${name}'`).
    waitForDisplayed({ timeout: 10000})
}

}

module.exports = new ProductViewScreen

   