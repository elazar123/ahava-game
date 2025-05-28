// נתונים של הקלפים (מספרי הקלפים והתמונות שלהם)
const cardData = [
    { number: 1, frontImage: '6.png', backImage: '7.png', cardName: 'קלף 1' },
    { number: 2, frontImage: '8.png', backImage: '9.png', cardName: 'קלף 2' },
    { number: 3, frontImage: '10.png', backImage: '11.png', cardName: 'קלף 3' },
    { number: 4, frontImage: '12.png', backImage: '13.png', cardName: 'קלף 4' },
    { number: 5, frontImage: '14.png', backImage: '15.png', cardName: 'קלף 5' },
    { number: 6, frontImage: '16.png', backImage: '17.png', cardName: 'קלף 6' },
    { number: 7, frontImage: '18.png', backImage: '19.png', cardName: 'קלף 7' },
    { number: 8, frontImage: '20.png', backImage: '21.png', cardName: 'קלף 8' },
    { number: 9, frontImage: '22.png', backImage: '23.png', cardName: 'קלף 9' },
    { number: 10, frontImage: '24.png', backImage: '25.png', cardName: 'קלף 10' },
    { number: 11, frontImage: '26.png', backImage: '27.png', cardName: 'קלף 11' },
    { number: 12, frontImage: '28.png', backImage: '29.png', cardName: 'קלף 12' },
    { number: 13, frontImage: '30.png', backImage: '31.png', cardName: 'קלף 13' },
    { number: 14, frontImage: '32.png', backImage: '33.png', cardName: 'קלף 14' },
    { number: 15, frontImage: '34.png', backImage: '35.png', cardName: 'קלף 15' },
    { number: 16, frontImage: '36.png', backImage: '37.png', cardName: 'קלף 16' },
    { number: 17, frontImage: '38.png', backImage: '39.png', cardName: 'קלף 17' },
    { number: 18, frontImage: '40.png', backImage: '41.png', cardName: 'קלף 18' },
    { number: 19, frontImage: '42.png', backImage: '43.png', cardName: 'קלף 19' },
    { number: 20, frontImage: '44.png', backImage: '45.png', cardName: 'קלף 20' },
    { number: 21, frontImage: '46.png', backImage: '47.png', cardName: 'קלף 21' },
    { number: 22, frontImage: '48.png', backImage: '49.png', cardName: 'קלף 22' },
    { number: 23, frontImage: '50.png', backImage: '51.png', cardName: 'קלף 23' },
    { number: 24, frontImage: '52.png', backImage: '53.png', cardName: 'קלף 24' },
    { number: 25, frontImage: '54.png', backImage: '55.png', cardName: 'קלף 25' },
    { number: 26, frontImage: '56.png', backImage: '57.png', cardName: 'קלף 26' },
    { number: 27, frontImage: '58.png', backImage: '59.png', cardName: 'קלף 27' },
    { number: 28, frontImage: '60.png', backImage: '61.png', cardName: 'קלף 28' },
    { number: 29, frontImage: '62.png', backImage: '63.png', cardName: 'קלף 29' },
    { number: 30, frontImage: '64.png', backImage: '65.png', cardName: 'קלף 30' },
    { number: 31, frontImage: '66.png', backImage: '67.png', cardName: 'קלף 31' },
    { number: 32, frontImage: '68.png', backImage: '69.png', cardName: 'קלף 32' },
    { number: 33, frontImage: '70.png', backImage: '71.png', cardName: 'קלף 33' },
    { number: 34, frontImage: '72.png', backImage: '73.png', cardName: 'קלף 34' },
    { number: 35, frontImage: '74.png', backImage: '75.png', cardName: 'קלף 35' },
    { number: 36, frontImage: '76.png', backImage: '77.png', cardName: 'קלף 36' },
    { number: 37, frontImage: '78.png', backImage: '79.png', cardName: 'קלף 37' },
    { number: 38, frontImage: '80.png', backImage: '81.png', cardName: 'קלף 38' },
    { number: 39, frontImage: '82.png', backImage: '83.png', cardName: 'קלף 39' },
    { number: 40, frontImage: '84.png', backImage: '85.png', cardName: 'קלף 40' },
    { number: 41, frontImage: '86.png', backImage: '87.png', cardName: 'קלף 41' },
    { number: 42, frontImage: '88.png', backImage: '89.png', cardName: 'קלף 42' },
    { number: 43, frontImage: '90.png', backImage: '91.png', cardName: 'קלף 43' },
    { number: 44, frontImage: '92.png', backImage: '93.png', cardName: 'קלף 44' },
    { number: 45, frontImage: '94.png', backImage: '95.png', cardName: 'קלף 45' },
    { number: 46, frontImage: '96.png', backImage: '97.png', cardName: 'קלף 46' },
    { number: 47, frontImage: '98.png', backImage: '99.png', cardName: 'קלף 47' },
    { number: 48, frontImage: '100.png', backImage: '101.png', cardName: 'קלף 48' },
    { number: 49, frontImage: '102.png', backImage: '103.png', cardName: 'קלף 49' },
    { number: 50, frontImage: '104.png', backImage: '105.png', cardName: 'קלף 50' },
    { number: 51, frontImage: '106.png', backImage: '107.png', cardName: 'קלף 51' },
    { number: 52, frontImage: '108.png', backImage: '109.png', cardName: 'קלף 52' },
    { number: 53, frontImage: '110.png', backImage: '111.png', cardName: 'קלף 53' },
    { number: 54, frontImage: '112.png', backImage: '113.png', cardName: 'קלף 54' },
    { number: 55, frontImage: '114.png', backImage: '115.png', cardName: 'קלף 55' },
    { number: 56, frontImage: '116.png', backImage: '117.png', cardName: 'קלף 56' },
    { number: 57, frontImage: '118.png', backImage: '119.png', cardName: 'קלף 57' },
    { number: 58, frontImage: '120.png', backImage: '121.png', cardName: 'קלף 58' },
    { number: 59, frontImage: '122.png', backImage: '123.png', cardName: 'קלף 59' },
    { number: 60, frontImage: '124.png', backImage: '125.png', cardName: 'קלף 60' },
    { number: 61, frontImage: '126.png', backImage: '127.png', cardName: 'קלף 61' },
    { number: 62, frontImage: '128.png', backImage: '129.png', cardName: 'קלף 62' },
    { number: 63, frontImage: '130.png', backImage: '131.png', cardName: 'קלף 63' },
    { number: 64, frontImage: '132.png', backImage: '133.png', cardName: 'קלף 64' },
    { number: 65, frontImage: '134.png', backImage: '135.png', cardName: 'קלף 65' },
    { number: 66, frontImage: '136.png', backImage: '137.png', cardName: 'קלף 66' },
    { number: 67, frontImage: '138.png', backImage: '139.png', cardName: 'קלף 67' },
    { number: 68, frontImage: '140.png', backImage: '141.png', cardName: 'קלף 68' },
    { number: 69, frontImage: '142.png', backImage: '143.png', cardName: 'קלף 69' },
    { number: 70, frontImage: '144.png', backImage: '145.png', cardName: 'קלף 70' },
    { number: 71, frontImage: '146.png', backImage: '147.png', cardName: 'קלף 71' },
    { number: 72, frontImage: '148.png', backImage: '149.png', cardName: 'קלף 72' },
    { number: 73, frontImage: '150.png', backImage: '151.png', cardName: 'קלף 73' },
    { number: 74, frontImage: '152.png', backImage: '153.png', cardName: 'קלף 74' },
    { number: 75, frontImage: '154.png', backImage: '155.png', cardName: 'קלף 75' },
    { number: 76, frontImage: '156.png', backImage: '157.png', cardName: 'קלף 76' },
    { number: 77, frontImage: '158.png', backImage: '159.png', cardName: 'קלף 77' },
    { number: 78, frontImage: '160.png', backImage: '161.png', cardName: 'קלף 78' },
    { number: 79, frontImage: '162.png', backImage: '163.png', cardName: 'קלף 79' },
    { number: 80, frontImage: '164.png', backImage: '165.png', cardName: 'קלף 80' },
    { number: 81, frontImage: '166.png', backImage: '167.png', cardName: 'קלף 81' },
    { number: 82, frontImage: '168.png', backImage: '169.png', cardName: 'קלף 82' },
    { number: 83, frontImage: '170.png', backImage: '171.png', cardName: 'קלף 83' },
    { number: 84, frontImage: '172.png', backImage: '173.png', cardName: 'קלף 84' },
    { number: 85, frontImage: '174.png', backImage: '175.png', cardName: 'קלף 85' },
    { number: 86, frontImage: '176.png', backImage: '177.png', cardName: 'קלף 86' },
    { number: 87, frontImage: '178.png', backImage: '179.png', cardName: 'קלף 87' },
    { number: 88, frontImage: '180.png', backImage: '181.png', cardName: 'קלף 88' },
    { number: 89, frontImage: '182.png', backImage: '183.png', cardName: 'קלף 89' },
    { number: 90, frontImage: '184.png', backImage: '185.png', cardName: 'קלף 90' },
    { number: 91, frontImage: '186.png', backImage: '187.png', cardName: 'קלף 91' },
    { number: 92, frontImage: '188.png', backImage: '189.png', cardName: 'קלף 92' },
    { number: 93, frontImage: '190.png', backImage: '191.png', cardName: 'קלף 93' },
    { number: 94, frontImage: '192.png', backImage: '193.png', cardName: 'קלף 94' },
    { number: 95, frontImage: '194.png', backImage: '195.png', cardName: 'קלף 95' },
    { number: 96, frontImage: '196.png', backImage: '197.png', cardName: 'קלף 96' },
    { number: 97, frontImage: '198.png', backImage: '199.png', cardName: 'קלף 97' },
    { number: 98, frontImage: '200.png', backImage: '201.png', cardName: 'קלף 98' },
    { number: 99, frontImage: '202.png', backImage: '203.png', cardName: 'קלף 99' },
    { number: 100, frontImage: '204.png', backImage: '205.png', cardName: 'קלף 100' },
    { number: 101, frontImage: '206.png', backImage: '207.png', cardName: 'קלף 101' },
    { number: 102, frontImage: '208.png', backImage: '209.png', cardName: 'קלף 102' },
    { number: 103, frontImage: '210.png', backImage: '211.png', cardName: 'קלף 103' },
    { number: 104, frontImage: '212.png', backImage: '213.png', cardName: 'קלף 104' },
    { number: 105, frontImage: '214.png', backImage: '215.png', cardName: 'קלף 105' },
    { number: 106, frontImage: '216.png', backImage: '217.png', cardName: 'קלף 106' },
    { number: 107, frontImage: '218.png', backImage: '219.png', cardName: 'קלף 107' },
    { number: 108, frontImage: '220.png', backImage: '221.png', cardName: 'קלף 108' },
    { number: 109, frontImage: '222.png', backImage: '223.png', cardName: 'קלף 109' },
    { number: 110, frontImage: '224.png', backImage: '225.png', cardName: 'קלף 110' },
    { number: 111, frontImage: '226.png', backImage: '227.png', cardName: 'קלף 111' },
    { number: 112, frontImage: '228.png', backImage: '229.png', cardName: 'קלף 112' },
    { number: 113, frontImage: '230.png', backImage: '231.png', cardName: 'קלף 113' },
    { number: 114, frontImage: '232.png', backImage: '233.png', cardName: 'קלף 114' },
    { number: 115, frontImage: '234.png', backImage: '235.png', cardName: 'קלף 115' },
    { number: 116, frontImage: '236.png', backImage: '237.png', cardName: 'קלף 116' },
    { number: 117, frontImage: '238.png', backImage: '239.png', cardName: 'קלף 117' },
    { number: 118, frontImage: '240.png', backImage: '241.png', cardName: 'קלף 118' },
    { number: 119, frontImage: '242.png', backImage: '243.png', cardName: 'קלף 119' },
    { number: 120, frontImage: '244.png', backImage: '245.png', cardName: 'קלף 120' },
    { number: 121, frontImage: '246.png', backImage: '247.png', cardName: 'קלף 121' },
    { number: 122, frontImage: '248.png', backImage: '249.png', cardName: 'קלף 122' },
    { number: 123, frontImage: '250.png', backImage: '251.png', cardName: 'קלף 123' },
    { number: 124, frontImage: '252.png', backImage: '253.png', cardName: 'קלף 124' },
    { number: 125, frontImage: '254.png', backImage: '255.png', cardName: 'קלף 125' },
    { number: 126, frontImage: '256.png', backImage: '257.png', cardName: 'קלף 126' },
    { number: 127, frontImage: '258.png', backImage: '259.png', cardName: 'קלף 127' },
    { number: 128, frontImage: '260.png', backImage: '261.png', cardName: 'קלף 128' },
    { number: 129, frontImage: '262.png', backImage: '263.png', cardName: 'קלף 129' },
    { number: 130, frontImage: '264.png', backImage: '265.png', cardName: 'קלף 130' },
    { number: 131, frontImage: '266.png', backImage: '267.png', cardName: 'קלף 131' },
    { number: 132, frontImage: '268.png', backImage: '269.png', cardName: 'קלף 132' },
    { number: 133, frontImage: '270.png', backImage: '271.png', cardName: 'קלף 133' },
    { number: 134, frontImage: '272.png', backImage: '273.png', cardName: 'קלף 134' },
    { number: 135, frontImage: '274.png', backImage: '275.png', cardName: 'קלף 135' },
    { number: 136, frontImage: '276.png', backImage: '277.png', cardName: 'קלף 136' },
    { number: 137, frontImage: '278.png', backImage: '279.png', cardName: 'קלף 137' },
    { number: 138, frontImage: '280.png', backImage: '281.png', cardName: 'קלף 138' },
    { number: 139, frontImage: '282.png', backImage: '283.png', cardName: 'קלף 139' },
    { number: 140, frontImage: '284.png', backImage: '285.png', cardName: 'קלף 140' },
    { number: 141, frontImage: '286.png', backImage: '287.png', cardName: 'קלף 141' },
    { number: 142, frontImage: '288.png', backImage: '289.png', cardName: 'קלף 142' },
    { number: 143, frontImage: '290.png', backImage: '291.png', cardName: 'קלף 143' },
    { number: 144, frontImage: '292.png', backImage: '293.png', cardName: 'קלף 144' },
    { number: 145, frontImage: '294.png', backImage: '295.png', cardName: 'קלף 145' },
    { number: 146, frontImage: '296.png', backImage: '297.png', cardName: 'קלף 146' },
    { number: 147, frontImage: '298.png', backImage: '299.png', cardName: 'קלף 147' },
    { number: 148, frontImage: '300.png', backImage: '301.png', cardName: 'קלף 148' },
    { number: 149, frontImage: '302.png', backImage: '303.png', cardName: 'קלף 149' },
    { number: 150, frontImage: '304.png', backImage: '305.png', cardName: 'קלף 150' }
];

