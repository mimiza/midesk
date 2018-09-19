<template>
    <div>
        <Header></Header>
        <transition>
            <router-view></router-view>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        methods: {

        },
        components: {
            'Header': Header,
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
    	margin-top: 15px;
    }
</style>
