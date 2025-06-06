import type { CreateOtpResponse } from "./otp/model/create-otp";
import type { DeleteOtpResponse } from "./otp/model/delete-otp";
import type { VerifyOtpResponse } from "./otp/model/verify-otp";
import type { SendSmsResponse } from "./sms/model/send-sms";

export type ReSMSResponse =
  | SendSmsResponse
  | CreateOtpResponse
  | DeleteOtpResponse
  | VerifyOtpResponse;

export type ErrorResponse = {
  status: string;
  error: ErrorContent;
};

export type ErrorContent = {
  name: string;
  message: string;
};
