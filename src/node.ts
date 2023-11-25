import { ITextEncoder } from './types';

const textEncoder: ITextEncoder = {
    encode: (input: string) => new Uint8Array(Buffer.from(input, 'utf8')),
    decode: (input: ArrayBuffer) => Buffer.from(input).toString('utf8'),
};

export default textEncoder;
