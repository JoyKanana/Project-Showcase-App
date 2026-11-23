# Shop Zone Admin Portal

An administrator portal for an e-commerce website. The admin can see a dashboard, view products, search for a product, add a new product, and edit an existing one.

Live site: https://YOUR-USERNAME.github.io/Project-Showcase-App/

## Features

- Landing page (dashboard) with a welcome banner, stats cards, sales overview, recent orders and quick actions
- Products page that shows all products
- Search bar to find a product as you type
- Add Product form (POST request)
- Edit Product form to change values such as price (GET and PATCH requests)
- Form checks, so a product can't be saved with missing details
- Responsive design that matches the mock-up

## Built with

- React (Vite)
- React Router
- Tailwind CSS
- json-server (simulated backend using `db.json`)

## How to run it on your computer

You need Node.js installed.

1. Clone the repo and go into the folder:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. Install the packages:

   ```bash
   npm install
   ```

3. Start the fake backend in one terminal:

   ```bash
   npx json-server db.json
   ```

4. Start the app in a second terminal:

   ```bash
   npm run dev
   ```

5. Open the link shown in the terminal, usually `http://localhost:5173`.

The backend runs at `http://localhost:3000`, and the products are at `http://localhost:3000/products`.

## Pages

| Path | Page |
|---|---|
| `/` | Dashboard |
| `/products` | Products list |
| `/add-product` | Add a new product |
| `/edit-product/:id` | Edit a product |

## Product data

Each product in `db.json` looks like this:

```json
{
  "id": "1",
  "name": "Wireless Headphones",
  "description": "Noise-cancelling wireless headphones",
  "price": 4500,
  "category": "Electronics",
  "image": "https://placehold.co/300x300",
  "stock": 25
}
```

## Project structure

```
src/
  components/   the pages and parts of the interface
  hooks/        custom hooks
  services/     code that talks to the backend
  App.jsx
  main.jsx
db.json         the simulated backend data
```

Components by team member:

- **Frontend and Dashboard:** Dashboard, DashboardOverview, StatCard, Layout, Navbar, Sidebar, Header, Footer
- **Product display and search:** Products, ProductList, ProductCard, ProductTable, SearchBar, ProductFilters, ProductActions, DeleteConfirmation, EmptyState
- **Product management:** AddProduct, EditProduct, ProductForm, FormInput, FormSelect, FormTextArea, FormCheckbox, FormActions
- **Backend, routing and integration:** App, AppRoutes, ProductContext, ApiProvider, NotFound, Loading, ErrorBoundary

## How the product forms work

- `ProductForm` is one reusable form. It keeps what the admin types in state, checks it, and passes the finished product to the page that called it.
- `AddProduct` uses the form with an empty start and sends a **POST** request to save a new product.
- `EditProduct` loads the product with a **GET** request, fills the form, and sends a **PATCH** request to save only the changes.
- After saving or cancelling, the admin goes back to the products page.

## Team

| Member | Area |
|---|---|
| Member 1 - [Giggs] | Frontend and Dashboard (Dashboard, DashboardOverview, StatCard, Layout, Navbar, Sidebar, Header, Footer) |
| Member 2 - [Rane] | Product Management (AddProduct, EditProduct, ProductForm and the form inputs) |
| Member 3 - [Stacy] | Product Display and Search (Products, ProductList, ProductCard, SearchBar, ProductFilters, ProductActions, DeleteConfirmation, EmptyState) |
| Member 4 - [Joy] | Backend, Routing and Integration (App, AppRoutes, ProductContext, ApiProvider, NotFound, Loading, ErrorBoundary) |

## Git workflow

- `main` holds the finished project.
- `dev` is where everyone's work is joined and tested.
- Each person works on their own `ft-` branch (for example `ft-add-product`) and opens a Pull Request into `dev`.

## Deployment

The site is published with GitHub Pages using GitHub Actions. Every time something is merged into `main`, the site is built and published again.

The live site only shows the interface. The backend runs on `localhost`, so adding and editing products only saves when the app is run locally with `json-server`.

## Known limitations

- Data changes are only saved when `json-server` is running on your computer.
- There is no login. The admin name on the dashboard is fixed.
