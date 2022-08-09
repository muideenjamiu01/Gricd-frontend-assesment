<template>
  <nav
    class="header p-2 relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3"
  >
    <div class="container px-4 flex flex-wrap items-center justify-between">
      <div
        class="w-full relative flex justify-between lg:w-auto px-2 lg:static lg:block lg:justify-start"
      >
        <NuxtLink to="/" class="font-black text-4xl"> Gricd-Assesment</NuxtLink>
        <button
          class="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar()"
        >
          hello
        </button>
      </div>
      <div
        :class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center"
      >
        <ul class="flex flex-col gap-x-8 lg:flex-row list-none ml-auto">
          <NuxtLink to="/checkout">
            <li class="nav-item">
              <button to="/cart" class="relative border-white" type="button">
                <img src="~/assets/icons/cart-icon.svg" alt="" />
                <div
                  class="h-5 w-5 bg-error-500 rounded-full flex items-center justify-center text-white text-xs absolute -top-2 -right-2"
                >
                  <h1>{{ cartItemCount }}</h1>
                </div>
              </button>
            </li>
          </NuxtLink>

          <NuxtLink to="userlocation">
            <li class="nav-item">
              <span class="ml-2">UserLocation</span>
            </li>
          </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    ...mapGetters({
      cartItemCount: 'cart/cartItemCount',
    }),
  },
  methods: {
    toggleNavbar: () => {
      this.showMenu = !this.showMenu
    },
  },
}
</script>
<style>
.header {
  position: fixed; /* fixing the position takes it out of html flow - knows
                nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
}
</style>
