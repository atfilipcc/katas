"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.format = function (item) {
        var streets = ':';
        var houseNum = '/';
        for (var i = 0; i < item.length; i++) {
            streets += (item[i].replace(/([A-Z]{2})|(\d)/g, '').trim() + (i == item.length - 1 ? '' : ','));
            houseNum += (item[i].match(/^\d{1,4}/) + (i == item.length - 1 ? '' : ','));
        }
        return streets + houseNum;
    };
    G964.travel = function (r, zipcode) {
        if (zipcode.length == 0)
            return ':/';
        var array = r.split(',').filter(function (item) { return item.match(zipcode) && zipcode.match(/([A-Z]{2}\s\d{5})$/); });
        return "" + zipcode + G964.format(array);
    };
    return G964;
}());
exports.G964 = G964;
var ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
    + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
    + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
    + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
    + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
    + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
    + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
    + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
    + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
    + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
    + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
    + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";
console.log(G964.travel(ad, "AA 45522"));
// console.log(G964.travel(ad, "AX 45522"));
// console.log(G964.travel(ad, "YY 45098"))
console.log(G964.travel(ad, "OH 430"));
//# sourceMappingURL=travel.js.map