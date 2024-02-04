import intempt from "../../services/intempt/intempt.js";

export const CreateIntemptProfile = async (req, res) => {
    let email = req.body.email;

    if (!email) {
        res.status(400).send({ message: 'Email parameter is required!' });
        return;
    }

    await intempt.profile(email)

    res.send('Profile is created!');
};



