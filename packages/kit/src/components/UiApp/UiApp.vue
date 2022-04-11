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
