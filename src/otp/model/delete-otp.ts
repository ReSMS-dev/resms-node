export type DeleteOtpOptions = {
  otpId: string;
};

export type DeleteOtpResponse = {
  data: {
    otpId: string;
    phoneNumber: string;
    revokedAt: string;
  };
};
