import Link from "next/link";
import Logo from "./icons/Logo";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/">
            <Logo />
          </Link>
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
  );
}
