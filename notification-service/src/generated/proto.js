// @ts-nocheck
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $isFinite = $util.global.isFinite, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Array = $util.global.Array, $Boolean = $util.global.Boolean;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.event = (function() {

    /**
     * Namespace event.
     * @exports event
     * @namespace
     */
    var event = {};

    event.DepositSuccessEvent = (function() {

        /**
         * Properties of a DepositSuccessEvent.
         * @typedef {Object} event.DepositSuccessEvent.$Properties
         * @property {string|null} [to] DepositSuccessEvent to
         * @property {string|null} [username] DepositSuccessEvent username
         * @property {number|null} [amount] DepositSuccessEvent amount
         * @property {string|null} [transactionTime] DepositSuccessEvent transactionTime
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DepositSuccessEvent.
         * @memberof event
         * @interface IDepositSuccessEvent
         * @augments event.DepositSuccessEvent.$Properties
         * @deprecated Use event.DepositSuccessEvent.$Properties instead.
         */

        /**
         * Shape of a DepositSuccessEvent.
         * @typedef {event.DepositSuccessEvent.$Properties} event.DepositSuccessEvent.$Shape
         */

        /**
         * Constructs a new DepositSuccessEvent.
         * @memberof event
         * @classdesc Represents a DepositSuccessEvent.
         * @constructor
         * @param {event.DepositSuccessEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var DepositSuccessEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DepositSuccessEvent to.
         * @member {string} to
         * @memberof event.DepositSuccessEvent
         * @instance
         */
        DepositSuccessEvent.prototype.to = "";

        /**
         * DepositSuccessEvent username.
         * @member {string} username
         * @memberof event.DepositSuccessEvent
         * @instance
         */
        DepositSuccessEvent.prototype.username = "";

        /**
         * DepositSuccessEvent amount.
         * @member {number} amount
         * @memberof event.DepositSuccessEvent
         * @instance
         */
        DepositSuccessEvent.prototype.amount = 0;

        /**
         * DepositSuccessEvent transactionTime.
         * @member {string} transactionTime
         * @memberof event.DepositSuccessEvent
         * @instance
         */
        DepositSuccessEvent.prototype.transactionTime = "";

        /**
         * Creates a new DepositSuccessEvent instance using the specified properties.
         * @function create
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {event.DepositSuccessEvent.$Properties=} [properties] Properties to set
         * @returns {event.DepositSuccessEvent} DepositSuccessEvent instance
         * @type {{
         *   (properties: event.DepositSuccessEvent.$Shape): event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape;
         *   (properties?: event.DepositSuccessEvent.$Properties): event.DepositSuccessEvent;
         * }}
         */
        DepositSuccessEvent.create = function(properties) {
            return new DepositSuccessEvent(properties);
        };

        /**
         * Encodes the specified DepositSuccessEvent message. Does not implicitly {@link event.DepositSuccessEvent.verify|verify} messages.
         * @function encode
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {event.DepositSuccessEvent.$Properties} message DepositSuccessEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositSuccessEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.to != null && $Object.hasOwnProperty.call(message, "to") && message.to !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.to);
            if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount") && !$Object.is(message.amount, 0))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.amount);
            if (message.transactionTime != null && $Object.hasOwnProperty.call(message, "transactionTime") && message.transactionTime !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.transactionTime);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DepositSuccessEvent message, length delimited. Does not implicitly {@link event.DepositSuccessEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {event.DepositSuccessEvent.$Properties} message DepositSuccessEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositSuccessEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DepositSuccessEvent message from the specified reader or buffer.
         * @function decode
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape} DepositSuccessEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositSuccessEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.event.DepositSuccessEvent();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.to = value;
                        else
                            delete message.to;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 3: {
                        if (wireType !== 1)
                            break;
                        if (!$Object.is(value = reader.double(), 0))
                            message.amount = value;
                        else
                            delete message.amount;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.transactionTime = value;
                        else
                            delete message.transactionTime;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DepositSuccessEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape} DepositSuccessEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositSuccessEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a DepositSuccessEvent message.
         * @function verify
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepositSuccessEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.transactionTime != null && $Object.hasOwnProperty.call(message, "transactionTime"))
                if (!$util.isString(message.transactionTime))
                    return "transactionTime: string expected";
            return null;
        };

        /**
         * Creates a DepositSuccessEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {event.DepositSuccessEvent} DepositSuccessEvent
         */
        DepositSuccessEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.event.DepositSuccessEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".event.DepositSuccessEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.event.DepositSuccessEvent();
            if (object.to != null)
                if (typeof object.to !== "string" || object.to.length)
                    message.to = $String(object.to);
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.amount != null)
                if (!$Object.is($Number(object.amount), 0))
                    message.amount = $Number(object.amount);
            if (object.transactionTime != null)
                if (typeof object.transactionTime !== "string" || object.transactionTime.length)
                    message.transactionTime = $String(object.transactionTime);
            return message;
        };

        /**
         * Creates a plain object from a DepositSuccessEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {event.DepositSuccessEvent} message DepositSuccessEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepositSuccessEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.to = "";
                object.username = "";
                object.amount = 0;
                object.transactionTime = "";
            }
            if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                object.to = message.to;
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                object.amount = options.json && !$isFinite(message.amount) ? $String(message.amount) : message.amount;
            if (message.transactionTime != null && $Object.hasOwnProperty.call(message, "transactionTime"))
                object.transactionTime = message.transactionTime;
            return object;
        };

        /**
         * Converts this DepositSuccessEvent to JSON.
         * @function toJSON
         * @memberof event.DepositSuccessEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepositSuccessEvent.prototype.toJSON = function() {
            return DepositSuccessEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DepositSuccessEvent
         * @function getTypeUrl
         * @memberof event.DepositSuccessEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DepositSuccessEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/event.DepositSuccessEvent";
        };

        return DepositSuccessEvent;
    })();

    event.ForgotPasswordEvent = (function() {

        /**
         * Properties of a ForgotPasswordEvent.
         * @typedef {Object} event.ForgotPasswordEvent.$Properties
         * @property {string|null} [to] ForgotPasswordEvent to
         * @property {string|null} [username] ForgotPasswordEvent username
         * @property {string|null} [resetCode] ForgotPasswordEvent resetCode
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ForgotPasswordEvent.
         * @memberof event
         * @interface IForgotPasswordEvent
         * @augments event.ForgotPasswordEvent.$Properties
         * @deprecated Use event.ForgotPasswordEvent.$Properties instead.
         */

        /**
         * Shape of a ForgotPasswordEvent.
         * @typedef {event.ForgotPasswordEvent.$Properties} event.ForgotPasswordEvent.$Shape
         */

        /**
         * Constructs a new ForgotPasswordEvent.
         * @memberof event
         * @classdesc Represents a ForgotPasswordEvent.
         * @constructor
         * @param {event.ForgotPasswordEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var ForgotPasswordEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ForgotPasswordEvent to.
         * @member {string} to
         * @memberof event.ForgotPasswordEvent
         * @instance
         */
        ForgotPasswordEvent.prototype.to = "";

        /**
         * ForgotPasswordEvent username.
         * @member {string} username
         * @memberof event.ForgotPasswordEvent
         * @instance
         */
        ForgotPasswordEvent.prototype.username = "";

        /**
         * ForgotPasswordEvent resetCode.
         * @member {string} resetCode
         * @memberof event.ForgotPasswordEvent
         * @instance
         */
        ForgotPasswordEvent.prototype.resetCode = "";

        /**
         * Creates a new ForgotPasswordEvent instance using the specified properties.
         * @function create
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {event.ForgotPasswordEvent.$Properties=} [properties] Properties to set
         * @returns {event.ForgotPasswordEvent} ForgotPasswordEvent instance
         * @type {{
         *   (properties: event.ForgotPasswordEvent.$Shape): event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape;
         *   (properties?: event.ForgotPasswordEvent.$Properties): event.ForgotPasswordEvent;
         * }}
         */
        ForgotPasswordEvent.create = function(properties) {
            return new ForgotPasswordEvent(properties);
        };

        /**
         * Encodes the specified ForgotPasswordEvent message. Does not implicitly {@link event.ForgotPasswordEvent.verify|verify} messages.
         * @function encode
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {event.ForgotPasswordEvent.$Properties} message ForgotPasswordEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForgotPasswordEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.to != null && $Object.hasOwnProperty.call(message, "to") && message.to !== "")
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.to);
            if (message.username != null && $Object.hasOwnProperty.call(message, "username") && message.username !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.resetCode != null && $Object.hasOwnProperty.call(message, "resetCode") && message.resetCode !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.resetCode);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ForgotPasswordEvent message, length delimited. Does not implicitly {@link event.ForgotPasswordEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {event.ForgotPasswordEvent.$Properties} message ForgotPasswordEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForgotPasswordEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ForgotPasswordEvent message from the specified reader or buffer.
         * @function decode
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape} ForgotPasswordEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForgotPasswordEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.event.ForgotPasswordEvent();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.to = value;
                        else
                            delete message.to;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.username = value;
                        else
                            delete message.username;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.resetCode = value;
                        else
                            delete message.resetCode;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ForgotPasswordEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape} ForgotPasswordEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForgotPasswordEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a ForgotPasswordEvent message.
         * @function verify
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForgotPasswordEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.resetCode != null && $Object.hasOwnProperty.call(message, "resetCode"))
                if (!$util.isString(message.resetCode))
                    return "resetCode: string expected";
            return null;
        };

        /**
         * Creates a ForgotPasswordEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {event.ForgotPasswordEvent} ForgotPasswordEvent
         */
        ForgotPasswordEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.event.ForgotPasswordEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".event.ForgotPasswordEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.event.ForgotPasswordEvent();
            if (object.to != null)
                if (typeof object.to !== "string" || object.to.length)
                    message.to = $String(object.to);
            if (object.username != null)
                if (typeof object.username !== "string" || object.username.length)
                    message.username = $String(object.username);
            if (object.resetCode != null)
                if (typeof object.resetCode !== "string" || object.resetCode.length)
                    message.resetCode = $String(object.resetCode);
            return message;
        };

        /**
         * Creates a plain object from a ForgotPasswordEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {event.ForgotPasswordEvent} message ForgotPasswordEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForgotPasswordEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.to = "";
                object.username = "";
                object.resetCode = "";
            }
            if (message.to != null && $Object.hasOwnProperty.call(message, "to"))
                object.to = message.to;
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                object.username = message.username;
            if (message.resetCode != null && $Object.hasOwnProperty.call(message, "resetCode"))
                object.resetCode = message.resetCode;
            return object;
        };

        /**
         * Converts this ForgotPasswordEvent to JSON.
         * @function toJSON
         * @memberof event.ForgotPasswordEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForgotPasswordEvent.prototype.toJSON = function() {
            return ForgotPasswordEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ForgotPasswordEvent
         * @function getTypeUrl
         * @memberof event.ForgotPasswordEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ForgotPasswordEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/event.ForgotPasswordEvent";
        };

        return ForgotPasswordEvent;
    })();

    event.PostNotificationEvent = (function() {

        /**
         * Properties of a PostNotificationEvent.
         * @typedef {Object} event.PostNotificationEvent.$Properties
         * @property {number|Long|null} [userId] PostNotificationEvent userId
         * @property {string|null} [title] PostNotificationEvent title
         * @property {string|null} [message] PostNotificationEvent message
         * @property {string|null} [notificationType] PostNotificationEvent notificationType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PostNotificationEvent.
         * @memberof event
         * @interface IPostNotificationEvent
         * @augments event.PostNotificationEvent.$Properties
         * @deprecated Use event.PostNotificationEvent.$Properties instead.
         */

        /**
         * Shape of a PostNotificationEvent.
         * @typedef {event.PostNotificationEvent.$Properties} event.PostNotificationEvent.$Shape
         */

        /**
         * Constructs a new PostNotificationEvent.
         * @memberof event
         * @classdesc Represents a PostNotificationEvent.
         * @constructor
         * @param {event.PostNotificationEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var PostNotificationEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PostNotificationEvent userId.
         * @member {number|Long} userId
         * @memberof event.PostNotificationEvent
         * @instance
         */
        PostNotificationEvent.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PostNotificationEvent title.
         * @member {string} title
         * @memberof event.PostNotificationEvent
         * @instance
         */
        PostNotificationEvent.prototype.title = "";

        /**
         * PostNotificationEvent message.
         * @member {string} message
         * @memberof event.PostNotificationEvent
         * @instance
         */
        PostNotificationEvent.prototype.message = "";

        /**
         * PostNotificationEvent notificationType.
         * @member {string} notificationType
         * @memberof event.PostNotificationEvent
         * @instance
         */
        PostNotificationEvent.prototype.notificationType = "";

        /**
         * Creates a new PostNotificationEvent instance using the specified properties.
         * @function create
         * @memberof event.PostNotificationEvent
         * @static
         * @param {event.PostNotificationEvent.$Properties=} [properties] Properties to set
         * @returns {event.PostNotificationEvent} PostNotificationEvent instance
         * @type {{
         *   (properties: event.PostNotificationEvent.$Shape): event.PostNotificationEvent & event.PostNotificationEvent.$Shape;
         *   (properties?: event.PostNotificationEvent.$Properties): event.PostNotificationEvent;
         * }}
         */
        PostNotificationEvent.create = function(properties) {
            return new PostNotificationEvent(properties);
        };

        /**
         * Encodes the specified PostNotificationEvent message. Does not implicitly {@link event.PostNotificationEvent.verify|verify} messages.
         * @function encode
         * @memberof event.PostNotificationEvent
         * @static
         * @param {event.PostNotificationEvent.$Properties} message PostNotificationEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostNotificationEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.title != null && $Object.hasOwnProperty.call(message, "title") && message.title !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            if (message.notificationType != null && $Object.hasOwnProperty.call(message, "notificationType") && message.notificationType !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.notificationType);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PostNotificationEvent message, length delimited. Does not implicitly {@link event.PostNotificationEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof event.PostNotificationEvent
         * @static
         * @param {event.PostNotificationEvent.$Properties} message PostNotificationEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PostNotificationEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PostNotificationEvent message from the specified reader or buffer.
         * @function decode
         * @memberof event.PostNotificationEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.PostNotificationEvent & event.PostNotificationEvent.$Shape} PostNotificationEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostNotificationEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.event.PostNotificationEvent();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.title = value;
                        else
                            delete message.title;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.message = value;
                        else
                            delete message.message;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.notificationType = value;
                        else
                            delete message.notificationType;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PostNotificationEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof event.PostNotificationEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {event.PostNotificationEvent & event.PostNotificationEvent.$Shape} PostNotificationEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PostNotificationEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a PostNotificationEvent message.
         * @function verify
         * @memberof event.PostNotificationEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PostNotificationEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.notificationType != null && $Object.hasOwnProperty.call(message, "notificationType"))
                if (!$util.isString(message.notificationType))
                    return "notificationType: string expected";
            return null;
        };

        /**
         * Creates a PostNotificationEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof event.PostNotificationEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {event.PostNotificationEvent} PostNotificationEvent
         */
        PostNotificationEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.event.PostNotificationEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".event.PostNotificationEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.event.PostNotificationEvent();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.title != null)
                if (typeof object.title !== "string" || object.title.length)
                    message.title = $String(object.title);
            if (object.message != null)
                if (typeof object.message !== "string" || object.message.length)
                    message.message = $String(object.message);
            if (object.notificationType != null)
                if (typeof object.notificationType !== "string" || object.notificationType.length)
                    message.notificationType = $String(object.notificationType);
            return message;
        };

        /**
         * Creates a plain object from a PostNotificationEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof event.PostNotificationEvent
         * @static
         * @param {event.PostNotificationEvent} message PostNotificationEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PostNotificationEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.title = "";
                object.message = "";
                object.notificationType = "";
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                object.title = message.title;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                object.message = message.message;
            if (message.notificationType != null && $Object.hasOwnProperty.call(message, "notificationType"))
                object.notificationType = message.notificationType;
            return object;
        };

        /**
         * Converts this PostNotificationEvent to JSON.
         * @function toJSON
         * @memberof event.PostNotificationEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PostNotificationEvent.prototype.toJSON = function() {
            return PostNotificationEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PostNotificationEvent
         * @function getTypeUrl
         * @memberof event.PostNotificationEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PostNotificationEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/event.PostNotificationEvent";
        };

        return PostNotificationEvent;
    })();

    event.UserProfileUpdatedEvent = (function() {

        /**
         * Properties of a UserProfileUpdatedEvent.
         * @typedef {Object} event.UserProfileUpdatedEvent.$Properties
         * @property {number|Long|null} [userId] UserProfileUpdatedEvent userId
         * @property {string|null} [name] UserProfileUpdatedEvent name
         * @property {string|null} [email] UserProfileUpdatedEvent email
         * @property {string|null} [avatar] UserProfileUpdatedEvent avatar
         * @property {string|null} [phone] UserProfileUpdatedEvent phone
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a UserProfileUpdatedEvent.
         * @memberof event
         * @interface IUserProfileUpdatedEvent
         * @augments event.UserProfileUpdatedEvent.$Properties
         * @deprecated Use event.UserProfileUpdatedEvent.$Properties instead.
         */

        /**
         * Shape of a UserProfileUpdatedEvent.
         * @typedef {event.UserProfileUpdatedEvent.$Properties} event.UserProfileUpdatedEvent.$Shape
         */

        /**
         * Constructs a new UserProfileUpdatedEvent.
         * @memberof event
         * @classdesc Represents a UserProfileUpdatedEvent.
         * @constructor
         * @param {event.UserProfileUpdatedEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var UserProfileUpdatedEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UserProfileUpdatedEvent userId.
         * @member {number|Long} userId
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         */
        UserProfileUpdatedEvent.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserProfileUpdatedEvent name.
         * @member {string} name
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         */
        UserProfileUpdatedEvent.prototype.name = "";

        /**
         * UserProfileUpdatedEvent email.
         * @member {string} email
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         */
        UserProfileUpdatedEvent.prototype.email = "";

        /**
         * UserProfileUpdatedEvent avatar.
         * @member {string} avatar
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         */
        UserProfileUpdatedEvent.prototype.avatar = "";

        /**
         * UserProfileUpdatedEvent phone.
         * @member {string} phone
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         */
        UserProfileUpdatedEvent.prototype.phone = "";

        /**
         * Creates a new UserProfileUpdatedEvent instance using the specified properties.
         * @function create
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {event.UserProfileUpdatedEvent.$Properties=} [properties] Properties to set
         * @returns {event.UserProfileUpdatedEvent} UserProfileUpdatedEvent instance
         * @type {{
         *   (properties: event.UserProfileUpdatedEvent.$Shape): event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape;
         *   (properties?: event.UserProfileUpdatedEvent.$Properties): event.UserProfileUpdatedEvent;
         * }}
         */
        UserProfileUpdatedEvent.create = function(properties) {
            return new UserProfileUpdatedEvent(properties);
        };

        /**
         * Encodes the specified UserProfileUpdatedEvent message. Does not implicitly {@link event.UserProfileUpdatedEvent.verify|verify} messages.
         * @function encode
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {event.UserProfileUpdatedEvent.$Properties} message UserProfileUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfileUpdatedEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && $Object.hasOwnProperty.call(message, "email") && message.email !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar") && message.avatar !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone") && message.phone !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UserProfileUpdatedEvent message, length delimited. Does not implicitly {@link event.UserProfileUpdatedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {event.UserProfileUpdatedEvent.$Properties} message UserProfileUpdatedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserProfileUpdatedEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a UserProfileUpdatedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape} UserProfileUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfileUpdatedEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.event.UserProfileUpdatedEvent();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.email = value;
                        else
                            delete message.email;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.avatar = value;
                        else
                            delete message.avatar;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.phone = value;
                        else
                            delete message.phone;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a UserProfileUpdatedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape} UserProfileUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserProfileUpdatedEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a UserProfileUpdatedEvent message.
         * @function verify
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserProfileUpdatedEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            return null;
        };

        /**
         * Creates a UserProfileUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {event.UserProfileUpdatedEvent} UserProfileUpdatedEvent
         */
        UserProfileUpdatedEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.event.UserProfileUpdatedEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".event.UserProfileUpdatedEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.event.UserProfileUpdatedEvent();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.email != null)
                if (typeof object.email !== "string" || object.email.length)
                    message.email = $String(object.email);
            if (object.avatar != null)
                if (typeof object.avatar !== "string" || object.avatar.length)
                    message.avatar = $String(object.avatar);
            if (object.phone != null)
                if (typeof object.phone !== "string" || object.phone.length)
                    message.phone = $String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a UserProfileUpdatedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {event.UserProfileUpdatedEvent} message UserProfileUpdatedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserProfileUpdatedEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.name = "";
                object.email = "";
                object.avatar = "";
                object.phone = "";
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                object.email = message.email;
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar"))
                object.avatar = message.avatar;
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                object.phone = message.phone;
            return object;
        };

        /**
         * Converts this UserProfileUpdatedEvent to JSON.
         * @function toJSON
         * @memberof event.UserProfileUpdatedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserProfileUpdatedEvent.prototype.toJSON = function() {
            return UserProfileUpdatedEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserProfileUpdatedEvent
         * @function getTypeUrl
         * @memberof event.UserProfileUpdatedEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserProfileUpdatedEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/event.UserProfileUpdatedEvent";
        };

        return UserProfileUpdatedEvent;
    })();

    event.UserDeletedEvent = (function() {

        /**
         * Properties of a UserDeletedEvent.
         * @typedef {Object} event.UserDeletedEvent.$Properties
         * @property {number|Long|null} [userId] UserDeletedEvent userId
         * @property {string|null} [email] UserDeletedEvent email
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a UserDeletedEvent.
         * @memberof event
         * @interface IUserDeletedEvent
         * @augments event.UserDeletedEvent.$Properties
         * @deprecated Use event.UserDeletedEvent.$Properties instead.
         */

        /**
         * Shape of a UserDeletedEvent.
         * @typedef {event.UserDeletedEvent.$Properties} event.UserDeletedEvent.$Shape
         */

        /**
         * Constructs a new UserDeletedEvent.
         * @memberof event
         * @classdesc Represents a UserDeletedEvent.
         * @constructor
         * @param {event.UserDeletedEvent.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var UserDeletedEvent = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UserDeletedEvent userId.
         * @member {number|Long} userId
         * @memberof event.UserDeletedEvent
         * @instance
         */
        UserDeletedEvent.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserDeletedEvent email.
         * @member {string} email
         * @memberof event.UserDeletedEvent
         * @instance
         */
        UserDeletedEvent.prototype.email = "";

        /**
         * Creates a new UserDeletedEvent instance using the specified properties.
         * @function create
         * @memberof event.UserDeletedEvent
         * @static
         * @param {event.UserDeletedEvent.$Properties=} [properties] Properties to set
         * @returns {event.UserDeletedEvent} UserDeletedEvent instance
         * @type {{
         *   (properties: event.UserDeletedEvent.$Shape): event.UserDeletedEvent & event.UserDeletedEvent.$Shape;
         *   (properties?: event.UserDeletedEvent.$Properties): event.UserDeletedEvent;
         * }}
         */
        UserDeletedEvent.create = function(properties) {
            return new UserDeletedEvent(properties);
        };

        /**
         * Encodes the specified UserDeletedEvent message. Does not implicitly {@link event.UserDeletedEvent.verify|verify} messages.
         * @function encode
         * @memberof event.UserDeletedEvent
         * @static
         * @param {event.UserDeletedEvent.$Properties} message UserDeletedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDeletedEvent.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.email != null && $Object.hasOwnProperty.call(message, "email") && message.email !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.email);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UserDeletedEvent message, length delimited. Does not implicitly {@link event.UserDeletedEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof event.UserDeletedEvent
         * @static
         * @param {event.UserDeletedEvent.$Properties} message UserDeletedEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserDeletedEvent.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a UserDeletedEvent message from the specified reader or buffer.
         * @function decode
         * @memberof event.UserDeletedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {event.UserDeletedEvent & event.UserDeletedEvent.$Shape} UserDeletedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDeletedEvent.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.event.UserDeletedEvent();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.email = value;
                        else
                            delete message.email;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a UserDeletedEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof event.UserDeletedEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {event.UserDeletedEvent & event.UserDeletedEvent.$Shape} UserDeletedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserDeletedEvent.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a UserDeletedEvent message.
         * @function verify
         * @memberof event.UserDeletedEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserDeletedEvent.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a UserDeletedEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof event.UserDeletedEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {event.UserDeletedEvent} UserDeletedEvent
         */
        UserDeletedEvent.fromObject = function (object, _depth) {
            if (object instanceof $root.event.UserDeletedEvent)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".event.UserDeletedEvent: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.event.UserDeletedEvent();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.email != null)
                if (typeof object.email !== "string" || object.email.length)
                    message.email = $String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a UserDeletedEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof event.UserDeletedEvent
         * @static
         * @param {event.UserDeletedEvent} message UserDeletedEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserDeletedEvent.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.email = "";
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this UserDeletedEvent to JSON.
         * @function toJSON
         * @memberof event.UserDeletedEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserDeletedEvent.prototype.toJSON = function() {
            return UserDeletedEvent.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserDeletedEvent
         * @function getTypeUrl
         * @memberof event.UserDeletedEvent
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserDeletedEvent.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/event.UserDeletedEvent";
        };

        return UserDeletedEvent;
    })();

    return event;
})();

