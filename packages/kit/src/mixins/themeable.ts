import { defineComponent, PropType } from 'vue';

// noinspection JSUnusedGlobalSymbols
export default defineComponent({
  provide() {
    return {
      theme: this.themeableProvide,
    };
  },
  inject: {
    theme: {
      default: {
        isDark: false,
      },
    },
  },
  props: {
    dark: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
    light: {
      type: Boolean as PropType<boolean | null>,
      default: null,
    },
  },
  data() {
    return {
      themeableProvide: {
        isDark: false,
      },
    };
  },
  computed: {
    isComponentDark() {
      if (this.dark === true) {
        return true;
      }

      if (this.light === true) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.theme.isDark;
    },
    themeClasses() {
      return {
        'ui-theme--dark': this.isComponentDark,
        'ui-theme--light': !this.isComponentDark,
      };
    },
    isRootDark() {
      if (this.dark === true) {
        return true;
      }

      if (this.light === true) {
        return false;
      }

      return this.$ui.theme.isDark || false;
    },
    rootThemeClasses() {
      return {
        'ui-theme--dark': this.isRootDark,
        'ui-theme--light': !this.isRootDark,
      };
    },
  },
  watch: {
    isComponentDark: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isComponentDark;
        }
      },
    },
  },
});
