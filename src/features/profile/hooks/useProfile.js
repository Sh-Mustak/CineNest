import {useState, useEffect} from 'react';
import {useAuth} from '../../auth/hooks/useAuth';
import {profileService} from '../services/profileService';

export function useProfile(){
    const {user, isAuthenticated} = useAuth();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
}