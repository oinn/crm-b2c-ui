<template>
  <div class="ui-toolbar-title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiToolbarTitle',
});
</script>

<style lang="scss">
.ui-toolbar-title {
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
</style>
