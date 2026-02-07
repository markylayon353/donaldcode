// app/components/Footer.tsx
export default function Footer() {  // <--- Must say "export default"
  return (
    <footer style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '2rem', marginTop: 'auto', borderTop: '1px solid #eee' }}>
      <div>
        <p>My Portfolio</p>
        <p>Cebu, City</p>
      </div>
      <div>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
      </div>
      <div>
        <p>Blog 1</p>
        <p>Blog 2</p>
        <p>Blog 3</p>
      </div>
      <div>
        <p>Email: donalskiee@gmail.com</p>
        <p>Phone: 09124545262</p>
        <p>Github</p>
      </div>
    </footer>
  );
}