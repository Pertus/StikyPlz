
module Backend.Models {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    
    export class TicketModel {
        
        // ID
        public id: number = 0;
        // TITLE
        public title: string = null;
        // DESCRIPTION
        public description: string = null;
        // STATUS
        public status: number = 0;
        // PROJECTID
        public projectId: number = 0;
        // PROJECT
        public project: ProjectModel = null;
        // CREATED
        public created: Date = new Date(0);
        // MODIFIED
        public modified: Date = new Date(0);
        // DELETED
        public deleted: boolean = false;
    }
}

