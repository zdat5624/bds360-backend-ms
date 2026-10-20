import * as $protobuf from "protobufjs";
import Long = require("long");

/** Namespace event. */
export namespace event {

    /**
     * Properties of a DepositSuccessEvent.
     * @deprecated Use event.DepositSuccessEvent.$Properties instead.
     */
    interface IDepositSuccessEvent extends event.DepositSuccessEvent.$Properties {
    }

    /** Represents a DepositSuccessEvent. */
    class DepositSuccessEvent {

        /**
         * Constructs a new DepositSuccessEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.DepositSuccessEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** DepositSuccessEvent to. */
        to: string;

        /** DepositSuccessEvent username. */
        username: string;

        /** DepositSuccessEvent amount. */
        amount: number;

        /** DepositSuccessEvent transactionTime. */
        transactionTime: string;

        /**
         * Creates a new DepositSuccessEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DepositSuccessEvent instance
         */
        static create(properties: event.DepositSuccessEvent.$Shape): event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape;
        static create(properties?: event.DepositSuccessEvent.$Properties): event.DepositSuccessEvent;

        /**
         * Encodes the specified DepositSuccessEvent message. Does not implicitly {@link event.DepositSuccessEvent.verify|verify} messages.
         * @param message DepositSuccessEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: event.DepositSuccessEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DepositSuccessEvent message, length delimited. Does not implicitly {@link event.DepositSuccessEvent.verify|verify} messages.
         * @param message DepositSuccessEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: event.DepositSuccessEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DepositSuccessEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape} DepositSuccessEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape;

        /**
         * Decodes a DepositSuccessEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape} DepositSuccessEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event.DepositSuccessEvent & event.DepositSuccessEvent.$Shape;

        /**
         * Verifies a DepositSuccessEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DepositSuccessEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DepositSuccessEvent
         */
        static fromObject(object: { [k: string]: any }): event.DepositSuccessEvent;

        /**
         * Creates a plain object from a DepositSuccessEvent message. Also converts values to other types if specified.
         * @param message DepositSuccessEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: event.DepositSuccessEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DepositSuccessEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for DepositSuccessEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace DepositSuccessEvent {

        /** Properties of a DepositSuccessEvent. */
        interface $Properties {

            /** DepositSuccessEvent to */
            to?: (string|null);

            /** DepositSuccessEvent username */
            username?: (string|null);

            /** DepositSuccessEvent amount */
            amount?: (number|null);

            /** DepositSuccessEvent transactionTime */
            transactionTime?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a DepositSuccessEvent. */
        type $Shape = event.DepositSuccessEvent.$Properties;
    }

    /**
     * Properties of a ForgotPasswordEvent.
     * @deprecated Use event.ForgotPasswordEvent.$Properties instead.
     */
    interface IForgotPasswordEvent extends event.ForgotPasswordEvent.$Properties {
    }

    /** Represents a ForgotPasswordEvent. */
    class ForgotPasswordEvent {

        /**
         * Constructs a new ForgotPasswordEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.ForgotPasswordEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** ForgotPasswordEvent to. */
        to: string;

        /** ForgotPasswordEvent username. */
        username: string;

        /** ForgotPasswordEvent resetCode. */
        resetCode: string;

        /**
         * Creates a new ForgotPasswordEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForgotPasswordEvent instance
         */
        static create(properties: event.ForgotPasswordEvent.$Shape): event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape;
        static create(properties?: event.ForgotPasswordEvent.$Properties): event.ForgotPasswordEvent;

        /**
         * Encodes the specified ForgotPasswordEvent message. Does not implicitly {@link event.ForgotPasswordEvent.verify|verify} messages.
         * @param message ForgotPasswordEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: event.ForgotPasswordEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForgotPasswordEvent message, length delimited. Does not implicitly {@link event.ForgotPasswordEvent.verify|verify} messages.
         * @param message ForgotPasswordEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: event.ForgotPasswordEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForgotPasswordEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape} ForgotPasswordEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape;

        /**
         * Decodes a ForgotPasswordEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape} ForgotPasswordEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event.ForgotPasswordEvent & event.ForgotPasswordEvent.$Shape;

        /**
         * Verifies a ForgotPasswordEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForgotPasswordEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForgotPasswordEvent
         */
        static fromObject(object: { [k: string]: any }): event.ForgotPasswordEvent;

