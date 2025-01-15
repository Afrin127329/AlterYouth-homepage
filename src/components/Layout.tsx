
import Footer from './sections/Footer';
import Nav from './sections/Nav';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <Nav />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;