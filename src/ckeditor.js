/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Link from '@ckeditor/ckeditor5-link/src/link';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical';
import Emoji from '@phudak/ckeditor5-emoji/src/emoji';
import EmojiPeople from "@phudak/ckeditor5-emoji/src/emoji-people";
import EmojiNature from "@phudak/ckeditor5-emoji/src/emoji-nature";
import EmojiFood from "@phudak/ckeditor5-emoji/src/emoji-food";
import EmojiActivity from "@phudak/ckeditor5-emoji/src/emoji-activity";
import EmojiObjects from "@phudak/ckeditor5-emoji/src/emoji-objects";
import EmojiPlaces from "@phudak/ckeditor5-emoji/src/emoji-places";
import EmojiSymbols from "@phudak/ckeditor5-emoji/src/emoji-symbols";
import EmojiFlags from "@phudak/ckeditor5-emoji/src/emoji-flags";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold, Italic, Underline, Strikethrough, Subscript, Superscript,
	BlockQuote,
	RemoveFormat,
	Alignment,
	Font,
	CKFinder,
	HorizontalLine,
	FindAndReplace,
	Heading,
	Indent,
	IndentBlock,
	WordCount,
	Link,
	AutoLink,
	List,
	ListStyle,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TableProperties,
	TableCellProperties,
	TableCaption,
	TextTransformation,
	SpecialCharacters,
	SpecialCharactersCurrency,
	SpecialCharactersMathematical,
	SpecialCharactersArrows,
	SpecialCharactersLatin,
	SpecialCharactersText,
	SpecialCharactersEssentials,
	Emoji,
	EmojiPeople,
	EmojiNature,
	EmojiPlaces,
	EmojiFood,
	EmojiActivity,
	EmojiObjects,
	EmojiSymbols,
	EmojiFlags,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'alignment',
			'horizontalLine',
			'bold', 'italic', 'underline', 'strikethrough','subscript', 'superscript',
			'link',
			'bulletedList',
			'numberedList',
			'indentList',
			'outdentList',
			'removeFormat',
			'|',
			'outdent',
			'indent',
			'|',
			'fontSize',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'blockQuote',
			'insertTable',
			'|',
			'findAndReplace',
			'specialCharacters',
			'emoji',
			'|',
			'undo',
			'redo'
		]
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21,
			23
		],
		supportAllValues: true
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableProperties',
			'tableCellProperties',
			'toggleTableCaption'
		],
		tableProperties: {
			// The default styles for tables in the editor.
			// They should be synchronized with the content styles.
			defaultProperties: {
				borderColor: 'gray',
				borderWidth: '2px',
				alignment: 'center',
			},
			// The default styles for table cells in the editor.
			// They should be synchronized with the content styles.
			tableCellProperties: {
				defaultProperties: {
					horizontalAlignment: 'center',
					verticalAlignment: 'center',
					padding: '5px'
				}
			}
		}
	},
	typing: {
		transformations: {
			extra: [
				// Add some custom transformations – e.g. for emojis.
				{ from: ':)', to: '🙂' },
				{ from: ':+1:', to: '👍' },
				{ from: ':tada:', to: '🎉' },

				// You can also define patterns using regular expressions.
				// Note: The pattern must end with `$` and all its fragments must be wrapped
				// with capturing groups.
				// The following rule replaces ` "foo"` with ` «foo»`.
				{
					from: /(^|\s)(")([^"]*)(")$/,
					to: [ null, '«', null, '»' ]
				},

				// Finally, you can define `to` as a callback.
				// This (naive) rule will auto-capitalize the first word after a period, question mark, or an exclamation mark.
				{
					from: /([.?!] )([a-z])$/,
					to: matches => [ null, matches[ 1 ].toUpperCase() ]
				}
			],
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fa'
};
