import * as webpack from 'webpack';

/* eslint-disable babel/no-invalid-this */
export default function cssModuleLoader(this: webpack.loader.LoaderContext, source: string) {
  const styles = this.exec(source, this.resource);
  const styleMap = `{ ${Object.keys(styles).map(key => `${key}: ${JSON.stringify(styles[key])}`).join(',')} }`;

  const result = `
const styles = ${styleMap};
export default styles;
`;
  return result;
}
/* eslint-enable babel/no-invalid-this */
