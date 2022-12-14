<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs
      v-model="tab"
      show-arrows
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.icon"
      >
        <v-icon
          size="20"
          class="me-3"
        >
          {{ tab.icon }}
        </v-icon>
        <span>{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>

      </v-tab-item>

      <v-tab-item>

      </v-tab-item>

      <v-tab-item>

      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import {
  mdiPassport,
  mdiHomeGroup,
  mdiFormTextboxPassword,

} from "@mdi/js";
import {ref} from "@vue/composition-api";

export default {
  name: "Profile",
  components: {},
  setup(props, context){
    const tab = ref('')

    // tabs
    const tabs = [
      { title: 'Адреса', icon: mdiHomeGroup },
      { title: 'Документы', icon: mdiPassport },
      { title: 'Аккаунт', icon: mdiFormTextboxPassword },
    ]



    return {
      tab,tabs,
      icons : {mdiPassport, mdiHomeGroup, mdiFormTextboxPassword}
    }
  }
}
</script>

<style scoped>

</style>
