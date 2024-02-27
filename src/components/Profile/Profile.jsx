import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div>
        <div className={css.imgBox}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listValue}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listValue}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
