import "./globals.css";
import MuiThemeProvider from "../components/ui/MuiThemeProvider";
import SCPSFLoader from "../components/ui/SCPSFLoader";
import PageMinimap from "../components/ui/PageMinimap";
import "@/styles/auth.css";

export const metadata = {
  title: "SECOND CHANCE PRISONERS' SUPPORT FOUNDATION (SCPSF)",
  description: "Restoring Justice. Restoring Hope.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>
          <SCPSFLoader>
            {/* Main container with 60px left/right spacing */}
            <div className="container-tight">
              {children}
            </div>
            <PageMinimap />
          </SCPSFLoader>
        </MuiThemeProvider>
      </body>
    </html>
  );
}