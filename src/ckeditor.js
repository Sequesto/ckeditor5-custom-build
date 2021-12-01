/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
// import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
// import AutoImage from "@ckeditor/ckeditor5-image/src/autoimage.js";
// import AutoLink from "@ckeditor/ckeditor5-link/src/autolink.js";
// import Autosave from "@ckeditor/ckeditor5-autosave/src/autosave.js";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
// import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
// import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
// import CodeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
// import FindAndReplace from "@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
// import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
// import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
// import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
// import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
// import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle.js";
// import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
// import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
// import Mention from "@ckeditor/ckeditor5-mention/src/mention.js";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
// import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
// import SpecialCharacters from "@ckeditor/ckeditor5-special-characters/src/specialcharacters.js";
// import SpecialCharactersArrows from "@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js";
// import SpecialCharactersCurrency from "@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js";
// import SpecialCharactersEssentials from "@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js";
// import SpecialCharactersLatin from "@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js";
// import SpecialCharactersMathematical from "@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js";
// import SpecialCharactersText from "@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js";
import StandardEditingMode from "@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
// import TableCaption from "@ckeditor/ckeditor5-table/src/tablecaption.js";
// import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
// import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
// import TextPartLanguage from "@ckeditor/ckeditor5-language/src/textpartlanguage.js";
// import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
// import Title from "@ckeditor/ckeditor5-heading/src/title.js";
// import TodoList from "@ckeditor/ckeditor5-list/src/todolist";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
// import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount.js";
import EditorWatchdog from "@ckeditor/ckeditor5-watchdog/src/editorwatchdog.js";

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  // Alignment,
  // Autoformat,
  // AutoImage,
  // AutoLink,
  // Autosave,
  // Base64UploadAdapter,
  // BlockQuote,
  // Bold,
  // CloudServices,
  // Code,
  // CodeBlock,
  // Essentials,
  // FindAndReplace,
  // FontBackgroundColor,
  // FontColor,
  // FontFamily,
  // FontSize,
  // Heading,
  // Highlight,
  // HorizontalLine,
  // Image,
  // ImageCaption,
  // ImageInsert,
  // ImageResize,
  // ImageStyle,
  // ImageToolbar,
  // ImageUpload,
  // Indent,
  // IndentBlock,
  // Italic,
  // Link,
  // LinkImage,
  // List,
  // ListStyle,
  // Markdown,
  // MediaEmbed,
  // Mention,
  // PageBreak,
  // Paragraph,
  // PasteFromOffice,
  // SpecialCharacters,
  // SpecialCharactersArrows,
  // SpecialCharactersCurrency,
  // SpecialCharactersEssentials,
  // SpecialCharactersLatin,
  // SpecialCharactersMathematical,
  // SpecialCharactersText,
  // StandardEditingMode,
  // Strikethrough,
  // Subscript,
  // Superscript,
  // Table,
  // TableCaption,
  // TableCellProperties,
  // TableProperties,
  // TableToolbar,
  // TextPartLanguage,
  // TextTransformation,
  // Title,
  // TodoList,
  // Underline,
  // WordCount,

  Alignment,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  Essentials,
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
  Italic,
  Link,
  List,
  PageBreak,
  Paragraph,
  StandardEditingMode,
  Strikethrough,
  Subscript,
  Superscript,
  Table,
  TableToolbar,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontSize",
      "|",
      "alignment",
      "|",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "insertTable",
      "link",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "undo",
      "redo",
      "|",
      "uploadImage",
    ],
    // items: [
    // 	'heading',
    // 	'|',
    // 	'fontFamily',
    // 	'fontSize',
    // 	'|',
    // 	'fontColor',
    // 	'fontBackgroundColor',
    // 	'|',
    // 	'bold',
    // 	'italic',
    // 	'underline',
    // 	'strikethrough',
    // 	'|',
    // 	'alignment',
    // 	'|',
    // 	'numberedList',
    // 	'bulletedList',
    // 	'|',
    // 	'outdent',
    // 	'indent',
    // 	'|',
    // 	'todoList',
    // 	'link',
    // 	'blockQuote',
    // 	'imageUpload',
    // 	'imageInsert',
    // 	'insertTable',
    // 	'code',
    // 	'codeBlock',
    // 	'|',
    // 	'undo',
    // 	'redo',
    // 	'|',
    // 	'highlight',
    // 	'findAndReplace',
    // 	'pageBreak'
    // ]
  },
  language: "en",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    // contentToolbar: [
    //   "tableColumn",
    //   "tableRow",
    //   "mergeTableCells",
    //   "tableCellProperties",
    //   "tableProperties",
    // ],
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
};

export default { Editor, EditorWatchdog };
