export default function (injection) {
    const sources = window.modules ? window.modules : [];
    const list = [];
    sources.forEach(key => {
        if (window[key]) {
            const instance = window[key].default;
            injection.use(instance);
            list.push(instance);
        }
    });

    Object.defineProperties(injection, {
        modules: {
            get() {
                return list;
            },
        },
    });
}