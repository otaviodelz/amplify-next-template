import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyStorageTest",
  access: (allow) => ({
    "/*": [allow.guest.to(["read"])],
  }),
});
