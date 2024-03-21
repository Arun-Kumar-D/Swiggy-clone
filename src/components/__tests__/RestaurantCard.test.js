import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../../../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"

it("should load the restaurant card component", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name = screen.getByText("McDonald's");
    expect(name).toBeInTheDocument();
})