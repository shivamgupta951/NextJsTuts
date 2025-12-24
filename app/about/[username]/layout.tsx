import React from 'react'
export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        About Section!
        {children}
      </body>
    </html>
  );
}