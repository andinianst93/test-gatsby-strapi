import React from "react"
import { GatsbyProvider } from "./src/context/context"
import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(184, 91%, 17%);
  --clr-primary-2: hsl(185, 84%, 25%);
  --clr-primary-3: hsl(266, 81%, 29%);
  --clr-primary-4: #5a4ae3;
  --clr-primary-5: #2caeba;
  /* lighter shades of primary color */
  --clr-primary-6: hsl(185, 57%, 50%);
  --clr-primary-7: hsl(184, 65%, 59%);
  --clr-primary-8: hsl(184, 80%, 74%);
  --clr-primary-9: hsl(185, 94%, 87%);
  --clr-primary-10: hsl(186, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-green-dark: hsl(125, 67%, 35%);
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-white: #fff;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 700px;
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: var(--ff-primary);
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

.btn,
.btn-danger {
  text-transform: uppercase;
  background: var(--clr-primary-4);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  -webkit-transition: var(--transition);
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-primary-3);
}

.btn-danger {
  color: var(--clr-white);
  background: var(--clr-red-dark);
}
.btn-danger:hover {
  color: var(--clr-red-dark);
  background: var(--clr-red-light);
}
.center-btn {
  display: block;
  width: 12rem;
  text-align: center;
  margin: 3rem auto;
}
/* section */
.page-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .page-center {
    width: 95vw;
  }
}

.bg-grey {
  background: var(--clr-grey-10);
}
/* social links */

main {
  margin-top: -5rem;
}

.posts {
  width: 85vw;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 4rem;
}
.posts-title {
  font-weight: 700;
  text-transform: uppercase;
  color: #e12d39;
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
}

@media screen and (min-width: 992px) {
  .posts {
    width: 92vw;
  }
}
@media screen and (min-width: 1170px) {
  .posts-center {
    column-gap: 1rem;
  }
}
.newsletter-page {

  display: grid;
  place-items: center;
}
.newsletter-page h2 {
  text-transform: initial;
  margin-bottom: 1rem;
}
.newsletter-page h4 {
  text-transform: initial;
  margin-bottom: 1.25rem;
  color: var(--clr-grey-5);
}

`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle />
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
