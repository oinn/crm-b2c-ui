import {
  config,
  mount,
  MountingOptions,
  VueWrapper,
} from '@vue/test-utils';
import { defineComponent } from 'vue';
import themeable from '@/mixins/themeable';

const ThemeableStandardComponent = defineComponent({
  name: 'ThemeableStandardComponent',
  mixins: [themeable],
  template: '<div :class="themeClasses"></div>',
});

const ThemeableMenuComponent = defineComponent({
  name: 'ThemeableMenuComponent',
  mixins: [themeable],
  template: '<div :class="rootThemeClasses"></div>',
});

type Props = InstanceType<typeof ThemeableStandardComponent>['$props'];

describe('Themeable mixin on standard component', () => {
  // Preparation
  let mountFunction: (options?: Record<string, unknown>) => VueWrapper;
  beforeEach(() => {
    mountFunction = (options = {}) => mount(ThemeableStandardComponent, { ...options });
  });

  it('Contained correct class when it has no any params', () => {
    const wrapper = mountFunction();

    expect(wrapper.classes()).toContain('ui-theme--light');
  });

  it('Contained correct class when it has dark property', () => {
    const wrapper = mountFunction({
      propsData: {
        dark: true,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-theme--dark');
  });

  it('Contained correct class when parent component provided to it another theme property', () => {
    const wrapper = mountFunction({
      global: {
        provide: {
          theme: {
            isDark: true,
          },
        },
      },
    });

    expect(wrapper.classes()).toContain('ui-theme--dark');
  });

  it('Overwrites provided parent theme property by own light property', () => {
    const wrapper = mountFunction({
      global: {
        provide: {
          theme: {
            isDark: true,
          },
        },
      },
      propsData: {
        light: true,
      },
    });

    expect(wrapper.classes()).toContain('ui-theme--light');
  });
});

describe('Themeable mixin on menu component', () => {
  // Preparation
  let mountFunction: (options?: Record<string, unknown>) => VueWrapper;
  beforeEach(() => {
    mountFunction = (options = {}) => mount(ThemeableMenuComponent, { ...options });
  });

  it('Contained correct class when it has no any params', () => {
    const wrapper = mountFunction();

    expect(wrapper.classes()).toContain('ui-theme--light');
  });

  it('Get correct theme property from global kit parameters', () => {
    config.global.mocks = {
      $ui: {
        theme: {
          isDark: true,
        },
      },
    };
    const wrapper = mountFunction();

    expect(wrapper.classes()).toContain('ui-theme--dark');

    config.global.mocks = {
      $ui: {
        theme: {
          isDark: false,
        },
      },
    };
  });

  it('Contained correct class when it has dark property', () => {
    const wrapper = mountFunction({
      propsData: {
        dark: true,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-theme--dark');
  });

  it('Provided property does not affect to menu theme', () => {
    const wrapper = mountFunction({
      global: {
        provide: {
          theme: {
            isDark: true,
          },
        },
      },
    });

    expect(wrapper.classes()).toContain('ui-theme--light');
  });
});
