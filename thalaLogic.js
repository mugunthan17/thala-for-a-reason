
function check() {
    var reason = document.getElementById("reason").value;
    var text = document.getElementById("entered-txt");
    var nothing = document.getElementById("reason-nil");
    var reasoning = document.getElementById("reasoning");
    var thalaReason = document.querySelector('.reason-thala');
    var noreason = document.querySelector('.reason-nothing');
    var song = new Audio("thala song.mp3")
    if (!isNaN(reason)) {
        var digits = reason.split('').map(Number);
        var sum = reason.split('').reduce(function (acc, digit) {
            return acc + parseInt(digit, 10);
        }, 0);
        if (sum == 7) {
            noreason.style.display = 'none';
            text.innerText = reason;
            reasoning.innerText = digits.join(' + ') + ' = ' + sum;
            thalaReason.style.display = 'block';
            song.play();
        }
        else {
            thalaReason.style.display = 'none';
            nothing.innerText = reason + " has no reason....";
            noreason.style.display = 'block';
        }
    }
    else {
        txtLength = reason.replace(/\s/g, '').split('').length;
        if (txtLength == 7) {
            noreason.style.display = 'none';
            text.innerText = reason;
            var characters = reason.replace(/\s/g, '').split('');
            var result = characters.join('+');
            reasoning.innerHTML = result + '=' + txtLength;
            thalaReason.style.display = 'block';
            song.play();
        }
        else {
            thalaReason.style.display = 'none';
            nothing.innerText = reason + " has no reason....";
            noreason.style.display = 'block';
        }
    }
}

