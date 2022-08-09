<template>
  <div class="mt-16 max-w-7xl mx-auto py-4 px-4">
    <div class="flex gap-4 mt-8" @click="goBack">
      <img src="@/assets/icons/back-arrow.svg" alt="" />
      <h1 class="md:text-3xl font-medium">Shopping Cart</h1>
    </div>
    <div class="md:flex gap-8">
      <div v-if="cartItemCount" class="md:w-3/4">
        <div
          v-for="item in cart"
          :key="item.product.id"
          class="md:flex gap-8 border-b p-4 mt-4"
        >
          <div class="flex gap-4 w-full md:w-2/4">
            <div class="h-20 w-22 overflow-hidden">
              <img
                :src="item.product.image.src"
                :alt="item.product.image.alt"
                class="h-full w-full"
              />
            </div>
            <div class="flex flex-col p-2">
              <div>
                <h1 class="font-semibold">{{ item.product.name }}</h1>
              </div>
              <div class="flex items-center font-light my-2">
                <p class="font-semibold text-lg">
                  {{ item.product.price }}
                  <small class="text-primary-400 ml-2">
                    - {{ item.product.quantity }} %</small
                  >
                </p>
              </div>
              <div>
                <base-button
                  @click="removeProductFromCart(item.product)"
                  size="small"
                  color="primary"
                  variant="contained"
                  >Delete</base-button
                >
              </div>
            </div>
          </div>
          <div class="pt-10 md:pt-0 flex justify-between">
            <div class="md:w-1/4">
              <div class="flex justify-center items-center gap-4">
                <base-button @click.prevent="itemDecrement()" size="small">
                  -
                </base-button>
                <div
                  class="text-center font-semibold text-md text-gray-400 flex items-center"
                >
                  {{ item.quantity }}
                </div>
                <base-button @click="addToCart(item.product)" size="small">
                  +
                </base-button>
              </div>
            </div>
            <div class="md:w-2/4">
              <div class="flex flex-col w-full">
                <span class="text-base font-light"
                  >{{ item.product.price }} -
                </span>
                <span class="text-primary-400">{{
                  `Added (${item.quantity} items)`
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <h1>$ {{ cartTotalPrice }}</h1>
      </div>

      <div v-else class="flex justify-center w-full">
        <h4 class="text-center text-secondary-500 text-xl font-medium">
          No item in your cart
        </h4>
      </div>

      <div class="mt-4 lg:mt-0 md:w-1/4 bg-primary-100 p-4 self-start">
        <h1 class="">{{ `Subtotal (${cartItemCount} items):` }}</h1>

        <p class="flex justify-end font-semibold">$ {{ cartTotalPrice }}</p>

        <base-button
          @click="checkout"
          class="mt-6"
          color="primary"
          variant="contained"
          fullWidth
          >Checkout
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),

    ...mapGetters({
      cartItemCount: 'cart/cartItemCount',
      cartTotalPrice: 'cart/cartTotalPrice',
    }),
  },

  mounted() {
    const cart = window.localStorage.getItem('gf-cart')
    this.$store.commit('cart/setCart', cart)
    console.log(cart)
  },

  methods: {
    ...mapActions('cart', ['addProductToCart', 'removeProductFromCart']),
    addToCart(product) {
      this.$store.dispatch('cart/addProductToCart', {
        product,
        quantity: 1,
      })
    },

    removeProductFromCart(product) {
      this.$store.dispatch('cart/removeProductFromCart', product)
    },

    clearCartItems() {
      this.$store.dispatch('clearCartItems')
    },

    goBack() {
      this.$router.go(-1)
    },

    checkout() {
      this.$store.commit('cart/CLEAR_CART_ITEMS')
      this.$router.push('/')
    },

    itemDecrement() {},
  },
}
</script>
