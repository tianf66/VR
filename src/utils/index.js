export default {
    loadScript: function(xyUrl, async, callback){
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = xyUrl;
        if(async) script.setAttribute('async', true);
        //借鉴了jQuery的script跨域方法
        script.onload = script.onreadystatechange = function(){
            if((!script.readyState || script.readyState === "loaded" || script.readyState === "complete")){
                callback && callback();
                // Handle memory leak in IE
                script.onload = script.onreadystatechange = null;
                if ( head && script.parentNode ) {
                    head.removeChild( script );
                }
            }
        };
        // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
        head.insertBefore( script, head.firstChild );
    },

};
