import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

interface IRequestDTO {
	provider_id: string;
	month: number;
	year: number;
	day: number;
}

@injectable()
class ListProviderAppointmentsService {
	constructor(
		@inject('AppointmentsRepository')
		private appointmentsRepository: IAppointmentsRepository,

		@inject('CacheProvider')
		private cacheProvider: ICacheProvider,
	) {}

	public async execute({
		provider_id,
		month,
		year,
		day,
	}: IRequestDTO): Promise<Appointment[]> {
		const data = await this.cacheProvider.recover('blz');

		console.log(data); // beleza

		const appointments = await this.appointmentsRepository.findAllInDayFromProvider(
			{
				provider_id,
				month,
				year,
				day,
			},
		);

		// await this.cacheProvider.save('blz', 'beleza');

		return appointments;
	}
}

export default ListProviderAppointmentsService;
