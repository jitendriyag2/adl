
/**
 * ListTagsForResourceRequest
 * @since 2018-11-25
 */
export interface ListTagsForResourceRequest {
    /**
     * @description The Amazon Resource Name (ARN) of the application that you want to retrieve tag information for.
     * @since 2018-11-25
     */
    ResourceARN?: string & MaxLength<1011> & MinLength<1>;
}
