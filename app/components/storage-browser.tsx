import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from "@aws-amplify/ui-react-storage/browser";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react-storage/styles.css";

import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});
