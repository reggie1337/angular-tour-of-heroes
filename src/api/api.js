const {Sequelize} = require ('sequelize');
const express = require ('express');
const connectString = 'postgresql://local:none@localhost:5432/heroes';


const sequelize = new Sequelize(connectString);
const cors = require ('cors');
const port = 3000;
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
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
    }},{
        tableName: 'heroes',
    
});

const startServer = async () => { 
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connected');
    } catch (error) {
    console.error('failed')
    }
};

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}));


app.get('/api/heroes', async (req, res) => {
   try { 
    const heroes = await Hero.findAll({
        attributes : ['id','name','power']
    });
    res.json(heroes);
   } catch (error){
    console.error(error);
    res.status(500).json({error: 'shoot dang'})
   }
});

const logMiddleware = (req, res, next)=> {
    console.log('recieved')
    next();
};

app.use(logMiddleware);

app.listen(3000,() => {
    console.log(`Server listening on port ${port}`);
 });

 
startServer();
