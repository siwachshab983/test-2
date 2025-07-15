import pizzaImg1 from "../assets/images/png/best-seller-img-1.png";
import pizzaImg2 from "../assets/images/png/best-seller-img-2.png";
import pizzaImg3 from "../assets/images/png/best-seller-img-3.png";
import pizzaImg4 from "../assets/images/png/best-seller-img-4.png";
import { ChefSvg, QualitySvg, SupportSvg } from "./icon";

export const NAVLINKS = [
    "Home",
    "Menu",
    "Customize Pizza",
    "Offers",
    "About Us",
]
export const ABOUT_US_CARDS_DATA = [
    {
        img: ChefSvg,
        title: "Professional Chefs"
    },
    {
        img: QualitySvg,
        title: "Best Quality Food"
    },
    {
        img: SupportSvg,
        title: "Online Support"
    }
]
export const BESTSELLER_DATA = [
    {
        img: pizzaImg1,
        price: "₹279",
        title: "Tandoori Paneer ",
        description: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs"
    },
    {
        img: pizzaImg2,
        price: "₹299",
        title: "Cheese Overload",
        description: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust"
    },
    {
        img: pizzaImg3,
        price: "₹239",
        title: "Veggie Fiesta",
        description: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese"
    },
    {
        img: pizzaImg4,
        price: "₹249",
        title: "Masala Paneer",
        description: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese"
    },
]