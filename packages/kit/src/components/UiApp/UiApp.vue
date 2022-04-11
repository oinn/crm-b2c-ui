<template>
  <div class="ui-app">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiApp'
});
</script>

<style lang="scss">
.ui-app {
  display: flex;
  flex-direction: column;

  font-family: Rostelecom Basis, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  * {
    box-sizing: border-box;
  }
}
</style>
