---
title: "My Gatsby and react article"
date: "18 Dec, 2019"
---



Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

## Topics Covered

1. React 
2. Gatsby 
3. GraphQL

Wait Up, What is Gatsby?

![Post Background](../images/gatsby-astronaut.png)

“Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.” — Gatsbyjs.org (their emphasis — I’ll explain later).

I like to describe it as Create React App on steroids, where it’s an easy way to bootstrap a React application and focus on getting productive with the truly different parts of your application. At its core, it’s a glorified webpack app, where everything gets built upon that same webpack pipeline that you’ve struggled to write and fully understand to this day (or maybe that’s just me).

The beauty, though, is that what it outputs is a static website (simple HTML file) with your application pre-rendered for optimal delivery. This means it can essentially run anywhere, like simply dumping it in S3 and serving it as a static webpage or even easier, have Netlify build and serve it for you.
It’s All in the Scripts

Gatsby is one of the many tools available that support the JAMstack architecture. For the unfamiliar, JAM stands for JavaScript APIs and Markup, or pretty much a static HTML website that utilizes JavaScript to make the magic happen.

JAMstack apps have a lot of benefits right out of the box, including:

    Easy to host
    Cheap to host
    Loads super quick (most of the time)

This means generally, more often than not, you’re going to have a fast site that doesn’t cost you a lot of money to both host and maintain.
Sound a Bit Familiar?

It’s easy to compare this to Rails, as I hear often from others on my team, and rightfully so. There’s a lot of magic behind the scenes in Gatsby!

But unless you’re purely leaning on plug-ins and themes (which is fine), at the end of the day, you’re still building a React application as you would anywhere else. Your app can pretty much be ported to any other framework (aside from the data sourcing and page generation part). Components are components, styles are styles.


