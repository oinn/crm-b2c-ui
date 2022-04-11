import { Plugin, Component } from 'vue';
import * as components from './components';

type Components = {
  [name: string]: Component
}

const UiKit: Plugin = {
  install(App) {
    Object.entries(components as Components).forEach(([name, component]) => {
      App.component(name, component);
    })
  }
}

export default UiKit;
