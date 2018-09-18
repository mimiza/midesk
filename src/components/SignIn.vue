<template>
    <div id="sign-in" class="ui container">
		<form @submit.prevent="signIn" class="ui attached form">
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
					if (this.remember) this.$user.recall({sessionStorage: true})
                    this.$user.auth(this.username, this.password, (ack) => {
                        if (ack.err) this.errors.push(ack.err)
                        else this.$router.push('/desk') // redirect to /desk
                    })
                }

            } //end of signUp
        },
		mounted() {
			if (sessionStorage.alias && sessionStorage.tmp) this.$user.recall({sessionStorage: true})
			if (this.$user.is) this.$route.push('/desk')
		}
    }
</script>

<style scoped>
    #sign-in {
        width: 500px;
    }
</style>
