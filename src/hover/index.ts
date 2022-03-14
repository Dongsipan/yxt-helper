import * as vscode from 'vscode';
import { Schema } from '../@types/schema';
import schemas from '../schema';
import { createDocumentation } from "../utils/documentation";


const components: vscode.Disposable[] = [];

const createHover = (schema: Schema) => {
  const hover = vscode.languages.registerHoverProvider('vue', {
    provideHover(document, position, token) {
      const word = document.getText(document.getWordRangeAtPosition(position));
      if (schema.component === word) {
        const markdown = createDocumentation(schema);
        return new vscode.Hover(markdown);
      }
      return undefined;
    }
  });
  components.push(hover);
};

const registerHoverExtension = (context: vscode.ExtensionContext) => {
  schemas.forEach(item => {
    createHover(item);
  });
  components.forEach(element => context.subscriptions.push(element));
};

export default registerHoverExtension;
