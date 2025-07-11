# Portfolio Backend API

Backend API for the portfolio contact form built with Node.js, Express, and MongoDB.

## Features

- ✅ Contact form submission with validation
- ✅ MongoDB database storage
- ✅ Email notifications (admin + user confirmation)
- ✅ Rate limiting protection
- ✅ CORS configuration
- ✅ Security headers with Helmet
- ✅ Input validation with express-validator
- ✅ Error handling and logging

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `env.example` to `.env` and fill in your values:

```bash
cp env.example .env
```

Required environment variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM=your_email@gmail.com
EMAIL_TO=saif.rahman.va@gmail.com

# Security
CORS_ORIGIN=https://saif-ur-rahman.com
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

### 3. MongoDB Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Add it to your `.env` file

### 4. Email Setup (Gmail)

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password
3. Use this password in your `.env` file

### 5. Run Development Server

```bash
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a potential project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "data": {
    "id": "60f7b3b3b3b3b3b3b3b3b3b3",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "createdAt": "2023-07-20T10:30:00.000Z"
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2023-07-20T10:30:00.000Z"
}
```

## Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Set environment variables in Vercel dashboard

### Option 2: Netlify Functions

1. Create `netlify/functions/api.js` with your server code
2. Deploy to Netlify
3. Set environment variables in Netlify dashboard

### Option 3: Railway

1. Connect your GitHub repo to Railway
2. Set environment variables
3. Deploy automatically

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: All inputs are validated and sanitized
- **CORS Protection**: Configured for your domain only
- **Security Headers**: Helmet.js for additional security
- **Error Handling**: Proper error responses without exposing internals

## Database Schema

### Contact Collection

```javascript
{
  _id: ObjectId,
  name: String (required, 2-100 chars),
  email: String (required, validated),
  subject: String (optional, max 200 chars),
  message: String (required, 10-1000 chars),
  ipAddress: String (required),
  userAgent: String (required),
  isRead: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

## Email Templates

### Admin Notification
- Sent to your email when someone submits the form
- Includes all form data and submission details

### User Confirmation
- Sent to the user who submitted the form
- Confirms receipt and sets expectations

## Development

### Running Tests
```bash
npm test
```

### Linting
```bash
npm run lint
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check your connection string
   - Ensure your IP is whitelisted in MongoDB Atlas

2. **Email Not Sending**
   - Verify Gmail app password
   - Check if 2FA is enabled
   - Ensure less secure apps is disabled

3. **CORS Errors**
   - Update CORS_ORIGIN in your environment variables
   - Check that your frontend URL matches

## License

MIT 