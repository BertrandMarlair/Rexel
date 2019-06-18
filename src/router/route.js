import Configurator from '../layouts/Configurator'
// import Main from '../layouts/Main'

const indexRoutes = [
    // { path: '/', name: 'Main', component: Main, exact: true },
    { path: '/page/:page', name: 'Configurator', component: Configurator, exact: true },
]

export default indexRoutes