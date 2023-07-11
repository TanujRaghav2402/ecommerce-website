const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
        };
      case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        
        return {
          ...state,
          sorting_value:sort_value,
        };
      
      case "SORTING_PRODUCT":
        let newSortData;
        let temSortData=[...action.payload];

        if(state.sorting_value === "lowest"){
          newSortData = temSortData.sort((a,b)=>{
            return a.price-b.price;   
          })
        }
        if(state.sorting_value === "a-z"){
          newSortData = temSortData.sort((a,b)=>{
            return a.name.localeCompare(b.name);
          })
        }
        if(state.sorting_value === "z-a"){
          newSortData = temSortData.sort((a,b)=>{
            return b.name.localeCompare(a.name);
          })
        }
        
        if(state.sorting_value === "highest"){
          newSortData = temSortData.sort((a,b)=>{
            return b.price-a.price;   
          })
        }

        return{
          ...state,
          filter_products:newSortData,
        }

      default:
        return state;
    }
  };
  
  export default filterReducer;