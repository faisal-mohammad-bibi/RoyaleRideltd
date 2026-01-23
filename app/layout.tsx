import "./globals.css";

export const metadata = {
  title: "Royal Rides | Executive Chauffeur Service in the UK",
  description:
    "Luxury executive chauffeur service across the UK. Premium vehicles, professional drivers, airport transfers and business travel with comfort, privacy and discretion.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Royal Rides | Executive Chauffeur Service in the UK",
    description:
      "Luxury executive chauffeur service across the UK. Premium vehicles, professional drivers, airport transfers and business travel with comfort, privacy and discretion.",
    url: "https://royalerides.co.uk",
    siteName: "Royal Rides",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Royal Rides Executive Chauffeur Service",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
