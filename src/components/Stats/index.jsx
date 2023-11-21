/* eslint-disable react/prop-types */
import { memo, useMemo, useState } from 'react';
import styled from 'styled-components';
import withProfiler from '../HOCs/withProfiler';
import RenderProps from '../RenderProps';

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
    const [filter, setFilter] = useState('');
    const filteredList = useMemo(
        () => list.filter((el) => el.includes(filter)),
        [list, filter]
    );

    return (
        <>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {filteredList.map((el) => (
                    <li key={Math.ceil(Math.random() * 10000000)}>{el}</li>
                ))}
            </ul>
        </>
    );
});
List.displayName = 'List';

export const Clicker = ({ children, text = '123' }) => {
    const [n, setN] = useState(0);
    return (
        <>
            {children}- {text}
            <button onClick={() => setN((c) => c + 1)}>Click {n}</button>
        </>
    );
};

const Stats = () => {
    return (
        <StatsWrapper>
            <h1>Stats</h1>
            <Clicker />
            <List list={list} />
            <RenderProps
                render={(text) => <Clicker text={text}>123123</Clicker>}
            />
        </StatsWrapper>
    );
};
export default withProfiler(Stats, 'Stats');
