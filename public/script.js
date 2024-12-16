document.getElementById('analyzeBtn').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value;

    if (!text) {
        alert('Please enter some text.');
        return;
    }

    const response = await fetch('http://localhost:3000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
    });

    const result = await response.json();

    if (result.error) {
        document.getElementById('result').innerText = `Error: ${result.error}`;
    } else {
        document.getElementById('result').innerHTML = `
            <p><strong>Sentiment Score:</strong> ${result.score}</p>
            <p><strong>Comparative Score:</strong> ${result.comparative}</p>
            <p><strong>Positive Words:</strong> ${result.positive.join(', ')}</p>
            <p><strong>Negative Words:</strong> ${result.negative.join(', ')}</p>
        `;
    }
});
