import * as japanese_easy from '../index.js';

// // Fetch Kanji data
japanese_easy.lookupKanji('猫').then(data => {
    console.log("Result from lookupKanji:");
    console.log(data);
    console.log("End of lookupKanji result\n");
});

// // Fetch Kana data
japanese_easy.lookupKana('あ').then(data => {
    console.log("Result from lookupKana:");
    console.log(data);
    console.log("End of lookupKana result\n");
});

// // Convert Kanji to Kana
japanese_easy.convertKanjiToKana('猫').then(data => {
    console.log("Result from convertKanjiToKana:");
    console.log(data);
    console.log("End of convertKanjiToKana result\n");
});

// // Fetch Kanji list
japanese_easy.lookupKanjiList('grade-1').then(data => {
    console.log("Result from lookupKanjiList:");
    console.log(data);
    console.log("End of lookupKanjiList result\n");
});

// // Fetch Hiragana chart
japanese_easy.getHiraganaChart().then(data => {
    console.log("Result from getHiraganaChart:");
    console.log(data);
    console.log("End of getHiraganaChart result\n");
});

// // Fetch Katakana chart
japanese_easy.getKatakanaChart().then(data => {
    console.log("Result from getKatakanaChart:");
    console.log(data);
    console.log("End of getKatakanaChart result\n");
});

// Fetch specific word
japanese_easy.lookupWord('夜更かし').then(data => {
    console.log("Result from lookupWord:");
    console.log(data);
    console.log("End of lookupWord result\n");
});

// // Fetch words by level
japanese_easy.lookupWordsByLevel(3).then(data => {
    console.log("Result from lookupWordsByLevel (N3):");
    console.log(data);
    console.log("End of lookupWordsByLevel result\n");
});

// // Fetch random word
japanese_easy.lookupRandomWord().then(data => {
    console.log("Result from lookupRandomWord:");
    console.log(data);
    console.log("End of lookupRandomWord result\n");
});

// // Fetch random word by level
japanese_easy.lookupRandomWord(1).then(data => {
    console.log("Result from lookupRandomWord (N1):");
    console.log(data);
    console.log("End of lookupRandomWord result\n");
});

// Fetch all words
japanese_easy.lookupAllWords().then(data => {
    console.log("Result from lookupAllWords:");
    console.log(data);
    console.log("End of lookupAllWords result\n");
});

// // Fetch all words by level
japanese_easy.lookupAllWords(3).then(data => {
    console.log("Result from lookupAllWords (N3):");
    console.log(data);
    console.log("End of lookupAllWords result\n");
});