import { createApp } from 'vue'
import App from './App.vue'

import '../public/assets/css/tailwind.css'
import './registerServiceWorker'

import axios from "axios";
import router from './router'

// axios.defaults.baseURL = "https://test.api.juasoonline.com/web/juasoonline/";
axios.defaults.baseURL = "http://api.juaso.test/api/v1/juasoonline/";

createApp( App ).use( router, axios ).mount( '#app' )