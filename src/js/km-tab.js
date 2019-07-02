;(function ($, window, document, undefined) {


    function init(jq) {
        console.log("init");
        initClick(jq);
    }

    /**
     * 初始化切换
     * @param jq
     */
    function initClick(jq){
        var title = jq.children('.km-tab-title').eq(0);
        var body = jq.children('.km-tab-body').eq(0);
        title.children('li').each(function (index) {
            $(this).on('click',function () {
                $(this)
                    .addClass('active')
                    .siblings('li')
                    .removeClass('active');

                body.children('.km-tab-item')
                    .eq(index)
                    .addClass('active')
                    .siblings('.km-tab-item')
                    .removeClass('active');
            });
        });
    }

    /**
     * 插件实现代码
     * @param options 如果是json对象，则创建[初始化]插件，如果是字符串，则用来调用插件的公开方法
     * @param param 当前options是字符串时，代表传递给插件公开方法的参数。当然，你可以不传
     * @returns {*}
     */
    $.fn.kmTab = function (options, param) {
        // 如果是方法调用
        if (typeof options === 'string') {
            return $.fn.kmTab.methods[options](this, param);
        }

        // 获得配置，这里为了得到用户的配置项，覆盖默认配置项，并保存到当前jquery插件实例中
        var _opts = $.extend({}, $.fn.kmTab.defaults, options);
        var jq = this;
        jq.config = _opts;

        // 链式调用
        return this.each(function () {
            // console.log(this);
            // 调用私有方法，初始化插件
            init(jq);
        });
    };


    /**
     * 插件的公开方法
     */
    $.fn.kmTab.methods = {
        options: function (jq) {
            return jq.config;
        }
    };


    /**
     * 插件的默认配置
     */
    $.fn.kmTab.defaults = {


    };
})(jQuery, window, document);