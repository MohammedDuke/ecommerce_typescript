import ReactDOM from 'react-dom/client';
import AppRouter from '@routes/AppRouter';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRouter />);
