// Import the global.css file in the index.js file:
import { config } from 'dotenv';
import '.styles/global.css';
config(); // loads .env into process.env

// console.log(process.env.API_AUTH_BASE_URL);
