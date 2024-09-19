import Link from "next/link";
import naviStyles from "../styles/navigation.module.css";
import Image from "next/image";
import NetfilxLogo from "../assets/images/NavNetflixLogo.svg";

const HeaderNavigation = () => {
    return (
        <nav className={naviStyles.nav}>
            <ul>
                <Image
                    src={NetfilxLogo}
                    alt="Netflix Logo"
                    width={139}
                    height={39}
                />
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/movies"}>TV Shows</Link>
                </li>
                <li>
                    <Link href={"/"}>Movies</Link>
                </li>
            </ul>
        </nav>
    );
};
export default HeaderNavigation;
