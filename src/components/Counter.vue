<template>
    <div>
        <p>{{ Math.floor(value)}} Cookies</p>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        props:['value']
    }
</script>

<style scoped>

</style>