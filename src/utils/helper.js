import pizzaImg1 from "../assets/images/png/best-seller-img-1.png";
import pizzaImg2 from "../assets/images/png/best-seller-img-2.png";
import pizzaImg3 from "../assets/images/png/best-seller-img-3.png";
import pizzaImg4 from "../assets/images/png/best-seller-img-4.png";
import limitedOfferPizza1 from "../assets/images/png/limited-offer-pizza-1.png";
import limitedOfferPizza2 from "../assets/images/png/limited-offer-pizza-2.png";
import ourMenuPizza1 from "../assets/images/png/our-menu-pizza-1.png";
import ourMenuPizza2 from "../assets/images/png/our-menu-pizza-2.png";
import ourMenuPizza3 from "../assets/images/png/our-menu-pizza-3.png";
import galleryImg1 from "../assets/images/png/gallery-img-1.png";
import galleryImg2 from "../assets/images/png/gallery-img-2.png";
import galleryImg3 from "../assets/images/png/gallery-img-3.png";
import galleryImg4 from "../assets/images/png/gallery-img-4.png";
import galleryImg5 from "../assets/images/png/gallery-img-5.png";
import galleryImg6 from "../assets/images/png/gallery-img-6.png";
import galleryImg7 from "../assets/images/png/gallery-img-7.png";
import userAvatar1 from "../assets/images/png/testimonial-user-img-1.png";
import userAvatar2 from "../assets/images/png/testimonial-user-img-2.png";
import userAvatar3 from "../assets/images/png/testimonial-user-img-3.png";
import { Check, ChefSvg, FacebookSvg, InstaSvg, LinkdinSvg, Order, Pizza, QualitySvg, SupportSvg, Track } from "./icon";

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
        aos: "fade-up-right",
        title: "Professional Chefs"
    },
    {
        img: QualitySvg,
        aos: "fade-up",
        title: "Best Quality Food"
    },
    {
        img: SupportSvg,
        aos: "fade-up-left",
        title: "Online Support"
    }
]

export const LIMITEDOFFER_DATA = [
    {
        title: "SPICY PANEER",
        text: "Only",
        price: "₹199",
        img: limitedOfferPizza1,
        aos: "fade-up-right",
    },
    {
        title: "CHEESE BURST",
        text: "Only",
        price: "₹299",
        img: limitedOfferPizza2,
        aos: "fade-up-left",
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

export const SOCIAL_ICON = [
    {
        icon: FacebookSvg,
        socialLink: "https://www.facebook.com"
    },
    {
        icon: InstaSvg,
        socialLink: "https://www.instagram.com"
    },
    {
        icon: LinkdinSvg,
        socialLink: "https://www.linkedin.com"
    }
]

export const QUICK_LINKS = [
    "Home", "About Us", "Menu", "Gallery", "Testimonial", "Contact"
]

export const SUPPORT_LINKS = [
    "Terms & Conditions", "Privacy Policy"
]
export const MENU_DATA = [
    {
        title1: "Farmhouse Magic1",
        title2: "Farmhouse Magic2",
        title3: "Farmhouse Magic3",
        title4: "Farmhouse Magic4",
        title5: "Farmhouse Magic5",
        price: "₹229 / ₹359 / ₹499",
        desc: "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
        image: ourMenuPizza1
    },
    {
        title1: "Masala Paneer1",
        title2: "Masala Paneer2",
        title3: "Masala Paneer3",
        title4: "Masala Paneer4",
        title5: "Masala Paneer5",
        price: "₹279 / ₹399 / ₹519",
        desc: "Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese",
        image: ourMenuPizza2
    },
    {
        title1: "Solo Meal Combo1",
        title2: "Solo Meal Combo2",
        title3: "Solo Meal Combo3",
        title4: "Solo Meal Combo4",
        title5: "Solo Meal Combo5",
        price: "₹379",
        desc: "1 Regular Pizza + Garlic Bread + 1 Soft Drink",
        image: ourMenuPizza3
    },
];

export const GALLERY_DATA = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
]

export const FOODDELIVERY = [
    {
        icon: Check,
        info: '30-Minute Delivery Promise',
    },
    {
        icon: Check,
        info: 'Hygienic, Contactless Delivery',
    },
    {
        icon: Check,
        info: 'Real-time Order Tracking',
    },
    {
        icon: Check,
        info: 'Eco-Friendly Packaging',
    },

]

export const TESTIMONIAL_AVATAR = [
    userAvatar1,
    userAvatar2,
    userAvatar3
]

export const HOW_IT_WORKS_DATA = [
    {
        icon: Pizza,
        title: "Choose Your Pizza",
        description: "Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.",
    },
    {
        icon: Order,
        title: "Place Your Order",
        description: "Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.",
    },
    {
        icon: Track,
        title: "Track & Enjoy",
        description: "Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!",
    }
]

export const TESTIMONIAL_DATA = [
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
    {
        text: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        name: "Aarav Mehta",
        role: "Software Developer",
    },
];