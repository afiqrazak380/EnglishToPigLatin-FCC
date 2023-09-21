function toPigLatin(englishWord) {
    // Define a list of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Convert the word to lowercase for consistent processing
    englishWord = englishWord.toLowerCase();
  
    // Check if the word starts with a vowel
    if (vowels.includes(englishWord[0])) {
      return englishWord + 'ay';
    } else {
      // Find the index of the first vowel in the word
      let firstVowelIndex = -1;
      for (let i = 0; i < englishWord.length; i++) {
        if (vowels.includes(englishWord[i])) {
          firstVowelIndex = i;
          break;
        }
      }
  
      // Rearrange the word into Pig Latin
      if (firstVowelIndex !== -1) {
        const prefix = englishWord.slice(0, firstVowelIndex);
        const suffix = englishWord.slice(firstVowelIndex);
        return suffix + prefix + 'ay';
      }
    }
  
    // If no vowels are found, return the word as is
    return englishWord;
  }
  
  // Example usage:
  const englishWord = 'hrt';
  const pigLatinWord = toPigLatin(englishWord);
  console.log(pigLatinWord); // Output: 'ellohay'
  