import {IStreamLogger} from "../../core/handlers/stream-logger.interface";

export class ConsoleLogger implements IStreamLogger {

    private static logger: ConsoleLogger;

    public static getInstance() {

        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }

        return ConsoleLogger.logger;
    }

    log(...args: any[]) {
        console.log(...args)
    }

    error(...args: any[]) {
        console.error(...args)

    }

    end() {
        console.log('finished')
    }
}
