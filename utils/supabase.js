import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rlaewngiwzgnzxtaltke.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsYWV3bmdpd3pnbnp4dGFsdGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4NTczNjIsImV4cCI6MjA2NDQzMzM2Mn0.q1jgD2M-laEH6HDT6XVWEI8gXx2V94PYXMd_6l4jVW4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;