module.exports = function (api) {
  api.cache(true);

  if (
    process.env.NX_TASK_TARGET_TARGET === 'build' ||
    process.env.NX_TASK_TARGET_TARGET.includes('storybook')
  ) {
    return {
      plugins: ["@babel/plugin-syntax-export-namespace-from"],
      presets: [
        [
          '@nx/react/babel',
          {
            runtime: 'automatic',
          },
        ],
      ],
    };
  }

  return {
    plugins: ["@babel/plugin-syntax-export-namespace-from"],
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
  };
};
