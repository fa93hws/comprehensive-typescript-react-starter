import * as webpack from 'webpack';

export default function cssModuleLoader(this: webpack.loader.LoaderContext, source: string) {
  const styles = this.exec(source, this.resource);
  const styleMap = `{ ${Object.keys(styles).map(key => `${key}: ${JSON.stringify(styles[key])}`).join(',')} }`;

  const result = `
const styles = ${styleMap};
export default styles;
`;
  return result;
}
