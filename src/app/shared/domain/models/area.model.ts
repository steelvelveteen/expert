import { ISection } from './section.model';

export interface IArea {
    id: number;
    title: string;
    section: ISection[];
}
