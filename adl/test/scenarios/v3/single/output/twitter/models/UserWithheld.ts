
/**
 * @description Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 */
export interface UserWithheld {
    /**
     * @description Provides a list of countries where this content is not available.
     */
    country_codes?: Array<string & RegularExpression<"^[A-Z]{2}$">> & MinimumElements<1> & UniqueElements;
    /**
     * @description Indicates that the content being withheld is a `user`.
     */
    scope: unknown /*= (not tsschema -- undefined[object Object]/undefined ) =*/;
}