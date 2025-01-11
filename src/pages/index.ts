import { lazy } from 'react';

const Home = lazy(() => import('./home/home'));
const TOS = lazy(() => import('./tos/tos'));

export { Home, TOS };
