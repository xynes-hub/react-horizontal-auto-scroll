import Col from "./Col"
import Scroller from '../.';
import * as React from 'react';

export const GenRowCol = (props) => {
    let [arr, setArr] = React.useState<Array<number>>();
    React.useEffect(() => {
        let a = new Array<number>();
        for (let i = 0; i < props.num; i++) {
            a.push(i + 1);
        }
        setArr(a);
    }, [])
    return <Scroller className="row" style={{ backgroundColor: props.bg || 'DodgerBlue'}} >{arr && arr.map(index =>


        <Col key={index}>{index}</Col>

    )}</Scroller>
}