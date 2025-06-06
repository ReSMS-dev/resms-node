import { ReSMSError } from "./error";
import type { ErrorResponse } from "./response";
import { Sms } from "./sms/sms";
import type { ReSMSResponse } from "./type";

const baseUrl = "https://api.resms.dev";

export class ReSMS {
  private readonly headers: Headers;

  readonly sms = new Sms(this);

  constructor(readonly key: string) {
    this.headers = new Headers({
      "X-Api-Key": this.key,
      "Content-Type": "application/json",
    });
  }

  async fetchRequest(path: string, options = {}) {
    const response = await fetch(`${baseUrl}${path}`, options);
    return await this.handleResponse(response);
  }

  private async handleResponse(response: Response): Promise<ReSMSResponse> {
    if (!response.ok) {
      const errorResponse = (await response.json()) as ErrorResponse;
      throw new ReSMSError(
        errorResponse.error.name,
        errorResponse.error.message,
      );
    }

    return await response.json();
  }

  async get(path: string) {
    const requestOptions = {
      method: "GET",
      headers: this.headers,
    };

    return this.fetchRequest(path, requestOptions);
  }

  async post(path: string, payload?: unknown) {
    const requestOptions = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload),
    };

    return this.fetchRequest(path, requestOptions);
  }

  async delete(path: string, payload?: unknown) {
    const requestOptions = {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify(payload),
    };

    return this.fetchRequest(path, requestOptions);
  }
}
