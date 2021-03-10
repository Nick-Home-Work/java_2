<template>
    <div class="v-main-wripper">
      <v-header />
       <keep-alive>
         <router-view></router-view>  
       </keep-alive>
       <v-footer />
    </div>
</template>


<script>
    import vHeader from './layouts/v-header'
    import vFooter from './layouts/v-footer'

    export default {
        name: "v-main-wripper",
        components:{
			vHeader,
			vFooter
		},
        props: {},
        data() {
            return {
                title: "v-main-wripper"
            }
        },
        computed: {

		},
        methods: {},
        watch: {},
        mounted() {
           
        }
    }

</script>


<style>
    .v-main-wripper {
       margin: 0 auto;
    }

</style>
