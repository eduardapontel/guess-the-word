import styles from './app.module.css';
import { use, useEffect, useState } from 'react';
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
    const [score, setScore] = useState(0);
    const [letter, setLetter] = useState('');
    const [usedLetters, setUsedLetters] = useState<UsedLettersProps[]>([]);
    const [challenge, setChallenge] = useState<Challenge | null>(null);
    const EXTRA_ATTEMPTS = 5;
    function handleRestart() {
        const confirm = window.confirm('Are you sure you want to restart the game?');

        if (confirm) {
            startGame();
        }
    }

    function startGame() {
        const index = Math.floor(Math.random() * WORDS.length);
        const randomWord = WORDS[index];

        setChallenge(randomWord);
        setScore(0);
        setLetter('');
        setUsedLetters([]);
    }

    function handleConfirm() {
        if (!challenge) {
            return;
        }

        if (!letter.trim()) {
            alert('Please enter a letter!');
            return;
        }

        const value = letter.toUpperCase();
        const exists = usedLetters.find((used) => used.value.toUpperCase() === value);

        if (exists) {
            setLetter('');
            return alert(`You have already used the letter ${value}!`);
        }

        const matchCount = challenge.word
            .toUpperCase()
            .split('')
            .filter((char) => char === value).length;

        const correct = matchCount > 0;
        const currentScore = score + matchCount;

        setUsedLetters((prevState) => [...prevState, { value, correct }]);
        setScore(currentScore);
        setLetter('');
    }

    function endGame(message: string) {
        alert(message);
        startGame();
    }

    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        if(!challenge) {
            return;
        }


        setTimeout(() => {
            if (score === challenge.word.length) {
                return endGame('Congratulations, you guessed the word!');
            }

            const attemptLimit = challenge.word.length + EXTRA_ATTEMPTS;
            if (usedLetters.length === attemptLimit) {
                return endGame('Game Over! You used all your attempts!');
            }
        }, 200);
    }, [score, usedLetters.length]);

    if (!challenge) {
        return;
    }

    return (
        <div className={styles.container}>
            <main>
                <Header current={usedLetters.length} max={challenge.word.length + EXTRA_ATTEMPTS} onRestart={handleRestart} />
                <Tip tip={challenge.tip} />
                <div className={styles.word}>
                    {challenge.word.split('').map((letter, index) => {
                        const usedLetter = usedLetters.find(
                            (used) => used.value.toUpperCase() === letter.toUpperCase()
                        );
                        return (
                            <Letter
                                key={index}
                                value={usedLetter?.value}
                                color={usedLetter?.correct ? 'correct' : 'default'}
                            />
                        );
                    })}
                </div>

                <h4>Make a guess</h4>

                <div className={styles.guess}>
                    <Input
                        autoFocus
                        maxLength={1}
                        placeholder="?"
                        value={letter}
                        onChange={(e) => {
                            const value = e.target.value.replace(/[^a-záéíóúâêôãõçA-ZÁÉÍÓÚÂÊÔÃÕÇ]/g, '');
                            setLetter(value);
                        }}
                    />
                    <Button title="Confirm" onClick={handleConfirm} />
                </div>

                <UsedLetters data={usedLetters} />
            </main>
        </div>
    );
}
