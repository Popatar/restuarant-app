import "./styles.css";
import logoImage from "./logo.png";
import dinnerImage from "./dinner.jpg";
import menuImage from "./menu.jpg"
import contactImage from "./contact.jpg"


window.homeContent = homeContent;
window.updateContent = updateContent;

const logo = document.createElement("img");
logo.src = logoImage;

const header = document.querySelector("header");
logo.classList.add('logo');
header.appendChild(logo);

const nav = header.querySelector("nav");
header.insertBefore(logo, nav);

const content = document.createElement("div");
content.classList.add('content');
document.body.appendChild(content);

homeContent();

function updateContent(content) {
    if (content == 'home') {
        homeContent();
    }
    if (content == 'menu') {
        menuContent();
    }
    if (content == 'contact') {
        contactContent();
    }
}

function homeContent() {

    if (content.hasChildNodes()) {
        document.querySelector('.display').remove();
    }

    const display = document.createElement("div");
    display.classList.add('display');
    content.appendChild(display);

    const lSideBar = document.createElement("div");
    const rSideBar = document.createElement("div");

    lSideBar.classList.add('lSideBar');
    display.appendChild(lSideBar);

    rSideBar.classList.add('rSideBar');
    display.appendChild(rSideBar);

    const dinner = document.createElement("img");
    dinner.src = dinnerImage;

    rSideBar.appendChild(dinner);

    const text = document.createElement("p");
    text.textContent = "Bringing People Together... Through Food";
    lSideBar.appendChild(text);

}

function menuContent() {
    if (content.hasChildNodes()) {
        document.querySelector('.display').remove();
    }

    const display = document.createElement("div");
    display.classList.add('display');
    content.appendChild(display);

    const menu = document.createElement("img");
    menu.src = menuImage;
    menu.classList.add('menuimage');

    display.appendChild(menu);

    const menuTile = document.createElement("div");
    menuTile.classList.add('menuTile');
    display.appendChild(menuTile);

    const text = document.createElement("p");
    text.classList.add("menuTitleText");
    text.textContent = "Menu for food";
    menuTile.appendChild(text);

    for (var i = 0; i < 4; i++) {

        const wrapper = document.createElement("div");
        wrapper.classList.add("entryWraper");
        menuTile.appendChild(wrapper);

        if (i < 3) {
            const dividingLine = document.createElement("div");
            dividingLine.classList.add("lineBreak");
            menuTile.appendChild(dividingLine);
        }

        const text = document.createElement("p");
        text.classList.add("foodItem");
        text.textContent = "Dish Entry";
        wrapper.appendChild(text);

        const description = document.createElement("p");
        description.classList.add("foodDescription");
        description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
        wrapper.appendChild(description);
    }

}

function contactContent() {
    if (content.hasChildNodes()) {
        document.querySelector('.display').remove();
    }

    const display = document.createElement("div");
    display.classList.add('display');
    content.appendChild(display);

    const leftSideBar = document.createElement("div");
    const rightSideBar = document.createElement("div");

    leftSideBar.classList.add('leftSideBar');
    display.appendChild(leftSideBar);

    rightSideBar.classList.add('rightSideBar');
    display.appendChild(rightSideBar);

    const contact = document.createElement("img");
    contact.src = contactImage;

    leftSideBar.appendChild(contact);

    const text = document.createElement("p");
    text.textContent = "Making the menu tab drove me a little crazy... Figma Balls";
    rightSideBar.appendChild(text);
}