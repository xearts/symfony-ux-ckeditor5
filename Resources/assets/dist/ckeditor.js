"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classiceditor = _interopRequireDefault(require("@ckeditor/ckeditor5-editor-classic/src/classiceditor.js"));

var _autoformat = _interopRequireDefault(require("@ckeditor/ckeditor5-autoformat/src/autoformat.js"));

var _blockquote = _interopRequireDefault(require("@ckeditor/ckeditor5-block-quote/src/blockquote.js"));

var _bold = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/bold.js"));

var _cloudservices = _interopRequireDefault(require("@ckeditor/ckeditor5-cloud-services/src/cloudservices.js"));

var _essentials = _interopRequireDefault(require("@ckeditor/ckeditor5-essentials/src/essentials.js"));

var _heading = _interopRequireDefault(require("@ckeditor/ckeditor5-heading/src/heading.js"));

var _image = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/image.js"));

var _imagecaption = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/imagecaption.js"));

var _imagestyle = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/imagestyle.js"));

var _imageresize = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/imageresize.js"));

var _imagetoolbar = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/imagetoolbar.js"));

var _imageupload = _interopRequireDefault(require("@ckeditor/ckeditor5-image/src/imageupload.js"));

var _indent = _interopRequireDefault(require("@ckeditor/ckeditor5-indent/src/indent.js"));

var _italic = _interopRequireDefault(require("@ckeditor/ckeditor5-basic-styles/src/italic.js"));

var _link = _interopRequireDefault(require("@ckeditor/ckeditor5-link/src/link.js"));

var _linkimage = _interopRequireDefault(require("@ckeditor/ckeditor5-link/src/linkimage.js"));

var _list = _interopRequireDefault(require("@ckeditor/ckeditor5-list/src/list.js"));

var _mediaembed = _interopRequireDefault(require("@ckeditor/ckeditor5-media-embed/src/mediaembed.js"));

var _paragraph = _interopRequireDefault(require("@ckeditor/ckeditor5-paragraph/src/paragraph.js"));

var _pastefromoffice = _interopRequireDefault(require("@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice"));

var _simpleuploadadapter = _interopRequireDefault(require("@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter.js"));

var _table = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/table.js"));

var _tabletoolbar = _interopRequireDefault(require("@ckeditor/ckeditor5-table/src/tabletoolbar.js"));

var _texttransformation = _interopRequireDefault(require("@ckeditor/ckeditor5-typing/src/texttransformation.js"));

var _generalhtmlsupport = _interopRequireDefault(require("@ckeditor/ckeditor5-html-support/src/generalhtmlsupport"));

var _sourceediting = _interopRequireDefault(require("@ckeditor/ckeditor5-source-editing/src/sourceediting"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Editor = /*#__PURE__*/function (_ClassicEditor) {
  _inherits(Editor, _ClassicEditor);

  var _super = _createSuper(Editor);

  function Editor() {
    _classCallCheck(this, Editor);

    return _super.apply(this, arguments);
  }

  return Editor;
}(_classiceditor["default"]); // Plugins to include in the build.


Editor.builtinPlugins = [_essentials["default"], // UploadAdapter,
_autoformat["default"], _bold["default"], _italic["default"], _blockquote["default"], _cloudservices["default"], _heading["default"], _image["default"], _imagecaption["default"], _imagestyle["default"], _imagetoolbar["default"], _imageresize["default"], _imageupload["default"], _indent["default"], _link["default"], _linkimage["default"], _list["default"], _mediaembed["default"], _paragraph["default"], _pastefromoffice["default"], _table["default"], _tabletoolbar["default"], _texttransformation["default"], _simpleuploadadapter["default"], _generalhtmlsupport["default"], _sourceediting["default"]];
Editor.defaultConfig = {
  toolbar: {
    items: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'uploadImage', 'blockQuote', 'insertTable', 'mediaEmbed', 'undo', 'redo', '|', 'sourceEditing']
  },
  image: {
    resizeOptions: [{
      name: 'resizeImage:original',
      value: null,
      label: 'Original'
    }, {
      name: 'resizeImage:100',
      value: '100',
      label: '100%'
    }, {
      name: 'resizeImage:60',
      value: '60',
      label: '60%'
    }, {
      name: 'resizeImage:50',
      value: '50',
      label: '50%'
    }, {
      name: 'resizeImage:40',
      value: '40',
      label: '40%'
    }, {
      name: 'resizeImage:30',
      value: '30',
      label: '30%'
    }, {
      name: 'resizeImage:20',
      value: '20',
      label: '20%'
    }],
    toolbar: ['linkImage', '|', 'imageStyle:inline', // A dropdown containing `alignLeft` and `alignRight` options.
    'imageStyle:wrapText', // A dropdown containing `alignBlockLeft`, `block` (default) and  `alignBlockRight` options.
    'imageStyle:breakText', '|', 'resizeImage', '|', 'toggleImageCaption', 'imageTextAlternative']
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  htmlSupport: {
    allow: [{
      name: /.*/,
      attributes: true,
      classes: true,
      styles: true
    }]
  }
};
var _default = Editor;
exports["default"] = _default;