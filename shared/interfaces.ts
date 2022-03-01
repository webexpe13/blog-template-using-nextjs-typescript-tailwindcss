export interface IAuthor {
    name: string;
    designation: string;
    github: string;
    linkedIn: string;
    bio?: string;
}

export interface IAuthors {
    mayur: IAuthor,
    rupali: IAuthor
}

export interface IRoute {
    name: string;
    path: string;
    icon: string;
    breadcrums: string[];
}

export interface IAllRoutes {
    home: IRoute
}