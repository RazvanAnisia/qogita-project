## Approach

I have tried to meet all the requirements listed in the original Readme in the aproximate given timeframe.
For this purpose:

- I've leveraged [https://ant.design/](ant-d) as a UI library
- Used React's useReducer() hook for state management: considering the small scale of the app I considered it was a good solution, but for a production grade application I would recommend something like Redux which offers a lot of other advantages (but requires a lot of boilerplace)
- used [https://usehooks-ts.com/react-hook/use-fetch](use-fetch) hook for fetching data from the api, chose this for simplicity and to keep the application lean but for larger projects could use a package like axios
- I did not end up using /products/[gtin] endpoint as it wasn't specified directly in the requirements, and the payload it delivered did not offer any extra information about a particular product (the main /products endpoint has the same information for a particular product) so if there was a need to navigate to products/id in the browser we could have used the main /products endpoint.
- I have setup unit tests with Jest + [https://testing-library.com/](react-testing-library) and tried to get some decent coverage for the more important parts of the application, but these could be significantly improved

### Setup

```sh
npm install
```

### Running locally

#### Development

Start the project in development mode.

```sh
npm run dev
```

#### Production

Build and start the project in production mode.

```sh
npm start
```

#### Unit Tests

```sh
npm run test
```

## API

The API can be interacted with via `http://localhost:3000/api` and has the following endpoints:

#### `/products`

The `/products` endpoint accepts `GET` requests and will return the first page of 20 products. To retrieve a different page of 20 products, you can pass the `page` query parameter (e.g. `/products?page=2`).

#### `/products/[gtin]`

The `/products/[gtin]` endpoint accepts `GET` requests and will return a product matching the GTIN (e.g. `/products/8005610625720`). If no product is found, the API will respond with a `404` status.

### Requirements

#### Home page

- Display products retrieved from the `/products` endpoint. See [API](#api).
- Customers should be able to browse all available products (there are 100 in total).
- Customers should be able to add products to a shopping cart.

#### Cart page

- Display the products the customer has added to their shopping cart.
- Customers should be able to remove products from their shopping cart.
- The shopping cart's value should be prominently displayed.

##### Bonus requirements

- Customers should be able to change the quantity of a particular product in their shopping cart.

## Getting started

The existing code includes a development environment, and an [API](#api) with product data for you to interact with. The relevant API response types can be found in [src/types.ts](src/types.ts). Please do not use `data/products.json` directly.
