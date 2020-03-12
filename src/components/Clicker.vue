<template>
    <div>
        <img
             height="100"
             width="100"
             @click="$emit('incr')"
             src="http://pngimg.com/uploads/cookie/cookie_PNG13680.png">
        <!--<button class="button is-primary" @click="$emit('incr')">Click me!</button>-->
    </div>
</template>

<script>
    export default {
        name: "Clicker"
    }
</script>

<style scoped>

</style>