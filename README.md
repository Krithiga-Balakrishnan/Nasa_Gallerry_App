# GalaxyGaze - NASA Image Explorer

**GalaxyGaze** is an interactive web application that allows users to explore the wonders of the cosmos using NASA's public APIs. Users can view the Astronomy Picture of the Day (APOD), explore Mars rover photos, and manage a secure personal profile through Firebase authentication.

---

## Features

-  **User Authentication**
  - Email & password sign-up/login
  - Google OAuth login
  - Secure logout
-  **User Profile Management**
  - View and update username
-  **Astronomy Picture of the Day**
  - View today’s image or search by date
-  **Mars Rover Images**
  - View photos by date and camera from the Curiosity rover
-  **Responsive Design**
  - Seamless UX across desktops, tablets, and mobile devices

---

## Tech Stack

- **Frontend**: React
- **Authentication**: Firebase Auth
- **API Integration**: NASA Open APIs
- **Styling**: Tailwind CSS (or relevant CSS framework)
- **State Management**: React Hooks

---

## NASA APIs Used

### Astronomy Picture of the Day (APOD)
- **Endpoint**: `https://api.nasa.gov/planetary/apod`
- **Parameters**:
  - `date`: `YYYY-MM-DD`
  - `api_key`: Your NASA API key

### Mars Rover Photos (Curiosity)
- **Endpoint**:  
  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=YYYY-MM-DD&camera={camera}`
- **Parameters**:
  - `earth_date`: `YYYY-MM-DD`
  - `camera`: Optional camera name
  - `api_key`: Your NASA API key

---

## Authentication Guide

- **Sign Up**: Email, password, and username
- **Log In**: With registered credentials or Google
- **Account Info**: Username & email shown in navbar
- **Edit Profile**: Click on username to update
- **Logout**: Button in navigation menu

---

## Challenges Faced

-  **API Rate Limiting**: Managed NASA's usage restrictions with fallback handling.
-  **Performance Optimization**: Efficient rendering of large image datasets.
-  **Secure Auth Integration**: Implemented privacy-respecting Firebase auth.
-  **Cross-Platform Responsiveness**: Ensured UI worked across screen sizes and browsers.

---

## Installation

```bash
git clone https://github.com/your-username/Nasa_Gallerry_App.git
cd Nasa_Gallerry_App
npm install
npm start
```

---

## Author

**Krithiga D. Balakrishnan**  
[GitHub](https://github.com/Krithiga-Balakrishnan) • [Portfolio](https://krithiga-balakrishnan.vercel.app)
