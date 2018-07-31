import { ProjectModel } from './projectModel';

export class TicketModel {

    public id: number;

    public title: string;

    public description: string;

    public status: number;

    public projectId: number;

    public project: ProjectModel;

    public created: Date;

    public modified: Date;

    public deleted: boolean;
}


