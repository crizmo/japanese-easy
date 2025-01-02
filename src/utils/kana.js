import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const kanaFilePath = path.resolve(__dirname, '../data/kana.json');

export const lookupKana = async (kana) => {
  try {
    const fileContent = await fs.readFile(kanaFilePath, 'utf-8');
    const kanaData = JSON.parse(fileContent);
    const data = kanaData.find(item => item.character === kana);
    if (!data) {
      console.error(`No Kana data found for ${kana}`);
      return null;
    }

    return data; // Return the Kana data

  } catch (error) {
    console.error(`Error fetching Kana data for ${kana}:`, error);
    return null;
  }
};

// Function to get Hiragana chart
export const getHiraganaChart = async () => {
  try {
    const fileContent = await fs.readFile(kanaFilePath, 'utf-8');
    const kanaData = JSON.parse(fileContent);
    const hiraganaChart = kanaData.filter(item => item.type === 'hiragana');

    const chart = {
      a: [],
      i: [],
      u: [],
      e: [],
      o: []
    };

    hiraganaChart.forEach(item => {
      const romaji = item.romaji;
      const vowel = romaji[romaji.length - 1];
      if (chart[vowel] && !chart[vowel].includes(item.character)) {
        chart[vowel].push(item.character);
      }
    });

    return chart;

  } catch (error) {
    console.error(`Error fetching Hiragana chart:`, error);
    return null;
  }
};

// Function to get Katakana chart
export const getKatakanaChart = async () => {
  try {
    const fileContent = await fs.readFile(kanaFilePath, 'utf-8');
    const kanaData = JSON.parse(fileContent);
    const katakanaChart = kanaData.filter(item => item.type === 'katakana');

    const chart = {
      a: [],
      i: [],
      u: [],
      e: [],
      o: []
    };

    katakanaChart.forEach(item => {
      const romaji = item.romaji;
      const vowel = romaji[romaji.length - 1];
      if (chart[vowel] && !chart[vowel].includes(item.character)) {
        chart[vowel].push(item.character);
      }
    });

    return chart;

  } catch (error) {
    console.error(`Error fetching Katakana chart:`, error);
    return null;
  }
};