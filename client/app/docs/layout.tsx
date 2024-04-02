import SideBar from "@/components/DocsPage/SideBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex gap-16">
        <div className="w-1/6">
          <SideBar />
        </div>
        <div className="w-5/6">
          <Navbar comp="docs" />
          {children}
        </div>
      </div>
    </main>
  );
}
