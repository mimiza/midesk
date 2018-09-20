<template>
    <div class="ui container">
		<sui-dropdown
		    fluid
		    placeholder="Select Item"
		    selection
		    :options="data"
		    v-model="current"
		/>
	</div>
</template>

<script>
	import configs from '../configs'

	export default {
		data() {
			return {
				current: null,
				data: configs
			}
		}
	}
</script>