        /**
         * Creates a plain object from a ForgotPasswordEvent message. Also converts values to other types if specified.
         * @param message ForgotPasswordEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: event.ForgotPasswordEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForgotPasswordEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for ForgotPasswordEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace ForgotPasswordEvent {

        /** Properties of a ForgotPasswordEvent. */
        interface $Properties {

            /** ForgotPasswordEvent to */
            to?: (string|null);

            /** ForgotPasswordEvent username */
            username?: (string|null);

            /** ForgotPasswordEvent resetCode */
            resetCode?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a ForgotPasswordEvent. */
        type $Shape = event.ForgotPasswordEvent.$Properties;
    }

    /**
     * Properties of a PostNotificationEvent.
     * @deprecated Use event.PostNotificationEvent.$Properties instead.
     */
    interface IPostNotificationEvent extends event.PostNotificationEvent.$Properties {
    }

    /** Represents a PostNotificationEvent. */
    class PostNotificationEvent {

        /**
         * Constructs a new PostNotificationEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.PostNotificationEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** PostNotificationEvent userId. */
        userId: (number|Long);

        /** PostNotificationEvent title. */
        title: string;

        /** PostNotificationEvent message. */
        message: string;

        /** PostNotificationEvent notificationType. */
        notificationType: string;

        /**
         * Creates a new PostNotificationEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PostNotificationEvent instance
         */
        static create(properties: event.PostNotificationEvent.$Shape): event.PostNotificationEvent & event.PostNotificationEvent.$Shape;
        static create(properties?: event.PostNotificationEvent.$Properties): event.PostNotificationEvent;

        /**
         * Encodes the specified PostNotificationEvent message. Does not implicitly {@link event.PostNotificationEvent.verify|verify} messages.
         * @param message PostNotificationEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: event.PostNotificationEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PostNotificationEvent message, length delimited. Does not implicitly {@link event.PostNotificationEvent.verify|verify} messages.
         * @param message PostNotificationEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: event.PostNotificationEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PostNotificationEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {event.PostNotificationEvent & event.PostNotificationEvent.$Shape} PostNotificationEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.PostNotificationEvent & event.PostNotificationEvent.$Shape;

        /**
         * Decodes a PostNotificationEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {event.PostNotificationEvent & event.PostNotificationEvent.$Shape} PostNotificationEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event.PostNotificationEvent & event.PostNotificationEvent.$Shape;

        /**
         * Verifies a PostNotificationEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PostNotificationEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PostNotificationEvent
         */
        static fromObject(object: { [k: string]: any }): event.PostNotificationEvent;

        /**
         * Creates a plain object from a PostNotificationEvent message. Also converts values to other types if specified.
         * @param message PostNotificationEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: event.PostNotificationEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PostNotificationEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for PostNotificationEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace PostNotificationEvent {

        /** Properties of a PostNotificationEvent. */
        interface $Properties {

            /** PostNotificationEvent userId */
            userId?: (number|Long|null);

            /** PostNotificationEvent title */
            title?: (string|null);

            /** PostNotificationEvent message */
            message?: (string|null);

            /** PostNotificationEvent notificationType */
            notificationType?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a PostNotificationEvent. */
        type $Shape = event.PostNotificationEvent.$Properties;
    }

    /**
     * Properties of a UserProfileUpdatedEvent.
     * @deprecated Use event.UserProfileUpdatedEvent.$Properties instead.
     */
    interface IUserProfileUpdatedEvent extends event.UserProfileUpdatedEvent.$Properties {
    }

    /** Represents a UserProfileUpdatedEvent. */
    class UserProfileUpdatedEvent {

        /**
         * Constructs a new UserProfileUpdatedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.UserProfileUpdatedEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UserProfileUpdatedEvent userId. */
        userId: (number|Long);

        /** UserProfileUpdatedEvent name. */
        name: string;

        /** UserProfileUpdatedEvent email. */
        email: string;

