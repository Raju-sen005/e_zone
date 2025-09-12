exports.ROLES = Object.freeze({
    ADMIN: "ADMIN",
    USER: "USER"
})

exports.ENV_MODE = Object.freeze({
    DEVELOPMENT: "development",
    TESTING: "testing",
    PRODUCTION: "production",
});

exports.ENV_FILE = Object.freeze({
    DEVELOPMENT_ENV: ".env.development",
    TESTING_ENV: ".env.testing",
    PRODUCTION_ENV: ".env.production",
});