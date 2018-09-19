<template>
    <div>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './components/Footer.vue'

    export default {
        components: {
            'Footer': Footer
        }
    }
</script>

<style>
    body {
	    background: #eeeeee;
    }

    #sign-in, #sign-up {
    	width: 500px;
    }
</style>
