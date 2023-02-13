let specsConf = process.env.PLATFORM == 'android' ? {
    specs: [
        './test/specs/login.spec.js'
    ]
} : {
    specs: [
        './test/specs/productView.spec.js',
        './test/specs/productSearch.spec.js',
        './test/specs/productCart.spec.js' 
    ]
}

module.exports = { specsConf }