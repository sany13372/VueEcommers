<template>
    <div>
        <OrderBlock v-for="item in order" :key="item.name" :item="item"/>
    </div>
</template>
<script>
import { onMounted, reactive } from '@vue/composition-api'
import store from '@/store/index'
    import {} from 'vuex'
import OrderBlock from './OrderBlock.vue'
export default {
    name:'OrdersPage',
    components: {
        OrderBlock
    },
    setup(props) {
        const order = reactive([
            {
                url:'https://ww.com',
                name:'Cheps5',
                stragety:'Полный'
            },
            {
                url:'https://ww.com',
                name:'Cheps4',
                stragety:'Полный'
            },
            {
                url:'https://ww.com',
                name:'Cheps2',
                stragety:'Полный'
            },
            {
                url:'https://ww.com',
                name:'Cheps3',
                stragety:'Полный'
            },
        ])
        return {
            order
    }
    }
}
</script>
<style>
    
</style>