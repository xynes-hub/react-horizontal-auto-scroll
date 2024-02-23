import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { registerEvent } from './Helper';


// Required props
interface ScrollerRequiredProps {
  children: React.ReactNode
}

// Optional props
interface ScrollerOptionalProps {
  className?: string,
  scrollSpeed?: number, //1-10,
  isSlideShow?: boolean,
  up?: boolean,
  style?: React.CSSProperties,
}

// Combine required and optional props to build the full prop interface
export interface ScrollerProps
  extends ScrollerRequiredProps,
  ScrollerOptionalProps { }

// Use the optional prop interface to define the default props
const defaultProps: ScrollerOptionalProps = {
  scrollSpeed: 3,
  isSlideShow: false,
  up:false
};

const Scroller = (props: ScrollerProps) => {
  let [id, setId] = React.useState<string>();
  React.useEffect(() => {
    let uniqueId = "_" + uuidv4();
    setId(uniqueId);
    registerEvent(uniqueId, props);
  }, []);
  return (<div id={id} className={props.className || ""} style={props.style || {}}>{props.children}</div>);
};
Scroller.defaultProps = defaultProps;
export default Scroller;