import express from "express"
import {
	initDb,
	getAllItineraries,
	getItinerary,
	getAllPois,
	getPoi,
	getAllEvents,
	getEvent,
	getSummerEvents,
	getWinterEvents,
	getAllServices,
	getAllServicesOfType
} from "./db"

const app = express()

app.use(express.json())

app.get("/initdb", (_req, res) => {
	try {
		initDb()
	} catch (error) {
		res.json(error)
	}
	res.json({ done: true })
})

app.get("/itinerary", async (_req, res) => {
	const itineraries = await getAllItineraries()
	res.json(itineraries)
})

app.get("/itinerary/:title", async (req, res) => {
	const { title } = req.params
	const itinerary = await getItinerary(title)
	res.json(itinerary)
})

app.get("/poi", async (_req, res) => {
	const pois = await getAllPois()
	res.json(pois)
})

app.get("/poi/:title", async (req, res) => {
	const { title } = req.params
	const poi = await getPoi(title)
	res.json(poi)
})

app.get("/event", async (_req, res) => {
	const events = await getAllEvents()
	res.json(events)
})

app.get("/event/summer", async (req, res) => {
	const events = await getSummerEvents()
	res.json(events)
})

app.get("/event/winter", async (_req, res) => {
	const events = await getWinterEvents()
	res.json(events)
})

app.get("/event/:title", async (req, res) => {
	const { title } = req.params
	const event = await getEvent(title)
	res.json(event)
})

app.get("/service", async (_req, res) => {
	const services = await getAllServices()
	res.json(services)
})

app.get("/service/:type", async (req, res) => {
	const { type } = req.params
	const service = await getAllServicesOfType(type)
	res.json(service)
})

export default app
