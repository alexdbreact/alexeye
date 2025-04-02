import Image from 'next/image';
import alexz from '../../public/alexz.png';
import eye from '../../public/eye.jpg';
import "../globals.css"

const Navbar = () => {
  return (
<nav className="bg-gray-100 py-2 px-2 flex items-center justify-around shadow-lg border-blue-200">
  
    <Image
     src={eye}
width={50}
height= "auto"
alt='orsod logo'

/>
<div>
    <h1 className="text-xl font-bold py-0 px-2 bg-transparent text-blue-500 text-center text-shadow-xl fonty">عين الإسكندريــــــة</h1>
<p className='text-sm text-center pb' >منصة المشاركة المجتمعية لمحافظة الإسكندرية</p>
</div>


    <Image
     src={alexz}
width={60}
height= "auto"
alt='alex logo'
  />
  
  
</nav>
  )
}

export default Navbar
