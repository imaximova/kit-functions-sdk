// Generated by dts-bundle v0.7.3

declare module '@voximplant/kit-functions-sdk' {
    import { CallObject, ContextObject, MessageObject, QueueInfo, SkillObject } from "@voximplant/kit-functions-sdk/types";
    const enum EVENT_TYPES {
            in_call_function = "in_call_function",
            incoming_message = "incoming_message",
            webhook = "webhook"
    }
    class VoximplantKit {
            eventType: EVENT_TYPES;
            call: CallObject;
            variables: object;
            headers: object;
            skills: Array<SkillObject>;
            incomingMessage: MessageObject;
            replyMessage: MessageObject;
            api: any;
            constructor(context: ContextObject, isTest?: boolean);
            static default: typeof VoximplantKit;
            /**
                * load Databases
                */
            loadDatabases(): Promise<void>;
            setPriority(value: number): number;
            getPriority(): number;
            /**
                * Get function response
                * @param data
                */
            getResponseBody(data: any): any;
            /**
                * Get incoming message
                */
            getIncomingMessage(): MessageObject;
            /**
                * Set auth token
                * @param token
                */
            setAccessToken(token: any): void;
            /**
                * Get Variable
                * @param name
                */
            getVariable(name: string): any;
            /**
                * Set variable
                * @param name {String}
                * @param value {String}
                */
            setVariable(name: string, value: string): void;
            /**
                * Get all call data
                */
            getCallData(): any;
            /**
                * Get all variables
                */
            getVariables(): {
                    [key: string]: string;
            };
            /**
                * Get all skills
                */
            getSkills(): any;
            /**
                * Set skill
                * @param name
                * @param level
                */
            setSkill(name: string, level: number): void;
            /**
                * Remove skill
                * @param name
                */
            removeSkill(name: string): void;
            /**
                * Finish current request in conversation
                */
            finishRequest(): boolean;
            /**
                * Cancel finish current request in conversation
                */
            cancelFinishRequest(): boolean;
            /**
                * Transfer to queue
                */
            transferToQueue(queue: QueueInfo): boolean;
            /**
                * Cancel transfer to queue
                */
            cancelTransferToQueue(): boolean;
            /**
                * Get value from DB by key
                * @param key
                * @param scope
                */
            dbGet(key: string, scope?: string): any;
            /**
                * Set value in DB by key
                * @param key
                * @param value
                * @param scope
                */
            dbSet(key: string, value: any, scope?: string): void;
            /**
                * Get all DB scope by name
                * @param scope
                */
            dbGetAll(scope?: string): any;
            /**
                * Commit DB changes
                */
            dbCommit(): Promise<void>;
            /**
                * Send SMS message
                * @param from
                * @param to
                * @param message
                */
            sendSMS(from: string, to: string, message: string): any;
            /**
                * Voximplant Kit API proxy
                * @param url {string} - Url address
                * @param data
                */
            apiProxy(url: string, data: any): any;
            /**
                * Add photo
                *
                * ```js
                * module.exports = async function(context, callback) {
                *  const kit = new VoximplantKit(context);
                *  kit.addPhoto('https://your-srite.com/img/some-photo.png');
                *  callback(200, kit.getResponseBody());
                *}
                * ```
                * @param url {String} - Url address
                * @returns {Boolean}
                */
            addPhoto(url: string): boolean;
            /**
                * Get client version
                */
            version(): string;
    }
    export = VoximplantKit;
}

declare module '@voximplant/kit-functions-sdk/types' {
    export interface CallObject {
        id: number;
        result_code: number;
        attempt_num: number;
        session_id: string;
        callerid: string;
        destination: string;
        display_name: string;
        phone_a: string;
        phone_b: string;
        record_url: string;
    }
    export interface ContextObject {
        request: RequestObject;
    }
    export interface RequestObject {
        body: object;
        headers: object;
    }
    export interface SkillObject {
        skill_name: string;
        level: number;
    }
    export interface ResponseDataObject {
        VARIABLES: object;
        SKILLS: Array<SkillObject>;
    }
    export interface MessageConversation {
        id: number;
        uuid: string;
        client_id: string;
        custom_data: ConversationCustomDataObject;
        current_status: string;
        current_request: IncomingRequestObject;
        channel: MessageConversationChannel;
        customer_id?: number;
    }
    export interface MessageConversationChannel {
        id: number;
        channel_uuid: string;
        account: object;
        channel_type: string;
        channel_settings: object;
        processing_method: string;
        processing_queue: object;
        processing_function: number;
        partner_id: number;
        access_token: string;
    }
    export interface ConversationCustomDataObject {
        client_data: ConversationCustomDataClientDataObject;
        conversation_data: ConversationCustomDataConversationDataObject;
    }
    export interface ConversationCustomDataClientDataObject {
        client_id: string;
        client_phone: string;
        client_avatar: string;
        client_display_name: string;
    }
    export interface ConversationCustomDataConversationDataObject {
        last_message_text: string;
        last_message_time: number;
        channel_type: string;
        last_message_sender_type: string;
        is_read: boolean;
    }
    export interface QueueInfo {
        queue_id: number;
        queue_name: string;
    }
    export interface MessageObject {
        text: string;
        type: string;
        sender: MessageSender;
        conversation: MessageConversation;
        payload: Array<MessagePayloadItem>;
        customer: MessageCustomer;
    }
    export interface MessageCustomer {
        id: number;
        customer_display_name: string;
        customer_details: string;
        customer_photo: string;
        customer_phones: string[];
        customer_client_ids: MessageCustomerClientIds[];
        customer_external_id: string;
        customer_emails: string[];
    }
    export interface MessageCustomerClientIds {
        client_id: string;
        client_type: string;
    }
    export interface IncomingMessageObject {
        text: string;
        type: string;
        conversation_uuid: string;
        client_data: ConversationCustomDataClientDataObject;
        conversation_data: ConversationCustomDataConversationDataObject;
        current_request: IncomingRequestObject;
    }
    export interface IncomingRequestObject {
        id: number;
        conversation_id: number;
        start_sequence: number;
        end_sequence: number;
        start_time: number;
        handling_start_time: number;
        end_time: number;
        completed: boolean;
    }
    export interface MessageSenderObject {
        client_id: string;
        client_phone: string;
        client_avatar: string;
        client_display_name: string;
    }
    export interface MessageSender {
        is_bot: boolean;
    }
    export interface MessagePayloadItem {
        type: string;
        message_type?: string;
        name?: string;
        queue?: QueueInfo;
        skills?: Array<SkillObject>;
        priority?: number;
        text?: string;
        url?: string;
        latitude?: number;
        longitude?: number;
        address?: string;
        keys?: any;
        file_name?: string;
        file_size?: number;
    }
}

