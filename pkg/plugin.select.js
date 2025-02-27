
;(function ( $, window, document, undefined ) {

    var pluginName = 'bootstrapSelect',
        _search = '.waxed-bootstrap-select',
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
        if (typeof that.dd.bsName == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.bsName, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.config == 'object') {
          
          
        };
        if (typeof rec.value == 'string') {
          this.select(rec.value);
        };
        if (typeof rec.value == 'number') {
          this.select(rec.value);
        };
      },
      
      this.select = function(value) {
        $(that.element).find('option').each(function(i,a){
          var val = $(a).attr('value');
          if (val == value) {
            $(a).attr('selected', 'selected');
          } else {
            $(a).removeAttr('selected');
          }
        });        
      },

      this.free = function() {

      },

      this.init=function() {
        
        if (typeof that.dd.value != 'undefined') {
          this.select(that.dd.value);
        };
        
        $(that.element).on('change', function() {
          if ((typeof that.dd.submit == 'string')&&(that.dd.submit == 'yes')) {
            var f = $(that.element).closest('form.waxed-form');
            if (f) $(f).trigger('waxed-form-submit');
          } else if ((typeof that.dd.action == 'string')&&(typeof that.dd.url == 'string')) {
            var data = {
              'action':that.dd.action,
              'value': this.value
            };
            that.pluggable.sendData(data, that.dd.url, that);            
          };
        });

        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
