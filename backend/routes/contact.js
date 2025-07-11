const express = require('express');
const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const Contact = require('../models/Contact');
const { sendNotificationEmail, sendConfirmationEmail } = require('../utils/emailService');

const router = express.Router();

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('subject')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Subject cannot be more than 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
];

// POST /api/contact
router.post('/', contactLimiter, validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, subject, message } = req.body;

    // Get client information
    const ipAddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
    const userAgent = req.headers['user-agent'];

    // Create contact record
    const contact = new Contact({
      name,
      email,
      subject,
      message,
      ipAddress,
      userAgent
    });

    // Save to database
    await contact.save();

    // Send notification email to admin (non-blocking)
    sendNotificationEmail({
      name,
      email,
      subject,
      message,
      ipAddress
    }).catch(err => console.error('Failed to send notification email:', err));

    // Send confirmation email to user (non-blocking)
    sendConfirmationEmail({
      name,
      email,
      subject,
      message
    }).catch(err => console.error('Failed to send confirmation email:', err));

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        subject: contact.subject,
        createdAt: contact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// GET /api/contact (for admin - optional, for viewing submissions)
router.get('/', async (req, res) => {
  try {
    // In production, you'd want to add authentication here
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v')
      .limit(50);

    res.json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router; 