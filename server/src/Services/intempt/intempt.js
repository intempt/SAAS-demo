import IntemptSdk from "intempt-nodejs-sdk";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../utils/logger.js";

const configuration = new IntemptSdk.Configuration({
    username: process.env.INTEMPT_USERNAME,
    password: process.env.INTEMPT_PASSWORD,
    basePath: process.env.INTEMPT_API_HOST,
});

const eventRecorder = IntemptSdk.EventRecorder.WithEventBatcher(
    process.env.INTEMPT_ORG_NAME,
    process.env.INTEMPT_PROJECT_NAME,
    process.env.INTEMPT_SOURCE_ID,
    new IntemptSdk.PushSource.SourcesApi(configuration),
);

class IntemptService {
    async addEvent(name, data) {
        try {
            logger.info(`addEvent ${name} ` + JSON.stringify(data));
            return await eventRecorder.addEvent(name, { ...data, id: data?.id ?? uuidv4() });
        } catch (error) {
            logger.warn('failed to send', name);
        }
    }

    async profile(email) {
        try {
            logger.info(`Intempt: profile ${email}`);
            return await eventRecorder.profile(email, email);
        } catch (error) {
            logger.warn('Intempt: failed to profile', email);
        }
    }
}

export default new IntemptService();
