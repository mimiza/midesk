<template>
    <div class="ui container">
		<form class="ui attached form">
			<div class="ui fluid attached segment">
				<div class="field">
					<label>Name</label>
					<div class="ui left icon input">
						<input type="text" v-model="name" name="name" placeholder="John Smith">
						<i class="user icon"></i>
					</div>
				</div>
				<div class="two fields">
					<div class="field">
						<label>Username</label>
						<div class="ui left icon input">
							<input type="text" v-model="username" name="username" placeholder="johnsmith">
							<i class="user icon"></i>
						</div>
					</div>
					<div class="field">
						<label>Email</label>
						<div class="ui left icon input">
							<input type="text" v-model="email" name="email" placeholder="myemail@gmail.com">
							<i class="envelope icon"></i>
						</div>
					</div>
				</div>
			</div>
		</form>
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
			this.$user.get('profile').once((ack) => {
				this.name = ack.name
				this.username = this.$user.is.alias
				this.email = ack.email
			})
		}
	}
</script>
