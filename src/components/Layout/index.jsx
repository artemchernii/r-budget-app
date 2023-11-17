import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function Layout() {
    return (
        <>
            <Header />

            <div
                style={{
                    minHeight: '89.8vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Outlet />
            </div>
        </>
    );
}
