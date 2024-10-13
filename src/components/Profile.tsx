import React, { useEffect } from 'react';
import { db } from '@/firebaseConfig';
import { getDoc } from 'firebase/firestore';

const Profile: React.FC = () => {
    const [user, setUser] = React.useState<any>(null);



    return (
        <div className="text-center">
            <h1>Profile</h1>
            <p>yippee its a profile</p>
        </div>
    );
};

export default Profile;