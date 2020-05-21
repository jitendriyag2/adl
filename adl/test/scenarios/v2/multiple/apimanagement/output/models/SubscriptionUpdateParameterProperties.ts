
/**
 * @description Parameters supplied to the Update subscription operation.
 */
export interface SubscriptionUpdateParameterProperties {
    /**
     * @description User identifier path: /users/{userId}
     */
    ownerId: string;
    /**
     * @description Scope like /products/{productId} or /apis or /apis/{apiId}
     */
    scope: string;
    /**
     * @description Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the `state` property. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
     */
    expirationDate: dateTime;
    /**
     * @description Subscription name.
     */
    displayName: string;
    /**
     * @description Primary subscription key.
     */
    primaryKey: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Secondary subscription key.
     */
    secondaryKey: string & MaxLength<256> & MinLength<1>;
    /**
     * @description Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated.
     */
    state: SubscriptionState;
    /**
     * @description Comments describing subscription state change by the administrator.
     */
    stateComment: string;
    /**
     * @description Determines whether tracing can be enabled
     */
    allowTracing: boolean;
}