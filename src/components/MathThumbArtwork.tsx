import type { TopicModule } from '../types/studio';

type ArtworkKind =
  | 'trig'
  | 'geometry'
  | 'circle'
  | 'solid3d'
  | 'graph'
  | 'stats'
  | 'prob'
  | 'logic'
  | 'algebra'
  | 'numbers';

function classifyTopic(topic: TopicModule): ArtworkKind {
  const text = `${topic.title} ${topic.theme} ${topic.description}`.toLocaleLowerCase('tr-TR');
  if (/trigonometri|dönme dolap|birim çember|kosinüs|sinüs|tanjant/.test(text)) return 'trig';
  if (/olasılık|şans|bayes|zar|örnek uzay|tümleyen/.test(text)) return 'prob';
  if (/istatistik|grafik|korelasyon|ortalama|medyan|tepe değer|histogram|serpme/.test(text)) return 'stats';
  if (/silindir|prizma|hacim|küp|3d|yüzey alanı/.test(text)) return 'solid3d';
  if (/çember|daire|yay|\bpi\b/.test(text)) return 'circle';
  if (/pisagor|üçgen|çokgen|açı|paralel|benzerlik|thales|öklid|yansıma|öteleme|döndürme|alan|çevre/.test(text))
    return 'geometry';
  if (/algoritma|akış şeması|mantık|sözde kod/.test(text)) return 'logic';
  if (/fonksiyon|parabol|eğim|koordinat|logaritma|üstel|doğru denklemi/.test(text)) return 'graph';
  if (/denklem|terazi|cebir|özdeşlik|polinom|çarpanlara/.test(text)) return 'algebra';
  return 'numbers';
}

