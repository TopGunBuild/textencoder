import {encode as nodeEncode, decode as nodeDecode} from '../src/node';
import {encode as browserEncode, decode as browserDecode } from '../src/browser';

describe('TextEncoder', () => {
    it('decode', async () => {
        const node = nodeDecode(
            new Uint8Array([72, 101, 108, 108, 111]),
        );
        const browser = browserDecode(
            new Uint8Array([72, 101, 108, 108, 111]),
        );
        expect(node).toEqual('Hello');
        expect(browser).toEqual('Hello');
    });

    it('encode', async () => {
        const node = nodeEncode('Hello');
        const browser = browserEncode('Hello');
        expect(node).toEqual(new Uint8Array([72, 101, 108, 108, 111]));
        expect(browser).toEqual(new Uint8Array([72, 101, 108, 108, 111]));
    });
});
