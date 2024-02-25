
[![NPM version](https://img.shields.io/npm/v/react-horizontal-auto-scroll.svg?style=flat)](https://npmjs.org/package/react-horizontal-auto-scroll)
[![Downloads/month](https://img.shields.io/npm/dm/react-horizontal-auto-scroll.svg)](http://www.npmtrends.com/react-horizontal-auto-scroll)

# react-horizontal-auto-scroll

> While scrolling through a webpage users often miss any content that is needed to be scrolled horizontally. With this React component one can overcome this issue easily both on desktops and mobile.

## Install

```bash
npm install --save react-horizontal-auto-scroll
```
## Usage
```jsx
import React from 'react';
import  Scroller  from  'react-horizontal-auto-scroll';

  

function  App() {
	
	return (
	<div  className="App">
		//Content
		//.............
		// More content
		<Scroller className="row">
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
			<Col>CONTENT</Col>
		</Scroller>
		//Content
		//.............
		// More content
	</div>
	);
}
```
### Here is a list of all props that Scroller accepts :

| Name        | Required     | Type | Default | Description|
|:----        |:----     |:----          |:----       |:----|
|scrollSpeed |`false`| `Number` | |Scroll speed depends on number ranging from 1-10 |
|isSlideShow |`false`| `Boolean` | |When set to true the horizontal scrolling will work kind of like a slideshow|
|reverse |`false`| `Boolean` | |When set to true horizontal reverse scrolling will trigger while scrolling up  |
|children |`false`| `ReactNode` | | A number of child elements need to passed for it to work |

> You can pass all html props to Scroller.





