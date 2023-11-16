import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { StateProvider } from './providers/context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StateProvider>
        <App />
    </StateProvider>
);
