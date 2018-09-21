<template>
    <div class="ui container">
        <h1>Please choose an item</h1>
		<sui-dropdown
            placeholder="Select Item"
            selection
            :options="data"
            v-model="item"
		/>
        <h2>{{name}}</h2>
        <p>{{description}}</p>
        <sui-checkbox
            v-if="plans"
            v-for="plan in plans"
            :label="plan.name"
            :key="plan.codename"
            radio
            :value="plan.duration"
            v-model="duration"
        />
        <br />
        <b v-if="duration">Duration: {{duration}}</b><br />
        <div v-if="duration">
            <b>Price/month: {{price}} {{currency}}/month</b><br />
            <b>Total: {{total}} {{currency}}</b>
            <div class="paypal">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_xclick-subscriptions">
                <input type="hidden" name="business" value="4Y98X8RR9PAGQ">
                <input type="hidden" name="lc" value="VN">
                <input type="hidden" name="item_name" :value="name">
                <input type="hidden" name="item_number" :value="codename">
                <input type="hidden" name="src" value="1">
                <input type="hidden" name="a3" :value="total">
                <input type="hidden" name="p3" :value="duration">
                <input type="hidden" name="t3" value="M">
                <input type="hidden" name="currency_code" :value="currency">
                <input type="hidden" name="bn" value="PP-SubscriptionsBF:btn_subscribe_LG.gif:NonHosted">
                <input type="hidden" name="notify_url" value="">
                <input type="hidden" name="callback_url" value="">
                <input type="hidden" name="return" value="">
                <input type="hidden" name="cancel_return" value="">
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
                <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
                </form>
            </div>
        </div>
	</div>
</template>

<script>
	import configs from '../configs'

	export default {
		data() {
			return {
				item: null,
                duration: null,
                currency: null,
				data: configs,
                name: null,
                codename: null,
                description: null,
                pricings: null,
                plans: null
			}
		},
        computed: {
            price() {
                for (let i=0; i<=this.pricings.length; i++) {
                    if (i == this.pricings.length) return this.pricings[i-1].price
                    if (this.duration >= this.pricings[i].minDuration && this.pricings[i+1] && this.duration < this.pricings[i+1].minDuration) return this.pricings[i].price
                }
            },
            total() {
                return Number.parseFloat(this.duration * this.price).toFixed(2)
            }
        },
        watch: {
            item: function() {
                let data = this.data[this.item]
                this.name = data.name
                this.codename = data.codename
                this.description = data.description
                this.pricings = data.pricings
                this.plans = data.plans
                this.currency = data.currency
            }
        }
	}</script>