// יצירת סדר אקראי של הקלפים
let shuffledCards = [...cardData];
let currentCardIndex = 0;
let isCardFlipped = false;
let usedCards = [];
let currentIntroCardIndex = 0;
const totalIntroCards = 4;
let selectedCardNumber = null;

// פונקציה לאתחול המשחק
document.addEventListener('DOMContentLoaded', function() {
    // הוספת מאזין לאירועי מקלדת
    document.addEventListener('keydown', handleKeyPress);
    
    // ערבוב הקלפים
    shuffleCards();
    
    // הגדרת אירועי לחיצה על נקודות הניווט בהקדמה
    setupIntroDots();
    
    // אוטומטית למסך מלא בטעינה
    requestFullscreenOnLoad();
    
    // הגדרת אירוע לחיצה על שכבת הכיסוי
    document.getElementById('menu-overlay').addEventListener('click', function(event) {
        // עצירת התפשטות האירוע כדי למנוע לחיצות כפולות
        event.stopPropagation();
        toggleSideMenu();
    });
    
    // הגדרת אירוע לכפתור התפריט
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleSideMenu();
        });
    }
    
    // הגדרת אירוע לכפתור סגירת התפריט
    const closeMenuButton = document.querySelector('.close-menu-button');
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleSideMenu();
        });
    }
    
    // הגדרת אירוע לחיפוש בתפריט
    const searchInput = document.getElementById('card-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterCardList(this.value);
        });
    }
    
    // הגדרת אירוע לשינוי גודל החלון
    window.addEventListener('resize', handleResize);
});

