"use client";

import { OPEN_SETTINGS_EVENT } from "@/components/CookieConsent";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="cursor-pointer hover:text-white transition-colors"
    >
      Cookie settings
    </button>
  );
}
