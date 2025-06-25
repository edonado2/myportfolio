# Formspree Integration Setup Guide

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Copy the form endpoint URL (it will look like: `https://formspree.io/f/xaybzwkd`)

## Step 3: Update the Contact Form

1. Open `src/components/Contact.js`
2. Find this line:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT', {
   ```
3. Replace `YOUR_FORMSPREE_ENDPOINT` with your actual Formspree endpoint
4. For example:
   ```javascript
   const response = await fetch('https://formspree.io/f/xaybzwkd', {
   ```

## Step 4: Test the Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message
5. Check the Formspree dashboard to see the submission

## Step 5: Customize Formspree Settings (Optional)

In your Formspree dashboard, you can:
- Set up email notifications
- Add spam protection
- Configure auto-replies
- Set up webhooks
- Add custom fields

## Features Included

✅ **Form Validation**: Client-side validation for all fields
✅ **Loading States**: Shows spinner while submitting
✅ **Success Messages**: Confirms when message is sent
✅ **Error Handling**: Shows errors if submission fails
✅ **Responsive Design**: Works on all devices
✅ **Accessibility**: Proper labels and ARIA attributes

## Troubleshooting

- **Form not sending**: Check that your Formspree endpoint is correct
- **No email received**: Check spam folder and Formspree dashboard
- **Validation errors**: Ensure all required fields are filled
- **Network errors**: Check internet connection and Formspree service status

## Security Notes

- Formspree handles spam protection automatically
- Your email address is protected from public view
- All submissions are logged in your Formspree dashboard
- You can block specific email addresses if needed 