export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} Akash. All rights reserved.</p>
      </div>
    </footer>
  );
};
