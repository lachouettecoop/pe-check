import "~/styles/globals.css";

import MantineProvider from "~/utils/providers/Mantine";
import SessionProvider from "~/utils/providers/NextAuth";

export default async function Layout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider>
          <SessionProvider>{children}</SessionProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
