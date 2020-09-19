const Product = require('./model/product');

class FakeDb {

    constructor() {
        this.products = [
            {
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                Heading1Title:'ハイスペックCPU',
                Heading1Text:'すごい高性能',
                Heading2Title:'ハイスペックCPU',
                Heading2Text:'すごい高性能',
                Heading3Title:'ハイスペックCPU',
                Heading3Text:'すごい高性能',
                coverImage: './assets/img/phone-cover.jpg',
            
              },
              {
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                Heading1Title:'ハイスペックCPU',
                Heading1Text:'すごい高性能',
                Heading2Title:'ハイスペックCPU',
                Heading2Text:'すごい高性能',
                Heading3Title:'ハイスペックCPU',
                Heading3Text:'すごい高性能',
                coverImage: './assets/img/phone-cover.jpg',
              },
              {
                name: 'Phone Standard',
                price: 299,
                description: '',
                Heading1Title:'ハイスペックCPU',
                Heading1Text:'すごい高性能',
                Heading2Title:'ハイスペックCPU',
                Heading2Text:'すごい高性能',
                Heading3Title:'ハイスペックCPU',
                Heading3Text:'すごい高性能',
                coverImage: './assets/img/phone-cover.jpg',
              }
        ]
    }

    async initDb() {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb() {
        this.pushProductsToDb()
    }
}

module.exports = FakeDb;