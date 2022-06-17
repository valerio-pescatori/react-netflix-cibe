import { useContext, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import styles from "./UserSelect.module.css";
import { IProfileCard, UserContext } from "../Interfaces";

// Godflex Home Page

function UserSelect() {
  const { loggedUser, setUser, users } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Chi vuole guardare Godflex?</h2>
      <div className={styles.profileContainer}>
        {users?.map((user, i) => (
          <ProfileCard key={i} {...user} />
        ))}
        <ProfileCard />
      </div>
      <button className={styles.button}>Gestisci i profili</button>
    </div>
  );
}

export default UserSelect;
