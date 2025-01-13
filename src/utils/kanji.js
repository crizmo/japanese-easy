import axios from 'axios';

export const lookupKanji = async (kanji) => {
  try {
    const response = await axios.get(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(kanji)}`);
    const data = response.data;

    if (!data) {
      console.error(`No Kanji data found for ${kanji}`);
      return null;
    }

    return data; // Return the Kanji data

  } catch (error) {
    console.error(`Error fetching Kanji data for ${kanji}:`, error);
    return null;
  }
};

// Function to convert kanji to kana
export const convertKanjiToKana = async (kanji) => {
  try {
    const data = await lookupKanji(kanji);
    if (!data) {
      console.error(`No Kanji data found for ${kanji}`);
      return null;
    }

    return data.kun_readings;

  } catch (error) {
    console.error(`Error converting Kanji to Kana for ${kanji}:`, error);
    return null;
  }
};

// Function to fetch Kanji list by category
export const lookupKanjiList = async (category) => {
  try {
    const response = await axios.get(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(category)}`);
    const data = response.data;

    if (!data || data.length === 0) {
      console.error(`No Kanji list found for category ${category}`);
      return null;
    }

    return data; // Return the list of kanji

  } catch (error) {
    console.error(`Error fetching Kanji list for category ${category}:`, error);
    return null;
  }
};
