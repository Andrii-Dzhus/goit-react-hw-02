import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const styleClsx = clsx(css.style, isOnline ? css.online : css.offline);

  return (
    <div className={css.cont}>
      <img src={avatar} alt={name} width="120" />
      <p className={css.name}>{name}</p>
      <p className={styleClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