$root.identity = (function() {

    /**
     * Namespace identity.
     * @exports identity
     * @namespace
     */
    var identity = {};

    identity.GetUsersInfoRequest = (function() {

        /**
         * Properties of a GetUsersInfoRequest.
         * @typedef {Object} identity.GetUsersInfoRequest.$Properties
         * @property {Array.<number|Long>|null} [userIds] GetUsersInfoRequest userIds
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetUsersInfoRequest.
         * @memberof identity
         * @interface IGetUsersInfoRequest
         * @augments identity.GetUsersInfoRequest.$Properties
         * @deprecated Use identity.GetUsersInfoRequest.$Properties instead.
         */

        /**
         * Shape of a GetUsersInfoRequest.
         * @typedef {identity.GetUsersInfoRequest.$Properties} identity.GetUsersInfoRequest.$Shape
         */

        /**
         * Constructs a new GetUsersInfoRequest.
         * @memberof identity
         * @classdesc Represents a GetUsersInfoRequest.
         * @constructor
         * @param {identity.GetUsersInfoRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var GetUsersInfoRequest = function (properties) {
            this.userIds = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetUsersInfoRequest userIds.
         * @member {Array.<number|Long>} userIds
         * @memberof identity.GetUsersInfoRequest
         * @instance
         */
        GetUsersInfoRequest.prototype.userIds = $util.emptyArray;

        /**
         * Creates a new GetUsersInfoRequest instance using the specified properties.
         * @function create
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {identity.GetUsersInfoRequest.$Properties=} [properties] Properties to set
         * @returns {identity.GetUsersInfoRequest} GetUsersInfoRequest instance
         * @type {{
         *   (properties: identity.GetUsersInfoRequest.$Shape): identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape;
         *   (properties?: identity.GetUsersInfoRequest.$Properties): identity.GetUsersInfoRequest;
         * }}
         */
        GetUsersInfoRequest.create = function(properties) {
            return new GetUsersInfoRequest(properties);
        };

        /**
         * Encodes the specified GetUsersInfoRequest message. Does not implicitly {@link identity.GetUsersInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {identity.GetUsersInfoRequest.$Properties} message GetUsersInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersInfoRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userIds != null && message.userIds.length)
                writer.uint32(/* id 1, wireType 2 =*/10).int64s(message.userIds);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetUsersInfoRequest message, length delimited. Does not implicitly {@link identity.GetUsersInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {identity.GetUsersInfoRequest.$Properties} message GetUsersInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersInfoRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetUsersInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape} GetUsersInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersInfoRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.identity.GetUsersInfoRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType === 2) {
                            if (!(message.userIds && message.userIds.length))
                                message.userIds = [];
                            reader.int64s(message.userIds);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.userIds && message.userIds.length))
                            message.userIds = [];
                        message.userIds.push(reader.int64());
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetUsersInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape} GetUsersInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersInfoRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a GetUsersInfoRequest message.
         * @function verify
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersInfoRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userIds != null && $Object.hasOwnProperty.call(message, "userIds")) {
                if (!$Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (var i = 0; i < message.userIds.length; ++i)
                    if (!$util.isInteger(message.userIds[i]) && !(message.userIds[i] && $util.isInteger(message.userIds[i].low) && $util.isInteger(message.userIds[i].high)))
                        return "userIds: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUsersInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {identity.GetUsersInfoRequest} GetUsersInfoRequest
         */
        GetUsersInfoRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.identity.GetUsersInfoRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".identity.GetUsersInfoRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.identity.GetUsersInfoRequest();
            if (object.userIds) {
                if (!$Array.isArray(object.userIds))
                    throw $TypeError(".identity.GetUsersInfoRequest.userIds: array expected");
                message.userIds = $Array(object.userIds.length);
                for (var i = 0; i < object.userIds.length; ++i)
                    if ($util.Long)
                        message.userIds[i] = $util.Long.fromValue(object.userIds[i], false);
                    else if (typeof object.userIds[i] === "string")
                        message.userIds[i] = $parseInt(object.userIds[i], 10);
                    else if (typeof object.userIds[i] === "number")
                        message.userIds[i] = object.userIds[i];
                    else if (typeof object.userIds[i] === "object")
                        message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {identity.GetUsersInfoRequest} message GetUsersInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersInfoRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (message.userIds && message.userIds.length) {
                object.userIds = $Array(message.userIds.length);
                for (var j = 0; j < message.userIds.length; ++j)
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.userIds[j] = typeof message.userIds[j] === "number" ? $BigInt(message.userIds[j]) : $util.Long.fromBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0, false).toBigInt();
                    else if (typeof message.userIds[j] === "number")
                        object.userIds[j] = options.longs === $String ? $String(message.userIds[j]) : message.userIds[j];
                    else
                        object.userIds[j] = options.longs === $String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === $Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber() : message.userIds[j];
            }
            return object;
        };

        /**
         * Converts this GetUsersInfoRequest to JSON.
         * @function toJSON
         * @memberof identity.GetUsersInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersInfoRequest.prototype.toJSON = function() {
            return GetUsersInfoRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GetUsersInfoRequest
         * @function getTypeUrl
         * @memberof identity.GetUsersInfoRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetUsersInfoRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/identity.GetUsersInfoRequest";
        };

        return GetUsersInfoRequest;
    })();

    identity.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @typedef {Object} identity.UserInfo.$Properties
         * @property {number|Long|null} [userId] UserInfo userId
         * @property {string|null} [name] UserInfo name
         * @property {string|null} [email] UserInfo email
         * @property {string|null} [avatar] UserInfo avatar
         * @property {string|null} [phone] UserInfo phone
         * @property {string|null} [address] UserInfo address
         * @property {string|null} [role] UserInfo role
         * @property {string|null} [gender] UserInfo gender
         * @property {number|Long|null} [balance] UserInfo balance
         * @property {boolean|null} [isVerified] UserInfo isVerified
         * @property {number|Long|null} [createdAtMillis] UserInfo createdAtMillis
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a UserInfo.
         * @memberof identity
         * @interface IUserInfo
         * @augments identity.UserInfo.$Properties
         * @deprecated Use identity.UserInfo.$Properties instead.
         */

        /**
         * Shape of a UserInfo.
         * @typedef {identity.UserInfo.$Properties} identity.UserInfo.$Shape
         */

        /**
         * Constructs a new UserInfo.
         * @memberof identity
         * @classdesc Represents a UserInfo.
         * @constructor
         * @param {identity.UserInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var UserInfo = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UserInfo userId.
         * @member {number|Long} userId
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo name.
         * @member {string} name
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.name = "";

        /**
         * UserInfo email.
         * @member {string} email
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.email = "";

        /**
         * UserInfo avatar.
         * @member {string} avatar
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.avatar = "";

        /**
         * UserInfo phone.
         * @member {string} phone
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.phone = "";

        /**
         * UserInfo address.
         * @member {string} address
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.address = "";

        /**
         * UserInfo role.
         * @member {string} role
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.role = "";

        /**
         * UserInfo gender.
         * @member {string} gender
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.gender = "";

        /**
         * UserInfo balance.
         * @member {number|Long} balance
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo isVerified.
         * @member {boolean} isVerified
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.isVerified = false;

        /**
         * UserInfo createdAtMillis.
         * @member {number|Long} createdAtMillis
         * @memberof identity.UserInfo
         * @instance
         */
        UserInfo.prototype.createdAtMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof identity.UserInfo
         * @static
         * @param {identity.UserInfo.$Properties=} [properties] Properties to set
         * @returns {identity.UserInfo} UserInfo instance
         * @type {{
         *   (properties: identity.UserInfo.$Shape): identity.UserInfo & identity.UserInfo.$Shape;
         *   (properties?: identity.UserInfo.$Properties): identity.UserInfo;
         * }}
         */
        UserInfo.create = function(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link identity.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof identity.UserInfo
         * @static
         * @param {identity.UserInfo.$Properties} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.name != null && $Object.hasOwnProperty.call(message, "name") && message.name !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && $Object.hasOwnProperty.call(message, "email") && message.email !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar") && message.avatar !== "")
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatar);
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone") && message.phone !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phone);
            if (message.address != null && $Object.hasOwnProperty.call(message, "address") && message.address !== "")
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.address);
            if (message.role != null && $Object.hasOwnProperty.call(message, "role") && message.role !== "")
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.role);
            if (message.gender != null && $Object.hasOwnProperty.call(message, "gender") && message.gender !== "")
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.gender);
            if (message.balance != null && $Object.hasOwnProperty.call(message, "balance") && (typeof message.balance === "object" ? message.balance.low || message.balance.high : message.balance !== 0))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.balance);
            if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified") && message.isVerified !== false)
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isVerified);
            if (message.createdAtMillis != null && $Object.hasOwnProperty.call(message, "createdAtMillis") && (typeof message.createdAtMillis === "object" ? message.createdAtMillis.low || message.createdAtMillis.high : message.createdAtMillis !== 0))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createdAtMillis);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link identity.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof identity.UserInfo
         * @static
         * @param {identity.UserInfo.$Properties} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof identity.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identity.UserInfo & identity.UserInfo.$Shape} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.identity.UserInfo();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.name = value;
                        else
                            delete message.name;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.email = value;
                        else
                            delete message.email;
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.avatar = value;
                        else
                            delete message.avatar;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.phone = value;
                        else
                            delete message.phone;
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.address = value;
                        else
                            delete message.address;
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.role = value;
                        else
                            delete message.role;
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.gender = value;
                        else
                            delete message.gender;
                        continue;
                    }
                case 9: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.balance = value;
                        else
                            delete message.balance;
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.isVerified = value;
                        else
                            delete message.isVerified;
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.createdAtMillis = value;
                        else
                            delete message.createdAtMillis;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof identity.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identity.UserInfo & identity.UserInfo.$Shape} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof identity.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.address != null && $Object.hasOwnProperty.call(message, "address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                if (!$util.isString(message.role))
                    return "role: string expected";
            if (message.gender != null && $Object.hasOwnProperty.call(message, "gender"))
                if (!$util.isString(message.gender))
                    return "gender: string expected";
            if (message.balance != null && $Object.hasOwnProperty.call(message, "balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified"))
                if (typeof message.isVerified !== "boolean")
                    return "isVerified: boolean expected";
            if (message.createdAtMillis != null && $Object.hasOwnProperty.call(message, "createdAtMillis"))
                if (!$util.isInteger(message.createdAtMillis) && !(message.createdAtMillis && $util.isInteger(message.createdAtMillis.low) && $util.isInteger(message.createdAtMillis.high)))
                    return "createdAtMillis: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof identity.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {identity.UserInfo} UserInfo
         */
        UserInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.identity.UserInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".identity.UserInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.identity.UserInfo();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.name != null)
                if (typeof object.name !== "string" || object.name.length)
                    message.name = $String(object.name);
            if (object.email != null)
                if (typeof object.email !== "string" || object.email.length)
                    message.email = $String(object.email);
            if (object.avatar != null)
                if (typeof object.avatar !== "string" || object.avatar.length)
                    message.avatar = $String(object.avatar);
            if (object.phone != null)
                if (typeof object.phone !== "string" || object.phone.length)
                    message.phone = $String(object.phone);
            if (object.address != null)
                if (typeof object.address !== "string" || object.address.length)
                    message.address = $String(object.address);
            if (object.role != null)
                if (typeof object.role !== "string" || object.role.length)
                    message.role = $String(object.role);
            if (object.gender != null)
                if (typeof object.gender !== "string" || object.gender.length)
                    message.gender = $String(object.gender);
            if (object.balance != null)
                if (typeof object.balance === "object" ? object.balance.low || object.balance.high : $Number(object.balance) !== 0)
                    if ($util.Long)
                        message.balance = $util.Long.fromValue(object.balance, false);
                    else if (typeof object.balance === "string")
                        message.balance = $parseInt(object.balance, 10);
                    else if (typeof object.balance === "number")
                        message.balance = object.balance;
                    else if (typeof object.balance === "object")
                        message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.isVerified != null)
                if (object.isVerified)
                    message.isVerified = $Boolean(object.isVerified);
            if (object.createdAtMillis != null)
                if (typeof object.createdAtMillis === "object" ? object.createdAtMillis.low || object.createdAtMillis.high : $Number(object.createdAtMillis) !== 0)
                    if ($util.Long)
                        message.createdAtMillis = $util.Long.fromValue(object.createdAtMillis, false);
                    else if (typeof object.createdAtMillis === "string")
                        message.createdAtMillis = $parseInt(object.createdAtMillis, 10);
                    else if (typeof object.createdAtMillis === "number")
                        message.createdAtMillis = object.createdAtMillis;
                    else if (typeof object.createdAtMillis === "object")
                        message.createdAtMillis = new $util.LongBits(object.createdAtMillis.low >>> 0, object.createdAtMillis.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof identity.UserInfo
         * @static
         * @param {identity.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.name = "";
                object.email = "";
                object.avatar = "";
                object.phone = "";
                object.address = "";
                object.role = "";
                object.gender = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.balance = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.isVerified = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAtMillis = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.createdAtMillis = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
                object.name = message.name;
            if (message.email != null && $Object.hasOwnProperty.call(message, "email"))
                object.email = message.email;
            if (message.avatar != null && $Object.hasOwnProperty.call(message, "avatar"))
                object.avatar = message.avatar;
            if (message.phone != null && $Object.hasOwnProperty.call(message, "phone"))
                object.phone = message.phone;
            if (message.address != null && $Object.hasOwnProperty.call(message, "address"))
                object.address = message.address;
            if (message.role != null && $Object.hasOwnProperty.call(message, "role"))
                object.role = message.role;
            if (message.gender != null && $Object.hasOwnProperty.call(message, "gender"))
                object.gender = message.gender;
            if (message.balance != null && $Object.hasOwnProperty.call(message, "balance"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.balance = typeof message.balance === "number" ? $BigInt(message.balance) : $util.Long.fromBits(message.balance.low >>> 0, message.balance.high >>> 0, false).toBigInt();
                else if (typeof message.balance === "number")
                    object.balance = options.longs === $String ? $String(message.balance) : message.balance;
                else
                    object.balance = options.longs === $String ? $util.Long.prototype.toString.call(message.balance) : options.longs === $Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.isVerified != null && $Object.hasOwnProperty.call(message, "isVerified"))
                object.isVerified = message.isVerified;
            if (message.createdAtMillis != null && $Object.hasOwnProperty.call(message, "createdAtMillis"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.createdAtMillis = typeof message.createdAtMillis === "number" ? $BigInt(message.createdAtMillis) : $util.Long.fromBits(message.createdAtMillis.low >>> 0, message.createdAtMillis.high >>> 0, false).toBigInt();
                else if (typeof message.createdAtMillis === "number")
                    object.createdAtMillis = options.longs === $String ? $String(message.createdAtMillis) : message.createdAtMillis;
                else
                    object.createdAtMillis = options.longs === $String ? $util.Long.prototype.toString.call(message.createdAtMillis) : options.longs === $Number ? new $util.LongBits(message.createdAtMillis.low >>> 0, message.createdAtMillis.high >>> 0).toNumber() : message.createdAtMillis;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof identity.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function() {
            return UserInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UserInfo
         * @function getTypeUrl
         * @memberof identity.UserInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UserInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/identity.UserInfo";
        };

        return UserInfo;
    })();

    identity.GetUsersInfoReply = (function() {

        /**
         * Properties of a GetUsersInfoReply.
         * @typedef {Object} identity.GetUsersInfoReply.$Properties
         * @property {Object.<string,identity.UserInfo.$Properties>|null} [users] GetUsersInfoReply users
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a GetUsersInfoReply.
         * @memberof identity
         * @interface IGetUsersInfoReply
         * @augments identity.GetUsersInfoReply.$Properties
         * @deprecated Use identity.GetUsersInfoReply.$Properties instead.
         */

        /**
         * Shape of a GetUsersInfoReply.
         * @typedef {identity.GetUsersInfoReply.$Properties} identity.GetUsersInfoReply.$Shape
         */

        /**
         * Constructs a new GetUsersInfoReply.
         * @memberof identity
         * @classdesc Represents a GetUsersInfoReply.
         * @constructor
         * @param {identity.GetUsersInfoReply.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var GetUsersInfoReply = function (properties) {
            this.users = {};
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * GetUsersInfoReply users.
         * @member {Object.<string,identity.UserInfo.$Properties>} users
         * @memberof identity.GetUsersInfoReply
         * @instance
         */
        GetUsersInfoReply.prototype.users = $util.emptyObject;

        /**
         * Creates a new GetUsersInfoReply instance using the specified properties.
         * @function create
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {identity.GetUsersInfoReply.$Properties=} [properties] Properties to set
         * @returns {identity.GetUsersInfoReply} GetUsersInfoReply instance
         * @type {{
         *   (properties: identity.GetUsersInfoReply.$Shape): identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape;
         *   (properties?: identity.GetUsersInfoReply.$Properties): identity.GetUsersInfoReply;
         * }}
         */
        GetUsersInfoReply.create = function(properties) {
            return new GetUsersInfoReply(properties);
        };

        /**
         * Encodes the specified GetUsersInfoReply message. Does not implicitly {@link identity.GetUsersInfoReply.verify|verify} messages.
         * @function encode
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {identity.GetUsersInfoReply.$Properties} message GetUsersInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersInfoReply.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.users != null && $Object.hasOwnProperty.call(message, "users"))
                for (var keys = $Object.keys(message.users), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int64($util.longFromKey(keys[i], false));
                    $root.identity.UserInfo.encode(message.users[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim().ldelim();
                }
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified GetUsersInfoReply message, length delimited. Does not implicitly {@link identity.GetUsersInfoReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {identity.GetUsersInfoReply.$Properties} message GetUsersInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUsersInfoReply.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a GetUsersInfoReply message from the specified reader or buffer.
         * @function decode
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape} GetUsersInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersInfoReply.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, key, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.identity.GetUsersInfoReply();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        if (message.users === $util.emptyObject)
                            message.users = {};
                        var end2 = reader.size() + reader.pos;
                        if (end2 > reader.len)
                            throw $RangeError("index out of range");
                        reader.len = end2;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.tag();
                            wireType = tag2 & 7;
                            switch (tag2 >>>= 3) {
                            case 1:
                                if (wireType !== 0)
                                    break;
                                key = reader.int64();
                                continue;
                            case 2:
                                if (wireType !== 2)
                                    break;
                                value = $root.identity.UserInfo.decode(reader, reader.size(), $undefined, _depth + 1, value);
                                continue;
                            }
                            reader.skipType(wireType, _depth, tag2);
                        }
                        if (reader.pos !== end2)
                            throw $RangeError("index out of range");
                        reader.len = end;
                        message.users[typeof key === "object" ? $util.longToHash(key) : key] = value || new $root.identity.UserInfo();
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a GetUsersInfoReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape} GetUsersInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUsersInfoReply.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a GetUsersInfoReply message.
         * @function verify
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUsersInfoReply.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.users != null && $Object.hasOwnProperty.call(message, "users")) {
                if (!$util.isObject(message.users))
                    return "users: object expected";
                var key = $Object.keys(message.users);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key64Re.test(key[i]))
                        return "users: integer|Long key{k:int64} expected";
                    {
                        var error = $root.identity.UserInfo.verify(message.users[key[i]], _depth + 1);
                        if (error)
                            return "users." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a GetUsersInfoReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {identity.GetUsersInfoReply} GetUsersInfoReply
         */
        GetUsersInfoReply.fromObject = function (object, _depth) {
            if (object instanceof $root.identity.GetUsersInfoReply)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".identity.GetUsersInfoReply: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.identity.GetUsersInfoReply();
            if (object.users) {
                if (!$util.isObject(object.users))
                    throw $TypeError(".identity.GetUsersInfoReply.users: object expected");
                message.users = {};
                for (var keys = $Object.keys(object.users), i = 0; i < keys.length; ++i) {
                    if (keys[i] === "__proto__")
                        $util.makeProp(message.users, keys[i]);
                    if (!$util.isObject(object.users[keys[i]]))
                        throw $TypeError(".identity.GetUsersInfoReply.users: object expected");
                    message.users[keys[i]] = $root.identity.UserInfo.fromObject(object.users[keys[i]], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUsersInfoReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {identity.GetUsersInfoReply} message GetUsersInfoReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUsersInfoReply.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.objects || options.defaults)
                object.users = {};
            var keys2;
            if (message.users && (keys2 = $Object.keys(message.users)).length) {
                object.users = {};
                for (var j = 0; j < keys2.length; ++j) {
                    var k2 = $util.longFromKey(keys2[j], false).toString();
                    if (keys2[j] === "__proto__")
                        $util.makeProp(object.users, keys2[j]);
                    object.users[k2] = $root.identity.UserInfo.toObject(message.users[keys2[j]], options, _depth + 1);
                }
            }
            return object;
        };

        /**
         * Converts this GetUsersInfoReply to JSON.
         * @function toJSON
         * @memberof identity.GetUsersInfoReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUsersInfoReply.prototype.toJSON = function() {
            return GetUsersInfoReply.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for GetUsersInfoReply
         * @function getTypeUrl
         * @memberof identity.GetUsersInfoReply
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        GetUsersInfoReply.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/identity.GetUsersInfoReply";
        };

        return GetUsersInfoReply;
    })();

    identity.UpdateBalanceRequest = (function() {

        /**
         * Properties of an UpdateBalanceRequest.
         * @typedef {Object} identity.UpdateBalanceRequest.$Properties
         * @property {number|Long|null} [userId] UpdateBalanceRequest userId
         * @property {number|Long|null} [amount] UpdateBalanceRequest amount
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateBalanceRequest.
         * @memberof identity
         * @interface IUpdateBalanceRequest
         * @augments identity.UpdateBalanceRequest.$Properties
         * @deprecated Use identity.UpdateBalanceRequest.$Properties instead.
         */

        /**
         * Shape of an UpdateBalanceRequest.
         * @typedef {identity.UpdateBalanceRequest.$Properties} identity.UpdateBalanceRequest.$Shape
         */

        /**
         * Constructs a new UpdateBalanceRequest.
         * @memberof identity
         * @classdesc Represents an UpdateBalanceRequest.
         * @constructor
         * @param {identity.UpdateBalanceRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var UpdateBalanceRequest = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateBalanceRequest userId.
         * @member {number|Long} userId
         * @memberof identity.UpdateBalanceRequest
         * @instance
         */
        UpdateBalanceRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateBalanceRequest amount.
         * @member {number|Long} amount
         * @memberof identity.UpdateBalanceRequest
         * @instance
         */
        UpdateBalanceRequest.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateBalanceRequest instance using the specified properties.
         * @function create
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {identity.UpdateBalanceRequest.$Properties=} [properties] Properties to set
         * @returns {identity.UpdateBalanceRequest} UpdateBalanceRequest instance
         * @type {{
         *   (properties: identity.UpdateBalanceRequest.$Shape): identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape;
         *   (properties?: identity.UpdateBalanceRequest.$Properties): identity.UpdateBalanceRequest;
         * }}
         */
        UpdateBalanceRequest.create = function(properties) {
            return new UpdateBalanceRequest(properties);
        };

        /**
         * Encodes the specified UpdateBalanceRequest message. Does not implicitly {@link identity.UpdateBalanceRequest.verify|verify} messages.
         * @function encode
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {identity.UpdateBalanceRequest.$Properties} message UpdateBalanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBalanceRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount") && (typeof message.amount === "object" ? message.amount.low || message.amount.high : message.amount !== 0))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateBalanceRequest message, length delimited. Does not implicitly {@link identity.UpdateBalanceRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {identity.UpdateBalanceRequest.$Properties} message UpdateBalanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBalanceRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an UpdateBalanceRequest message from the specified reader or buffer.
         * @function decode
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape} UpdateBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBalanceRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.identity.UpdateBalanceRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.amount = value;
                        else
                            delete message.amount;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateBalanceRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape} UpdateBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBalanceRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies an UpdateBalanceRequest message.
         * @function verify
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateBalanceRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateBalanceRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {identity.UpdateBalanceRequest} UpdateBalanceRequest
         */
        UpdateBalanceRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.identity.UpdateBalanceRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".identity.UpdateBalanceRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.identity.UpdateBalanceRequest();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.amount != null)
                if (typeof object.amount === "object" ? object.amount.low || object.amount.high : $Number(object.amount) !== 0)
                    if ($util.Long)
                        message.amount = $util.Long.fromValue(object.amount, false);
                    else if (typeof object.amount === "string")
                        message.amount = $parseInt(object.amount, 10);
                    else if (typeof object.amount === "number")
                        message.amount = object.amount;
                    else if (typeof object.amount === "object")
                        message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateBalanceRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {identity.UpdateBalanceRequest} message UpdateBalanceRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateBalanceRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.amount = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.amount = typeof message.amount === "number" ? $BigInt(message.amount) : $util.Long.fromBits(message.amount.low >>> 0, message.amount.high >>> 0, false).toBigInt();
                else if (typeof message.amount === "number")
                    object.amount = options.longs === $String ? $String(message.amount) : message.amount;
                else
                    object.amount = options.longs === $String ? $util.Long.prototype.toString.call(message.amount) : options.longs === $Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            return object;
        };

        /**
         * Converts this UpdateBalanceRequest to JSON.
         * @function toJSON
         * @memberof identity.UpdateBalanceRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateBalanceRequest.prototype.toJSON = function() {
            return UpdateBalanceRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UpdateBalanceRequest
         * @function getTypeUrl
         * @memberof identity.UpdateBalanceRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateBalanceRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/identity.UpdateBalanceRequest";
        };

        return UpdateBalanceRequest;
    })();

    identity.UpdateBalanceResponse = (function() {

        /**
         * Properties of an UpdateBalanceResponse.
         * @typedef {Object} identity.UpdateBalanceResponse.$Properties
         * @property {boolean|null} [success] UpdateBalanceResponse success
         * @property {string|null} [message] UpdateBalanceResponse message
         * @property {number|Long|null} [newBalance] UpdateBalanceResponse newBalance
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an UpdateBalanceResponse.
         * @memberof identity
         * @interface IUpdateBalanceResponse
         * @augments identity.UpdateBalanceResponse.$Properties
         * @deprecated Use identity.UpdateBalanceResponse.$Properties instead.
         */

        /**
         * Shape of an UpdateBalanceResponse.
         * @typedef {identity.UpdateBalanceResponse.$Properties} identity.UpdateBalanceResponse.$Shape
         */

        /**
         * Constructs a new UpdateBalanceResponse.
         * @memberof identity
         * @classdesc Represents an UpdateBalanceResponse.
         * @constructor
         * @param {identity.UpdateBalanceResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var UpdateBalanceResponse = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * UpdateBalanceResponse success.
         * @member {boolean} success
         * @memberof identity.UpdateBalanceResponse
         * @instance
         */
        UpdateBalanceResponse.prototype.success = false;

        /**
         * UpdateBalanceResponse message.
         * @member {string} message
         * @memberof identity.UpdateBalanceResponse
         * @instance
         */
        UpdateBalanceResponse.prototype.message = "";

        /**
         * UpdateBalanceResponse newBalance.
         * @member {number|Long} newBalance
         * @memberof identity.UpdateBalanceResponse
         * @instance
         */
        UpdateBalanceResponse.prototype.newBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateBalanceResponse instance using the specified properties.
         * @function create
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {identity.UpdateBalanceResponse.$Properties=} [properties] Properties to set
         * @returns {identity.UpdateBalanceResponse} UpdateBalanceResponse instance
         * @type {{
         *   (properties: identity.UpdateBalanceResponse.$Shape): identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape;
         *   (properties?: identity.UpdateBalanceResponse.$Properties): identity.UpdateBalanceResponse;
         * }}
         */
        UpdateBalanceResponse.create = function(properties) {
            return new UpdateBalanceResponse(properties);
        };

        /**
         * Encodes the specified UpdateBalanceResponse message. Does not implicitly {@link identity.UpdateBalanceResponse.verify|verify} messages.
         * @function encode
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {identity.UpdateBalanceResponse.$Properties} message UpdateBalanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBalanceResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success") && message.success !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.newBalance != null && $Object.hasOwnProperty.call(message, "newBalance") && (typeof message.newBalance === "object" ? message.newBalance.low || message.newBalance.high : message.newBalance !== 0))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.newBalance);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified UpdateBalanceResponse message, length delimited. Does not implicitly {@link identity.UpdateBalanceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {identity.UpdateBalanceResponse.$Properties} message UpdateBalanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateBalanceResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an UpdateBalanceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape} UpdateBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBalanceResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.identity.UpdateBalanceResponse();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.success = value;
                        else
                            delete message.success;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.message = value;
                        else
                            delete message.message;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.newBalance = value;
                        else
                            delete message.newBalance;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an UpdateBalanceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape} UpdateBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateBalanceResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies an UpdateBalanceResponse message.
         * @function verify
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateBalanceResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.newBalance != null && $Object.hasOwnProperty.call(message, "newBalance"))
                if (!$util.isInteger(message.newBalance) && !(message.newBalance && $util.isInteger(message.newBalance.low) && $util.isInteger(message.newBalance.high)))
                    return "newBalance: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {identity.UpdateBalanceResponse} UpdateBalanceResponse
         */
        UpdateBalanceResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.identity.UpdateBalanceResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".identity.UpdateBalanceResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.identity.UpdateBalanceResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
            if (object.message != null)
                if (typeof object.message !== "string" || object.message.length)
                    message.message = $String(object.message);
            if (object.newBalance != null)
                if (typeof object.newBalance === "object" ? object.newBalance.low || object.newBalance.high : $Number(object.newBalance) !== 0)
                    if ($util.Long)
                        message.newBalance = $util.Long.fromValue(object.newBalance, false);
                    else if (typeof object.newBalance === "string")
                        message.newBalance = $parseInt(object.newBalance, 10);
                    else if (typeof object.newBalance === "number")
                        message.newBalance = object.newBalance;
                    else if (typeof object.newBalance === "object")
                        message.newBalance = new $util.LongBits(object.newBalance.low >>> 0, object.newBalance.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateBalanceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {identity.UpdateBalanceResponse} message UpdateBalanceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateBalanceResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.newBalance = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.newBalance = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                object.success = message.success;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                object.message = message.message;
            if (message.newBalance != null && $Object.hasOwnProperty.call(message, "newBalance"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.newBalance = typeof message.newBalance === "number" ? $BigInt(message.newBalance) : $util.Long.fromBits(message.newBalance.low >>> 0, message.newBalance.high >>> 0, false).toBigInt();
                else if (typeof message.newBalance === "number")
                    object.newBalance = options.longs === $String ? $String(message.newBalance) : message.newBalance;
                else
                    object.newBalance = options.longs === $String ? $util.Long.prototype.toString.call(message.newBalance) : options.longs === $Number ? new $util.LongBits(message.newBalance.low >>> 0, message.newBalance.high >>> 0).toNumber() : message.newBalance;
            return object;
        };

        /**
         * Converts this UpdateBalanceResponse to JSON.
         * @function toJSON
         * @memberof identity.UpdateBalanceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateBalanceResponse.prototype.toJSON = function() {
            return UpdateBalanceResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for UpdateBalanceResponse
         * @function getTypeUrl
         * @memberof identity.UpdateBalanceResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        UpdateBalanceResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/identity.UpdateBalanceResponse";
        };

        return UpdateBalanceResponse;
    })();

    identity.InternalIdentityService = (function() {

        /**
         * Constructs a new InternalIdentityService service.
         * @memberof identity
         * @classdesc Represents an InternalIdentityService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        var InternalIdentityService = function(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        };

        $Object.defineProperty(InternalIdentityService.prototype = $Object.create($protobuf.rpc.Service.prototype), "constructor", { value: InternalIdentityService, writable: true, enumerable: false, configurable: true });

        /**
         * Creates new InternalIdentityService service using the specified rpc implementation.
         * @function create
         * @memberof identity.InternalIdentityService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {InternalIdentityService} RPC service. Useful where requests and/or responses are streamed.
         */
        InternalIdentityService.create = function(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link identity.InternalIdentityService#getUsersInfo}.
         * @memberof identity.InternalIdentityService
         * @typedef GetUsersInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {identity.GetUsersInfoReply} [response] GetUsersInfoReply
         */

        /**
         * Calls GetUsersInfo.
         * @memberof identity.InternalIdentityService
         * @typedef GetUsersInfo
         * @type {{
         *   (request: identity.IGetUsersInfoRequest, callback: identity.InternalIdentityService.GetUsersInfoCallback): void;
         *   (request: identity.IGetUsersInfoRequest): Promise<identity.GetUsersInfoReply>;
         *   readonly name: "GetUsersInfo";
         *   readonly path: "/identity.InternalIdentityService/GetUsersInfo";
         *   readonly requestType: "GetUsersInfoRequest";
         *   readonly responseType: "GetUsersInfoReply";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls GetUsersInfo.
         * @name identity.InternalIdentityService#getUsersInfo
         * @type {identity.InternalIdentityService.GetUsersInfo}
         */
        $Object.defineProperties(InternalIdentityService.prototype.getUsersInfo = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, InternalIdentityService.prototype.getUsersInfo, $root.identity.GetUsersInfoRequest, $root.identity.GetUsersInfoReply, request, callback);
        }, {
            name: { value: "GetUsersInfo" },
            path: { value: "/identity.InternalIdentityService/GetUsersInfo" },
            requestType: { value: "GetUsersInfoRequest" },
            responseType: { value: "GetUsersInfoReply" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        /**
         * Callback as used by {@link identity.InternalIdentityService#updateUserBalance}.
         * @memberof identity.InternalIdentityService
         * @typedef UpdateUserBalanceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {identity.UpdateBalanceResponse} [response] UpdateBalanceResponse
         */

        /**
         * Calls UpdateUserBalance.
         * @memberof identity.InternalIdentityService
         * @typedef UpdateUserBalance
         * @type {{
         *   (request: identity.IUpdateBalanceRequest, callback: identity.InternalIdentityService.UpdateUserBalanceCallback): void;
         *   (request: identity.IUpdateBalanceRequest): Promise<identity.UpdateBalanceResponse>;
         *   readonly name: "UpdateUserBalance";
         *   readonly path: "/identity.InternalIdentityService/UpdateUserBalance";
         *   readonly requestType: "UpdateBalanceRequest";
         *   readonly responseType: "UpdateBalanceResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls UpdateUserBalance.
         * @name identity.InternalIdentityService#updateUserBalance
         * @type {identity.InternalIdentityService.UpdateUserBalance}
         */
        $Object.defineProperties(InternalIdentityService.prototype.updateUserBalance = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, InternalIdentityService.prototype.updateUserBalance, $root.identity.UpdateBalanceRequest, $root.identity.UpdateBalanceResponse, request, callback);
        }, {
            name: { value: "UpdateUserBalance" },
            path: { value: "/identity.InternalIdentityService/UpdateUserBalance" },
            requestType: { value: "UpdateBalanceRequest" },
            responseType: { value: "UpdateBalanceResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        return InternalIdentityService;
    })();

    return identity;
})();

$root.payment = (function() {

    /**
     * Namespace payment.
     * @exports payment
     * @namespace
     */
    var payment = {};

    payment.InternalPaymentService = (function() {

        /**
         * Constructs a new InternalPaymentService service.
         * @memberof payment
         * @classdesc Represents an InternalPaymentService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        var InternalPaymentService = function(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        };

        $Object.defineProperty(InternalPaymentService.prototype = $Object.create($protobuf.rpc.Service.prototype), "constructor", { value: InternalPaymentService, writable: true, enumerable: false, configurable: true });

        /**
         * Creates new InternalPaymentService service using the specified rpc implementation.
         * @function create
         * @memberof payment.InternalPaymentService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {InternalPaymentService} RPC service. Useful where requests and/or responses are streamed.
         */
        InternalPaymentService.create = function(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link payment.InternalPaymentService#createTransaction}.
         * @memberof payment.InternalPaymentService
         * @typedef CreateTransactionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {payment.CreateTransactionResponse} [response] CreateTransactionResponse
         */

        /**
         * Calls CreateTransaction.
         * @memberof payment.InternalPaymentService
         * @typedef CreateTransaction
         * @type {{
         *   (request: payment.ICreateTransactionRequest, callback: payment.InternalPaymentService.CreateTransactionCallback): void;
         *   (request: payment.ICreateTransactionRequest): Promise<payment.CreateTransactionResponse>;
         *   readonly name: "CreateTransaction";
         *   readonly path: "/payment.InternalPaymentService/CreateTransaction";
         *   readonly requestType: "CreateTransactionRequest";
         *   readonly responseType: "CreateTransactionResponse";
         *   readonly requestStream: undefined;
         *   readonly responseStream: undefined;
         * }}
         */

        /**
         * Calls CreateTransaction.
         * @name payment.InternalPaymentService#createTransaction
         * @type {payment.InternalPaymentService.CreateTransaction}
         */
        $Object.defineProperties(InternalPaymentService.prototype.createTransaction = function(request, callback) {
            return $protobuf.rpc.Service.prototype.rpcCall.call(this, InternalPaymentService.prototype.createTransaction, $root.payment.CreateTransactionRequest, $root.payment.CreateTransactionResponse, request, callback);
        }, {
            name: { value: "CreateTransaction" },
            path: { value: "/payment.InternalPaymentService/CreateTransaction" },
            requestType: { value: "CreateTransactionRequest" },
            responseType: { value: "CreateTransactionResponse" },
            requestStream: { value: $undefined },
            responseStream: { value: $undefined }
        });

        return InternalPaymentService;
    })();

    /**
     * GrpcTransactionType enum.
     * @name payment.GrpcTransactionType
     * @enum {number}
     * @property {number} DEPOSIT=0 DEPOSIT value
     * @property {number} PAYMENT=1 PAYMENT value
     */
    payment.GrpcTransactionType = (function() {
        var valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "DEPOSIT"] = 0;
        values[valuesById[1] = "PAYMENT"] = 1;
        return values;
    })();

    payment.CreateTransactionRequest = (function() {

        /**
         * Properties of a CreateTransactionRequest.
         * @typedef {Object} payment.CreateTransactionRequest.$Properties
         * @property {number|Long|null} [userId] CreateTransactionRequest userId
         * @property {string|null} [userName] CreateTransactionRequest userName
         * @property {string|null} [userEmail] CreateTransactionRequest userEmail
         * @property {number|Long|null} [amount] CreateTransactionRequest amount
         * @property {string|null} [description] CreateTransactionRequest description
         * @property {payment.GrpcTransactionType|null} [type] CreateTransactionRequest type
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CreateTransactionRequest.
         * @memberof payment
         * @interface ICreateTransactionRequest
         * @augments payment.CreateTransactionRequest.$Properties
         * @deprecated Use payment.CreateTransactionRequest.$Properties instead.
         */

        /**
         * Shape of a CreateTransactionRequest.
         * @typedef {payment.CreateTransactionRequest.$Properties} payment.CreateTransactionRequest.$Shape
         */

        /**
         * Constructs a new CreateTransactionRequest.
         * @memberof payment
         * @classdesc Represents a CreateTransactionRequest.
         * @constructor
         * @param {payment.CreateTransactionRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CreateTransactionRequest = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CreateTransactionRequest userId.
         * @member {number|Long} userId
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateTransactionRequest userName.
         * @member {string} userName
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.userName = "";

        /**
         * CreateTransactionRequest userEmail.
         * @member {string} userEmail
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.userEmail = "";

        /**
         * CreateTransactionRequest amount.
         * @member {number|Long} amount
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateTransactionRequest description.
         * @member {string} description
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.description = "";

        /**
         * CreateTransactionRequest type.
         * @member {payment.GrpcTransactionType} type
         * @memberof payment.CreateTransactionRequest
         * @instance
         */
        CreateTransactionRequest.prototype.type = 0;

        /**
         * Creates a new CreateTransactionRequest instance using the specified properties.
         * @function create
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {payment.CreateTransactionRequest.$Properties=} [properties] Properties to set
         * @returns {payment.CreateTransactionRequest} CreateTransactionRequest instance
         * @type {{
         *   (properties: payment.CreateTransactionRequest.$Shape): payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape;
         *   (properties?: payment.CreateTransactionRequest.$Properties): payment.CreateTransactionRequest;
         * }}
         */
        CreateTransactionRequest.create = function(properties) {
            return new CreateTransactionRequest(properties);
        };

        /**
         * Encodes the specified CreateTransactionRequest message. Does not implicitly {@link payment.CreateTransactionRequest.verify|verify} messages.
         * @function encode
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {payment.CreateTransactionRequest.$Properties} message CreateTransactionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTransactionRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId") && (typeof message.userId === "object" ? message.userId.low || message.userId.high : message.userId !== 0))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.userName != null && $Object.hasOwnProperty.call(message, "userName") && message.userName !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.userEmail != null && $Object.hasOwnProperty.call(message, "userEmail") && message.userEmail !== "")
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userEmail);
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount") && (typeof message.amount === "object" ? message.amount.low || message.amount.high : message.amount !== 0))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.amount);
            if (message.description != null && $Object.hasOwnProperty.call(message, "description") && message.description !== "")
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
            if (message.type != null && $Object.hasOwnProperty.call(message, "type") && message.type !== 0)
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateTransactionRequest message, length delimited. Does not implicitly {@link payment.CreateTransactionRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {payment.CreateTransactionRequest.$Properties} message CreateTransactionRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTransactionRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CreateTransactionRequest message from the specified reader or buffer.
         * @function decode
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape} CreateTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTransactionRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.payment.CreateTransactionRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.userId = value;
                        else
                            delete message.userId;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.userName = value;
                        else
                            delete message.userName;
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.userEmail = value;
                        else
                            delete message.userEmail;
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.amount = value;
                        else
                            delete message.amount;
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.description = value;
                        else
                            delete message.description;
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.int32())
                            message.type = value;
                        else
                            delete message.type;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CreateTransactionRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape} CreateTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTransactionRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a CreateTransactionRequest message.
         * @function verify
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTransactionRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.userName != null && $Object.hasOwnProperty.call(message, "userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userEmail != null && $Object.hasOwnProperty.call(message, "userEmail"))
                if (!$util.isString(message.userEmail))
                    return "userEmail: string expected";
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                    return "type: enum value expected";
            return null;
        };

        /**
         * Creates a CreateTransactionRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payment.CreateTransactionRequest} CreateTransactionRequest
         */
        CreateTransactionRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.payment.CreateTransactionRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".payment.CreateTransactionRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.payment.CreateTransactionRequest();
            if (object.userId != null)
                if (typeof object.userId === "object" ? object.userId.low || object.userId.high : $Number(object.userId) !== 0)
                    if ($util.Long)
                        message.userId = $util.Long.fromValue(object.userId, false);
                    else if (typeof object.userId === "string")
                        message.userId = $parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.userName != null)
                if (typeof object.userName !== "string" || object.userName.length)
                    message.userName = $String(object.userName);
            if (object.userEmail != null)
                if (typeof object.userEmail !== "string" || object.userEmail.length)
                    message.userEmail = $String(object.userEmail);
            if (object.amount != null)
                if (typeof object.amount === "object" ? object.amount.low || object.amount.high : $Number(object.amount) !== 0)
                    if ($util.Long)
                        message.amount = $util.Long.fromValue(object.amount, false);
                    else if (typeof object.amount === "string")
                        message.amount = $parseInt(object.amount, 10);
                    else if (typeof object.amount === "number")
                        message.amount = object.amount;
                    else if (typeof object.amount === "object")
                        message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.description != null)
                if (typeof object.description !== "string" || object.description.length)
                    message.description = $String(object.description);
            if (object.type !== 0 && (typeof object.type !== "string" || $root.payment.GrpcTransactionType[object.type] !== 0))
                switch (object.type) {
                case "DEPOSIT":
                case 0:
                    message.type = 0;
                    break;
                case "PAYMENT":
                case 1:
                    message.type = 1;
                    break;
                default:
                    if (typeof object.type === "number" && (object.type | 0) === object.type)
                        message.type = object.type;
                }
            return message;
        };

        /**
         * Creates a plain object from a CreateTransactionRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {payment.CreateTransactionRequest} message CreateTransactionRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTransactionRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.userId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.userName = "";
                object.userEmail = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.amount = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
                object.description = "";
                object.type = options.enums === $String ? "DEPOSIT" : 0;
            }
            if (message.userId != null && $Object.hasOwnProperty.call(message, "userId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.userId = typeof message.userId === "number" ? $BigInt(message.userId) : $util.Long.fromBits(message.userId.low >>> 0, message.userId.high >>> 0, false).toBigInt();
                else if (typeof message.userId === "number")
                    object.userId = options.longs === $String ? $String(message.userId) : message.userId;
                else
                    object.userId = options.longs === $String ? $util.Long.prototype.toString.call(message.userId) : options.longs === $Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.userName != null && $Object.hasOwnProperty.call(message, "userName"))
                object.userName = message.userName;
            if (message.userEmail != null && $Object.hasOwnProperty.call(message, "userEmail"))
                object.userEmail = message.userEmail;
            if (message.amount != null && $Object.hasOwnProperty.call(message, "amount"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.amount = typeof message.amount === "number" ? $BigInt(message.amount) : $util.Long.fromBits(message.amount.low >>> 0, message.amount.high >>> 0, false).toBigInt();
                else if (typeof message.amount === "number")
                    object.amount = options.longs === $String ? $String(message.amount) : message.amount;
                else
                    object.amount = options.longs === $String ? $util.Long.prototype.toString.call(message.amount) : options.longs === $Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.description != null && $Object.hasOwnProperty.call(message, "description"))
                object.description = message.description;
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = options.enums === $String ? $root.payment.GrpcTransactionType[message.type] === $undefined ? message.type : $root.payment.GrpcTransactionType[message.type] : message.type;
            return object;
        };

        /**
         * Converts this CreateTransactionRequest to JSON.
         * @function toJSON
         * @memberof payment.CreateTransactionRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTransactionRequest.prototype.toJSON = function() {
            return CreateTransactionRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CreateTransactionRequest
         * @function getTypeUrl
         * @memberof payment.CreateTransactionRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CreateTransactionRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/payment.CreateTransactionRequest";
        };

        return CreateTransactionRequest;
    })();

    payment.CreateTransactionResponse = (function() {

        /**
         * Properties of a CreateTransactionResponse.
         * @typedef {Object} payment.CreateTransactionResponse.$Properties
         * @property {boolean|null} [success] CreateTransactionResponse success
         * @property {string|null} [message] CreateTransactionResponse message
         * @property {number|Long|null} [transactionId] CreateTransactionResponse transactionId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CreateTransactionResponse.
         * @memberof payment
         * @interface ICreateTransactionResponse
         * @augments payment.CreateTransactionResponse.$Properties
         * @deprecated Use payment.CreateTransactionResponse.$Properties instead.
         */

        /**
         * Shape of a CreateTransactionResponse.
         * @typedef {payment.CreateTransactionResponse.$Properties} payment.CreateTransactionResponse.$Shape
         */

        /**
         * Constructs a new CreateTransactionResponse.
         * @memberof payment
         * @classdesc Represents a CreateTransactionResponse.
         * @constructor
         * @param {payment.CreateTransactionResponse.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CreateTransactionResponse = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CreateTransactionResponse success.
         * @member {boolean} success
         * @memberof payment.CreateTransactionResponse
         * @instance
         */
        CreateTransactionResponse.prototype.success = false;

        /**
         * CreateTransactionResponse message.
         * @member {string} message
         * @memberof payment.CreateTransactionResponse
         * @instance
         */
        CreateTransactionResponse.prototype.message = "";

        /**
         * CreateTransactionResponse transactionId.
         * @member {number|Long} transactionId
         * @memberof payment.CreateTransactionResponse
         * @instance
         */
        CreateTransactionResponse.prototype.transactionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CreateTransactionResponse instance using the specified properties.
         * @function create
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {payment.CreateTransactionResponse.$Properties=} [properties] Properties to set
         * @returns {payment.CreateTransactionResponse} CreateTransactionResponse instance
         * @type {{
         *   (properties: payment.CreateTransactionResponse.$Shape): payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape;
         *   (properties?: payment.CreateTransactionResponse.$Properties): payment.CreateTransactionResponse;
         * }}
         */
        CreateTransactionResponse.create = function(properties) {
            return new CreateTransactionResponse(properties);
        };

        /**
         * Encodes the specified CreateTransactionResponse message. Does not implicitly {@link payment.CreateTransactionResponse.verify|verify} messages.
         * @function encode
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {payment.CreateTransactionResponse.$Properties} message CreateTransactionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTransactionResponse.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.success != null && $Object.hasOwnProperty.call(message, "success") && message.success !== false)
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && $Object.hasOwnProperty.call(message, "message") && message.message !== "")
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.transactionId != null && $Object.hasOwnProperty.call(message, "transactionId") && (typeof message.transactionId === "object" ? message.transactionId.low || message.transactionId.high : message.transactionId !== 0))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.transactionId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CreateTransactionResponse message, length delimited. Does not implicitly {@link payment.CreateTransactionResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {payment.CreateTransactionResponse.$Properties} message CreateTransactionResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTransactionResponse.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a CreateTransactionResponse message from the specified reader or buffer.
         * @function decode
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape} CreateTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTransactionResponse.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.payment.CreateTransactionResponse();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        if (value = reader.bool())
                            message.success = value;
                        else
                            delete message.success;
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if ((value = reader.stringVerify()).length)
                            message.message = value;
                        else
                            delete message.message;
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                            message.transactionId = value;
                        else
                            delete message.transactionId;
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CreateTransactionResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape} CreateTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTransactionResponse.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.size());
        };

        /**
         * Verifies a CreateTransactionResponse message.
         * @function verify
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTransactionResponse.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.transactionId != null && $Object.hasOwnProperty.call(message, "transactionId"))
                if (!$util.isInteger(message.transactionId) && !(message.transactionId && $util.isInteger(message.transactionId.low) && $util.isInteger(message.transactionId.high)))
                    return "transactionId: integer|Long expected";
            return null;
        };

        /**
         * Creates a CreateTransactionResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {payment.CreateTransactionResponse} CreateTransactionResponse
         */
        CreateTransactionResponse.fromObject = function (object, _depth) {
            if (object instanceof $root.payment.CreateTransactionResponse)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".payment.CreateTransactionResponse: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.payment.CreateTransactionResponse();
            if (object.success != null)
                if (object.success)
                    message.success = $Boolean(object.success);
            if (object.message != null)
                if (typeof object.message !== "string" || object.message.length)
                    message.message = $String(object.message);
            if (object.transactionId != null)
                if (typeof object.transactionId === "object" ? object.transactionId.low || object.transactionId.high : $Number(object.transactionId) !== 0)
                    if ($util.Long)
                        message.transactionId = $util.Long.fromValue(object.transactionId, false);
                    else if (typeof object.transactionId === "string")
                        message.transactionId = $parseInt(object.transactionId, 10);
                    else if (typeof object.transactionId === "number")
                        message.transactionId = object.transactionId;
                    else if (typeof object.transactionId === "object")
                        message.transactionId = new $util.LongBits(object.transactionId.low >>> 0, object.transactionId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CreateTransactionResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {payment.CreateTransactionResponse} message CreateTransactionResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTransactionResponse.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.transactionId = options.longs === $String ? long.toString() : options.longs === $Number ? long.toNumber() : typeof $BigInt !== "undefined" && options.longs === $BigInt ? long.toBigInt() : long;
                } else
                    object.transactionId = options.longs === $String ? "0" : typeof $BigInt !== "undefined" && options.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (message.success != null && $Object.hasOwnProperty.call(message, "success"))
                object.success = message.success;
            if (message.message != null && $Object.hasOwnProperty.call(message, "message"))
                object.message = message.message;
            if (message.transactionId != null && $Object.hasOwnProperty.call(message, "transactionId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.transactionId = typeof message.transactionId === "number" ? $BigInt(message.transactionId) : $util.Long.fromBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0, false).toBigInt();
                else if (typeof message.transactionId === "number")
                    object.transactionId = options.longs === $String ? $String(message.transactionId) : message.transactionId;
                else
                    object.transactionId = options.longs === $String ? $util.Long.prototype.toString.call(message.transactionId) : options.longs === $Number ? new $util.LongBits(message.transactionId.low >>> 0, message.transactionId.high >>> 0).toNumber() : message.transactionId;
            return object;
        };

        /**
         * Converts this CreateTransactionResponse to JSON.
         * @function toJSON
         * @memberof payment.CreateTransactionResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTransactionResponse.prototype.toJSON = function() {
            return CreateTransactionResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CreateTransactionResponse
         * @function getTypeUrl
         * @memberof payment.CreateTransactionResponse
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CreateTransactionResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/payment.CreateTransactionResponse";
        };

        return CreateTransactionResponse;
    })();

    return payment;
})();

module.exports = $root;