        /** UserProfileUpdatedEvent avatar. */
        avatar: string;

        /** UserProfileUpdatedEvent phone. */
        phone: string;

        /**
         * Creates a new UserProfileUpdatedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserProfileUpdatedEvent instance
         */
        static create(properties: event.UserProfileUpdatedEvent.$Shape): event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape;
        static create(properties?: event.UserProfileUpdatedEvent.$Properties): event.UserProfileUpdatedEvent;

        /**
         * Encodes the specified UserProfileUpdatedEvent message. Does not implicitly {@link event.UserProfileUpdatedEvent.verify|verify} messages.
         * @param message UserProfileUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: event.UserProfileUpdatedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserProfileUpdatedEvent message, length delimited. Does not implicitly {@link event.UserProfileUpdatedEvent.verify|verify} messages.
         * @param message UserProfileUpdatedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: event.UserProfileUpdatedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserProfileUpdatedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape} UserProfileUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape;

        /**
         * Decodes a UserProfileUpdatedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape} UserProfileUpdatedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event.UserProfileUpdatedEvent & event.UserProfileUpdatedEvent.$Shape;

        /**
         * Verifies a UserProfileUpdatedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserProfileUpdatedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserProfileUpdatedEvent
         */
        static fromObject(object: { [k: string]: any }): event.UserProfileUpdatedEvent;

        /**
         * Creates a plain object from a UserProfileUpdatedEvent message. Also converts values to other types if specified.
         * @param message UserProfileUpdatedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: event.UserProfileUpdatedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserProfileUpdatedEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserProfileUpdatedEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserProfileUpdatedEvent {

        /** Properties of a UserProfileUpdatedEvent. */
        interface $Properties {

            /** UserProfileUpdatedEvent userId */
            userId?: (number|Long|null);

            /** UserProfileUpdatedEvent name */
            name?: (string|null);

            /** UserProfileUpdatedEvent email */
            email?: (string|null);

            /** UserProfileUpdatedEvent avatar */
            avatar?: (string|null);

            /** UserProfileUpdatedEvent phone */
            phone?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserProfileUpdatedEvent. */
        type $Shape = event.UserProfileUpdatedEvent.$Properties;
    }

    /**
     * Properties of a UserDeletedEvent.
     * @deprecated Use event.UserDeletedEvent.$Properties instead.
     */
    interface IUserDeletedEvent extends event.UserDeletedEvent.$Properties {
    }

    /** Represents a UserDeletedEvent. */
    class UserDeletedEvent {

        /**
         * Constructs a new UserDeletedEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: event.UserDeletedEvent.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UserDeletedEvent userId. */
        userId: (number|Long);

        /** UserDeletedEvent email. */
        email: string;

        /**
         * Creates a new UserDeletedEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserDeletedEvent instance
         */
        static create(properties: event.UserDeletedEvent.$Shape): event.UserDeletedEvent & event.UserDeletedEvent.$Shape;
        static create(properties?: event.UserDeletedEvent.$Properties): event.UserDeletedEvent;

        /**
         * Encodes the specified UserDeletedEvent message. Does not implicitly {@link event.UserDeletedEvent.verify|verify} messages.
         * @param message UserDeletedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: event.UserDeletedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserDeletedEvent message, length delimited. Does not implicitly {@link event.UserDeletedEvent.verify|verify} messages.
         * @param message UserDeletedEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: event.UserDeletedEvent.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserDeletedEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {event.UserDeletedEvent & event.UserDeletedEvent.$Shape} UserDeletedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): event.UserDeletedEvent & event.UserDeletedEvent.$Shape;

        /**
         * Decodes a UserDeletedEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {event.UserDeletedEvent & event.UserDeletedEvent.$Shape} UserDeletedEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): event.UserDeletedEvent & event.UserDeletedEvent.$Shape;

        /**
         * Verifies a UserDeletedEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserDeletedEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserDeletedEvent
         */
        static fromObject(object: { [k: string]: any }): event.UserDeletedEvent;

