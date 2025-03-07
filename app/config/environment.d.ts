/**
 * Type declarations for
 *    import config from 'podcast-frontend/config/environment'
 */
declare const config: {
    environment: string;
    locationType: "history" | "hash" | "none";
    modulePrefix: string;
    podModulePrefix: string;
    rootURL: string;
    APP: {
        API_URL_NAMESPACE: string;
        BACKEND_HOST: string;
        FRONTEND_HOST: string;
        IS_SINGLETON: boolean; // site hosts just one podcast
    };
};

export default config;
