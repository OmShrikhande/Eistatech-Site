# EmailJS Setup Guide

This guide will help you set up EmailJS for sending emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up Free" and create an account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to **Email Services** in the sidebar
2. Click **Add Service**
3. Choose a service (Gmail is recommended)
4. Follow the authorization steps to connect your email account
5. Note down your **Service ID** (e.g., `service_xxxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the sidebar
2. Click **Create New Template**
3. Create a template with the following variables:

```
Template Name: Contact Form

Subject: New Contact Form Submission from {{from_name}}

Content:
Name: {{from_name}}
Email: {{from_email}}
Organization: {{organization}}
Phone: {{phone}}
Service Type: {{service_type}}

Message:
{{message}}
```

4. Note down your **Template ID** (e.g., `template_xxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (starts with `YOUR_EMAILJS_PUBLIC_KEY`)

## Step 5: Update Contact.jsx

Replace the following placeholders in `src/pages/Contact.jsx`:

```javascript
// Line 9: Replace with your public key
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

// Line 73-76: Replace with your service ID and template ID
await emailjs.send(
  'YOUR_EMAILJS_SERVICE_ID',
  'YOUR_EMAILJS_TEMPLATE_ID',
  templateParams
);

// Line 66: Replace with your email address where you want to receive messages
to_email: 'your-email@example.com',
```

## Step 6: Set Environment Variables (Recommended for Security)

Create a `.env` file in your project root:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_RECIPIENT_EMAIL=your_email@example.com
```

Then update Contact.jsx to use these variables:

```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// In templateParams:
to_email: import.meta.env.VITE_EMAILJS_RECIPIENT_EMAIL,

// In emailjs.send():
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams
);
```

## Verification

1. Test the contact form on your site
2. Check your EmailJS dashboard to see if the email was sent
3. Check your email inbox for the received message

## Troubleshooting

- **Emails not sending**: Check that all IDs and keys are correctly entered
- **Quota exceeded**: Free tier has a limit. Check your plan
- **Email blocked**: Check spam/junk folder
- **Template variables not showing**: Ensure variable names in template match those in templateParams

## Support

For more help, visit: https://www.emailjs.com/docs/
