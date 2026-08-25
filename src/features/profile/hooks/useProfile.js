import {useState, useEffect} from 'react';
import {useAuth} from '../../auth/hooks/useAuth';
import ProfileService from '../services/profileService';

export function useProfile(){
    const {user, isAuthenticated} = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadProfile = async () =>{
            if (!isAuthenticated || !user) {
                setProfile(null);
                setLoading(false);
                return;
            }
            try{
                setLoading(true);
                const existingProfile = await ProfileService.getProfileByUserId(user.$id);
                setProfile(existingProfile);
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        }

        loadProfile();
    }, [isAuthenticated, user]);

    const createProfile = async ()=> {
        if (!user) return;
        try{
            setLoading(true);
            const newProfile = await ProfileService.createProfile({
                userId: user.$id,
                displayName: user.name,
            });
            setProfile(newProfile);
        } catch (error) {
            console.error("Error creating profile:", error);
        } finally {
            setLoading(false);
        }
    }
    const updateProfile = async ({displayName, avatarUrl, bio})=>{
        if(!profile) return;

        try{
            setLoading(true);
            const updatedProfile = await ProfileService.updateProfile({
                rowId: profile.$id,
                displayName,
                avatarUrl,
                bio
            });
            setProfile(updatedProfile)
        }
        catch(error){
            console.error("Error updating profile:", error)
            throw error
        }
        finally{
            setLoading(false)
        }

    }

    return {profile, loading, createProfile, updateProfile};
}