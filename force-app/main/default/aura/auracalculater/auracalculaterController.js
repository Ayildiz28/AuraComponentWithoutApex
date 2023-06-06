({
    
    doinit: function(component, event, helper) {
        console.log('doinit çalıştı....');
        
    },
	sum : function(component, event, helper) {
		
        console.log("toplama işlemi tıklandı");
        
        var x=component.get("v.numberx");
        var y=component.get("v.numbery");
        var resultvalue=Number(x)+Number(y);
        component.set("v.result",resultvalue);
        component.set("v.proccess","+");
	
},

	sub : function(component, event, helper) {
		
        console.log("çıkarma işlemi tıklandı");
        
        var x=component.get("v.numberx");
        var y=component.get("v.numbery");
        var resultvalue=Number(x)-Number(y);
        component.set("v.result",resultvalue);
        component.set("v.proccess","-");
	}
,
    mult : function(component, event, helper) {
		
        console.log("çarpma işlemi tıklandı");
        
        var x=component.get("v.numberx");
        var y=component.get("v.numbery");
        var resultvalue=Number(x)*Number(y);
        component.set("v.result",resultvalue);
        component.set("v.proccess","*");
	
},

	div : function(component, event, helper) {
		
        console.log("bölme işlemi tıklandı");
        
        var x=component.get("v.numberx");
        var y=component.get("v.numbery");
        var resultvalue=Number(x)/Number(y);
        component.set("v.result",resultvalue);
        component.set("v.proccess","/");
	}
}
)