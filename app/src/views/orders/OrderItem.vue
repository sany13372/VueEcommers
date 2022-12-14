<template>
    <div>
        <v-card>

            {{name}}:{{value}}
        </v-card>
    </div>
</template>
<script>
import { onMounted, reactive } from '@vue/composition-api'
import store from '@/store/index'
    import {} from 'vuex'
export default {
    name:'OrderItem',
    props:['name','value'],
    setup(props) {

    }
}
</script>
<style>
    
</style>