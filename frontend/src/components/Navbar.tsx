"use client";
import Link from "next/link";
import Logo from "./icons/Logo";
import classes from "./Navbar.module.css";
import Hamburger from "./icons/Hamburger";
import Close from "./icons/Close";
import { useState } from "react";

export default function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const navBar = sidebar ? (
    <nav className={classes.sidebar}>
      <ul>
        <li>
          <Close myClass={classes.x} click={toggleSidebar} />
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
      </ul>
    </nav>
  ) : (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">
            <Logo />
          </Link>
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
          <Hamburger myClass={classes.hamburger} />
        </li>
      </ul>
    </nav>
  );

  return <>{navBar}</>;
}
