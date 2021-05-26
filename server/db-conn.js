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
      bigImage: DataTypes.STRING,
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
      best: DataTypes.BOOLEAN,
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
  Service.belongsTo(Area)
  RoleArea.belongsTo(Person)
  RoleArea.belongsTo(Area)

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

  const firstArea = await Area.create({
    name: 'Database',
    shortDescription:
      'Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards.',
    description:
      'Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards. Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards. Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards. Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards. Services to speed up, enhance, scale your databases. Always up to date with the most modern SQL and noSQL standards.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Applications-database.svg/1200px-Applications-database.svg.png',
    bigImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Applications-database.svg/1200px-Applications-database.svg.png',
  })

  const secondArea = await Area.create({
    name: 'Network',
    shortDescription:
      'Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns.',
    description:
      'Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns. Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns. Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns. Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns. Create virtual and non-virtual networks of tens to thousands of connected computers. 24/7 support in case of breakdowns. ',
    image:
      'https://cdn.iconscout.com/icon/free/png-256/internet-network-2238581-1923035.png',
    bigImage: 'https://udinesenews.com/wp-content/uploads/2020/09/network.jpg',
  })

  const thirdArea = await Area.create({
    name: 'Machine Learning',
    shortDescription:
      'Whether you need to analyze images, text or build a chatbot, we will provide you with all the power you need.',
    description:
      'Whether you need to analyze images, text or build an intelligent chatbot, we will be by your side to help you and provide you with all the computational power you need. Whether you need to analyze images, text or build an intelligent chatbot, we will be by your side to help you and provide you with all the computational power you need. Whether you need to analyze images, text or build an intelligent chatbot, we will be by your side to help you and provide you with all the computational power you need. Whether you need to analyze images, text or build an intelligent chatbot, we will be by your side to help you and provide you with all the computational power you need. ',
    image:
      'https://i.pinimg.com/originals/a2/aa/45/a2aa45502770db5ee345064f63fdb7af.png',
    bigImage:
      'https://www.ionos.it/digitalguide/fileadmin/DigitalGuide/Teaser/machine-learning-t.jpg',
  })

  const fourthArea = await Area.create({
    name: 'Security',
    shortDescription:
      'No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack.',
    description:
      'No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack. No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack. No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack. No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack. No longer be afraid of cyber attacks or security holes. We have the most modern algorithms in existence to prevent any type of attack. ',
    image:
      'https://media.istockphoto.com/vectors/security-shield-with-lock-security-icon-vector-id1137073693?k=6&m=1137073693&s=170667a&w=0&h=ayT1jnGHwSt5ANspgCTyZADdXi7DaiMKl58_UIL2GuE=',
    bigImage:
      'https://www.bitmat.it/wp-content/uploads/2021/02/bigstock-Internet-Security-Firewall-Or-326464240_1024X684.png',
  })
  const firstService = await Service.create({
    name: 'SQL',
    shortDescription: 'descrizione del primo servizio',
    description: 'descrizione del primo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: true,
  })
  const secondService = await Service.create({
    name: 'eee',
    shortDescription: 'descrizione del secondo servizio',
    description: 'descrizione del secondo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: true,
  })
  const thirdService = await Service.create({
    name: '3',
    shortDescription: 'descrizione del terzo servizio',
    description: 'descrizione del terzo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
  })
  const fourthService = await Service.create({
    name: '4',
    shortDescription: 'descrizione del quarto servizio',
    description: 'descrizione del quarto servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
    best: false,
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
    role: 'Responsible',
  })
  const firstRoleService = await RoleService.create({
    role: 'ciao',
  })
  const secondRoleArea = await RoleArea.create({
    role: 'Team',
  })
  const thirdRoleArea = await RoleArea.create({
    role: 'Team',
  })
  const secondRoleService = await RoleService.create({
    role: 'ciao2',
  })

  const RoleService1 = await RoleService.create({
    role: 'Project manager',
  })
  const RoleService2 = await RoleService.create({
    role: 'Reference',
  })
  await firstArea.addService(secondService.id)
  await firstArea.addService(firstService.id)
  await secondArea.addService(secondService.id)
  await secondArea.addService(firstService.id)
  await secondArea.addService(thirdService.id)
  await secondArea.addService(fourthService.id)
  await thirdArea.addService(fourthService.id)
  await fourthArea.addService(firstService.id)

  await firstService.addRoleService(firstRoleService.id)
  await firstService.addRoleService(RoleService1.id)
  await firstService.addRoleService(RoleService2.id)
  await secondService.addRoleService(secondRoleService.id)
  await firstArea.addRoleArea(secondRoleArea.id)
  await firstArea.addRoleArea(thirdRoleArea.id)
  await firstArea.addRoleArea(firstRoleArea.id)
  await firstPerson.addRoleService(firstRoleService.id)
  await firstPerson.addRoleService(RoleService1.id)
  await firstPerson.addRoleService(RoleService2.id)
  await firstPerson.addRoleArea(firstRoleArea.id)
  await secondPerson.addRoleService(secondRoleService.id)
  await secondPerson.addRoleArea(secondRoleArea.id)
  await firstPerson.addRoleArea(thirdRoleArea.id)
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
