import { Plugin } from 'vue';
import * as components from './components';
import './styles/index.scss';

type Components = typeof components;

export interface Offsets {
  top: number,
  right: number,
  bottom: number,
  left: number,
}

interface UiBaseProperties {
  theme: {
    isDark: boolean,
  },
  uiMainOffsets: Offsets,
}

const baseProperties: UiBaseProperties = {
  theme: {
    isDark: false,
  },
  uiMainOffsets: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

type ListenerCallback = <K extends keyof UiBaseProperties, V extends typeof baseProperties[K]>(value: V) => void;

export interface UiProperties extends UiBaseProperties {
  addListener: (propertyName: keyof UiBaseProperties, callback: ListenerCallback) => symbol | undefined,
  removeListener: (listenerId: symbol) => void,
}

type Listeners = {
  [listenerId: symbol]: {
    propertyName: keyof UiBaseProperties,
    callback: ListenerCallback,
  },
}

export function uiProperties() {
  const listeners: Listeners = {};

  const properties: UiProperties = {
    ...baseProperties,
    addListener: (propertyName, callback) => {
      const listenerId = Symbol(propertyName);
      if (!Object.getOwnPropertySymbols(listeners).find((lId) => lId === listenerId)) {
        listeners[listenerId] = {
          propertyName,
          callback,
        };
        return listenerId;
      }

      return undefined;
    },
    removeListener: (listenerId) => {
      const foundListenerId = Object.getOwnPropertySymbols(listeners).find((lId) => lId === listenerId);
      if (foundListenerId) {
        delete listeners[foundListenerId];
      }
    },
  };

  const handler: ProxyHandler<UiProperties> = {
    set: (target, propertyName: keyof UiBaseProperties, value) => {
      // eslint-disable-next-line no-param-reassign
      target[propertyName] = value;

      Object.getOwnPropertySymbols(listeners).forEach((lId) => {
        if (listeners[lId].propertyName === propertyName) {
          listeners[lId].callback(value);
        }
      });

      return true;
    },
  };

  return new Proxy(properties, handler);
}

const UiKit: Plugin = {
  install(App) {
    // eslint-disable-next-line no-param-reassign
    App.config.globalProperties.$ui = uiProperties();

    Object.entries(components as Components).forEach(([name, component]) => {
      App.component(name, component);
    });
  },
};

export default UiKit;
