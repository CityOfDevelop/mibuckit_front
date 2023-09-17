import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: JSX.Element;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <div className="flex flex-col items-center w-full h-auto">
        <Header />
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
