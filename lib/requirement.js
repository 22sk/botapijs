const Callable = require('./callable');

/**
 * Checks, before the actual Handler gets called
 *
 * @constructor
 * @description
 *   You can also use the other constructor styles stated in {@link Callable}.
 *
 * @param {object}        object            Object or Requirement name
 * @param {String}        object.name       Requirement's name
 * @param {Function}      object.callable   Callable function
 * @param {Requirement[]} [object.requires] Requirement's requirements
 * @param {object}        [object.options]  Requirement's options object
 * @param {boolean}       [object.multiple] Can be required more than once?
 */
class Requirement extends Callable {

  /**
   * Important data can be filtered using ES6' destructive syntax.
   * This example gets the data and the Requirement object from the Processing
   * object
   * ```
   * (done, { data, requirement }) => {}
   * ```
   *
   * @callback Requirement~callable Modifies or checks the given data, which is
   *                                then passed to the next requirement in the
   *                                array. Must give either true or false to
   *                                the result callback function. If false is
   *                                given, the handler will not be executed at
   *                                all, as all requirements need to callback
   *                                true.
   *
   * @param {Requirement~done} done      Callback for Requirement's result.
   * @param {Processor}        processor Processor object containing all
   *                                     relevant data
   * @see Processor
   * @see Callable~callable
   */

  /**
   * @callback Requirement~done
   *
   * @param {object} [error]  Pass a truthy value if the Requirement didn't pass
   * @param {object} [result] The Requirement's very own parameters.
   *                          Will be stored in
   *                          `processing.params[requirementName]` and usable
   *                          to all next Requirements
   * @param {object} [data]   Whatever is passed as data will replace all next
   *                          Requirements' and the Handler's data
   */
}

module.exports = Requirement;