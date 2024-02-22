// Script file: script.js

function getAstrologicalSign(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const signs = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"
    ];
    const boundaries = [20, 19, 20, 20, 21, 21, 22, 23, 23, 23, 22, 21, 19];
    return day < boundaries[month - 1] ? signs[month - 1] : signs[month];
}

function generateMessage() {
    debugger;
    const birthdate = document.getElementById('birthdate').valueAsDate;
    if (!birthdate) {
        alert('Please enter your birthdate.');
        return;
    }
    const sign = getAstrologicalSign(birthdate);
    const messages = {
        Aries: "You're full of energy today!",
        Taurus: "A moment of patience in a moment of anger saves you a hundred moments of regret.",
        Gemini: "Curiosity leads you to new discoveries.",
        Cancer: "Home is where your heart finds peace.",
        Leo: "Your presence is like sunshine.",
        Virgo: "Perfection is in the details.",
        Libra: "Balance is the key to everything.",
        Scorpio: "Intensity is your birthright.",
        Sagittarius: "Adventure awaits those who dare to dream.",
        Capricorn: "Discipline is your pathway to success.",
        Aquarius: "Innovation starts with a single idea.",
        Pisces: "Your empathy is a gift to the world."
    };
    const message = messages[sign];
    document.getElementById('message').innerText = `Your Zodiac Sign is: ${sign}
      Your message is: ${message}`;
}
