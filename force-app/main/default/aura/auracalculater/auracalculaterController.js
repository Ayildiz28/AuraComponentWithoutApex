({
    
    calcOpenClose: function(component, event, helper) {
        console.log('calcOpenClose çalıştı....');
        
        var iscalcopen=component.get("v.isAuracalcOpen");
        var text=component.get("v.buttonText");
        console.log(iscalcopen);
        console.log(text);
        
        component.set("v.isAuracalcOpen",!iscalcopen);
        console.log("...işlem sonrası.....");
        component.get("v.isAuracalcOpen")
        
        if(iscalcopen==false){
             component.set("v.buttonText","HIDE");
            
        }else{
            component.set("v.buttonText","SHOW");
        }
        
    },
    
    
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