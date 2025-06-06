export type VerifyOtpOptions = {
  to: string;
  code: string;
};

export type VerifyOtpResponse = {
  data: {
    otpId: string;
    phoneNumber: string;
    verifiedAt: string;
  };
};
