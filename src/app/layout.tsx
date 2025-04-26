import TopMenu from '@/components/TopMenu/TopMenu';
import CollapseMenu from '@/components/CollapsedMenu/CollapseMenu';
import { ThemeProvider } from 'next-themes';

import './globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen">
            <CollapseMenu />
            <div className="flex-1">
              <TopMenu />
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}