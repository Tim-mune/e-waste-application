import { useEffect } from "react";
import axios from "axios";
import { ProfileDashboard } from "../../components";

import { useGlobalContext } from "../../context/appcontext";

const Profile = () => {
  const { user } = useGlobalContext();
  return (
    <>
      <ProfileDashboard />
    </>
  );
};

export default Profile;
