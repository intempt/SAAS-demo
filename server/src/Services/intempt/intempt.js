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

const personalizationApi = new IntemptSdk.CDPMetadata.PersonalizationApi(
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

    async getExperience(campaignId, email, url) {
        let response = {};
        logger.info("getExperience:", {campaignId, email, url})

        const requestParameters = {
            orgName: process.env.INTEMPT_ORG_NAME,
            projectName: process.env.INTEMPT_PROJECT_NAME,
            campaignId: campaignId,
            chooseExperience: {
                userId: email,
                url: url
            }
        };

        try {
            logger.info("getExperience:" + JSON.stringify(requestParameters));
            const experience = await personalizationApi.chooseExperience(requestParameters);
            logger.warn('getExperience: success');
            response = {
                experience: decodeResponse(experience)
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
