// const Product = require('./model/product');
const Schedule = require('./model/schedule');


class FakeDb {

    // constructor() {
    //     this.products = [
    //         {
    //             name: 'Phone XL',
    //             price: 799,
    //             description: 'A large phone with one of the best screens',
    //             Heading1Title:'ハイスペックCPU',
    //             Heading1Text:'すごい高性能',
    //             Heading2Title:'ハイスペックCPU',
    //             Heading2Text:'すごい高性能',
    //             Heading3Title:'ハイスペックCPU',
    //             Heading3Text:'すごい高性能',
    //             coverImage: './assets/img/phone-cover.jpg',
            
    //           },
    //           {
    //             name: 'Phone Mini',
    //             price: 699,
    //             description: 'A great phone with one of the best cameras',
    //             Heading1Title:'ハイスペックCPU',
    //             Heading1Text:'すごい高性能',
    //             Heading2Title:'ハイスペックCPU',
    //             Heading2Text:'すごい高性能',
    //             Heading3Title:'ハイスペックCPU',
    //             Heading3Text:'すごい高性能',
    //             coverImage: './assets/img/phone-cover.jpg',
    //           },
    //           {
    //             name: 'Phone Standard',
    //             price: 299,
    //             description: '',
    //             Heading1Title:'ハイスペックCPU',
    //             Heading1Text:'すごい高性能',
    //             Heading2Title:'ハイスペックCPU',
    //             Heading2Text:'すごい高性能',
    //             Heading3Title:'ハイスペックCPU',
    //             Heading3Text:'すごい高性能',
    //             coverImage: './assets/img/phone-cover.jpg',
    //           }
    //     ]
    // }

    constructor() {
            this.schedules = [
                {
                    plan: '仕事',
                    gameJoin: '参加',
                    hopeGame: 'Paradins',
                    freeWords:'頑張ります！',
                    userName:'工藤',
                    date:'20200920',
                  },
                  {
                    plan: '仕事',
                    gameJoin: '参加',
                    hopeGame: 'Paradins',
                    freeWords:'頑張ります！',
                    userName:'岩渕',
                    date:'20200920',
                  },
                  {
                    plan: '仕事',
                    gameJoin: '参加',
                    hopeGame: 'Paradins',
                    freeWords:'先日仕事やめましたので暇してます。どなたか相手してください。',
                    userName:'小川尿',
                    date:'20200920',
                  },
                  {
                    plan: '仕事',
                    gameJoin: '参加',
                    hopeGame: 'Paradins',
                    freeWords:'頑張ります！',
                    userName:'泉谷',
                    date:'20200920',
                  },
                  {
                    plan: '仕事',
                    gameJoin: '参加',
                    hopeGame: 'Paradins',
                    freeWords:'頑張ります！',
                    userName:'大森かずき',
                    date:'20200920',
                  },

            ]
                

    }
    pushSchedulesToDb() {
        this.schedules.forEach(
            (schedule) => {
                const newSchedule = new Schedule(schedule)
                newSchedule.save()
            }
        )
    }

    seeDb() {
        this.pushSchedulesToDb()
    }

    

    async initDb() {
        await this.cleanDb()
        this.pushSchedulesToDb()
    }

    async cleanDb() {
        await Schedule.deleteMany({})
    }

    // pushProductsToDb() {
    //     this.products.forEach(
    //         (product) => {
    //             const newProduct = new Product(product)
    //             newProduct.save()
    //         }
    //     )
    // }

    // seeDb() {
    //     this.pushProductsToDb()
    // }
}

module.exports = FakeDb;