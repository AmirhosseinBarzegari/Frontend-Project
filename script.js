const text_input = document.querySelector('.box_text input');
const charNum = document.querySelector('.box_char_num');
const wordNum = document.querySelector('.box_word_num');
const tweetNum = document.querySelector('.box_tweeter_num');
const fbNum = document.querySelector('.box_facebook_num');

function update(){
    const text = text_input.value;

    let ch_num = text.length;
    let wo_num =  text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    const tweetCount = Math.ceil(ch_num / 280);
    const fbCount = Math.ceil(ch_num / 5000);

    charNum.textContent = ch_num;
    wordNum.textContent = wo_num;
    tweetNum.textContent = tweetCount;
    fbNum.textContent = fbCount;
}

text_input.addEventListener('input',update);

update();