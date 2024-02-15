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

export const GetOptimization = async (req, res) => {
    let email = req.body.email;

    if (!email) {
        res.status(400).send({ message: 'Email parameter is required!' });
        return;
    }

    const response = await intempt.getOptimization(email, '/dashboard')

    res.send(response);
};



