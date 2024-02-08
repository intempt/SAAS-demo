import intempt from "../intempt/intempt.js";

export const CreateIntemptProfile = async (req, res) => {
    let email = req.body.email;

    if (!email) {
        res.status(400).send({ message: 'Email parameter is required!' });
        return;
    }

    await intempt.profile(email)

    res.send('Request sent!');
};

export const GetExperience = async (req, res) => {
    let email = req.body.email;

    if (!email) {
        res.status(400).send({ message: 'Email parameter is required!' });
        return;
    }

    const response = await intempt.getExperience(
        process.env.INTEMPT_UPGRADE_TO_PREMIUM_CAMPAIGN_ID,
        email,
        '/dashboard'
    )

    res.send(response);
};