        /**
         * Creates a plain object from a UserDeletedEvent message. Also converts values to other types if specified.
         * @param message UserDeletedEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: event.UserDeletedEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserDeletedEvent to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserDeletedEvent
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserDeletedEvent {

        /** Properties of a UserDeletedEvent. */
        interface $Properties {

            /** UserDeletedEvent userId */
            userId?: (number|Long|null);

            /** UserDeletedEvent email */
            email?: (string|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserDeletedEvent. */
        type $Shape = event.UserDeletedEvent.$Properties;
    }
}

/** Namespace identity. */
export namespace identity {

    /**
     * Properties of a GetUsersInfoRequest.
     * @deprecated Use identity.GetUsersInfoRequest.$Properties instead.
     */
    interface IGetUsersInfoRequest extends identity.GetUsersInfoRequest.$Properties {
    }

    /** Represents a GetUsersInfoRequest. */
    class GetUsersInfoRequest {

        /**
         * Constructs a new GetUsersInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: identity.GetUsersInfoRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetUsersInfoRequest userIds. */
        userIds: (number|Long)[];

        /**
         * Creates a new GetUsersInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersInfoRequest instance
         */
        static create(properties: identity.GetUsersInfoRequest.$Shape): identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape;
        static create(properties?: identity.GetUsersInfoRequest.$Properties): identity.GetUsersInfoRequest;

        /**
         * Encodes the specified GetUsersInfoRequest message. Does not implicitly {@link identity.GetUsersInfoRequest.verify|verify} messages.
         * @param message GetUsersInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: identity.GetUsersInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersInfoRequest message, length delimited. Does not implicitly {@link identity.GetUsersInfoRequest.verify|verify} messages.
         * @param message GetUsersInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: identity.GetUsersInfoRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape} GetUsersInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape;

        /**
         * Decodes a GetUsersInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape} GetUsersInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): identity.GetUsersInfoRequest & identity.GetUsersInfoRequest.$Shape;

        /**
         * Verifies a GetUsersInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersInfoRequest
         */
        static fromObject(object: { [k: string]: any }): identity.GetUsersInfoRequest;

        /**
         * Creates a plain object from a GetUsersInfoRequest message. Also converts values to other types if specified.
         * @param message GetUsersInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: identity.GetUsersInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersInfoRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetUsersInfoRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetUsersInfoRequest {

        /** Properties of a GetUsersInfoRequest. */
        interface $Properties {

            /** GetUsersInfoRequest userIds */
            userIds?: ((number|Long)[]|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetUsersInfoRequest. */
        type $Shape = identity.GetUsersInfoRequest.$Properties;
    }

    /**
     * Properties of a UserInfo.
     * @deprecated Use identity.UserInfo.$Properties instead.
     */
    interface IUserInfo extends identity.UserInfo.$Properties {
    }

    /** Represents a UserInfo. */
    class UserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: identity.UserInfo.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UserInfo userId. */
        userId: (number|Long);

        /** UserInfo name. */
        name: string;

        /** UserInfo email. */
        email: string;

        /** UserInfo avatar. */
        avatar: string;

        /** UserInfo phone. */
        phone: string;

        /** UserInfo address. */
        address: string;

        /** UserInfo role. */
        role: string;

        /** UserInfo gender. */
        gender: string;

        /** UserInfo balance. */
        balance: (number|Long);

        /** UserInfo isVerified. */
        isVerified: boolean;

