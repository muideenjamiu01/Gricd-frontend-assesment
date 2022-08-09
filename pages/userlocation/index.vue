<template>
  <div>
    <section class="relative z-10 ui two column centered grid">
      <div class="mt-32 column">
        <form
          @submit.prevent="locatorButtonPressed"
          class="ui segment large form"
        >
          <div class="ui message red" v-show="error">
            {{ error }}
          </div>
          <div class="ui segment">
            <div class="field">
              <div
                class="ui right icon input large"
                :class="{ loading: spinner }"
              >
                <input
                  type="text"
                  placeholder="Enter your address"
                  v-model="address"
                  ref="autocomplete"
                />

                <i
                  class="dot circle link icon bg-primary-400 text-white"
                  @click="locatorButtonPressed"
                ></i>
              </div>
            </div>

            <base-button
              class="mt-6"
              color="primary"
              variant="contained"
              fullWidth
              >Go
            </base-button>
          </div>
        </form>
      </div>
    </section>
    <section
      id="map"
      class="absolute top-0 right-0 bottom-0 left-0 bg-primary-400"
    ></section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      address: '',
      error: '',
      spinner: false,
    }
  },

  // mounted() {
  //   new google.maps.places.Autocomplete(this.$refs['autocomplete'], {
  //     bounds: new google.maps.LatLngBounds(new google.maps.LatLng()),
  //   })

  //   autocomplete.addListener('place_chnaged', () => {
  //     let place = autocomplete.getPlcace(latitude, longitude)
  //     console.log(place)
  //     this.showUserLocationOnMap(
  //       place.geometry.location.lat(),
  //       place.geometry.location.lng()
  //     )
  //   })
  // },

  methods: {
    locatorButtonPressed(error) {
      this.spinner = true

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.getStreetAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            )
            this.showUserLocationOnMap(
              position.coords.latitude,
              position.coords.longitude
            )
          },
          (error) => {
            this.error = error.message

            this.spinner = false
          }
        )
      } else {
        this.error = error.message
        this.spinner = false
      }
    },
    async getStreetAddressFrom(lat, long) {
      const ApiKey = 'AIzaSyA5PVxIof2Tpz89xxQQcwJyR7bisgEAb98'
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat}+${long}+&key=${ApiKey}`
        )
        if (response.data.error_message) {
          this.error = response.data.error_message
          console.log(response.data.error_message)
        } else {
          this.address = response.data.results[0].formatted_address
          console.log(response.data.results[0].formatted_address)
        }
        this.spinner = false
      } catch (error) {
        this.error = error.message
        this.spinner = false
      }
    },
    showUserLocationOnMap(latitude, longitude) {
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.mapTypeId,
      })

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map,
      })
    },
  },
}
</script>
<style scoped></style>
