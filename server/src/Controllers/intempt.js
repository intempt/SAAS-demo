import intempt from "../Services/intempt/intempt.js";
import { isEmailValid } from "../Services/utils/validators.js"
import { responseStatuses } from "../Services/utils/response.js";

export const GetOptimization = async (req, res) => {
    const email = req.query.email;
    const url = req.query.url || "";
    if (!isEmailValid(email)) {
        res.status(400).send({
            status: responseStatuses.error,
            message: "Email is invalid!"
        });

        return;
    }

    const response = await intempt.getOptimization(email, url)

    res.status(200).send(response);
};
