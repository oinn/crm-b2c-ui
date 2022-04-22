import { mount } from '@vue/test-utils';
import UiToolbarTitle from './UiToolbarTitle.vue';

describe('UiToolbarTitle', () => {
  it('Rendered correctly', () => {
    const wrapper = mount(UiToolbarTitle, {
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
