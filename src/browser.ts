import { Encode, Decode } from './types';

export const encode: Encode = (input: string): Uint8Array => new TextEncoder().encode(input);
export const decode: Decode = (input: ArrayBuffer): string => new TextDecoder().decode(input);

