window.contactView = Backbone.View.extend({

    initialize:function () {
        this.template = _.template(tpl.get('contact'));
    },

    render:function (eventName) {
        $(this.el).html(this.template());
        return this;
    }

});