"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _handlebars = _interopRequireDefault(require("handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HandlebarsMailTemplateProvider {
  async parse({
    file,
    variables
  }) {
    const templateFileContent = await _fs.default.promises.readFile(file, {
      encoding: 'utf-8'
    });

    const parsetemplate = _handlebars.default.compile(templateFileContent);

    return parsetemplate(variables);
  }

}

var _default = HandlebarsMailTemplateProvider;
exports.default = _default;