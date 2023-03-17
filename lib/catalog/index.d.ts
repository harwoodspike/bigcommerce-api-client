import { ApiClient } from "../api-client";
import { ImageApi } from "../image";
import { MetafieldApi } from "../metafield";
import { BrandApi } from "./brand-api";
import { CategoryApi } from "./category-api";
import { CategoryBatchApi } from "./category-batch-api";
import { CategoryTreeApi } from "./category-tree-api";
import { ProductApi } from "./product-api";
import { ProductBuckPricingRuleApi } from "./product-buck-pricing-rule-api";
import { ProductCategoryAssignmentApi } from "./product-category-assignment-api";
import { ProductChannelAssignmentApi } from "./product-channel-assignment-api";
import { ProductComplexRuleApi } from "./product-complex-rule-api";
import { ProductCustomFieldApi } from "./product-custom-field-api";
import { ProductModifierApi } from "./product-modifier-api";
import { ProductModifierImageApi } from "./product-modifier-image-api";
import { ProductModifierValueApi } from "./product-modifier-value-api";
import { ProductReviewApi } from "./product-review-api";
import { ProductSortOrderApi } from "./product-sort-order-api";
import { ProductVariantApi } from "./product-variant-api";
import { ProductVariantMetafieldApi } from "./product-variant-metafield-api";
import { ProductVariantOptionApi } from "./product-variant-option-api";
import { ProductVariantOptionValueApi } from "./product-variant-option-value-api";
import { ProductVideoApi } from "./product-video-api";
import { SummaryApi } from "./summary-api";
import { VariantApi } from "./variant-api";
export declare class CatalogApi {
    private readonly apiClient;
    constructor(apiClient: ApiClient);
    readonly brandImages: ImageApi;
    readonly brandMetafields: MetafieldApi;
    readonly brands: BrandApi;
    readonly categoriesBatch: CategoryBatchApi;
    readonly category: CategoryApi;
    readonly categoryMetafields: MetafieldApi;
    readonly categoryImages: ImageApi;
    readonly categoryTrees: CategoryTreeApi;
    readonly productBuckPricingRules: ProductBuckPricingRuleApi;
    readonly productComplexRules: ProductComplexRuleApi;
    readonly productCustomFields: ProductCustomFieldApi;
    readonly productMetafields: MetafieldApi;
    readonly ProductModifierImages: ProductModifierImageApi;
    readonly ProductModifierValues: ProductModifierValueApi;
    readonly productModifiers: ProductModifierApi;
    readonly productReviews: ProductReviewApi;
    readonly productSortOrder: ProductSortOrderApi;
    readonly productVariantOptionValues: ProductVariantOptionValueApi;
    readonly productVariantOptions: ProductVariantOptionApi;
    readonly productVariants: ProductVariantApi;
    readonly productVariantMetafields: ProductVariantMetafieldApi;
    readonly productVideos: ProductVideoApi;
    readonly products: ProductApi;
    readonly productCategoryAssignments: ProductCategoryAssignmentApi;
    readonly productChannelAssignments: ProductChannelAssignmentApi;
    readonly summary: SummaryApi;
    readonly variants: VariantApi;
}
