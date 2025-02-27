
;(function ( $, window, document, undefined ) {

    var pluginName = 'bootstrap-accordion',
        _search = '.accordion.waxed-bs-accordion',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        //console.log('ACCORDION', RECORD);
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.show == 'number') { 
          this.showItem(rec.show);
        };
      },
      
      this.showItem = function(num){
          let items = $(that.element).find('.accordion-item');
          if (items.length >= num) {
            for (var i=0;i<items.length;i++) {
              let button = $(items[i]).find('button.accordion-button');
              if (button.length == 1) {
                if (i==num) {
                  $(button[0]).attr('aria-expanded', 'true');
                  $(button[0]).removeClass('collapsed');
                } else {
                  $(button[0]).attr('aria-expanded', 'false');
                  $(button[0]).addClass('collapsed');
                }
              };
              let collapse = $(items[i]).find('.accordion-collapse');
              if (collapse.length == 1) {
                if (i==num) {
                  $(collapse[0]).addClass('show');
                } else {
                  $(collapse[0]).removeClass('show');
                }
              };              
            };
            
            
          };         
      },

      this.free = function() {

      },

      this.init=function() {
        
        let items = $(that.element).find('.accordion-item');
        if (items.length == 1) {
          let collapse = $(items[0]).find('.accordion-collapse');
          if (collapse.length == 1) {
            $(collapse[0]).addClass('show');
          };
        };
        

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
