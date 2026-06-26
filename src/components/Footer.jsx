const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center sm:footer-horizontal bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            divTinder Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
