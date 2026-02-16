import styles from './styles.module.css';
import { Letter } from '../Letter';

export type UsedLettersProps = {
    value: string;
    correct: boolean;
};

type Props = {
    data: UsedLettersProps[];
}

export function UsedLetters({ data }: Props) {
    return (
        <div className={styles.usedLetters}>
            <h5>Used letters</h5>

            <div>
                { data.map(( { value, correct }) => (
                <Letter key={value} value={value} size="small" color={correct ? 'correct' : 'wrong'} />
                )) }
            </div>
        </div>
    );
}
