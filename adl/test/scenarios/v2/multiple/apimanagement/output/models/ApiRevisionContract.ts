
/**
 * @description Summary of revision metadata.
 */
export interface ApiRevisionContract {
    /**
     * @description Identifier of the API Revision.
     */
    readonly apiId: string & ;
    /**
     * @description Revision number of API.
     */
    readonly apiRevision: string &  & MaxLength<100> & MinLength<1>;
    /**
     * @description The time the API Revision was created. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly createdDateTime: dateTime & ;
    /**
     * @description The time the API Revision were updated. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
     */
    readonly updatedDateTime: dateTime & ;
    /**
     * @description Description of the API Revision.
     */
    readonly description: string &  & MaxLength<256>;
    /**
     * @description Gateway URL for accessing the non-current API Revision.
     */
    readonly privateUrl: string & ;
    /**
     * @description Indicates if API revision is the current api revision.
     */
    readonly isOnline: boolean & ;
    /**
     * @description Indicates if API revision is accessible via the gateway.
     */
    readonly isCurrent: boolean & ;
}