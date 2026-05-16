import "./globals.css";

export const metadata = {
  title: "FavourDeCreative | Web Developer",
  description:
    "Creative Frontend Developer building futuristic web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
