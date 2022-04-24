<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { themeable } from '@/mixins';

export default defineComponent({
  name: 'UiApp',
  mixins: [themeable],
  computed: {
    classes() {
      return {
        'ui-app': true,
        ...this.themeClasses,
      };
    },
  },
  created() {
    this.$ui.theme.isDark = this.dark || false;
  },
});
</script>

<style lang="scss">
// noinspection CssUnknownTarget
@import "@/styles/colors/index.scss";

.ui-app {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;

  font-family: Rostelecom Basis, Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &.ui-theme--light {
    background-color: get-element-color("light", "background");

    color: get-element-color("light", "text-primary");
  }

  &.ui-theme--dark {
    background-color: get-element-color("dark", "background");

    color: get-element-color("dark", "text-primary");
  }

  * {
    box-sizing: border-box;
  }
}
</style>
