//.....BISMILLAHIR RAHMANIR RAHIM.....\\
import includeArticle from '../module/includeArticle.js'
const articleContainer = document.getElementById('article-container')

const BASE_URL = 'https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json'

includeArticle(BASE_URL, articleContainer)