# 🛒 E-Commerce Website (Advanced MERN Stack)

A **full-stack E-Commerce web application** built using the **MERN stack**, featuring secure authentication, dynamic cart management, advanced order handling, multiple payment methods, and a role-based admin dashboard.

---

## 🚀 Live Demo

🌐 [Click here to view the live site](https://skymart-shop.vercel.app/)  
📂 [Download this project as ZIP](https://github.com/Sampreeth-CH/E-COMMERCE/archive/refs/heads/main.zip)

---

## 🚀 Key Features

### 👤 User Features
- User authentication (Login / Register) using JWT
- Product browsing with detailed product pages
- Add, update, and remove items from cart
- Persistent cart using `localStorage`
- Shipping address and payment method persistence
- Secure checkout flow
- Order placement and tracking
- Multiple payment methods:
  - PayPal
  - Cash on Delivery (COD)
- Order history and order details view

---

### 🛠️ Admin Features
- Admin authentication & authorization
- User management
- Product management (Create / Update / Delete)
- View all orders
- Mark Cash on Delivery orders as **Paid**
- Mark orders as **Delivered**
- Real-time order status updates

---

## 🧑‍💻 Tech Stack

### Frontend
- React
- Redux & Redux Thunk
- React Router
- React Bootstrap
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Payments
- PayPal Integration
- Cash on Delivery (COD)

---

## 📂 Project Folder Structure

```bash
E-COMMERCE/
│
├── backend/
│   ├── .vercel/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── seeder.js
│   └── server.js
│
├── frontend/
│   ├── .vercel/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── actions/
│       ├── api/
│       ├── components/
│       ├── constants/
│       ├── reducers/
│       ├── screens/
│       ├── App.js
│       ├── bootstrap.min.css
│       └── index.css
│
└── README.md
```

---

## 🔐 Authentication & Authorization
- JWT-based authentication
- Protected routes using React Router
- Role-based access control (Admin vs User)
- Secure API routes using middleware

---

## 🛒 Order Lifecycle

```bash
Cart → Shipping → Payment → Place Order → Order Details
```

- Orders persist across sessions
- Redux state resets correctly after each order
- Prevents navigation bugs without page refresh

---

## 💳 Payment Flow

### PayPal
- Secure online payment
- Automatic order payment confirmation

### Cash on Delivery (COD)
- Order placed without online payment
- Admin manually marks order as paid
- Backend supports PayPal-compatible payment structure

---

## 🧠 State Management (Redux)

Redux manages:
- Cart state
- User authentication
- Order creation lifecycle
- Payment & delivery status
- Admin operations

Persistent data:
- Cart items
- Shipping address
- User session

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

## ▶️ Run the Project Locally

### Backend
```bash
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🧪 Admin Test Credentials

```text
Email: admin@example.com
Password: 123456
```

---

## 🧠 Advanced Implementations (Already Integrated)

- Redux state reset to prevent stale navigation
- Persistent cart & auth state using `localStorage`
- Separate payment handlers for PayPal & COD
- Admin-controlled COD payment confirmation
- Secure API route protection using middleware
- Robust error handling on frontend & backend
- Clean separation of concerns (MVC architecture)

---

## 🔮 Advanced Enhancements (Next-Level)

- Real-time order status updates using WebSockets
- Role-based admin permissions (super admin / staff)
- Advanced product analytics dashboard
- Invoice generation (PDF)
- Order cancellation & refund workflow
- Email notifications for order & delivery updates
- Performance optimization with caching
- CI/CD deployment pipeline

---

## 👤 Author

**Sampreeth CH**

- 🔗 LinkedIn: [Sampreeth CH](https://www.linkedin.com/in/sampreethch)
- 🐙 GitHub: [@Sampreeth-CH](https://github.com/Sampreeth-CH)
- 📧 Email: sampreethchsampreethch@gmail.com
- 🌐 Portfolio: *(Coming soon)*

Feel free to connect or reach out for collaboration, feedback, or just to say hi!

---

## ⭐ Support

If you like this project, please ⭐ the repository on GitHub.
