import product1 from "assets/product1.png";
import product2 from "assets/product2.png";
import product3 from "assets/product3.png";
import product4 from "assets/product4.png";
import product5 from "assets/product5.png";

// common
export const PRIMARY_COLOR = "#373737";
export const TEXT_COLOR = "#878E9F";

// product lisitng
export const BACKGROUND_COLOR = "#F6F6F6";
export const PRODUCT_DETAIL_TEXT_COLOR = "#787885";
export const BUTTON_BACKGROUND_COLOR = "#373737";

// productDetail Page
export const ITEM_DETAIL_PAGE_CONTAINER_BACKGROUND = "#F5F5F5";

export const FOOTER_SECTION_WITH_LINK = [
  {
    title: "Accounts",
    options: [
      { value: "Sign in", link: "/" },
      { value: "Become a seller", link: "/" },
      { value: "Seller Board", link: "/" },
    ],
  },
  {
    title: "Usefull links",
    options: [
      { value: "About Us", link: "/" },
      { value: "Contact", link: "/" },
      { value: "Hot deals", link: "/" },
      { value: "Promotions", link: "/" },
      { value: "New Products", link: "/" },
    ],
  },
  {
    title: "Help Center",
    options: [
      { value: "Payments", link: "/" },
      { value: "Refund", link: "/" },
      { value: "Shipping", link: "/" },
      { value: "Q&A", link: "/" },
      { value: "Privacy Policy", link: "/" },
    ],
  },
];

// assets

export const getProductList = (length = 5) => {
  const productList = [];
  Array.from({ length }, () =>
    productList.push(
      {
        img: product1,
        name: "BOSTON ROUND",
        description:
          "Pump, Energy, and Strength| with Caffeine,  Nitrates, and Theobromine",
        rating: 4,
        reviews: 12,
        price: 12,
        currency: "$",
      },
      {
        img: product2,
        name: "RYSE Suplement",
        description:
          "Pump, Energy, and Strength| with Caffeine,  Nitrates, and Theobromine",
        rating: 4,
        reviews: 12,
        price: 12,
        currency: "$",
      },
      {
        img: product3,
        name: "Sound System",
        description:
          "Pump, Energy, and Strength| with Caffeine,  Nitrates, and Theobromine",
        rating: 4,
        reviews: 12,
        price: 12,
        currency: "$",
      },
      {
        img: product4,
        name: "Travel Bag",
        description:
          "Pump, Energy, and Strength| with Caffeine,  Nitrates, and Theobromine",
        rating: 4,
        reviews: 12,
        price: 12,
        currency: "$",
      },
      {
        img: product5,
        name: "BRAND Cosmetics",
        description:
          "Pump, Energy, and Strength| with Caffeine,  Nitrates, and Theobromine",
        rating: 4,
        reviews: 12,
        price: 12,
        currency: "$",
      }
    )
  );

  return productList;
};
