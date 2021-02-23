export const isPangram = (phrase: string): boolean => {
    const ALPHABET_SIZE=26
    const phraseInLowerCase = phrase.toLowerCase()
    const listOfEmptyCharacters : string[] = Array.from(new Array(ALPHABET_SIZE)) // because new Array create an empty array with length ALPHABET_SIZE even if there's no real value in the array.
    const alphabet = listOfEmptyCharacters.map((_, letterIndex)=>String.fromCharCode("a".charCodeAt(0)+letterIndex))
    return alphabet.every((it) => phraseInLowerCase.includes(it))
}