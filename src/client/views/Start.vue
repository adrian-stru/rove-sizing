<template>
    <div class="w-full">
        <div class="mx-auto w-2/3">
            <img class="w-full" alt="outline of hand" src="../assets/images/ring.svg"/>
        </div>
        <Nav :config="navConfig"/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      navConfig: {
        center: {
          name: 'Start',
          route: '/selection',
        },
      },
    };
  },
};
</script>
