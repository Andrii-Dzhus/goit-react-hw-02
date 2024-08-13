import TransactionItem from "../TransactionItem/TransactionItem";
import TransactionHeader from "../TransactionHeader/TransactionHeader";
import styles from "./TransactionHistory.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <TransactionHeader />
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={styles.row}>
            <TransactionItem date={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
