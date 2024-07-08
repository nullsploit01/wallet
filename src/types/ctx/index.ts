import { INoitification } from '@/src/types/models/notification'

export interface INotificationContext {
  showNotification: (notification: INoitification) => void
}
