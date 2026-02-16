import styles from './app.module.css';
import { useEffect, useState } from 'react';
import { WORDS } from './utils/words';
import type { Challenge } from './utils/words';

import { Tip } from './components/Tip';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Letter } from './components/Letter';
import { Header } from './components/Header';
import { UsedLetters } from './components/UsedLetters';
import type { UsedLettersProps } from './components/UsedLetters';

export default function App() {
    const [letter, setLetter] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [usedLetters, setUsedLetters] = useState<UsedLettersProps[]>([]);
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    function handleRestart() {
        alert('Restarting the game!');
    }

    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[index];

        setChallenge(randomWord);
        setAttempts(0);
        setLetter('');
    }

    useEffect(() => {
        startGame();
    }, []);

    if (!challenge) {
        return;
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={attempts} max={10} onRestart={handleRestart} />
                <Tip tip="One of the most widely used programming languages" />
                <div className={styles.word}>
                    {challenge.word.split('').map(() => (
                        <Letter value="" />
                    ))}
                </div>

                <h4>Make a guess</h4>

                <div className={styles.guess}>
                    <Input autoFocus maxLength={1} placeholder="?" />
                    <Button title="Confirm" />
                </div>

                <UsedLetters data={usedLetters} />
            </main>
        </div>
    );
}
