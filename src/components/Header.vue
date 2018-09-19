<template>
	<header class="ui middle aligned grid navHeader">
		<div class="row" style="padding-bottom: 0px;">
			<div class="left aligned three wide column">
				<button class="ui basic tiny icon button" style="margin-left: 5px; border:0px;">
					<i class="icon bars"></i>
				</button>
			</div>
			<div class="center aligned ten wide column">
				<img class="brand" src="../assets/mmz-brand-symbol-text-blue.svg">
			</div>
			<div class="right aligned three wide column">
				<span class="username">{{ username }}</span>
				<button class="ui basic tiny circular icon button">
					<i class="icon user"></i>
				</button>
				<button v-on:click="signOut" class="ui basic tiny circular icon button">
					<i class="icon sign-out"></i>
				</button>
			</div>
		</div>
    </header>
</template>

<script>
	export default {
		props: ['username'],
		methods: {
			signOut(){
				sessionStorage.clear()
				localStorage.removeItem('alias')
				localStorage.removeItem('tmp')
				localStorage.removeItem('remember')
				window.location = '/sign-in'
			}
		}
	}
</script>

<style scoped>
	.navHeader {
		background: #ffffff;
		padding-bottom: 0px !important;
	}

	.brand {
		height: 30px;
		margin: 5px auto;
	}

	.username {
		margin-right: 5px;
	}
</style>
