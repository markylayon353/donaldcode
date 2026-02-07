// app/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() { // <--- Must say "export default"
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', alignItems: 'center', borderBottom: '1px solid #eee' }}>
      <h2 style={{ fontWeight: 'bold' }}>Portfolio</h2>
      {/* ... rest of your code */}
    </nav>
  );
}