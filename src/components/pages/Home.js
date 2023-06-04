import React from "react";
import { PageLayout } from "components/common";

export default function Home(){
    return(
        <PageLayout>
            <h1>
                Home
            </h1>
            <section>
                <p><strong>**Updated course to version 5 of React styled-components.**</strong></p>

                <p>This styled-components course is the next step for React developers who want to increase their value as a front-end developer by ditching flaky CSS class names and structures, messy CSS imports and CSS class naming conflicts with their React apps and instead want to embrace the best way of styling React apps, with the CSS-in-JS Styled Components library!</p>

                <p>The styled-components framework lets you write actual CSS in your JavaScript. This means you can use all the features of CSS you use and love with styled components, including (but by far not limited to) media queries, all pseudo-selectors, nesting, etc.</p>

                <p>In this styled components course we'll be creating a very basic 2 page mobile-first app using create-react-app. We'll be using styled components to style our entire app, including applying global styles, implementing third party fonts using Google fonts, creating a common mobile-first and responsive Layout, <strong>creating variations for components via props</strong> (for example a large or small Button), implementing a theme toggle component and <strong>switching our app between 'light' and 'dark' mode</strong>, as well as implementing animations with styled components.</p>

                <p>React took the traditional view / viewmodel approach to web development and combined them both into one, while still keeping code modular and single responsibility. Styled Components can be seen as an extension of that, bringing the styling into the JS file as well. They all have one to one relationships, so it makes sense to combine them as long as they're kept modular. This React styled components course will help you understand the power of this approach and show you how to build such components.</p>

                <p>Go to the course on <a href="https://www.udemy.com/share/101vVm3@91yWGwYPqi7CMj46Ptgvvwur2UGSQF9CXNlqkSsqHiQazJ2pApvVO8sG4fz9_kZw/" target="_blank">Udemy</a></p>
            </section>
        </PageLayout>
    )
}