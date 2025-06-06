export type ErrorResponse = {
  status: string;
  error: ErrorContent;
};

export type ErrorContent = {
  name: string;
  message: string;
};
