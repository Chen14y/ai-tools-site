export function AdSlot({ id, label, compact = false }) {
  return (
    <aside className={compact ? "adSlot compactAd" : "adSlot"} aria-label={label}>
      <span>{label}</span>
      <small>ID: {id}</small>
    </aside>
  );
}
