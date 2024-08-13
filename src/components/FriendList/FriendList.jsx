import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.ul}>
      {friends.map(item => (
        <li key={item.id} className={css.li}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
