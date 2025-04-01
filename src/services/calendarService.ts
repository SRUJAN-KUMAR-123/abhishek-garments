import { google } from 'googleapis';

// Initialize Google Calendar API
const calendar = google.calendar('v3');

// Your Google Calendar API credentials
const CREDENTIALS = {
  client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
};

// Calendar ID for your business
const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;

export interface AppointmentDetails {
  date: string;
  time: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export const calendarService = {
  // Initialize Google OAuth2 client
  initClient: () => {
    return new google.auth.OAuth2(
      CREDENTIALS.client_id,
      CREDENTIALS.client_secret,
      CREDENTIALS.redirect_uri
    );
  },

  // Get available time slots for a specific date
  getAvailableSlots: async (date: string) => {
    try {
      const startTime = new Date(date);
      startTime.setHours(0, 0, 0, 0);
      
      const endTime = new Date(date);
      endTime.setHours(23, 59, 59, 999);

      const response = await calendar.events.list({
        calendarId: CALENDAR_ID,
        timeMin: startTime.toISOString(),
        timeMax: endTime.toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      });

      // Process existing events to find available slots
      const existingEvents = response.data.items || [];
      const availableSlots = generateTimeSlots(existingEvents);
      
      return availableSlots;
    } catch (error) {
      console.error('Error fetching available slots:', error);
      throw error;
    }
  },

  // Create a new appointment in Google Calendar
  createAppointment: async (appointment: AppointmentDetails) => {
    try {
      const [year, month, day] = appointment.date.split('-');
      const [hours, minutes] = appointment.time.split(':');
      const isPM = appointment.time.includes('PM');
      
      const startTime = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours) + (isPM ? 12 : 0),
        parseInt(minutes)
      );

      const endTime = new Date(startTime);
      endTime.setHours(endTime.getHours() + 1); // Default 1-hour duration

      const event = {
        summary: `${appointment.service} - ${appointment.name}`,
        description: `
          Client: ${appointment.name}
          Service: ${appointment.service}
          Phone: ${appointment.phone}
          Notes: ${appointment.notes || 'No additional notes'}
        `,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: 'Asia/Kolkata',
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: 'Asia/Kolkata',
        },
      };

      const response = await calendar.events.insert({
        calendarId: CALENDAR_ID,
        requestBody: event,
      });

      return response.data;
    } catch (error) {
      console.error('Error creating appointment:', error);
      throw error;
    }
  },
};

// Helper function to generate available time slots
function generateTimeSlots(existingEvents: any[]) {
  const slots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM

  for (let hour = startHour; hour < endHour; hour++) {
    const time = `${hour.toString().padStart(2, '0')}:00`;
    const isSlotAvailable = !existingEvents.some(event => {
      const eventStart = new Date(event.start.dateTime);
      return eventStart.getHours() === hour;
    });

    if (isSlotAvailable) {
      slots.push(time);
    }
  }

  return slots;
} 