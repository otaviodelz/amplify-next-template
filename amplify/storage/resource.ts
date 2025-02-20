import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyStorageTest",
  access: (allow) => ({
    "public/*": [allow.guest.to(["read"])],
  }),
});
