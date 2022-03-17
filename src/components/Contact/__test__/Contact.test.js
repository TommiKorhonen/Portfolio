import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../Contact";

const typeIntoFrom = ({ name, email, message }) => {
  const nameInputElement = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInputElement = screen.getByLabelText(/e-mail/i);
  const messageInputElement = screen.getByLabelText(/message/i);
  if (name) {
    userEvent.type(nameInputElement, name);
  }
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (message) {
    userEvent.type(messageInputElement, message);
  }
  return {
    nameInputElement,
    emailInputElement,
    messageInputElement,
  };
};

const formSubmit = () => {
  const submitBtnElement = screen.getByRole("button");
  userEvent.click(submitBtnElement);
};

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Contact />);
});

describe("Contact", () => {
  test("inputs should be initially empty", () => {
    expect(screen.getByLabelText(/name/i).value).toBe("");
    expect(screen.getByLabelText(/e-mail/i).value).toBe("");
    expect(screen.getByLabelText(/message/i).value).toBe("");
  });
  test("should be able to type name", () => {
    const { nameInputElement } = typeIntoFrom({ name: "Tomppa" });
    expect(nameInputElement.value).toBe("Tomppa");
  });
  test("should be able to type an email", () => {
    const { emailInputElement } = typeIntoFrom({ email: "Test@gmail.com" });
    expect(emailInputElement.value).toBe("Test@gmail.com");
  });
  test("should be able to type message", () => {
    const { messageInputElement } = typeIntoFrom({ message: "Hyvää päivää" });
    expect(messageInputElement.value).toBe("Hyvää päivää");
  });
  describe("Error handling", () => {
    test("should show name error if there is no name", () => {
      expect(screen.queryByText(/name is required./i)).not.toBeInTheDocument();

      formSubmit();

      expect(
        // eslint-disable-next-line testing-library/prefer-presence-queries
        screen.queryByText(/name is required./i)
      ).toBeInTheDocument();
    });
    test("should show e-mail error if there is no e-mail", () => {
      expect(
        screen.queryByText(/E-mail is required./i)
      ).not.toBeInTheDocument();

      formSubmit();

      expect(
        // eslint-disable-next-line testing-library/prefer-presence-queries
        screen.queryByText(/E-mail is required./i)
      ).toBeInTheDocument();
    });
    test("should show message error if there is no message", () => {
      expect(
        screen.queryByText(/Message is required./i)
      ).not.toBeInTheDocument();

      formSubmit();

      expect(
        // eslint-disable-next-line testing-library/prefer-presence-queries
        screen.queryByText(/Message is required./i)
      ).toBeInTheDocument();
    });
  });
  test("should show no error if every input is valid", () => {
    typeIntoFrom({
      name: "Tomppa",
      email: "Test@gmail.com",
      message: "Hyvää päivää",
    });

    formSubmit();

    expect(screen.queryByText(/name is required./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/E-mail is required./i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Message is required./i)).not.toBeInTheDocument();
    expect(
      // eslint-disable-next-line testing-library/prefer-presence-queries
      screen.queryByText(
        /I appreciate you contacting me. I will get back in touch with you soon!Have a great day!/i
      )
    ).toBeInTheDocument();
  });
});
