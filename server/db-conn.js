const { Sequelize, DataTypes } = require('sequelize')

// Development
const db = new Sequelize('postgres://user:user@localhost:5432/hypermood')
// Production
// const pg = require('pg')
// pg.defaults.ssl = true
// const db = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })

/**
 * Function to define the structure of the database
 */
function defineDatabaseStructure() {
  const Area = db.define(
    'area',
    {
      name: DataTypes.STRING,
      shortDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Service = db.define(
    'service',
    {
      name: DataTypes.STRING,
      shortDescription: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const Person = db.define(
    'person',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  const RoleArea = db.define(
    'roleArea',
    {
      role: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )

  const RoleService = db.define(
    'roleService',
    {
      role: DataTypes.STRING,
    },
    {
      underscored: true,
    }
  )
  Person.hasMany(RoleArea, { foreignKey: 'person_id' })
  Area.hasMany(RoleArea, { foreignKey: 'area_id' })
  Service.hasMany(RoleService, { foreignKey: 'service_id' })
  Person.hasMany(RoleService, { foreignKey: 'person_id' })
  RoleService.belongsTo(Person)
  RoleService.belongsTo(Service)
  Area.hasMany(Service, { foreignKey: 'area_id' })

  db._tables = {
    Area,
    Service,
    Person,
    RoleService,
    RoleArea,
  }
}

/**
 * Function to insert some fake info in the database
 */
async function insertFakeData() {
  const { Area, Service, Person, RoleArea, RoleService } = db._tables
  // Create the first Article
  const firstArea = await Area.create({
    name: 'Database',
    shortDescription: 'Prova',
    description: 'Prova',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const firstService = await Service.create({
    name: 'SQL',
    shortDescription: 'ciao',
    description: 'ciao',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const secondService = await Service.create({
    name: 'eee',
    shortDescription: '2',
    description: '2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const firstPerson = await Person.create({
    name: 'ciao',
    email: 'ciao',
    description: 'ciao',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const secondPerson = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const thirdPerson = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const Person4 = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const Person5 = await Person.create({
    name: 'ciao2',
    email: 'ciao2',
    description: 'ciao2',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const firstRoleArea = await RoleArea.create({
    role: 'Responsibile',
  })
  const firstRoleService = await RoleService.create({
    role: 'ciao',
  })
  const secondRoleArea = await RoleArea.create({
    role: 'Responsibile2',
  })
  const secondRoleService = await RoleService.create({
    role: 'ciao2',
  })
  await firstArea.addService(secondService.id)
  await firstArea.addService(firstService.id)

  await firstService.addRoleService(firstRoleService.id)
  await firstArea.addRoleArea(firstRoleArea.id)
  await secondService.addRoleService(secondRoleService.id)
  await firstArea.addRoleArea(secondRoleArea.id)
  await firstPerson.addRoleService(firstRoleService.id)
  await firstPerson.addRoleArea(firstRoleArea.id)
  await secondPerson.addRoleService(secondRoleService.id)
  await secondPerson.addRoleArea(secondRoleArea.id)
  await thirdPerson.addRoleService(secondRoleService.id)
  await thirdPerson.addRoleArea(secondRoleArea.id)
  await Person4.addRoleService(secondRoleService.id)
  await Person4.addRoleArea(secondRoleArea.id)
  await Person5.addRoleService(secondRoleService.id)
  await Person5.addRoleArea(secondRoleArea.id)
}
/**
 * Function to initialize the database. This is exported and called in the main api.js file
 */
async function initializeDatabase() {
  // Call the function for the database structure definition
  defineDatabaseStructure()
  // Synchronize Sequelize with the actual database
  await db.sync({ force: true })
  // Call the function to insert some fake data
  await insertFakeData()
  return db
}

export default initializeDatabase
