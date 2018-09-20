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

	main {
		margin-top: 30px;
	}

    #sign-in, #sign-up {
    	width: 500px;
    }
</style>
