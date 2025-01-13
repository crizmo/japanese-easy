import axios from 'axios';

// Fetch specific word
export const lookupWord = async (word) => {
  try {
    const response = await axios.get(`https://jlpt-vocab-api.vercel.app/api/words?word=${encodeURIComponent(word)}`);
    const data = response.data;

    if (!data) {
      console.error(`No data found for word ${word}`);
      return null;
    }

    return data;

  } catch (error) {
    console.error(`Error fetching word ${word}:`, error);
    return null;
  }
};

// Fetch words by level
export const lookupWordsByLevel = async (level) => {
  try {
    const response = await axios.get(`https://jlpt-vocab-api.vercel.app/api/words?level=${encodeURIComponent(level)}`);
    const data = response.data;

    if (!data || data.length === 0) {
      console.error(`No data found for level ${level}`);
      return null;
    }

    return data;

  } catch (error) {
    console.error(`Error fetching words for level ${level}:`, error);
    return null;
  }
};

// Fetch random word
export const lookupRandomWord = async (level = null) => {
  try {
    const url = level
      ? `https://jlpt-vocab-api.vercel.app/api/words/random?level=${encodeURIComponent(level)}`
      : `https://jlpt-vocab-api.vercel.app/api/words/random`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data) {
      console.error(`No random word data found`);
      return null;
    }

    return data;

  } catch (error) {
    console.error(`Error fetching random word:`, error);
    return null;
  }
};

// Fetch all words or by level
export const lookupAllWords = async (level = null) => {
  try {
    const url = level
      ? `https://jlpt-vocab-api.vercel.app/api/words/all?level=${encodeURIComponent(level)}`
      : `https://jlpt-vocab-api.vercel.app/api/words/all`;
    const response = await axios.get(url);
    const data = response.data;

    if (!data || data.length === 0) {
      console.error(`No data found for all words${level ? ` at level ${level}` : ''}`);
      return null;
    }

    return data;

  } catch (error) {
    console.error(`Error fetching all words${level ? ` for level ${level}` : ''}:`, error);
    return null;
  }
};