// פונקציה להגדרת אירועי לחיצה על נקודות הניווט בהקדמה
function setupIntroDots() {
    const dots = document.querySelectorAll('.intro-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            showIntroCard(index);
        });
    });
}

// פונקציה להצגת קלף הקדמה ספציפי לפי האינדקס
function showIntroCard(index) {
    console.log('Showing intro card', index);
    if (index < 0 || index >= totalIntroCards) return;
    
    // הסרת הקלאס active מכל הקלפים והנקודות
    document.querySelectorAll('.intro-card').forEach(card => {
        card.style.display = 'none';
        card.classList.remove('active');
    });
    document.querySelectorAll('.intro-dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    // הצגת הקלף הנוכחי
    const currentCard = document.querySelector(`.intro-card[data-card-index="${index}"]`);
    if (currentCard) {
        currentCard.style.display = 'flex';
        currentCard.classList.add('active');
    } else {
        console.error('Could not find intro card with index', index);
    }
    
    // סימון הנקודה המתאימה כפעילה
    const dot = document.querySelector(`.intro-dot[data-index="${index}"]`);
    if (dot) {
        dot.classList.add('active');
    } else {
        console.error('Could not find intro dot with index', index);
    }
    
    // עדכון אינדקס הקלף הנוכחי
    currentIntroCardIndex = index;
    
    // הצגת כפתור "התחל לשחק" רק בקלף האחרון
    const startGameContainer = document.getElementById('start-game-container');
    if (startGameContainer) {
        if (index === totalIntroCards - 1) {
            console.log('Showing start game button');
            startGameContainer.style.display = 'flex';
        } else {
            startGameContainer.style.display = 'none';
        }
    } else {
        console.error('start-game-container element not found');
    }
    
    // עדכון מצב כפתור "הבא"
    updateNextIntroButton();
}

// פונקציה לעדכון מצב כפתור "הבא" בקלפי ההקדמה
function updateNextIntroButton() {
    const nextButton = document.getElementById('next-intro-button');
    if (currentIntroCardIndex === totalIntroCards - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'flex';
    }
}

// פונקציה למעבר לקלף ההקדמה הבא
function nextIntroCard() {
    showIntroCard(currentIntroCardIndex + 1);
}

// פונקציה למעבר למסך מלא בטעינה
function requestFullscreenOnLoad() {
    // מעבר אוטומטי למסך מלא לאחר טעינה
    setTimeout(() => {
        if (!document.fullscreenElement && 
            (document.fullscreenEnabled || 
            document.webkitFullscreenEnabled || 
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled)) {
            
            toggleFullscreen();
            
            // וידוא מעבר למסך מלא (גיבוי)
            setTimeout(() => {
                if (!document.fullscreenElement) {
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen();
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                    document.querySelector('html').classList.add('fullscreen-active');
                }
            }, 300);
        }
    }, 500);
    
    // אם היתה שגיאה במעבר למסך מלא, נסה שוב בלחיצה על המסך
    document.addEventListener('click', function fullscreenOnClick() {
        if (!document.fullscreenElement &&
            (document.fullscreenEnabled || 
            document.webkitFullscreenEnabled || 
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled)) {
            
            toggleFullscreen();
            document.removeEventListener('click', fullscreenOnClick);
        }
    }, { once: true });
}

// פונקציה לערבוב הקלפים
function shuffleCards() {
    shuffledCards = [...cardData];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
}

// פונקציה לטיפול באירועי מקלדת
function handleKeyPress(event) {
    // אם במסך ההקדמה
    if (document.getElementById('intro-screen').style.display === 'flex') {
        switch(event.key) {
            case 'ArrowLeft':
                nextIntroCard();
                break;
            case 'ArrowRight':
                if (currentIntroCardIndex > 0) {
                    showIntroCard(currentIntroCardIndex - 1);
                }
                break;
            case 'Enter':
                if (currentIntroCardIndex === totalIntroCards - 1) {
                    showCards();
                } else {
                    nextIntroCard();
                }
                break;
            case 'Escape':
                backToWelcome();
                break;
        }
    }
    // אם במסך המשחק
    else if (document.getElementById('game-screen').style.display === 'flex') {
        switch(event.key) {
            case ' ':
                flipCard();
                break;
            case 'Enter':
            case 'ArrowLeft':
            case 'ArrowRight':
                nextRandomCard();
                break;
            case 'f':
            case 'F':
                toggleFullscreen();
                break;
            case 'm':
            case 'M':
                toggleSideMenu();
                break;
            case 'Escape':
                // אם התפריט פתוח, סגור אותו
                if (document.getElementById('side-menu').classList.contains('active')) {
                    toggleSideMenu();
                } else {
                    backToWelcome();
                }
                break;
        }
    }
}

// פונקציה להעברה למסך ההקדמה
function startGame() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('intro-screen').style.display = 'flex';
    
    // איפוס והצגת הקלף הראשון בהקדמה
    currentIntroCardIndex = 0;
    showIntroCard(0);
}

