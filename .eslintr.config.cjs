// /* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

// module.exports = {
//   root: true,
//   'extends': [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-typescript',
//     '@vue/eslint-config-prettier/skip-formatting'
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   },
//   rules: {
//     [vue/no-v-text-v-html-on-component]: 'warn',
//   }
// }

import pluginVue from 'eslint-plugin-vue';
import tsVueConfig from '@vue/eslint-config-typescript';

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...tsVueConfig,
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'vue/no-v-text-v-html-on-component': 1,
    }
  }
]