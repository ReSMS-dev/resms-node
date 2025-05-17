export interface SendParams {
    to: string;
    message: string;
}

export interface SendResult {
    id: string;
    status: 'queued' | 'sent' | 'failed';
}

export class ReSMS {
    #apiKey: string;
    #base = 'https://api.resms.dev';

    constructor(apiKey: string) {
        if (!apiKey) throw new Error('ReSMS: api key is required');
        this.#apiKey = apiKey;
    }

    async send(params: SendParams): Promise<SendResult> {
        const res = await fetch(`${this.#base}/sms/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.#apiKey,
            },
            body: JSON.stringify(params),
        });

        if (!res.ok) {
            const body = await res.text();
            throw new Error(`ReSMS: ${res.status} ${res.statusText}\n${body}`);
        }

        return res.json();
    }
}