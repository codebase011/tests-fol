/* const unidad1 = [
    {
        enunciado: "Enunciado 1",
        posiblesRespuestas: [
            "Respuesta 1",
            "Respuesta 2",
            "Respuesta 3",
        ],
        numRespuestaCorrecta: 2,
    },
    {
        enunciado: "Enunciado 2",
        posiblesRespuestas: [
            "Respuesta 1",
            "Respuesta 2",
            "Respuesta 3",
        ],
        numRespuestaCorrecta: 1,
    }
]; */

document.querySelectorAll("a.nav__link").forEach((element) => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        //console.log(location.pathname);
    });
});

const renderView = (view, unidadTest) => {
    switch (view) {
        case "home":
            return `
                <h1>home</h1>
            `;
        case "/tests":
            return `
                <h1>Unidad ${unidadTest}</h1>
            `;
        case "settings":
            return `
                <h1>Settings</h1>
            `;
        
/*         case "test1":
            return `
                <h1>test 1 render</h1>
            `;
        case "test2":
            return `
                <h1>test 2 render</h1>
            `; */
    }
    /* if (view === "test1") {
        return `
            <h1>test 1 render</h1>
        `
    } */
}

const router = {
    routes: {
        home: renderView('home'),
        tests: [
            renderView('tests', 1),
            renderView('tests', 2)
        ],
        /* "/test1": {
            path: "/test1",
            view: renderView("test1"),
        },
        "/test2": {
            path: "/test2",
            view: renderView("test2"),
        }, */
        settings: renderView("settings")
    },
    navigate: (view) => {
        //history.pushState(null, "", view.path);
        let $root = document.querySelector(".root");
        console.log(view);
        if ($root != null) {
/*             if (path.includes("tests")) {
                let unidadTest = path.split("/")[2];
                console.log(unidadTest);
                $root.innerHTML = router.routes[path][unidadTest];
            }
            else {
                $root.innerHTML = router.routes[path];
                console.log(location.pathname);
            } */
            $root.innerHTML = router.routes[view];
            console.log(location.pathname);
        }

    }
}

const uno = 1;


/*const router = async () => {
    const routes = [
        {
            path: "/",
            view: () => console.log("Home view")
        },
        {
            path: "/posts",
            view: () => console.log("Home view")
        },
        {
            path: "/settings",
            view: () => console.log("Home view")
        }
    ];

    const navigate = (path) => {
        history.pushState("data", "", path);       
    }
    
    const potentialMatches = routes.map(route => {
        console.log(route.path);
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    console.log(potentialMatches);
    console.log(match);

    history.pushState("data", "", match?.route.path);
};*/

document.addEventListener('DOMContentLoaded', () => {
    //router();
})
