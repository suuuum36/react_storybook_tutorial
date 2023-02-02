import '../src/index.css';
//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  //action은 클릭이 되었을때 UI의 actions 패널에 나타날 공백을 생성함.
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};