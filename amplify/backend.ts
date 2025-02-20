import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource.js";
import { data } from "./data/resource.js";

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  storage: {
    aws_region: "us-east-2",
    bucket_name: "lz-storage-browser",
  },
});
