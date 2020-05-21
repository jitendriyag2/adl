
/**
 * DeleteLogPatternRequest
 */
export interface DeleteLogPatternRequest {
    /**
     * @description The name of the resource group.
     */
    ResourceGroupName?: string & MaxLength<256> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the log pattern set.
     */
    PatternSetName?: string & MaxLength<30> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
    /**
     * @description The name of the log pattern.
     */
    PatternName?: string & MaxLength<50> & MinLength<1> & RegularExpression<"[a-zA-Z0-9\\.\\-_]*">;
}