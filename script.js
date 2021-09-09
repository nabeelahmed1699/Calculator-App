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

equalBtn.addEventListener('click', execute);

var str = ''

function calc(event) {
    let value = event.currentTarget.innerText;
    if (value !== '=' && value !== 'C' && value !== '') {
        str += value;
        history.innerText = str;
    } else if (value === 'C' && value !== '') {

        history.innerText = result.innerText;
        str = '';
        result.innerText = 0;
        return;
    } else if (value === '') {
        str = str.substring(0, str.length - 1);

        history.innerText = str.length === 0 ? 0 : str;
    }

}

function execute() {
    let ans = '';
    if (str[0] === '√') {
        ans = str.substring(1);
        ans = String(Math.sqrt(ans));
        result.innerText = ans;
        str = ''
        return;
    }
    ans = String(eval(str));
    result.innerText = ans;
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