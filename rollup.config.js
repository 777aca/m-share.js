import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "dist/m-share.js",
    format: "umd",
    name: "Mshare",
  },
  externalHelpers: true,
  plugins: [
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      externalHelpers: true,
    }),
  ],
};
