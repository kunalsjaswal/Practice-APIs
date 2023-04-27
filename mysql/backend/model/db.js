import sequelize,{ DataTypes} from "sequelize";

// created connection
const db = new sequelize({
    database: 'userdatabases',
    dialect: 'mysql',
    username: 'root',
    password: 'Kunal123@'
})

const userTable = db.define('userTable',{
    name:{
        type: DataTypes.STRING(30),
        required: true,
        allowNull:false
    },
    age:{
        type: DataTypes.INTEGER,
        required: true,
        allowNull:false
    },
    nationality:{
        type: DataTypes.STRING,
        required: true,
        allowNull:false
    }
})

export {db,userTable}
