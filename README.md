# react-native-atomic-styles

Atomic styles for React Native projects, inspired by [Bootstrap](https://getbootstrap.com/)

# Installation

```sh
yarn add react-native-atomic-styles
```

# Usage

```tsx
import React from 'react';
import atomicStyles from 'react-native-atomic-styles';

function ExampleComponent() {
  return (
    <>
      <View style={[atomicStyles.flex]}></View>
    </>
  );
}

export default ExampleComponent;
```

# Atomic styles

- Background color
- Border
- Button
- Flexbox
- Spacing for margin, padding
- Text
- Typography
- Viewbox

# Atomic colors

Generate enum `Colors` from scss `colors` map

```
Usage: atomic-colors [options] <input> [output]

Options:
  -V, --version            output the version number
  -t, --timeout <timeout>  Timeout (default: 3000)
  -h, --help               display help for command
```
