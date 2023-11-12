import PermissionsContainer from './PermissionsContainer';

/* eslint-disable react/prop-types */
const Profile = ({ firstName, lastName, age, profileId }) => {
    return (
        <div>
            <span>
                {firstName} {lastName}, {age}
            </span>
            <PermissionsContainer profileId={profileId} />
        </div>
    );
};

export default Profile;
