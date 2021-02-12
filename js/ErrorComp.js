Vue.component('errorcomp', {

    data(){
        return {
            text: '',

        }
    },
    methods: {

      setError(error){
          this.text = error;

      }
    },
    computed: {
      show(){
          return this.text !== '';
      }
    },
    template: `
    <div class="error" v-if="show">
        <p class="messageError">
            <button class="close-btn" @click="setError('')">&times;</button>
            {{ text }}
        </p>
    </div>
    `
});
