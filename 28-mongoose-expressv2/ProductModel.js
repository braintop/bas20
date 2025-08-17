var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String, required: [true, 'title required'],
            unique: true,
            trim: true
        },
        description: {
            type: String,
            minlength: [20, 'min 20'],
            maxlength: [1000, 'max 1000']
        },
        price:
        {
            type: Number,
            required: true,
            min: 0, max: 10000
        }
    },
    {
        timestamps: true,
        strict: true,
        versionKey: false,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
              ret.id = ret._id;      // להשאיר רק id אחד
              delete ret._id;
              return ret;
            }
          },
        
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);
ProductSchema.query.minPrice = function(min){
   
   
    return this.where({ price: { $gte: min } });
};
ProductSchema.query.maxPrice = function(max){
    return this.where({ price: { $lte: max } });
};
ProductSchema.methods.applyDiscount = function (percent) {
    this.price = this.price * (1 - percent / 100);
    return this.save();
  };
  
const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
