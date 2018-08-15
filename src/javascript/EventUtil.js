var EventUtil = {

    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler){
        if (element.removeEventListener){                 //DOM2
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){                 //IE
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;                //DOM0
        }
    },

    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){  //DOM
            return event.button;
        } else {
            switch(event.button){                                      // <= IE 8
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    
    getClipboardText: function(event){
        var clipboardData =  (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    
    getEvent: function(event){
        return event ? event : window.event;
    },
    
    getRelatedTarget: function(event){      //相关元素
        if (event.relatedTarget){            //DOM
            return event.relatedTarget;
        } else if (event.toElement){        //IE mouseout
            return event.toElement;
        } else if (event.fromElement){      //IE mouseover
            return event.fromElement;
        } else {
            return null;
        }
    
    },
    
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    
    getWheelDelta: function(event){
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    setClipboardText: function(event, value){
        if (event.clipboardData){
            event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData){
            window.clipboardData.setData("text", value);
        }
    },
    
    stopPropagation: function(event){
        if (event.stopPropagation){
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};