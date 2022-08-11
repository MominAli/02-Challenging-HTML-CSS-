const getBlur = document.querySelectorAll('.blur');
const bluriing = document.getElementsByClassName('wrap');
const eleP = document.querySelectorAll('.profile');


function click(you){
    for (let i = 0; i < bluriing.length; i++) {
        bluriing[i].style.filter = you;
    }
}

 getBlur.forEach(e => {
    e.addEventListener('mouseover', f => {
        let event = f.target;
        click('blur(5px)');
        event.style.filter = 'none';
        if (event == '[object HTMLHeadingElement]' || event == '[object HTMLDivElement]' || event == '[object HTMLParagraphElement]') {
         event.parentElement.style.filter = 'none';
        }
    })
    e.addEventListener('mouseout', f => {
        click('none');
    })
});

eleP.forEach(e => {
    e.addEventListener('mouseover', f => {
        setTimeout(() => {
            let event = f.target;
        let parents = event.parentElement;
        click('blur(5px)');
        parents.style.filter = 'none';
        if (event == '[object HTMLParagraphElement]' ) {
            parents.parentElement.parentElement.style.filter = 'none';
        }
        if (event == '[object HTMLDivElement]') {
            parents.parentElement.style.filter = 'none';
        }
        if (event == '[object HTMLImageElement]') {
            parents.parentElement.style.filter = 'none';
        }
        }, 1)
    });
})