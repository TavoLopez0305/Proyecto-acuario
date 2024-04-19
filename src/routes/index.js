import {useRoutes} from  'react-router-dom';

import { Home } from '../pages/Home';
import {Contac} from '../pages/Contacto'
import { Blog_ } from '../pages/Blog';
import { Boletos } from '../pages/Boletos';
import { Not_found } from '../pages/Not_found';

const Routes = () =>{
    const routes = useRoutes([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/Contacto",
            element: <Contac/>,
        },
        {
            path: "/Blog",
            element: <Blog_/>,
        },
        {
            path: "/Boletos",
            element: <Boletos/>,
        },
        {
            path: "/*",
            element: <Not_found/>,
        },
        { path: "team", element:<AboutPAge/>}

    ])
    return routes;
}
export {Routes}