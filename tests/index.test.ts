import nodeTextEncoder from '../src/node';
import browserTextEncoder from '../src/browser';

describe('TextEncoder', () => {
    it('decode', async () => {
        const node = nodeTextEncoder.decode(
            new Uint8Array([72, 101, 108, 108, 111]),
        );
        const browser = browserTextEncoder.decode(
            new Uint8Array([72, 101, 108, 108, 111]),
        );
        expect(node).toEqual('Hello');
        expect(browser).toEqual('Hello');
    });

    it('encode', async () => {
        const node = nodeTextEncoder.encode('Hello');
        const browser = nodeTextEncoder.encode('Hello');
        expect(node).toEqual(new Uint8Array([72, 101, 108, 108, 111]));
        expect(browser).toEqual(new Uint8Array([72, 101, 108, 108, 111]));
    });
});
