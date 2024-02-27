import css from "./TransactionHistory.module.css";
import TransactionItem from "./TransactionItem/TransactionItem";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.headTh}>Type</th>
          <th className={css.headTh}>Amount</th>
          <th className={css.headTh}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((transaction) => (
          <TransactionItem key={transaction.id} item={transaction} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
