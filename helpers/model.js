module.exports = function (chai, utils) {
    var Assertion = chai.Assertion;

        /**
     * # Model
     *
     * A constructor for a simple data model
     * object. Has a `type` and contains arbitrary
     * attributes.
     *
     * @param {String} type
     */

    function Model (type) {
        this._type = type;
        this._attrs = {};
    }
    
    /**
     * .set (key, value)
     *
     * Set an attribute to be stored in this model.
     *
     * @param {String} key
     * @param {Mixted} value
     */
    
    Model.prototype.set = function (key, value) {
        this._attrs[key] = value;
    };
    
    /**
     * .get (key)
     *
     * Get an attribute that is stored in this model.
     *
     * @param {String} key
     */
    
    Model.prototype.get = function (key) {
        return this._attrs[key];
    };

    utils.addProperty(Assertion.prototype, 'model', function () {
        this.assert(
            this._obj instanceof Model
          , 'expected #{this} to be a Model'
          , 'expected #{this} to not be a Model'
        );
      });

    Assertion.addMethod('model', function (type) {
        var obj = this_.obj;

        new Assertion(this._obj).to.be.instanceof(Model);

        this.assert(
            obj._type === type
            , "expected #{this} to be of type #{exp} but got #{act}"
            , "expected #{this} to not be of type #{act}"
            , type        // expected
            , obj._type   // actual
        );
    });  
};