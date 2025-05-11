// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');
// require('dotenv').config(); // For environment variables

// const app = express();

// // ===== 1. Enhanced CORS Configuration =====
// const corsOptions = {
//   origin: 'http://localhost:4200',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
// };

// app.use(cors(corsOptions));

// // ===== 2. Preflight Request Handling =====
// app.options('*', cors(corsOptions)); // Handle all OPTIONS requests

// // ===== 3. Middleware =====
// app.use(express.json());

// // Request logger (debugging)
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
//   next();
// });

// // ===== 4. Routes =====
// app.get('/api/health-check', (req, res) => {
//   res.json({ status: 'healthy', timestamp: new Date() });
// });

// app.use('/api/auth', authRoutes);

// // ===== 5. Error Handling =====
// // 404 Handler
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Global error handler
// app.use((err, req, res, next) => {
//   console.error('🚨 Server error:', err.stack);
//   res.status(500).json({ 
//     error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error' 
//   });
// });

// // ===== 6. Database & Server Startup =====
// const DB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/financeTrackerDB';

// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 5000
// })
// .then(() => {
//   console.log('✅ MongoDB connected successfully');
  
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`   CORS configured for: ${corsOptions.origin}`);
//   });
// })
// .catch(err => {
//   console.error('❌ MongoDB connection failed:', err.message);
//   process.exit(1);
// });

// // Handle process termination
// process.on('SIGINT', async () => {
//   await mongoose.connection.close();
//   console.log('MongoDB connection closed');
//   process.exit(0);
// });



































const express = require('express');
const cors = require('cors');

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: 'http://localhost:4200', // EXACT origin (no trailing slash)
  credentials: true, // REQUIRED for cookies/sessions
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Explicitly handle OPTIONS requests
app.options('*', cors(corsOptions)); // Important for preflight

// Your other middleware
app.use(express.json());

// Routes
app.post('/api/auth/login', (req, res) => {
  // Your login logic here
  res.json({ success: true });
});

// Start server
app.listen(3000, () => {
  console.log('Server running with CORS configured for:', corsOptions.origin);
});