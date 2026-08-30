import useAuth from "../../auth/hooks/useAuth";

const ProfileHeader = ({ profile, onEdit }) => {
  const { user } = useAuth();

  const displayName = profile?.displayName || user?.name || "User";

  const avatarLetter = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white shadow-lg shadow-primary/20">
        {profile?.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={displayName}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          avatarLetter
        )}
      </div>

      {/* Name */}
      <h1 className="mt-4 text-2xl font-bold text-white">
        {displayName}
      </h1>

      {/* Email */}
      <p className="mt-1 text-sm text-zinc-500">
        {user?.email}
      </p>

      {/* Bio */}
      {profile?.bio && (
        <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
          {profile.bio}
        </p>
      )}

      {/* Edit button */}
      <button 
      onClick={onEdit}
      type="button"
      className="mt-2 rounded-sm
      border border-zinc-700
      bg-zinc-900 px-5 py-2 text-sm
      font-medium text-white transiton hover:border-primary hover:text-primary
      ">
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileHeader;