// פונקציה לחזרה למסך הפתיחה
function backToWelcome() {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'flex';
}

// פונקציה להעברה למסך המשחק
function showCards() {
    console.log('Showing cards screen - start');
    
    try {
        // הסתרת מסך ההקדמה והצגת מסך המשחק
        const introScreen = document.getElementById('intro-screen');
        const gameScreen = document.getElementById('game-screen');
        
        if (!introScreen) {
            console.error('intro-screen element not found');
        } else {
            introScreen.style.display = 'none';
        }
        
        if (!gameScreen) {
            console.error('game-screen element not found');
        } else {
            gameScreen.style.display = 'flex';
        }
        
        // איפוס הקלפים
        usedCards = [];
        shuffleCards();
        
        // איפוס התפריט
        resetSideMenu();
        
        // יצירת רשימת הקלפים בתפריט הצדדי
        createCardList();
        
        // הצגת קלף אקראי ראשון
        showRandomCard();
        
        console.log('Game screen is now visible');
    } catch (error) {
        console.error('Error showing cards screen:', error);
    }
}

// פונקציה לאיפוס התפריט
function resetSideMenu() {
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (sideMenu && menuOverlay) {
        // סגירת התפריט
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuOverlay.style.display = 'none';
        
        // איפוס מצב גלילה
        document.body.style.overflow = '';
    }
}

