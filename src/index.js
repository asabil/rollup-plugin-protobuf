import ProtoBuf from 'protobufjs';
import protobufToJson from 'protobufjs/cli/pbjs/targets/json';
import { createFilter } from 'rollup-pluginutils';


const ext = /\.proto$/;

export default function protobuf(options = {}) {
    const filter = createFilter(options.include, options.exclude);

    return {
        name: 'protobuf',

        transform(code, id) {
            if (!ext.test(id)) return null;
            if (!filter(id)) return null;

            const parser = new ProtoBuf.DotProto.Parser(code);
            const data = parser.parse();

            const builder = ProtoBuf.newBuilder(options);
            builder["import"](data);

            const json = protobufToJson(builder, options);

            return {
                code: `import ProtoBuf from 'protobufjs/dist/protobuf-light';\nexport default ProtoBuf.loadJson(${json}).build();`,
                map: { mappings: '' }
            };
        }
    };
}