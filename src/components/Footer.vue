<template>
    <div id="footer" class="ui center aligned container">
        © {{ year }} Mimiza All Rights Reserved
    </div>
</template>

<script>
export default {
    computed: {
        year: () => {
            let date = new Date()
            return date.getFullYear()
        }
    }
}
</script>

<style scoped>
    #footer {
        margin: 30px auto;
    }
</style>