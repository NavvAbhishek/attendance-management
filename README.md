# Attendix - Attendance Management System

**Attendix**, an Attendance Management System designed for tracking attendance in educational institutions.

- 👩‍🏫 **Teachers** can easily create and manage classes, view attendance histories, and track student participation.
- 👨🏻‍💼 **Admins** can view all classes and attendance records via the Dashboard.
- 👨‍🎓 **Students** can mark their attendance using unique class or session IDs and access their attendance history.
- 🔐 **JOSÉ** for access control management
- 🛡️ **JWT** for secure user authentication
- 🔔 **React-hot-toast** for real-time popup notifications

## Tech Stack:
- ⚛️ **Next.js with TypeScript** for fast, scalable front-end development
- 💻 **Tailwind CSS** for a responsive UI
- 🗄️ **MongoDB** for efficient data storage and management

## Getting Started

Follow these instructions to set up and run the Attendix project locally.

### Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (for database setup)
- A MongoDB account or local instance running
- **npm** for package manager

### Set up environment variables:

Create a **.env** file in the root directory and add the following variables:

- MONGODB_URI=your-mongodb-uri
- TOKEN_SECRET=your-jwt-secret

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NavvAbhishek/attendance-management.git
   cd attendix
   npm install
   npm run dev
   ```


