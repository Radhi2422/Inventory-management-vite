const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    color: {
      type: String,
      trim: true,
    },
    size: {
      type: String,
      trim: true,
    },
    sku: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      min: 0,
    },
    stock: {
      type: Number,
      min: 0,
      default: 0,
    },
  },
  { _id: false }
);

const specificationSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      trim: true,
    },
    value: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    // =========================
    // BASIC
    // =========================
    productName: {
      type: String,
      required: true,
      trim: true,
    },

    sku: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    barcode: {
      type: String,
      trim: true,
    },

    brand: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      trim: true,
    },

    subCategory: {
      type: String,
      trim: true,
    },

    shortDescription: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    // =========================
    // PRICING
    // =========================
    mrp: {
      type: Number,
      min: 0,
    },

    sellingPrice: {
      type: Number,
      min: 0,
    },

    costPrice: {
      type: Number,
      min: 0,
    },

    discountType: {
      type: String,
      enum: ["percentage", "fixed", "none"],
      default: "none",
    },

    discountValue: {
      type: Number,
      min: 0,
      default: 0,
    },

    tax: {
      type: Number,
      min: 0,
      default: 0,
    },

    currency: {
      type: String,
      default: "INR",
      trim: true,
    },

    // =========================
    // INVENTORY
    // =========================
    stockQuantity: {
      type: Number,
      min: 0,
      default: 0,
    },

    minStock: {
      type: Number,
      min: 0,
      default: 0,
    },

    maxStock: {
      type: Number,
      min: 0,
    },

    reorderLevel: {
      type: Number,
      min: 0,
      default: 0,
    },

    warehouse: {
      type: String,
      trim: true,
    },

    unit: {
      type: String,
      trim: true,
    },

    // =========================
    // VARIANTS
    // =========================
    variants: {
      type: [variantSchema],
      default: [],
    },

    // =========================
    // SPECIFICATIONS
    // =========================
    specifications: {
      type: [specificationSchema],
      default: [],
    },

    // =========================
    // SHIPPING
    // =========================
    weight: {
      type: Number,
      min: 0,
    },

    length: {
      type: Number,
      min: 0,
    },

    width: {
      type: Number,
      min: 0,
    },

    height: {
      type: Number,
      min: 0,
    },

    shippingClass: {
      type: String,
      trim: true,
    },

    // =========================
    // SEO
    // =========================
    slug: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
    },

    metaTitle: {
      type: String,
      trim: true,
    },

    metaDescription: {
      type: String,
      trim: true,
    },

    keywords: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "Product2xyz",
  }
);

module.exports = mongoose.model("Product", productSchema);