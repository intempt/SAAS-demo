import intempt from "../Services/intempt/intempt.js";
import { isEmailValid } from "../Services/utils/validators.js"
import { responseStatuses } from "../Services/utils/response.js";

export const GetExperience = async (req, res) => {
    let email = req.query.email;
    let url = req.query.url;
    let campaignId = req.query.campaignId;

    const campaigns = [
        process.env.INTEMPT_POPUPS_CAMPAIGN1_ID,
        process.env.INTEMPT_POPUPS_CAMPAIGN2_ID,
        process.env.INTEMPT_POPUPS_CAMPAIGN3_ID
    ];

    if (!isEmailValid(email)) {
        res.status(400).send({
            status: responseStatuses.error,
            message: "Email is invalid!"
        });

        return;
    }

    if (typeof url !== 'string' || url.trim().length === 0) {
        res.status(400).send({
            status: responseStatuses.error,
            message: "Campaign url is invalid!"
        });

        return;
    }

    if (!campaigns.some(id => id === campaignId)) {
        res.status(400).send({
            status: responseStatuses.error,
            message: "Invalid campaign id!"
        });

        return;
    }

    const response = await intempt.getExperience(campaignId, email, url)

    res.status(200).send(response);
};