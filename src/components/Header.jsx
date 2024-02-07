import logoImg from '@i/logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className="container">
                <nav className='nav'>
                    <a href="" className="logo">
                        <img src={logoImg} alt="" />
                        <span>React Weather</span>
                    </a>
                    <form action="" className='nav__form'>
                        <img src="" alt="" className='nav__form-img'/>
                        <input type="text" className='nav__form-input'/>
                    </form>
                </nav>
            </div>
        </header>
    )
}

export default Header