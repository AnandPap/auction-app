# Auction App

## Live version

[Auction App](https://auction-app-kohl.vercel.app/login)

## Features of this application

1. Place bids on products that other users are selling, track bid status, and compete to win the right to purchase.

2. Become a seller by listing your own product for auction. You'll need to provide at least 3 pictures of the product, its name, starting price, category, and auction period.

3. Add products to your wishlist.

4. Explore available products and their prices as a guest. However, placing bids requires logging in.

## Technologies used

1. **React** with **Typescript** for frontend, along with following packages:

- _vite_ – for project setup and fast dev environment

- _react-router_ for routing purposes

- _react-redux_ with _@reduxjs/toolkit_ for state management

- _axios_ for simplified HTTP requests and response handling between frontend and backend

2. **Spring Boot** for backend

3. **PostgreSQL** database

## How to run the application locally

### Prerequisites (Ctrl + click to open links in a new tab)

1. [Git](https://git-scm.com/downloads)

2. [Node.js](https://nodejs.org/en/download)

3. [Java 21+](https://adoptium.net/temurin/)

4. [Maven](https://maven.apache.org/download.cgi)

5. [PostgreSQL 17 with pgAdmin4](https://www.postgresql.org/download/)

### Steps to run a local copy

1. Create your own PostgreSQL database using **pgAdmin**, a user-friendly interface tool included with PostgreSQL 17:

- Open **pgAdmin** and double-click the "Servers" item in the left sidebar.

- Enter the password for the `postgres` user. By default, it's usually `postgres`.

- Right-click on "Databases", select **Create** → **Database**, name it `auctionapp`, and click **Save**.

2. Clone the repository using your terminal and running the following command:

   ```bash
   git clone https://github.com/AnandPap/auction-app.git
   ```

3. Navigate to the `server` folder:

   ```bash
   cd auction-app/server
   ```

   Start the backend:

   ```bash
   mvn spring-boot:run -D"spring-boot.run.profiles"=dev
   ```

4. Navigate to the `client` folder:

   ```bash
   cd ../client
   ```

   Then install the required packages:

   ```bash
   npm install
   ```

   Start the frontend:

   ```bash
   npm run dev
   ```

   The frontend should open automatically at: `http://localhost:5173`

5. You're done! Enjoy exploring **Auction App** using its awesome frontend UI!

### Entity-Relationship Diagram (ERD) of the PostgreSQL database

![AuctionApp ERD](https://github.com/user-attachments/assets/0b07561d-a481-4304-b58d-7548c6d2e0f9)
