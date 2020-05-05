import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
	const { provider, date } = request.body;

	const parseDate = startOfHour(parseISO(date));

	const findAppointmentInSameDate = appointmentsRepository.findByDate(
		parseDate,
	);

	if (findAppointmentInSameDate) {
		return response
			.status(400)
			.json({ messageError: 'This appointment is already book' });
	}

	const appointment = appointmentsRepository.create(provider, date);

	return response.json(appointment);
});

export default appointmentsRouter;
