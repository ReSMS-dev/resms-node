# ReSMS SDK for Node.js

Node.js SDK for ReSMS, a simple and powerful SMS API.

## Installation

```bash
npm install @resms/sdk
# or
bun add @resms/sdk
# or
yarn add @resms/sdk
```

## Setup

You need to get an API key on [ReSMS Dashboard](https://resms.dev/dashboard).

## Usage

Send you can send your SMS:

```ts
const resms = new ReSMS("re_123");
const response = await resms.sms.send({
    to: "+33123456789",
    message: "Welcome to ReSMS!",
    senderId: "ReSMS",
});

console.log(response);
```

## Documentation

The full documentation is available at [https://docs.resms.dev](https://docs.resms.dev/).

## License

This project is licensed under the MIT License.

## Note

This is a simple SDK for ReSMS. More features and improvements will be added in the future. If you have any suggestions or issues, please open an issue on GitHub.
