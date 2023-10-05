export interface IRoute {
    path: string;
    component: object | Promise<object>;
    name: string;
}

class RouterManager {
    protected routes: IRoute[] = []

    /**
     * 
     * @param path url to component
     * @param component sync or async component
     * @param name the alias of the path
     */
    addRoute(path: string, component: object | Promise<object>, name: string) {
        this.routes.push({ path, component, name });
    }

    getRoutes() {
        return this.routes;
    }
}

export const globalRoutes = new RouterManager();