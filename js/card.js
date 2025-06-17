var open_card = function(element) {
    var closest_reveal = element.parentElement.parentElement.parentElement.children[2]
    closest_reveal.classList.remove('pop-out')
    closest_reveal.classList.add('pop-up')
}

var close_card = function(element) {
    var closest_reveal = element.parentElement.parentElement;
    closest_reveal.classList.remove('pop-up')
    closest_reveal.classList.add('pop-out')
}

var elipsisArr = document.getElementsByClassName('show fa-ellipsis-v')
for (let elem of elipsisArr) {
    elem.addEventListener('click',  function(e) {
        open_card(elem)
    }, false)
}

var closeArr = document.getElementsByClassName('close')
for (let elem of closeArr) {
    elem.addEventListener('click', function(e) {
        close_card(elem)
    }, false)
}