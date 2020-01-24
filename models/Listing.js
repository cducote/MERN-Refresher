const mongoose = require('mongoose')

const listingModel = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // listing_url: String,
    // summary: String,
    // space: String,
    // description: String,
    // neighborhood_overview: String,
    // notes: String,
    // transit: String,
    // access: String,
    // interaction: String,
    // house_rules: String,
    // property_type: String,
    // bed_type: String,
    // minimum_nights: String,
    // maximum_nights: String,
    // cancellation_policy: String,
    // accommodates: Number,
    // bedrooms: Number,
    // beds: Number,
    // bathrooms: Number,
    // price: Number,
    // security_deposit: Number
},
// SPECIFY COLLECTION
{ 
    collection: 'listingsAndReviews'
})

module.exports = mongoose.model('Listing', listingModel)