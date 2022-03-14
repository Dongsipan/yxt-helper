import { Schema } from "../@types/schema";

const importAll = (context: __WebpackModuleApi.RequireContext) => {
  const schemas: Schema[] = [];

  context.keys().forEach(filename => {
    const schema = context(filename);
    schemas.push(schema);
  });
  return schemas;
};
const context = require.context('./', false, /.json$/);
export default importAll(context);
