<template>
    <div class="">
        <div class="w-8 h-8 rounded-full border-dotted relative"
             :class="{'bg-white': notChosen}"
             style="border-width: 1px;">
            <div class="absolute-center">
                <span class="text-white">{{chosenSize}}</span>
            </div>
            <select id="el"
                    class="absolute-center select"
                    v-model="chosen"
                    @change="changeHandler">
                <option v-for="(size, index) in sizes" :value="size" :key="index">
                    {{size}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
  props: [
    'chosenSize',
  ],
  data() {
    return {
      chosen: '',
      sizes: ['', 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    };
  },
  computed: {
    notChosen() {
      return this.chosenSize === '' || this.chosenSize === null;
    },
  },
  methods: {
    changeHandler() {
      this.$emit('change', this.chosen);
    },
  },
};
</script>

<style scoped>
    .touch {
        -webkit-overflow-scrolling: touch;
    }

    .select.select {
        opacity: 0;
    }

    .absolute-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
</style>
