import styles from "../../styles/project/left.module.css";
import Link from "next/link";

const Left = ({ logo, name, links }) => {
    return (
        <>
            <div className={styles.main}>
                <Link href="/">
                    <a>
                        <div className={styles.home}>
                            <svg viewBox="0 0 37 25" fill="none">
                                <path d="M20.3311 11.7263L20.3341 12.4345C20.3341 15.3778 20.1618 18.0611 19.9021 19.8103L19.6747 20.898C19.5481 21.4741 19.3818 22.1301 19.2083 22.465C18.5734 23.6899 17.332 24.4477 16.0033 24.4477H15.8876C15.0215 24.4191 13.2018 23.659 13.2018 23.6326C10.2739 22.404 4.6251 18.6963 2.01618 16.0529L1.25804 15.2593C1.05951 15.0442 0.836462 14.7897 0.697991 14.5913C0.235451 13.9788 0.00418091 13.221 0.00418091 12.4631C0.00418091 11.6172 0.263814 10.8307 0.754717 10.1874L1.53364 9.34676L1.70816 9.16736C4.0754 6.60081 10.2564 2.40401 13.4898 1.11963L13.978 0.932543C14.5655 0.72198 15.3885 0.470833 15.8876 0.447701C16.5225 0.447701 17.1291 0.595305 17.7072 0.886107C18.4294 1.29367 19.0054 1.93696 19.3239 2.69481C19.5269 3.21913 19.8454 4.79431 19.8454 4.82295C20.1374 6.41118 20.3067 8.91734 20.3311 11.7263ZM36.0042 12.4486C36.0042 14.1251 34.658 15.4844 32.9977 15.4844L25.5992 14.8301C24.2967 14.8301 23.2407 13.7638 23.2407 12.4486C23.2407 11.1312 24.2967 10.0671 25.5992 10.0671L32.9977 9.41278C34.658 9.41278 36.0042 10.7721 36.0042 12.4486Z" />
                            </svg>

                            <p>Go Back</p>
                        </div>
                    </a>
                </Link>
                <div className={styles.container}>
                    <div>
                        <img src={logo} alt={name} />
                        <h1>{name}</h1>
                    </div>

                    <div className={styles.cards}>
                        {links.map((link) => (
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={link.download}
                                key={link.id}
                            >
                                <div className={styles.card}>
                                    <img src={link.icon} alt={link.name} />
                                    <p>{link.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Left;
