import { mount, MountingOptions, VueWrapper } from '@vue/test-utils';
import UiToolbar from './UiToolbar.vue';

type Props = InstanceType<typeof UiToolbar>['$props'];

describe('UiToolbar', () => {
  // Preparation
  let mountFunction: (options?: Record<string, unknown>) => VueWrapper;
  beforeEach(() => {
    mountFunction = (options = {}) => mount(UiToolbar, { ...options });
  });

  it('Rendered correctly', () => {
    const wrapper = mountFunction({
      slots: {
        default: 'Default slot text',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Contains correct class when it has app property', () => {
    const wrapper = mountFunction({
      propsData: {
        app: true,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-toolbar--app');
  });

  it('Contains correct class when it has dense property', () => {
    const wrapper = mountFunction({
      propsData: {
        dense: true,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-toolbar--dense');
  });

  it('Contains correct class when it has rarefied property', () => {
    const wrapper = mountFunction({
      propsData: {
        rarefied: true,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-toolbar--rarefied');
  });

  // Don't have test for check rewriting this.$ui.uiMainOffsets global parameter.
});
