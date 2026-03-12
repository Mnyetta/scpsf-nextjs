import "./globals.css";
import MuiThemeProvider from "../components/ui/MuiThemeProvider";
import SCPSFLoader from "../components/ui/SCPSFLoader";
import PageMinimap from "../components/ui/PageMinimap";
import "@/styles/auth.css";

/* SEO Metadata for Google Search */
export const metadata = {
  title:
    "Second Chance Prisoners Support Foundation (SCPSF) | Legal Aid & Reintegration",
  description:
    "Second Chance Prisoners Support Foundation (SCPSF) is a nonprofit organization providing legal aid, reintegration programs, and support for prisoners without automatic government legal assistance in Tanzania.",
  keywords: [
    "Second Chance Prisoners Support Foundation",
    "SCPSF",
    "SCPSF Tanzania",
    "prisoner legal aid Tanzania",
    "prisoner reintegration NGO",
    "legal support for prisoners",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <MuiThemeProvider>
          <SCPSFLoader>
            {/* Main container with spacing */}
            <div className="container-tight">{children}</div>
            <PageMinimap />
          </SCPSFLoader>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
