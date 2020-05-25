'use strict';

{
    const words = [
        
        'hoguraida-',
        'supa-ki-',
        'sannjyuusi',
        'aisusupiritto',
        'sukeruton',
        'aisugo-remu',
        'ulo-rubureika-',
        'koumorinomure',
        'faiasupiritto',
        'yarigoburin',
        'goburin',
        'erikusa-go-remu',
        'hukiyagoburin',
        'megaga-goiru',
        'roiyarugo-suto',
        'asasinyu-no',
        'dhiga-',
        'purinnsesu',  
        'bonnba-',
        'naito',
        'minipekka',
        'masukettojyuusi',
        'jyaiannto',
        'purinnsu',
        'bebi-doragonn',
        'nekuromannsa-',
        'barukiri-',
        'ba-bariann',
        'da-kunekuro',
        'meganaito',
        'tesura',
        'boseki',
        'raitoninngu',
        'roketto',
        'ro-rinnguuddo',
        'hi-ru',
        'torune-do',
        'a-sukueiku',
        'zappu',
        'reiji',
        'yanoame',
        'hakugekihou',


       
    ];
    
    
    let word ;
    let loc ;
    let score ;
    let miss; 
    
    
        
    
    
   


    const timeLimit = 30 * 1000;
    let startTime;
    let isPlaying = false;

    const target = document.getElementById('target');
    const scoreLabel = document.getElementById('score');
    const missLabel = document.getElementById('miss');
    const timerLabel = document.getElementById('timer');
 
    function nextletter() {
        let placeholder = '';
        for (let i = 0; i < loc; i++){
            placeholder += '_';
        }
        target.textContent = placeholder + word.substring(loc);
    }

    function updateTimer() {
        const timeLeft = startTime + timeLimit - Date.now();
        timerLabel.textContent = (timeLeft / 1000).toFixed(2);

       const timeoutId = setTimeout(() => {
           
           updateTimer();
        }, 10);

        if (timeLeft < 0) {
            isPlaying = false;
            clearTimeout(timeoutId);
            timerLabel.textContent = '0.00';
            setTimeout(() => {

                showResult();
            }, 100);

            target.textContent = 'クリックでもう一回';
       }
    }

    function showResult() {
        const accuracy = score / (score + miss) * 100;
        alert(`${score} 入力文字数, ${miss} ミス回数, ${accuracy.toFixed(2)}% 正しく打てた率`)
    }

    



    window.addEventListener('click', () => {
        if (isPlaying === true) {
            return;
        }

        isPlaying = true;

        loc = 0;
        score = 0;
        miss = 0;
        scoreLabel.textContent = score;
        missLabel.textContent = miss;
        
        word =  words[Math.floor(Math.random() * words.length)];


        target.textContent = word;
        startTime = Date.now();
        updateTimer();
    });

        
    window.addEventListener('keydown', (e) => {
        if (isPlaying !== true) {
            return;
        }

        if (e.key === word[loc]) {   
            loc++
            if (loc === word.length) {
               word = words[Math.floor(Math.random() * words.length)];
                loc = 0;


            }
            nextletter();
            score++;
            scoreLabel.textContent = score;
        } else {          
            miss++
            missLabel.textContent = miss;

        }

    });
}
