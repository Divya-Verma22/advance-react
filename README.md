# Advanced React Learning Journey 🚀

This repository documents my progress as I dive deeper into **React.js** and apply advanced concepts to build real-world projects.  
I’ve focused on working with APIs, creating reusable hooks, and writing optimized, clean code — along with applying responsive design principles.

---

## 📚 What I've Learned

### 1. Fetch API with Axios
- Learned how to make GET and POST requests using the **Axios** library.
- Understood Axios advantages over the native `fetch()` API (e.g., request/response interceptors, automatic JSON parsing).
- Implemented API error handling and loading states.

### 2. Random GIF Generator Project 🎥
- Built a project that:
  - Fetches **random GIFs** from an API.
  - Also fetches **specific GIFs** based on user input.
- Used **Axios** for all API calls.
- Implemented **Responsive CSS** so the UI works across desktop, tablet, and mobile.

### 3. Custom React Hooks
- Learned how to create reusable hooks for cleaner and more maintainable code.
- Created my first custom hook: **`useGif`**
  - Encapsulates API fetching logic.
  - Handles loading state and random/keyword-based GIF fetching.
  - Keeps component code **optimized** and **DRY**.

---

## 🛠️ Tech Stack
- **React.js** (with Hooks)
- **Axios** (API calls)
- **Custom Hooks**
- **Responsive CSS** (Flexbox & Media Queries)

---

----------------------------------Project 7--------------------------------------------


📚 Blog App – Context API Learning (Day 2 with React)
🚀 What I Learned Today
Today, I learned about React Context API – what it is, why we need it, and how to use it in a real project.
I built a simple blog app where data is fetched from an API and shared across components using Context API.

❓ Why Context API?
When building React apps, data often needs to be passed from a parent component to deeply nested child components.
If we use props drilling (passing data through multiple layers of props), it becomes messy and hard to maintain.

Context API solves this problem by:
Allowing global state management in React without external libraries like Redux.
Making data available to any component without passing props manually at each level.
Keeping code clean, simple, and scalable.

⚡ Features of My Project
Fetch blog posts from an API.
Store fetched data in Context API.
Access the data in different components without props drilling.
Responsive & beginner-friendly structure.

🛠 Tech Stack
React (with Vite)
Context API
Fetch API
CSS (basic styling)

<!-- ----------------------------project-7 advance part--------------------------------->
This project is part of my Advanced React learning journey.
It’s a Blog Web App that uses Context API for state management and fetches all data dynamically from an API.
It also supports page changes, related blog navigation, API query parameter manipulation, and search functionality.

🚀 Features
Dynamic Routing – Navigate between different pages without reloads.
Context API for State Management – Share and manage global data easily across components.
API Integration – Fetch blog posts, related blogs, and more directly from an API.
Related Blog Navigation – Click on a blog link to view its related blogs fetched dynamically.
API Query Parameter Handling – Use searchParams to filter, paginate, and fetch relevant data.
Search Functionality – Search blogs based on keywords.
Responsive UI – Works seamlessly on mobile, tablet, and desktop.

🛠️ Tech Stack
React.js (Advanced Concepts)
React Router DOM (Page navigation)
Context API (State management)
Fetch API / Axios (Data fetching)
URLSearchParams (Manipulating API queries)
CSS (Responsive design)



