const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sentiment = require('sentiment');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from "public" folder

const sentiment = new Sentiment();

app.post('/analyze', (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const result = sentiment.analyze(text);

    const topPositive = result.positive.slice(0, 3);
    const topNegative = result.negative.slice(0, 3);

    res.json({
        ...result,
        topPositive,
        topNegative,
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
