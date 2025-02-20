"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { StorageBrowser } from "./components/storage-browser";

export default function App() {
  return (
    <main>
      <h1>My Storage Browser</h1>
      <StorageBrowser />
    </main>
  );
}
