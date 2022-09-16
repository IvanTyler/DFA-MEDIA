const express = require('express');
const router = express.Router();
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const dataMock = () => {
    return {
        navigation: [
            {
                id: uuidv4(),
                name: 'Дашборд',
                link: 'dashboard',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'dashboard.svg'),
            },
            {
                id: uuidv4(),
                name: 'activityExchange',
                link: '#',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'activity-exchange.svg'),
            },
            {
                id: uuidv4(),
                name: 'Биржа блогеров',
                link: 'exchange-bloggers',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'exchange-bloggers.svg'),
            },
            {
                id: uuidv4(),
                name: 'Взаимопиар',
                link: 'mutualPR',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'mutual-PR.svg'),
            },
            {
                id: uuidv4(),
                name: 'Моя структура',
                link: 'myStructure',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'my-structure.svg'),
            },
            {
                id: uuidv4(),
                name: 'Магазин',
                link: 'score',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'score.svg'),
            },
            {
                id: uuidv4(),
                name: 'Марафон',
                link: 'marathon',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'marathon.svg'),
            },
            {
                id: uuidv4(),
                name: 'Лендинги',
                link: 'landingPages',
                image: path.join(__dirname, '..', 'public', 'img', 'icon-menu-navigation', 'landing-pages.svg'),
            }
        ],
        posts: Array.from(Array(14)).map((_, i) => {
            const randomNumber = Math.floor(Math.random() * (43233 - 133) + 133)
            const randomActivePost = Math.floor(Math.random() * (5 - 1) + 1)
            const randomActiveUser = Math.floor(Math.random() * (5 - 1) + 1)
            return {
                id: uuidv4(),
                active: randomActivePost > 3 ? true : false,
                paymentLevel: i + 1,
                activePartners: randomNumber,
                users: Array.from(Array(15)).map((_, i) => {
                    return {
                        id: uuidv4(),
                        active: randomActiveUser > 3 ? true : false,
                        avatar: path.join(__dirname, '..', 'public', 'img', 'data-posts', 'avatar.png'),
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