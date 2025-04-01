document.getElementById('startTestBtn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('test').style.display = 'block';
});

document.getElementById('mentalHealthTest').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const stress = parseInt(document.getElementById('stress').value);
    const anxiety = parseInt(document.getElementById('anxiety').value);
    const mood = parseInt(document.getElementById('mood').value);
    
    const score = (stress + anxiety + mood) / 3; // Simple average
    document.getElementById('resultScore').innerText = `Your Score: ${score.toFixed(2)}`;
    
    let tips = '';
    
    if (score <= 3) {
        tips = 'You seem to be doing well! Keep it up!';
    } else if (score <= 6) {
        tips = 'Consider practicing mindfulness and relaxation techniques.';
    } else {
        tips = 'It may be helpful to talk to a professional or seek support.';
    }
    
    document.getElementById('personalizedTips').innerText = tips;

    document.getElementById('results').style.display = 'block';
});
