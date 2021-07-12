import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="nb-left">
                <Link href="/">
                    <h2>
                        <a>Napp</a>
                    </h2>
                </Link>
            </div>  
            <div className="nb-mid">

            </div>
            <div className="nb-right">

            </div>
        </nav>
     );
}
 
export default Navbar;