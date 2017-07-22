import VueRouter from '../router/';

export default function (injection) {
    Object.assign(injection, {
        routes: {
            extension: [],
            module: [],
            other: [],
        },
    });

    Object.defineProperties(injection, {
        router: {
            get() {
                return VueRouter.init(injection);
            },
        },
    });
}