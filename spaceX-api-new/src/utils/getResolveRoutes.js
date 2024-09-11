const resolveRoutes = (route) => {
    if (route === '/') return '/';
    if (route.length === 24) return '/:id'; // Las IDs de SpaceX tienen una longitud de 24 chars,
                                            // mientras que la de Rick and Morty tenian maximo 3.   

    return `/${route}`;
};

export default resolveRoutes;