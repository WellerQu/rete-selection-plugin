# rete-selection-plugin

select more nodes at once

## Usage

### Install

```shell
npm i rete-selection-plugin --save
```

### Basic

```typescript
import SelectionPlugin from 'rete-selection-plugin'
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

import SelectionPlugin from 'rete-selection-plugin'
editor.use(SelectionPlugin, {
  enabled: true,
  selectionMode: {
    className: 'text-weight-light custom-selection-pos'
  },
  mode: ['单选模式 (按下 ctrl 进入[多选模式])', '多选模式 (释放 ctrl 进入[单选模式])']
})
```
