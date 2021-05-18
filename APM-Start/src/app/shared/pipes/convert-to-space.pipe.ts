import { visitValue } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "covertToSpace"
})
export class ConvertToSpacePipe implements PipeTransform {
    
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }
}