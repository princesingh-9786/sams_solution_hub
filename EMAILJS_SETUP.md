# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email functionality for the contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (samssolutionshub@gmail.com)
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Service Interest: {{service}}
Project Budget: {{budget}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key** (also called User ID)

## Step 5: Update App.tsx

Replace the placeholder values in `src/App.tsx`:

1. Line 49: Replace `'YOUR_PUBLIC_KEY'` with your actual public key
2. Line 78: Replace `'YOUR_SERVICE_ID'` with your service ID
3. Line 79: Replace `'YOUR_TEMPLATE_ID'` with your template ID

Example:
```typescript
// Initialize EmailJS
useEffect(() => {
  emailjs.init('user_xxxxxxxxxxxxxxxx'); // Your public key
}, []);

// In handleSubmit function
const serviceId = 'service_xxxxxxxxx'; // Your service ID
const templateId = 'template_xxxxxxxxx'; // Your template ID
```

## Step 6: Test the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (samssolutionshub@gmail.com) for the message

## Troubleshooting

- Make sure all three IDs (Public Key, Service ID, Template ID) are correct
- Check that your email service is properly connected
- Verify the template variables match the ones used in the code
- Check browser console for any error messages

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

For production use, consider upgrading to a paid plan.
