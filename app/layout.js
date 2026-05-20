import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://favourdecreative.com.ng"),

  verification: {
    google: "JNmK08nn0KySu0LZk6DifIALT0n6xMU8vre-eHwXc0U",
  },

  title: {
    default:
      "FavourDeCreative | Frontend Developer & Graphic Designer in Nigeria",
    template: "%s | FavourDeCreative",
  },

  description:
    "Frontend developer and graphic designer in Nigeria creating modern websites, futuristic UI/UX experiences, branding, logos, social media designs, and high-performance web applications.",

  keywords: [
    "Frontend Developer Nigeria",
    "Graphic Designer Nigeria",
    "Web Developer Lagos",
    "Logo Designer Nigeria",
    "Brand Designer Nigeria",
    "Next.js Developer",
    "React Developer Nigeria",
    "Portfolio Website Developer",
    "UI UX Designer Nigeria",
    "Creative Web Developer",
    "Social Media Designer",
    "Brand Identity Designer",
  ],

  authors: [{ name: "FavourDeCreative" }],

  creator: "FavourDeCreative",

  category: "Technology",

  openGraph: {
    title:
      "FavourDeCreative | Frontend Developer & Graphic Designer",

    description:
      "Modern web development, branding, graphic design, and futuristic digital experiences.",

    url: "https://favourdecreative.com.ng",

    siteName: "FavourDeCreative",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FavourDeCreative Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "FavourDeCreative | Frontend Developer & Graphic Designer",

    description:
      "Modern web development, branding, and futuristic digital experiences.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}