const {Sequelize} = require ('sequelize');
const express = require ('express');
const connectString = 'postgresql://tmp:none@localhost:5432/heroes';
const heroesController = require('./controllers/heroescController');

const sequelize = new Sequelize(connectString);

const Hero = sequelize.define('hero', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    power: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

await sequelize.sync();

( async() =>{   
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connected');
    } catch (error) {
    console.error('failed')
    }
})();

const app = express();

app.get('/api/heroes',(req, res) => {
    const heroes = Hero.findAll();
    res.json(heroes);
});

app.use('/api',heroesController);

app.listen(3000,() => {
    console.log('Server listening on port 3000');
 });
 
