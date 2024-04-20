
import {PipeTransform,Pipe} from '@angular/core';
@Pipe({
    name:'sentence'
})

export class SentencePipe implements PipeTransform{
   
    
    transform(sentence:string) {
        var firstchar=sentence.charAt(0);
        var restChars=sentence.substring(1);
        var sentence=firstchar.toUpperCase()+restChars.toLocaleLowerCase();
        return sentence;
        
    }
        
    }

