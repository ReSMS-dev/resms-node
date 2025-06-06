export type SendSmsOptions = {
  to: string;
  message: string;
  senderId: string | undefined;
};

export type SendSmsResponse = {
  data: {
    messageId: string;
  };
};
