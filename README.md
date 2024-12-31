
# Japanese-easy

`japanese-easy` is a utility package designed to make it easier to work with Japanese Kana and Kanji data. This package provides functions for fetching Kanji and Kana information, converting Kanji to Kana, retrieving Kanji lists, and accessing Hiragana and Katakana charts.

## Features

- Lookup Kanji data, including meanings, readings, and more.
- Fetch Kana (Hiragana/Katakana) details.
- Convert Kanji to Kana for better understanding of pronunciation.
- Retrieve a list of Kanji based on grades or other filters.
- Access complete Hiragana and Katakana charts.

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

### Fetch Kanji List

```javascript
japanese_easy.fetchKanjiList('grade-1').then(data => {
    console.log("Result from fetchKanjiList:", data);
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

### `fetchKanjiList(filter: string): Promise<Array>`
Fetches a list of Kanji based on a specified filter (e.g., grade level).

- **Parameter:** `filter` - A string filter such as "grade-1".
- **Returns:** A Promise resolving to an array of Kanji.

---

### `getHiraganaChart(): Promise<Object>`
Fetches the complete Hiragana chart.

- **Returns:** A Promise resolving to a Hiragana chart object.

---

### `getKatakanaChart(): Promise<Object>`
Fetches the complete Katakana chart.

- **Returns:** A Promise resolving to a Katakana chart object.

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