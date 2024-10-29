
# 🎬**Movie Tickets Booking Web Application**
An intuitive and feature-rich Movie Tickets Booking platform built using the MERN stack (MongoDB, Express.js, React, Node.js) along with Bcrypt and JWT for secure authentication, and MUI for a sleek, responsive user interface. Users can explore and book movie tickets, while admins can manage movie listings effectively.

## 🚀 **Tech Stack**

## **Client:** 

**• React:** A JavaScript library for building user interfaces.

**• Material-UI (MUI):** A popular React UI framework for building responsive applications.

**• Redux:** State management for predictable application behavior (if used).

## **Server:**

**• Node.js:**  JavaScript runtime for building server-side applications.

**• Express.js:**  Web framework for Node.js, used for building RESTful APIs.

**• Bcrypt:** Library for hashing passwords to secure user credentials.

**• JWT (JSON Web Tokens):** Securely transmits information between parties as a JSON object.


## **Database:**
**• MongoDB:** NoSQL database for storing application data in flexible, JSON-like documents.


## **Features**
### User Features
- Book Tickets: Browse an extensive list of movies, select showtimes, and book tickets seamlessly.
- Manage Bookings: View and manage your booking details, including cancellations and modifications.
### Admin Features
- Add Movies: Easily add new movies with relevant details such as title, genre, synopsis, and showtimes.
- Manage Movies: Update or remove movies, adjust showtimes, and monitor ticket availability with a user-friendly interface.


## 📂 **Project Structure**


```plaintext
movie-tickets-booking/
│
├── backend/                 
│   ├── controllers/         # Business logic for handling requests
│   ├── models/              # Mongoose models(Movie,Booking,User,Amin)
│   ├── routes/              # API endpoint definitions
│   ├── middlewar            # Middleware for authentication and error handling
│   ├── config/              # Configuration files (database, JWT secret)
│   └── app.js               # Main server setup and configurations
│
└── movies/                
    ├── src/
    │   ├── components/      # Reusable UI components (MovieList, BookingForm, etc.)
    │   ├── pages/           # Page components (Home, MovieDetails, Bookings)
    │   ├── context/         # Context API for global state management
    │   ├── hooks/           # Custom React hooks for functionality
    │   ├── App.js           # Root app component
    │   └── index.js         # Entry point
    └── public/
        └── index.html       # Main HTML file
```


## 🔑 **Setup Instructions**

### Prerequisites
Ensure you have the following installed:
 - [Node.js](https://nodejs.org/en/blog/release/v14.17.3)(version 14 or higher)
 - [MongoDB](https://www.mongodb.com/cloud/atlas/register)(local or MongoDB Atlas)


## **Installation**

 1 . Clone the repository:

```bash
 git clone https://github.com/Ganesh336699/movie-tickets-booking.git
cd movie-tickets-booking

```


 2 . Install Backend Dependencies:

 ```bash
cd backend
npm install
```

 3 . Install Frontend Dependencies:

```bash
cd ../movies
npm install

```
 4 . Set Up Environment Variables: Create a .env file in the backend directory with the following content:

```bash
MONGO_URI=mongodb+srv://koreganesh114:Ganesh2001@moviebookingcluster.nekon.mongodb.net/
JWT_SECRET=GNESHKORE336699
PORT=5000

```
5 . Run the Application:

   • Start the backend server:

```bash
cd backend
npm start

```
• Start the frontend server:
```bash
cd ../movies
npm start

```
6 . Access the app at http://localhost:3000.
## 🔗 Get in Touch
Feel free to connect for collaboration, discussions, or inquiries:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/kore-ganesh-725986324/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Ganeshkore79441)

