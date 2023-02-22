const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="text-cyan-300 flex justify-center items-center mt-10">
      <p className="font-poppins uppercase tracking-widest">
        copy right
        <span>&#169;</span>
        <span>{year}</span>
      </p>
    </section>
  );
};

export default Footer;
