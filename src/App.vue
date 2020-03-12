<template>
    <div>
        <tabs :tabs="tabs"></tabs>
    </div>
</template>

<script>

    import Tabs from "./components/Tabs.vue";
    export default {
        name: "App",
        components: {Tabs},
        data(){
            return {
                tabs: [
                    {title:'Pictures', content: '<b>some cool Pictures</b>'},
                    {title:'Music', content: '<b>some cool Music</b>'},
                    {title:'Videos', content: '<b>some cool Videos</b>'},
                    {title:'Documents', content: '<b>some cool Documents</b>'},
                    {title:'Games', content: '<b>some cool Games</b>'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>