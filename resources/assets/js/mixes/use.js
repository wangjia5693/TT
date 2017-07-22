export default function (injection) {
    const methods = {
        use(plugin) {
            if (plugin.installed) {
                return false;
            }

            if (typeof plugin.install === 'function') {
                plugin.install(injection);
            } else if (typeof plugin === 'function') {
                plugin(injection);
            }

            plugin.installed = true;
            return this;
        },
        useBoard(data) {
            injection.board.lists.push(data);
        },
        useExtensionRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.extension.push(value);
            });
        },
        useModuleRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.module.push(value);
            });
        },
        useNavigation(navigation) {
            const data = [].concat(navigation);
            data.forEach(value => {
                injection.navigation.push(value);
            });
        },
        useOtherRoute(routes) {
            const data = [].concat(routes);
            data.forEach(value => {
                injection.routes.other.push(value);
            });
        },
        useSidebar(key, sidebar) {
            Object.defineProperty(injection.sidebar.lists, key, {
                get() {
                    return sidebar;
                },
            });
        },
        useSidebarExtension(sidebar) {
            injection.sidebar.lists.setting[3].children.push(sidebar);
        },
    };

    Object.assign(injection, methods);
}