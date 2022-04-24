import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    elevation: {
      type: [String, Number] as PropType<string | number>,
      default: 0,
      validator(value: string | number) {
        const parsedElevation = typeof value === 'string' ? parseInt(value, 10) : value;
        return !(parsedElevation < 0 || parsedElevation > 3);
      },
    },
  },
  computed: {
    elevationClass() {
      return {
        [`ui-elevation-${this.elevation}`]: true,
      };
    },
  },
});