// פונקציה להצגת קלף אקראי
function showRandomCard() {
    // אם כל הקלפים כבר הוצגו, ערבב מחדש
    if (usedCards.length >= shuffledCards.length) {
        shuffleCards();
        usedCards = [];
    }
    
    // בחירת קלף אקראי שלא הוצג עדיין
    let randomCard;
    do {
        const randomIndex = Math.floor(Math.random() * shuffledCards.length);
        randomCard = shuffledCards[randomIndex];
    } while (usedCards.includes(randomCard.number));
    
    // הוספת הקלף לרשימת הקלפים שהוצגו
    usedCards.push(randomCard.number);
    
    // הצגת הקלף
    showCard(randomCard);
}

// פונקציה להצגת קלף ספציפי
function showCard(card) {
    // עדכון שם הקלף
    document.getElementById('card-number').textContent = card.cardName;
    
    // עדכון תמונות הקלף
    const frontImage = document.getElementById('card-front-image');
    const backImage = document.getElementById('card-back-image');
    
    frontImage.src = `compressed_images/${card.frontImage}`;
    backImage.src = `compressed_images/${card.backImage}`;
    
    // איפוס מצב הקלף (לא מהופך)
    isCardFlipped = false;
    const cardElement = document.getElementById('current-card');
    cardElement.classList.remove('flipped');
    
    // אנימציה קטנה של הקלף
    cardElement.style.animation = 'none';
    setTimeout(() => {
        cardElement.style.animation = 'floatCard 3s ease-in-out infinite';
    }, 10);
    
    // עדכון הקלף הנבחר בתפריט אם הוא פתוח
    if (document.getElementById('side-menu').classList.contains('active')) {
        highlightSelectedCard(card.number);
    }
}

