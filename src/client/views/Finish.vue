<template v-cloak>
    <div>
        <div v-if="!state.loaded" class="text-white text-center text-2xl">
            Loading...
        </div>

        <div v-if="state.loaded" class="">
            <div v-if="!state.error" class="status text-white text-center text-3xl">
                <div>Sent!</div>
                <div>Thanks for visiting us.</div>
            </div>
            <div v-else class="status text-white text-center text-3xl">
                <div>Sorry!</div>
                <div class="text-2xl py-2">Something went wrong, try again later!</div>
            </div>
        </div>

        <Nav :config="navConfig"/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';

const axios = require('axios');

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navConfig: {
        center: {
          name: 'Start Over',
          route: '/',
        },
      },
      state: {
        loaded: false,
        error: false
      },
    };
  },
  computed: {
    firstName() {
      return this.$store.state.firstName;
    },
    lastName() {
      return this.$store.state.lastName;
    },
    emailAddress() {
      return this.$store.state.emailAddress;
    },
    d1() {
      return this.$store.state.d1;
    },
    d2() {
      return this.$store.state.d2;
    },
    d3() {
      return this.$store.state.d3;
    },
    d4() {
      return this.$store.state.d4;
    },
    d5() {
      return this.$store.state.d5;
    },
    subscribeToNewsletter() {
      return this.$store.state.subscribeToNewsletter;
    },
  },
  created() {
    axios({
      method: 'post',
      url: 'http://localhost:8080/v1/actions/ring-sizing',
      data: {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAddress: this.emailAddress,
        subscribe: this.subscribeToNewsletter,
        sizes: {
          d1: (this.d1 != null) ? this.d1 : -1,
          d2: (this.d2 != null) ? this.d2 : -1,
          d3: (this.d3 != null) ? this.d3 : -1,
          d4: (this.d4 != null) ? this.d4 : -1,
          d5: (this.d5 != null) ? this.d5 : -1,
        },
      },
    })
      .then((res) => {
        this.state.error = false;
        this.state.loaded = true;
      })
      .catch((err) => {
        this.state.error = true;
        this.state.loaded = true;
      });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('reset');
    next();
  },
};
</script>

<style scoped>
    .status {
        position: absolute;
        top:    44%;
        left:   50%;
        transform: translate(-50%, -50%);
    }
</style>
