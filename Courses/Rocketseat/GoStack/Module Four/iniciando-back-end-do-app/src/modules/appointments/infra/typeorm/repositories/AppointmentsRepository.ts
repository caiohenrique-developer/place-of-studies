import { EntityRepository, Repository } from 'typeorm';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

// This guy is responsable to manager all process
// of my Appointment route, as create, delete, list, edit.
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment>
	implements IAppointmentsRepository {
	public async findByDate(date: Date): Promise<Appointment | undefined> {
		const findAppointment = await this.findOne({
			where: { date },
		});

		return findAppointment;
	}
}

export default AppointmentsRepository;