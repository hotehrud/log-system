import fs from 'fs';
import appRoot from 'app-root-path';
import winston from 'winston';
const { createLogger, transports } = winston;
import 'winston-daily-rotate-file';
const logDir = `${appRoot}/logs`;

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

let logger = createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console(),
        new transports.File({ filename: "req.log", level: 'info', dirname: logDir }),
        new transports.DailyRotateFile({
            level: 'info',
            filename: "req.log",
            datePattern: "YYYY-MM-DD",
            dirname: logDir
        })
    ]
});

logger.stream = {
    write: (message) => {
        logger.info(message);
    },
};

export default logger;
