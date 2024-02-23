import { ScrollerProps } from ".";

export const registerEvent = async (id: string, props: ScrollerProps) => {
    let el = document.querySelector("#" + id);
    // let inViewport = false;
    while (!el) {
        await wait(500);
        el = document.querySelector("#" + id);
    }
    
    if (el != null) {
        let d: Element = el;
        document.addEventListener('wheel', (evt:WheelEvent) => {
            let deltaY = evt.deltaY;
            scrollhandle(evt,deltaY, props, d)
        }, { passive: false });
        var ts: number;
        document.addEventListener('touchstart', function (e) {
            console.log(e)
            ts = e.changedTouches[0].clientY;
        });
        document.addEventListener('touchmove', (evt:TouchEvent) => {
            var te = evt.changedTouches[0].clientY;
            let deltaY: number;
            if (ts > te) {
                deltaY = 100;
            } else {
                deltaY = -100;
            }
            scrollhandle(evt, deltaY, props, d)
        }, { passive: false });
    }

}

export const wait = (ms:number) => new Promise((resolve) => {
    setTimeout(() => { resolve(0); }, ms);
})

export function isInViewport(element:Element) {
    const rect = element.getBoundingClientRect();
    let height = rect.bottom - rect.top;
    return (
        rect.top >= 0-height/2 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
const scrollhandle = (evt:Event,deltaY: number, props: ScrollerProps, d:Element) => {
    let inViewport = isInViewport(d);
    let isScrollable = d.scrollWidth > window.innerWidth;
    let scrollMax = d.scrollWidth;
    let scrollDistance = (deltaY || 100) * Math.abs(Math.min(props.scrollSpeed || 3, 10));
    if (props.isSlideShow) {
        scrollDistance = window.innerWidth;
    }
    if (deltaY > 0) {
        //down
        if (isScrollable && inViewport && d.scrollLeft < scrollMax - window.innerWidth) {
            console.log(d.scrollWidth, window.innerWidth)
            evt.preventDefault();
            //d.scrollLeft += evt.deltaY;
            d.scrollTo({
                top: 0,
                left: d.scrollLeft + scrollDistance,
                behavior: 'smooth'
            });
        }
    } else {
        //up
        if (props.up) {
            if (isScrollable && inViewport && d.scrollLeft > 0) {
                console.log(d.scrollWidth, window.innerWidth)
                evt.preventDefault();
                //d.scrollLeft += evt.deltaY;
                d.scrollTo({
                    top: 0,
                    left: d.scrollLeft + scrollDistance,
                    behavior: 'smooth'
                });
            }
        }
    }
}