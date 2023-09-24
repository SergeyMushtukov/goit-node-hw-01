import * as contactsService from "./contacts.js";
import { program } from "commander";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();
const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await contactsService.listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await contactsService.getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsService.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);










// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "rsKkOQUi80UsgVPCcLZZW" });
// invokeAction({
//   action: "add",
//   name: "Max Groov",
//   email: "max@Nulla.com",
//   phone: "(704) 206-2678",
// });
// invokeAction({ action: "remove", id: "XMjNSJe6pqmWauoILWaK0" });
