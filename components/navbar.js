import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="container p-8 mx-auto">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.svg"
                alt="N"
                width="32"
                height="32"
                className="w-8"
              />
            </span>
            <span>Nextly</span>
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
