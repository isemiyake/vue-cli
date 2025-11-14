import { reactive } from 'vue'
export const store = reactive({
    products:[{ id: 1, name: "pomme", price: 10, isAvailable:true },
    { id: 2, name: "poire", price: 20,isAvailable:false  },
    { id: 3, name: "pizza", price: 30,isAvailable:true  }
    ],
    filter: 'all',
    getFilteredProducts() {
        if (this.filter === 'available') {
            return this.products.filter(product => product.isAvailable)
        }
        else if (this.filter === 'unvailable') {
            return this.products.filter(product => !product.isAvailable)
        }
        else {
            return this.products;
        }
    }
})