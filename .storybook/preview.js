import '../src/index.css';
//π Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  //actionμ ν΄λ¦­μ΄ λμμλ UIμ actions ν¨λμ λνλ  κ³΅λ°±μ μμ±ν¨.
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};