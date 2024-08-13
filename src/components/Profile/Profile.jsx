import css from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.header}>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.username}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
