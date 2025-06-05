export class ReSMSError extends Error {
  public constructor(name: string, message: string) {
    super();
    this.name = name;
    this.message = message;
  }

  public override toString() {
    return JSON.stringify({
      message: this.message,
      name: this.name,
    });
  }
}
