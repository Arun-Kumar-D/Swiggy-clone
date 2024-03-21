import { fireEvent,screen,render } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../../../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});



it("should render the body component with search", async ()=>{

    await act(async () => render(<BrowserRouter><Provider store={appStore}><Body /></Provider></BrowserRouter>))

    const searchBtn = screen.getByRole("button", { name: "Search" })

    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, { target: { value: "Burger" } })
    fireEvent.click(searchBtn)
    const resCardLength = screen.getAllByTestId("resCard")
    console.log(screen.getAllByTestId("resCard"))

    expect(resCardLength).toBe(2)
}) ;