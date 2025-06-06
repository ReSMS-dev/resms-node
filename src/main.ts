import { ReSMS } from "./resms";

async function main() {
  const resms = new ReSMS("re_0860e43420c8a97f91ec6fdbb4a8a458");
  try {
    const response = await resms.sms.send({
      to: "+33678171388",
      message: "Sdk nouveauté",
      senderId: "BREIZH",
    });

    console.log(response);
  } catch (error) {
    console.log("caca");
    console.log(error);
  }
}

main();
