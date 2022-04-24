<template>
  <main class="ui-main" :style="styles">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Offsets } from '@/index';

let uiListener: symbol | undefined;

export default defineComponent({
  name: 'UiMain',
  data() {
    return {
      offsets: this.$ui.uiMainOffsets,
    };
  },
  computed: {
    styles() {
      return {
        margin: `${this.offsets.top}px ${this.offsets.right}px ${this.offsets.bottom}px ${this.offsets.left}px`,
      };
    },
  },
  created() {
    uiListener = this.$ui.addListener('uiMainOffsets', (uiMainOffsets: Offsets) => {
      this.offsets = uiMainOffsets;
    });
  },
  beforeUnmount() {
    if (uiListener) {
      this.$ui.removeListener(uiListener);
    }
  },
});
</script>

<style lang="scss">
// noinspection CssUnknownTarget
@import "@/styles/config.scss";
// noinspection CssUnknownTarget
@import "@/styles/colors/index.scss";

.ui-main {
  padding: 5 * $module;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
