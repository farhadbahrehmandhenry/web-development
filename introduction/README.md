- Internet is bunch of connected computers - ther are connected by routers. tcp/ip
- WEB - WWW - Wide World Web (everything happens in browser) => to transfer information. HTTP - Hyper Text Transfer Protocol

- browse a url

  - send a http request - DNS founds the ip - server sends the html - browser reads the html and perform line by line

- frontend, backend
  dineroom - frontend
  kitchen - backroom

- html - skleton and bones - Hypertext markup language
  - html, head(metadata), body(stuff that shows up on the page)
  - html5 - latest documentation of html - everyone is using html5 because it's the latest documentation
  - block elements - takes up the entire width
  - inline block - takes up only as much as its width - width and height and margin and padding won't work and respected
  - div - division element
  - <hr> - horizontal line
  - <br> - line break
  - <sup></sup> - elevates above the baseline
  - <sub></sub> - lowers under the baseline
  - we can use this tags instead of div just to be more readable
    - main, nav, section, article, aside, header, footer, time, figure, abbr, data
- css - muscels - cascading style sheet

  - cascade => order matters - what comes after overrides the rests
  - specificity => if we have two different style for one element the one
    that is more specific will be used by browser
    !important is stronger than inline style, inline style is stronger than id, id is stronger than class, class is stronger than tag name

    - https://specificity.keegan.st/

  - css inheritance =>
    - body => ul => li
    - color: inherit => picks up the color from nearest parent
  - inline, style tag, external css file
  - rgb- red green blue
  - hex - 0 to f => #ffffff == #fff => white , #000000 === #000=> black - first two red, second two green, third 2 blue - #c3f === #cc33ff , #ffffffff => opacity 1 - #ffffff00 => opacity 0
  - text
    - text-align
    - text-decoration - underline, overline, ...
    - line-height
    - letter-spacing
  - units
    - absolute units
      - px
    - relative units
      - em, rem, vh, vw, vmin, vmax, %
      - line-height in percent unlike other elements is the percentage of the font inside
      - em => it's relative to the element font size and font size is reletive to parent element fon't size - in this way we can maintain the shape and look of elements in different sizes
        - when we have nested elements it'll shrink or extend exponentially
      - rem => it's reletive to html font-size - (default 20px)
  - immediate adjasont selector => div + p
  - direct child element => div > p
  - attribute selector => input[type="text"], div[data-id="2"]
  - pseudo classes =>
    - :active, :hover, :nth-of-type(2 or 2n), :focus, ....
  - pseudo elements =>
    - h2::first-letter, p::selection, div::before, div::after
  - box-sizing: border-box => width including border
  - display
    - display: block => takes all the available width
    - display: inline => takes only as much as the width of element - width and height and margin and padding won't work and respected
    - display: inline-block => inline but width and height and margin and padding will work and respected
  - alpha channel => rgba()

- position
  - static => default
  - relative => now we can add top, left ...
  - absolute => relative to its positioned parent - now we can add top, left ...
  - fixed => fixed relative to body and goint to stay there - now we can add top, left ...
  - sticky => not fixed, but fixed when it reaches to top
- transition
- transform
  - transform-origin => define the pivot
  - rotate
  - translate
  - skew
  - multiple transform
- margin: auto => centers the element
- background-image
  - background-size
    - cover
  - background-position => where it starts
    - center center => x and y
  - background-repeat
- background => we can set all the above in one go - multiple background
  background: "./aaaa" no-repeat center/cover
- google font
- flex
  - flex-basis => min width or height based on flex-direction
  - flex-grow => this will take space if additional space is available - we can set on all children and they will
    take up equally or proportionally based on flex-grow value
  - flex-shrink => same as flex-grow but the other way around
  - flex => flex: flex-grow flex-shrink flex-basis
  - responsive design => media query to have a stable and responsive look on all devices with different screen
  - bootstrap
- js - movement of the body

  - primitive type
    - integer
    - boolean
    - string
    - undefined
    - null
  - NaN
  - const, let, var
  - typeof

- string methods
  - indexOf
  - slice // doesn't change the original
  - replace
  - replaceAll
  - repeat
- string template literals

  - `${}`

- undefined vs null

- array

  - concat
  - indexOf
  - slice
  - splice
  - reverse
  - reference type
  - array and const

- object

  - obj.x
  - obj['x'] => you can do more instead of 'x'

- prompt('what id your name?')

- for of

  - for(var item of items) // array
  - for(var item of Object.entries(items)) // object

- for in

  - object - gets the key

- function scope
- block scope (only for const and let)
- lexical scope - inner function has access to parent scope - (but not the other way)

- higher order function

  - return a function or accept a function as argument

- method vs function

  - methods are functions that are properrties of an object

- ## this

- try, catch
  -

- ## reducer function
it does a calculation from begining and return one single value
that can be math operation or some other logics

- ## default params
shoul be defined as last args in the function

- ## spread 

- ## REST params
rest is different from spread

convert all of params to an array 
function(...nums){}
or
function(...args){}

function (first, second, ...rest)

- ## destructuring array and object and params
order matters
const [one, two, three, ...others] = [1, 2, 3, 4, 5, 6, 7]
one => 1
two => 2
three => 3
others => [4, 5, 6, 7]

const {id, name} = obj;
const {id: userId} = obj // rename
const {name = "Jhon"} = obj // defaut

function random({one, two, three=4}){}
random({one: 1, two: 2, three: 3})

- ## DOM
represents the web page
it's a js object. tree structure. document>>body>>div>>...

innerText => shows what appears on the page
contetText => shows what is in the html

innerText and contentText are for text, but
if we want to add a tag or html, we should use innerHtml.
innerHtml works for text too
