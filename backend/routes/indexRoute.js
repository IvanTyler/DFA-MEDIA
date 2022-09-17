const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const dataMock = () => {
    return {
        navigation: [
            {
                id: uuidv4(),
                name: 'Дашборд',
                link: 'dashboard',
                active: false,
                image: '/img/icon-menu-navigation/dashboard.svg',
            },
            {
                id: uuidv4(),
                name: 'Биржа активности',
                link: 'activityExchange',
                active: false,
                image: 'img/icon-menu-navigation/activity-exchange.svg',
            },
            {
                id: uuidv4(),
                name: 'Биржа блогеров',
                link: 'exchange-bloggers',
                active: false,
                image: 'img/icon-menu-navigation/exchange-bloggers.svg',
            },
            {
                id: uuidv4(),
                name: 'Взаимопиар',
                link: 'mutualPR',
                active: false,
                image: 'img/icon-menu-navigation/mutual-PR.svg',
            },
            {
                id: uuidv4(),
                name: 'Моя структура',
                link: 'myStructure',
                active: false,
                image: 'img/icon-menu-navigation/my-structure.svg',
            },
            {
                id: uuidv4(),
                name: 'Магазин',
                link: 'score',
                active: false,
                image: 'img/icon-menu-navigation/score.svg',
            },
            {
                id: uuidv4(),
                name: 'Марафон',
                link: 'marathon',
                active: false,
                image: 'img/icon-menu-navigation/marathon.svg',
            },
            {
                id: uuidv4(),
                name: 'Лендинги',
                link: 'landingPages',
                active: false,
                image: 'img/icon-menu-navigation/landing-pages.svg',
            }
        ],
        posts: Array.from(Array(14)).map((_, i) => {
            return {
                id: uuidv4(),
                active: Math.floor(Math.random() * (5 - 1) + 1) > 2 ? true : false,
                paymentLevel: i + 1,
                activePartners: Math.floor(Math.random() * (43233 - 133) + 133),
                users: Array.from(Array(15)).map((_, i) => {
                    return {
                        id: uuidv4(),
                        active: Math.floor(Math.random() * (5 - 1) + 1) > 3 ? true : false,
                        avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/04/male-user-profile-picture.png',
                        name: `kris_anfonova ${i + 1}`,
                    }
                }),
            }
        })
    }
}

const data = dataMock()

router.get('/', (req, res) => res.json(data))

module.exports = router;