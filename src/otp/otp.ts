import type { ReSMS } from "../resms";
import type { CreateOtpOptions, CreateOtpResponse } from "./model/create-otp";
import type { VerifyOtpOptions, VerifyOtpResponse } from "./model/verify-otp";

export class Otp {
  constructor(private readonly resms: ReSMS) {}

  async create(createOtpOptions: CreateOtpOptions): Promise<CreateOtpResponse> {
    return (await this.resms.post(
      "/otp",
      createOtpOptions,
    )) as CreateOtpResponse;
  }

  async verify(verifyOtpOptions: VerifyOtpOptions): Promise<VerifyOtpResponse> {
    return (await this.resms.post(
      "/otp/verify",
      verifyOtpOptions,
    )) as VerifyOtpResponse;
  }
}
