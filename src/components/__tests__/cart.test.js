import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { Provider, useDispatch } from "react-redux";
import appStore from "../../utils/appStore";
import { addItem } from "../../utils/cartSlice";

test("should load the image ", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const image = screen.getByAltText("empty cart");

  expect(image).toBeInTheDocument();
});

test("should have the message when cart is empty ", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );
  const text = screen.getByText(
    "Your Cart is empty, Good food is always being cooked and will be served hot by FastFeast. So, what are you waiting for, go order now."
  );

  expect(text).toBeInTheDocument();
});
