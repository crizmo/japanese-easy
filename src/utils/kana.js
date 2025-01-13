import axios from 'axios';

export const lookupKana = async (kana) => {
  try {
    const response = await axios.get(`https://kanaapi.vercel.app/api/kana/${kana}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`No Kana data found for ${kana}`);
    } else {
      console.error(`Error fetching Kana data for ${kana}:`, error);
    }
    return null;
  }
};

// Function to get Hiragana chart
export const getHiraganaChart = async () => {
  try {
    const response = await axios.get(`https://kanaapi.vercel.app/api/chart/hiragana`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Hiragana chart:`, error);
    return null;
  }
};

// Function to get Katakana chart
export const getKatakanaChart = async () => {
  try {
    const response = await axios.get(`https://kanaapi.vercel.app/api/chart/katakana`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Katakana chart:`, error);
    return null;
  }
};