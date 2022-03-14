import * as vscode from 'vscode';
import schemas from "../schema";
import {createDocumentation} from "../utils/documentation";

const completionProvider = vscode.languages.registerCompletionItemProvider('vue', {
  provideCompletionItems(document, position) {

    const providers: vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> = [];
    schemas.forEach(item => {
      if (item.completion) {
        const provider = new vscode.CompletionItem(item.completion);
        provider.documentation = createDocumentation(item);
        providers.push(provider);
      }
    });

    return providers;
  }
});

export default completionProvider;
