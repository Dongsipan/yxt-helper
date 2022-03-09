import * as vscode from 'vscode';
// import buttonHover from "./button";
// import svgHover from './svg';
// import linkHover from './link';
// import dividerHover from './divider';
// import breadcrumbHover from './breadcrumb';
// import breadcrumbItemHover from './bresdcrumb-item';
// import dropdownHover from './dropdown';
// import dropdownItemHover from './dropdown-item';
import { Hover } from '../@types/hove-schema';

const components: vscode.Disposable[] = [];

const getJson = () => {
  const requireSelect = require.context('./', false, /.json$/);
  requireSelect.keys().forEach(filename => {
    const schema = requireSelect(filename);
    createHover(schema);
  });
};

const createHover = (schema: Hover) => {
  const hover = vscode.languages.registerHoverProvider('vue', {
    provideHover(document, position, token) {
      const word = document.getText(document.getWordRangeAtPosition(position));
      if (schema.component === word) {
        const markdown = new vscode.MarkdownString();
        markdown.appendMarkdown(`**Attributes**\n`);
        schema.attributes.forEach(element => {
          markdown.appendMarkdown(`* **${element.parameter}**  说明：${element.description}，可选值：${element.optional || '-'}\n`);
        });
        if (schema.events && schema.events.length) {
          markdown.appendMarkdown('\n');
          markdown.appendMarkdown(`**Events**\n`);
          schema.events.forEach(element => {
            markdown.appendMarkdown(`* **${element.event}**  说明：${element.description}，回调参数${element.callback || '-'}\n`);
          });
        }
        if (schema.methods && schema.methods.length) {
          markdown.appendMarkdown('\n');
          markdown.appendMarkdown(`**Methods**\n`);
          schema.methods.forEach(element => {
            markdown.appendMarkdown(`* **${element.method}**  说明：${element.description}，参数${element.parameter || '-'}\n`);
          });
        }
        if (schema.slots && schema.slots.length) {
          markdown.appendMarkdown('\n');
          markdown.appendMarkdown(`**Slots**\n`);
          schema.slots.forEach(element => {
            markdown.appendMarkdown(`* **${element.name}**  说明：${element.description}\n`);
          });
        }
        markdown.appendMarkdown('\n');
        markdown.appendMarkdown(`[查看文档](${schema.link})`);
        markdown.isTrusted = true;
        markdown.supportHtml = true;
        return new vscode.Hover(markdown);
      }
      return undefined;
    }
  });
  components.push(hover);
};

const registerHoverExtension = (context: vscode.ExtensionContext) => {
  getJson();
  components.forEach(element => context.subscriptions.push(element));
};

export default registerHoverExtension;
