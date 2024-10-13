import styles from './header.module.css'
console.log(styles, "styles");

const Header = ()=>{
    return (
        <header className={styles.header}>
            <h1>This is a header</h1>
            <h2>This is header 2</h2>
        </header>
    )
}
export default Header;