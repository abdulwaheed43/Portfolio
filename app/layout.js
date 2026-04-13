import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning> {/* ❌ class='dark' hatao */}
      <body className={`${outfit.className} ${ovo.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}

// import { Outfit, Ovo } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "next-themes";

// const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// const ovo = Ovo({
//   subsets: ["latin"],
//   weight: "400",
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning class='dark'>
//       <body className={`${outfit.className} ${ovo.className}`}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
