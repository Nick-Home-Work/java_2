<template>
   <div class="v-popup__wripper"
    ref='popup_wripper'
    >
    <div class="v-popup">
        <div class="v-popup__header">
            <span>{{popupTitle}}</span>
            <span class="close">
                <i 
                class='material-icons'
                @click='closePopup'
                >close</i>
            </span>
        </div>
        <div class="v-popup__content">
            <slot></slot>
        </div>
        <div class="v-popup__footer">
        <button
         class="close_modal"
         @click='closePopup'
         >закрыть</button>   
         <button
          class="submit_btn"
          @click='rightBtnAction'
          >
          {{rightBtnTitle}}</button>   
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        name: 'v-popup',
    props: {
		popupTitle: {
			type: String,
			default: 'Popap name'
		},
		rightBtnTitle: {
			type: String,
			default: 'Ok'
		}
	},
    data(){
        return {}
    },
    computed:{},
	methods: {
		rightBtnAction(){
			this.$emit('rightBtnAction');
		},
		closePopup(){
			this.$emit('closePopup');
		}
	},
	mounted(){
		
	 document.addEventListener('click', item =>{
		 if (item.target === this.$refs['popup_wripper']){
			 this.closePopup()
		 }
	 })	
	}	
    }
</script>


<style scoped>
	.v-popup__wripper{
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		right: 0;
		bottom: 0;
		left: 0;
		top: 0;
	}
    .v-popup{
        padding: 20px;
        position: fixed;
        top: 100px;
		right: 0;
		left: 0;
		margin:auto;
		min-height:100px;
		max-height:auto;
        width: 600px;
		background: #ffffff;
		box-shadow: 0 0 17px 0 #e7e7e7;
        z-index: 2;
    }
    .v-popup .v-popup__header, .v-popup .v-popup__footer{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .v-popup__content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submit_btn{
        padding: 8px;
        color:#ffffff;
        background: lightseagreen;
    }
    .close_modal{
        padding: 8px;
        color:#ffffff;
        background: red;
    }
	.close{
		cursor: pointer;
	}
    
</style>