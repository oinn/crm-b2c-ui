import { defineComponent } from 'vue';
import elevationable from '@/mixins/elevationable';
import { mount, MountingOptions } from '@vue/test-utils';

const ElevationableComponent = defineComponent({
  name: 'ElevationableComponent',
  mixins: [elevationable],
  template: '<div :class="elevationClass"></div>',
});

type Props = InstanceType<typeof ElevationableComponent>['$props'];

describe('Elevationable mixin', () => {
  it('Has correct class when elevation is number', () => {
    const wrapper = mount(ElevationableComponent, {
      propsData: {
        elevation: 1,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-elevation-1');
  });

  it('Has correct class when elevation is string', () => {
    const wrapper = mount(ElevationableComponent, {
      propsData: {
        elevation: '1',
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-elevation-1');
  });

  it('Has correct class when elevation is zero', () => {
    const wrapper = mount(ElevationableComponent, {
      propsData: {
        elevation: 0,
      } as MountingOptions<Props>,
    });

    expect(wrapper.classes()).toContain('ui-elevation-0');
  });
});
