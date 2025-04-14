/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 11/04/2025
 */
const contentKeys = {
    '/': 'home.html',
    '/gallery': 'gallery.html',
    '/opportunities': 'opportunities.html',
    '/contact': 'contact.html',
    '/events': 'events.html',
    '/login': 'login.html',
    '/register': 'register.html',
    '/event-planning': 'event-planning.html',
    '/logout': 'index.html',
}

class Router {
    private routes: { [key: string]: () => void } = {};

    constructor() {
        window.onpopstate = () => this.loadRoute(location.pathname);
    }

    addRoute(path: string, action: () => void) {
        this.routes[path] = action;
    }

    navigate(url: string) {
        try {
            const path = url.startsWith('/') ? url : new URL(url).pathname
            history.pushState({}, "", url);
            this.loadRoute(path);
        } catch (error) {
        }
    }

    private async loadRoute(path: string) {
        if (this.routes[path]) {
            const mainContainer = document.getElementsByTagName('main')[0]
            if (mainContainer) {
                try {
                    const key = contentKeys[path]
                    if (!key) throw '';
                    const res = await fetch('/views/content/' + key)
                    const html = await res.text()
                    mainContainer.innerHTML = html
                } catch (error) {
                    this.navigate('/');
                }
            }
            this.routes[path]();
        } else {
            console.error(`Route ${path} not found`);
        }
    }
}

var router = window.router = new Router();


router.addRoute('/', HomePage)
router.addRoute('/gallery', GalleryPage)
router.addRoute('/opportunities', OpportunitiesPage)
router.addRoute('/contact', ContactPage)
router.addRoute('/events', EventsPage)
router.addRoute('/login', LoginPage)
router.addRoute('/logout', LogoutPage)
router.addRoute('/register', RegisterPage)
router.addRoute('/event-planning', EventPlanningPage)
init().then(() => {
    router.navigate(location.href.replace('.html', ''))
    document.addEventListener('click', (e) => {
        if (e.target instanceof HTMLAnchorElement) {
            e.preventDefault();
            router.navigate(e.target.href)
        }
    })
})