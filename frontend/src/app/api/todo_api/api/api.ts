export * from './profileController.service';
import { ProfileControllerApi } from './profileController.service';
export * from './profileController.serviceInterface';
export * from './todoEntityController.service';
import { TodoEntityControllerApi } from './todoEntityController.service';
export * from './todoEntityController.serviceInterface';
export const APIS = [ProfileControllerApi, TodoEntityControllerApi];
