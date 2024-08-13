import styles from "./TransactionHeader.module.css";

export default function TransactionHeader() {
  return (
    <>
      <th className={styles.header}>Type</th>
      <th className={styles.header}>Amount</th>
      <th className={styles.header}>Currency</th>
    </>
  );
}
