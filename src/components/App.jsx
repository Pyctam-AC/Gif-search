import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <div className='flex flex-col items-center bg-neutral-800'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
