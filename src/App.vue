<template>
    <div>
        <button class="button" @click="kitten=true">Kitten</button>
        <button class="button" @click="bear=true">Bear</button>
        <img-modal src="https://placekitten.com/1280/960/" :toggle="kitten" @close="kitten=false"></img-modal>
        <img-modal src="https://placebear.com/1280/960" :toggle="bear" @close="bear=false"></img-modal>
    </div>
</template>

<script>
    import ImgModal from "./components/ImgModal.vue";
    export default {
        name: "App",
        components: {ImgModal},
        data(){
            return {
                bear: false,
                kitten: false
            }
        }
    }
</script>

<style scoped>

</style>