export default function (injection) {
    Object.assign(injection, {
        navigation: [
            {
                icon: 'settings',
                path: '/',
                title: '全局设置',
            },
        ],
    });
}