import { defineStore } from 'pinia'
import {ref,computed,reactive} from 'vue'

export const useProductsStore = defineStore('counter', () => {
  const products = reactive([])
  const filter = ref('all')
  const filteredProducts = computed(() => {
        if (filter.value === 'available') {
            return products.filter(product => product.isAvailable)
        }
        else if (filter.value === 'unvailable') {
            return products.filter(product => !product.isAvailable)
        }
        else {
            return products;}} )
  function loadProducts() {
    const newProducts = JSON.parse(localStorage.getItem('products'))||[];
    products.splice(0,products.length,...newProducts);
  }

  return {filter, filteredProducts, loadProducts  }
})