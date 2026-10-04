export type BookingRequest = {
  kind: "booking";
  name: string;
  email: string;
  phone: string;
  subject: string;
  date: string;
  message: string;
};

export type NewsletterRequest = {
  kind: "newsletter";
  email: string;
};

export type ContactRequest = BookingRequest | NewsletterRequest;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Plain-text summary shared by the notification email and the WhatsApp message.
export function formatBooking(b: BookingRequest) {
  return [
    `New consultation booking`,
    ``,
    `Name: ${b.name}`,
    `Email: ${b.email}`,
    `Phone: ${b.phone}`,
    `Subject: ${b.subject}`,
    `Preferred date: ${b.date || "Not specified"}`,
    ``,
    `Message:`,
    b.message || "(none)",
  ].join("\n");
}
