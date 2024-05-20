import { createLogger, format, transports, addColors } from 'winston';
const { combine, timestamp, printf, colorize } = format;

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

const initLog = () => {
    addColors(colors);
    const Logger = createLogger({
        level: level(),
        levels: levels,
        transports: transport(),
        format: formatter()
    });

    return Logger;
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const formatter = () => {
    return combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        colorize({ all: true }),
        printf(
            (info) => `${info.timestamp} ${info.level}: ${info.message}`,
        ),
    );
}

const transport = () => {
    return [
        new transports.Console(),
        new transports.File({
            filename: 'logs/error.log',
            level: 'error',
        }),
        new transports.File({ filename: 'logs/all.log' }),
    ]
}


const Logger = initLog();
export default Logger;