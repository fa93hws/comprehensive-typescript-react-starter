import { resolve } from 'path';

export function getCssLoaderOption(hashOutput: boolean) {
  const localIdentName = hashOutput
    ? '[hash:base64]'
    : '[path][name]__[local]'
  return {
    modules: {
      mode: 'local',
      context: resolve(__dirname, '../src'),
      localIdentName,
    },
    localsConvention: 'camelCaseOnly',
    importLoaders: 0,
    sourceMap: true,
  };
}
