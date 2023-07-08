export const serverPort = import.meta.env.VITE_SERVER_PORT || '8443'; // порт сервера

// Получаем текущий хост и протокол
const { protocol, host } = window.location;

// Формируем адрес сервера, используя текущий хост и порт
const serverAddress = `${protocol}//${host}:${serverPort}`;
