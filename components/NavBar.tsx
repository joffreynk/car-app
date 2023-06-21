import Image from "next/image"
import CustomButton from "./CustomButton"
import Link from "next/link"


const NavBar = () => {
  return (
    <header className='w-full absolute  z-10' >
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-14' >
        <Link href='/' className="flex justify-center items-center">
          <Image
          src='/logo.svg'
          alt="car store logo"
          width={118}
          height={18}
          className="object-contain"
          />
        </Link>
      </nav>
    </header>
  )
}

export default NavBar