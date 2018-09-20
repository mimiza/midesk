<template>
	<div>
		<Header v-bind:username="username"></Header>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './Header.vue'

	export default {
		components: {
			Header: Header
		},
		data() {
			return {
				name: null,
				username: null,
				email: null
			}
		},
		mounted() {
			if (!this.$user.is) { // not logged in
				this.$user.recall({sessionStorage: true})
				//this.$router.push('/sign-in')
			}
			else {
				this.$user.get('profile').once((ack) => {
					this.name = ack.name
					this.username = this.$user.is.alias
					this.email = ack.email
				})
			}
		}
	}
</script>
