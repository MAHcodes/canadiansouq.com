import styles from "../styles/OurBrands.module.css";

const OurBrands = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <Brands />
        <Brands />
      </div>
    </section>
  );
};

const Brands = () => (
  <div className={styles.brands}>
    <img
      src="/images/milwaukee-logo.svg"
      alt="Milwaukee Logo"
    />
    <img className="brand-logo" src="/images/hilti-logo.svg" alt="HILTI Logo" />
    <img
      src="/images/dewalt-logo.svg"
      alt="DeWALT Logo"
    />
    <img
      src="/images/makita-logo.svg"
      alt="Makita Logo"
    />
    <img
      src="/images/matcotools-logo.svg"
      alt="Matco Tools Logo"
    />
  </div>
);

export default OurBrands;
