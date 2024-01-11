import { dir } from 'i18next';
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeWrapper from '@/context/ThemeWrapper';
import { OsProvider } from '@/context/OsContext';

const languages = ['en', 'de'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "DM's portfolio",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeProvider>
          <ThemeWrapper>
            <OsProvider>{children}</OsProvider>
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
