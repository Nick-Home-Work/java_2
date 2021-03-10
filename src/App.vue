<template>
  <div id="app">
    <v-main-wripper></v-main-wripper>
  </div>
  
</template>

<script>

import vMainWripper from './components/v-main-wripper'

    
export default {
  name: 'App',
  components: {
     vMainWripper 
  },
    computed: {},
    methods:{},
    mounted(){}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100%; 
	
}
</style>
