import * as React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { registerEvent } from './Helper';




// Optional props
export interface ScrollerOptionalProps {
  scrollSpeed?: number, //1-10,
  isSlideShow?: boolean,
  up?: boolean,
}

// Combine required and optional props to build the full prop interface
export interface ScrollerProps
  extends
  ScrollerOptionalProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

// Use the optional prop interface to define the default props
const defaultProps: ScrollerOptionalProps = {
  scrollSpeed: 3,
  isSlideShow: false,
  up:false
};

const Scroller = (props: ScrollerProps) => {
  //let [id, setId] = React.useState<string>();
  let sc = React.useRef<HTMLInputElement>(null)
  let { scrollSpeed, isSlideShow, up,children, ...rest } = props;
  React.useEffect(() => {
    //let uniqueId = "_" + uuidv4();
    //setId(uniqueId);
    let scProps :ScrollerOptionalProps = {
      scrollSpeed,
      isSlideShow,
      up
    }; 

    const element = sc.current;
    
      element?.addEventListener("wheel", (e) => {
        console.log("scroll", e.deltaY)
        e.preventDefault();
      })
      
    
    return registerEvent(element, scProps);
  }, [sc]);
  return (<div ref={sc} {...rest}>{children}</div>);
};
Scroller.defaultProps = defaultProps;
export default Scroller;