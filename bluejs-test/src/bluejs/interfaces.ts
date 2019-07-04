export interface createServerOptions {
    middleware?: Function[],
    port: number,
    debug?: boolean,
    srcDir?: string,
    bootstrapDir?: string | string[];
    bootstrapExt?: string
}
