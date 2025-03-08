import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import OfflinePage from "@/components/OfflinePage";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hiretrack AI",
  description: "An AI Job Coach",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <Analytics />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Show Offline Status */}
            <OfflinePage />

            {/* header */}
            <Header />

            <main className="min-h-screen">
              {children}
            </main>
            <Toaster richColors />

            <footer className="w-full py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
              <div className="container mx-auto px-6 text-center">
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed transition-colors duration-300">
                  © 2025{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Hiretrack AI.
                  </span>{" "}
                  Empowering Careers with AI. Our intelligent resume builder,
                  cover letter generator, and adaptive interview prep system
                  provide industry-specific insights to help you land your dream
                  job.
                  <span className="block mt-2 text-gray-900 dark:text-white font-medium">
                    Your career, optimized with AI.
                  </span>
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
