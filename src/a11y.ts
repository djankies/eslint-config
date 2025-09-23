/* eslint-disable canonical/filename-match-regex */
import { type FlatConfigArray } from './types.js';

export const a11y: FlatConfigArray = [
  {
    rules: {
      'jsx-a11y/no-noninteractive-element-interactions': [
        2,
        {
          handlers: [
            'onClick',
            'onError',
            'onLoad',
            'onMouseDown',
            'onMouseUp',
            'onKeyPress',
            'onKeyDown',
            'onKeyUp',
          ],
          dialog: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          alert: ['onKeyUp', 'onKeyDown', 'onKeyPress'],
          iframe: ['onError', 'onLoad'],
          body: ['onError', 'onLoad'],
          img: ['onError', 'onLoad'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-to-interactive-role': [
        2,
        {
          ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
          li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
          fieldset: ['radiogroup', 'presentation'],
          td: ['gridcell'],
          table: ['grid'],
        },
      ],
      'jsx-a11y/no-static-element-interactions': [
        2,
        {
          handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
          allowExpressionValues: true,
        },
      ],
      'jsx-a11y/interactive-supports-focus': [
        2,
        {
          tabbable: ['button', 'checkbox', 'link', 'searchbox', 'spinbutton', 'switch', 'textbox'],
        },
      ],
      'jsx-a11y/no-noninteractive-tabindex': [
        2,
        {
          allowExpressionValues: true,
          roles: ['tabpanel'],
          tags: [],
        },
      ],
      'jsx-a11y/no-interactive-element-to-noninteractive-role': [
        2,
        {
          tr: ['none', 'presentation'],
          canvas: ['img'],
        },
      ],
      'jsx-a11y/aria-activedescendant-has-tabindex': 2,
      'jsx-a11y/click-events-have-key-events': 1,
      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/label-has-associated-control': 2,
      'jsx-a11y/mouse-events-have-key-events': 1,
      'jsx-a11y/role-has-required-aria-props': 2,
      'jsx-a11y/aria-unsupported-elements': 2,
      'jsx-a11y/role-supports-aria-props': 2,
      'jsx-a11y/no-distracting-elements': 2,
      'jsx-a11y/tabindex-no-positive': 1,
      'jsx-a11y/heading-has-content': 2,
      'jsx-a11y/anchor-has-content': 2,
      'jsx-a11y/autocomplete-valid': 2,
      'jsx-a11y/no-redundant-roles': 2,
      'jsx-a11y/img-redundant-alt': 2,
      'jsx-a11y/media-has-caption': 1,
      'jsx-a11y/iframe-has-title': 2,
      'jsx-a11y/anchor-is-valid': 2,
      'jsx-a11y/aria-proptypes': 2,
      'jsx-a11y/html-has-lang': 2,
      'jsx-a11y/no-access-key': 1,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/aria-props': 2,
      'jsx-a11y/aria-role': 2,
      'jsx-a11y/alt-text': 2,
      'jsx-a11y/scope': 2,
      'jsx-a11y/lang': 0,
    },
    files: ['**/*.{jsx,tsx}'],
  },
];

export default a11y;
