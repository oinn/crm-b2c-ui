import { Plugin } from 'vue';
import * as components from './components';

type Components = typeof components

const UiKit: Plugin = {
  install(App) {
    Object.entries(components as Components).forEach(([name, component]) => {
      App.component(name, component);
    });
  },
};

export default UiKit;
