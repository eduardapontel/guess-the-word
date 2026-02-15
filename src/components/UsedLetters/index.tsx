import styles from './styles.module.css';
import { Letter } from '../Letter';

export function UsedLetters() {
    return (
        <div className={styles.usedLetters}>
            <h5>Used letters</h5>

            <div>
                <Letter value="R" size="small" color='correct'/>
                <Letter value="X" size="small" color='wrong'/>
            </div>
        </div>
    )
}