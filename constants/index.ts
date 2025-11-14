// Import icons using require for React Native
const arrowBack = require("../assets/icons/arrow-back.png");
const arrowDown = require("../assets/icons/arrow-down.png");
const arrowRight = require("../assets/icons/arrow-right.png");
const bag = require("../assets/icons/bag.png");
const check = require("../assets/icons/check.png");
const clock = require("../assets/icons/clock.png");
const dollar = require("../assets/icons/dollar.png");
const envelope = require("../assets/icons/envelope.png");
const home = require("../assets/icons/home.png");
const location = require("../assets/icons/location.png");
const logout = require("../assets/icons/logout.png");
const minus = require("../assets/icons/minus.png");
const pencil = require("../assets/icons/pencil.png");
const person = require("../assets/icons/person.png");
const phone = require("../assets/icons/phone.png");
const plus = require("../assets/icons/plus.png");
const search = require("../assets/icons/search.png");
const star = require("../assets/icons/star.png");
const trash = require("../assets/icons/trash.png");
const user = require("../assets/icons/user.png");

// Import images using require for React Native
const avatar = require("../assets/images/avatar.png");
const avocado = require("../assets/images/avocado.png");
const bacon = require("../assets/images/bacon.png");
const burgerOne = require("../assets/images/burger-one.png");
const burgerTwo = require("../assets/images/burger-two.png");
const buritto = require("../assets/images/buritto.png");
const cheese = require("../assets/images/cheese.png");
const coleslaw = require("../assets/images/coleslaw.png");
const cucumber = require("../assets/images/cucumber.png");
const emptyState = require("../assets/images/empty-state.png");
const fries = require("../assets/images/fries.png");
const loginGraphic = require("../assets/images/login-graphic.png");
const logo = require("../assets/images/logo.png");
const mozarellaSticks = require("../assets/images/mozarella-sticks.png");
const mushrooms = require("../assets/images/mushrooms.png");
const onionRings = require("../assets/images/onion-rings.png");
const onions = require("../assets/images/onions.png");
const pizzaOne = require("../assets/images/pizza-one.png");
const salad = require("../assets/images/salad.png");
const success = require("../assets/images/success.png");
const tomatoes = require("../assets/images/tomatoes.png");

// Type definitions
export interface Category {
    id: string;
    name: string;
}

export interface Offer {
    id: number;
    title: string;
    image: any; // Changed to any for React Native image sources
    color: string;
}

export interface Side {
    name: string;
    image: any; // Changed to any for React Native image sources
    price: number;
}

export interface Topping {
    name: string;
    image: any; // Changed to any for React Native image sources
    price: number;
}

export interface Images {
    [key: string]: any; // Changed to any for React Native image sources
}

// Constants
export const CATEGORIES: Category[] = [
    {
        id: "1",
        name: "All",
    },
    {
        id: "2",
        name: "Burger",
    },
    {
        id: "3",
        name: "Pizza",
    },
    {
        id: "4",
        name: "Wrap",
    },
    {
        id: "5",
        name: "Burrito",
    },
];

export const offers: Offer[] = [
    {
        id: 1,
        title: "SUMMER COMBO",
        image: burgerOne,
        color: "#D33B0D",
    },
    {
        id: 2,
        title: "BURGER BASH",
        image: burgerTwo,
        color: "#DF5A0C",
    },
    {
        id: 3,
        title: "PIZZA PARTY",
        image: pizzaOne,
        color: "#084137",
    },
    {
        id: 4,
        title: "BURRITO DELIGHT",
        image: buritto,
        color: "#EB920C",
    },
];

export const sides: Side[] = [
    {
        name: "Fries",
        image: fries,
        price: 3.5,
    },
    {
        name: "Onion Rings",
        image: onionRings,
        price: 4.0,
    },
    {
        name: "Mozarella Sticks",
        image: mozarellaSticks,
        price: 5.0,
    },
    {
        name: "Coleslaw",
        image: coleslaw,
        price: 2.5,
    },
    {
        name: "Salad",
        image: salad,
        price: 4.5,
    },
];

export const toppings: Topping[] = [
    {
        name: "Avocado",
        image: avocado,
        price: 1.5,
    },
    {
        name: "Bacon",
        image: bacon,
        price: 2.0,
    },
    {
        name: "Cheese",
        image: cheese,
        price: 1.0,
    },
    {
        name: "Cucumber",
        image: cucumber,
        price: 0.5,
    },
    {
        name: "Mushrooms",
        image: mushrooms,
        price: 1.2,
    },
    {
        name: "Onions",
        image: onions,
        price: 0.5,
    },
    {
        name: "Tomatoes",
        image: tomatoes,
        price: 0.7,
    },
];

export const images: Images = {
    avatar,
    avocado,
    bacon,
    burgerOne,
    burgerTwo,
    buritto,
    cheese,
    coleslaw,
    cucumber,
    emptyState,
    fries,
    loginGraphic,
    logo,
    mozarellaSticks,
    mushrooms,
    onionRings,
    onions,
    pizzaOne,
    salad,
    success,
    tomatoes,
    arrowBack,
    arrowDown,
    arrowRight,
    bag,
    check,
    clock,
    dollar,
    envelope,
    home,
    location,
    logout,
    minus,
    pencil,
    person,
    phone,
    plus,
    search,
    star,
    trash,
    user,
};