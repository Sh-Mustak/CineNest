import { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import EditProfileForm from "../components/EditProfileForm";

const Profile = () => {
  const { profile, watchlistCount, loading } = useProfile();

  const [editing, setEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(null);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 px-4 pt-28">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-zinc-800" />
            <div className="mt-4 h-6 w-40 rounded bg-zinc-800" />
            <div className="mt-2 h-4 w-52 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
        <p className="text-zinc-400">
          Profile information could not be found.
        </p>
      </div>
    );
  }

  const currentProfile = updatedProfile || profile;

  return (
    <main className="min-h-screen bg-zinc-950 px-4 pb-20  md:pt-22 lg:pt-22">
      <div className="mx-auto max-w-4xl">

        {!editing ? (
          <>
            <ProfileHeader
              profile={currentProfile}
              onEdit={() => setEditing(true)}
            />

            <ProfileStats
              watchlistCount={watchlistCount}
              favoritesCount={0}
              historyCount={0}
            />
          </>
        ) : (
          <div className="mx-auto max-w-lg">
            <h1 className="text-2xl font-bold text-white">
              Edit Profile
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Update your CineNest profile information.
            </p>

            <EditProfileForm
              profile={currentProfile}
              updatedProfile = {updatedProfile}
              onUpdated={(updated) => {
                setUpdatedProfile(updated);
                setEditing(false);
              }}
              onCancel={() => setEditing(false)}
            />
          </div>
        )}

      </div>
    </main>
  );
};

export default Profile;