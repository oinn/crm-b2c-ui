import type { DefineComponent } from 'vue';
import type { UiProperties } from '@/index';

declare module 'vue' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
}

declare module '@vue/runtime-core' {
  // noinspection JSUnusedGlobalSymbols
  export interface ComponentCustomProperties {
    $ui: UiProperties
  }
}
