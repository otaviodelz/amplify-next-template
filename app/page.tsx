"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { StorageBrowser } from "./components/storage-browser";
import { Authenticator } from "@aws-amplify/ui-react";

export default function App() {
  return (
    <main>
      <h1>Storage Browser</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>user: {user?.username}</h1>
            <button onClick={signOut}>Logout</button>
            <StorageBrowser />
          </div>
        )}
      </Authenticator>
    </main>
  );
}
