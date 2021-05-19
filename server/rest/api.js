import express from 'express'
import initializeDatabase from '../db-conn'
const app = express()

// We need this one if we send data inside the body as JSON
app.use(express.json())

async function init() {
  // Call the init function that returns the Database
  const db = await initializeDatabase()
  // Let's extract all the objects we need to perform queries inside the endpoints
  const { Area, Service, Person, RoleArea, RoleService } = db._tables
  // API to get all the articles
  app.get('/areas', async (req, res) => {
    const areas = await Area.findAll()
    return res.json(areas)
  })
  app.get('/services', async (req, res) => {
    const services = await Service.findAll()
    return res.json(services)
  })
  app.get('/people', async (req, res) => {
    const people = await Person.findAll()
    return res.json(people)
  })
  app.get('/roleareas', async (req, res) => {
    const roleareas = await RoleArea.findAll()
    return res.json(roleareas)
  })
  app.get('/roleservices', async (req, res) => {
    const roleservices = await RoleService.findAll()
    return res.json(roleservices)
  })
  // API to get an article by ID.
  // This one will return also the comments
  app.get('/people/:id', async (req, res) => {
    const { id } = req.params
    const person = await Person.findOne({
      where: { id },
      include: { model: RoleArea, RoleService }, // -> this is the way we "include" also comments inside Articles
    })
    return res.json(person)
  })
}

init()

export default app
