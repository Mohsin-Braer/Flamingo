<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">Flamingo</h3>

  <p align="center">
    Recreating the most popular twitter client for the Web.
    <br />
    <a href="https://github.com/Mohsin-Braer/Flamingo/"><strong>Explore the Repo »</strong></a>
    <br />
    <br />
    <a href="https://flamingo-swart.vercel.app/">View Demo via Vercel</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Flamingo Homepage][homepage-src]](https://flamingo-swart.vercel.app/)

The Flamingo Twitter client android

This application was built using React (Custom Hooks, Context), Firebase. I have built the following pages within this application: google sign in page, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners (try /browse while not logged in). Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well. User session is also saved via localStorage, user can leave the site, come back, and still be logged in. The films and Series are sorted with the help of Fuse.js.

compound components design pattern to build my components, and there's over 10 examples as to how these are used. The styling is all handled via the tailwindcss and headless UI libraries.

### Homepage
[![Flamingo Homepage][homepage-src]](https://flamingo-swart.vercel.app/)
### Mobile Responsive
[![Flamingo Mobile Responsive Homepage][mobile-responsive-src]](https://flamingo-swart.vercel.app/)
### Sign-in page
[![Flamingo Sign In Page][sign-in-src]](https://flamingo-swart.vercel.app/)
### Comment Page
[![Flamingo Comment Page][comment-src]](https://flamingo-swart.vercel.app/)


<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Recoil](https://recoiljs.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [nextAuth](https://next-auth.js.org/)
- [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Pretty simple and strightfoward.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your Firebase web app API in `firebase.prod.js`

```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username

[homepage-src]: i.postimg.cc/C503GCKZ/Flamingo-Full-Page.png
[sign-in-src]: i.postimg.cc/W4BL3cLw/Flamingo-Login-Page.png
[comment-src]: i.postimg.cc/MGMJqK4G/Flamingo-Comment-Page.png
[mobile-responsive-src]: i.postimg.cc/76SvJtq8/Flamingo-Mobile-Responsive.png
