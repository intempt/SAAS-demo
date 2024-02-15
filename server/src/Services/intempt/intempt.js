import IntemptSdk from "intempt-nodejs-sdk";
import { v4 as uuidv4 } from "uuid";
import { logger } from "../utils/logger.js";
import { decodeResponse } from "../utils/response.js";

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

const optimizationClient = new IntemptSdk.OptimizationClient(
    configuration
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

    async getOptimization(email) {
        let response = {};
        logger.info("getOptimization:", {email})

        const requestParameters = {
            identification: {
                userId: email
            },
            groups: ['pop-up']
        };

        try {
            logger.info("getOptimization:" + JSON.stringify(requestParameters));
            const rows = await optimizationClient.chooseRows(process.env.INTEMPT_ORG_NAME, process.env.INTEMPT_PROJECT_NAME, requestParameters);
            logger.warn('getOptimization: success');
            response = {
                rows: rows
            }
        } catch (error) {
            response = {
                experience: null
            }
            logger.warn('getExperience:: failed to get experience', error);
        }

        return response;
    }
}

export default new IntemptService();
