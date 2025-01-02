
# Japanese-easy

`japanese-easy` is a utility package designed to make it easier to work with Japanese Kana and Kanji data. This package provides functions for fetching Kanji and Kana information, converting Kanji to Kana, retrieving Kanji lists, and accessing Hiragana and Katakana charts.

## Features

- Lookup Kanji data, including meanings, readings, and more.
- Lookup Kana (Hiragana/Katakana) details.
- Convert Kanji to Kana for better understanding of pronunciation.
- Retrieve a list of Kanji based on grades or other filters.
- Access complete Hiragana and Katakana charts.
- Lookup specific words and their meanings.
- Lookup random words or words by JLPT level.
- Retrieve all available words, optionally filtered by level.

---

## Installation

Install the package via npm:

```bash
npm install japanese-easy
```

---

## Usage

Here are examples of how to use the `japanese-easy` package:

### Importing the Package

```javascript
import * as japanese_easy from 'japanese-easy';
```

### Lookup Kanji Data

```javascript
japanese_easy.lookupKanji('猫').then(data => {
    console.log("Result from lookupKanji:", data);
});
```

### Lookup Kana Data

```javascript
japanese_easy.lookupKana('あ').then(data => {
    console.log("Result from lookupKana:", data);
});
```

### Convert Kanji to Kana

```javascript
japanese_easy.convertKanjiToKana('猫').then(data => {
    console.log("Result from convertKanjiToKana:", data);
});
```

### Lookup Kanji List

```javascript
japanese_easy.lookupKanjiList('grade-1').then(data => {
    console.log("Result from lookupKanjiList:", data);
});
```

### Get Hiragana Chart

```javascript
japanese_easy.getHiraganaChart().then(data => {
    console.log("Result from getHiraganaChart:", data);
});
```

### Get Katakana Chart

```javascript
japanese_easy.getKatakanaChart().then(data => {
    console.log("Result from getKatakanaChart:", data);
});
```

### Lookup Specific Word

```javascript
japanese_easy.lookupWord('夜更かし').then(data => {
    console.log("Result from lookupWord:", data);
});
```

### Lookup Words by JLPT Level

```javascript
japanese_easy.lookupWordsByLevel(3).then(data => {
    console.log("Result from lookupWordsByLevel (N3):", data);
});
```

### Lookup Random Word

```javascript
japanese_easy.lookupRandomWord().then(data => {
    console.log("Result from lookupRandomWord:", data);
});
```

### Lookup Random Word by Level

```javascript
japanese_easy.lookupRandomWord(1).then(data => {
    console.log("Result from lookupRandomWord (N1):", data);
});
```

### Lookup All Words

```javascript
japanese_easy.lookupAllWords().then(data => {
    console.log("Result from lookupAllWords:", data);
});
```

### Fetch All Words by Level

```javascript
japanese_easy.lookupAllWords(3).then(data => {
    console.log("Result from lookupAllWords (N3):", data);
});
```

---

## API Reference

### `lookupKanji(kanji: string): Promise<Object>`
Fetches detailed information about a given Kanji.

- **Parameter:** `kanji` - The Kanji character to lookup.
- **Returns:** A Promise resolving to Kanji data.

---

### `lookupKana(kana: string): Promise<Object>`
Fetches information about a given Kana (Hiragana or Katakana).

- **Parameter:** `kana` - The Kana character to lookup.
- **Returns:** A Promise resolving to Kana data.

---

### `convertKanjiToKana(text: string): Promise<string>`
Converts a string of Kanji into Kana for better pronunciation.

- **Parameter:** `text` - A string containing Kanji.
- **Returns:** A Promise resolving to the Kana equivalent.

---

### `lookupKanjiList(filter: string): Promise<Array>`
Fetches a list of Kanji based on a specified filter (e.g., grade level).

#### Available Parameters for `lookupKanjiList`

The `lookupKanjiList` function supports the following categories as parameters:

- `joyo` or `jouyou`: List of Jōyō Kanji.
- `jinmeiyo` or `jinmeiyou`: List of Jinmeiyō Kanji.
- `heisig`: List of Kanji with a Heisig keyword.
- `kyouiku` or `kyouiku`: List of all Kyōiku Kanji.
- `grade-1`: List of Grade 1 Kyōiku Kanji.
- `grade-2`: List of Grade 2 Kyōiku Kanji.
- `grade-3`: List of Grade 3 Kyōiku Kanji.
- `grade-4`: List of Grade 4 Kyōiku Kanji.
- `grade-5`: List of Grade 5 Kyōiku Kanji.
- `grade-6`: List of Grade 6 Kyōiku Kanji.
- `grade-8`: List of Jōyō Kanji excluding Kyōiku Kanji.
- `all`: List of all 13,000+ available Kanji.

- **Parameter:** `filter` - A string filter such as "grade-1".
- **Returns:** A Promise resolving to an array of Kanji.

---

### `lookupWord(word: string): Promise<Object>`
Fetches detailed information about a specific word.

- **Parameter:** `word` - The word to lookup.
- **Returns:** A Promise resolving to word data.

---

### `lookupWordsByLevel(level: number): Promise<Array>`
Fetches words by their JLPT level.

- **Parameter:** `level` - The JLPT level (e.g., 1, 2, 3, 4, 5).
- **Returns:** A Promise resolving to an array of words.

---

### `lookupRandomWord(level?: number): Promise<Object>`
Fetches a random word, optionally filtered by JLPT level.

- **Parameter:** `level` - The JLPT level (optional).
- **Returns:** A Promise resolving to a random word.

---

### `lookupAllWords(level?: number): Promise<Array>`
Fetches all available words, optionally filtered by JLPT level.

- **Parameter:** `level` - The JLPT level (optional).
- **Returns:** A Promise resolving to an array of words.

---

### `getHiraganaChart(): Promise<Object>`
Fetches the complete Hiragana chart.

- **Returns:** A Promise resolving to a Hiragana chart object.

---

### `getKatakanaChart(): Promise<Object>`
Fetches the complete Katakana chart.

- **Returns:** A Promise resolving to a Katakana chart object.

---

## Scripts

### Running Tests

To run tests for the package, use:

```bash
npm run test
```

This will execute the `tests/core.js` file.

---

## Contributing

Contributions are welcome! If you have suggestions or find bugs, feel free to open an issue or submit a pull request on [GitHub](https://github.com/crizmo/japanese-easy).

---

## Issues

If you encounter any problems, please report them at the [issues page](https://github.com/crizmo/japanese-easy/issues).

---

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/crizmo/japanese-easy/blob/main/LICENSE) file for details.

---

## Author

Developed by **Kurizu**.

- GitHub: [@crizmo](https://github.com/crizmo)

---

## Links

- [Repository](https://github.com/crizmo/japanese-easy)
- [Issues](https://github.com/crizmo/japanese-easy/issues)
- [Homepage](https://github.com/crizmo/japanese-easy#readme)