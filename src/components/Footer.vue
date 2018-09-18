<template>
    <div id="footer" class="ui center aligned container">
        © {{ year }} Powered by <a href="https://www.github.com/mimiza/midesk/">miDesk</a>
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
