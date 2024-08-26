import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
  return (
    <>
      <ProfileCard
        name="Siddharth"
        age={30}
        gretting={
          <div>
            <strong>Hi Siddharth, have a wonderful day</strong>
          </div>
        }
      >
        <p>Hobbies: Trekking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
};
