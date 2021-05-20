# rete-drag-selection-plugin

This is a fork of WellerQu/rete-selection-plugin

This plugin allows to select more nodes at once by pressing CTRL and dragging an area on the ReteJS editor.


## Usage

### Install

```shell
npm i rete-drag-selection-plugin --save
```

### Basic

```typescript
import SelectionPlugin from 'rete-drag-selection-plugin'
editor.use(SelectionPlugin, { enabled: true })
```

### Advanced

```typescript
export interface Cfg {
  /**
   * selection area's className for style
   */
  selectionArea?: {
    className?: string;
  };
  /**
   * selection mode's className for style
   */
  selectionMode?: {
    className?: string;
  };
  /**
   * enabled or disable selection
   * default false
   */
  enabled?: boolean;
  /**
   * mode text
   */
  mode?: [string, string];
}

import SelectionPlugin from 'rete-drag-selection-plugin'
editor.use(SelectionPlugin, {
  enabled: true,
  selectionMode: {
    className: 'text-weight-light custom-selection-pos'
  },
})
```
