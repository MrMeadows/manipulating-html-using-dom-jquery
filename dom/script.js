window.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement('button');
    let btn2 = document.createElement('button');
    let btn3 = document.createElement('button');
    let btn4 = document.createElement('button');
    let btnText = document.createTextNode('Activate Magic');
    let btnText2 = document.createTextNode('Display Input');
    let btnText3 = document.createTextNode('Invoke Name');
    let btnText4 = document.createTextNode('Invoke Friend');
    let textInput = document.createElement('input');
    let addAudio = document.createElement('audio');
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let p = document.createElement('p');
    let paragraph = document.createTextNode('boogie woogie');
    let friendsList = ['Bob', 'Bill', 'Ted', 'Tom', 'Eric', 'Derek', 'Liliana', 'Chris Bethelhemsworth', 'Aragorn\, Son of Arathorn\, heir to the Throne of Isildur\, and the True King of Gondor', 'Junkyard Steve']
    let ul = document.createElement('ul');
    let i = 0;

    document.body.appendChild(addAudio);
    document.body.appendChild(btn);
    document.body.appendChild(textInput);
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
    document.body.appendChild(btn4);
    document.body.appendChild(div);
    document.body.appendChild(div2);
    document.body.appendChild(div3);
    btn.appendChild(btnText);
    btn2.appendChild(btnText2);
    btn3.appendChild(btnText3);
    btn4.appendChild(btnText4);
    div.appendChild(p);
    p.appendChild(paragraph);
    div3.appendChild(ul);

    addAudio.src = 'lumos.m4a';
    addAudio.id = 'audio';

    textInput.type = 'text';
    textInput.id = 'userInput';
    div.style.width = '100vw';
    div.style.height = '300px';
    div2.style.width = '100vw';
    div2.style.height = '300px';
    div3.style.width = '100vw';
    div3.style.height = '300px';
    p.style.fontSize = '2em';

    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

    btn.addEventListener('click', function() {
        alert('Happiness can be found in the darkest of times, if one only remembers to turn on the light...');
        addAudio.play();
    });

    btn2.addEventListener('click', function() {
        let userInput = document.getElementById('userInput').value;
        alert(userInput);
    });

    div.addEventListener('mouseenter', function() {
        div.style.backgroundColor = randomColor();
    });

    div.addEventListener('mouseleave', function() {
        div.style.backgroundColor = "";
    });

    p.addEventListener('click', function() {
        p.style.color = randomColor();
    })

    btn3.addEventListener('click', function() {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Sebastian');
        div2.appendChild(span);
        span.appendChild(spanText);        
    })

    btn4.addEventListener('click', function () {
        let li = document.createElement('li');
        let friend = document.createTextNode(friendsList[i]);
        ul.appendChild(li);
        li.appendChild(friend);
        if (i < friendsList.length - 1) {
            i++
        } else {
            i = 0;
        }
    })
});