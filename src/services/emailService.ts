import nodemailer from 'nodemailer';
import { AppointmentDetails } from './calendarService';

// Email configuration
const EMAIL_CONFIG = {
  host: process.env.REACT_APP_EMAIL_HOST,
  port: parseInt(process.env.REACT_APP_EMAIL_PORT || '587'),
  secure: process.env.REACT_APP_EMAIL_SECURE === 'true',
  auth: {
    user: process.env.REACT_APP_EMAIL_USER,
    pass: process.env.REACT_APP_EMAIL_PASS,
  },
};

export const emailService = {
  // Send confirmation email to client
  sendConfirmationEmail: async (appointment: AppointmentDetails) => {
    try {
      const transporter = nodemailer.createTransport(EMAIL_CONFIG);

      const mailOptions = {
        from: `"Abhishek Garments" <${EMAIL_CONFIG.auth.user}>`,
        to: appointment.email,
        subject: 'Appointment Confirmation - Abhishek Garments',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Appointment Confirmation</h2>
            <p>Dear ${appointment.name},</p>
            <p>Thank you for choosing Abhishek Garments. Your appointment has been confirmed with the following details:</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Service:</strong> ${appointment.service}</p>
              <p><strong>Date:</strong> ${appointment.date}</p>
              <p><strong>Time:</strong> ${appointment.time}</p>
              <p><strong>Location:</strong> Abhishek Garments, [Your Address]</p>
            </div>

            <p>Please arrive 10 minutes before your scheduled appointment time.</p>
            
            <p>If you need to reschedule or have any questions, please contact us at:</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Email: [Your Email]</p>

            <p>We look forward to serving you!</p>
            
            <p>Best regards,<br>Abhishek Garments Team</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      throw error;
    }
  },

  // Send notification email to staff
  sendStaffNotification: async (appointment: AppointmentDetails) => {
    try {
      const transporter = nodemailer.createTransport(EMAIL_CONFIG);

      const mailOptions = {
        from: `"Abhishek Garments" <${EMAIL_CONFIG.auth.user}>`,
        to: process.env.REACT_APP_STAFF_EMAIL,
        subject: 'New Appointment Scheduled',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Appointment Scheduled</h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Client Name:</strong> ${appointment.name}</p>
              <p><strong>Service:</strong> ${appointment.service}</p>
              <p><strong>Date:</strong> ${appointment.date}</p>
              <p><strong>Time:</strong> ${appointment.time}</p>
              <p><strong>Phone:</strong> ${appointment.phone}</p>
              <p><strong>Email:</strong> ${appointment.email}</p>
              <p><strong>Notes:</strong> ${appointment.notes || 'No additional notes'}</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending staff notification:', error);
      throw error;
    }
  },

  // Send reminder email to client
  sendReminderEmail: async (appointment: AppointmentDetails) => {
    try {
      const transporter = nodemailer.createTransport(EMAIL_CONFIG);

      const mailOptions = {
        from: `"Abhishek Garments" <${EMAIL_CONFIG.auth.user}>`,
        to: appointment.email,
        subject: 'Appointment Reminder - Abhishek Garments',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Appointment Reminder</h2>
            <p>Dear ${appointment.name},</p>
            <p>This is a reminder for your upcoming appointment with Abhishek Garments:</p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Service:</strong> ${appointment.service}</p>
              <p><strong>Date:</strong> ${appointment.date}</p>
              <p><strong>Time:</strong> ${appointment.time}</p>
              <p><strong>Location:</strong> Abhishek Garments, [Your Address]</p>
            </div>

            <p>Please arrive 10 minutes before your scheduled appointment time.</p>
            
            <p>If you need to reschedule or have any questions, please contact us at:</p>
            <p>Phone: [Your Phone Number]</p>
            <p>Email: [Your Email]</p>

            <p>We look forward to serving you!</p>
            
            <p>Best regards,<br>Abhishek Garments Team</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending reminder email:', error);
      throw error;
    }
  },
}; 