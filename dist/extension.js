/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const schema_1 = __webpack_require__(4);
const documentation_1 = __webpack_require__(19);
const completionProvider = vscode.languages.registerCompletionItemProvider('vue', {
    provideCompletionItems(document, position) {
        const providers = [];
        schema_1.default.forEach(item => {
            if (item.completion) {
                const provider = new vscode.CompletionItem(item.completion);
                provider.documentation = (0, documentation_1.createDocumentation)(item);
                providers.push(provider);
            }
        });
        return providers;
    }
});
exports["default"] = completionProvider;


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const schema_1 = __webpack_require__(4);
const documentation_1 = __webpack_require__(19);
const components = [];
const createHover = (schema) => {
    const hover = vscode.languages.registerHoverProvider('vue', {
        provideHover(document, position, token) {
            const word = document.getText(document.getWordRangeAtPosition(position));
            if (schema.component === word) {
                const markdown = (0, documentation_1.createDocumentation)(schema);
                return new vscode.Hover(markdown);
            }
            return undefined;
        }
    });
    components.push(hover);
};
const registerHoverExtension = (context) => {
    schema_1.default.forEach(item => {
        createHover(item);
    });
    components.forEach(element => context.subscriptions.push(element));
};
exports["default"] = registerHoverExtension;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const importAll = (context) => {
    const schemas = [];
    context.keys().forEach(filename => {
        const schema = context(filename);
        schemas.push(schema);
    });
    return schemas;
};
const context = __webpack_require__(5);
exports["default"] = importAll(context);


/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./breadcrumb-item.json": 6,
	"./breadcrumb.json": 7,
	"./button.json": 8,
	"./divider.json": 9,
	"./dropdown-item.json": 10,
	"./dropdown.json": 11,
	"./link.json": 12,
	"./menu-item-group.json": 13,
	"./menu-item.json": 14,
	"./nav-menu.json": 15,
	"./page-header.json": 16,
	"./pagination.json": 17,
	"./submenu.json": 18,
	"./svg.json": 20
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-breadcrumb-item","completion":"<yxt-breadcrumb-item :to=\\"{ path: \'/\' }\\"></yxt-breadcrumb-item>","attributes":[{"parameter":"to","description":"路由跳转对象，同 vue-router 的 to","optional":""},{"parameter":"replace","description":"在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录","optional":""}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/breadcrumb"}');

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-breadcrumb","completion":"<yxt-breadcrumb separator-class=\\"yxt-icon-arrow-right\\">\\n</yxt-breadcrumb>","attributes":[{"parameter":"separator","description":"分隔符","optional":""},{"parameter":"separator-class","description":"图标分隔符 class","optional":""}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/breadcrumb"}');

