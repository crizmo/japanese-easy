import fetch from 'node-fetch';
import { promises as fs } from 'fs';
import path from 'path';

const kanaFilePath = path.resolve('./src/data/kana.json');

export const lookupKanji = async (kanji) => {
  try {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(kanji)}`);
    const data = await response.json();

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
export const fetchKanjiList = async (category) => {
  try {
    const response = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(category)}`);
    const data = await response.json();

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