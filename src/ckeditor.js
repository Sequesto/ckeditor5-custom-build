/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import ExportWord from "@ckeditor/ckeditor5-export-word/src/exportword.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import EditorWatchdog from "@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js";

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoImage,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  CloudServices,
  Essentials,
  ExportWord,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  Heading,
  HorizontalLine,
  Image,
  ImageCaption,
  ImageInsert,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  ListStyle,
  MediaEmbed,
  PageBreak,
  Paragraph,
  PasteFromOffice,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "|",
      "alignment",
      "|",
      "numberedList",
      "bulletedList",
      "|",
      "outdent",
      "indent",
      "|",
      "todoList",
      "link",
      "blockQuote",
      "imageUpload",
      "insertTable",
      "horizontalLine",
      "pageBreak",
      "|",
      "undo",
      "redo",
      "|",
      "exportWord",
    ],
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableCellProperties",
      "tableProperties",
    ],
  },
  fontColor: {
    colors: [
      { color: "#4D4D4D", label: "Dim grey" },
      { color: "#999", label: "Grey" },
      { color: "#E6E6E6", label: "Light grey" },
      { color: "#FFFFFF", label: "White" },
      { color: "#B9834D", label: "Brown" },
      { color: "#E64C4C", label: "Red" },
      { color: "#E6994C", label: "Orange" },
      { color: "#E6E64C", label: "Yellow" },
      { color: "#99E64C", label: "Light green" },
      { color: "#4CE64C", label: "Green" },
      { color: "#4CE699", label: "Aquamarine" },
      { color: "#4CE6E6", label: "Turquoise" },
      { color: "#4C99E6", label: "Light blue" },
      { color: "#4C4CE6", label: "Blue" },
      { color: "#994CE6", label: "Purple" },
      { color: "#E64CCF", label: "Pink" },
    ],
    columns: 4,
  },
  fontBackgroundColor: {
    colors: [
      { color: "#4D4D4D", label: "Dim grey" },
      { color: "#999", label: "Grey" },
      { color: "#E6E6E6", label: "Light grey" },
      { color: "#FFFFFF", label: "White" },
      { color: "#B9834D", label: "Brown" },
      { color: "#E64C4C", label: "Red" },
      { color: "#E6994C", label: "Orange" },
      { color: "#E6E64C", label: "Yellow" },
      { color: "#99E64C", label: "Light green" },
      { color: "#4CE64C", label: "Green" },
      { color: "#4CE699", label: "Aquamarine" },
      { color: "#4CE6E6", label: "Turquoise" },
      { color: "#4C99E6", label: "Light blue" },
      { color: "#4C4CE6", label: "Blue" },
      { color: "#994CE6", label: "Purple" },
      { color: "#E64CCF", label: "Pink" },
    ],
    columns: 4,
  },
  placeholder:
    "Construct your document here. You can drag and drop questions and answers from the right hand side in your document.",
  exportWord: {
    tokenUrl:
      "https://86925.cke-cs.com/token/dev/5df6445d9e998771e2eb691d2ea6900fe60fe5ee1cc9c93c228802dbb54f",
  },
};

export default { Editor, EditorWatchdog };
