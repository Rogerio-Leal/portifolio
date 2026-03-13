import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off', // Não necessário no React 17+
      semi: ['error', 'never'], // Removendo pontos e vírgula conforme sua preferência
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  prettierConfig // Sempre por último para evitar conflitos com o Prettier
)
