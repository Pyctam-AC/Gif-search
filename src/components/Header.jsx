import headerLogo from '../images/duc.gif';

const Header = () => {
  return (
    <header className='w-100% mt-10 '>
      <img className='w-28 m-auto' src={headerLogo} />
      <h1 className='text-white text-2xl text-center'>GIF Search</h1>
    </header>
  );
};

export default Header;
