const { ThemeProvider } = require("theme-ui");
const React = require("react");
const { deep } = require("@theme-ui/presets");
const tokens = {
  ...deep,
  sizes: { container: 1024 },
};
function Wrapper({ element }) {
  return <ThemeProvider theme={tokens}>{element}</ThemeProvider>;
}

module.exports = Wrapper;
