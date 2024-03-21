import { fireEvent, render, screen } from "@testing-library/react"
import { Provider,useSelector } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"

it("should render header component", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});

