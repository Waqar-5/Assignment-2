import { disconnect } from "process"
import styles from './footer.module.css'
console.log(styles, "styles");

const Footer = ()=>{
    return(
        <footer className={styles.footer}>
            <h1>This is a footer</h1>
            <h2>This is a footer 2</h2>
        </footer>
    )
}
export default Footer;