# ts-nextjs-tailwindcss-storybook-starter

A starter including

- Next.js (with TypeScript)
  - A React framework that allows server-side rendering (compared to Create React App, which specializes in client-side rendering)
- Tailwind CSS
  - Productive and maintainable CSS framework that uses utility classes heavily. Pairs quite well with the [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind) VS Code extension
- Storybook
  - Makes it easier to build UI components. Build components in isolation, mock hard-to-reach use cases, and more
- eslint
- prettier
- purgecss as a PostCSS plugin
  - Removes unused CSS in production, leading to smaller CSS bundles

Also comes with examples

- An example theme change in `tailwind.config.js` that changes the default app-wide serif, sans serif, and monospaced fonts
- An overridden `_app` component that does necessary global CSS imports: from Google Fonts and Tailwind
- A simple `Index` component that performs initial data population from a server hosted on [Dark](https://darklang.com/)
- A "dumb" `Tag` component to demonstrate Tailwind utility classes
- A small set of `storybook` stories for the `Tag` component

Used with these related VS Code settings

```json
{
  "editor.formatOnSave": true,
  "typescript.preferences.quoteStyle": "single",
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.semi": false
}
```

## Setup

```
yarn install
yarn run dev
```

## Storybook

```
yarn run storybook
```
