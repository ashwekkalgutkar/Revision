const mongoose=require('mongoose');
const{Schema}=mongoose;
const ObjectId=Schema.Types.ObjectId;


const Con_string=mongoose.connect(`mongodb+srv://Ashwek:test@mongodb.3krsdlp.mongodb.net/Food_app`);
const userSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    address:{
        type:Object,
        properties:{
            street:{type:String, required:true},
            city:{type:String, required:true},
            state:{type:String, required:true},
            country:{type:String, required:true},
            zip:{type:String, required:true},
        }
    }
})

const User=mongoose.model("User",userSchema);


const restaurantSchema=mongoose.Schema({
    name:{type:String, required:true},
    address:{
        type:Object,
        properties:{
            street:{type:String, required:true},
            city:{type:String, required:true},
            state:{type:String, required:true},
            country:{type:String, required:true},
            zip:{type:String, required:true},
        }
    },
    menu:{type:Array,
        properties:{
            name:{type:String, required:true},
            description:{type:String, required:true},
            price:{type:Number, required:true},
            image:{type:String, required:true},
        }
    }
})

const Restaurant=mongoose.model("Restaurant",restaurantSchema);


const orderSchema=mongoose.Schema({
    user : { type: ObjectId, ref: 'User' },
    restaurant : { type: ObjectId, ref: 'Restaurant' },
    items:{type:Array,
        properties:{
            name:{type:String, required:true},
            price:{type:Number, required:true},
            quantity:{type:Number, required:true},
        }
    },
    totalPrice:{type:Number, required:true},
    deliveryAddress:{
        type:Object,
        properties:{
            street:{type:String, required:true},
            city:{type:String, required:true},
            state:{type:String, required:true},
            country:{type:String, required:true},
            zip:{type:String, required:true},
        }
    },
    status:{type:String, required:true}
})

const Order=mongoose.model("Order",orderSchema);

module.exports={Con_string, User, Restaurant, Order};
