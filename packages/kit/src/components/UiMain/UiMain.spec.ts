import { config, mount } from '@vue/test-utils';
import { uiProperties } from '@/index';
import UiMain from './UiMain.vue';

describe('UiToolbarTitle', () => {
  it('Rendered correctly', () => {
    const wrapper = mount(UiMain, {
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Reading uiMainOffsets global property', () => {
    config.global.mocks = {
      $ui: {
        ...uiProperties(),
        uiMainOffsets: {
          top: 48,
          right: 56,
          bottom: 36,
          left: 256,
        },
      },
    };
    const wrapper = mount(UiMain, {
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.attributes().style).toBe('margin: 48px 56px 36px 256px;');
  });
});
