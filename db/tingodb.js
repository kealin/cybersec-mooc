/**
 * Created by Kim Lindqvist on 21-Jan-17.
 */
var path = require('path');
var Db = require('tingodb')().Db,
    assert = require('assert');

var appDir = path.dirname(require.main.filename);

var db = new Db(appDir, {});

module.exports = db;