<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { themeable, elevationable } from '@/mixins';

export default defineComponent({
  name: 'UiToolbar',
  mixins: [themeable, elevationable],
  props: {
    app: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    dense: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    rarefied: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'ui-toolbar': true,
        ...this.themeClasses,
        ...this.elevationClass,
        'ui-toolbar--app': this.app,
        'ui-toolbar--dense': this.dense,
        'ui-toolbar--rarefied': this.rarefied,
      };
    },
  },
  mounted() {
    if (this.app) {
      this.$ui.uiMainOffsets = {
        ...this.$ui.uiMainOffsets,
        top: this.$el.clientHeight,
      };
    }
  },
});
</script>

<!--suppress SassScssResolvedByNameOnly, CssUnknownTarget -->
<style lang="scss">
@import "@/styles/config.scss";
@import "@/styles/colors/index.scss";

.ui-toolbar {
  padding: 0 4 * $module;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;

  color: inherit;

  &.ui-theme--light {
    background-color: get-element-color("light", "toolbar");

    color: get-element-color("light", "text-primary")
  }
  &.ui-theme--dark {
    background-color: get-element-color("dark", "toolbar");

    color: get-element-color("dark", "text-primary")
  }

  &.ui-toolbar--app {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    padding: 0 5 * $module;
  }

  &.ui-toolbar--dense {
    height: 36px;
  }

  &.ui-toolbar--rarefied {
    height: 56px;
  }
}
</style>
