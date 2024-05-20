document.addEventListener('DOMContentLoaded', () => {
    const tipsSection = document.getElementById('latest-tips');

    const tips = [
        "Stay hydrated by drinking plenty of water.",
        "Eat a balanced diet with a variety of nutrients.",
        "Exercise regularly to maintain physical fitness.",
        "Get enough sleep to support overall health."
    ];

    tips.forEach(tip => {
        const tipElement = document.createElement('p');
        tipElement.textContent = tip;
        tipsSection.appendChild(tipElement);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const userFeedback = {};
        formData.forEach((value, key) => {
            userFeedback[key] = value;
        });
        localStorage.setItem('userFeedback', JSON.stringify(userFeedback));
        alert('Thank you for your feedback!');
    });
});

