<template>
  <div class="container">
    <HeaderLayout />
    <Nuxt class="main" />
    <FooterLayout />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HeaderLayout from "./header.vue";
import FooterLayout from "./footer.vue";
export default Vue.extend({
  name: "DefaultLayout",
  components: { HeaderLayout, FooterLayout },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 1 0%;
}
</style>
