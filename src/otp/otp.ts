import type { ReSMS } from "../resms";
import type { SendOtpOptions, SendOtpResponse } from "./model/send-otp";
import type { VerifyOtpOptions, VerifyOtpResponse } from "./model/verify-otp";

export class Otp {
  constructor(private readonly resms: ReSMS) {}

  async send(sendOtpOptions: SendOtpOptions): Promise<SendOtpResponse> {
    return (await this.resms.post("/otp", sendOtpOptions)) as SendOtpResponse;
  }

  async verify(verifyOtpOptions: VerifyOtpOptions): Promise<VerifyOtpResponse> {
    return (await this.resms.post(
      "/otp/verify",
      verifyOtpOptions,
    )) as VerifyOtpResponse;
  }
}
