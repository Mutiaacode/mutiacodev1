import React from "react";

function article_1() {
	return {
		date: "25 October 2023",
		title: "Introduction to HTML",
		description:
			"HTML, or Hypertext Markup Language, is the standard markup language used to create web pages and structure the content on the World Wide Web. It serves as the fundamental building block for web documents and is responsible for defining the structure and presentation of web content. HTML consists of a series of elements, or tags, that are used to mark up various parts of a web page, specifying how the content should be displayed in a web browser.",
		keywords: [
			"Introduction to HTML",
			"Mutia",
			"Mutia P",
			"Mutia Pegi Intanswari",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<h1>Hyper Text Markup Language (HTML) is a markup language used to create web pages, display various information in Internet web browsers and simple hypertext formatting written in ASCII format files to produce an integrated display.</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "26 October 2023",
		title: "Introduction to Java Script",
		description:
			"JavaScript is a high-level, versatile programming language primarily used for enhancing the interactivity and functionality of web pages. It plays a crucial role in web development alongside HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets). Here's a brief introduction to JavaScript",
		style: ``,
		keywords: [
			"Introduction to HTML",
			"Mutia",
			"Mutia P",
			"Mutia Pegi Intanswari",
		],
		body: (
			<React.Fragment>
				<h1>JavaScript is a programming language that developers use to create interactive web pages. From refreshing social media feeds to displaying animations and interactive maps, JavaScript functions can enhance a website's user experience. As a client-side scripting language, JavaScript is one of the core technologies of the World Wide Web. For example, when browsing the internet, whenever you see an image carousel, a click-to-view drop-down menu, or a dynamically changing color of an element on a web page, you are seeing the effect of JavaScript.</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
