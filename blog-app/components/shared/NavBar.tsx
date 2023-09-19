import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="topbar bg-black text-white">
      <div className="flex gap-6">
        <Link href="/">
          <Image src="/" alt="logo" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/" alt="logo" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/" alt="logo" width={24} height={24} />
        </Link>
      </div>
      <div>Logo</div>
      <div className="flex gap-6">
        <Link href='/'>Homepage</Link>
        <Link href=''>Contact</Link>
        <Link href='/'>About</Link>
        <Link href='/'>Login</Link>
      </div>
    </nav>
  );
}

export default NavBar;
