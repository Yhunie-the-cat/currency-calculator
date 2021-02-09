import { SET_SECONDARY_CURRENCY } from "../constants";

interface Secondary {
   type: string;
   payload: string;
}

const secondaryReducer = (state: string = "", action: Secondary) => {
   switch (action.type) {
      case SET_SECONDARY_CURRENCY:
         return action.payload;
      default:
         return state;
   }
};
export default secondaryReducer;
