function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e) {
    let target, elParent, elGrandparent;
    target = getTarget(e);
    console.log(target);
    elParent = target.parentNode;
    console.log(elParent);
    elGrandparent = target.parentNode.parentNode;
    console.log(elGrandparent);
    elGrandparent.removeChild(elParent);
    

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

let el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function (e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function (e) {
        itemDone(e);
    });
}