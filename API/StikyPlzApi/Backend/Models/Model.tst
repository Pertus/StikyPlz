module Backend.Models {

    // $Classes/Enums/Interfaces(filter)[template][separator]
    // filter (optional): Matches the name or full name of the current item. * = match any, wrap in [] to match attributes or prefix with : to match interfaces or base classes.
    // template: The template to repeat for each matched item
    // separator (optional): A separator template that is placed between all templates e.g. $Properties[public $name: $Type][, ]

    // More info: http://frhagn.github.io/Typewriter/

    $Classes(*Model)[
    export class $Name {
        $Properties[

        public $name: $Type]
    }]
}

${
    Template(Settings settings)
    {
        settings.OutputFilenameFactory = file => 
        {
			var fileName = file.Name.Replace(".cs", "");
            fileName = char.ToLower(fileName[0]) + fileName.Substring(1);
			fileName = fileName + ".ts";
            return "../../../../Client/src/app/shared/interfaces/" + fileName;
        };
    }
}