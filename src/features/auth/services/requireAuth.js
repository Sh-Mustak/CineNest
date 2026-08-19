const requireAuth = ({isAuthenticated, navigate}) => {
    if (!isAuthenticated) {
        navigate("/login"); // Redirect to login page if not authenticated
        return false;
    }
    return true; // User is authenticated, allow access
}
export default requireAuth;