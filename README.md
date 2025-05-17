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
Then import the package and create a new instance of the `ReSMS` class with your API key.

```ts
import { ReSMS } from "@resms/sdk";
const resms = new ReSMS("re_12345");
```

## Usage
Send you can send your SMS:
```ts
await resms.send({
  to: "+33612345678",
  message: "Your sign-in code is 123456",
});
```

## Documentation
The full documentation is available at [resms.dev/docs](https://resms.dev/docs).

## License
This project is licensed under the MIT License.

## Note
This is a simple SDK for ReSMS. More features and improvements will be added in the future. If you have any suggestions or issues, please open an issue on GitHub.