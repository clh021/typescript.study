/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

var strings = ['Hello', '98052', '101'];
var validators: { [s: string]: Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
for(var i=0;i<strings.length;i++){
  for (var name in validators) {
     document.write('"' + strings[i] + '" ' + (validators[name].isAcceptable(strings[i]) ? ' matches ' : ' does not match ') + name+"<br>"); //调用类的方法
    }
}