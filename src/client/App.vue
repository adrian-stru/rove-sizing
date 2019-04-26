<template>
  <div id="app" class="bg-black min-h-screen">
    <Header/>
    <div class="my-scoped max-w-screen" >
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import './stylesheets/fonts.css';
import './stylesheets/main.css';

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
  .my-scoped {
    padding-top: 160px;
    padding-bottom: 30px;
    max-width: 100vw;
  }
</style>
