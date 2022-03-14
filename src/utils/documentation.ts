import { Schema } from "../@types/schema";
import * as vscode from "vscode";

export const createDocumentation = (documentation: Schema) => {
    const markdown = new vscode.MarkdownString();
    markdown.appendMarkdown(`**Attributes**\n`);
    documentation?.attributes.forEach((element) => {
        markdown.appendMarkdown(`* **${element.parameter}**  说明：${element.description}，可选值：${element.optional || '-'}\n`);
    });
    if (documentation?.events && documentation.events.length) {
        markdown.appendMarkdown('\n');
        markdown.appendMarkdown(`**Events**\n`);
        documentation.events.forEach(element => {
            markdown.appendMarkdown(`* **${element.event}**  说明：${element.description}，回调参数${element.callback || '-'}\n`);
        });
    }
    if (documentation?.methods && documentation.methods.length) {
        markdown.appendMarkdown('\n');
        markdown.appendMarkdown(`**Methods**\n`);
        documentation.methods.forEach(element => {
            markdown.appendMarkdown(`* **${element.method}**  说明：${element.description}，参数${element.parameter || '-'}\n`);
        });
    }
    if (documentation?.slots && documentation.slots.length) {
        markdown.appendMarkdown('\n');
        markdown.appendMarkdown(`**Slots**\n`);
        documentation.slots.forEach(element => {
            markdown.appendMarkdown(`* **${element.name}**  说明：${element.description}\n`);
        });
    }
    markdown.appendMarkdown('\n');
    markdown.appendMarkdown(`[查看文档](${documentation?.link})`);
    markdown.isTrusted = true;
    markdown.supportHtml = true;
    return markdown;
};
