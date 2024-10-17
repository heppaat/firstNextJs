"use client";
import Link from "next/link";
import Logo from "./icons/Logo";
import classes from "./Navbar.module.css";
import Hamburger from "./icons/Hamburger";
import Close from "./icons/Close";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && sidebar) {
        setSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebar]);

  return (
    <>
      <nav className={classes.nav}>
        <ul>
          <li>
            <div className={classes.logo}>
              <Logo />
            </div>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/whiskeys">Whiskeys</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li onClick={toggleSidebar}>
            {sidebar ? (
              <Close myClass={classes.x} />
            ) : (
              <Hamburger myClass={classes.hamburger} />
            )}
          </li>
        </ul>
      </nav>
      {sidebar && (
        <nav className={classes.sidebar}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/whiskeys">Whiskeys</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
