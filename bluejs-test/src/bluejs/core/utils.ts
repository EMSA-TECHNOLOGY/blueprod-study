import * as fs from 'fs';
import {join} from 'path';

export class Utils {
    static async bootstrap(dir: string, ext: string = 'module.ts') {
        let filesAndFolders: string[] = fs.readdirSync(dir);

        filesAndFolders = filesAndFolders.map(name => join(dir, name));

        for (const fileOrDir of filesAndFolders) {
            const fileStatus = fs.lstatSync(fileOrDir);

            if (fileStatus.isFile() && fileOrDir.includes(ext)) {
                await import(fileOrDir);
            } else if (fileStatus.isDirectory()) {
                await Utils.bootstrap(fileOrDir, ext);
            }
        }
    }
}
