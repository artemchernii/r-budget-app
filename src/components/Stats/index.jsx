/* eslint-disable react/prop-types */
import { memo, useMemo, useState } from 'react';
import styled from 'styled-components';

const StatsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
StatsWrapper.displayName = 'STATS';

const list = new Array(20)
    .fill(null)
    .map(() => `Item is ${Math.floor(Math.random() * 100) + 1}`);

const List = memo(({ list }) => {
    return (
        <ul>
            {list.map((el) => (
                <li key={Math.ceil(Math.random() * 10000000)}>{el}</li>
            ))}
        </ul>
    );
});
List.displayName = 'List';

export default function Stats() {
    const [n, setN] = useState(0);
    const [filter, setFilter] = useState('');

    const filteredList = useMemo(
        () => list.filter((el) => el.includes(filter)),
        [filter]
    );

    return (
        <StatsWrapper>
            <h1>Stats</h1>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <hr />
            {n}
            <button onClick={() => setN((c) => c + 1)}>Click</button>
            <hr />
            <List list={filteredList} />
        </StatsWrapper>
    );
}
