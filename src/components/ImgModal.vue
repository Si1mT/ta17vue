<template>
    <modal v-if="toggle" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="src" alt="">
        </p>
    </modal>
</template>

<script>
    export default {
        name: "ImgModal",
        props: ['toggle', 'src']
    }
</script>

<style scoped>

</style>