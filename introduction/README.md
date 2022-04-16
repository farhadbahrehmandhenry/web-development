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

  - cascade => order matters - what comes after overrides th rests
  - specifity => if we have two different style for one element the one
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
