# Japanese Easy

Japanese Easy is an npm package designed to simplify learning Japanese by providing useful utilities and resources.

## Features

- **Hiragana and Katakana Charts**: Easily reference the basic Japanese syllabaries.
- **Kanji Lookup**: Search for Kanji characters and get their meanings, readings, and stroke orders.
- **Vocabulary Lists**: Access curated lists of vocabulary for different proficiency levels.
- **Grammar Guides**: Learn Japanese grammar with clear and concise explanations.

## Installation

To install Japanese Easy, use npm:

```bash
npm install japanese-easy
```

## Usage

Here is a basic example of how to use Japanese Easy:

```javascript
const japaneseEasy = require('japanese-easy');

// Example: Get Hiragana chart
const hiraganaChart = japaneseEasy.getHiraganaChart();
console.log(hiraganaChart);

// Example: Lookup a Kanji character
const kanjiInfo = japaneseEasy.lookupKanji('日');
console.log(kanjiInfo);
```

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please open an issue on our [GitHub repository](https://github.com/kurizu/japanese-easy).
