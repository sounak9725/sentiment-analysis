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
        document.getElementById('textResults').innerHTML = `<p>Error: ${result.error}</p>`;
    } else {
        // Display Textual Results
        document.getElementById('score').innerHTML = `<strong>Sentiment Score:</strong> ${result.score}`;
        document.getElementById('comparative').innerHTML = `<strong>Comparative Score:</strong> ${result.comparative}`;
        document.getElementById('positiveWords').innerHTML = `<strong>Positive Words:</strong> ${result.positive.join(', ')}`;
        document.getElementById('negativeWords').innerHTML = `<strong>Negative Words:</strong> ${result.negative.join(', ')}`;

        // Count Positive, Negative, and Neutral Words
        const positiveCount = result.positive.length;
        const negativeCount = result.negative.length;
        const neutralCount = text.split(' ').length - (positiveCount + negativeCount);

        // Render Chart
        renderChart(positiveCount, negativeCount, neutralCount);
    }
});

// Function to Render Chart
function renderChart(positive, negative, neutral) {
    const ctx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [positive, negative, neutral],
                backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                },
            },
        },
    });
}
