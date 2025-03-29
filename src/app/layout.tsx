// src/app/layout.tsx
import { ThemeProviderComponent } from './components/organisms/ThemeContext';
import Header from './components/organisms/Header';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ThemeProviderComponent>
            <Header title="Gy ACCOUNTS" />
            {children}
          </ThemeProviderComponent>
        </UserProvider>
      </body>
    </html>
  );
}
