import { LOCALES } from '../constants';

export default {
    [LOCALES.UKRAINIAN]: {
        language: 'Мова',
        menu: {
            home: 'Домашня сторінка',
            about: 'Про нас',
            stats: 'Статистика',
            settings: 'Налаштування',
        },
        balance: {
            current: 'Поточний баланс: ',
        },
        button: {
            delete: 'Видалити',
            changeToUAH: 'Змінити на гривню',
            changeToUSD: 'Змінити на доллар',
            addTransaction: 'Додати транзакцію',
            save: 'Зберегти',
        },
        form: {
            date: 'Дата',
            newSum: 'Нова сумма',
            comment: 'Коментар',
        },
        theme: {
            title: 'Тема',
            basic: 'Базова',
            dark: 'Темна',
            light: 'Світла',
        },
        settings: {
            title: 'Налаштування',
            currency: 'Валюта',
            advancedSettings: 'Показати розширені налаштування',
        },
    },
};
