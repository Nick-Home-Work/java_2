const API = 'http://localhost/project/';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                   this.$refs.errorcomp.setError(error);
                })
        },
    },
    mounted() {
       // console.log(this);
    }
});

