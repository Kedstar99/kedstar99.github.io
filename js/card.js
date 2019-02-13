var open_card = function(element) {
    var closest_reveal = element.parentElement.parentElement.parentElement.children[2]
    closest_reveal.style.height="100%"
}

var close_card = function(element) {
    var closest_reveal = element.parentElement.parentElement;
    closest_reveal.style.height="0px"
}

var elipsisArr = document.getElementsByClassName('show fa-ellipsis-v')
for (let elem of elipsisArr) {
    elem.onclick = open_card(elem)
}

var closeArr = document.getElementsByClassName('close')
for (let elem of elipsisArr) {
    elem.onclick = close_card(elem)
}