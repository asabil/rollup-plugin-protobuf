# rollup-plugin-protobuf

Convert .proto files into JavaScript modules using [protobuf.js](https://github.com/dcodeIO/protobuf.js)

## Installation

```bash
npm install --save-dev rollup-plugin-protobuf
```


## Usage

```js
import { rollup } from 'rollup';
import protobuf from 'rollup-plugin-protobuf';

rollup({
  entry: 'main.js',
  plugins: [ protobuf({ convertFieldsToCamelCase: true }) ]
}).then(...)
```

Inside your code, you can do this sort of thing:

```js
// main.js
import messages from './messages.proto';

messages.Message.decode(buffer);
```

## License

MIT
