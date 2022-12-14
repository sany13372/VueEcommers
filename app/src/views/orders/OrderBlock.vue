<template>
    <div>
        <div v-for="iteme in newItem" :key="iteme[0]">
            <div v-if="iteme[0] == 'url'">
                {{iteme}}   
                <order-item :name="iteme[0]" :value="iteme[1]" :key="iteme[1]"/>
            </div>
        </div>
    </div>
</template>
<script>
import { onMounted, reactive } from '@vue/composition-api'
import store from '@/store/index'
import OrderItem from './OrderItem.vue'
export default {
    name:'OrdersPageBlock',
    props:['item'],
    components:{
        OrderItem
    },
    setup(props) {
    const newItem = Object.entries(props.item)
    return{
        newItem
    }
    }
}
</script>
<style>
    
</style>