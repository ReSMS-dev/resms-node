import type { SendOtpResponse } from "./otp/model/send-otp";
import type { VerifyOtpResponse } from "./otp/model/verify-otp";
import type { SendSmsResponse } from "./sms/model/send-sms";

export type ReSMSResponse =
  | SendSmsResponse
  | SendOtpResponse
  | VerifyOtpResponse;

export type ErrorResponse = {
  status: string;
  error: ErrorContent;
};

export type ErrorContent = {
  name: string;
  message: string;
};
