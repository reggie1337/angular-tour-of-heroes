const {Sequelize} = require ('sequelize');
const express = require ('express');
const connectString = 'postgresql://local:none@localhost:5432/heroes';
// const heroesController = require('./api.js');

const sequelize = new Sequelize(connectString);

const Hero = sequelize.define('hero', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    power: {
        type: Sequelize.STRING,
        allowNull: false,
    },},{
        tableName: 'heroes',
});

const startServer = async () => {
    await sequelize.sync();
 
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connected');
    } catch (error) {
    console.error('failed')
    }
};

const app = express();

app.get('/api/heroes', async (req, res) => {
   try { 
    const heroes = await Hero.findAll();
    res.json(heroes);
   } catch (error){
    console.error(error);
    res.status(500).json({error: 'o'})
   }
});

const logMiddleware = (req, res, next)=> {
    console.log('recieved')
    next();
};

app.use(logMiddleware);

app.listen(4200,() => {
    console.log('Server listening on port 4200');
 });

 
startServer();