export function MathThumbArtwork({ topic }: { topic: TopicModule }) {
  const kind = classifyTopic(topic);
  const accent = topic.color || '#2563EB';

  return (
    <svg
      viewBox="0 0 320 200"
      className="h-full w-full select-none"
      aria-hidden="true"
    >
      <defs>
        <pattern id={`grid-${topic.id}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="320" height="200" fill="#181C24" />
      <rect width="320" height="200" fill={`url(#grid-${topic.id})`} />

      {kind === 'trig' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <line x1="28" y1="100" x2="292" y2="100" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
          <line x1="88" y1="28" x2="88" y2="172" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
          <circle cx="88" cy="100" r="46" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" />
          <line x1="88" y1="100" x2="120" y2="68" stroke={accent} strokeWidth="2.5" />
          <line x1="120" y1="68" x2="120" y2="100" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="120" cy="68" r="4.5" fill={accent} />
          <path
            d="M 148 100 C 166 44, 194 44, 212 100 C 230 156, 258 156, 276 100"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.6"
          />
          <line x1="120" y1="68" x2="165" y2="68" stroke="rgba(245,158,11,0.5)" strokeWidth="1.2" strokeDasharray="4 3" />
        </g>
      )}

      {kind === 'geometry' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <polygon points="105,146 215,146 105,62" fill={`${accent}24`} stroke="rgba(255,255,255,0.85)" strokeWidth="2" />
          <rect x="105" y="132" width="14" height="14" fill="none" stroke="#F59E0B" strokeWidth="1.5" />
          <rect x="65" y="62" width="40" height="84" fill="rgba(56,189,248,0.14)" stroke="#38BDF8" strokeWidth="1.4" strokeDasharray="4 3" />
          <rect x="105" y="146" width="110" height="28" fill="rgba(16,185,129,0.14)" stroke="#10B981" strokeWidth="1.4" strokeDasharray="4 3" />
          <path d="M 188 146 A 26 26 0 0 1 196 130" fill="none" stroke={accent} strokeWidth="2.2" />
          <circle cx="105" cy="62" r="3.5" fill="#fff" />
          <circle cx="215" cy="146" r="3.5" fill="#fff" />
          <circle cx="105" cy="146" r="3.5" fill="#fff" />
        </g>
      )}

      {kind === 'circle' && (
        <g strokeLinecap="round">
          <circle cx="160" cy="100" r="56" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="2" />
          <path d="M 160 100 L 216 100 A 56 56 0 0 0 188 51 Z" fill={`${accent}45`} stroke={accent} strokeWidth="2" />
          <line x1="160" y1="100" x2="216" y2="100" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="160" cy="100" r="3.5" fill="#fff" />
          <line x1="88" y1="156" x2="232" y2="156" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="5 4" />
        </g>
      )}

      {kind === 'solid3d' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <polygon points="160,42 222,74 160,106 98,74" fill={`${accent}30`} stroke="#fff" strokeWidth="1.8" />
          <polygon points="98,74 160,106 160,164 98,132" fill="rgba(56,189,248,0.18)" stroke="#fff" strokeWidth="1.8" />
          <polygon points="222,74 160,106 160,164 222,132" fill="rgba(255,255,255,0.08)" stroke="#fff" strokeWidth="1.8" />
          <line x1="160" y1="42" x2="160" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeDasharray="4 4" />
        </g>
      )}

      {kind === 'graph' && (
        <g strokeLinecap="round">
          <line x1="36" y1="138" x2="284" y2="138" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <line x1="160" y1="26" x2="160" y2="174" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <path d="M 78 44 Q 160 202 242 44" fill="none" stroke={accent} strokeWidth="2.8" />
          <line x1="84" y1="150" x2="246" y2="54" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="5 4" />
          <circle cx="160" cy="123" r="4" fill="#fff" />
          <circle cx="206" cy="78" r="4" fill="#F59E0B" />
        </g>
      )}

      {kind === 'stats' && (
        <g>
          <line x1="56" y1="154" x2="264" y2="154" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
          <line x1="56" y1="42" x2="56" y2="154" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" />
          <rect x="78" y="108" width="26" height="46" rx="4" fill={`${accent}70`} stroke={accent} strokeWidth="1.5" />
          <rect x="118" y="82" width="26" height="72" rx="4" fill="rgba(56,189,248,0.45)" stroke="#38BDF8" strokeWidth="1.5" />
          <rect x="158" y="60" width="26" height="94" rx="4" fill="rgba(16,185,129,0.5)" stroke="#10B981" strokeWidth="1.5" />
          <rect x="198" y="92" width="26" height="62" rx="4" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" strokeWidth="1.5" />
          <polyline points="91,98 131,74 171,52 211,80 246,56" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </g>
      )}

      {kind === 'prob' && (
        <g>
          <circle cx="116" cy="100" r="48" fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
          <path d="M 116 100 L 116 52 A 48 48 0 0 1 164 100 Z" fill={`${accent}65`} />
          <path d="M 116 100 L 164 100 A 48 48 0 0 1 82 134 Z" fill="rgba(16,185,129,0.45)" />
          <line x1="116" y1="52" x2="116" y2="148" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
          <line x1="68" y1="100" x2="164" y2="100" stroke="rgba(255,255,255,0.5)" strokeWidth="1.4" />
          <line x1="194" y1="100" x2="232" y2="68" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
          <line x1="194" y1="100" x2="232" y2="132" stroke="rgba(255,255,255,0.55)" strokeWidth="1.6" />
          <circle cx="194" cy="100" r="5" fill="#F59E0B" />
          <circle cx="236" cy="68" r="6" fill={accent} />
          <circle cx="236" cy="132" r="6" fill="#10B981" />
        </g>
      )}

      {kind === 'logic' && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <rect x="122" y="38" width="76" height="26" rx="13" fill={`${accent}40`} stroke={accent} strokeWidth="1.6" />
          <polygon points="160,82 204,104 160,126 116,104" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="1.6" />
          <rect x="66" y="140" width="66" height="24" rx="5" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1.5" />
          <rect x="188" y="140" width="66" height="24" rx="5" fill="rgba(56,189,248,0.25)" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="160" y1="64" x2="160" y2="82" stroke="#fff" strokeWidth="1.5" />
          <polyline points="116,104 99,104 99,140" fill="none" stroke="#fff" strokeWidth="1.5" />
          <polyline points="204,104 221,104 221,140" fill="none" stroke="#fff" strokeWidth="1.5" />
        </g>
      )}

      {kind === 'algebra' && (
        <g>
          <rect x="102" y="42" width="116" height="116" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" />
          <rect x="102" y="42" width="76" height="76" fill={`${accent}45`} stroke={accent} strokeWidth="1.5" />
          <rect x="178" y="42" width="40" height="76" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.2" />
          <rect x="102" y="118" width="76" height="40" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" strokeWidth="1.2" />
          <rect x="178" y="118" width="40" height="40" fill="rgba(16,185,129,0.35)" stroke="#10B981" strokeWidth="1.2" />
        </g>
      )}

      {kind === 'numbers' && (
        <g>
          <line x1="48" y1="116" x2="272" y2="116" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          {[76, 118, 160, 202, 244].map((x, idx) => (
            <g key={x}>
              <line x1={x} y1="108" x2={x} y2="124" stroke="#fff" strokeWidth="1.6" />
              <circle cx={x} cy="116" r={idx === 2 ? 5 : 3} fill={idx === 2 ? '#F59E0B' : accent} />
            </g>
          ))}
          <rect x="76" y="54" width="168" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" />
          <rect x="76" y="54" width="102" height="28" rx="6" fill={`${accent}65`} />
          <line x1="118" y1="54" x2="118" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          <line x1="160" y1="54" x2="160" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
          <line x1="202" y1="54" x2="202" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
        </g>
      )}

      {/* Subtle watermark code */}
      <text
        x="16"
        y="186"
        fill="rgba(255,255,255,0.35)"
        fontSize="11"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="600"
      >
        {topic.code}
      </text>
    </svg>
  );
}
