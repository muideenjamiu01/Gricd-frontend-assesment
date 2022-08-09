<template>
  <div class="mt-10 p-6 container mx-auto">
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4">
      <div v-for="product in products" :key="product.id">
        <div class="h-40 w-40 pt-4">
          <img
            :src="product.image.src"
            :alt="product.image.name"
            class="h-full w-full"
          />
        </div>
        <div class="mt-2">
          <h1>{{ product.name }}</h1>
        </div>
        <div class="flex items-center font-light my-2">
          <p class="font-semibold text-lg">
            {{ product.price }}
            <small class="text-primary-400 ml-2"
              >- {{ product.quantity }} %</small
            >
          </p>
        </div>
        <div>
          <BaseButton
            @click="addToCart(product)"
            variant="contained"
            size="small"
            color="primary"
          >
            Add to cart
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import axios from 'axios'
import BaseButton from './BaseButton.vue'
// import productsData from '~/Api/data.json'
export default {
  components: { BaseButton },
  data() {
    return {
      // products: productsData,
    }
  },

  // mounted() {
  //   this.$store.dispatch('fetchProducts')
  // },
  computed: {
    ...mapGetters({
      products: 'products/products',
      cartItemCount: 'cart/cartItemCount',
    }),
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('cart/addProductToCart', {
        product,
        quantity: 1,
      })
    },
    removeProductFromCart(product) {
      this.$store.dispatch('removeProductFromCart', product)
    },
  },
}
</script>

<style scoped></style>
