import { Injectable, signal, WritableSignal } from '@angular/core';

interface Alert {
  message: string;
  status: 'success' | 'warn' | 'danger' | null;
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alert: WritableSignal<Alert> = signal<Alert>({
    message: '',
    status: null,
  });

  setAlert(alert: Alert): void {
    this.alert.set(alert);
  }

  clearAlert() {
    this.alert.set({ message: '', status: null });
  }

  getAlert(): Alert {
    return this.alert();
  }
}
