$(document).ready(function () {
    let btn = '<button id="btn">Hot Dog!</button>'
    let btn2 = '<button id="btn2">Divert Resources to Communications Department</button>'
    let btn3 = '<button id="btn3">Invoke Name</button>'
    let btn4 = '<button id="btn4">Summon Friend</button>'
    let btn2TextBox = '<input type="text" id="btn2textbox" />';
    let div1 = '<div id="div1"></div>';
    let div2 = '<div id="div2"></div>';
    let p = '<p id="p">My eyes hath seen the glory and the coming of the lord.</p>';
    let ul = '<ul id="ul"></ul>';
    let friendsList = ['Bob', 'Bill', 'Ted', 'Tom', 'Eric', 'Derek', 'Liliana', 'Chris Bethelhemsworth', 'Aragorn\, Son of Arathorn\, heir to the Throne of Isildur\, and the True King of Gondor', 'Junkyard Steve'];
    let i = 0;

    $('body').append(btn);
    $('body').append(btn2);
    $('body').append(btn3);
    $('body').append(btn4);
    $('body').append(btn2TextBox);
    $('body').append(div1);
    $('body').append(div2);
    $('body').append(p);

    $('#div1').css({
        'background-color': 'black',
        'width': '100vw',
        'height': '100px'
    });

    $('#div2').css({
        'width': '100vw',
        'height': '100px'
    });

    function randomColor(){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    $('#btn').on('click', function () {
        alert('Are we a little teapot?');
    });

    $('#btn2').on('click', function () {
        alert($('#btn2TextBox').val());
    });

    $('#div1').on('mouseenter', function() {
        $(this).css('background-color', randomColor());
    })

    $('#div1').on('mouseout', function() {
        $(this).css('background-color', 'black');
    })

    $('#p').on('click', function() {
        $(this).css('color', randomColor());
    })

    $('#btn3').on('click', function() {
        let span = '<span>Sebastian </span>';
        $('#div2').append(span);
    })

    $('#btn4').on('click', function () {
        let li = '';
        li = '<li>' + friendsList[i] + '</li>';

        if (i < friendsList.length - 1) {
            i++;
        } else {
            i = 0
        }
        $('body').append(li);
    })

})