import { Plugin, Component } from 'vue';
import * as components from './components';

type ComponentModule = {
  default: Component
}

type Components = {
  [name: string]: ComponentModule
}

const UiKit: Plugin = {
  install(App) {
    Object.entries(components as Components).forEach(([name, componentModule]) => {
      App.component(name, componentModule.default);
    })
  }
}

export default UiKit;
