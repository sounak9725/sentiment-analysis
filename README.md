# Sentiment Analysis Project

## Overview
This project performs sentiment analysis on user-provided text using Node.js and a web interface. It evaluates the positivity or negativity of text and presents the analysis visually using a pie chart and detailed metrics.

## Features
- Analyze sentiment of text using the [Sentiment](https://www.npmjs.com/package/sentiment) library.
- Display sentiment scores, comparative scores, and a breakdown of positive and negative words.
- Visualize results with an interactive pie chart.
- User-friendly web interface built with HTML, CSS, and JavaScript.

## Project Structure
```
sentiment-analysis/
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── chart.js
```

### File Descriptions
- **package.json**: Lists project dependencies and metadata.
- **server.js**: Backend server handling text analysis requests using Express and the Sentiment library.
- **public/index.html**: Frontend layout and structure of the web page.
- **public/styles.css**: Styling for the web interface.
- **public/script.js**: Handles user interaction and sends requests to the server.
- **public/chart.js**: Renders a pie chart of sentiment data using Chart.js.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/sounak9725/sentiment-analysis.git
   cd sentiment-analysis
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How It Works
1. Enter a block of text in the input box on the web page.
2. Click the **Analyze** button.
3. The backend processes the text and returns the sentiment analysis:
   - **Sentiment Score**: Total positivity/negativity of the text.
   - **Comparative Score**: Normalized sentiment score (Sentiment Score divided by total words).
   - **Positive Words**: Words contributing positively.
   - **Negative Words**: Words contributing negatively.
4. The results are displayed along with a pie chart for visualization.

## Example
### Input:
```
The design is beautiful, but the quality is poor.
I love the features, but the customer service was disappointing.
Great price, but it lacks durability.
```
### Output:
- **Sentiment Score**: 7
- **Comparative Score**: 0.28
- **Positive Words**: beautiful, quality, love, great
- **Negative Words**: poor, disappointing
- **Pie Chart**: Visual breakdown of positive and negative contributions.

## Technologies Used
- **Backend**: Node.js, Express, Sentiment library
- **Frontend**: HTML, CSS, JavaScript, Chart.js

## Future Improvements
- Add support for multiple languages.
- Enhance the sentiment analysis dictionary.
- Provide advanced analytics like neutral word identification.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgments
- Sounak Bera - Coder.
- [Sentiment Library](https://github.com/thisandagain/sentiment)
- [Chart.js](https://www.chartjs.org/) for charting capabilities.

---
