import logo from '../../assets/logo.png';
import restart from '../../assets/restart.svg';
import styles from './styles.module.css';

type Props = {
    current: number;
    max: number;
    onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
    return (
        <div className={styles.header}>
            <img src={logo} alt="Logo" />

            <header>
                <span>
                    <strong>{current}</strong> of {max} attempts
                </span>
                <button type="button" onClick={onRestart}>
                    <img src={restart} alt="restart icon" />
                </button>
            </header>
        </div>
    );
}
