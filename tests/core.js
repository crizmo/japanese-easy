import * as japaneseeasy from '../index.js';

// Fetch Kanji data
japaneseeasy.lookupKanji('猫').then(data => {
    console.log("Result from lookupKanji:");
    console.log(data);
    console.log("End of lookupKanji result\n");
});

// Fetch Kana data
japaneseeasy.lookupKana('あ').then(data => {
    console.log("Result from lookupKana:");
    console.log(data);
    console.log("End of lookupKana result\n");
});

// Convert Kanji to Kana
japaneseeasy.convertKanjiToKana('猫').then(data => {
    console.log("Result from convertKanjiToKana:");
    console.log(data);
    console.log("End of convertKanjiToKana result\n");
});

// Fetch Kanji list
japaneseeasy.fetchKanjiList('grade-1').then(data => {
    console.log("Result from fetchKanjiList:");
    console.log(data);
    console.log("End of fetchKanjiList result\n");
});

// Fetch Hiragana chart
japaneseeasy.getHiraganaChart().then(data => {
    console.log("Result from getHiraganaChart:");
    console.log(data);
    console.log("End of getHiraganaChart result\n");
});

// Fetch Katakana chart
japaneseeasy.getKatakanaChart().then(data => {
    console.log("Result from getKatakanaChart:");
    console.log(data);
    console.log("End of getKatakanaChart result\n");
});