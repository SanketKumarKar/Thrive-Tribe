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

// Functionality to handle Web3 Wallet Connection with MetaMask and WalletConnect
document.getElementById('connectMetaMask').addEventListener('click', function() {
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
            console.log('MetaMask connected:', accounts[0]);
        })
        .catch(error => {
            console.error('Error connecting MetaMask:', error);
        });
    } else {
        alert('MetaMask is not installed. Please install it to use this feature.');
    }
});

document.getElementById('connectWalletConnect').addEventListener('click', function() {
    // Placeholder for WalletConnect functionality
    alert('WalletConnect functionality is not yet implemented.');
});

// Functionality to display mood progress tracking and appointment booking in Dashboard
document.getElementById('bookAppointment').addEventListener('click', function() {
    alert('Appointment booking functionality is not yet implemented.');
});

// Update navigation functionality to include new sections
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(targetId).style.display = 'block';
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    });
});

// Add animations for interactive elements
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

// Function to toggle the visibility of the navigation bar when the hamburger menu icon is clicked
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Add an event listener to the hamburger menu icon to call the toggle function when clicked
document.querySelector('.hamburger-menu').addEventListener('click', toggleNav);

// Add a class to the navigation bar to show or hide it based on the screen size
window.addEventListener('resize', function() {
    const nav = document.querySelector('nav ul');
    if (window.innerWidth > 768) {
        nav.classList.remove('show');
    }
});
