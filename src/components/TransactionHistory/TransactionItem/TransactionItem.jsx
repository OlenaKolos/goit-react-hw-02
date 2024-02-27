import css from "./TransactionItem.module.css";

const TransactionItem = ({ item }) => {
  return (
    <tr className={css.bodyTr}>
      <td className={css.bodyTd}>{item.type}</td>
      <td className={css.bodyTd}>{item.amount}</td>
      <td className={css.bodyTd}>{item.currency}</td>
    </tr>
  );
};

export default TransactionItem;
