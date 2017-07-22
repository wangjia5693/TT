<template>
    <div class="contentc">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: 'content',
        data () {
            return {
                
            }
        },
        methods:{
            
        },
        created(){
            
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
