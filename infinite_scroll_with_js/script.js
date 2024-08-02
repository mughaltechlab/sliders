// right now we have one but may be in future we made more scroller so thats how we think and make it to get by querySelectorAll
const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scrollers.forEach(scroller=>{
        scroller.setAttribute('data-animated', true);

        const scrollerInner = document.querySelector('.scroller__inner');
        const scrollerInnContent = Array.from(scrollerInner.children);

        scrollerInnContent.forEach(item=>{
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
            console.log(duplicatedItem);
        })

    })
}
