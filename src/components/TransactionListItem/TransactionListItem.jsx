import { useState } from "react";
import { useTransactionsContext } from "../../context/TransactionsProvider/TransactionsProvider";

const TransactionListItem = ({ transaction, switchEditForm }) => {
  const { delTransaction } = useTransactionsContext();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const switchMenu = () => setIsOpenMenu((prevIsOpenMenu) => !prevIsOpenMenu);

  const { comment, currency, date, time, total, id, transType } = transaction;
  return (
    <li>
      <p>{date}</p>
      <p>{time}</p>
      <p>{total}</p>
      <p>{currency}</p>
      <p>{comment}</p>

      <button onClick={switchMenu} type="button">
        ...
      </button>
      {isOpenMenu && (
        <div>
          <button
            type="button"
            onClick={() => delTransaction({ id, transType })}
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => {
              switchEditForm(transaction);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </li>
  );
};

export default TransactionListItem;
