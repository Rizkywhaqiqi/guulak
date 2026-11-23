export function Marquee() {
  const phrase = "A FEAST FOR THE SENSES  ✳  KOREAN FOOD  ✳  GOOD VIBES  ✳  RASA SERU, MOMEN BARENG!  ✳  ";
  return (
    <div className="marquee" aria-label="A Feast for the Senses. Korean food. Good vibes. Rasa Seru, Momen Bareng!">
      <div className="marquee-track" aria-hidden="true">
        <span>{phrase}{phrase}</span><span>{phrase}{phrase}</span>
      </div>
    </div>
  );
}
