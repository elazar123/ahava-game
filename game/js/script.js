// מערך של שמות קבצי הקלפים
const cardFiles = [
    // קלפי מספרים
    '2.png', '4.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', 
    '17.png', '18.png', '19.png', '56.png', '57.png', '58.png', '59.png', '60.png', '100.png', 
    '106.png', '107.png', '108.png', '109.png', '110.png', '111.png', '112.png', '113.png', 
    '114.png', '115.png', '116.png', '117.png', '118.png', '119.png', '120.png', '121.png', 
    '122.png', '123.png', '124.png', '125.png', '126.png', '127.png', '128.png', '129.png', 
    '130.png', '131.png', '132.png', '133.png', '134.png', '135.png', '136.png', '137.png', 
    '138.png', '139.png', '140.png', '141.png', '142.png', '143.png', '144.png', '145.png', 
    '151.png', '152.png', '153.png', '154.png', '155.png', '161.png', '162.png', '163.png', 
    '164.png', '165.png', '166.png', '167.png', '168.png', '169.png', '170.png', '171.png', 
    '172.png', '173.png', '174.png', '175.png', '176.png', '177.png', '178.png', '179.png', 
    '180.png', '186.png', '187.png', '188.png', '189.png', '190.png', '191.png', '192.png', 
    '193.png', '194.png', '195.png', '196.png', '197.png', '198.png'
];

let currentCardIndex = 0;
let cardHistoryStack = []; // מערך לשמירת ההיסטוריה של הקלפים שהוצגו
let favoriteCards = []; // מערך לשמירת הקלפים המועדפים

// פונקציה להעברה למסך ההקדמה
function startGame() {
    // טעינת קלפים מועדפים מהזיכרון המקומי
    const savedFavorites = localStorage.getItem('favoriteCards');
    if (savedFavorites) {
        favoriteCards = JSON.parse(savedFavorites);
    }
    
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'flex';
}

// פונקציה להעברה למסך המשחק
function showCards() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    
    // הצגת הקלף הראשון
    showCard(0);
}

// פונקציה להצגת קלף ספציפי לפי האינדקס
function showCard(index) {
    // וידוא שהאינדקס תקין
    if (index < 0) index = 0;
    if (index >= cardFiles.length) index = cardFiles.length - 1;
    
    currentCardIndex = index;
    const cardImage = document.getElementById('card-image');
    cardImage.src = `../compressed_images/${cardFiles[index]}`;
    
    // עדכון מצב כפתורי הניווט
    updateNavigationButtons();
    
    // עדכון מצב כפתור המועדפים
    updateFavoriteButton();
    
    // אנימציה קטנה של הקלף
    const card = document.getElementById('current-card');
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
}

// פונקציה לעדכון מצב כפתורי הניווט
function updateNavigationButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    
    // אם אנחנו בקלף הראשון, כפתור "הקודם" לא פעיל
    prevButton.disabled = currentCardIndex === 0;
    prevButton.style.opacity = currentCardIndex === 0 ? "0.5" : "1";
    
    // אם אנחנו בקלף האחרון, כפתור "הבא" לא פעיל
    nextButton.disabled = currentCardIndex === cardFiles.length - 1;
    nextButton.style.opacity = currentCardIndex === cardFiles.length - 1 ? "0.5" : "1";
}

// פונקציה לעדכון מצב כפתור המועדפים
function updateFavoriteButton() {
    const favoriteButton = document.getElementById('favorite-button');
    if (favoriteButton) {
        // בדיקה אם הקלף הנוכחי הוא מועדף
        const isFavorite = favoriteCards.includes(currentCardIndex);
        
        // עדכון סגנון הכפתור
        if (isFavorite) {
            favoriteButton.innerHTML = '❤️ הסר ממועדפים';
            favoriteButton.classList.add('favorite-active');
        } else {
            favoriteButton.innerHTML = '🤍 הוסף למועדפים';
            favoriteButton.classList.remove('favorite-active');
        }
    }
}

// פונקציה למעבר לקלף הקודם
function prevCard() {
    if (currentCardIndex > 0) {
        showCard(currentCardIndex - 1);
    }
}

// פונקציה למעבר לקלף הבא
function nextCard() {
    if (currentCardIndex < cardFiles.length - 1) {
        // שמירת הקלף הנוכחי בהיסטוריה
        cardHistoryStack.push(currentCardIndex);
        
        showCard(currentCardIndex + 1);
    }
}

// פונקציה להצגת קלף אקראי
function randomCard() {
    // שמירת הקלף הנוכחי בהיסטוריה
    cardHistoryStack.push(currentCardIndex);
    
    // בחירת קלף אקראי שאינו הקלף הנוכחי
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * cardFiles.length);
    } while (randomIndex === currentCardIndex);
    
    showCard(randomIndex);
}

// פונקציה להוספה/הסרה של קלף למועדפים
function toggleFavorite() {
    const index = favoriteCards.indexOf(currentCardIndex);
    
    if (index === -1) {
        // הקלף לא נמצא במועדפים - הוספה
        favoriteCards.push(currentCardIndex);
        showMessage('הקלף נוסף למועדפים!');
    } else {
        // הקלף כבר במועדפים - הסרה
        favoriteCards.splice(index, 1);
        showMessage('הקלף הוסר מהמועדפים');
    }
    
    // עדכון כפתור המועדפים
    updateFavoriteButton();
    
    // שמירת המועדפים
    localStorage.setItem('favoriteCards', JSON.stringify(favoriteCards));
}

// פונקציה להצגת קלף מועדף אקראי
function showRandomFavorite() {
    if (favoriteCards.length === 0) {
        showMessage('אין קלפים מועדפים עדיין');
        return;
    }
    
    // בחירת קלף אקראי מהמועדפים
    const randomIndex = Math.floor(Math.random() * favoriteCards.length);
    const cardIndex = favoriteCards[randomIndex];
    
    // הצגת הקלף
    showCard(cardIndex);
    showMessage('קלף מועדף אקראי');
}

// פונקציה להצגת הודעה זמנית
function showMessage(message) {
    // בדיקה אם יש כבר אלמנט להודעה
    let messageElement = document.getElementById('message-popup');
    
    if (messageElement) {
        // הצגת ההודעה
        messageElement.textContent = message;
        messageElement.style.display = 'block';
        messageElement.style.opacity = '1';
        
        // הסתרת ההודעה אחרי 2 שניות
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 500);
        }, 2000);
    }
} 