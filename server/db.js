import { PrismaClient, season } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllItineraries = async () => {
	return await prisma.itinerary.findMany()
}

export const getItinerary = async (title) => {
	const itinerary = await prisma.itinerary.findFirst({
		where: {
			Title: { equals: title, mode: "insensitive" }
		},
		include: { PoiToItinerary: { include: { POI: true } } }
	})

	return {
		Title: itinerary.Title,
		Description: itinerary.Description,
		ImageUrl: itinerary.ImageUrl,
		TotalDuration: itinerary.TotalDuration,
		SuggestedAudience: itinerary.SuggestedAudience,
		Pois: itinerary.PoiToItinerary.map((pti) => pti.POI)
	}
}

export const getAllPois = async () => {
	return await prisma.poi.findMany({ orderBy: { Id: "asc" } })
}

export const getPoi = async (title) => {
	const poi = await prisma.poi.findFirst({
		where: {
			Title: { equals: title, mode: "insensitive" }
		},
		include: { PoiToItinerary: { include: { Itinerary: true } }, Event: true }
	})
	return {
		Poi: {
			Title: poi.Title,
			Description: poi.Description,
			Address: poi.Address,
			ImageUrl: poi.ImageUrl,
			OpeningHours: poi.OpeningHours
		},
		Events: poi.Event.map((e) => {
			return { ...e, Date: e.Date.toDateString(), TimeDuration: e.TimeDuration.getHours() + ":" + e.TimeDuration.getMinutes() }
		}),
		Itineraries: poi.PoiToItinerary.map((pti) => pti.Itinerary)
	}
}

export const getAllEvents = async () => {
	return await prisma.event.findMany()
}

export const getEvent = async (title) => {
	return await prisma.event.findFirst({
		where: {
			Title: { equals: title, mode: "insensitive" }
		},
		include: { POI: true }
	})
}

export const getSummerEvents = async () => {
	return await prisma.event.findMany({
		where: {
			Season: season.Summer
		}
	})
}

export const getWinterEvents = async () => {
	return await prisma.event.findMany({
		where: {
			Season: season.Winter
		}
	})
}

export const getAllServices = async () => {
	const serviceTypes = await prisma.serviceType.findMany({
		orderBy: { Title: "asc" },
		select: { Title: true }
	})
	const services = await prisma.service.findMany({ orderBy: { id: "asc" } })
	return { serviceTypes, services }
}

export const getAllServicesOfType = async (title) => {
	const serviceTypes = await prisma.serviceType.findMany({
		orderBy: { Title: "asc" }
	})

	const services = await prisma.serviceType.findFirst({
		where: {
			Title: { equals: title, mode: "insensitive" }
		},
		include: { Service: true }
	})
	return { serviceTypes, services: services.Service, selectedServiceType: { Title: services.Title, Introduction: services.Introduction } }
}
