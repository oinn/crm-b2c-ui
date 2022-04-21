// noinspection JSUnusedGlobalSymbols

import { Plugin } from 'vue';

export interface UiProperties {
  theme: {
    isDark: boolean,
  },
}

declare const UiKit: Plugin;
export default UiKit;
