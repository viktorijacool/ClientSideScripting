// Custom Pipes

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform{
    
    // var args[] - (array) is needed to pass several parameters

    transform(value: any, ...args: any[]) {
        return value.replace(args[0], ' ');
    }

}