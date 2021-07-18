export interface IMail {
    /**
     * Adds an api which can be called by external services lateron.
     * Should an api already exists an error will be thrown.
     *
     * @param api the command information
     */
    sendMail(): Promise<void>;
}
