import type { Metadata } from 'next';
import '@/styles/core.css';
import { asap, lato, poppins } from '@/assets/fonts';
import { cn } from '@/utils/cnMerge';
import ReduxProvider from '@/lib/ReduxProvider';

export const metadata: Metadata = {
  title: 'Neptune 3 Learning',
  description: 'Neptune 3 Learning - A platform for learning',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'font-asap antialiased',
          asap.variable,
          lato.variable,
          poppins.variable
        )}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
