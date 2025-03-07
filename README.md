# Stock Market Data Visualization App

This project is a **ReactJS** web application with a **Node.js and Express** backend that visualizes stock market data from a JSON file. The app features dynamic data loading, sorting, and searching functionalities to enhance user experience.

## 🚀 Live Demo

Check out the deployed app on Vercel: [Stock Market Data Visualization](https://stock-market-json-data-view-frontend-4ohbbt3r8.vercel.app/)

## ✨ Features

- **Data Visualization:** Displays stock data in a clean, sortable table.
- **Sorting:** Click on table headers to sort data (ascending/descending).
- **Search:** Real-time search bar to filter data by trade code.
- **Pagination:** Efficient data loading with the "Load More" feature.
- **Fast Performance:** Optimized React rendering for faster data visualization.
- **Responsive Design:** Built with TailwindCSS for mobile-first design.

## 🏗️ Tech Stack

- **Frontend:** ReactJS, TailwindCSS
- **Backend:** Node.js, Express
- **Deployment:** Vercel (Frontend)
- **Data:** JSON and CSV file (stock market data)

## 📦 Repositories

- **Frontend Repository:** [Link to your frontend GitHub repository]
- **Backend Repository:** [Link to your backend GitHub repository]

## 📦 Installation

### Frontend

1. **Clone the frontend repository:**

```bash
git clone <https://github.com/joynalmdabedin440/stock-market-json-data-view >
cd client
```

2. **Install dependencies:**

```bash
npm install react react-dom tailwindcss axios
```

3. **Set up TailwindCSS:**

```bash
npx tailwindcss init
```

Add the following to `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Start the React frontend:**

```bash
npm start
```

The frontend runs on `http://localhost:3000/`.

### Backend

1. **Clone the backend repository:**

```bash
git clone <https://github.com/joynalmdabedin440/stock-market-server >
cd server
```

2. **Install dependencies:**

```bash
npm install express cors axios
```

3. **Start the backend server:**

```bash
node index.js
```

The backend runs on `http://localhost:5000/`.

## 📚 Usage

- **Search:** Use the search bar to filter by trade code.
- **Sort:** Click on any column header to sort the data.
- **Load More:** Scroll to load 1000 more records at a time.

## 🌐 Deployment

The frontend is deployed on **Vercel**: [Live App](https://stock-market-json-data-view-frontend-4ohbbt3r8.vercel.app/)

To deploy yourself:

1. **Vercel Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy frontend
vercel
```

## 🎯 What I Learned

- **ReactJS:** Building dynamic, data-driven UI with hooks.
- **Node.js & Express:** Creating and serving RESTful APIs.
- **Optimization:** Implementing efficient data loading to boost performance.
- **Deployment:** Hosting projects on Vercel.
- **Problem-solving:** Debugging sorting and search functionality.

## 🚧 Challenges Faced

- **Data Optimization:** Ensuring large JSON data loads efficiently.
- **Deployment:** Debugging CORS issues between frontend and backend.
- **Performance:** Managing re-renders while handling search and sorting.

## 📩 Contact

- **Name:** Md Joynal Ahmed

- **Email:** joynalmdabedin440@gmail.com
- **Frontend GitHub Repo:** [[Link to your frontend GitHub repository](https://github.com/joynalmdabedin440/stock-market-json-data-view)]
- **Backend GitHub Repo:** [https://github.com/joynalmdabedin440/stock-market-server]

---

Thank you for reviewing my project! Looking forward to your feedback! 🙌

