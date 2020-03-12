<template>
    <div>
        <button class="button is-primary" @click="$emit('incr')">Click me!</button>
    </div>
</template>

<script>
    export default {
        name: "Clicker"
    }
</script>

<style scoped>

</style>