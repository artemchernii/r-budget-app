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
        <div>
            <h1>Fetch profile</h1>
            <input
                type="text"
                max={10}
                value={query ? query : 'All 10'}
                onChange={(event) => handleQuery(event)}
            />
            {query}
            <hr />
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
            border: '3px solid #fff',
            padding: '20px',
            borderRadius: '10px',
            width: '400px',
            margin: '10px',
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
