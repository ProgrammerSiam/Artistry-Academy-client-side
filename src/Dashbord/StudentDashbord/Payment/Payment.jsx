// import { loadStripe } from "@stripe/stripe-js";
// import { useLocation } from "react-router-dom";
// import { Elements } from "@stripe/react-stripe-js";
// import Payment_Checkout from "../Payment_Checkout.jsx/Payment_Checkout";

// const stripePromise = loadStripe(
//   "pk_test_51NJL7vC2BzErLsULJDD1MlkBDDPVER7Njpylt8AohnvYoOudSMVflfucHNzvZSRExXJa7rkpAzVvpJPdSKk4y51l00mP32AQcI"
// );

// const Payment = () => {
//   const Payment_Course = useLocation();
//   const course = Payment_Course.state;
//   const price = course.price;
//   console.log(course);
//   console.log(price);
//   return (
//     <div>
//       <Elements stripe={stripePromise}>
//         <Payment_Checkout price={price} course={course}></Payment_Checkout>{" "}
//       </Elements>
//     </div>
//   );
// };

// export default Payment;

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Payment_Checkout from "../Payment_Checkout.jsx/Payment_Checkout";

// const stripePromise = loadStripe('pk_test_51NEy6ASIXNBUrzfX7pPSRfKIj7A182QxAJS4ndR91LrtMpi56bSab0s1rl1Igg5cqKRDwNQHoNN5XUwMBhEQ2EiG00Ja6qoUiQ')

const stripePromise = loadStripe(
  "pk_test_51NJL7vC2BzErLsULJDD1MlkBDDPVER7Njpylt8AohnvYoOudSMVflfucHNzvZSRExXJa7rkpAzVvpJPdSKk4y51l00mP32AQcI"
);
const Payment = () => {
  const Payment_Course = useLocation();
  const course = Payment_Course.state;
  const price = course.price;
  console.log(course);
  console.log(price);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Payment_Checkout price={price} course={course}>
          {" "}
        </Payment_Checkout>
      </Elements>
    </div>
  );
};

export default Payment;
