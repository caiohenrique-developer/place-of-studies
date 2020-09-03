import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequestDTO {
	provider_id: string;
	month: number;
	year: number;
}

type IResponse = Array<{
	day: number;
	availability: boolean;
}>;

@injectable()
class ListProviderMonthAvailabilityService {
	constructor(
		@inject('AppointmentsRepository')
		private appointmentsRepository: IAppointmentsRepository,
	) {}

	public async execute({
		provider_id,
		month,
		year,
	}: IRequestDTO): Promise<IResponse> {
		const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
			{
				provider_id,
				month,
				year,
			},
		);

		console.log(appointments);

		return [{ day: 8, availability: false }];
	}
}

export default ListProviderMonthAvailabilityService;
