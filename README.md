# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Screenshots

### Desktop version
![desktop-version](https://github.com/antonyusupov/daisyui-tailwind-ts-react/assets/74938284/15b91d39-3e30-4afa-954f-7251cfb4cfe3)

### Tablet version
![tablet-version](https://github.com/antonyusupov/daisyui-tailwind-ts-react/assets/74938284/4b7cd5e8-b4c1-4748-8775-8acd20ea8e97)

### Mobile version
![daisyui-designer-mobile-version](https://github.com/antonyusupov/daisyui-tailwind-ts-react/assets/74938284/bf1d4c89-77db-4b1f-b8c2-47b7cd38d021)

