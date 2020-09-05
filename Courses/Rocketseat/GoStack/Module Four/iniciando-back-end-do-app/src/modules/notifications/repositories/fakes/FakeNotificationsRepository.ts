import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import Notifications from '@modules/notifications/infra/typeorm/schemas/Notifications';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import { ObjectID } from 'mongodb';

class NotificationsRepository implements INotificationsRepository {
	private notifications: Notifications[] = [];

	public async create({
		content,
		recipient_id,
	}: ICreateNotificationDTO): Promise<Notifications> {
		const notification = new Notifications();

		Object.assign(notification, { id: new ObjectID(), content, recipient_id });

		this.notifications.push(notification);

		return notification;
	}
}

export default NotificationsRepository;
