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
		methods: {
			test: function() {
				this.$user.auth('inanobot', 'toilatyphu', (ack) => {
					this.$user.get('profile').once((ack) => {
						this.name = ack.name
						this.username = ack.username
						this.email = ack.email
					})
				})

				// this.$user.get('profile').once(function(ack) {
				// 	this.name = ack.name
				// })
			}
		},
		mounted() {
			this.$user.recall({sessionStorage: true})
			if (!this.$user.is) { // not logged in
				console.log('not logged in')
			}
		}
	}
</script>
