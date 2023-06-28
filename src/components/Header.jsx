import headerLogo from '../images/logo.gif'

const Header = () => {
  return (
    <header className="w-100% mt-10 ">
      <img className='w-28 m-auto' src={headerLogo}/>
      <nav className='flex gap-8'>
        <button className='text-white text-xl hover:text-orange-500'>Поиск</button>
        <button className='text-white text-xl hover:text-orange-500'>Тренды</button>
        <button className='text-white text-xl hover:text-orange-500'>Случайный гиф</button>
      </nav>
    </header>
  )
}

export default Header