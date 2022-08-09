<template>
  <NuxtLink
    role="button"
    v-if="to"
    :to="to"
    :class="[
      { 'w-full': fullWidth, [disabledStyle]: disabled },
      baseStyles,
      sizeStyles,
      textTransform,
      styles,
    ]"
  >
    <slot></slot>
  </NuxtLink>
  <button
    type="button"
    v-else
    v-on="$listeners"
    :disabled="disabled"
    :class="[
      { 'w-full': fullWidth, [disabledStyle]: disabled },
      baseStyles,
      sizeStyles,
      textTransform,
      styles,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    // The link to route to. If defined, it renders <NuxtLink></NuxtLink>,
    to: String,
    // Should the button span the width of its parent container?
    fullWidth: {
      type: Boolean,
      default: false,
    },
    // Is the button disabled?
    disabled: {
      type: Boolean,
      default: false,
    },
    // Should the text transform to the uppercase?
    uppercase: {
      type: Boolean,
      default: false,
    },
    // The size of the button, specifies if the button should be 'small', 'medium' or 'large'. Default is medium.
    size: {
      type: String,
      default: 'medium',
      validator: (value) => {
        return ['small', 'large', 'medium'].includes(value) !== -1
      },
    },
    // The button variant, specifies if the button should be 'contained', 'outlined' or 'text'. Default is text.
    variant: {
      type: String,
      default: 'text',
      validator: (value) => {
        return ['text', 'contained', 'outlined'].includes(value) !== -1
      },
    },
    // The background color of the button. Default is primary
    color: {
      type: String,
      default: 'primary',
      validator: (value) => {
        return (
          [
            'success',
            'warning',
            'error',
            'info',
            'primary',
            'secondary',
          ].includes(value) !== -1
        )
      },
    },
  },
  computed: {
    baseStyles() {
      return 'inline-flex items-center justify-center relative box-border outline-0 m-0 select-none whitespace-nowrap no-underline font-medium leading-[1.75] tracking-[0.02285em] rounded transition-colors'
    },
    sizeStyles() {
      return {
        'px-[9px] py-[3px] text-[13px]': this.size === 'small',
        'px-[15px] py-[5px] text-sm': this.size === 'medium',
        'px-[21px] py-[7px] text-base': this.size === 'large',
      }
    },
    textTransform() {
      return this.uppercase ? 'uppercase' : 'capitalize'
    },
    styles() {
      let classes
      switch (this.variant) {
        case 'contained':
          classes = {
            'bg-primary-400  text-white border-0': this.color === 'primary',
            'bg-secondary-600 hover:bg-secondary-700 text-white border-0':
              this.color === 'secondary',
            'bg-success-600 hover:bg-success-700 text-white border-0':
              this.color === 'success',
            'bg-warning-500 hover:bg-warning-700 text-white border-0':
              this.color === 'warning',
            'bg-error-600 hover:bg-error-700 text-white border-0':
              this.color === 'error',
            'bg-info-600 hover:bg-info-700 text-white border-0':
              this.color === 'info',
          }
          break
        case 'outlined':
          classes = {
            'bg-transparent hover:bg-primary-100 text-primary-600 border-primary-300 hover:border-primary-400 border-solid border':
              this.color === 'primary',
            'bg-transparent hover:bg-secondary-50 text-secondary-800 border-secondary-400 hover:border-secondary-600 border-solid border':
              this.color === 'secondary',
            'bg-transparent hover:bg-success-50 text-success-800 border-success-400 hover:border-success-600 border-solid border':
              this.color === 'success',
            'bg-transparent hover:bg-warning-50 text-warning-800 border-warning-400 hover:border-warning-600 border-solid border':
              this.color === 'warning',
            'bg-transparent hover:bg-error-50 text-error-800 border-error-400 hover:border-error-600 border-solid border':
              this.color === 'error',
            'bg-transparent hover:bg-info-50 text-info-800 border-info-400 hover:border-info-600 border-solid border':
              this.color === 'info',
          }
          break
        default:
          classes = {
            'bg-transparent hover:bg-primary-100 text-primary-500 border-0':
              this.color === 'primary',
            'bg-transparent hover:bg-secondary-50 text-secondary-800 border-0':
              this.color === 'secondary',
            'bg-transparent hover:bg-success-50 text-success-800 border-0':
              this.color === 'success',
            'bg-transparent hover:bg-warning-50 text-warning-800 border-0':
              this.color === 'warning',
            'bg-transparent hover:bg-error-50 text-error-800 border-0':
              this.color === 'error',
            'bg-transparent hover:bg-info-50 text-info-800 border-0':
              this.color === 'info',
          }
          break
      }
      return classes
    },
    disabledStyle() {
      const textBtnDisabled =
        'border-0 bg-transparent hover:bg-transparent text-secondary-800'
      const outlinedBtnDisabled =
        'border-secondary-500 border-solid border bg-transparent hover:bg-transparent'
      const containedBtnDisabled =
        'border-0 text-secondary-200 bg-secondary-500 hover:bg-secondary-500'
      const disabledBtn =
        this.variant === 'outlined'
          ? outlinedBtnDisabled
          : this.variant === 'contained'
          ? containedBtnDisabled
          : textBtnDisabled
      return `${disabledBtn} cursor-not-allowed opacity-40`
    },
  },
}
</script>
