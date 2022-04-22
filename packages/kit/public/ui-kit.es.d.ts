// noinspection JSUnusedGlobalSymbols

import { Plugin } from 'vue';

export interface UiProperties {
  theme: {
    isDark: boolean,
  },
  uiMainOffset: {
    top: number,
    right: number,
    bottom: number,
    left: number,
  }
}

declare const UiKit: Plugin;
export default UiKit;
