export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>[nav placeholder]</nav>
      <main>{children}</main>
      <footer>[footer placeholder]</footer>
    </>
  );
}
