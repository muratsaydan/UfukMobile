define(["modules/forms/module","bootstrap-timepicker"],function(a){"use strict";return a.registerDirective("smartTimepicker",function(){return{restrict:"A",compile:function(a){a.removeAttr("smart-timepicker data-smart-timepicker"),a.timepicker()}}})});