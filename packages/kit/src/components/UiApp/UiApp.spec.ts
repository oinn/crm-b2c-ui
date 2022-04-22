import { config, mount, MountingOptions } from '@vue/test-utils';
import UiApp from './UiApp.vue';

type Props = InstanceType<typeof UiApp>['$props'];

describe('UiApp', () => {
  it('Rendered correctly', () => {
    const wrapper = mount(UiApp, {
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Theme property changed global kit parameter', () => {
    config.global.mocks = {
      $ui: {
        theme: {
          isDark: false,
        },
      },
    };
    mount(UiApp, {
      propsData: {
        dark: true,
      },
    } as MountingOptions<Props>);

    expect(config.global.mocks.$ui.theme.isDark).toBe(true);
  });
});
