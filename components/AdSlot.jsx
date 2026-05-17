"use client";

import { useEffect } from "react";

const AD_CLIENT = "ca-pub-8695688664040613";
const AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_AD_SLOT;

export function AdSlot({ id, label, compact = false }) {
  const hasManualSlot = /^\d+$/.test(AD_SLOT ?? "");

  useEffect(() => {
    if (!hasManualSlot) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ad blockers or delayed script loading can make AdSense unavailable.
    }
  }, [hasManualSlot, id]);

  return (
    <aside className={compact ? "adSlot compactAd" : "adSlot"} aria-label={label}>
      {hasManualSlot ? (
        <ins
          className="adsbygoogle"
          data-ad-client={AD_CLIENT}
          data-ad-format="auto"
          data-ad-slot={AD_SLOT}
          data-full-width-responsive="true"
          style={{ display: "block" }}
        />
      ) : null}
    </aside>
  );
}
