<template>
    <div>
        <div class="tabs">
            <ul>
                <li
                        v-for="(tab,key) in tabs"
                        :class="{'is-active': active===key}"
                        @click="active=key"
                >
                    <a>{{tab.title}}</a>
                </li>
            </ul>
        </div>
        <div>
            <div v-html="tabs[active].content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        props: ['tabs'],
        data(){
            return {
                active: 0
            }
        }
    }
</script>

<style scoped>

</style>