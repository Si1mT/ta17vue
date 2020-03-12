<template>
    <div>
        <button :disabled="disabled"
                class="button is-warning"
                @click="$emit('incrCps', cps)">
            Add {{ cps }} cps
        </button>
    </div>
</template>

<script>
    export default {
        name: "Upgrade",
        props: ['cps', 'disabled']
    }
</script>

<style scoped>

</style>