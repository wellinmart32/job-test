<template>
  <div class="home">
    <MainMenuComp></MainMenuComp>
  </div>
</template>

<script>
// @ is an alias to /src
import MainMenuComp from '@/components/MainMenuComp.vue'
import '../scss/app.scss'

export default {
  name: 'HomeView',
  components: {
    MainMenuComp
}
}
</script>
