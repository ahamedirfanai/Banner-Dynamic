# Dynamic Banner System

This project is a full stack web application built using Express, MySQL, and React, designed to create and manage a dynamic banner system. The banner can be controlled via a frontend dashboard, with settings stored in a MySQL database and served through an Express backend.

## Features

- **Dynamic Banner**: Display a banner with a custom description, countdown timer, and link.
- **Frontend Dashboard**: Manage banner settings including visibility, description, timer duration, and link via a React-based interface.
- **API Integration**: Backend routes for fetching and updating banner settings, integrated with a MySQL database.
- **Root Route Handling**: An optional root route to prevent "Cannot GET /" errors when accessing the base URL.
- **Countdown Timer**: The banner includes a countdown timer that hides the banner after the time expires.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Express.js, MySQL, Node.js
- **Database**: MySQL
- **Deployment**: Can be served via Express in production or run in development mode using React's development server.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/dynamic-banner-system.git
    ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd banner-dynamic/backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and configure your MySQL database settings:
     ```
     DB_HOST=your-database-host
     DB_USER=your-database-user
     DB_PASSWORD=your-database-password
     DB_NAME=your-database-name
     PORT=5000
     ```
   - Start the server:
     ```bash
     node server.js
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm start
     ```
   - Alternatively, build the frontend for production:
     ```bash
     npm run build
     ```

4. **Access the Application**:
   - In development mode, the React app runs on `http://localhost:3000`.
   - If served via Express in production mode, the app is available at `http://localhost:5000`.

## Future Enhancements

- **Additional Features**: More time could allow for implementing features such as user authentication, advanced error handling, and enhanced UI/UX.
- **Deployment**: Containerize the application using Docker and deploy it using Kubernetes for scalability.

## License

This project is licensed under the MIT License.
