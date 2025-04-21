import { DragService } from './DragService.js';
import { ResizeService } from './ResizeService.js';

export class ServiceFactory {
  static createServices(elements, stateDispatcher, commandManager) {
    const services = {
      dragService: new DragService(elements, stateDispatcher, commandManager),
      resizeService: new ResizeService(elements),
    };

    // Initialize all services
    services.dragService.init();
    services.resizeService.init();

    return services;

  }
}
