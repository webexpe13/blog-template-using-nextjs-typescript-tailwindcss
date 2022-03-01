import { IAllRoutes } from "../shared/interfaces";

export const routes : IAllRoutes = {
    home: {
        name: '',
        path: '',
        icon: '',
        breakcrums: []
    },
    about: {
        name: '',
        path: '',
        icon: '',
        breakcrums: ['/home', '/about']
    },
}