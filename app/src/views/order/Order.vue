<template>
  <v-row class="match-height">
    <v-col cols="12">
      <v-card>
        <v-card-title>Заказ на покупку #{{ orderid }}
          
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>


import {mdiHelpCircle, mdiPlus, mdiLinkVariant, mdiLinkVariantOff} from "@mdi/js";




export default {
  name: "Order",
  components: {},

  setup() {

    const orderid = Math.floor(Math.random() * 100000);

    return {
       orderid,
      icons: {mdiPlus, mdiHelpCircle, mdiLinkVariant, mdiLinkVariantOff},

    };
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>


