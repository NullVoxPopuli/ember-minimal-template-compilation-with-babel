const {default: makePlugin} = require('babel-plugin-ember-template-compilation');

console.log(makePlugin)

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    // require.resolve('ember-template-imports/src/babel-plugin'),
    [makePlugin(
      {
        precompile: (...args) => {

          console.log(args.length)
          return args[0];
        }
      }
    ),
    ],
    // [HTMLBars, {
    //   precompile: (...args) => console.log(...args),
    //   ensureModuleApiPolyfill: false,
    //   modules: {
    //     'TEMPLATE-TAG-MODULE': {
    //       export: 'GLIMMER_TEMPLATE',
    //       debugName: '<template>',
    //       useTemplateTagProposalSemantics: 1,
    //     },
    //   }

    // }],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}]
  ]
};
