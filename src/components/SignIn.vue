<template>
    <div id="sign-in" class="ui container">
		<div class="ui center aligned container">
			<img class="brand" src="../assets/mmz-brand-symbol-blue.svg"/>
		</div>
		<form @submit.prevent="signIn" class="ui form">
            <div class="ui attached message">
    			<div class="header">Welcome to miDesk!</div>
    			<p>Fill out the form below to sign-in.</p>
    		</div>
            <div v-if="errors.length" class="ui attached negative message">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
			<div class="ui fluid attached segment">
				<div class="two fields">
					<div class="field">
						<label>Username</label>
						<div class="ui left icon input">
							<input type="text" v-model="username" name="username" placeholder="johnsmith">
							<i class="user icon"></i>
						</div>
					</div>
                    <div class="field">
						<label>Password</label>
						<div class="ui left icon input">
							<input type="password" v-model="password" name="password">
							<i class="lock icon"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="ui attached segment">
				<div class="field">
					<div class="ui toggle checkbox">
						<input id="remember" v-model="remember" name="remember" type="checkbox" tabindex="0" class="hidden">
						<label for="remember">Remember me</label>
					</div>
				</div>
			</div>
			<div class="ui attached segment">
				<button class="ui labeled icon positive fluid submit button"><i class="icon sign-in"></i>Sign-In</button>
			</div>
			<div class="ui bottom attached message">
				<i class="icon help"></i> Forgot password? <router-link to="/password-recovery">Recover here</router-link>.
			</div>
		</form>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                username: null,
                password: null,
                remember: null
            }
        },
        methods: {
            signIn() {
                this.errors = []

                if (!this.username || this.username.length < 8) this.errors.push('Your username must contain at least 8 characters.')
                if (!this.password || this.password.length < 8) this.errors.push('Your password must contain at least 8 characters.')

                if (!this.errors.length) {
					this.authenticate(this.username, this.password)
                }
            },
			authenticate(username, password) {
				this.errors = []
				this.$user.auth(username, password, (ack) => {
					if (ack.err) this.errors.push(ack.err)
					else {
						if (this.remember) {
							localStorage.setItem('remember', this.remember) // remember user access
							localStorage.setItem('alias', this.username)
							localStorage.setItem('tmp', this.password)
						}
						this.$router.push('/desk') // redirect to /desk
					}
				})
			}
        },
		created() {
			let alias = localStorage.getItem('alias')
			let tmp = localStorage.getItem('tmp')
			let remember = localStorage.getItem('remember')

			if (alias && tmp && remember && !this.$user.is) {
				sessionStorage.setItem('alias', alias)
				sessionStorage.setItem('tmp', tmp)
				this.authenticate(alias, tmp)
			}
			if (sessionStorage.getItem('alias') && sessionStorage.getItem('tmp')) {
				this.$user.recall({sessionStorage: true})
			}
			if (this.$user.is) { // user signed in
				this.$router.push('/desk')
			}
		}
    }
</script>

<style>
    .brand {
    	margin: 15px auto;
    }
</style>
