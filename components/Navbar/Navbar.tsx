"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const isUserLoggedIn = true;
  const [provider, setProvider] = useState<any>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      // the type from getProvider() is not inBuilt and getProvider is an external dependency
      setProvider(response);
    };
    setProviders();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signOut();
  };
  return (
    <nav className="flex-between w-full mb-16 pt-3 ">
      <Link href="/" className="flex flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={32}
          height={32}
        />
        <p className="logo_text uppercase">ChatJPT</p>
      </Link>
      {/* desktop nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-post" className="black_btn capitalize">
              create post
            </Link>
            <button
              type="button"
              onClick={handleClick}
              className="capitalize outline_btn"
            >
              sign out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/profile.jpg"
                width={37}
                height={37}
                alt="profile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <div>
            {provider &&
              Object.values(provider).map((provide: any) => (
                <button
                  key={provide.name}
                  type="button"
                  className="black_btn"
                  onClick={() => signIn(provide.id)}
                >
                  sign in
                </button>
              ))}
          </div>
        )}
      </div>
      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.jpg"
              width={37}
              height={37}
              alt="profile"
              className="rounded-full"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link capitalize"
                  onClick={() => setToggleDropdown(false)}
                >
                  create post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="black_btn mt-5 w-full capitalize"
                >sign out</button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {provider &&
              Object.values(provider).map((provide: any) => (
                <button
                  key={provide.name}
                  type="button"
                  className="black_btn capitalize"
                  onClick={() => signIn(provide.id)}
                >
                  sign in
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
