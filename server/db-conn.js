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
      'The broadest selection of purpose-built databases for all your application needs.',
    description:
      'Hypermood offers a choice of fully managed relational, NoSQL and in-memory databases, spanning proprietary and open-source engines, to fit the needs of modern app developers. Infrastructure management – including scalability, availability and security – is automated, saving you time and money. Focus on building applications while Hypermood managed databases make your job simpler by surfacing performance insights through embedded intelligence, scaling without limits and managing security threats.',
    image:
      'https://drive.google.com/uc?export=view&id=1aLQEuO-4dS5U3ML75hUn2_LsJ0ZjoM7j',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1mOqNOciKGxl4bQgblKmF96pOpklKMK6N',
  })

  const secondArea = await Area.create({
    name: 'Networking',
    shortDescription:
      'Connect and deliver your hybrid and cloud-native applications with low-latency, zero-trust-based networking services.',
    description:
      'With more than 165,000 miles of private fibre spanning 60+ regions and 170+ network PoPs across the world, Hypermood provides the scale, performance, high availability and enterprise-grade security you need to meet your most extreme workload requirements. Deliver consistent, low-latency experience to your customers through services that work across on-premises, multi-cloud and edge location seamlessly. Focus on delivering your application logic when you use network-as-a-service offerings from Hypermood Networking.',
    image:
      'https://drive.google.com/uc?export=view&id=1APIDnDykl60Fe5L2QTqvQjX5S6dqcyZf',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1APIDnDykl60Fe5L2QTqvQjX5S6dqcyZf',
  })

  const thirdArea = await Area.create({
    name: 'Machine Learning',
    shortDescription:
      'Putting machine learning in the hands of every developer.',
    description:
      'Hypermood offers the broadest and deepest set of machine learning services and supporting cloud infrastructure, putting machine learning in the hands of every developer, data scientist and expert practitioner. Hypermood is helping more than one hundred thousand customers accelerate their machine learning journey.  Develop with your choice of tools with Jupyter Notebook, drag-and-drop designer, and automated machine learning. Create and deploy models at scale using automated and reproducible machine learning workflows.',
    image:
      'https://drive.google.com/uc?export=view&id=1nu7vypZl5M5ZFzPZ61H5h0Gc5eghMAEt',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1nu7vypZl5M5ZFzPZ61H5h0Gc5eghMAEt',
  })

  const fourthArea = await Area.create({
    name: 'Security',
    shortDescription:
      'Strengthen the security of your cloud workloads with built-in services.',
    description:
      'Protect data, apps and infrastructure quickly with built-in security services in Hypermood that include unparalleled security intelligence to help identify rapidly evolving threats early – so you can respond quickly. Implement a layered, defence-in-depth strategy across identity, data, hosts and networks. Unify security management and enable advanced threat protection across hybrid cloud environments.',
    image:
      'https://drive.google.com/uc?export=view&id=1ehRLeFejqkxlWwmvfIRpCa3TDCceCUUC',
    bigImage:
      'https://drive.google.com/uc?export=view&id=1ehRLeFejqkxlWwmvfIRpCa3TDCceCUUC',
  })
  const firstService = await Service.create({
    name: 'SQL',
    shortDescription: 'descrizione del primo servizio',
    description: 'descrizione del primo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const secondService = await Service.create({
    name: 'eee',
    shortDescription: 'descrizione del secondo servizio',
    description: 'descrizione del secondo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const thirdService = await Service.create({
    name: '3',
    shortDescription: 'descrizione del terzo servizio',
    description: 'descrizione del terzo servizio',
    image:
      'https://www.meme-arsenal.com/memes/925f3e6e213ebe0bc196d379a7281ee8.jpg',
  })
  const fourthService = await Service.create({
    name: '4',
    shortDescription: 'descrizione del quarto servizio',
    description: 'descrizione del quarto servizio',
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
