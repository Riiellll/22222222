import Rose from "./Rose";

function Leaf({ flip = false }: { flip?: boolean }) {
  return (
    <svg className={`leaf${flip ? " flip" : ""}`} width="28" height="14" viewBox="0 0 28 14" aria-hidden="true">
      <path d="M0 7C7-2 20-2 28 7 20 16 7 16 0 7Z" fill="#5a0716" />
      <path d="M2 7h22" stroke="#e9bfb8" strokeWidth=".7" opacity=".6" />
    </svg>
  );
}

export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <i />
      <Leaf flip />
      <Rose size={26} tone="pink" spin={20} />
      <Rose size={44} />
      <Rose size={26} tone="pink" spin={60} />
      <Leaf />
      <i />
    </div>
  );
}
