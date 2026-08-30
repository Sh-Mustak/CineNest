import { useState, useEffect } from "react";
import useAuth from "../../auth/hooks/useAuth";
import ProfileService from "../services/profileService";
import watchlistService from "../../watchlist/services/watchlistServices";

export function useProfile() {
    const { user, isAuthenticated } = useAuth();

    const [profile, setProfile] = useState(null);
    const [watchlistCount, setWatchlistCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProfile = async () => {
            if (!isAuthenticated || !user) {
                setProfile(null);
                setWatchlistCount(0);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);

                const existingProfile =
                    await ProfileService.getProfileByUserId({
                        userId: user.$id,
                    });

                const count =
                    await watchlistService.getWatchlistCount({
                        userId: user.$id,
                    });

                setProfile(existingProfile);
                setWatchlistCount(count);
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, [isAuthenticated, user]);

    return {
        profile,
        watchlistCount,
        loading,
    };
}