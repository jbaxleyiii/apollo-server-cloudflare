import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import globals from "rollup-plugin-node-globals";

export default {
  input: "./index.js",
  output: {
    name: "apollo",
    file: "./dist/app.js",
    format: "umd",
    sourcemap: false,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve({ preferBuiltins: true, module: false, browser: true }),
    commonjs({
      // these are temporary during the beta process, and will be not needed
      // when moving this into first official release
      ignore: [
        "url",
        "events",
        "child_process",
        "url",
        "http",
        "apollo-engine",
      ],
    }),
    json(),
    globals(),
    uglify(),
  ],
};
