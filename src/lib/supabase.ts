import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitAppointmentRequest(input: {
  name: string;
  email: string;
  phone?: string;
  treatment: string;
  preferredDate?: string;
  message?: string;
}) {
  const { error } = await supabase.from('appointment_requests').insert({
    name: input.name,
    email: input.email,
    phone: input.phone || null,
    treatment: input.treatment,
    preferred_date: input.preferredDate || null,
    message: input.message || null,
  });
  return error;
}
