// Copyright 2012, Артём Курбатов [tenorok.ru] | MIT License

jQuery.fn.textlimiter = function(options) {

    var options = $.extend({
        text: 'Максимальное количество символов: {max}. Вы превысили на {over}.',
        max: 140,
        style: {},
        class: '',
        formSend: false
    }, options);

    return this.each(function() {
        
        var defCss = this.style.cssText,
            sendForm,
            diff,
            ptext;

        $(this).bind('keyup paste cut change', function() {

            var obj = this;
            
            setTimeout(function() {
                
                if(obj.value.length > options.max) {
                    
                    diff  = obj.value.length - options.max;
                    ptext = options.text
                        .replace('{over}', diff)
                        .replace('{max}',  options.max);
                    
                    $('.txl_' + obj.id).text(ptext);
                    
                    $(obj)
                        .addClass(options.class)
                        .css(options.style);

                    sendForm = options.formSend;
                }
                else {
                    
                    $('.txl_' + obj.id).text('');
                    
                    $(obj).removeClass(options.class);
                    obj.style.cssText = defCss;

                    sendForm = true;
                }
            }, 100);
            
        });

        $(this).parents('form').submit(function() {
            return sendForm;
        });
        
    }).change();
};