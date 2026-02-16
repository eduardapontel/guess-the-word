export type Challenge = {
  id: number
  word: string
  tip: string
}

export const WORDS: Challenge[] = [
  { id: 1, word: "CSS", tip: "Styling language" },
  { id: 2, word: "REACT", tip: "A library for building web interfaces" },
  { id: 3, word: "HTML", tip: "Markup language" },
  {
    id: 4,
    word: "JavaScript",
    tip: "One of the most widely used programming languages in the world",
  },
  { id: 5, word: "TypeScript", tip: "Used to add typing to JavaScript" },
]
