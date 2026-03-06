const API_BASE = "http://localhost:3001/api";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  interest: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  email: string;
  organization: string;
  title: string;
  companySize?: string;
  industry?: string;
  products?: string[];
}

export interface WaitlistFormData {
  email: string;
  source?: string;
}

export interface HealthcareFormData {
  name: string;
  org: string;
  email: string;
  role: string;
}

async function postToApi(endpoint: string, data: object): Promise<void> {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok || !json.success) {
    throw new Error(json.error || "Failed to send email. Please try again.");
  }
}

export const sendContactEmail = (data: ContactFormData) =>
  postToApi("contact", data);

export const sendDemoEmail = (data: DemoFormData) =>
  postToApi("demo", data);

export const sendWaitlistEmail = (data: WaitlistFormData) =>
  postToApi("waitlist", data);

export const sendHealthcareEmail = (data: HealthcareFormData) =>
  postToApi("healthcare", data);
