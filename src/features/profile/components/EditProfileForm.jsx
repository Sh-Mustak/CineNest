/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import ProfileService from "../services/profileService";
import authService from "../../auth/services/authService";

const EditProfileForm = ({ profile, onUpdated, onCancel }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName: profile?.displayName || "",
      bio: profile?.bio || "",
      avatarUrl: profile?.avatarUrl || "",
    },
  });

  // Get current form values
  const currentValues = watch();

  // Check whether the user actually changed anything
  const isChanged =
    currentValues.displayName !== (profile?.displayName || "") ||
    currentValues.bio !== (profile?.bio || "") ||
    currentValues.avatarUrl !== (profile?.avatarUrl || "");

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const updatedProfile = await ProfileService.updateProfile({
        rowId: profile.$id,
        displayName: data.displayName,
        avatarUrl: data.avatarUrl,
        bio: data.bio,
      });



      toast.success("Profile updated successfully.");

      onUpdated(updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);

      toast.error(
        error?.message || "Unable to update your profile. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:mt-8 lg:mt-8 space-y-5">
      {/* Display Name */}
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Display Name
        </label>

        <input
          type="text"
          {...register("displayName", {
            required: "Display name is required",
            minLength: {
              value: 2,
              message: "Display name must be at least 2 characters",
            },
          })}
          className="w-full rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.displayName && (
          <p className="mt-1 text-sm text-red-400">
            {errors.displayName.message}
          </p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Bio
        </label>

        <textarea
          rows={4}
          placeholder="Tell us something about yourself..."
          {...register("bio", {
            maxLength: {
              value: 200,
              message: "Bio cannot exceed 200 characters",
            },
          })}
          className="w-full resize-none rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary"
        />

        {errors.bio && (
          <p className="mt-1 text-sm text-red-400">
            {errors.bio.message}
          </p>
        )}
      </div>

      {/* Avatar URL */}
      <div>
        <label className="mb-1 block text-sm font-medium text-zinc-300">
          Avatar URL
        </label>

        <input
          type="url"
          placeholder="https://example.com/avatar.jpg"
          {...register("avatarUrl")}
          className="w-full rounded-sm border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-white outline-none transition placeholder:text-zinc-600 focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        {/* Cancel */}
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 rounded-sm border border-zinc-700 bg-zinc-900 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white disabled:opacity-50"
        >
          Cancel
        </button>

        {/* Save Changes */}
        <button
          type="submit"
          disabled={loading || !isChanged}
          className="flex-1 rounded-sm bg-primary py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;