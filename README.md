# Guess the Word 🎯

A word guessing game where the objective is to guess a hidden word by trying different letters before you run out of attempts.

<br>

## Features ✨

- Input validation (only letters are accepted)
- Visual feedback for correct and incorrect guesses
- Tip system to help the player  
- Restart game functionality
- Attempt counter to track remaining tries
- Random word selection
  
<br>

## How to Play 🕹️ 

1. When the game starts, a random word is selected and a tip is shown on the screen.
2. The player types a letter in the input field.
3. If the letter exists in the word, it will be revealed and added to the list of used letters in green.
4. If the letter does not exist, it will be added to the list of used letters in yellow.
5. The game ends when:
   - The player correctly guesses all letters of the word (win). 
   - The player reaches the maximum number of failed attempts (lose).
6. Click the restart button to start a new game.

<br>

## Project Structure 🗂️

- **src/**
  - **assets/**
    - `logo.png` – Application logo  
    - `restart.svg` – Restart game icon  
    - `tip.svg` – Hint icon  

  - **components/**
    - **Button/**
      - `index.tsx` – Reusable button component  
      - `styles.module.css` – Button styles  

    - **Header/**
      - `index.tsx` – Application header component  
      - `styles.module.css` – Header styles  

    - **Input/**
      - `index.tsx` – Letter input component  
      - `styles.module.css` – Input styles  

    - **Letter/**
      - `index.tsx` – Displays each letter of the hidden word  
      - `styles.module.css` – Letter styles  

    - **Tip/**
      - `index.tsx` – Tip display component  
      - `styles.module.css` – Tip styles  

    - **UsedLetters/**
      - `index.tsx` – Displays already used letters  
      - `styles.module.css` – Used letters styles  

  - **utils/**
    - `words.ts` – Word list and hint definitions  

  - `App.tsx` – Main game logic and state management  
  - `main.tsx` – Application entry point  
  - `global.css` – Global styles  
  - `app.module.css` – App-level styles  

<br>

## Technologies Used 🛠️

- **React** – Component-based UI  
- **TypeScript** – Static typing and better developer experience  
- **Vite** – Fast development and build tool  
- **CSS Modules** – Scoped and maintainable styles  
- **HTML5 / CSS3** – Base structure and styling

<br>

## How to Run the Project 🚀

1. Install Dependencies
```bash
npm install
```

2. Run the Development Server
```bash
npm run dev
```

3. Open in Browser

    By default, the project will run at:
[http://localhost:5173](http://localhost:5173)

<br> 

## Contributing 🤝 

Feel free to contribute to this project by submitting issues or pull requests. Your feedback and suggestions are always welcome!
