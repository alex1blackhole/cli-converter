import {promises} from "fs";
import {isAbsolute, join, dirname} from "path";

export class FileService {

    private async isExist(path: string) {
        try {
            await promises.stat(path);
            return true
        } catch {
            return false
        }
    }

    public getFilePath(path: string, fileName: string, extencion: string): string {
        if (!isAbsolute(path)) {
            path = join(__dirname + '' + path)
        }

        return join(dirname(path) + '/' + fileName + '.' + extencion)
    }


    async deleteFileIfExists(path: string): Promise<void> {

        if (await this.isExist(path)) {
            promises.unlink(path)
        }

    }


}
