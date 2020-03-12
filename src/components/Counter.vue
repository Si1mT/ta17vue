<template>
    <div>
        {{ Math.floor(value)}}
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