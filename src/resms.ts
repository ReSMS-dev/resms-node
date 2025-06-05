import { ReSMSError } from "./error";
import type { ErrorResponse } from "./response";
import { Sms } from "./sms/sms";

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

  async fetchRequest<T>(path: string, options = {}): Promise<T> {
    const response = await fetch(`${baseUrl}${path}`, options);
    return await this.handleResponse<T>(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorResponse = (await response.json()) as ErrorResponse;
      throw new ReSMSError(
        errorResponse.error.name,
        errorResponse.error.message,
      );
    }

    return (await response.json()) as Promise<T>;
  }

  async get<T>(path: string) {
    const requestOptions = {
      method: "GET",
      headers: this.headers,
    };

    return this.fetchRequest<T>(path, requestOptions);
  }

  async post<T>(path: string, payload?: unknown) {
    const requestOptions = {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload),
    };

    return this.fetchRequest<T>(path, requestOptions);
  }

  async delete<T>(path: string, payload?: unknown) {
    const requestOptions = {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify(payload),
    };

    return this.fetchRequest<T>(path, requestOptions);
  }
}
