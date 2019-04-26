<template>
    <div>
        <a href="#" @click.prevent="clearRingSizes">
            <div class="mx-auto w-2/3">
                <img class="w-full" alt="outline of hand" src="../assets/images/clear-symbol.svg"/>
            </div>
        </a>
    </div>
</template>

<script>
export default {
  methods: {
    clearRingSizes() {
      this.$store.commit('reset');
    },
  },
};
</script>

