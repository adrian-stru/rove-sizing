<template>
    <div class="w-full relative">
        <div class="fixed reset">
            <clear-sizes></clear-sizes>
        </div>
        <div class="bg-image-scoped bg-contain bg-center bg-no-repeat w-5/6 mx-auto"
             style="height:800px;">
            <div class="absolute d1">
                <selector :chosen-size="d1" @change="updateD1"></selector>
            </div>
            <div class="absolute d2">
                <selector :chosen-size="d2" @change="updateD2"></selector>
            </div>
            <div class="absolute d3">
                <selector :chosen-size="d3" @change="updateD3"></selector>
            </div>
            <div class="absolute d4">
                <selector :chosen-size="d4" @change="updateD4"></selector>
            </div>
            <div class="absolute d5">
                <selector :chosen-size="d5" @change="updateD5"></selector>
            </div>
            <div class="absolute d1-label">
                <span class="text-white">D1 - Thumb</span>
            </div>
            <div class="absolute d2-label">
                <span class="text-white">D2 - Index</span>
            </div>
            <div class="absolute d3-label">
                <span class="text-white">D3 - Middle</span>
            </div>
            <div class="absolute d4-label">
                <span class="text-white">D4 - Ring</span>
            </div>
            <div class="absolute d5-label">
                <span class="text-white">D5 - Pinky</span>
            </div>
        </div>
        <Nav :config="navConfig"/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Selector from '../components/Selector.vue';
import ClearSizes from '../components/ClearSizes.vue';

export default {
  components: {
    Nav,
    selector: Selector,
    'clear-sizes': ClearSizes,
  },
  data() {
    return {
      navConfig: {
        left: {
          name: 'Back',
          route: '/',
        },
        right: {
          name: 'Next',
          route: '/form',
        },
      },
    };
  },
  methods: {
    updateD1(size) {
      this.$store.commit('updateD1', size);
    },
    updateD2(size) {
      this.$store.commit('updateD2', size);
    },
    updateD3(size) {
      this.$store.commit('updateD3', size);
    },
    updateD4(size) {
      this.$store.commit('updateD4', size);
    },
    updateD5(size) {
      this.$store.commit('updateD5', size);
    },
  },
  computed: {
    d1() {
      return this.$store.state.sizes.d1;
    },
    d2() {
      return this.$store.state.sizes.d2;
    },
    d3() {
      return this.$store.state.sizes.d3;
    },
    d4() {
      return this.$store.state.sizes.d4;
    },
    d5() {
      return this.$store.state.sizes.d5;
    },
  },
};
</script>

<style scoped>
    .bg-image-scoped {
        background-image: url('../assets/images/hand.svg');
    }

    .w-scoped {
        width: 550px;
    }

    .d1 {
        top: 53%;
        left: calc(50vw - 160px);
    }

    .d2 {
        top: 35%;
        left: calc(50vw - 80px);
    }

    .d3 {
        top: 35%;
        left: calc(50vw + 14px);
    }

    .d4 {
        top: 38%;
        left: calc(50vw + 100px);
    }

    .d5 {
        top: 43%;
        left: calc(50vw + 160px);
    }

    .d1-label {
        top: 39%;
        left: calc(50vw - 310px);
    }

    .d2-label {
        top: 3%;
        left: calc(50vw - 150px);
    }

    .d3-label {
        top: -3%;
        left: calc(50vw + 27px);
    }

    .d4-label {
        top: 7%;
        left: calc(50vw + 160px);
    }

    .d5-label {
        top: 22%;
        left: calc(50vw + 235px);
    }

    .reset {
        bottom: 20%;
        right: 10%;
    }
</style>
