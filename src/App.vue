<template>
    <div>
        <clicker @incr="count++"></clicker>
        <counter :value="count"><a>Cookies</a></counter>
        <upgrade
                v-for="upgrade in upgrades"
                :cps="upgrade.cps"
                @incrCps="increaseCps(upgrade.cps, upgrade.cost)"
                :disabled="upgrade.cost>count"
        ></upgrade>
    </div>
</template>

<script>
    import Clicker from "./components/Clicker.vue";
    import Counter from "./components/Counter.vue";
    import Upgrade from "./components/Upgrade.vue";
    export default {
        name: "App",
        components: {Upgrade, Counter, Clicker},
        created(){
            setInterval(()=> {
                this.count += this.cps;
            }, 1000);
        },
        mounted(){

        },
        data(){
            return {
                cps: 0,
                count: 0,
                upgrades: [
                    {cps: 0.1, cost: 10},
                    {cps: 0.5, cost: 50},
                    {cps: 1, cost: 100},
                    {cps: 10, cost: 1000},
                    {cps: 1000, cost: 10000},
                ]
            }
        },
        methods: {
            increaseCps(cps, cost){
                this.cps+=cps;
                this.count-=cost;
            }
        }
    }
</script>

<style scoped>

</style>