import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'employeeFilter'})
export class EmployeeFilterPipe implements PipeTransform {
    
    transform(value: any[], args: string): any[] {
        console.log(value);
        console.log(args);

        let searchFilter: string = args?.toLocaleLowerCase();
        
        return searchFilter ? value.filter(employee => 
            employee.name.toLocaleLowerCase().startsWith(searchFilter)) : value;
    }
}