// פונקציה להצגת הקלף האקראי הבא
function nextRandomCard() {
    showRandomCard();
}

// פונקציה להפיכת הקלף
function flipCard() {
    const card = document.getElementById('current-card');
    isCardFlipped = !isCardFlipped;
    
    if (isCardFlipped) {
        card.classList.add('flipped');
    } else {
        card.classList.remove('flipped');
    }
}

// פונקציה למעבר למסך מלא
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // מעבר למסך מלא
        const docElm = document.documentElement;
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullscreen) {
            docElm.webkitRequestFullscreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
        
        // שינוי האייקון של כפתור מסך מלא
        const fullscreenButtons = document.querySelectorAll('.fullscreen-toggle');
        fullscreenButtons.forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-compress';
            }
        });
        
        document.querySelector('html').classList.add('fullscreen-active');
        document.body.classList.add('fullscreen');
        
    } else {
        // יציאה ממסך מלא
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        // שינוי האייקון של כפתור מסך מלא
        const fullscreenButtons = document.querySelectorAll('.fullscreen-toggle');
        fullscreenButtons.forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-expand';
            }
        });
        
        document.querySelector('html').classList.remove('fullscreen-active');
        document.body.classList.remove('fullscreen');
    }
}

// מאזיני אירועים עבור מסך מלא
document.addEventListener('fullscreenchange', updateFullscreenStatus);
document.addEventListener('webkitfullscreenchange', updateFullscreenStatus);
document.addEventListener('mozfullscreenchange', updateFullscreenStatus);
document.addEventListener('MSFullscreenChange', updateFullscreenStatus);

