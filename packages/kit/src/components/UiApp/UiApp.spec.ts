import { mount } from '@vue/test-utils';
import UiApp from './UiApp.vue';

describe('UiApp', () => {
  it('Rendered correctly', () => {
    const wrapper = mount(UiApp, {
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
