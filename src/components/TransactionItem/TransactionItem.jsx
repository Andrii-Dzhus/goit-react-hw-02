import styles from "./TransactionItem.module.css";

export default function TransactionItem({ date: { type, amount, currency } }) {
  return (
    <>
      <td className={styles.td}>{type}</td>
      <td className={styles.td}>{amount}</td>
      <td className={styles.td}>{currency}</td>
    </>
  );
}
