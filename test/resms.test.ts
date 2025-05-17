import { describe, it, expect, vi } from 'vitest';
import { ReSMS } from '../src';

describe('ReSMS', () => {
    it('throws without api key', () => {
        expect(() => new ReSMS('')).toThrow();
    });

    it('calls correct endpoint', async () => {
        globalThis.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => ({ id: '123', status: 'queued' })
        });

        const client = new ReSMS('key');
        await client.send({ to: '+33612345678', message: 'hi' });

        expect(fetch).toHaveBeenCalledWith(
            'https://api.resms.dev/sms/send',
            expect.objectContaining({ method: 'POST' })
        );
    });
});