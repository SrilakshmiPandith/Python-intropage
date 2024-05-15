import openSource from './assets/opensource.jpg';
import dynamic from './assets/dynamic.jpg';
import community from './assets/community.jpg';
import webdev from './assets/webdev.jpg';
import gamedev from './assets/gamedevelopment.jpg';
import ml from './assets/machinelearning.jpg';
import dgui from './assets/desktopgui.jpg';

export const features = {
    opensource: {
        title : 'Open Source',
        image : openSource,
        description: 'Python is an open-source software. It is available for free to download from the official website.'
    },
    dynamic: {
        title : 'Dynamic',
        image : dynamic,
        description: 'Python  is a dynamic language. A variable can be assigned to any type of value and later assigned to any other type. The type is decided during runtime.'
    },
    largecommunity: {
        title : 'Large Community',
        image : community,
        description: 'Python has a large community. It provides support to various users to discuss and find solutions.'
    }
}

export const applications = [
    {
        title : 'Web Development',
        image : webdev
    },
    {
        title : 'Machine Learning',
        image : ml
    },
    {
        title : 'Game Development',
        image : gamedev
    },
    {
        title : 'Desktop GUI',
        image : dgui
    }
]