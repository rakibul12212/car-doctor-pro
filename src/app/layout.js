import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/Footer";
import AuthProvider from "../services/AuthProvider";
import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
        <ToastContainer />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
