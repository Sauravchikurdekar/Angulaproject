import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn:" " any =acccess any where outside the service,root=only for this application service,platform=for specific module
// })
export class CapchaService {
  public GenerateCode():any {

 

  var a=Math.random()*10;
  var b=Math.random()*10;
  var c=Math.random()*10;
  var d=Math.random()*10;
  var e=Math.random()*10;
  var f=Math.random()*10;
  var code= `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`
  return code;

}
  constructor() { }

  }

