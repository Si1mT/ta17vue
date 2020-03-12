<template>
    <div>
        <button class="button" @click="isOpen=true">Click me!</button>
        <modal :open="isOpen"></modal>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                isOpen: false
            }
        }
    }
</script>

<style scoped>

</style>