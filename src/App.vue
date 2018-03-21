<template>
  <div id="app">
    <LanguageSelector v-on:languageChanged="receiveLangParent"/>
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import LanguageSelector from './components/LanguageSelector'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LanguageSelector
  },
  methods: {
    receiveLangParent: function(sel) {
      // Vue.config.lang = sel
      this.activeLocale = sel
      this.$i18n.locale = sel
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>