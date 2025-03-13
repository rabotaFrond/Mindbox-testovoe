export default {
  preset: "ts-jest", // Устанавливаем ts-jest как пресет
  testEnvironment: "jsdom", // Окружение для работы с браузерными API
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Мокаем импорты стилей
  },
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { isolatedModules: true }], // Убираем globals, добавляем настройки для ts-jest здесь
    "^.+\\.(js|jsx)$": "babel-jest", // Для JavaScript файлов используем babel-jest
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // Указываем расширения файлов
};
