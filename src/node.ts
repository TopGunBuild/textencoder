import { Encode, Decode } from './types';

export const encode: Encode = (input: string) => new Uint8Array(Buffer.from(input, 'utf8'));
export const decode: Decode = (input: ArrayBuffer) => Buffer.from(input).toString('utf8');
