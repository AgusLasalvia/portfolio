import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginNext from '@next/eslint-plugin-next';
import eslintPluginTs from '@typescript-eslint/eslint-plugin';

export default [
  {
    plugins: {
      react: eslintPluginReact,
      '@next/next': eslintPluginNext,
      '@typescript-eslint': eslintPluginTs
    },
    rules: {
      // 💬 Apaga la advertencia sobre fuentes personalizadas
      '@next/next/no-page-custom-font': 'off',

      // 💬 Permite usar comillas simples sin escapar en JSX
      'react/no-unescaped-entities': 'off',

      // 💬 Opcional: Ignora vars no usadas si empiezan con "_"
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
