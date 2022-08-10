import express from 'express';

const router = express.Router();

const parishioners = [
    {
        firstName : "John",
        lastName: "Doe",
        Age: 11
    },
    {
        firstName : "Jane",
        lastName: "Doe",
        "Age": 12
    },
    {
        firstName : "Lana",
        lastName: "Lang",
        "Age": 22
    }
]

//all routes in here are starting with /parishioners
router.get('/', (req, res) => {
    console.log(parishioners);

    res.send(parishioners);
});

//this route creates parishioners
router.post('/create', (req, res) => {
   
    const parishioner = req.body;

    parishioners.push(parishioner);

    res.send(`Parishioner with name ${parishioner.firstName} added to the database!`);
});

export default router;