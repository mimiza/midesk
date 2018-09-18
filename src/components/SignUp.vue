<template>
    <div id="sign-up" class="ui container">
		<form @submit.prevent="signUp" class="ui attached form">
            <div class="ui attached message">
    			<div class="header">Welcome to miDesk!</div>
    			<p>Fill out the form below to sign-up for a new account.</p>
    		</div>
            <div v-if="errors.length" class="ui attached negative message">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
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
				<div class="two fields">
					<div class="field">
						<label>Password</label>
						<div class="ui left icon input">
							<input type="password" v-model="password" name="password">
							<i class="lock icon"></i>
						</div>
					</div>
					<div class="field">
						<label>Confirm password</label>
						<div class="ui left icon input">
							<input type="password" v-model="confirm" name="confirm">
							<i class="lock icon"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="ui attached segment">
				<div class="two fields">
					<div class="field">
						<label>What is your first pet's name?</label>
						<div class="ui left icon input">
							<input type="text" v-model="factor1" name="factor1">
							<i class="question icon"></i>
						</div>
					</div>
					<div class="field">
						<label>Where do you want to live?</label>
						<div class="ui left icon input">
							<input type="text" v-model="factor2" name="factor2">
							<i class="question icon"></i>
						</div>
					</div>
				</div>
                <div class="field">
                    <label>Password hint</label>
                    <div class="ui left icon input">
                        <input type="text" v-model="hint" name="hint">
                        <i class="question icon"></i>
                    </div>
                </div>
			</div>
			<div class="ui attached segment">
				<div class="field">
					<div class="ui slider checkbox">
						<input id="agree" v-model="agree" name="agree" type="checkbox" tabindex="0" class="hidden">
						<label for="agree">I have read and agree to the <a href="#">Terms and Conditions</a></label>
					</div>
				</div>
				<div class="field">
					<div class="ui slider checkbox">
						<input id="subscribe" v-model="subscribe" name="subscribe" type="checkbox" tabindex="0" class="hidden" checked="checked">
						<label for="subscribe">I want to receive tutorials and newsletters in email</label>
					</div>
				</div>
			</div>
			<div class="ui attached segment">
				<button class="ui labeled icon primary fluid submit button"><i class="icon sign-in"></i>Sign-Up</button>
			</div>
			<div class="ui bottom attached message">
				<i class="icon help"></i> Already signed up? <router-link to="/sign-in">Sign-in here</router-link> instead.
			</div>
		</form>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                name: null,
                username: null,
                email: null,
                password: null,
                confirm: null,
                factor1: null,
                factor2: null,
                hint: null,
                agree: false,
                subscribe: true
            }
        },
        methods: {
            signUp() {
                this.errors = []

                if (!this.name) this.errors.push('Please enter your name')
                if (!this.username || this.username.length < 8) this.errors.push('Your username must contain at least 8 characters.')
                if (!this.password || this.password.length < 8) this.errors.push('Your password must contain at least 8 characters.')
                if (this.confirm != this.password) this.errors.push('Your confirm password must match your password.')
                if (!/[\w\d\.\-\_]+@{1}[\w\d\.\-\_]+\.[\w\d]+/i.test(this.email)) this.errors.push('Your email address is not valid.')
                if (!this.factor1 || !this.factor2 || !this.hint) this.errors.push('Please enter security answers. You might need them in the future.')
                if (!this.agree) this.errors.push('Please agree to the Terms of Conditions.')

                if (!this.errors.length) {
                    this.$user.create(this.username, this.password, (ack) => {
                        if (ack.err) this.errors.push(ack.err)
                        else {
                            this.$user.auth(this.username, this.password, ack => {
            					this.$user.get('profile').put({
            						name: this.name,
            						email: this.email,
            						factor1: this.factor1.length, //I don't know how use these with Gun SEA yet
            						factor2: this.factor2.length, //I don't know how use these with Gun SEA yet
                                    hint: this.hint, //I don't know how use these with Gun SEA yet
            						subscribe: this.subscribe
            					})

                                this.$router.push('/sign-in') //redirect to sign-in page
            				})
                        }
                    })
                }
            } //end of signUp
        }
    }
</script>

<style scoped>
    #sign-up {
        width: 500px;
    }
</style>
