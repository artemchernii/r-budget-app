/* eslint-disable react/prop-types */
import { useDataHook } from './useDataHook';

const Fetchdata = () => {
    const { data, query, handleQuery } = useDataHook();
    const { isLoading, isError, data: users } = data;

    const renderedUsers =
        users.length > 0 ? (
            users.map((user) => <User key={user.id} user={user} />)
        ) : (
            <User user={users} />
        );
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>Fetch profile</h3>
            <input
                type="text"
                max={10}
                value={query ? query : 'All 10'}
                onChange={(event) => handleQuery(event)}
            />
            {query}

            {isLoading && !isError ? (
                <div>Is loading...</div>
            ) : isError ? (
                <div>Something went wrong</div>
            ) : (
                renderedUsers
            )}
        </div>
    );
};

export const User = ({ user }) => (
    <div
        style={{
            border: '1px solid #333',
            margin: '10px 0',
            padding: '10px',
            borderRadius: '2px',
            width: '400px',
        }}
    >
        <h2>{user.username}</h2>
        <h4>{user.name}</h4>
        <p>
            <i>{user.website}</i>
        </p>
    </div>
);

export default Fetchdata;
