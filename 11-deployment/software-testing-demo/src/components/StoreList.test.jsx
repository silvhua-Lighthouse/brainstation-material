import "@testing-library/jest-dom"; //import at the top of every test file
import { render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// import components that will be tested
import StoreList from "./StoreList";

const mockFn = () => {};

const mockStores = [
    { id: 1234, address: "123 Address" },
    { id: 223423, address: "123 Address" },
    { id: 31231234, address: "123 Address" },
  ];

it("should render a button", () => {
    render(<StoreList stores={[]} sale={true} loadData = {mockFn} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
});

it("should call loadData when button is clicked", async () => {
    const mockLoadData = vi.fn();
    render(<StoreList stores={[]} sale={true} loadData = {mockLoadData} />);

    //simulate user click
    await userEvent.click(screen.getByRole('button'));
    expect(mockLoadData).toBeCalled();
});

it("should apply a class of sale based on the sale prop", () => {
   const { container } = render(<StoreList stores={[]} sale={true} loadData = {mockFn} />);

   const hasSaleClassApplied = container.firstChild.classList.contains('sale');
   expect(hasSaleClassApplied).toBe(true);
});

it("should not apply a class of sale based on sale prop", () => {
    const { container } = render(<StoreList stores={[]} sale={false} loadData = {mockFn} />);
    
    const hasSaleClassApplied = container.firstChild.classList.contains('sale');
    expect(hasSaleClassApplied).toBe(false);
});

it("should render a list of StoreCards based on the stores prop", () => {
    render(<StoreList stores={mockStores} sale={true} loadData = {mockFn} />);

    const storesList = screen.getAllByText("123 Address");
    expect(storesList.length).toEqual(mockStores.length);
});

it("matches the snapshot", () => {
    const snapshot = render(<StoreList stores={mockStores} sale={true} loadData = {mockFn} />);
    expect(snapshot).toMatchSnapshot();
});