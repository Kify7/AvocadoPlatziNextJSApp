import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
// import dynamic from "next/dynamic";

const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
// dynamic (() => Promise.resolve(Layout), {ssr: false})
