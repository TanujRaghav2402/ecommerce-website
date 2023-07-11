import React from "react"

export const Image=(props)=>{
    switch(props.id){
        case "thapaserialnoa":
            return props.url("https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnob":
            return props.url("https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnoc":
            return props.url("https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnod":
            return props.url("https://images.pexels.com/photos/4224099/pexels-photo-4224099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnoe":
            return props.url("https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnof":
            return props.url("https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnog":
            return props.url("https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnoh":
            return props.url("https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnoi":
            return props.url("https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;   
        case "thapaserialnoj":
            return props.url("https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnok":
            return props.url("https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        case "thapaserialnol":
            return props.url("https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
            break;
        default:
            return("");
            break;
    } 
}
