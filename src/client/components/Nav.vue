<template>
    <div class="fixed w-full h-16 sm:h-24 flex pin-b bg-black border-t-1 border-white">
        <template v-if="config.left">
            <div class="w-1/2 h-full border-r-1 border-white text-center cursor-pointer"
                 @click.prevent="onNavClick(config.left.route)">
                <div class="text-white text-2xl sm:text-5xl mt-4">{{config.left.name}}</div>
            </div>
        </template>

        <template v-if="config.right">
            <div class="w-1/2 h-full border-white text-center cursor-pointer"
                 @click.prevent="onNavClick(config.right.route)">
                <div class="text-white text-2xl sm:text-5xl mt-4">{{config.right.name}}</div>
            </div>
        </template>

        <template v-if="config.center">
            <div class="w-full h-full text-center cursor-pointer"
                 @click.prevent="onNavClick(config.center.route)">
                <div class="text-white text-2xl sm:text-5xl mt-4">{{config.center.name}}</div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
  props: [
    'config',
  ],
  methods: {
    onNavClick(route) {
      this.$router.push({ path: route });
    },
  },
};
</script>
