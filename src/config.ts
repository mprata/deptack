const env = process.env.REACT_APP_ENV;

const dev = {
    host: 'http://localhost.com:7071'
}

const qa = {
    host: ''
}

const prod = {
    host: ''
}

const config = (env === 'prod') ? prod : (env === 'qa') ? qa : dev;

export default config;