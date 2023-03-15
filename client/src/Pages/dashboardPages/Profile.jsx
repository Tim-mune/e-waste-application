import { useEffect } from "react";
import axios from "axios";
// test global context
import { useGlobalContext } from "../../context/appcontext";
import { ProfileUpdateForm, ProfileMain } from "../../components";

const Profile = () => {
  const { user } = useGlobalContext();
  return (
    <section className="min-h-screen">
      <div className="">
        <h5 className="text-center">Smart waste inc</h5>
        <p className="text-center">Welcome to my profile</p>
      </div>
      <ProfileMain />
      <ProfileUpdateForm />
    </section>
  );
};

export default Profile;
