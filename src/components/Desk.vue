<template>
	<div class="ui fluid container">
		<h1>Welcome back, {{ name }}!</h1>
		<p>Username: {{ username }}</p>
		<p>Your email is: {{ email }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: null,
				username: null,
				email: null
			}
		},
		mounted() {
			this.$user.recall({sessionStorage: true})
			if (!this.$user.is) { // not logged in
				this.$router.push('/sign-in')
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
