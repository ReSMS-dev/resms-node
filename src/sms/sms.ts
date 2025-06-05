import type { ReSMS } from "../resms";
import type { SendSmsOptions, SendSmsResponse } from "./model/send-sms";

export class Sms {
  constructor(private readonly resms: ReSMS) {}

  async send(sendSmsOptions: SendSmsOptions): Promise<SendSmsResponse> {
    return await this.resms.post<SendSmsResponse>("/sms/send", sendSmsOptions);
  }
}
