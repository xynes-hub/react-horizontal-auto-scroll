import { ScrollerOptionalProps, ScrollerProps } from ".";

export const registerEvent = (el: HTMLInputElement | null, props: ScrollerOptionalProps) => {
    
    if (el != null) {
        let d: HTMLInputElement = el;
        const wheel = (evt: WheelEvent) => {
            let deltaY = evt.deltaY;
            scrollhandle(evt, deltaY, props, d)
        }
        document.addEventListener('wheel',wheel , { passive: false });
        var ts: number;
        const touchstart = (e: TouchEvent) => {
            console.log(e)
            ts = e.changedTouches[0].clientY;
        }
        document.addEventListener('touchstart', touchstart);
        const touchmove = (evt: TouchEvent) => {
            var te = evt.changedTouches[0].clientY;
            let deltaY: number;
            if (ts > te) {
                deltaY = 100;
            } else {
                deltaY = -100;
            }
            scrollhandle(evt, deltaY, props, d)
        }
        document.addEventListener('touchmove', touchmove, { passive: false });
        return function cleanUp() {
            document.removeEventListener('wheel', wheel);
            document.removeEventListener('touchstart', touchstart);
            document.removeEventListener('touchmove', touchmove)
            console.log("event listeners removed");
        }
    }
    return () => {
        console.log("no event listeners removed");
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