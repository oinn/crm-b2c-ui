import { Plugin } from 'vue';
import * as components from './components';
import './styles/index.scss';

type Components = typeof components
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

const UiKit: Plugin = {
  install(App) {
    // eslint-disable-next-line no-param-reassign
    App.config.globalProperties.$ui = {
      theme: {
        isDark: false,
      },
      uiMainOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    } as UiProperties;

    Object.entries(components as Components).forEach(([name, component]) => {
      App.component(name, component);
    });
  },
};

export default UiKit;
