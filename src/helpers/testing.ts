import { CartProduct, Product } from "../types";

export const mockCartProducts: CartProduct[] = [
  {
    name: "Parodontax Duplo Herbal Fresh 75ml",
    gtin: "5054563079435",
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
    brandName: "Parodontax",
    categoryName: "Toothpaste",
    quantity: 1,
  },
  {
    name: "Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health",
    gtin: "8411047151242",
    recommendedRetailPrice: 22.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/co8e7Y9gf272e2W2LgA6fj.jpg",
    brandName: "Instituto Espanol",
    categoryName: "Men's Perfume",
    quantity: 5,
  },
];

export const mockProducts: Product[] = [
  {
    name: "Parodontax Duplo Herbal Fresh 75ml",
    gtin: "5054563079435",
    recommendedRetailPrice: 29.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
    brandName: "Parodontax",
    categoryName: "Toothpaste",
  },
  {
    name: "Poseidon The Black Men Edt Vapo 150 Ml - Beauty & Health",
    gtin: "8411047151242",
    recommendedRetailPrice: 22.99,
    recommendedRetailPriceCurrency: "EUR",
    imageUrl:
      "https://images.qogita.com/files/images/variants/co8e7Y9gf272e2W2LgA6fj.jpg",
    brandName: "Instituto Espanol",
    categoryName: "Men's Perfume",
  },
];

export const productMock = {
  name: "Parodontax Duplo Herbal Fresh 75ml",
  gtin: "5054563079435",
  recommendedRetailPrice: 29.99,
  recommendedRetailPriceCurrency: "EUR",
  imageUrl:
    "https://images.qogita.com/files/images/variants/aB9r5isuPDUTTD3nLNsXvQ.jpg",
  brandName: "Parodontax",
  categoryName: "Toothpaste",
};
