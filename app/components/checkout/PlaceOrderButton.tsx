"use client";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useCheckoutSettings } from "../../context/CheckoutContext";
import { useLocalization } from "../../context/LocalizationContext";
import { useState } from "react";
import { clearCart } from "../../store/slices/cartSlice";
import { useRouter } from "next/navigation";

export default function PlaceOrderButton() {
  const dispatch = useAppDispatch();
  const { labels } = useLocalization();
  const { shippingMethods } = useCheckoutSettings();
  const router = useRouter();

  const cartItems = useAppSelector((state) => state.cart.items);
  const shippingForm = useAppSelector((state) => state.checkout.shippingForm);
  const shippingMethodId = useAppSelector((state) => state.checkout.shippingMethodId);
  const paymentMethodId = useAppSelector((state) => state.checkout.paymentMethodId);
  const orderId = useAppSelector((state) => state.checkout.orderId);
  const orderDate = useAppSelector((state) => state.checkout.orderDate);

  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const missingFields: string[] = [];

    if (!shippingForm.firstName?.trim()) missingFields.push("Shipping First Name");
    if (!shippingForm.lastName?.trim()) missingFields.push("Shipping Last Name");
    if (!shippingForm.country?.trim()) missingFields.push("Shipping Country");
    if (!shippingForm.address1?.trim()) missingFields.push("Shipping Address");
    if (!shippingForm.postalCode?.trim()) missingFields.push("Shipping Postal Code");
    if (!shippingForm.phone?.trim()) missingFields.push("Shipping Phone");
    if (!shippingForm.email?.trim()) missingFields.push("Shipping Email");

    if (!shippingMethodId?.trim()) missingFields.push("Shipping Method");

    if (missingFields.length > 0) {
      setErrorMsg(`Please complete the following fields: ${missingFields.join(", ")}`);
      return false;
    }

    setErrorMsg("");
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;

    setIsLoading(true);

    const shippingMethod = shippingMethods.find((s) => s.id === shippingMethodId);
    const orderData = {
      orderId,
      orderDate,
      cartItems,
      shippingForm,
      shippingMethod,
      paymentMethodId,
    };

    try {
       localStorage.setItem("recentOrder", JSON.stringify(orderData));
      dispatch(clearCart());
      router.push("/");
    } catch (err) {
      const error = err as Error;
      setErrorMsg(error.message || "Something went wrong while placing the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handlePlaceOrder}
        className={`w-full text-white font-semibold py-3 px-4 rounded-md transition
          ${isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700"}`}
        disabled={isLoading}
      >
        {isLoading
          ? labels.placingOrder || "Placing Order..."
          : labels.placeOrder || "Place Order"}
      </button>
      {errorMsg && <p className="text-red-600 mt-2 text-sm">{errorMsg}</p>}
    </div>
  );
}
