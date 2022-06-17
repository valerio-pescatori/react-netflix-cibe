import { FC, useContext } from "react";
import { UserContext, User, Ratio } from "../../Interfaces";
import { useNavigate } from "react-router-dom";

import styles from "./ProfileCard.module.css";
import LazyLoadImg from "../LazyLoadImg/LazyLoadImg";

const ProfileCard = (user: User) => {
  const { loggedUser, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function logUser() {
    if (user.name) {
      setUser(user);
      navigate("/home");
    }
  }

  return (
    <div className={styles.profileCard}>
      <button onClick={logUser}>
        <LazyLoadImg
          alt={"Profile image"}
          src={require(`../../assets/images/${user.profilePic || "addProfile.png"}`)}
          style={styles.profileImg}
          ratio={Ratio.ratio_1x1}
          viewportRelative={false}
        />
      </button>
      <h4 className={styles.profileName}>{user.name || "Add God"}</h4>
    </div>
  );
};

const defaultProp: User = {
  name: "",
  profilePic: "",
};

ProfileCard.defaultProps = defaultProp;

export default ProfileCard;
