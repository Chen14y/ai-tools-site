import Image from "next/image";

export function HeroVisual({ labels }) {
  return (
    <div className="heroVisual" aria-label={labels.aria}>
      <Image
        src="/images/hero-ai-workspace.png"
        alt={labels.alt}
        fill
        priority
        sizes="(max-width: 980px) 100vw, 52vw"
        className="heroImage"
      />
      <div className="heroGlassPanel panelOne">
        <span>{labels.panelOneTitle}</span>
        <strong>{labels.panelOneValue}</strong>
      </div>
      <div className="heroGlassPanel panelTwo">
        <span>{labels.panelTwoTitle}</span>
        <strong>{labels.panelTwoValue}</strong>
      </div>
      <div className="pulseNode nodeOne" />
      <div className="pulseNode nodeTwo" />
      <div className="pulseNode nodeThree" />
    </div>
  );
}
