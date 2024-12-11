import MessageLinks from "../MessageLinks";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <MessageLinks />
      </body>
    </html>
  );
}