/***/ }),
/* 8 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"attributes":[{"parameter":"size","description":"尺寸","optional":"medium / small / large"},{"parameter":"type","description":"类型","optional":"primary / second / text"},{"parameter":"plain","description":"是否朴素按钮"},{"parameter":"round","description":"是否圆角按钮"},{"parameter":"circle","description":"是否圆形按钮"},{"parameter":"loading","description":"是否加载中状态"},{"parameter":"disabled","description":"是否禁用状态"},{"parameter":"icon","description":"图标类名"},{"parameter":"autofocus","description":"是否默认聚焦"},{"parameter":"native-type","description":"原生 type 属性","optional":"button / submit / reset"}],"codeBlock":"<yxt-button type=\\"primary\\">主要按钮</yxt-button>","component":"yxt-button","completion":"<yxt-button type=\\"primary\\">\\\\n</yxt-button>","link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/button"}');

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-divider","completion":"<yxt-divider />","codeBlock":"<yxt-divider></yxt-divider>","attributes":[{"parameter":"direction","description":"设置分割线方向","optional":"horizontal / vertical"},{"parameter":"content-position","description":"设置分割线文案的位置","optional":"left / right / center"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/divider"}');

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-dropdown-item","attributes":[{"parameter":"command","description":"指令","optional":""},{"parameter":"disabled","description":"禁用","optional":""},{"parameter":"divided","description":"显示分割线","optional":""},{"parameter":"icon","description":"图标类名","optional":""}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/dropdown"}');

/***/ }),
/* 11 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-dropdown","attributes":[{"parameter":"custom-elm","description":"是否要自定义下拉触发元素","optional":""},{"parameter":"placement","description":"菜单弹出位置","optional":"top/top-start/top-end/bottom/bottom-start/bottom-end"},{"parameter":"trigger","description":"触发下拉的行为","optional":"hover, click"},{"parameter":"hide-on-click","description":"是否在点击菜单项后隐藏菜单","optional":""},{"parameter":"show-timeout","description":"展开下拉菜单的延时（仅在 trigger 为 hover 时有效）","optional":""},{"parameter":"hide-timeout","description":"收起下拉菜单的延时（仅在 trigger 为 hover 时有效）","optional":""},{"parameter":"tabindex","description":"Dropdown 组件的 tabindex","optional":""},{"parameter":"disabled","description":"是否全部禁用","optional":""}],"events":[{"event":"click","description":"split-button 为 true 时，点击左侧按钮的回调","callback":""},{"event":"command","description":"点击菜单项触发的事件回调","callback":"dropdown-item 的指令"},{"event":"visible-change","description":"下拉框出现/隐藏时触发","callback":"出现则为 true，隐藏则为 false"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/dropdown"}');

/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-link","attributes":[{"parameter":"type","description":"类型","optional":"primary / success / warning / danger / info"},{"parameter":"underline","description":"是否下划线"},{"parameter":"disabled","description":"是否禁用状态"},{"parameter":"href","description":"原生 href 属性"},{"parameter":"icon","description":"图标类名"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/link"}');

/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-menu-item-group","attributes":[{"parameter":"title","description":"分组标题"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/menu"}');

/***/ }),
/* 14 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-menu-item","attributes":[{"parameter":"index","description":"唯一标志"},{"parameter":"route","description":"Vue Router 路径对象"},{"parameter":"disabled","description":"是否禁用"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/menu"}');

/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-menu","attributes":[{"parameter":"mode","description":"模式","optional":"horizontal / vertical","default":"vertical"},{"parameter":"collapse","description":"是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）","optional":"","default":"false"},{"parameter":"background-color","description":"菜单的背景色（仅支持 hex 格式）","optional":"","default":"false"},{"parameter":"text-color","description":"菜单的文字颜色（仅支持 hex 格式）","optional":"","default":"#fff"},{"parameter":"active-text-color","description":"当前激活菜单的文字颜色（仅支持 hex 格式）","optional":"","default":"#fff"},{"parameter":"default-active","description":"当前激活菜单的 index","optional":"","default":""},{"parameter":"default-openeds","description":"当前打开的 sub-menu 的 index 的数组","optional":""},{"parameter":"unique-opened","description":"是否只保持一个子菜单的展开","optional":"","default":"false"},{"parameter":"menu-trigger","description":"子菜单打开的触发方式(只在 mode 为 horizontal 时有效)","optional":"hover / click","default":"hover"},{"parameter":"router","description":"是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转","optional":"","default":"false"},{"parameter":"collapse-transition","description":"是否开启折叠动画","optional":"","default":"true"}],"methods":[{"method":"open","description":"展开指定的 sub-menu","parameter":"index: 需要打开的 sub-menu 的 index"},{"method":"close","description":"收起指定的 sub-menu","parameter":"index: 需要收起的 sub-menu 的 index"}],"events":[{"event":"select","description":"菜单激活回调","callback":"index: 选中菜单项的 index, indexPath: 选中菜单项的 index path"},{"event":"open","description":"sub-menu 展开的回调","callback":"index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path"},{"event":"close","description":"index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path","callback":"出现则为 true，隐藏则为 false"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/menu"}');

/***/ }),
/* 16 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-page-header","attributes":[{"parameter":"title","description":"标题"},{"parameter":"subtitle","description":"副标题"},{"parameter":"pure","description":"朴素模式不包含content部分且title部分没有额外的上下padding","default":"true"},{"parameter":"checkIcon","description":"切换icon （废弃）","default":"true"},{"parameter":"size","optional":"-/small","description":"尺寸"}],"events":[{"event":"back","description":"点击左侧区域触发"}],"slots":[{"name":"title","description":"标题内容"},{"name":"content","description":"内容"},{"name":"title-right","description":"标题右侧"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/page-header"}');

/***/ }),
/* 17 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-pagination","attributes":[{"parameter":"small","description":"是否使用小型分页样式","optional":"","default":"false"},{"parameter":"background","description":"是否为分页按钮添加背景色","optional":"","default":"false"},{"parameter":"page-size","description":"每页显示条目个数，支持 .sync 修饰符","optional":"","default":""},{"parameter":"total","description":"是否为分页按钮添加背景色","optional":"","default":"false"},{"parameter":"page-count","description":"总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性","optional":"","default":""},{"parameter":"pager-count","description":"页码按钮的数量，当总页数超过该值时会折叠","optional":"大于等于 5 且小于等于 21 的奇数","default":"7"},{"parameter":"current-page","description":"组件布局，子组件名用逗号分隔","optional":"sizes, prev, pager, next, jumper, ->, total, slot","default":"prev, pager, next, jumper, ->, total"},{"parameter":"page-sizes","description":"每页显示个数选择器的选项设置","optional":"","default":"[10, 20, 50, 100]"},{"parameter":"popper-class","description":"每页显示个数选择器的下拉框类名","optional":"","default":""},{"parameter":"prev-text","description":"替代图标显示的上一页文字","optional":"","default":""},{"parameter":"next-text","description":"替代图标显示的下一页文字","optional":"","default":""},{"parameter":"disabled","description":"是否禁用","optional":"","default":"false"},{"parameter":"show-on-single-page","description":"只有一页时是否显示","optional":"","default":""}],"events":[{"event":"size-change","description":"pageSize 改变时会触发","callback":"每页条数"},{"event":"current-change","description":"currentPage 改变时会触发","callback":"当前页"},{"event":"prev-click","description":"用户点击上一页按钮改变当前页后触发","callback":"当前页"},{"event":"next-click","description":"用户点击下一页按钮改变当前页后触发","callback":"当前页"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/pagination"}');

/***/ }),
/* 18 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-submenu","attributes":[{"parameter":"index","description":"唯一标志"},{"parameter":"popper-class","description":"弹出菜单的自定义类名"},{"parameter":"show-timeout","description":"展开 sub-menu 的延时","default":"300"},{"parameter":"hide-timeout","description":"收起 sub-menu 的延时","default":"300"},{"parameter":"disabled","description":"是否禁用","default":"false"},{"parameter":"popper-append-to-body","description":"是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性","default":"一级子菜单：true / 非一级子菜单：false"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/menu"}');

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createDocumentation = void 0;
const vscode = __webpack_require__(2);
const createDocumentation = (documentation) => {
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
exports.createDocumentation = createDocumentation;


/***/ }),
/* 20 */
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"component":"yxt-svg","attributes":[{"parameter":"width","description":"图标宽度","optional":"medium / small / large"},{"parameter":"height","description":"图标高度","optional":"primary / second / text"},{"parameter":"icon-class","description":"图标类型"},{"parameter":"remote-url","description":"远程地址"},{"parameter":"query","description":"url的qury参数, 传入一个json对象"}],"link":"http://xuanxing-pc-ui.yunxuetang.com.cn/#/zh-CN/component/svg-icon"}');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const completion_1 = __webpack_require__(1);
const hover_1 = __webpack_require__(3);
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    (0, hover_1.default)(context);
    context.subscriptions.push(completion_1.default);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map