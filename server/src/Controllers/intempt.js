import intempt from "../Services/intempt/intempt.js";
import { isEmailValid } from "../Services/utils/validators.js"
import { responseStatuses } from "../Services/utils/response.js";

export const GetOptimization = async (req, res) => {
    let email = req.query.email;

    if (!isEmailValid(email)) {
        res.status(400).send({
            status: responseStatuses.error,
            message: "Email is invalid!"
        });

        return;
    }

    const response = await intempt.getOptimization(email)

    res.status(200).send(response);
};