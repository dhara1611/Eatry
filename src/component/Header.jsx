import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="flex justify-between bg-amber-50 items-center ">
            <div className='w-28'><img src={logo} alt='Eatry' /></div>
            <div>
                <ul className="flex justify-evenly w-3xs align-middle">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header