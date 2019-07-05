export type Next = () => void;
export type Middleware = (ctx: any, next: Next) => Promise<void>;

export interface CreateServerOptions {
    middleware?: Middleware[];
    port: number;
    debug?: boolean;
    srcDir?: string;
    bootstrapDir?: string | string[];
    bootstrapExt?: string;
}
