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
    const roleservices = await RoleService.findAll({
      include: [{ model: Person }, { model: Service }],
    })
    return res.json(roleservices)
  })
  app.get('/roleservicesbyrole/:role', async (req, res) => {
    const { role } = req.params
    const roleservices = await RoleService.findAll({
      where: { role },
      include: [{ model: Person }, { model: Service }],
    })
    return res.json(roleservices)
  })
  // API to get a person by ID.
  app.get('/people/:id', async (req, res) => {
    const { id } = req.params
    const person = await Person.findOne({
      where: { id },
      include: [
        { model: RoleArea, include: [Area] },
        { model: RoleService, include: [Service] },
      ],
    })
    return res.json(person)
  })
  // API to get a service by ID.
  app.get('/services/:id', async (req, res) => {
    const { id } = req.params
    const service = await Service.findOne({
      where: { id },
      include: [{ model: RoleService, include: [Person] }, { model: Area }],
    })
    return res.json(service)
  })
  // API to get an area by ID.
  app.get('/areas/:id', async (req, res) => {
    const { id } = req.params
    const area = await Area.findOne({
      where: { id },
      include: [{ model: RoleArea, include: [Person] }, { model: Service }],
    })
    return res.json(area)
  })
  // API to get an area and services.
  app.get('/areaservices', async (req, res) => {
    const area = await Area.findAll({
      include: [{ model: Service, required: true }],
    })
    return res.json(area)
  })
}

init()

export default app
