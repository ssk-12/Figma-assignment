import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  fullName: string;
  email: string;
  secondaryEmail?: string;
  phoneNumber: string;
  address: string;
  designation: string;
}

const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>('https://be.ullegadda-ssk.workers.dev/api/v1/access/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUser(response.data);
      } catch (err) {
        setError( 'Failed to fetch user details');
      }
    };

    fetchUser();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center font-bold">{error}</div>;
  }

  if (!user) {
    return <div className="text-center">Loading user details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 shadow rounded bg-white">
      <h1 className="text-lg font-bold text-center mb-4">User Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <Detail label="Full Name" value={user.fullName} />
        <Detail label="Email" value={user.email} />
        <Detail label="Secondary Email" value={user.secondaryEmail} />
        <Detail label="Phone Number" value={user.phoneNumber} />
        <Detail label="Address" value={user.address} />
        <Detail label="Designation" value={user.designation} />
      </div>
    </div>
  );
};

const Detail: React.FC<{ label: string; value?: string }> = ({ label, value }) => (
  <div className="p-2">
    <div className="text-gray-500">{label}</div>
    <div className="font-bold">{value || 'N/A'}</div>
  </div>
);

export default UserDetail;
