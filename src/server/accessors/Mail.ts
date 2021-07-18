import { IMail } from '../../definition/accessors';

export class Mail implements IMail {
    public async sendMail(): Promise<void> {
        console.log('mail. sended');
    }
}
