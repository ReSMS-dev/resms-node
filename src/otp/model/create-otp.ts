export type CreateOtpOptions = {
  to: string;
  message: `${string}{CODE}${string}`;
  senderId?: string;
  codeType?: OtpCode;
  codeLength?: number;
  validityMinutes?: number;
};

export type CreateOtpResponse = {
  data: {
    phoneNumber: string;
    expiresAt: string;
  };
};

export enum OtpCode {
  NUMERIC = 0,
  ALPHA = 1,
}
