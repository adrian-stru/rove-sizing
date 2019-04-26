import path from 'path';
import pug from 'pug';

export default async ({ template, params }) => {
  const file = path.join(__dirname, `../templates/${template}.pug`);

  if (!file) {
    throw new Error(`Could not find the ${template} in path ${file}`);
  }

  const build = pug.compileFile(file);

  return build(params);
};
