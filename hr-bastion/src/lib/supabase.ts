// These two values are designed to be public. The website tables only let
// visitors add rows: they can't read, change or delete anything in them.
const SUPABASE_URL = "https://yavapibvckzdcfejewoy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_vWRwWYmqFEcMzX7W65THGg_zsVl-KcU";

export function insertRow(table: "website_leads" | "website_consent_log", row: object, options: RequestInit = {}) {
  return fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    ...options,
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
  });
}