// פונקציה לעדכון סטטוס מסך מלא
function updateFullscreenStatus() {
    const isFullscreen = document.fullscreenElement || 
                        document.webkitFullscreenElement || 
                        document.mozFullScreenElement ||
                        document.msFullscreenElement;
                        
    const fullscreenButtons = document.querySelectorAll('.fullscreen-toggle');
    fullscreenButtons.forEach(button => {
        const icon = button.querySelector('i');
        if (icon) {
            icon.className = isFullscreen ? 'fas fa-compress' : 'fas fa-expand';
        }
    });
    
    if (isFullscreen) {
        document.querySelector('html').classList.add('fullscreen-active');
        document.body.classList.add('fullscreen');
    } else {
        document.querySelector('html').classList.remove('fullscreen-active');
        document.body.classList.remove('fullscreen');
    }
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

// פונקציות לניהול התפריט הצדדי
function toggleSideMenu() {
    console.log('Toggle side menu called');
    
    const sideMenu = document.getElementById('side-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    
    if (!sideMenu || !menuOverlay) {
        console.error('Side menu or overlay not found');
        return;
    }
    
    if (sideMenu.classList.contains('active')) {
        // סגירת התפריט
        console.log('Closing menu');
        sideMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        
        // הסרת אירועי מגע למניעת גלילת רקע בזמן גלילת התפריט במובייל
        document.body.style.overflow = '';
        
        // הוספת השהייה קצרה לאנימציה של סגירת שכבת הכיסוי
        setTimeout(() => {
            menuOverlay.style.display = 'none';
        }, 300);
    } else {
        // פתיחת התפריט
        console.log('Opening menu');
        menuOverlay.style.display = 'block';
        
        // השהייה קצרה לאפשר לדפדפן לעדכן את התצוגה
        setTimeout(() => {
            sideMenu.classList.add('active');
            menuOverlay.classList.add('active');
            
            // נעילת גלילת רקע בזמן שהתפריט פתוח במובייל
            document.body.style.overflow = 'hidden';
        }, 10);
        
        // אם התפריט נפתח בפעם הראשונה, יצירת רשימת הקלפים
        if (!document.querySelector('.card-list-item')) {
            createCardList();
        }
        
        // סימון הקלף הנוכחי בתפריט אם יש כזה
        const currentCardNumber = getDisplayedCardNumber();
        if (currentCardNumber) {
            highlightSelectedCard(currentCardNumber);
            
            // גלילה אל הפריט המסומן בתפריט
            setTimeout(() => {
                const activeItem = document.querySelector('.card-list-item.active');
                if (activeItem) {
                    activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }
}

// פונקציה לקבלת מספר הקלף המוצג כעת
function getDisplayedCardNumber() {
    const cardNumberElement = document.getElementById('card-number');
    if (cardNumberElement) {
        const cardText = cardNumberElement.textContent;
        const matches = cardText.match(/\d+/);
        if (matches && matches.length > 0) {
            return parseInt(matches[0]);
        }
    }
    return null;
}

// פונקציה ליצירת רשימת הקלפים בתפריט
function createCardList() {
    console.log('Creating card list');
    const cardList = document.getElementById('card-list');
    if (!cardList) {
        console.error('card-list element not found');
        return;
    }
    
    cardList.innerHTML = '';
    console.log('Creating card list with', cardData.length, 'cards');
    
    try {
        // מיון הקלפים לפי מספר
        const sortedCards = [...cardData].sort((a, b) => a.number - b.number);
        
        // יצירת פריט ברשימה עבור כל קלף
        sortedCards.forEach((card, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'card-list-item';
            listItem.setAttribute('data-card-number', card.number);
            listItem.textContent = card.cardName;
            
            // הוספת אירוע לחיצה באופן ישיר
            listItem.onclick = function(event) {
                console.log('Card clicked:', card.number, card.cardName);
                event.preventDefault(); // מניעת ברירת מחדל
                event.stopPropagation(); // מניעת התפשטות האירוע
                
                // קריאה ישירה לפונקציות
                showCardByNumber(card.number);
                highlightSelectedCard(card.number);
                
                // סגירת התפריט במובייל, השארתו פתוח במסכים גדולים
                if (window.innerWidth <= 768) {
                    toggleSideMenu();
                }
                
                return false; // מניעת ברירת מחדל נוספת
            };
            
            // הוספת אירוע מגע למובייל
            listItem.addEventListener('touchstart', function(event) {
                console.log('Card touch started:', card.number);
                this.classList.add('active');
            }, { passive: true });
            
            listItem.addEventListener('touchend', function(event) {
                console.log('Card touch ended:', card.number);
                this.classList.remove('active');
                
                // טיפול מיוחד עבור מכשירי מגע
                event.preventDefault();
                
                // קריאה ישירה לפונקציות
                showCardByNumber(card.number);
                highlightSelectedCard(card.number);
                
                // סגירת התפריט במובייל
                if (window.innerWidth <= 768) {
                    toggleSideMenu();
                }
            });
            
            cardList.appendChild(listItem);
            
            // הוספת הודעת לוג לכל 50 קלפים
            if (index % 50 === 0) {
                console.log(`Added ${index} cards so far`);
            }
        });
        
        console.log('Card list created with', cardList.children.length, 'items');
    } catch (error) {
        console.error('Error creating card list:', error);
    }
}

// פונקציה להדגשת הקלף הנבחר בתפריט
function highlightSelectedCard(cardNumber) {
    // הסרת הדגשה מכל הפריטים
    document.querySelectorAll('.card-list-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // הדגשת הפריט הנבחר
    const selectedItem = document.querySelector(`.card-list-item[data-card-number="${cardNumber}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
        selectedCardNumber = cardNumber;
    }
}

// פונקציה להצגת קלף לפי מספר
function showCardByNumber(cardNumber) {
    console.log('Showing card by number:', cardNumber);
    const card = cardData.find(card => card.number === cardNumber);
    if (card) {
        console.log('Found card:', card.cardName);
        showCard(card);
    } else {
        console.error('Card not found with number:', cardNumber);
    }
}

// פונקציה לסינון רשימת הקלפים לפי טקסט חיפוש
function filterCardList(searchText) {
    const cardItems = document.querySelectorAll('.card-list-item');
    const normalizedSearchText = searchText.trim().toLowerCase();
    
    cardItems.forEach(item => {
        const cardName = item.textContent.toLowerCase();
        
        if (cardName.includes(normalizedSearchText) || normalizedSearchText === '') {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
    
    // אם לא נמצאו תוצאות, הצג הודעה
    const visibleItems = document.querySelectorAll('.card-list-item:not(.hidden)');
    const cardList = document.getElementById('card-list');
    
    // הסרת הודעת "אין תוצאות" אם קיימת
    const noResultsMessage = document.querySelector('.no-results-message');
    if (noResultsMessage) {
        noResultsMessage.remove();
    }
    
    // הוספת הודעת "אין תוצאות" אם אין תוצאות חיפוש
    if (visibleItems.length === 0 && normalizedSearchText !== '') {
        const noResults = document.createElement('li');
        noResults.className = 'no-results-message';
        noResults.textContent = 'לא נמצאו קלפים מתאימים';
        cardList.appendChild(noResults);
    }
}

// פונקציה לטיפול בשינוי גודל החלון
function handleResize() {
    // בדיקה אם נמצאים במסך המשחק
    if (document.getElementById('game-screen').style.display === 'flex') {
        // איפוס גלילת הדף בכל שינוי גודל
        document.body.style.overflow = '';
    }
} 