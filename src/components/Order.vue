<template>
    <div id="order" class="ui container">
        <div class="ui center aligned container">
			<img class="brand" src="../assets/mmz-brand-symbol-blue.svg"/>
		</div>
        <div class="ui attached message">
			<div class="header">Order</div>
		</div>
        <div class="ui attached segment">
            <div v-if="!codename" class="ui pointing below green label">Please choose an item</div>
            <sui-dropdown
            placeholder="Select Item"
            selection
            fluid
            :options="data"
            v-model="item"
            />
            <div v-if="codename" class="ui message">
                {{description}}
            </div>
        </div>
        <div v-if="codename" class="ui attached segment">
        <sui-form>
                <sui-form-fields inline>
                <label>Please choose a plan</label>
                <sui-form-field v-if="plans" v-for="plan in plans">
                    <sui-checkbox
                        :label="plan.name"
                        :key="plan.codename"
                        radio
                        :value="plan.duration"
                        v-model="duration"
                    />
                </sui-form-field>
            </sui-form-fields>
        </sui-form>
        </div>
        <div v-if="duration" class="ui attached segment">
            <b>Price: {{price}} {{currency}}/month</b><br />
            <b>Total: {{total}} {{currency}}</b>
        </div>
		<div v-if="duration" class="ui attached segment">
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
                <button name="submit" class="ui labeled icon primary fluid submit button"><i class="icon sign-in"></i>Pay with Paypal</button>
            </form>
		</div>
		<div class="ui bottom attached message">

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
	}
</script>

<style scoped>
#order {
    width: 500px;
}
</style>