        /** UserInfo createdAtMillis. */
        createdAtMillis: (number|Long);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        static create(properties: identity.UserInfo.$Shape): identity.UserInfo & identity.UserInfo.$Shape;
        static create(properties?: identity.UserInfo.$Properties): identity.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link identity.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: identity.UserInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link identity.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: identity.UserInfo.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {identity.UserInfo & identity.UserInfo.$Shape} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): identity.UserInfo & identity.UserInfo.$Shape;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {identity.UserInfo & identity.UserInfo.$Shape} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): identity.UserInfo & identity.UserInfo.$Shape;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        static fromObject(object: { [k: string]: any }): identity.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: identity.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UserInfo
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UserInfo {

        /** Properties of a UserInfo. */
        interface $Properties {

            /** UserInfo userId */
            userId?: (number|Long|null);

            /** UserInfo name */
            name?: (string|null);

            /** UserInfo email */
            email?: (string|null);

            /** UserInfo avatar */
            avatar?: (string|null);

            /** UserInfo phone */
            phone?: (string|null);

            /** UserInfo address */
            address?: (string|null);

            /** UserInfo role */
            role?: (string|null);

            /** UserInfo gender */
            gender?: (string|null);

            /** UserInfo balance */
            balance?: (number|Long|null);

            /** UserInfo isVerified */
            isVerified?: (boolean|null);

            /** UserInfo createdAtMillis */
            createdAtMillis?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a UserInfo. */
        type $Shape = identity.UserInfo.$Properties;
    }

    /**
     * Properties of a GetUsersInfoReply.
     * @deprecated Use identity.GetUsersInfoReply.$Properties instead.
     */
    interface IGetUsersInfoReply extends identity.GetUsersInfoReply.$Properties {
    }

    /** Represents a GetUsersInfoReply. */
    class GetUsersInfoReply {

        /**
         * Constructs a new GetUsersInfoReply.
         * @param [properties] Properties to set
         */
        constructor(properties?: identity.GetUsersInfoReply.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** GetUsersInfoReply users. */
        users: { [k: string]: identity.UserInfo.$Properties };

        /**
         * Creates a new GetUsersInfoReply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUsersInfoReply instance
         */
        static create(properties: identity.GetUsersInfoReply.$Shape): identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape;
        static create(properties?: identity.GetUsersInfoReply.$Properties): identity.GetUsersInfoReply;

        /**
         * Encodes the specified GetUsersInfoReply message. Does not implicitly {@link identity.GetUsersInfoReply.verify|verify} messages.
         * @param message GetUsersInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: identity.GetUsersInfoReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUsersInfoReply message, length delimited. Does not implicitly {@link identity.GetUsersInfoReply.verify|verify} messages.
         * @param message GetUsersInfoReply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: identity.GetUsersInfoReply.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUsersInfoReply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape} GetUsersInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape;

        /**
         * Decodes a GetUsersInfoReply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape} GetUsersInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): identity.GetUsersInfoReply & identity.GetUsersInfoReply.$Shape;

        /**
         * Verifies a GetUsersInfoReply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUsersInfoReply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUsersInfoReply
         */
        static fromObject(object: { [k: string]: any }): identity.GetUsersInfoReply;

        /**
         * Creates a plain object from a GetUsersInfoReply message. Also converts values to other types if specified.
         * @param message GetUsersInfoReply
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: identity.GetUsersInfoReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUsersInfoReply to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for GetUsersInfoReply
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace GetUsersInfoReply {

        /** Properties of a GetUsersInfoReply. */
        interface $Properties {

            /** GetUsersInfoReply users */
            users?: ({ [k: string]: identity.UserInfo.$Properties }|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a GetUsersInfoReply. */
        type $Shape = identity.GetUsersInfoReply.$Properties;
    }

    /**
     * Properties of an UpdateBalanceRequest.
     * @deprecated Use identity.UpdateBalanceRequest.$Properties instead.
     */
    interface IUpdateBalanceRequest extends identity.UpdateBalanceRequest.$Properties {
    }

    /** Represents an UpdateBalanceRequest. */
    class UpdateBalanceRequest {

        /**
         * Constructs a new UpdateBalanceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: identity.UpdateBalanceRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateBalanceRequest userId. */
        userId: (number|Long);

        /** UpdateBalanceRequest amount. */
        amount: (number|Long);

        /**
         * Creates a new UpdateBalanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateBalanceRequest instance
         */
        static create(properties: identity.UpdateBalanceRequest.$Shape): identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape;
        static create(properties?: identity.UpdateBalanceRequest.$Properties): identity.UpdateBalanceRequest;

        /**
         * Encodes the specified UpdateBalanceRequest message. Does not implicitly {@link identity.UpdateBalanceRequest.verify|verify} messages.
         * @param message UpdateBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: identity.UpdateBalanceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateBalanceRequest message, length delimited. Does not implicitly {@link identity.UpdateBalanceRequest.verify|verify} messages.
         * @param message UpdateBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: identity.UpdateBalanceRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateBalanceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape} UpdateBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape;

        /**
         * Decodes an UpdateBalanceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape} UpdateBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): identity.UpdateBalanceRequest & identity.UpdateBalanceRequest.$Shape;

        /**
         * Verifies an UpdateBalanceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateBalanceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateBalanceRequest
         */
        static fromObject(object: { [k: string]: any }): identity.UpdateBalanceRequest;

        /**
         * Creates a plain object from an UpdateBalanceRequest message. Also converts values to other types if specified.
         * @param message UpdateBalanceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: identity.UpdateBalanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateBalanceRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UpdateBalanceRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateBalanceRequest {

        /** Properties of an UpdateBalanceRequest. */
        interface $Properties {

            /** UpdateBalanceRequest userId */
            userId?: (number|Long|null);

            /** UpdateBalanceRequest amount */
            amount?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateBalanceRequest. */
        type $Shape = identity.UpdateBalanceRequest.$Properties;
    }

    /**
     * Properties of an UpdateBalanceResponse.
     * @deprecated Use identity.UpdateBalanceResponse.$Properties instead.
     */
    interface IUpdateBalanceResponse extends identity.UpdateBalanceResponse.$Properties {
    }

    /** Represents an UpdateBalanceResponse. */
    class UpdateBalanceResponse {

        /**
         * Constructs a new UpdateBalanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: identity.UpdateBalanceResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** UpdateBalanceResponse success. */
        success: boolean;

        /** UpdateBalanceResponse message. */
        message: string;

        /** UpdateBalanceResponse newBalance. */
        newBalance: (number|Long);

        /**
         * Creates a new UpdateBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateBalanceResponse instance
         */
        static create(properties: identity.UpdateBalanceResponse.$Shape): identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape;
        static create(properties?: identity.UpdateBalanceResponse.$Properties): identity.UpdateBalanceResponse;

        /**
         * Encodes the specified UpdateBalanceResponse message. Does not implicitly {@link identity.UpdateBalanceResponse.verify|verify} messages.
         * @param message UpdateBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: identity.UpdateBalanceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateBalanceResponse message, length delimited. Does not implicitly {@link identity.UpdateBalanceResponse.verify|verify} messages.
         * @param message UpdateBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: identity.UpdateBalanceResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateBalanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape} UpdateBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape;

        /**
         * Decodes an UpdateBalanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape} UpdateBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): identity.UpdateBalanceResponse & identity.UpdateBalanceResponse.$Shape;

        /**
         * Verifies an UpdateBalanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateBalanceResponse
         */
        static fromObject(object: { [k: string]: any }): identity.UpdateBalanceResponse;

        /**
         * Creates a plain object from an UpdateBalanceResponse message. Also converts values to other types if specified.
         * @param message UpdateBalanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: identity.UpdateBalanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateBalanceResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for UpdateBalanceResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace UpdateBalanceResponse {

        /** Properties of an UpdateBalanceResponse. */
        interface $Properties {

            /** UpdateBalanceResponse success */
            success?: (boolean|null);

            /** UpdateBalanceResponse message */
            message?: (string|null);

            /** UpdateBalanceResponse newBalance */
            newBalance?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of an UpdateBalanceResponse. */
        type $Shape = identity.UpdateBalanceResponse.$Properties;
    }

    /** Represents an InternalIdentityService */
    class InternalIdentityService extends $protobuf.rpc.Service {

        /**
         * Constructs a new InternalIdentityService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new InternalIdentityService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): InternalIdentityService;

        /** Calls GetUsersInfo. */
        getUsersInfo: identity.InternalIdentityService.GetUsersInfo;

        /** Calls UpdateUserBalance. */
        updateUserBalance: identity.InternalIdentityService.UpdateUserBalance;
    }

    namespace InternalIdentityService {

        /**
         * Callback as used by {@link identity.InternalIdentityService#getUsersInfo}.
         * @param error Error, if any
         * @param [response] GetUsersInfoReply
         */
        type GetUsersInfoCallback = (error: (Error|null), response?: identity.GetUsersInfoReply) => void;

        /** Calls GetUsersInfo. */
        type GetUsersInfo = {
          (request: identity.IGetUsersInfoRequest, callback: identity.InternalIdentityService.GetUsersInfoCallback): void;
          (request: identity.IGetUsersInfoRequest): Promise<identity.GetUsersInfoReply>;
          readonly name: "GetUsersInfo";
          readonly path: "/identity.InternalIdentityService/GetUsersInfo";
          readonly requestType: "GetUsersInfoRequest";
          readonly responseType: "GetUsersInfoReply";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };

        /**
         * Callback as used by {@link identity.InternalIdentityService#updateUserBalance}.
         * @param error Error, if any
         * @param [response] UpdateBalanceResponse
         */
        type UpdateUserBalanceCallback = (error: (Error|null), response?: identity.UpdateBalanceResponse) => void;

        /** Calls UpdateUserBalance. */
        type UpdateUserBalance = {
          (request: identity.IUpdateBalanceRequest, callback: identity.InternalIdentityService.UpdateUserBalanceCallback): void;
          (request: identity.IUpdateBalanceRequest): Promise<identity.UpdateBalanceResponse>;
          readonly name: "UpdateUserBalance";
          readonly path: "/identity.InternalIdentityService/UpdateUserBalance";
          readonly requestType: "UpdateBalanceRequest";
          readonly responseType: "UpdateBalanceResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };
    }
}

/** Namespace payment. */
export namespace payment {

    /** Represents an InternalPaymentService */
    class InternalPaymentService extends $protobuf.rpc.Service {

        /**
         * Constructs a new InternalPaymentService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new InternalPaymentService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): InternalPaymentService;

        /** Calls CreateTransaction. */
        createTransaction: payment.InternalPaymentService.CreateTransaction;
    }

    namespace InternalPaymentService {

        /**
         * Callback as used by {@link payment.InternalPaymentService#createTransaction}.
         * @param error Error, if any
         * @param [response] CreateTransactionResponse
         */
        type CreateTransactionCallback = (error: (Error|null), response?: payment.CreateTransactionResponse) => void;

        /** Calls CreateTransaction. */
        type CreateTransaction = {
          (request: payment.ICreateTransactionRequest, callback: payment.InternalPaymentService.CreateTransactionCallback): void;
          (request: payment.ICreateTransactionRequest): Promise<payment.CreateTransactionResponse>;
          readonly name: "CreateTransaction";
          readonly path: "/payment.InternalPaymentService/CreateTransaction";
          readonly requestType: "CreateTransactionRequest";
          readonly responseType: "CreateTransactionResponse";
          readonly requestStream: undefined;
          readonly responseStream: undefined;
        };
    }

    /** GrpcTransactionType enum. */
    enum GrpcTransactionType {

        /** DEPOSIT value */
        DEPOSIT = 0,

        /** PAYMENT value */
        PAYMENT = 1
    }

    /**
     * Properties of a CreateTransactionRequest.
     * @deprecated Use payment.CreateTransactionRequest.$Properties instead.
     */
    interface ICreateTransactionRequest extends payment.CreateTransactionRequest.$Properties {
    }

    /** Represents a CreateTransactionRequest. */
    class CreateTransactionRequest {

        /**
         * Constructs a new CreateTransactionRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: payment.CreateTransactionRequest.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CreateTransactionRequest userId. */
        userId: (number|Long);

        /** CreateTransactionRequest userName. */
        userName: string;

        /** CreateTransactionRequest userEmail. */
        userEmail: string;

        /** CreateTransactionRequest amount. */
        amount: (number|Long);

        /** CreateTransactionRequest description. */
        description: string;

        /** CreateTransactionRequest type. */
        type: payment.GrpcTransactionType;

        /**
         * Creates a new CreateTransactionRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTransactionRequest instance
         */
        static create(properties: payment.CreateTransactionRequest.$Shape): payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape;
        static create(properties?: payment.CreateTransactionRequest.$Properties): payment.CreateTransactionRequest;

        /**
         * Encodes the specified CreateTransactionRequest message. Does not implicitly {@link payment.CreateTransactionRequest.verify|verify} messages.
         * @param message CreateTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: payment.CreateTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTransactionRequest message, length delimited. Does not implicitly {@link payment.CreateTransactionRequest.verify|verify} messages.
         * @param message CreateTransactionRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: payment.CreateTransactionRequest.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTransactionRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape} CreateTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape;

        /**
         * Decodes a CreateTransactionRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape} CreateTransactionRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payment.CreateTransactionRequest & payment.CreateTransactionRequest.$Shape;

        /**
         * Verifies a CreateTransactionRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTransactionRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTransactionRequest
         */
        static fromObject(object: { [k: string]: any }): payment.CreateTransactionRequest;

        /**
         * Creates a plain object from a CreateTransactionRequest message. Also converts values to other types if specified.
         * @param message CreateTransactionRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: payment.CreateTransactionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTransactionRequest to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CreateTransactionRequest
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CreateTransactionRequest {

        /** Properties of a CreateTransactionRequest. */
        interface $Properties {

            /** CreateTransactionRequest userId */
            userId?: (number|Long|null);

            /** CreateTransactionRequest userName */
            userName?: (string|null);

            /** CreateTransactionRequest userEmail */
            userEmail?: (string|null);

            /** CreateTransactionRequest amount */
            amount?: (number|Long|null);

            /** CreateTransactionRequest description */
            description?: (string|null);

            /** CreateTransactionRequest type */
            type?: (payment.GrpcTransactionType|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CreateTransactionRequest. */
        type $Shape = payment.CreateTransactionRequest.$Properties;
    }

    /**
     * Properties of a CreateTransactionResponse.
     * @deprecated Use payment.CreateTransactionResponse.$Properties instead.
     */
    interface ICreateTransactionResponse extends payment.CreateTransactionResponse.$Properties {
    }

    /** Represents a CreateTransactionResponse. */
    class CreateTransactionResponse {

        /**
         * Constructs a new CreateTransactionResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: payment.CreateTransactionResponse.$Properties);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];

        /** CreateTransactionResponse success. */
        success: boolean;

        /** CreateTransactionResponse message. */
        message: string;

        /** CreateTransactionResponse transactionId. */
        transactionId: (number|Long);

        /**
         * Creates a new CreateTransactionResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTransactionResponse instance
         */
        static create(properties: payment.CreateTransactionResponse.$Shape): payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape;
        static create(properties?: payment.CreateTransactionResponse.$Properties): payment.CreateTransactionResponse;

        /**
         * Encodes the specified CreateTransactionResponse message. Does not implicitly {@link payment.CreateTransactionResponse.verify|verify} messages.
         * @param message CreateTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encode(message: payment.CreateTransactionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTransactionResponse message, length delimited. Does not implicitly {@link payment.CreateTransactionResponse.verify|verify} messages.
         * @param message CreateTransactionResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        static encodeDelimited(message: payment.CreateTransactionResponse.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTransactionResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape} CreateTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape;

        /**
         * Decodes a CreateTransactionResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape} CreateTransactionResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): payment.CreateTransactionResponse & payment.CreateTransactionResponse.$Shape;

        /**
         * Verifies a CreateTransactionResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTransactionResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTransactionResponse
         */
        static fromObject(object: { [k: string]: any }): payment.CreateTransactionResponse;

        /**
         * Creates a plain object from a CreateTransactionResponse message. Also converts values to other types if specified.
         * @param message CreateTransactionResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(message: payment.CreateTransactionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTransactionResponse to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any };

        /**
         * Gets the type url for CreateTransactionResponse
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string;
    }

    namespace CreateTransactionResponse {

        /** Properties of a CreateTransactionResponse. */
        interface $Properties {

            /** CreateTransactionResponse success */
            success?: (boolean|null);

            /** CreateTransactionResponse message */
            message?: (string|null);

            /** CreateTransactionResponse transactionId */
            transactionId?: (number|Long|null);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];
        }

        /** Shape of a CreateTransactionResponse. */
        type $Shape = payment.CreateTransactionResponse.$Properties;
    }
}
