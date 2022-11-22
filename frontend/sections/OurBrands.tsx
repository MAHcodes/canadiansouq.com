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
      title="Milwaukee"
    />
    <img src="/images/hilti-logo.svg" alt="HILTI Logo" title="HILTI" />
    <img src="/images/dewalt-logo.svg" alt="DeWALT Logo" title="DeWALT" />
    <img src="/images/makita-logo.svg" alt="Makita Logo" title="Makita" />
    <img
      src="/images/matcotools-logo.svg"
      alt="Matco Tools Logo"
      title="Matco Tools"
    />
  </div>
);

export default OurBrands;
