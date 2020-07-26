//Plugin by Goinza
(function() {
    var alias1 = MapEdit._openMenu;
    MapEdit._openMenu = function(unit) {
        return unit !== null && unit.custom.hidden!=null && unit.custom.hidden ? MapEditResult.NONE : alias1.call(this, unit);
    }
})()
