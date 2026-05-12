"use client";

import { useEffect } from "react";

const AD_CLIENT = "ca-pub-8695688664040613";

export function AdSlot({ id, label, compact = false }) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers or delayed script loading can make AdSense unavailable.
    }
  }, [id]);

  return (
    <aside className={compact ? "adSlot compactAd" : "adSlot"} aria-label={label}>
      <ins
        className="adsbygoogle"
        data-ad-client={AD_CLIENT}
        data-ad-format="auto"
        data-ad-slot={id}
        data-full-width-responsive="true"
        style={{ display: "block" }}
      />
    </aside>
  );
}
