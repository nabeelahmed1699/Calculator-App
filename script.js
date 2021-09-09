// Selectora
const result = document.querySelector('.result');
const history = document.querySelector('.history');
const btns = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
// Social media icons
const facebook = document.querySelector('.facebook')
const pinterest = document.querySelector('.pinterest')
const twitter = document.querySelector('.twitter')
const whatsapp = document.querySelector('.whatsapp')
const linkedin = document.querySelector('.linkedin')
const reload = document.querySelector('.reload-quote')


btns.forEach(btn => btn.addEventListener('click', calc));
// if the user press equal btn
equalBtn.addEventListener('click', execute);

var str = ''

// function to check which buttons is clicked and then store the responding string in the 'str' 
function calc(event) {
    // getting the value of the btn user clicked
    let value = event.currentTarget.innerText;

    // check if the clicked btn is not = nor C neither backspace
    if (value !== '=' && value !== 'C' && value !== '') {

        str += value;
        history.innerText = str;
    } else if (value === 'C') { //if the user press C btn which means to clear
        // previous result goes to history 
        history.innerText = result.innerText === 'result' ? 0 : result.innerText; //checking if the user clear the field in the first run then it plcae instead of result text

        // clear the str
        str = '';
        // Also place zero in the result field
        result.innerText = 0;
        return;
    } else if (value === '') {
        str = str.substring(0, str.length - 1);

        history.innerText = str.length === 0 ? 0 : str;
    }

}

// function to evaluate the operation
function execute() {
    let ans = '';
    if (str[0] === '√') { //checking if the str contain sqr then calculating the sqr
        ans = str.substring(1);
        ans = String(Math.sqrt(ans));
        result.innerText = ans;
        // after displayed the result clearing the previous string
        str = ''
        return;
    } else if (str === '') {
        return;
    }
    ans = String(eval(str));
    result.innerText = ans;
    // after displayed the result clearing the previous string
    str = ''

}

// Function to share app on social media
(function socialShare() {
    let postText = `Hey! Check this cool Calculator app`

    let url = encodeURI(document.location.href);

    facebook.setAttribute('href', `https://www.facebook.com/sharer.php?u=${url}`);
    whatsapp.setAttribute('href', `https://api.whatsapp.com/send?text=${postText} ${url}`);
    linkedin.setAttribute('href', `https://www.linkedin.com/shareArticle?url=${url}&title=${postText}`);
    twitter.setAttribute('href', `https://twitter.com/share?url=${url}&text=${postText}&via=${'@nabeel_mufti'}&hashtags=[hashtags]`);
    pinterest.setAttribute('href', `https://pinterest.com/pin/create/bookmarklet/?url=${url}&description=${postText}`);
})();